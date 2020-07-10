import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        {/* Link próprio do Next, neste caso aponta 
            para arquivos no diretório pages
        */}
        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>

        <Link href="/search">
          <a>Search</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
