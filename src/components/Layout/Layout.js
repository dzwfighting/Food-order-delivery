import React from "react";

import Header from "../Header/Header";
/* import ** the ** can bedifferent from the export name, it like rename, 
   eg: you can write: import Head from "../Header/Header"
   then in Layout, we use <Head /> to as the component API
*/
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
