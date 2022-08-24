import "../styles/globals.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
    />
  </Head>;
  useEffect(() => {
    console.log("I am useeffect from app.js");
  }, []);

  const [amount, setAmount] = useState(null);
  const [reloadKey, setReloadKey] = useState(1);
  const [initialInput,setInitialInput] = useState({location:'',checkIn:'',checkOut:'',rooms:null})
  const [booking,setBooking] = useState({})

  const initialInputHandler = (e)=>{
    if(e.target.name=='location'){
      setInitialInput({...initialInput,location:e.target.value})
    }

    if(e.target.name=='checkIn'){
      setInitialInput({...initialInput,checkIn:e.target.value})
    }

    if(e.target.name=='checkOut'){
      setInitialInput({...initialInput,checkOut:e.target.value})
    }

    if(e.target.name=='rooms'){
      setInitialInput({...initialInput,rooms:e.target.value})
    }
  }

  const bookingHandler = (data)=>{
    setBooking({...booking,data})
  }

  console.log('initial===>',initialInput)

  const addAmount = (price) => {
    console.log("Add to cart");

    setAmount(price);
    setReloadKey(Math.random());
  };

  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };

  const clearCart = (item) => {
    setCart([]);
  };

  return (
    <div style={{ backgroundColor: "#f4f5f5" }}>
      <NavBar key={reloadKey} amount={amount} />
      <Component
      booking = {booking}
      bookingHandler = {bookingHandler}
      initialInput = {initialInput}
      initialInputHandler = {initialInputHandler}
        amount={amount}
        removeFromCart={removeFromCart}
        addAmount={addAmount}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </div>
  );
}

export default MyApp;
