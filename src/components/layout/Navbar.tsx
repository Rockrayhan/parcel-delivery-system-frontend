import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { role } from "@/constants/role";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Link, useLocation } from "react-router";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/sender", label: "Dashboard", role: role.sender },
  { href: "/receiver", label: "Dashboard", role: role.receiver },
];

export default function Navbar() {
  const { data, isLoading } = useUserInfoQuery(undefined);

  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const email = data?.data?.email;
  // console.log(email);

  // const handleLogout = async () => {
  //   await logout(undefined);
  //   dispatch(authApi.util.resetApiState());
  // };


  const handleLogout = async () => {
  try {
    await logout(undefined).unwrap(); // wait for API call
    dispatch(authApi.util.resetApiState()); // clear RTKQ cache
    // optional: redirect to home/login
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-6 py-2">
          <Link to="/" className="text-primary hover:text-primary/90">
            <Logo />
          </Link>

          <NavigationMenu className="h-full *:h-full max-md:hidden">
            {/* <NavigationMenuList className="h-full gap-2">
              {navigationLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <NavigationMenuItem key={index} className="h-full">
                    <NavigationMenuLink
                      asChild
                      className={`text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent ${
                        isActive ? "border-b-primary text-primary" : ""
                      }`}
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList> */}
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <>
                  {link.role == "PUBLIC" && (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        asChild
                      >
                        <Link to={link.href}> {link.label} </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                  {link.role == data?.data?.role && (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        asChild
                      >
                        <Link to={link.href}> {link.label} </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <small> {email} </small>

          {isLoading ? (
            <> Loading... </>
          ) : (
            <>
              {email ? (
                <Button
                  variant="destructive"
                  size="sm"
                  className="text-sm cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button variant="default">
                  <Link to="/login">Log In</Link>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
