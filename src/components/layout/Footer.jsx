import { useState } from "react";
import {
  FaCaretDown,
  FaCaretUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Container from "../common/Container";
import Flex from "../common/Flex";
import MenuItem from "../common/MenuItem";
import { FooterOrebiLogo } from "../common/SvgAssets";

const data = {
  menu: [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "shop", label: "Shop" },
    { id: 3, to: "about", label: "About" },
    { id: 4, to: "contacts", label: "Contacts" },
    { id: 5, to: "journal", label: "Journal" },
  ],
  help: [
    { id: 1, to: "/", label: "Privacy Policy" },
    { id: 2, to: "/", label: "Terms & Conditions" },
    { id: 3, to: "/", label: "Special E-shop" },
    { id: 4, to: "/", label: "Shipping" },
    { id: 5, to: "/", label: "Secure Payments" },
  ],
  shop: [
    { id: 1, to: "/", label: "Sale" },
    { id: 2, to: "/", label: "Kids" },
    { id: 3, to: "/", label: "Men" },
    { id: 4, to: "/", label: "Women" },
    { id: 5, to: "/", label: "Accesories" },
  ],
};

export default function Footer() {
  const [accordion, setAccordion] = useState({
    menu: false,
    help: false,
    shop: false,
  });

  const handleAccordion = (section) => {
    setAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer>
      <section className="bg-porcelain pt-2.5 md:py-12">
        <Container>
          <div className={"hidden md:flex flex-wrap gap-x-36"}>
            <div>
              <h4 className="text-onyx mb-4 font-bold">MENU</h4>
              <ul className="flex flex-col gap-2">
                {data.menu.map((item) => (
                  <MenuItem
                    key={item.id}
                    label={item.label}
                    to={item.to}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-onyx mb-4 font-bold">SHOP</h4>
              <ul className="flex flex-col gap-2">
                {data.shop.map((item) => (
                  <MenuItem
                    key={item.id}
                    label={item.label}
                    to={item.to}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-onyx mb-4 font-bold">HELP</h4>
              <ul className="flex flex-col gap-y-2">
                {data.help.map((item) => (
                  <MenuItem
                    key={item.id}
                    label={item.label}
                    to={item.to}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-onyx mb-4 font-bold w-28">
                (052) 611-5711 company@domain.com
              </h4>
              <p className="text-graphite">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <FooterOrebiLogo />
          </div>
          <div className="md:hidden">
            <div className="border-b-2 py-2">
              <Flex
                className="justify-between cursor-pointer"
                onClick={() => handleAccordion("menu")}
              >
                <h4 className="font-bold text-lg">Pages</h4>
                {accordion.menu ? <FaCaretDown /> : <FaCaretUp />}
              </Flex>

              {accordion.menu && (
                <ul className="flex flex-col gap-1">
                  {data.menu.map((item) => (
                    <MenuItem
                      key={item.id}
                      to={item.to}
                      label={item.label}
                    />
                  ))}
                </ul>
              )}
            </div>
            <div className="border-b-2 py-2">
              <Flex
                className="justify-between cursor-pointer"
                onClick={() => handleAccordion("shop")}
              >
                <h4 className="font-bold text-lg">Shop</h4>
                {accordion.shop ? <FaCaretDown /> : <FaCaretUp />}
              </Flex>

              {accordion.shop && (
                <ul className="flex flex-col gap-1">
                  {data.shop.map((item) => (
                    <MenuItem
                      key={item.id}
                      to={item.to}
                      label={item.label}
                    />
                  ))}
                </ul>
              )}
            </div>
            <div className="border-b-2 py-2">
              <Flex
                className="justify-between cursor-pointer"
                onClick={() => handleAccordion("help")}
              >
                <h4 className="font-bold text-lg">Help</h4>
                {accordion.help ? <FaCaretDown /> : <FaCaretUp />}
              </Flex>

              {accordion.help && (
                <ul className="flex flex-col gap-1">
                  {data.help.map((item) => (
                    <MenuItem
                      key={item.id}
                      to={item.to}
                      label={item.label}
                    />
                  ))}
                </ul>
              )}
            </div>
            <div className="py-3">
              <h4 className="mb-2 font-bold text-onyx w-[12rem]">
                (052) 611-5711 company@domain.com
              </h4>
              <p className="text-graphite text-sm">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-porcelain md:pb-14">
        <Container>
          <div className="hidden md:flex items-center justify-between">
            <Flex className="gap-6 text-lg">
              <FaFacebookF className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </Flex>
            <p className="text-graphite">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
          <div className="border-graphite md:hidden py-2.5 border-t">
            <p className="text-graphite">
              © 2025 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
            <Flex className="gap-6 pt-2">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </Flex>
          </div>
        </Container>
      </section>
    </footer>
  );
}
