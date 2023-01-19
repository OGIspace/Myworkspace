import styled from "styled-components";
import {device} from '../Device.size'

const Wrapper = styled.before`
     margin: 0;
     padding: 0;
     box-sizing: border-box;
`
export const container = styled.container`
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    
    @media ${device.laptop} { 
    max-width: 800px;
    .container{
    padding-left: 15px;
    padding-right: 15px;
    }
  } 
  @media ${device.desktop} {
    max-width: 1400px;
    .container{
    padding-left: 15px;
    padding-right: 15px;
  }
}
`