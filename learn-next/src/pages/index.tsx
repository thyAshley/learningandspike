import Link from "next/link";
import { getFeaturedEvents } from "../data";

const HomePage = (): JSX.Element => {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home</h1>
      <ul></ul>
    </div>
  );
};

export default HomePage;
