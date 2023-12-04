import React from "react";
import Image from "next/image";
import headerimg from "../../../public/img/Image Placeholder header.png";
import card1 from "../../../public/img/Card1.png";
import card2 from "../../../public/img/Card2.png";
import card3 from "../../../public/img/Card3.png";
import card4 from "../../../public/img/Card4.png";
import card5 from "../../../public/img/Card5.png";
import card6 from "../../../public/img/Card6.png";
import card7 from "../../../public/img/Card7.png";
import card8 from "../../../public/img/Card8.png";
import card9 from "../../../public/img/Card9.png";
import vectorfilter from "../../../public/img/Vector.png";
import grid3x3 from "../../../public/img/grid3x3.png";
import grid2x2 from "../../../public/img/grid2x2.png";
import ver1x2 from "../../../public/img/ver1x2.png";
import hor1x2 from "../../../public/img/hor1x2.png";

const Shop = () => {
  const isChecked = true;
  return (
    <>
      <div>
        <div
          className="hero min-screen"
          style={{
            backgroundImage: `url(${headerimg})`,
          }}
        >
          <Image
            src={headerimg}
            alt=""
            width={1200}
            height={500}
            style={{
              backgroundImage: `url(${headerimg})`,
              backgroundSize: "cover", // ตั้งค่าให้รูปภาพปรับขนาดเต็มพื้นที่
              backgroundPosition: "center", // ตั้งค่าให้รูปภาพอยู่ตรงกลาง
            }}
          />
          <div></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-black">Shop Page</h1>
              <p className="mb-5 text-black">
                Let’s design the place you always imagined.
              </p>
            </div>
          </div>
        </div>
        <table className="grid justify-items-center">
          <tbody>
            <tr>
              <td className="pr-35 pb-50 pt-10 float-left">
                <div>
                  <div className="flex">
                    <Image src={vectorfilter} alt={""} />
                    <p className="font-bold pr-5 pl-3">Filter</p>
                  </div>
                  <div className="font-bold pt-5 pb-5">
                    <p>CATEGORIES</p>
                  </div>
                  <table className="pr-40 grid justify-items-center overflow-y-auto h-32">
                    <tbody>
                      <tr>
                        <td>All Rooms</td>
                      </tr>
                      <tr>
                        <td>Living Rooms</td>
                      </tr>
                      <tr>
                        <td>Bedroom</td>
                      </tr>
                      <tr>
                        <td>Kitchen</td>
                      </tr>
                      <tr>
                        <td>Bathroom</td>
                      </tr>
                      <tr>
                        <td>Dinning</td>
                      </tr>
                      <tr>
                        <td>Outdoor</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="pt-5">
                    <p className="font-bold">PRICE</p>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">All Price</span>
                      <input
                        type="checkbox"
                        checked={false}
                        className="checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <p className="label-text">$0.00 - 99.99</p>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        className="checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <p className="label-text">$100.00 - 199.99</p>
                      <input
                        type="checkbox"
                        checked={false}
                        className="checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <p className="label-text">$200.00 - 299.99</p>
                      <input
                        type="checkbox"
                        checked={false}
                        className="checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <p className="label-text">$300.00 - 399.99</p>
                      <input
                        type="checkbox"
                        checked={false}
                        className="checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <p className="label-text">$200.00 - 299.99</p>
                      <input
                        type="checkbox"
                        checked={false}
                        className="checkbox"
                      />
                    </label>
                  </div>
                </div>
              </td>
              <td className="pt-10 pl-20 ml-40">
                <div className="flex pb-10">
                  <div className="pr-96 font-bold">Living Room</div>
                  <div>
                    <div className="dropdown">
                      <div tabIndex={0} className="font-bold pr-10">
                        Sort by
                      </div>
                      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                          <a>Option 1</a>
                        </li>
                        <li>
                          <a>Option 2</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="border p-1 rounded">
                      <Image src={grid3x3} alt={""} width={25} />
                    </div>
                    <div className="border p-1 rounded ml-1">
                      <Image src={grid2x2} alt={""} width={25} />
                    </div>
                    <div className="border p-1 rounded ml-1">
                      <Image src={ver1x2} alt={""} width={25} />
                    </div>
                    <div className="border p-1 rounded ml-1">
                      <Image src={hor1x2} alt={""} width={25} />
                    </div>
                  </div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="pr-5 relative">
                        <Image src={card1} alt={""} width={250} height={250} />
                        <div className="indicator absolute top-3 left-5 h-7 w-20">
                          <p className="text-black bg-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm font-bold">
                            NEW
                          </p>
                        </div>
                        <div className="indicator absolute top-10 left-5 h-7 w-20 pt-2">
                          <p className="text-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm bg-emerald-400 font-bold">
                            -50%
                          </p>
                        </div>
                      </td>
                      <td className="pr-5 relative">
                        <Image src={card2} alt={""} width={250} height={250} />
                        <div className="indicator absolute top-3 left-5 h-7 w-20">
                          <p className="text-black bg-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm font-bold">
                            NEW
                          </p>
                        </div>
                        <div className="indicator absolute top-10 left-5 h-7 w-20 pt-2">
                          <p className="text-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm bg-emerald-400 font-bold">
                            -50%
                          </p>
                        </div>
                      </td>
                      <td className="pr-5 relative">
                        <Image src={card3} alt={""} width={250} height={250} />
                        <div className="indicator absolute top-3 left-5 h-7 w-20">
                          <p className="text-black bg-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm font-bold">
                            NEW
                          </p>
                        </div>
                        <div className="indicator absolute top-10 left-5 h-7 w-20 pt-2">
                          <p className="text-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm bg-emerald-400 font-bold">
                            -50%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-1"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                    </tr>
                    <tr>
                      <td className="font-bold">Loveseat Sofa</td>
                      <td className="font-bold">Luxury Sofa</td>
                      <td className="font-bold">Table lamp</td>
                    </tr>
                    <tr>
                      <td className="font-bold">$199.00</td>
                      <td className="font-bold">$299.00</td>
                      <td className="font-bold">$19.00</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="pr-5 relative pt-5">
                        <Image src={card4} alt={""} width={250} height={250} />
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
                      </td>
                      <td className="pr-5 relative pt-5">
                        <Image src={card5} alt={""} width={250} height={250} />
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
                      </td>
                      <td className="pr-5 relative pt-5">
                        <Image src={card6} alt={""} width={250} height={250} />
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
                      </td>
                    </tr>
                    <tr>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-4"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-4"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-4"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-4"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-4"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-5"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-6"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                    </tr>
                    <tr>
                      <td className="font-bold">White Drawer unit</td>
                      <td className="font-bold">Black Tray table</td>
                      <td className="font-bold">Lamp</td>
                    </tr>
                    <tr>
                      <td className="font-bold">$89.99</td>
                      <td className="font-bold">$19.99</td>
                      <td className="font-bold">$39.00</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="pr-5 relative pt-5">
                        <Image src={card7} alt={""} width={250} height={250} />
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
                      </td>
                      <td className="pr-5 relative pt-5">
                        <Image src={card8} alt={""} width={250} height={250} />
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
                      </td>
                      <td className="pr-5 relative pt-5">
                        <Image src={card9} alt={""} width={250} height={250} />
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star"
                            checked
                          />
                        </div>
                      </td>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                      <td><div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-9"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-9"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-9"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-9"
                            className="mask mask-star"
                          />
                          <input
                            type="radio"
                            name="rating-9"
                            className="mask mask-star"
                            checked
                          />
                        </div></td>
                    </tr>
                    <tr>
                      <td className="font-bold">Light Beige Pillow</td>
                      <td className="font-bold">Table Lamp</td>
                      <td className="font-bold">Bamboo Basket</td>
                    </tr>
                    <tr>
                      <td className="font-bold">$3.99</td>
                      <td className="font-bold">$39.99</td>
                      <td className="font-bold">$9.99</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pt-10 flex justify-center items-center pl-60">
          <button className="btn btn-outline rounded-full w-60">
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
