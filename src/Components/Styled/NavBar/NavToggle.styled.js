import styled from "styled-components"; 
import { device } from "../Device.size";

export const NavToggle = styled.div`
    cursor: pointer;
    display: none;
`
export const toogle__icon = styled.div`
    width: 25px;
    height: 2px;
    background: #ddd;
    margin: 5px 35px;
    transition: 0.3s ease;
    @media ${device.laptop} { 
    max-width: 800px;
    .toggler__icon {
    display: block;
  }
  }

  @media ${device.desktop} {
    max-width: 1400px;
    .toggler__icon {
    display: block;
  }
  }
`