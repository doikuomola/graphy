import Link from "next/link";
import React from "react";

const categories = [
  { name: "React" },
  { name: "Javascript" },
  { name: "Web-Dev" },
];

const Navbar = () => {
  return (
    <div className="text-white border-b">
      <div className="flex justify-between py-6">
        <div>
          <Link href="/">
            <h2 className="text-2xl font-bold text-pink-600 cursor-pointer">
              Graphy
            </h2>
          </Link>
        </div>
        <div className="hidden lg:flex gap-4">
          {categories.map((category, index) => (
            <Link href={`/category/${category.name}`} key={index}>
              <span className="text-lg font-semibold hover:text-pink-600 cursor-pointer transition duration-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
