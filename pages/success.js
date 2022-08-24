import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 style={{ color: "green" }} className="text-success mt-9">
              Payment done successfully
            </h1>
            <br/> <br/>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Your Booking has been Confirmed
            </h1>
          </div>
          
            <Link href="/bookingDetails">
              <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                See Your Booking Details
              </button>
            </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Success;
