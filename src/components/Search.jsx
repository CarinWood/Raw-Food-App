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
        <SearchButton onClick={() =>handleSearch()}>Sök<BsSearch/></SearchButton>
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
        padding: 5px 10px;
        outline: none;
        border-radius: 5px;
        text-align: left;
        font-family: "Open Sans";
        letter-spacing: 1.2px;
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
    letter-spacing: 2px;
    padding: 5px 10px;
    width: 80px;
    border: 0.9px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;  
    
    :hover {
        opacity: 0.8;
    }

    :active {
        transform: translateY(2px);
    }
`

export default Search