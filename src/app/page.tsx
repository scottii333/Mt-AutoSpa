import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck2,
  PhoneIncoming,
  CircleCheckBig,
  MessageSquareQuote,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <section className="bg-[#640d14] h-auto flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-[49%] md:pt-[5rem] text-[#fffcf2] p-[1.5rem] flex flex-col gap-[1rem]">
          <p
            className="text-[0.5rem] sm:text-[0.7rem] md:text-[1.3rem] text-white border border-white/20 rounded-md 
             text-center px-2 py-1
             bg-white/10 backdrop-blur-md shadow-md"
          >
            COMPLETE AUTO CARE • DETAILING • PROTECTION • SINCE 2011
          </p>

          <h1 className="font-bold text-[1.9rem] md:text-[3rem] ">
            Complete Auto Care, Right Here in{" "}
            <span className="text-[#FFC432]">CALOOCAN</span>
          </h1>

          <p className="text-[1rem] font-semibold md:text-[1.3rem]">
            15+ Years • 200,000+ Cars • Trusted by Car Owners
          </p>

          <p className="text-[0.8rem] md:text-[1.1rem] ">
            From quick washes to advanced ceramic coatings, we do it right the
            first time. Quality service, expert care, and your car back on
            schedule.
          </p>

          <div className="flex flex-col  md:flex-row gap-3 md:gap-3">
            {" "}
            <Button
              variant="ghost"
              className="w-full md:w-[50%] bg-[#fffcf2] text-[#880d1e] font-bold text-[1rem] md:text-[1.2rem] h-8 md:h-[3rem] cursor-pointer 
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-[#fffcf2] hover:to-[#880d1e] hover:text-white 
             hover:scale-105"
            >
              <CalendarCheck2 className="h-[1.5rem] w-[1.5rem]" /> Fix My Car
            </Button>
            <Button
              variant="ghost"
              className="bg-[#fffcf2] w-full md:w-[50%] text-[#880d1e] font-bold text-[1rem] h-8 md:h-[3rem] md:text-[1.2rem]  cursor-pointer 
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-[#fffcf2] hover:to-[#880d1e] hover:text-white 
             hover:scale-105 animate-shake-pause"
            >
              <PhoneIncoming className="h-[1.5rem] w-[1.5rem]" /> Call Now
            </Button>
          </div>

          <div className="flex justify-center gap-1">
            <p
              className="text-[0.8rem] md:text-[1.2rem] w-full text-white border border-white/20 rounded-md 
             text-center px-2 py-1
             bg-white/10 backdrop-blur-md shadow-md"
            >
              200+ <br /> Cars Serviced
            </p>
            <p
              className="text-[0.8rem] md:text-[1.2rem]  w-full text-white border border-white/20 rounded-md 
             text-center px-2 py-1
             bg-white/10 backdrop-blur-md shadow-md"
            >
              150+ <br /> Cars Serviced
            </p>
            <p
              className="text-[0.8rem] md:text-[1.2rem]   w-full text-white border border-white/20 rounded-md 
             text-center px-2 py-1
             bg-white/10 backdrop-blur-md shadow-md"
            >
              300+ <br /> Cars Serviced
            </p>
          </div>

          <div className="bg-white rounded-md  text-black flex items-center sm:hidden lg:flex  gap-2 justify-center p-2">
            <div className="relative h-[2.5rem] w-[2.5rem] md:w-[3rem] md:h-[3rem]  ">
              <Image
                src="/google.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-semibold text-[1rem] md:text-[1.6rem]">
              Google{" "}
            </p>
            <p className="text-[1.2rem] md:text-[2rem] text-yellow-300">
              ★★★★★
            </p>
            <p className="text-[0.5rem] md:text-[1rem] font-semibold text-center">
              4.9 {""}(120 Reviews)
            </p>
          </div>
        </div>
        <div className="w-full md:w-[49%] h-[30rem] md:h-[45rem] items-center flex justify-center p-[1rem] ">
          <div className="relative h-[25rem] md:h-[90%] w-full flex items-center justify-center md:hover:scale-102 transition-all duration-300 ease-in-out">
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute -top-3 -right-2 bg-[#fffcf2] w-[10rem] md:w-[20rem] p-1 rounded-md flex items-center gap-2 justify-center shadow-lg ">
              <CircleCheckBig className="text-green-400 md:h-[2rem] md:w-[2rem]" />
              <p className="text-[0.8rem] md:text-[1.2rem] font-bold">
                Certified Detailer
              </p>
            </div>

            <div className="absolute border border-white/50 bg-white/10 backdrop-blur-[0.3rem] shadow-lg rounded-lg w-[90%] bottom-4 h-[60%] md:h-[55%] p-[1rem] flex flex-col gap-3">
              <p className="text-white text-center md:text-start font-bold md:text-[1.5rem]">
                Get Your Free Service Quote
              </p>

              {/* Name field */}
              <div className="flex flex-col gap-1">
                <label className="text-white text-sm md:text-base font-medium">
                  Your Name {""}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-white text-gray-900 h-7 md:h-12 text-base md:text-lg"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-1">
                <label className="text-white text-sm md:text-base font-medium">
                  Email {""}
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-gray-900 h-7 md:h-12 text-base md:text-lg"
                />
              </div>

              <Button
                variant="ghost"
                className="bg-[#FFC432] md:mt-2 text-black font-bold text-[0.7rem] md:text-[1.4rem] h-8 md:h-12 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out "
              >
                <MessageSquareQuote className=" md:h-[2rem] md:w-[2rem]" /> Get
                a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-gradient-to-r from-yellow-500 from-0% via-yellow-300 to-yellow-500 to-100% flex justify-center flex-wrap pt-[2rem] pb-[2rem] gap-[1rem] md:gap-[4rem] ">
        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] md:text-[3rem] flex flex-col w-[9rem]">
          15+ <br />
          <span className="relative inline-block pb-1 -mt-5 md:-mt-10">
            <span className="text-white font-semibold text-[0.7rem] md:text-[1rem]">
              Years in Business
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] md:border-b-[10px]  border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] md:text-[3rem] flex flex-col w-[9rem]">
          200K <br />
          <span className="relative inline-block pb-1 -mt-5 md:-mt-10">
            <span className="text-white font-semibold text-[0.7rem] md:text-[1rem]">
              Cars Serviced
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] md:border-b-[10px]  border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] md:text-[3rem] flex flex-col w-[9rem]">
          100K <br />
          <span className="relative inline-block pb-1 -mt-5 md:-mt-10">
            <span className="text-white font-semibold text-[0.7rem] md:text-[1rem]">
              Happy Customers
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] md:border-b-[10px]  border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] md:text-[3rem] flex flex-col w-[9rem]">
          24/7 <br />
          <span className="relative inline-block pb-1 -mt-5 md:-mt-10">
            <span className="text-white font-semibold text-[0.7rem] md:text-[1rem]">
              Always Available
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] md:border-b-[10px]  border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] md:text-[3rem] flex flex-col w-[9rem]">
          100% <br />
          <span className="relative inline-block pb-1 -mt-5 md:-mt-10">
            <span className="text-white font-semibold text-[0.7rem] md:text-[1rem]">
              Quality Service
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] md:border-b-[10px]  border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] md:text-[3rem] flex flex-col w-[9rem]">
          100% <br />
          <span className="relative inline-block pb-1 -mt-5 md:-mt-10">
            <span className="text-white font-semibold text-[0.7rem] md:text-[1rem]">
              Expert Staff
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] md:border-b-[10px]  border-[#880d1e] rounded-full"></span>
          </span>
        </p>
      </section>
    </main>
  );
}
