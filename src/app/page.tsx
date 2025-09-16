import React from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck2,
  PhoneIncoming,
  CircleCheckBig,
  Ghost,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <section className="bg-[#640d14] h-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-[50%] text-[#fffcf2] p-[1.5rem] flex flex-col gap-[1rem]">
          <p
            className="text-[8px] text-white border border-white/20 rounded-md 
             text-center px-2 py-1
             bg-white/10 backdrop-blur-md shadow-md"
          >
            COMPLETE AUTO CARE • DETAILING • PROTECTION • SINCE 2011
          </p>

          <h1 className="font-bold text-[1.5rem]">
            Complete Auto Care, Right Here in Caloocan
          </h1>

          <p className="text-[10px] font-semibold">
            15+ Years • 200,000+ Cars • Trusted by Car Owners
          </p>

          <p className="text-[10px] ">
            From quick washes to advanced ceramic coatings, we do it right the
            first time. Quality service, expert care, and your car back on
            schedule.
          </p>

          <Button
            variant="ghost"
            className="bg-[#fffcf2] text-[#880d1e] font-bold text-[0.7rem] h-8 cursor-pointer 
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-[#fffcf2] hover:to-[#880d1e] hover:text-white 
             hover:scale-105"
          >
            <CalendarCheck2 size={20} /> Fix My Car
          </Button>

          <Button
            variant="ghost"
            className="bg-[#fffcf2] text-[#880d1e] font-bold text-[0.7rem] h-8 cursor-pointer 
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-[#fffcf2] hover:to-[#880d1e] hover:text-white 
             hover:scale-105 animate-shake-pause"
          >
            <PhoneIncoming size={20} /> Call Now
          </Button>

          <p
            className="text-[0.8rem] text-white border border-white/20 rounded-md 
             text-center px-2 py-1
             bg-white/10 backdrop-blur-md shadow-md"
          >
            201,567+ <br /> Cars Serviced
          </p>

          <div className="bg-[#fffcf2] rounded-md pl-[1rem] text-black flex items-center gap-2 justify-center">
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/google-icon.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-semibold text-[10px]">Google </p>
            <p className="text-[12px] text-yellow-300">★★★★★</p>
            <p className="text-[10px] font-semibold">4.9(1,524 Reviews)</p>
          </div>
        </div>
        <div className="w-full sm:w-[50%] h-[70dvh] sm:h-screen items-center flex justify-center p-[1rem] ">
          <div className="relative h-[100%] sm:h-[80%] w-full flex items-center justify-center hover:scale-102 transition-all duration-300 ease-in-out">
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute -top-3 -right-2 bg-[#fffcf2] w-[10rem] p-1 rounded-md flex items-center gap-2 justify-center shadow-lg ">
              <CircleCheckBig size={20} className="text-green-400" />
              <p className="text-[0.8rem] font-bold">Certified Detailer</p>
            </div>

            <div className="absolute border border-white/50 bg-white/10 backdrop-blur-[0.3rem] shadow-lg rounded-lg w-[90%] bottom-4 h-[60%] p-[1rem] flex flex-col gap-3">
              <p className="text-white font-bold">
                Get Your Free Service Quote
              </p>
              <Input
                placeholder="Your Name"
                className="bg-white text-gray-900 h-7"
              />
              <Input
                placeholder="Email"
                className="bg-white text-gray-900 h-7"
              />
              <Button
                variant="ghost"
                className="bg-[#FFC432] text-black font-semibold text-[0.7rem] h-8 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out "
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-gradient-to-r from-yellow-500 from-0% via-yellow-300 to-yellow-500 to-100% flex justify-center flex-wrap pt-[2rem] pb-[2rem] gap-[1rem] ">
        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] flex flex-col w-[9rem]">
          15+ <br />
          <span className="relative inline-block pb-1 -mt-5">
            <span className="text-white font-semibold text-[1rem]">
              Years in Business
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] flex flex-col w-[9rem]">
          200K <br />
          <span className="relative inline-block pb-1 -mt-5">
            <span className="text-white font-semibold text-[1rem]">
              Cars Serviced
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] flex flex-col w-[9rem]">
          100K <br />
          <span className="relative inline-block pb-1 -mt-5">
            <span className="text-white font-semibold text-[1rem]">
              Happy Customers
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] flex flex-col w-[9rem]">
          24/7 <br />
          <span className="relative inline-block pb-1 -mt-5">
            <span className="text-white font-semibold text-[1rem]">
              Always Available
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] flex flex-col w-[9rem]">
          100% <br />
          <span className="relative inline-block pb-1 -mt-5">
            <span className="text-white font-semibold text-[1rem]">
              Quality Service
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] border-[#880d1e] rounded-full"></span>
          </span>
        </p>

        <p className="text-[#880d1e] font-bold text-center text-[1.8rem] flex flex-col w-[9rem]">
          100% <br />
          <span className="relative inline-block pb-1 -mt-5">
            <span className="text-white font-semibold text-[1rem]">
              Expert Staff
            </span>
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1/3 border-b-[5px] border-[#880d1e] rounded-full"></span>
          </span>
        </p>
      </section>
    </main>
  );
}
