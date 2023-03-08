import { Link } from "gatsby"
import React from "react"

const menuData = [
  { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
  {
    title: "Tutorials",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  { title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
]

const Header = () => {
  return (
    <>
      {menuData.map((item, index) => (
        <Link to={item.link}>
          <img key={index} alt="icon" src={item.icon}></img>
          {item.title}
        </Link>
      ))}
    </>
  )
}

export default Header
