import styled from 'styled-components'
import Search from '../Search'
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
        
            <Credits>
                &copy; Carin Wood, all rights reserved
            </Credits>
   
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
    widht: 100%;
    height: 10vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding-left: 50px;
    padding-right: 50px;
`

const Credits = styled.div`
    font-size: 14px;
    letter-spacing: 1.8px;
    word-spacing: 0.1px;
    font-family: "Open Sans";   
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cormorant SC';
    margin-top: 0px;
    font-size: 14px;

    @media (max-width: 429px) {
        font-size: 10px;
        letter-spacing: 1.2px;
        word-spacing: 0px;
    }
`

export default Footer