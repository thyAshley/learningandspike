import { useRouter } from "next/router";

const PortfolioProjectPage = (): JSX.Element => {
  const router = useRouter();

  console.log("pathname:", router.pathname);
  console.log("query", router.query);

  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
};

export default PortfolioProjectPage;
