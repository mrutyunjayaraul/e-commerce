import React from "react"

import "./header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Card } from "./Card"
import { User } from "./User"


export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'></div>
          <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg" height='100px' width='100px'></img>
          <div className="Title"><h1><marquee> Medicine-Pharma</marquee></h1></div>
          <div className='search flex'>
            <AiOutlineSearch className='searchIcon' />
            <input type='text' placeholder='Search...' />
          </div>
          <div className='account flexCenter'>
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
