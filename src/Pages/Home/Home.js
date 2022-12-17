import React, { useState } from "react";
import img2 from "../../Assets/eccom-banner.png";
import {
  FaAlignJustify,
  FaAngleRight,
  FaBookOpen,
  FaBorderAll,
  FaCaretDown,
  FaCopy,
  FaFacebook,
  FaFileAlt,
  FaFileImage,
  FaGlobe,
  FaInfoCircle,
  FaMapMarked,
  FaPalette,
  FaPen,
  FaRegCreditCard,
  FaRegEdit,
  FaRegPlusSquare,
  FaRegSquare,
  FaRocketchat,
  FaSellsy,
  FaShoppingCart,
  FaSignal,
  FaTachometerAlt,
  FaTelegramPlane,
  FaThLarge,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Statistics from "./Statistics/Statistics";
import Dashboard from "./Dashboard/Dashboard";

const Home = () => {
  const setupMenus = [
    {
      name: "Manage Business Profile",
      icon: <FaSellsy></FaSellsy>,
      link: "#",
    },
    {
      name: "Write An Update",
      icon: <FaPen></FaPen>,
      link: "#",
    },
    {
      name: "Add a Page",
      icon: <FaFileAlt></FaFileAlt>,
      link: "#",
    },
    {
      name: "Add a Domain",
      icon: <FaGlobe></FaGlobe>,
      link: "#",
    },
    {
      name: "Enable Ecommerce",
      icon: <FaShoppingCart></FaShoppingCart>,
      link: "#",
    },
    {
      name: "Choose Template For Your Site",
      icon: <FaPalette></FaPalette>,
      link: "#",
    },
    {
      name: "Customize Menu",
      icon: <FaAlignJustify></FaAlignJustify>,
      link: "#",
    },
    {
      name: "Manage Website Integrations",
      icon: <FaBorderAll></FaBorderAll>,
      link: "#",
    },
  ];

  const glanceMenus = [
    {
      value: 1,
      icon: <FaPen></FaPen>,
      text: "Updates",
    },
    {
      value: 0,
      icon: <FaShoppingCart></FaShoppingCart>,
      text: "Products",
    },
    {
      value: 0,
      icon: <FaFileImage></FaFileImage>,
      text: "Media",
    },
    {
      value: 0,
      icon: <FaCopy></FaCopy>,
      text: "Updates",
    },
  ];

  const premiumOffers = [
    {
      name: "E-commerce",
      icon: <FaSellsy></FaSellsy>,
      link: "#",
    },
    {
      name: "Facebook Pixel",
      icon: <FaFacebook></FaFacebook>,
      link: "#",
    },
    {
      name: "Live Chat",
      icon: <FaRocketchat></FaRocketchat>,
      link: "#",
    },
    {
      name: "Google Analytics",
      icon: <FaSignal></FaSignal>,
      link: "#",
    },
    {
      name: "Google Tag Manger",
      icon: <FaRegSquare></FaRegSquare>,
      link: "#",
    },
    {
      name: "WhatsApp Chat",
      icon: <FaWhatsapp></FaWhatsapp>,
      link: "#",
    },
    {
      name: "Google Translate",
      icon: <FaBookOpen></FaBookOpen>,
      link: "#",
    },
    {
      name: "Google Maps",
      icon: <FaMapMarked></FaMapMarked>,
      link: "#",
    },
  ];

  const [referDetails, setReferDetails] = useState(false);
  return (
    <div className="px-4 py-2 bg-blue-50">
      <div>
        <div className="flex justify-between gap-3">
          <div className="flex gap-3 items-baseline">
            <div className="flex gap-3 items-baseline text-2xl font-semibold text-gray-500">
              <FaTachometerAlt></FaTachometerAlt>
              <h1>Dashboard</h1>
            </div>
            <p className="text-sm font-light text-gray-400 hidden md:block">
              overview of your website
            </p>
          </div>
          <button className="bg-sky-800 text-white text-sm px-3 py-2 rounded-sm flex items-center gap-2">
            <FaTelegramPlane></FaTelegramPlane> <span>View Site</span>
          </button>
        </div>
        {/* subscription */}
        <div className="bg-blue-100 my-5 px-3 py-3 rounded border-l-4 border-blue-500">
          <h3 className="text-blue-500 text-[16px] font-semibold">
            Hi Murad Hossain,
          </h3>
          <p className="text-xs text-gray-500 my-3">
            You are on <span className="font-bold">day 5</span> of your trial
            period. To avail premium features and continue growing your business
            buy one of our subscription plans.
          </p>
          <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
            <FaRegCreditCard></FaRegCreditCard>
            <h3>Buy Subscription</h3>
          </div>
        </div>
        {/* Refer */}
        <div className="bg-yellow-600 py-4 rounded-sm px-4">
          <div
            onClick={() => setReferDetails(!referDetails)}
            className="flex items-center gap-2 text-xl font-semibold text-white "
          >
            <h2>Refer and Earn</h2>
            <FaCaretDown></FaCaretDown>
          </div>
          <div>
            {referDetails && (
              <div className="text-white px-4 py-8">
                <div className="flex items-center gap-6 text-2xl font-semibold">
                  <FaThLarge></FaThLarge>
                  <h2>Become a Affiliate Now !!!!</h2>
                </div>
                <button className="bg-orange-400 px-2 py-1 text-xs my-5 rounded-sm">
                  Apply Now!
                </button>
                <p className="text-sm">
                  Every time your contact buys or renews a subscription, you
                  will earn 30% lifetime recurring commissions!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* main */}
      <div className="grid grid-cols-3 gap-5">
        {/* left side */}
        <div className="col-span-3 lg:col-span-2">
          <div className="p-5">
            <div
              className="lg:flex md:justify-between  items-center px-4 py-5 rounded bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="flex items-center text-lg gap-4 text-white">
                <FaShoppingCart className="text-5xl sm:text-3xl"></FaShoppingCart>
                Turn on eCommerce to enable your online cart and collect
                payments online
              </div>
              <div className="flex justify-center">
                <button
                  className="text-[16px] font-semibold 
             bg-accent px-3 py-2 text-white rounded-sm whitespace-nowrap mt-3 lg:mt-0"
                >
                  Turn it on
                </button>
              </div>
            </div>
          </div>
          {/* dashboard */}
          <Dashboard></Dashboard>
          {/* setup website */}
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-3 lg:col-span-2">
              <div className="border rounded overflow-hidden mb-6 shadow-sm">
                <h1 className="text-lg font-semibold px-4 py-2 border-b bg-gray-100">
                  Let's Set Up Your Website
                </h1>
                <div>
                  {setupMenus.map((menu, idx) => (
                    <Link
                      key={idx}
                      className="flex justify-between items-center px-4 py-4 border-b hover:bg-gray-100 bg-white"
                      to={`${"#"}`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{menu.icon}</span>
                        <p className="text-gray-500">{menu.name}</p>
                      </div>
                      <FaAngleRight></FaAngleRight>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 pb-5 bg-white border px-5 rounded-sm">
              <h1 className="text-lg font-semibold py-2">Stats at Glance</h1>
              <div className="grid grid-cols-1 gap-5">
                {glanceMenus.map((menu, idx) => (
                  <div key={idx} className="bg-blue-50 w-full rounded-sm">
                    <span className="flex justify-end text-xs text-gray-500 m-[2px]">
                      <FaRegPlusSquare></FaRegPlusSquare>
                    </span>
                    <h1 className="text-3xl font-semibold text-center">
                      {menu.value}
                    </h1>
                    <div className="flex items-center justify-center text-xs text-gray-500 gap-2 mb-5 mt-3">
                      <span>{menu.icon}</span>
                      <p>{menu.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* statistics */}
          <Statistics></Statistics>
        </div>
        {/* right side */}
        <div className="col-span-3 lg:col-span-1">
          {/* big bang sale */}
          <div className="relative bg-black py-8 pl-8 my-[1px]">
            <div className="grid grid-cols-2 text-white items-center">
              <div className="font-semibold">
                <h1>
                  BIG BANG{" "}
                  <span className=" text-yellow-500 text-4xl">SALE</span>
                </h1>
              </div>
              <div className="text-center">
                <h1 className="font-semibold leading-none">
                  Websites + AutoSEO starts at <br />{" "}
                  <span className=" text-yellow-500 text-4xl">344.52</span>{" "}
                  <span className="font-light text-[10px]">/month</span>
                </h1>
              </div>
            </div>
            <button className="absolute right-0 bottom-0 flex items-center gap-3 bg-yellow-500 px-2 py-1">
              Buy Now{" "}
              <span>
                <FaAngleRight></FaAngleRight>
              </span>
            </button>
          </div>
          {/* premium users offer */}
          <div className="border rounded overflow-hidden mb-6 shadow-sm">
            <h1 className="text-lg font-semibold px-4 py-2 border-b bg-gray-100">
              What we Offer to our Premium users
            </h1>
            <div>
              {premiumOffers.map((offer, idx) => (
                <Link
                  key={idx}
                  className="flex justify-between items-center px-4 py-3 border-b hover:bg-gray-100 bg-white"
                  to={`${"#"}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{offer.icon}</span>
                    <p className="text-gray-500">{offer.name}</p>
                  </div>
                  <FaAngleRight></FaAngleRight>
                </Link>
              ))}
            </div>
          </div>
          {/* help */}
          <div className="bg-white rounded overflow-hidden mb-6 border">
            <div className="flex justify-between items-center px-4 bg-gray-100">
              <div className="text-lg font-semibold py-2 border-b flex items-center gap-2">
                <FaInfoCircle></FaInfoCircle>
                <h1>Help</h1>
              </div>
              <FaRegEdit></FaRegEdit>
            </div>
            <div className="bg-white p-5">
              <p>Need Help with Website Setup?</p>
              <div className="flex items-center gap-2 mt-2">
                <FaAngleRight></FaAngleRight>
                <p className="text-gray-500 text-sm">Visit Our Help Centre</p>
              </div>
            </div>
          </div>
          {/* support */}
          <div className="bg-white rounded overflow-hidden border mb-6">
            <div className="px-4 bg-gray-100">
              <div className="text-lg font-semibold py-2 border-b flex items-center gap-2">
                <FaInfoCircle></FaInfoCircle>
                <h1>Help</h1>
              </div>
            </div>
            <div className="bg-white p-5">
              <p>
                Still have question about how Websites.co.in can help your
                business?
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaAngleRight></FaAngleRight>
                <p className="text-gray-500 text-sm">
                  Write a main to{" "}
                  <span className="font-bold">support@websites.co.in</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaAngleRight></FaAngleRight>
                <p className="text-gray-500 text-sm">
                  Get Support on <span className="font-bold">Call</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
