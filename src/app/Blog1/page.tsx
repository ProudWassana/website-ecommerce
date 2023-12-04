import React from "react";
import Image from "next/image";
import headerblog from "../../../public/img/headerblog.png";
import grid3x3 from "../../../public/img/grid3x3.png";
import grid2x2 from "../../../public/img/grid2x2.png";
import ver1x2 from "../../../public/img/ver1x2.png";
import hor1x2 from "../../../public/img/hor1x2.png";
import Blog1 from "../../../public/img/Blog1.png";
import Blog2 from "../../../public/img/Blog2.png";
import Blog3 from "../../../public/img/Blog3.png";
import Blog4 from "../../../public/img/Blog4.png";
import Blog5 from "../../../public/img/Blog5.png";
import Blog6 from "../../../public/img/Blog6.png";
import Blog7 from "../../../public/img/Blog7.png";
import Blog8 from "../../../public/img/Blog8.png";
import Blog9 from "../../../public/img/Blog9.png";

const Blog01 = () => {
  return (
    <div>
      <div
        className="hero min-screen"
        style={{
          backgroundImage: `url(${headerblog})`,
        }}
      >
        <Image
          src={headerblog}
          alt=""
          width={1200}
          height={500}
          style={{
            backgroundImage: `url(${headerblog})`,
            backgroundSize: "cover", // ตั้งค่าให้รูปภาพปรับขนาดเต็มพื้นที่
            backgroundPosition: "center", // ตั้งค่าให้รูปภาพอยู่ตรงกลาง
          }}
        />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">Our Blog</h1>
            <p className="mb-5 text-black">Home ideas and design inspiration</p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid justify-center items-center ">
          <div className="flex pt-10 ">
            <p className="font-bold pr-5 pl-3">All Blog</p>
            <p className="font-bold pr-5 pl-3">Featured</p>
            <div className="flex pb-10 pl-96">
              <div className="dropdown">
                <div tabIndex={0} className="font-bold pr-10 ">
                  Sort by
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
          </div>
        </div>
        <div>
          <table className="pt-10 flex justify-center items-center pl-36">
            <tbody>
              <tr>
                <td className="pr-5 relative">
                  <Image src={Blog1} alt={""} width={300} />
                </td>
                <td className="pr-5 relative">
                  <Image src={Blog2} alt={""} width={300} />
                </td>
                <td className="pr-5 relative">
                  <Image src={Blog3} alt={""} width={300} />
                </td>
              </tr>
              <tr>
                <td className="font-bold">
                  7 ways to decor your home like a professional
                </td>
                <td className="font-bold">
                  Inside a beautiful kitchen organization
                </td>
                <td className="font-bold">
                  Decor your bedroom for your children
                </td>
              </tr>
              <tr>
                <td>October 16, 2023</td>
                <td>October 16, 2023</td>
                <td>October 16, 2023</td>
              </tr>
              <tr>
                <td className="pr-5 relative pt-5">
                  <Image src={Blog4} alt={""} width={300} />
                </td>
                <td className="pr-5 relative pt-5">
                  <Image src={Blog5} alt={""} width={300} />
                </td>
                <td className="pr-5 relative pt-5">
                  <Image src={Blog6} alt={""} width={300} />
                </td>
              </tr>
              <tr>
                <td className="font-bold">
                  Modern texas home is beautiful and completely kid-friendly
                </td>
                <td className="font-bold">
                  Modern texas home is beautiful and completely kid-friendly
                </td>
                <td className="font-bold">
                  Modern texas home is beautiful and completely kid-friendly
                </td>
              </tr>
              <tr>
                <td>October 16, 2023</td>
                <td>October 16, 2023</td>
                <td>October 16, 2023</td>
              </tr>

              <tr>
                <td className="pr-5 relative pt-5">
                  <Image src={Blog7} alt={""} width={300} />
                </td>
                <td className="pr-5 relative pt-5">
                  <Image src={Blog8} alt={""} width={300} />
                </td>
                <td className="pr-5 relative pt-5">
                  <Image src={Blog9} alt={""} width={300} />
                </td>
              </tr>
              <tr>
                <td className="font-bold">
                  Modern texas home is beautiful and completely kid-friendly
                </td>
                <td className="font-bold">
                  Modern texas home is beautiful and completely kid-friendly
                </td>
                <td className="font-bold">
                  Modern texas home is beautiful and completely kid-friendly
                </td>
              </tr>
              <tr>
                <td>October 16, 2023</td>
                <td>October 16, 2023</td>
                <td>October 16, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pt-10 flex justify-center items-center">
          <button className="btn btn-outline rounded-full w-60">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog01;
