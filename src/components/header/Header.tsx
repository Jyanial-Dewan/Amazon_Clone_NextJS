import React, { useEffect } from "react";
import logo from "../../images/logo (1).png";
import cartIcon from "../../images/cartIcon.png";
import Image from "next/image";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useAppSelector } from "@/hooks/hooks";
import { useSession, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/productSlice";

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const { productData, favoriteData, userInfo } = useAppSelector(
    (state) => state.productData
  );

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className="bg-amazon_blue text-lightText w-full h-20 sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/**logo */}
        <Link
          href={"/"}
          className="px-2 border border-transparent hover:border-white cursor-pointer flex justify-center items-center h-[70%] duration-300 "
        >
          <Image src={logo} alt="logo" className="w-28 object-cover mt-1" />
        </Link>
        {/**delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/**searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            type="text"
            placeholder="Search next amazon product"
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        {/**signin */}
        {userInfo ? (
          <div className="hidden md:flex items-center px-2 border border-transparent md:hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="userImage"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold w-[60px] md:w-auto">
                {userInfo.name}
              </p>
              <p className="w-[60px] hidden md:w-auto md:block">
                {userInfo.email}
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="hidden text-xs text-gray-100 md:flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/**favorite */}
        <Link
          href={"/favorite"}
          className="text-gray-100 md:flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>

          <p className="text-white font-bold">& Favorite</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-4 top-0 md:top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length > 9 ? "9+" : favoriteData.length}
            </span>
          )}
        </Link>
        {/**cart */}
        <Link
          href={"/cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            {productData.length > 9 ? "9+" : productData.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
