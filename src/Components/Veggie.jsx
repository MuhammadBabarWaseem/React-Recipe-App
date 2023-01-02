import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

export default function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=419ed0a19a2245269dbdbdeca92d071b&number=15&tags=vegetarian`);
            const data = await api.json();
            setVeggie(data.recipes)
            console.log(data.recipes);
        }
    
   

    return (
        <div>
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>
            <Splide
                options={{
                    perPage: 3 ,
                    arrows: false,
                    pagination: true,
                    drag: 'free',
                    gap: '4rem',
                }}
            >
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    </div>
    )
}



const Wrapper = styled.div`margin: 4rem 0rem`;
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem; 
    overflow: hidden;
    // position: relative;
    img{
        border-radius: 4rem;
        position: absolute;
        // left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 2rem;
        height: 40%;
        display: flex;
        justify-content:center;
        align-items : center; 

    }
    `
const Gradient = styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    baclground: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

    `
