import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428624220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={3}
        />

        <Product
          id="49538094"
          title="Kenwood mix stand mixer for baking, Stylish kitchen mixer with k-beater,Dough hook and whisk ,5 Liter Glass bowl"
          price={98.0}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="49538094"
          title="Samsung LC32R500FHUXEN 32 Curved Monitor - FullHD, 3-sided bezel-less, Freesync, HDMI, VGA, Dark Grey"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Z57q19K%2BL._AC_SL1440_.jpg"
        />
        <Product
          id="49538094"
          title="Introducing Echo Show 8 | Stay in touch with the help of Alexa, Charcoal fabric"
          price={539.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/819FCvQBLmL._AC_SL1500_.jpg"
        />
        <Product
          id="49538094"
          title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Gray (2nd Generation)"
          price={739.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="49538094"
          title="Samsung LC32R500FHUXEN 32 Curved Monitor - FullHD, 3-sided bezel-less, Freesync, HDMI, VGA, Dark Grey"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/612sezt1UbL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
