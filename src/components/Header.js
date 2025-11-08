import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { LogOut } from "lucide-react";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from "react-redux";

const Header = () => {
 const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }



  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'
      />
        {user && (<div
          className="relative p-5"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          {/* Profile Image */}
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="Sahil Shirodkar"
            className="w-12 h-12 rounded-sm cursor-pointer"
          />

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div
              className="absolute right-0 top-[90%] w-56 bg-[#141414] text-white rounded-md 
                        shadow-[0_4px_15px_rgba(0,0,0,0.7)] border border-gray-800 text-sm 
                        transition-all duration-200 z-50"
            >
              {/* Little triangle pointer */}
              <div className="absolute right-6 -top-2 w-3 h-3 bg-[#141414] rotate-45 border-l border-t border-gray-700"></div>

              {/* Profile Section */}
              <div className="flex items-center space-x-3 px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer mt-2">
                <img
                  className="w-8 h-8 rounded-sm object-cover text-white"
                  src={user.photoURL}
                  alt={user.displayName}
                />
                <p>{user.displayName}</p>
              </div>

              <div className="border-t border-gray-700 my-1" />

              {/* Sign Out */}
              <div onClick={handleSignOut}
              className="px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer flex items-center gap-2 text-gray-300">
                <LogOut size={16} />
                <span>Sign out of Netflix</span>
              </div>
            </div>
          )}
        </div>
        )
}




    </div>
  )
}

export default Header;
