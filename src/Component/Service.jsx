import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// Import required Swiper modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import usePublic from "../Hook/usePublic";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
const Service = () => {
  const publicAxios = usePublic();
  const { data: manages = [], refetch } = useQuery({
    queryKey: ["manage"],
    queryFn: async () => {
      const res = await publicAxios.get("/manege");
      return res.data;
    },
  });
  const { data: comments = [],  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await publicAxios.get("/comments");
      return res.data;
    },
  });

  console.log(comments);

  return (
    <div className="py-12  ">
      <p className="text-center my-7 text-3xl font-bold text-white">
        What would you like to manage?
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {manages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative group">
              <img
                src={item.image_url}
                alt={item.title}
                className=" rounded-lg w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white px-6 py-4 bg-black opacity-70 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        <div class="container mx-auto px-6 py-16 bg-primary bg-opacity-25 my-12 ">
          <h2 class="text-4xl font-semibold text-center text-white ">
            How It Works 
            
          </h2>
          <p className="text-5xl font-bold text-center text-white my-5">
            Start Managing In 4 Easy Steps
          </p>
          <p className="text-center text-xl text-gray-300">
            Create your own project with us and manage it with just 4 easy steps
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class=" group p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div class=" space-y-4">
                <div className="flex items-center gap-2">
                  <button className="bg-white group-hover:bg-secondary group-hover:text-white py-2 px-4 rounded-xl text-xl font-bold">
                    1
                  </button>
                  <div className="border-b w-full"></div>
                </div>
                <h1 className="text-white text-lg font-bold">
                  Create an Account
                </h1>
                <p class="text-white">
                  Sign up or log in to start managing your employees.
                </p>
              </div>
            </div>
            <div class="group  p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div class=" space-y-4">
                <div className="flex items-center gap-2">
                  <button className="bg-white group-hover:text-white  py-2 px-4 rounded-xl text-xl font-bold group-hover:bg-secondary">
                    2
                  </button>
                  <div className="border-b w-full"></div>
                </div>
                <h1 className="text-white text-lg font-bold"> Add Employees</h1>
                <p class="text-white">
                  Enter basic information to add employees to your system.
                </p>
              </div>
            </div>
            <div class="group  p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div class=" space-y-4">
                <div className="flex items-center gap-2">
                  <button className="bg-white py-2 px-4 rounded-xl text-xl font-bold group-hover:bg-secondary group-hover:text-white   ">
                    3
                  </button>
                  <div className="border-b w-full "></div>
                </div>
                <h1 className="text-white text-lg font-bold">
                  Assign Roles & Responsibilities
                </h1>
                <p class="text-white">
                  Organize teams by assigning specific roles to each employee..
                </p>
              </div>
            </div>
            <div class="group  p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div class=" space-y-4">
                <div className="flex items-center gap-2">
                  <button className="bg-white py-2 px-4 rounded-xl text-xl font-bold group-hover:bg-secondary group-hover:text-white ">
                    4
                  </button>
                  <div className="border-b w-full"></div>
                </div>
                <h1 className="text-white text-lg font-bold">
                  Monitor Progress & Generate{" "}
                </h1>
                <p class="text-white">
                  Track employee performance and generate detailed reports
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center">
            <button className="bg-slate-600 text-white py-1 px-5 rounded">Words From Other</button>
            <h1 className="text-5xl font-bold text-white my-3">It's not just us.</h1>
            <p className="text-gray-300 text-xl font-semibold mb-14">Here's what others have to say about us.</p>

        </div>
      <div className="border p-5 rounded ">
      <Marquee gradient={false} direction=""  speed={30}>
        <div className="flex items-center space-x-10">
          {/* Add your company logos here */}
          
          {
            comments.map(item=><div><div class="max-w-sm border bg-primary bg-opacity-15 border-primary rounded-lg shadow-lg overflow-hidden p-6  ">
                 <div className="flex items-center gap-5">
                 <img className="h-20 w-20 rounded-full border-primary border-2" src={item.image} alt={item.name} />
                 <h3 class="text-lg font-semibold text-white mb-2">{item.name}</h3>
                 </div>
                
                <div>
                  
                 
                  <p class="text-gray-400 text-sm leading-relaxed">Excellent service, a team that listens, and solutions that work. What more could you ask for?</p>
                </div>
              </div></div>)
          }
          
        </div>
      </Marquee>
      <div className="mt-12">
      <Marquee gradient={false} direction="left"  speed={30}>
        <div className="flex items-center space-x-10">
          {/* Add your company logos here */}
          
          {
            comments.map(item=><div><div class="max-w-sm border rounded-lg shadow-lg overflow-hidden p-6 bg-primary bg-opacity-15 border-primary  ">
                 <div className="flex items-center gap-5">
                 <img className="h-20 w-20 rounded-full border-primary border-2" src={item.image} alt={item.name} />
                 <h3 class="text-lg font-semibold text-white mb-2">{item.name}</h3>
                 </div>
                
                <div>
                  
                 
                  <p class="text-gray-400 text-sm leading-relaxed">Excellent service, a team that listens, and solutions that work. What more could you ask for?</p>
                </div>
              </div></div>)
          }
          
        </div>
      </Marquee>
      </div>
      </div>
      <div className="">
        
      </div>
      </div>
    </div>
  );
};

export default Service;
