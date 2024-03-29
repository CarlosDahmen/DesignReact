import React from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

const MenuTooltip = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

export default MenuTooltip

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 1;
  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
