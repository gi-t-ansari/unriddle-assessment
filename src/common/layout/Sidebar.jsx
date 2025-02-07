import React from "react";
import logo from "../../assets/logo.jpg";
import { APP_URL, MENU_ITEMS } from "../../config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiSettingsLine } from "react-icons/ri";
import dummyImg from "../../assets/images.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (url) => {
    navigate(url);
  };

  const navigateToSetting = (e) => {
    e.preventDefault();
    navigate(APP_URL.SETTING);
  };

  const navigateToProfile = (e) => {
    e.preventDefault();
    navigate(APP_URL.PROFILE);
  };

  return (
    <aside className="h-screen w-16 relative bg-[#111111] text-white">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className="w-full">
        {MENU_ITEMS.map((item, index) => (
          <div
            onClick={() => handleNavigation(item.url)}
            key={index}
            className={`w-full h-fit cursor-pointer py-4 flex justify-center  ${
              item.url === location?.pathname ? "bg-[#e7f4db] " : "bg-inherit"
            } transition-all duration-300 ease-linear`}
          >
            <item.icon
              className={`text-xl  transition-all duration-300 ease-linear ${
                item.url === location?.pathname
                  ? "text-[#111111] scale-110"
                  : "text-[#e7f4db"
              }transition-all duration-300 ease-linear`}
            />
          </div>
        ))}
      </div>
      <footer className="w-full absolute bottom-0">
        <div
          onClick={navigateToSetting}
          className={`w-full h-fit py-4 cursor-pointer flex justify-center ${
            location?.pathname === APP_URL.SETTING
              ? "bg-[#e7f4db] text-[#111111]"
              : "bg-inherit"
          } transition-all duration-300 ease-linear`}
        >
          <RiSettingsLine
            className={`${
              location?.url === APP_URL.SETTING
                ? "text-[#111111] scale-110"
                : "text-[#e7f4db]"
            } text-xl transition-all duration-300 ease-linear`}
          />
        </div>
        <div
          className={`w-full h-fit py-4 cursor-pointer flex justify-center ${
            location?.pathname === APP_URL.PROFILE
              ? "bg-[#e7f4db]"
              : "bg-inherit"
          } transition-all duration-300 ease-linear`}
          onClick={navigateToProfile}
        >
          <div className="h-6 w-6 overflow-hidden rounded-full border border-white">
            <img className="w-full h-full" src={dummyImg} alt="profile-photo" />
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
