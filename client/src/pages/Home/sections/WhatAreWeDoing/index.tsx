import { HamburgerIcon } from "@/assets/icons";
import { Link } from "react-router-dom";

const WhatAreWeDoing = () => {
  return (
    <div className="container py-8 lg:py-16 text-dark">
      <h3 className="text-[10px] tracking-[5px] uppercase">
        {" "}
        What are we doing?
      </h3>

      <p className="max-w-md text-4xl my-4 font-bold">
        End-to-end technology solutions for businesses for businesses.
      </p>

      <p className="max-w-xl text-sm font-light mb-8">
        At AgustaSoft, we build scalable, secure, and intelligent systems
        tailored for modern businesses. From infrastructure to cloud, DevOps to
        AI, we ensure your digital foundation accelerates growth and adapts to
        change.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(5)].map((_, idx) => (
          <Link
            to={"/"}
            key={idx}
            className="bg-primary-light px-5 py-10 rounded-lg shadow-md text-dark hover:text-light hover:bg-dark transition duration-300 hover:-translate-y-2.5"
          >
            <HamburgerIcon className="w-6 h-6 mb-4 fill-current" />

            <h4 className="text-lg font-semibold mb-2">DevOps</h4>

            <p className="text-sm">We automate CI/CD processes. </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatAreWeDoing;
