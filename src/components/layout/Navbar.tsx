import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { role } from "@/constants/role";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Link } from "react-router";
import { Menu } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/services", label: "Service", role: "PUBLIC" },
  { href: "/track-parcel", label: "Track Parcel", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/sender", label: "Dashboard", role: role.sender },
  { href: "/receiver", label: "Dashboard", role: role.receiver },
];

export default function Navbar() {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const userRole = data?.data?.role;
  const email = data?.data?.email;

  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined).unwrap();
    dispatch(authApi.util.resetApiState());
  };

  const filteredLinks = navigationLinks.filter(
    (link) => link.role === "PUBLIC" || link.role === userRole
  );

  return (
    <header className="border-b fixed top-0 w-full z-50 bg-[rgba(0,0,0,0.86)] backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 ">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-4">
              {filteredLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    <Link to={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {email && (
            <span className="hidden md:block text-sm text-muted-foreground">
              {email}
            </span>
          )}

          {isLoading ? (
            <span className="text-sm">Loading...</span>
          ) : email ? (
            <Button size="sm" variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm">Log in</Button>
            </Link>
          )}

          {/* Mobile Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-6">
                {email && (
                  <div className="text-sm text-muted-foreground border-b pb-2">
                    {email}
                  </div>
                )}

                {filteredLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 border-t">
                  {email ? (
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button className="w-full">Log in</Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
