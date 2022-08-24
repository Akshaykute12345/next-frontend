import Link from "next/link";

// import "./custom.css";

export default function BookingDetails({booking}) {

    console.log('booking===>',booking)
  return (
    <section
      style={{  height: "890px", paddingTop: "40px" }}
      class="text-gray-600 body-font"
    >
      <div class="container px-5 py-24 mx-auto" style={{ backgroundColor:'white' }}>
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Booking Confirmed
          </h1>
        </div>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Booking Details
        </h1>
        <div class="flex flex-wrap">
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <p class="leading-relaxed text-base mb-4">Booking-Id</p>
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              {booking.data.id}
            </h2>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <p class="leading-relaxed text-base mb-4">Check-In Date</p>
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            {booking.data.checkIn_Date}
            </h2>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <p class="leading-relaxed text-base mb-4">Check-Out Date</p>
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            {booking.data.checkOut_Date}
            </h2>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <p class="leading-relaxed text-base mb-4">Total Fare</p>
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            {booking.data.amount}
            </h2>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <p class="leading-relaxed text-base mb-4">Status</p>
            <h2
              style={{ color: "green" }}
              class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"
            >
              Booking Confirmed
            </h2>
          </div>
          <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <p class="leading-relaxed text-base mb-4">No. of Rooms Booked</p>
            <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
              {booking.data.rooms_booked}
            </h2>
          </div>
        </div>

       
      </div>
    </section>
  );
}
