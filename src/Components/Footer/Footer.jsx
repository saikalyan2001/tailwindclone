import React from "react";

const Footer = () => {
  return (
    <div className="bg-lime-950 h-96">
      <div className="grid grid-cols-4 gap-40 justify-items-center pt-20 mx-40 text-white text-nowrap">
        <div className="flex flex-col gap-4 ">
            <div className="text-5xl font-bold flex flex-col gap-2 text-nowrap">
            <p>FOR THE</p>
            <p>RIGHT</p>
            <p>KIND OF MAN.</p>
            </div>
            <p>@ 2024, Wrogn Powered by TMRW</p>
        </div>
        <div className="flex flex-col gap-5">
            <p>HELP</p>
            <p>My Account</p>
            <p>Privacy Policy</p>
            <p>Anti Corruption Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
        </div>
        <div  className="flex flex-col gap-5">
            <p>ORDER SUPPORT</p>
            <p>Return & Refund Policy</p>
            <p>FAQ</p>
            <p>Shipping Policy</p>
            <p>Cancellation</p>
        </div>
        <div  className="flex flex-col gap-5">
            <p>ABOUT US</p>
            <p>About Us</p>
            <p>Find a Store</p>
            <p>Blog</p>
            <p>Careers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
