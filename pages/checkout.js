import React, { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { parseCookies } from "nookies";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useRouter } from "next/router";

const stripePromise = loadStripe(
  "pk_test_51LXcJ6SEwMvWQwAONRktjk76yb452WmD0xafNiuQuwiVEGqzYPDeZC38842fIGeQxbdrOeoiVAjwnKH8d1sd8Pr7009ygbAYKF"
);

const CheckoutForm = ({ amount, initialInput, bookingHandler }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [payProcessing, setPayProcessing] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [resData, setResData] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };

  console.log("initialbyCheckOut===>", initialInput);

  const makePaymentRequest = async (allformData) => {
    try {
      const cookies = parseCookies();
      const jwt = cookies.jwt;
      console.log("jwt==>", jwt);
      const res = await fetch(`https://vast-taiga-41388.herokuapp.com/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(allformData),
      });

      if (res.status != 200) throw Error("Payment failed");

      return await res.json();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const payload = await stripe.createToken(cardElement);

    console.log("payload===>", payload);

    const allFormData = {
      ...form,
      token: payload.token.id,
      amount: amount,
      checkIn_Date: initialInput.checkIn,
      checkOut_Date: initialInput.checkOut,
      rooms_booked: Number(initialInput.rooms),
    };
    setPayProcessing(true);
    const response = await makePaymentRequest(allFormData);

    bookingHandler(response);
    setDone(true);
    setPayProcessing(false);
  };

  console.log("resData===>", resData);
  if (error)
    return (
      <div className="text-center">
        {" "}
        <h1 className="text-danger mt-5">Payment failed</h1>
      </div>
    );
  if (done) {
    router.push("/success");
  }

  if (payProcessing)
    return (
      <div className="text-center">
        {" "}
        <h1 className="text-success mt-5">
          Wait, Processing Your Payment
        </h1>{" "}
      </div>
    );

  return (
    <div>
      <section className="text-black body-font relative">
        <div className="container px-5 py-24 mx-auto min-h-screen">
          <div
            class=" w-1/2 mx-auto"
            style={{ backgroundColor: "white", padding: "30px" }}
          >
            <div class="p-2 w-full" style={{ backgroundColor: "white" }}>
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  style={{ objectFit: "cover", height: "160p", width: "100%" }}
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://img.freepik.com/free-vector/flat-man-hotel-booking-background_23-2148136539.jpg?w=826&t=st=1660888429~exp=1660889029~hmac=38a406b9b79b7e7bb8686e7184c0357c5573fe234858f0414295fdbc280b69d7"
                  alt="content"
                />

                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
                  Checkout
                </h1>
                <h2 className="text-2xl font-medium">
                  Booking Amount : {Math.round(amount)}
                </h2>
              </div>
            </div>
            <div className="p-2 w-full">
              <div
                className="relative"
                style={{ backgroundColor: "red", padding: "10px" }}
              >
                <strong>
                  {" "}
                  <label
                    htmlFor="address"
                    // className="leading-7 text-sm text-gray-600"
                    style={{ color: "white", fontWeight: "80px" }}
                  >
                    Important Information
                  </label>
                </strong>
                <div style={{ backgroundColor: "white", padding: "30px" }}>
                  <h2> Resort Rules </h2>

                  <ul>
                    <li> Guests with fever are not allowed</li>
                    <li> Guests from containment zones are not allowed</li>
                    <li>
                      PAN Card, Office ID and Non-Govt IDs are not accepted as
                      ID proof(s)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2  w-full ">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2  ">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2  ">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.phone}
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={form.address}
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div
                  className="relative"
                  style={{ backgroundColor: "pink", padding: "10px" }}
                >
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                    style={{ color: "black", fontWeight: "80px" }}
                  >
                    Card Details
                  </label>
                  <div style={{ backgroundColor: "white", padding: "30px" }}>
                    <CardElement
                      onChange={(e) => {
                        if (e.complete) {
                          setPayButton(false);
                        } else {
                          setPayButton(true);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <br /> <br />
              <div className="p-2 w-full">
                <button
                  onClick={handleSubmit}
                  className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Checkout = ({ amount, initialInput, bookingHandler }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        amount={amount}
        initialInput={initialInput}
        bookingHandler={bookingHandler}
      />
    </Elements>
  );
};

export default Checkout;
