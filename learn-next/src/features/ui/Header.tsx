import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>This is a header</h1>
      <nav>
         
        <ul>
          <li>
            ß<Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
