import { lazy, Suspense } from "react";
import Hero from "./sections/Hero";
import PoweredBy from "./sections/PoweredBy";
import WhatAreWeDoing from "./sections/WhatAreWeDoing";

const BuSayfaOnemsizLazyIcinEkledim = lazy(
  () => import("./sections/BuSayfaOnemsizLazyIcinEkledim"),
);

const Home = () => {
  return (
    <>
      <Hero />

      <PoweredBy />

      <WhatAreWeDoing />

      <Suspense fallback={<></>}>
        <BuSayfaOnemsizLazyIcinEkledim />
      </Suspense>
    </>
  );
};

export default Home;
