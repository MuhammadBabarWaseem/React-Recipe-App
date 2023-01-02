import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
        setInput(input)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type="text" />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin : 0rem 20rem;
position : relative;

div{
    width:100%;
    position:relative;
}

input{
border:none;
background: linear-gradient(35deg, #494949, #313131);
font-size:1.5rem;
color:white;
// position:absolute;
margin-left : -2.8rem;
padding:0.6rem 7rem;
border:none;
border-radius:0.6rem;
outline:none;
}
svg{
    position:absolute;
    top:50%
    left:50%;
    transform:translate(-120%,105%);
    color:white;

}


`

export default Search;