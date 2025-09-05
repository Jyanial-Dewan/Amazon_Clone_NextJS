import React from "react";
import { ProductType } from "../../type";
import Image from "next/image";
import { formatTwoDecimals } from "@/utility/utility";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/productSlice";

interface Props {
  product: ProductType;
}

const CartProduct = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleIncrease = (item: ProductType) => {
    dispatch(increaseQuantity(item));
  };

  const handleDerease = (item: ProductType) => {
    dispatch(decreaseQuantity(item));
  };

  const handleRemoveProduct = (item: ProductType) => {
    dispatch(deleteProduct(item));
  };

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        className="object-cover"
        width={150}
        height={150}
        src={product.image}
        alt="productImage"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">
            {product.title}
          </p>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              {formatTwoDecimals(product.price)}
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() => handleIncrease(product)}
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuPlus />
              </span>
              <span>{product.quantity}</span>
              <span
                onClick={() => handleDerease(product)}
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuMinus />
              </span>
            </div>
            <div
              //   onClick={() => dispatch(deleteProduct(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          {product.quantity && (
            <p>{formatTwoDecimals(product.price * product.quantity)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
