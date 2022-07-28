import styled from 'styled-components'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Search = ({toggleSearchFunc}) => {
    const navigate = useNavigate()
    const [input, setInput] = useState('ärter')

   const submitHandler = (e) => {
        e.preventDefault()
   }

   const handleSearch = () => {
    navigate('/searchresults/'+input)
    setInput('')
    toggleSearchFunc()
   }

  return (
    <FormStyle onSubmit={submitHandler}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <SearchButton onClick={() =>handleSearch()}><BsSearch/></SearchButton>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    position: absolute;
    width: 60%;
    bottom: -30%;
    left: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

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
`

export default Search