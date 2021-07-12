import fs from "fs/promises";
import path from "path";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import { ProductProps } from "../types";

const HomePage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

interface StaticProps {
  products: ProductProps[];
}
export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<StaticProps>> => {
  console.log("Re-generating");
  const filePath = path.join(process.cwd(), "src", "data", "dummy.json");

  const fetchedData = await fs.readFile(filePath, "utf-8");
  const data: { products: ProductProps[] } = JSON.parse(fetchedData);
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  if (data.products.length === 0) {
    console.log(data.products);
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default HomePage;
