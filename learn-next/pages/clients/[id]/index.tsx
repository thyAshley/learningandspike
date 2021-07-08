import { useRouter } from "next/router";

const ClientProfilePage = (): JSX.Element => {
  const router = useRouter();
  console.log(router.pathname);
  const onClickHandler = () => {
    router.push({
      pathname: `${router.pathname}/[clientproject]`,
      query: { id: router.query.id, clientproject: "1" },
    });
  };

  return (
    <div>
      <h1>ClientProfile Page</h1>
      <button onClick={onClickHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProfilePage;
