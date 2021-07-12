import { GetStaticProps, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import path from "path";
import fs from "fs/promises";
import { ProductProps } from "../types";

const ProductDetailPage = (props: any): JSX.Element => {
  console.log(props);
  return (
    <div>
      <h1>ProductDetail Page</h1>
      <p>description</p>
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  pid: string;
}

interface Props {
  product: ProductProps | undefined;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
): Promise<GetStaticPropsResult<Props>> => {
  const params = context.params!;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), "src", "data", "dummy.json");
  console.log(filePath);
  const fetchedData = await fs.readFile(filePath, "utf-8");
  const data: { products: ProductProps[] } = JSON.parse(fetchedData);

  const selectedData = data.products.find(
    (product) => product.id === productId
  );

  return {
    props: { product: selectedData },
  };
};

export default ProductDetailPage;
