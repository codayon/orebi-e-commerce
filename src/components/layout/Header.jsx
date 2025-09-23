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
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  selectCartItems,
  selectCartSubtotal,
  selectCartTotal,
} from "../../features/cartSlice";
import Container from "../common/Container";
import Flex from "../common/Flex";
import MenuItem from "../common/MenuItem";
import SvgWrapper from "../common/SvgWrapper";
import Button from "../common/Button";
import DropdownItem from "../common/DropdownItem";
import ImageWrapper from "../common/ImageWrapper";

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

const Header = () => {
  const [overlays, setOverlays] = useState({
    category: false,
    user: false,
    cart: false,
    smallScreen: false,
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
            <SvgWrapper>
              <svg
                width="66"
                height="16"
                viewBox="0 0 66 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2139 0.96582C10.1079 0.3219 8.82698 1.38485e-05 7.37109 0C5.90115 0 4.61655 0.32187 3.51758 0.96582C2.41857 1.60982 1.55757 2.50255 0.93457 3.64355C0.311632 4.78445 6.06768e-05 6.10374 0 7.60156C0 9.09957 0.311567 10.4195 0.93457 11.5605C1.55757 12.7015 2.41859 13.5943 3.51758 14.2383C4.61654 14.8822 5.90117 15.2041 7.37109 15.2041C8.82697 15.2041 10.1079 14.8822 11.2139 14.2383C12.3198 13.5943 13.1809 12.7015 13.7969 11.5605C14.4129 10.4195 14.7207 9.09957 14.7207 7.60156C14.7206 6.10374 14.4128 4.78445 13.7969 3.64355C13.1809 2.50255 12.3199 1.60982 11.2139 0.96582ZM25.3994 0.850586C24.6365 0.451619 23.6671 0.251977 22.4912 0.251953H17.0938V14.9521H19.7822V9.15625H22.0078L24.7383 14.9521H27.8252L24.7803 8.79883C25.7741 8.46282 26.5057 7.92357 26.9746 7.18164C27.4435 6.43972 27.6777 5.62049 27.6777 4.72461C27.6777 3.8989 27.4891 3.14658 27.1113 2.46777C26.7333 1.78877 26.1624 1.24959 25.3994 0.850586ZM32.8652 2.41504H39.7744V0.251953H30.1768V14.9521H39.7744V12.7891H32.8652V8.54688H39.1436V6.44727H32.8652V2.41504ZM51.7129 1.3125C50.9079 0.605496 49.7418 0.251953 48.2158 0.251953H42.3154V14.9521H48.4258C49.9657 14.9521 51.1561 14.5743 51.9961 13.8184C52.836 13.0624 53.2558 12.1032 53.2559 10.9414C53.2559 10.0594 52.9825 9.28512 52.4365 8.62012C51.8907 7.95549 51.198 7.53911 50.3584 7.37109C51.0723 7.17507 51.6779 6.79998 52.1748 6.24707C52.6715 5.69416 52.9199 4.95591 52.9199 4.03223C52.9199 2.92632 52.5177 2.01948 51.7129 1.3125ZM55.5664 14.9521H58.2539V0.251953H55.5664V14.9521ZM4.01074 3.80078C4.85075 2.87678 5.97109 2.41504 7.37109 2.41504C8.77105 2.41506 9.88772 2.87681 10.7207 3.80078C11.5536 4.7247 11.9697 5.99176 11.9697 7.60156C11.9697 9.21157 11.5537 10.4793 10.7207 11.4033C9.88772 12.3273 8.77102 12.789 7.37109 12.7891C5.97111 12.7891 4.85074 12.3273 4.01074 11.4033C3.17074 10.4793 2.75098 9.21157 2.75098 7.60156C2.75105 5.99177 3.17082 4.7247 4.01074 3.80078ZM48.0059 12.7676H45.0029V8.44238H47.9639C48.7479 8.44238 49.371 8.63827 49.833 9.03027C50.2949 9.42227 50.5264 9.96153 50.5264 10.6475C50.5263 11.3192 50.3052 11.841 49.8643 12.2119C49.4233 12.5827 48.8037 12.7676 48.0059 12.7676ZM22.3232 7.18164H19.7822V2.49902H22.3018C23.2258 2.49902 23.8946 2.7089 24.3076 3.12891C24.7205 3.54883 24.9267 4.10879 24.9268 4.80859C24.9268 5.5226 24.7169 6.09725 24.2969 6.53125C23.8769 6.96509 23.219 7.1816 22.3232 7.18164ZM47.8174 6.42578H45.0029V2.41504H47.7754C48.573 2.4151 49.1714 2.5934 49.5703 2.9502C49.9693 3.3072 50.1689 3.79415 50.1689 4.41016C50.1689 5.05408 49.9655 5.55139 49.5596 5.90137C49.1537 6.25106 48.5729 6.42572 47.8174 6.42578ZM64.853 3.14062C64.7521 3.04297 64.6317 2.9974 64.4917 3.00391C64.3452 3.01042 64.2264 3.0625 64.1353 3.16016C64.0441 3.25781 63.9985 3.37988 63.9985 3.52637C63.9985 3.84863 64.1597 4.00977 64.4819 4.00977C64.6284 4.00977 64.7521 3.96094 64.853 3.86328C64.9539 3.76562 65.0044 3.64518 65.0044 3.50195C65.0044 3.35872 64.9539 3.23828 64.853 3.14062ZM62.0015 3.14355C61.9038 3.04753 61.785 2.99902 61.645 2.99902C61.5018 2.99902 61.3826 3.04753 61.2866 3.14355C61.1906 3.23958 61.1421 3.3571 61.1421 3.49707C61.1421 3.6403 61.1909 3.76074 61.2886 3.8584C61.3862 3.95606 61.505 4.00488 61.645 4.00488C61.7849 4.00488 61.9039 3.95556 62.0015 3.85645C62.0991 3.75716 62.1479 3.63542 62.1479 3.49219C62.1479 3.35558 62.099 3.23954 62.0015 3.14355ZM61.9946 0.311523C61.8953 0.212239 61.7769 0.162109 61.6401 0.162109C61.5034 0.162109 61.3859 0.212239 61.2866 0.311523C61.1873 0.410808 61.1372 0.526692 61.1372 0.660156C61.1372 0.800131 61.1873 0.920247 61.2866 1.01953C61.3858 1.11849 61.5053 1.16797 61.645 1.16797C61.7816 1.16797 61.899 1.11865 61.9966 1.01953C62.0942 0.920247 62.1431 0.803386 62.1431 0.669922C62.1431 0.530177 62.0936 0.410712 61.9946 0.311523ZM64.8755 0.303711C64.7827 0.209309 64.6659 0.162109 64.5259 0.162109C64.3794 0.162109 64.257 0.213867 64.1577 0.316406C64.0584 0.418944 64.0083 0.542972 64.0083 0.689453C64.0083 0.832683 64.0539 0.948242 64.145 1.03613C64.2362 1.12402 64.355 1.16797 64.5015 1.16797C64.6447 1.16797 64.7664 1.11914 64.8657 1.02148C64.9648 0.923871 65.0142 0.803267 65.0142 0.660156C65.0142 0.51705 64.9681 0.398073 64.8755 0.303711Z"
                  fill="#262626"
                />
              </svg>
            </SvgWrapper>

            <div
              className="md:hidden"
              onClick={() => handleOverlays("smallScreen")}
            >
              {overlays.smallScreen ? <ImCross /> : <FaBars />}
            </div>

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
              <SvgWrapper>
                <svg
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z"
                    fill="#262626"
                  />
                  <path
                    d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z"
                    fill="#262626"
                  />
                </svg>
              </SvgWrapper>
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
};

export default Header;
