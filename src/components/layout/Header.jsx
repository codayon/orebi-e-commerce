import { ImCross } from "react-icons/im";
import { NavLink } from "react-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaUser,
  FaBars,
  FaSearch,
  FaCaretUp,
  FaCaretDown,
  FaShoppingCart,
} from "react-icons/fa";

import Flex from "../common/Flex";
import Button from "../common/Button";
import MenuItem from "../common/MenuItem";
import Container from "../common/Container";
import DropdownItem from "../common/DropdownItem";
import ImageWrapper from "../common/ImageWrapper";
import { BarsIcon, HeaderOrebiLogo } from "../common/SvgAssets";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  selectCartItems,
  selectCartSubtotal,
  selectCartTotal,
} from "@/features/cartSlice";

const data = {
  menus: [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "shop", label: "Shop" },
    { id: 3, to: "about", label: "About" },
    { id: 4, to: "contacts", label: "Contacts" },
    { id: 5, to: "journal", label: "Journal" },
  ],
  categories: [
    { id: 1, to: "shop", label: "Accessories" },
    { id: 2, to: "shop", label: "Furniture" },
    { id: 3, to: "shop", label: "Electronics" },
    { id: 4, to: "shop", label: "Clothes" },
    { id: 5, to: "shop", label: "Bags" },
    { id: 6, to: "shop", label: "Home appliances" },
  ],
  accounts: [
    { id: 1, to: "/", label: "My Account" },
    { id: 2, to: "/", label: "Sign In" },
    { id: 3, to: "/", label: "Sign Up" },
  ],
};

