import React from "react";
import Banner from "../Component/Banner";
import Company from "../Component/Company";
import Service from "../Component/Service";
import { BackgroundBeamsWithCollisionDemo } from "@/Component/BackgroundBeamsWithCollisionDemo";

// import Banner from '../Component/Banner';

const Home = () => {
  return (
    <div className="">
      <div className=" mb-8 bg-opacity-30   rounded-b-[100px]   ">
      <BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>
      </div>
      <Company></Company>
      <Service></Service>
      
    </div>
  );
};

export default Home;
