import React from "react";
import Image from "next/image";
import card5 from "../../../public/img/Card5.png";

const Product = () => {
  return (
    <div>
      <div>
        <Image src={card5} alt={""} width={450} height={450} />
        <div className="indicator absolute top-7 left-5 h-7 w-20">
          <p className="text-black bg-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm font-bold">
            NEW
          </p>
        </div>
        <div className="indicator absolute top-14 left-5 h-7 w-20 pt-2">
          <p className="text-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm bg-emerald-400 font-bold">
            -50%
          </p>
        </div>
      </div>
      <div className="rating rating-sm">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
      </div>
      <div>
        <div>
            <h2>Tray Table</h2>
        </div>
        <div>
          <p>Buy one or buy a few and make every space where you sit more
          convenient. Light and easy to move around with removable tray top,
          handy for serving snacks.</p>
        </div>
        <div>$199.00</div>
        <div>Offer expires in:</div>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            Days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            Hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            Minutes
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 7 }}></span>
            </span>
            Secounds
          </div>
        </div>
        <div>
            <p>Measurements</p>
        </div>
        <div>
            <p>17 1/2x20 5/8</p>
        </div>
        <div>
            <p>Choose Color </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
