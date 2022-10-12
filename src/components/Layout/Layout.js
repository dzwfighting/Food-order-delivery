import React from "react";

import Header from "../Header/Header";
/* import ** the ** can bedifferent from the export name, it like rename, 
   eg: you can write: import Head from "../Header/Header"
   then in Layout, we use <Head /> to as the component API
*/
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
