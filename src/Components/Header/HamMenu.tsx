"use client"
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const HamMenu = () => {
    const [HamMenu, setHamMenu] = useState(false)
  return (
    <div>
        <FaBars className='w-[30px] text-[#8750F7]' size={"100%"} onClick={()=>setHamMenu(!HamMenu)}/>
    </div>
  )
}

export default HamMenu