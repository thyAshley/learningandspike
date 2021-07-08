import Link from "next/link";

const ClientPage = (): JSX.Element => {
  const clients = [
    { id: "max", name: "Max" },
    {
      id: "james",
      name: "James",
    },
    { id: "jane", name: "Jane" },
  ];
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              replace={client.id === "max"}
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
