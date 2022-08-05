import styled from 'styled-components'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Search = ({toggleSearchFunc, setFoldRespMenu}) => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

   const submitHandler = (e) => {
        e.preventDefault()
   }

   const handleSearch = () => {
    navigate('/searchresults/'+input)
    setInput('')
    setFoldRespMenu(false)
    toggleSearchFunc()
    
   }

  return (
    <FormStyle onSubmit={submitHandler}>
        <input placeholder="Sök recept..." type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <SearchButton onClick={() =>handleSearch()}><BsSearch/></SearchButton>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    position: absolute;
    width: 60%;
    bottom: -40%;
    left: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
 
    @media (max-width: 811px) {
        visibility: visible;
        position: unset;
        margin-top: 0 auto;
    }
    @media (max-width: 429px) {
        visibility: visible;
        position: unset;
        margin-top: 0 auto;
    }

    input {
        border: 0.9px solid black;
        background: white;
        font-size: 14px;
        color: black;
        padding: 5px 30px 5px 10px;
        outline: none;
        border-radius: 5px;
        text-align: left;
        font-family: "Open Sans";
        letter-spacing: 1.2px;
        width: 210px;

        @media (max-width: 811px) {
            font-size: 16px;
            width: 230px;
        }

        @media (max-width: 429px) {
            width: 160px;
            font-size: 12px;
        }
    }

    svg{
        color: black;
        font-size: 12px;
        margin-left: 8px;
        font-weight: 100;
    }
`

const SearchButton = styled.div`
    font-family: "Open Sans";
    font-size: 14px;
    cursor: pointer;
    position: absolute;
    margin-left: 170px;
    
    :hover {
        opacity: 0.8;
    }

    @media (max-width: 429px) {
        visibility: visible;
        margin-left: 120px;
        
    }
`

export default Search