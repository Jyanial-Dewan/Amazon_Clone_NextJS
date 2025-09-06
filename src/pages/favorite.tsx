import React from "react";
import { useDispatch } from "react-redux";
import { ProductType } from "../../type";
import Link from "next/link";
import { useAppSelector } from "@/hooks/hooks";
import { resetFavoriteData } from "@/store/productSlice";
import FavoriteProduct from "@/components/FavoriteProduct";

const FavoritePage = () => {
  const { favoriteData } = useAppSelector((state) => state.productData);
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetFavoriteData());
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 gap-10 py-4">
      {favoriteData.length > 0 ? (
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
            <p className="text-2xl font-semibold text-amazon_blue">
              Favorte Items
            </p>
            <p className="hidden text-lg font-semibold text-amazon_blue md:block">
              Action
            </p>
          </div>
          <div>
            {favoriteData.map((item: ProductType) => (
              <div key={item._id} className="mt-2">
                <FavoriteProduct item={item} />
              </div>
            ))}
            <button
              onClick={handleResetCart}
              className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
            >
              reset cart
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white h-96  flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1>Nothing is available in the Favorite list</h1>
          <Link href="/">
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black duration-300 mt-2">
              go to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