export default function Header() {
  const [overlays, setOverlays] = useState({
    category: false,
    user: false,
    cart: false,
    smallScreen: false,
    smallScreenCart: false,
  });

  const handleOverlays = (name) => {
    setOverlays((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const [accordion, setAccordion] = useState({
    menus: false,
    categories: false,
    accounts: false,
  });

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const total = useSelector(selectCartTotal);

  return (
    <header className="md:bg-white bg-porcelain sticky top-0 left-0 z-50">
      <section className="py-5 md:py-2 relative">
        <Container>
          <Flex className="justify-between">
            <HeaderOrebiLogo />

            <Flex className="gap-4 md:hidden">
              <div onClick={() => handleOverlays("smallScreenCart")}>
                <FaShoppingCart />
              </div>
              <div onClick={() => handleOverlays("smallScreen")}>
                {overlays.smallScreen ? <ImCross /> : <FaBars />}
              </div>
            </Flex>
            {overlays.smallScreenCart && (
              <div className="absolute md:hidden w-full top-12 left-0 bg-porcelain h-[95vh] overflow-y-auto">
                <Container>
                  <div className="py-5">
                    {cartItems.length === 0 ? (
                      <div className="py-10 text-center">
                        <p>No items in cart</p>
                      </div>
                    ) : (
                      <>
                        {cartItems.map((item) => (
                          <Flex
                            key={item.id}
                            className="justify-between py-1"
                          >
                            <div className="w-32 font-bold">
                              <h4 className="truncate">{item.title}</h4>
                              <h4>${item.price}</h4>
                            </div>

                            <Flex className="text-graphite px-3 py-1.5 gap-2 border text-center">
                              <button
                                className="cursor-pointer"
                                onClick={() =>
                                  dispatch(decrementQuantity(item.id))
                                }
                              >
                                -
                              </button>

                              <span className="w-6 select-none">
                                {item.quantity}
                              </span>

                              <button
                                className="cursor-pointer"
                                onClick={() =>
                                  dispatch(incrementQuantity(item.id))
                                }
                              >
                                +
                              </button>
                            </Flex>

                            <ImCross
                              className="text-firebrick cursor-pointer"
                              onClick={() => dispatch(removeFromCart(item.id))}
                            />
                          </Flex>
                        ))}

                        <div className="pb-10">
                          <div className="flex flex-col gap-2 pb-5">
                            <Flex className="justify-between">
                              <h4 className="">Subtotal</h4>
                              <h4 className="font-bold">
                                ${subtotal.toFixed(2)}
                              </h4>
                            </Flex>

                            <Flex className="justify-between">
                              <h4 className="">Discount</h4>
                              <h4 className="font-bold">
                                ${(subtotal - total).toFixed(2)}
                              </h4>
                            </Flex>

                            <Flex className="justify-between">
                              <h4 className="">Total</h4>
                              <h4 className="font-bold">${total.toFixed(2)}</h4>
                            </Flex>
                          </div>

                          <Flex className="justify-between">
                            <Button
                              className="text-onyx border-onyx bg-transparent py-4 px-8"
                              label="View Cart"
                            />
                            <Button
                              className="border-transparent py-4 px-8"
                              label="Checkout"
                            />
                          </Flex>
                        </div>
                      </>
                    )}
                  </div>
                </Container>
              </div>
            )}

            {overlays.smallScreen && (
              <div className="absolute md:hidden w-full top-12 left-0 bg-porcelain h-[95vh]">
                <Container>
                  <Flex className="my-4 relative">
                    <input
                      type="text"
                      placeholder="Search Products"
                      className="bg-white placeholder-silvermist p-2.5 w-full outline-0"
                    />
                    <FaSearch className="text-black absolute right-2" />
                  </Flex>

                  <div className="flex flex-col gap-2">
                    <div>
                      <Flex
                        className="justify-between mb-2 cursor-pointer"
                        onClick={() =>
                          setAccordion((prev) => ({
                            ...prev,
                            menus: !prev.menus,
                          }))
                        }
                      >
                        <h4 className="font-bold text-lg">Pages</h4>
                        {accordion.menus ? <FaCaretDown /> : <FaCaretUp />}
                      </Flex>
                      {accordion.menus && (
                        <div>
                          <ul className="flex flex-col gap-1">
                            {data.menus.map((menu) => (
                              <MenuItem
                                key={menu.id}
                                to={menu.to}
                                label={menu.label}
                              />
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <Flex
                        className="justify-between mb-2 cursor-pointer"
                        onClick={() =>
                          setAccordion((prev) => ({
                            ...prev,
                            categories: !prev.categories,
                          }))
                        }
                      >
                        <h4 className="font-bold text-lg">Categories</h4>
                        {accordion.categories ? <FaCaretDown /> : <FaCaretUp />}
                      </Flex>
                      {accordion.categories && (
                        <div>
                          <ul className="flex flex-col gap-1">
                            {data.categories.map((category) => (
                              <MenuItem
                                key={category.id}
                                to={category.to}
                                label={category.label}
                              />
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <Flex
                        className="justify-between mb-2 cursor-pointer"
                        onClick={() =>
                          setAccordion((prev) => ({
                            ...prev,
                            accounts: !prev.accounts,
                          }))
                        }
                      >
                        <h4 className="font-bold text-lg">Accounts</h4>
                        {accordion.accounts ? <FaCaretDown /> : <FaCaretUp />}
                      </Flex>
                      {accordion.accounts && (
                        <div>
                          <ul className="flex flex-col gap-1">
                            {data.accounts.map((account) => (
                              <MenuItem
                                key={account.id}
                                to={account.to}
                                label={account.label}
                              />
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </Container>
              </div>
            )}

            <ul className="hidden md:flex md:items-center md:justify-between md:w-sm">
              {data.menus.map((menu) => (
                <li
                  key={menu.id}
                  className="font-medium transition-all duration-200 select-none text-center"
                >
                  <NavLink
                    to={menu.to}
                    className={({ isActive }) =>
                      isActive ? "text-onyx" : "text-graphite hover:text-onyx"
                    }
                  >
                    {menu.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <ul className="hidden md:flex items-center">
              <MenuItem
                label="EN"
                className="text-black inline-block font-bold w-8"
              />
              <MenuItem
                label="RU"
                className="w-8 inline-block"
              />
            </ul>
          </Flex>
        </Container>
      </section>

      <section className="bg-porcelain hidden md:block py-4">
        <Container>
          <Flex className="justify-between relative">
            <Flex
              className="gap-3 cursor-pointer"
              onClick={() => handleOverlays("category")}
            >
              <BarsIcon />
              <p className="text-onyx select-none">Shop by Category</p>
            </Flex>

            <div
              className={`absolute z-10 top-14 left-0 min-w-60 select-none ${
                overlays.category
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              {data.categories.map((category) => (
                <DropdownItem
                  key={category.id}
                  label={category.label}
                  labelClass="hover:translate-x-2.5"
                />
              ))}
            </div>

            <Flex>
              <input
                type="text"
                placeholder="Search Products"
                className="bg-white placeholder-silvermist py-2 pl-4 pr-12 outline-0 w-lg"
              />
              <FaSearch className="-translate-x-8 cursor-pointer" />
            </Flex>

            <Flex className="gap-10">
              <Flex
                className="gap-2 cursor-pointer"
                onClick={() => handleOverlays("user")}
              >
                <FaUser />
                <FaCaretDown />
              </Flex>

              <div
                className={`absolute z-20 top-14 right-14 min-w-40 text-center ${
                  overlays.user ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <DropdownItem label="My Account" />
                <DropdownItem label="Sign Out" />
              </div>

              <FaShoppingCart
                className="cursor-pointer"
                onClick={() => handleOverlays("cart")}
              />
              <div
                className={`absolute z-10 min-w-xl max-h-[80vh] top-14 right-0 overflow-y-auto ${
                  overlays.cart ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="bg-onyx px-5">
                  {cartItems.length === 0 ? (
                    <div className="text-white py-10 text-center">
                      <p>No items in cart</p>
                    </div>
                  ) : (
                    <>
                      {cartItems.map((item) => (
                        <Flex
                          className="border-ash justify-between gap-6 py-5 border-b-2"
                          key={item.id}
                        >
                          {item.thumbnail ? (
                            <ImageWrapper
                              src={item.thumbnail}
                              alt={item.title}
                              className="bg-cloud w-20 h-20 aspect-square"
                            />
                          ) : (
                            <div className="bg-cloud w-20 h-20"></div>
                          )}

                          <div className="text-white flex flex-col gap-3 font-bold">
                            <h4 className="w-52 truncate cursor-pointer">
                              {item.title}
                            </h4>
                            <h4>${item.price.toFixed(2)}</h4>
                          </div>

                          <Flex className="text-white px-4 py-2 gap-4 border text-center">
                            <button
                              className="cursor-pointer"
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                            >
                              -
                            </button>

                            <span className="w-6 select-none">
                              {item.quantity}
                            </span>

                            <button
                              className="cursor-pointer"
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                            >
                              +
                            </button>
                          </Flex>
                          <ImCross
                            className="text-white cursor-pointer"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          />
                        </Flex>
                      ))}

                      <div className="py-5">
                        <div className="flex flex-col gap-2 pb-5">
                          <Flex className="justify-between">
                            <h4 className="text-mist">Subtotal</h4>
                            <h4 className="text-white font-bold">
                              ${subtotal.toFixed(2)}
                            </h4>
                          </Flex>

                          <Flex className="justify-between">
                            <h4 className="text-mist">Discount</h4>
                            <h4 className="text-white font-bold">
                              ${(subtotal - total).toFixed(2)}
                            </h4>
                          </Flex>

                          <Flex className="justify-between">
                            <h4 className="text-mist">Total</h4>
                            <h4 className="text-white font-bold">
                              ${total.toFixed(2)}
                            </h4>
                          </Flex>
                        </div>

                        <Flex className="justify-between">
                          <Button
                            className="text-white border-white px-18 py-4"
                            label="View Cart"
                          />
                          <Button
                            className="bg-white text-onyx px-18 border-transparent"
                            label="Checkout"
                          />
                        </Flex>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Flex>
          </Flex>
        </Container>
      </section>
    </header>
  );
}
