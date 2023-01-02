import React from 'react'
import Category from "./Components/Category";
import Pages from "./Pages/Pages";
import styled from 'styled-components';
import { BrowserRouter , Link } from 'react-router-dom';
import Search from './Components/Search';
import { GiKnifeFork } from 'react-icons/gi';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}> decliciousss </Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages />   
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
display:flex;
align-items: flex-start;
font-size:1.5rem;
font-weight:400;
font-family:'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: center;
align-items: center;

svg{
  font-size:2rem;
}
`



export default App;
