import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import AuthBtn from "./AuthBtn";
import LogoHeader from "./LogoHeader";

const handleScroll = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const links = [
  { label: "Home", href: "home" },
  { label: "Service", href: "clients" },
  { label: "Feature", href: "community" },
  { label: "Product", href: "members" },
  { label: "Testimonial", href: "marketing" },
  { label: "FAQ", href: "customer-review" },
];

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full">
        <div className="flex-row py-5 px-20  p-0 bg-green-200 justify-between hidden lg:flex">
          <LogoHeader />
          <div className="flex gap-14 text-lg font-semibold">
            {links.map(({ label, href }) => (
              <a
                key={href}
                onClick={() => handleScroll(href)}
                className="cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <AuthBtn />
          </div>
        </div>
        <div className="flex-row py-5 px-20 bg-green-200 justify-between  hidden md:flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu className="text-xl font-bold" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div>
                    <div className="flex flex-col gap-7 text-lg font-semibold">
                      {links.map(({ label, href }) => (
                        <a
                          key={href}
                          onClick={() => handleScroll(href)}
                          className="cursor-pointer hover:text-green-700"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <LogoHeader />
          <div className="flex gap-4">
            <AuthBtn />
          </div>
        </div>
        <div className="flex-row py-5 px-20 bg-green-200 justify-between flex md:hidden">
          <LogoHeader />
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu className="text-xl font-bold" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div>
                    <div className="flex flex-col gap-7 text-lg font-semibold">
                      {links.map(({ label, href }) => (
                        <a
                          key={href}
                          onClick={() => handleScroll(href)}
                          className="cursor-pointer hover:text-green-700"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                    <div className=" mt-4 w-20 flex flex-col mx-auto gap-3">
                      <AuthBtn />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
