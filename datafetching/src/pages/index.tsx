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
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
};

export default HomePage;
