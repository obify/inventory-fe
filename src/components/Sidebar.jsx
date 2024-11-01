import React, { useState } from 'react'
//ICONS
import {LuBox} from 'react-icons/lu';
import { BiCategoryAlt } from "react-icons/bi";
import { IoList } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiLocationOn, CiLocationArrow1  } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { HiTemplate } from "react-icons/hi";
import filogo from '../assets/filogo.png';
import fivelogo from '../assets/fivelogo.png';

const Sidebar = () => {

    const[activeLink, setActiveLink] = useState(0)
    const handleActiveLink = (index)=>{
        setActiveLink(index);
    }

    const SIDEBAR_LINKS = [
        {id: 1, path: "/", name: "Dashboard", icon: LuBox},
        {id: 2, path: "/addLocation", name: "Add location", icon: CiLocationOn},
        {id: 3, path: "/locations", name: "Locations", icon: CiLocationArrow1 },
        {id: 4, path: "/addCategory", name: "Add category", icon: BiCategoryAlt},
        {id: 5, path: "/categories", name: "Categories", icon: IoList},
        {id: 6, path: "/addProduct", name: "Add product", icon: MdOutlineProductionQuantityLimits},
        {id: 7, path: "/products", name: "Products", icon: HiTemplate},
        {id: 7, path: "/login", name: "Logout", icon: LuLogOut},
    ];
  return (
    <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-3 px-4 bg-white'>
        {/* logo */}
        <div className='mb-6'>
            <img src={fivelogo} alt='logo' className='hidden md:flex rounded-full'/>
            <img src={filogo} alt='logo' className='w-8 md:hidden flex'/>
        </div>
        {/* navigation */}
        <ul className='my-6 space-y-6'>
            {
                SIDEBAR_LINKS.map((link, index)=>(
                    <li key={index} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : ""}`}>  
                       <Link to={link.path} onClick={()=>handleActiveLink(index)} className='flex justify-center md:justify-start items-center md:space-x-5'>
                            <span>{link.icon()}</span>
                            <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
                       </Link>
                    </li>
                ))
            }
        </ul>
        <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
            <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full'>
                {" "}
                <span>?</span><span className='hidden md:flex'>Need Help?</span>
            </p>
        </div>
    </div>
  )
}

export default Sidebar;