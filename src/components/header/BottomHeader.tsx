import { useAppSelector } from "@/hooks/hooks";
import { removeUser } from "@/store/productSlice";
import { LuMenu } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import { BiCaretDown } from "react-icons/bi";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { userInfo } = useAppSelector((state) => state.productData);
  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex justify-between items-center">
      <div className="flex">
        <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          <LuMenu className="text-xl" /> All
        </p>
        <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Todays Deals
        </p>
        <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Customer Service
        </p>
        <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Registry
        </p>
        <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Gift Cards
        </p>
        <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
          Sell
        </p>
        {userInfo && (
          <button
            onClick={handleSignOut}
            className="md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
          >
            Sign Out
          </button>
        )}
      </div>

      {userInfo ? (
        <div className="md:hidden flex items-center px-2 border border-transparent md:hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
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
          className="md:hidden text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
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
    </div>
  );
};

export default BottomHeader;
