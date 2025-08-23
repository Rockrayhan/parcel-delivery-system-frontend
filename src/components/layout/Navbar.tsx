import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-6 py-2">
          <Link to="/" className="text-primary hover:text-primary/90">
            <Logo />
          </Link>

          <NavigationMenu className="h-full *:h-full max-md:hidden">
            <NavigationMenuList className="h-full gap-2">
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to="/signup"> LogOut </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
