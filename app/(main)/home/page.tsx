import React from "react";
import EnableMfa from "../_components/EnableMfa";
import Sessions from "../_components/Sessions";

const Home = () => {
  return (
    <div>
      <div className="flex max-w-3xl flex-col gap-2 mx-auto w-full md:max-w-5xl px-6 py-8">
        <h1 className="text-[28px] leading-[34px] tracking-[-0.416px] text-[#000509e3] dark:text-inherit font-extrabold">
          Dashboard
        </h1>
        <p className="text-sm text-[#0007149f] dark:text-gray-100 font-normal">
          Follow the steps to activate using the Squeezy.
        </p>
      </div>
    </div>
  );
};

export default Home;
