import React from "react";
import Link from "next/link";
import { BsFillCartDashFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-start justify-between py-2">
      <div className="logo font-bold mx-5 text-xl">Codeswear</div>
      <div className="nav">
        <ul className="flex items-center space-x-2 md:text-md">
          <Link href={"/"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>

          <Link href={"/"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-3 top-3">
        <BsFillCartDashFill className="text-xl md:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
