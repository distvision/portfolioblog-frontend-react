import React from "react";

import { Navbar } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";

// import "./container/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
