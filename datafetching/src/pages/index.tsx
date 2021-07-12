import fs from "fs/promises";
import path from "path";
import { GetStaticProps, InferGetStaticPropsType } from "next";

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

interface ProductProps {
  id: string;
  title: string;
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "dummy.json");
  console.log(filePath);
  const fetchedData = await fs.readFile(filePath, "utf-8");
  const data: { products: ProductProps[] } = JSON.parse(fetchedData);
  return {
    props: {
      products: data.products,
    },
  };
};

export default HomePage;
