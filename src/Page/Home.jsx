import React from "react";
import Banner from "../Component/Banner";
import Company from "../Component/Company";
import Service from "../Component/Service";

// import Banner from '../Component/Banner';

const Home = () => {
  return (
    <div className="">
      <div className=" mb-8 bg-opacity-30   rounded-b-[100px]   ">
        <Banner></Banner>
      </div>
      <Company></Company>
      <Service></Service>
    </div>
  );
};

export default Home;
