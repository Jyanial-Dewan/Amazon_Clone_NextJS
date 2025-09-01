import Bannner from "@/components/Bannner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps[];
}

export default function Home({ productData }: Props) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Bannner />
      <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
        <Products productData={productData} />
      </div>
    </div>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
