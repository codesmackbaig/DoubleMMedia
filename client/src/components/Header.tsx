import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  const services = [
    { label: "Web Development", href: "/web-development" },
    { label: "Web Design", href: "/web-design" },
    { label: "AI Product Photography", href: "/ai-photography" },
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "SmartCommerce Management", href: "/smartcommerce" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/90 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-display font-bold" data-testid="link-logo">
            <span className="text-foreground">Double M </span>
            <span className="text-primary">Media</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
                location === "/" ? "text-primary" : ""
              }`}
              data-testid="link-nav-home"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors flex items-center gap-1"
                data-testid="button-services-dropdown"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2">
                  <Link
                    href="/services"
                    className="block px-4 py-3 rounded-md hover-elevate active-elevate-2 text-sm font-semibold border-b border-border mb-1"
                    onClick={() => setServicesOpen(false)}
                    data-testid="link-all-services"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 rounded-md hover-elevate active-elevate-2 text-sm"
                      onClick={() => setServicesOpen(false)}
                      data-testid={`link-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
                location === "/portfolio" ? "text-primary" : ""
              }`}
              data-testid="link-nav-portfolio"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
                location === "/about" ? "text-primary" : ""
              }`}
              data-testid="link-nav-about"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
                location === "/contact" ? "text-primary" : ""
              }`}
              data-testid="link-nav-contact"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle testId="button-theme-toggle-desktop" />
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle testId="button-theme-toggle-mobile" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/20 bg-background">
          <nav className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-home"
            >
              Home
            </Link>

            <div className="space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 rounded-md hover-elevate active-elevate-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-all-services"
              >
                Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block pl-6 pr-3 py-2 rounded-md hover-elevate active-elevate-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-portfolio"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-about"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover-elevate active-elevate-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-contact"
            >
              Contact
            </Link>

            <Link href="/contact" className="block">
              <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary" data-testid="button-mobile-get-started">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
