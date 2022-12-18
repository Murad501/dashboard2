import React from "react";
import {
  FaAngleRight,
  FaBookOpen,
  FaFacebook,
  FaMapMarked,
  FaRegSquare,
  FaRocketchat,
  FaSellsy,
  FaSignal,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PremiumOffer = () => {
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
  return (
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
  );
};

export default PremiumOffer;
