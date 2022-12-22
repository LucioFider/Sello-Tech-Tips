import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://links.papareact.com/1m8"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <h1>Sello Hub</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Sign up to the Sello Daily News
        </Link>
      </div>
    </header>
  );
}

export default Header;
