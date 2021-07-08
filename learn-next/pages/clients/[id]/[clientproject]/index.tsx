import { useRouter } from "next/router";

const ClientProjectPage = (): JSX.Element => {
  const router = useRouter();

  console.log(router.query);
  console.log(router.pathname);
  return (
    <div>
      <h1>ClientProject Page</h1>
    </div>
  );
};

export default ClientProjectPage;
