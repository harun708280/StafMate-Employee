import React from "react";
import Marquee from "react-fast-marquee";
import i1 from '/airtel (2).png'
import i2 from '/under.png'
import i3 from '/ibm.png'
import i4 from '/hero (1).png'
import i5 from '/burger.png'
import i6 from '/ad.png'
import i7 from '/hr.png'
import i8 from '/paid.png'

const Company = () => {
  return (
    <div className="">
        <p className="text-lg text-white my-7 text-center">Trusted by 225,000+ customers, from startups to enterprises</p>
        <div className="w-8/12 mx-auto  p-4 bg-primary bg-opacity-20 rounded-lg shadow-lg">
      
      <Marquee gradient={false}  speed={30}>
        <div className="flex items-center gap-24 space-x-10">
          {/* Add your company logos here */}
          <img className="h-20 w-24 mx-10 object-contain" src={i1} alt="Company Logo" />
          <img className="h-20 w-24 object-contain" src={i2} alt="Company Logo" />
          <img className="h-20 w-24 object-contain" src={i3} alt="Company Logo" />
          <img className="h-20 w-24 object-contain" src={i4} alt="Company Logo" />
          <img className="h-20 w-24 object-contain" src={i5} alt="Company Logo" />
          <img className="h-20 w-24 object-contain" src={i7} alt="Company Logo" />
          <img className="h-20 w-24 object-contain" src={i6} alt="Company Logo" />
          <img className="h-20 w-24  object-contain" src={i8} alt="Company Logo" />
        </div>
      </Marquee>
    </div>
    </div>
  );
};

export default Company;
