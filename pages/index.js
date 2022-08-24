import Link from "next/link";

// import "./custom.css";

export default function Home({ initialInput, initialInputHandler }) {
  return (
    <div className="container mx-auto px-4" style={{ paddingTop: "20px" }}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "15px",
              width: "1450px",
            }}
            className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
          >
            <div className="relative flex-grow w-full">
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
                onChange={(e) => {
                  initialInputHandler(e);
                }}
                value={initialInput.location}
                name="location"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>Please Select</option>
                <option>Pune</option>
                <option>Goa</option>
                {/* <option>King Room</option> */}
                {/* <option>XL</option> */}
              </select>
            </div>
            <div className="relative flex-grow w-full">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Check-In
              </label>
              <input
                type="date"
                id="email"
                name="checkIn"
                onChange={(e) => {
                  initialInputHandler(e);
                }}
                value={initialInput.checkIn}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Check-Out
              </label>
              <input
                type="date"
                id="email"
                name="checkOut"
                onChange={(e) => {
                  initialInputHandler(e);
                }}
                value={initialInput.checkOut}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Rooms
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                onChange={(e) => {
                  initialInputHandler(e);
                }}
                value={initialInput.rooms}
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {}

            <Link href="/products">
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Search
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <img
        className="object-none object-top bg-yellow-300 w-[100vw] h-[70vh]"
        src="bg2.jpg"
        alt=""
        style={{ padding: "10px" }}
      /> */}

      <section
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
          width: "1500px",
          height:'500px'
        }}
        class="text-gray-600 body-font"
      >
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701171052369244-2445a1d4fac711e8bf3c0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;38,0&output-format=jpg&downsize=821:550&crop=821:550"
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Lux properties In India
                </h2>
                <p class="leading-relaxed text-base">
                  Explore by luxury brands, themes and top pics
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201903141331534407-82abd6d652b411e984780242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550"
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Lux Villas
                </h2>
                <p class="leading-relaxed text-base">
                  Premium Villas with superlative Experience
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://r1imghtlak.mmtcdn.com/e456938c80a111ea9bbf0242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,34&output-format=jpg&downsize=821:550&crop=821:550"
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Lux Internationals
                </h2>
                <p class="leading-relaxed text-base">
                  Dubai, Maldives, Thailand, Japan, Uk and more
                </p>
              </div>
            </div>

            <div class="xl:w-1/4 md:w-1/2 p-4">
              <h1>
                {" "}
                <strong> INTRODUCING </strong>{" "}
              </h1>
              <h1
                style={{
                  fontSize: "50px",
                  color: "orange",
                  fontWeight: "80px",
                  fontFamily: "fantasy",
                }}
              >
                {" "}
                MMT Luxe Selections{" "}
              </h1>
              <p>
                Escape to the epitome of Luxury,packed with signature amenities
                and services
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Hot Deals on Hotel Rooms
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Deals from your favourite booking site
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Make online room booking with just a few taps on your smartphone
              with the MyBooking mobile app. Our app allows you to search for
              properties, compare hotel features and amenities, check out room
              images and complete your booking on the go and without any
              hassles. On top of that, you can also grab exclusive offers to
              save a little more on your hotel booking.
            </p>
          </div>
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Hotel Booking FAQs
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                What are the advantages of online hotel booking?
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Online hotel booking comes with great advantages for travellers.
                You can book hotels in India or even International hotels
                sitting at home in few simple clicks You can quickly check
                reviews, images, ratings and amenities of all the hotels at one
                place and compare hotels to suit your preferences for hotel
                booking You can avail great discounts and offers on hotel
                booking through Goibibo Avoiding the last-minute hotel search in
                an unknown city with high prices, you can book a suitable stay
                for yourself at reasonable prices online
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                And Many More
                <svg
                  fill="blue"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Is it ok to choose 'Pay at hotel' option for an online hotel
                booking?
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Like prepaid bookings, pay at hotel option is also safe and
                reliable. It's free of cost. Though, the added advantage of
                choosing pay at hotel option is that you get the privilege of
                cancelling the hotel if you don't like its quality. However, it
                is important to go through all the booking and cancellation
                related terms and conditions carefully.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Is online hotel booking safe and reliable?
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Being an easy and time-effective process, online hotel booking
                is widely preferred. Booking Hotels online is safe and reliable,
                provided that you rely on a reputed travel website for your
                online hotel bookings. Goibibo is a trustworthy online hotel
                booking platform which has numerous filters to help you choose
                the best and most suitable hotel as per your budget and
                preference.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                What are the popular International Cities for Online Hotel
                Booking?
              </h2>
              <p className="leading-relaxed text-base mb-4">
                There are various cities in the World which are famous among
                travellers. Some of these popular International cities which see
                a lot of demand in Online Hotel Booking business are Dubai,
                Singapore, Phuket, Maldives, Paris, London and Bali. Goibibo has
                huge number of hotels on its platform available for booking
                Hotels in Dubai, Hotels in Singapore, Hotels in Phuket, Hotels
                in Maldives, Hotels in Paris, Hotels in Bali and even many more
                International cities.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> */}{" "}
          {/* <Link href="/products">
              <a className="mr-5 hover:text-gray-900">Start Booking</a>
            </Link> */}
          {/* </button> */}
        </div>
      </section>
    </div>
  );
}
