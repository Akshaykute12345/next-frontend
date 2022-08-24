import Link from "next/link";
import React, { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import Router from "next/router";

const Products = (props) => {
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    if (props.products !== null) {
      let hotels = props.products.data;
      let filteredHotelsTmp = hotels.filter((items) => {
        return (
          items.attributes.city == props.initialInput.location &&
          items.attributes.rooms_available >= props.initialInput.rooms
        );
      });
      setFilteredHotels(filteredHotelsTmp);
    }
  }, [props.initialInput.rooms, props.initialInput.location]);

  // console.log(
  //   "filter==>",
  //   filteredHotels,
  //   "propscity===>",
  //   props.initialInput.location,
  //   "itemscity==>",
  //   props.products.data[0].attributes.city
  // );

  if (props.products === null) {
    Router.push("/login");
  } else {
    if (filteredHotels && filteredHotels.length === 0) {
      return (
        <div className="container mx-auto px-4">
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "30px",
            }}
            class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
          >
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Choose Location
              </label>
              {/* <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              /> */}

              <select
                style={{ height: "45px" }}
                value={props.initialInput.location}
                onChange={(e) => {
                  props.initialInputHandler(e);
                }}
                name="location"
                // disabled
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>Please Select</option>
                <option>Pune</option>
                <option>Goa</option>
                {/* <option>King Room</option> */}
                {/* <option>XL</option> */}
              </select>
            </div>
            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Check-In
              </label>
              <input
                type="date"
                id="email"
                name="checkIn"
                // disabled
                value={props.initialInput.checkIn}
                onChange={(e) => {
                  props.initialInputHandler(e);
                }}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Check-Out
              </label>
              <input
                type="date"
                id="email"
                name="checkOut"
                // disabled
                value={props.initialInput.checkOut}
                onChange={(e) => {
                  props.initialInputHandler(e);
                }}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Rooms
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                // disabled
                value={props.initialInput.rooms}
                onChange={(e) => {
                  props.initialInputHandler(e);
                }}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* <Link href="/products">
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Search
              </button>
            </Link> */}
          </div>
          <div style={{ height: "900px" }} className="container mx-auto px-4">
            <section className="text-gray-600 body-font">
              <div className="container px-5 md:py-24 mx-auto">
                {" "}
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h4 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    Sorry...No results found !{" "}
                  </h4>
                  <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>{" "}
              </div>{" "}
            </section>{" "}
          </div>
        </div>
      );
    }
    return (
      <div className="container mx-auto px-4">
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "30px",
          }}
          class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
        >
          <div class="relative flex-grow w-full">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Choose Location
            </label>
            {/* <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              /> */}

            <select
              style={{ height: "45px" }}
              value={props.initialInput.location}
              onChange={(e) => {
                props.initialInputHandler(e);
              }}
              name="location"
              // disabled
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option>Please Select</option>
              <option>Pune</option>
              <option>Goa</option>
              {/* <option>King Room</option> */}
              {/* <option>XL</option> */}
            </select>
          </div>
          <div class="relative flex-grow w-full">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Check-In
            </label>
            <input
              type="date"
              id="email"
              name="checkIn"
              // disabled
              value={props.initialInput.checkIn}
              onChange={(e) => {
                props.initialInputHandler(e);
              }}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative flex-grow w-full">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Check-Out
            </label>
            <input
              type="date"
              id="email"
              name="checkOut"
              // disabled
              value={props.initialInput.checkOut}
              onChange={(e) => {
                props.initialInputHandler(e);
              }}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative flex-grow w-full">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Rooms
            </label>
            <input
              type="number"
              id="rooms"
              name="rooms"
              // disabled
              value={props.initialInput.rooms}
              onChange={(e) => {
                props.initialInputHandler(e);
              }}
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* <Link href="/products">
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Search
              </button>
            </Link> */}
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 md:py-24 mx-auto">
            <div className="flex flex-wrap w-full md:mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Hotels List - MyBooking
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              {filteredHotels.map((item) => {
                return (
                  <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        style={{
                          objectFit: "cover",
                          height: "384px",
                          width: "auto",
                        }}
                        className="h-96 rounded m-auto mb-8"
                        src={
                          `https://vast-taiga-41388.herokuapp.com` +
                          item.attributes.galary.data.attributes.url
                        }
                      />
                      {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3> */}
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {item.attributes.Hotel_name}
                      </h2>
                      <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
                      {/* <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button> */}
                      <p className="leading-relaxed text-base">
                        {" "}
                        {item.attributes.description.substring(0, 250)}{" "}
                        <p style={{ color: "blue" }}> Read More..... </p>{" "}
                      </p>

                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        Base Charges For Basic Deluxe room - ₹{" "}
                        {item.attributes.price}/day
                      </h2>
                      <Link href={`/product/${item.id}`}>
                        <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                          Explore_Deal
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt;

  if (!jwt) {
    return {
      props: { products: null },
    };
  } else {
    let headers = {
      Authorization: `Bearer ${jwt}`,
    };

    console.log("header==>", headers, "jwt==>", jwt);
    let a = await fetch("https://vast-taiga-41388.herokuapp.com/api/hotels?populate=*", {
      headers: headers,
    });

    let products = await a.json();

    console.log("products===>", products);

    return {
      props: { products: products },
    };
  }
}

export default Products;
