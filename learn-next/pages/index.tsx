import Link from "next/link";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/portfolio">PortFolio</Link>
        </li>
        <li>
          <Link href="/clients">Client</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
