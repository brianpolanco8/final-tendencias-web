import { Directory, Header } from "components";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="homepage">
        <Directory />
      </div>
    </div>
  );
};

export default Home;
