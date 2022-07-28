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

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

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
`

export default Footer