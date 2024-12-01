import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { QuestionMarkRounded } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const Profile = () => {
  return (
    <>
      <div className="mx-40 mt-10 flex gap-10">
        <div className="flex flex-col w-fit">
          <div className="flex flex-col gap-5 border border-gray-300 rounded-lg p-5 w-fit">
            <div className="flex gap-3 ml-3">
              <PersonOutlineOutlinedIcon />
              <p>Profile</p>
            </div>
            <div className="bg-gray-300 h-px w-56"></div>

            <div className="flex gap-3 ml-3">
              <Inventory2OutlinedIcon />
              <p>Orders</p>
            </div>
            <div className="bg-gray-300 h-px w-56"></div>

            <div className="flex gap-3 ml-3">
              <LocationOnOutlinedIcon />
              <p>Addresses</p>
            </div>
            <div className="bg-gray-300 h-px w-56"></div>

            <div className="flex gap-3 ml-3">
              <ContactSupportOutlinedIcon />
              <p>FAQ</p>
            </div>
            <div className="bg-gray-300 h-px w-56"></div>
          </div>
          <div className="border border-rose-700 rounded-xl text-center p-4 mt-4 w-full">
            <button className="font-semibold text-rose-700">Logout</button>
          </div>
        </div>

        <div className="flex flex-col gap-7 w-full">
          <div className="flex gap-4">
            <div className="relative text-nowrap flex-1">
              <input
                type="text"
                id="firstname"
                className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none"
              />
              <label
                htmlFor="firstname"
                className="text-gray-500 text-sm absolute -top-2 left-3  transition-all transform bg-white px-1"
              >
                First Name *
              </label>
            </div>
            <div className="relative text-nowrap flex-1">
              <input
                type="text"
                id="lastname"
                className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none"
              />
              <label
                htmlFor="lastname"
                className="text-gray-500 text-sm absolute -top-2 left-3  transition-all transform bg-white px-1"
              >
                Last Name *
              </label>
            </div>
          </div>

          <div className="relative text-nowrap">
            <input
              type="email"
              id="email"
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none"
            />
            <label
              htmlFor="email"
              className="text-gray-500 text-sm absolute -top-2 left-3  transition-all transform bg-white px-1"
            >
              Email *
            </label>
          </div>

          <div className="relative text-nowrap">
            <input
              type="mobile"
              id="mobilenumber"
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none"
            />
            <label
              htmlFor="mobilenumber"
              className="text-gray-500 text-sm absolute -top-2 left-3  transition-all transform bg-white px-1"
            >
              Mobile Number *
            </label>
          </div>

          <div className="relative text-nowrap">
            <input
              type="date"
              id="dateofbirth"
              className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none "
            />
            <label
              htmlFor="dateofbirth"
              className="text-gray-500 text-sm absolute -top-2 left-3  transition-all transform bg-white px-1"
            >
              DOB
            </label>
          </div>

          <div>
          <h3 className="text-gray-500 text-sm mb-4 ">Gender</h3>

          <div className="flex gap-4">
            
          <div className="flex gap-2">
          <input type="radio" id="male" name="gender" className="cursor-pointer" />
            <label htmlFor="male" className="text-gray-900 text-sm">Male</label>
          </div>

          <div className="flex gap-2">
          <input type="radio" id="female" name="gender" className="cursor-pointer" />
            <label htmlFor="female"  className="text-gray-900 text-sm">Female</label>
          </div>
          </div>

          </div>


          <button className="border border-gray-300 p-4 rounded-xl text-xl text-gray-400 font-semibold">Save changes</button>


          
        </div>
      </div>
    </>
  );
};

export default Profile;
