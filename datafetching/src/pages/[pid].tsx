import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import path from "path";
import fs from "fs/promises";
import { ProductProps } from "../types";

const ProductDetailPage = ({ product }: Props): JSX.Element => {
  return (
    <div>
      <h1>{product?.title} Page</h1>
      <p>{product?.description}</p>
    </div>
  );
};

interface Params extends ParsedUrlQuery {
  pid: string;
}

interface Props {
  product: ProductProps | undefined;
}

const getData = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "dummy.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
): Promise<GetStaticPropsResult<Props>> => {
  const params = context.params!;
  const productId = params.pid;
  const data: { products: ProductProps[] } = await getData();
  const selectedData = data.products.find(
    (product) => product.id === productId
  );
  if (!selectedData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product: selectedData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await getData()) as { products: ProductProps[] };
  const ids = data.products.map((product) => {
    return {
      params: {
        pid: product.id,
      },
    };
  });
  return {
    paths: ids,
    fallback: true,
  };
};

export default ProductDetailPage;
