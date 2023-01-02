import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'

function Recipe() {

    let params = useParams();
    // console.log(params);
    const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=419ed0a19a2245269dbdbdeca92d071b`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
    }
    // console.log('param name ' ,params.id);

    useEffect(() => {
        fetchDetails();
    }, [params.id])

    return <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>

            {activeTab === 'instructions' && (
                <div>
                    <h4 style={{marginTop : '2rem'}} dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
                    <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
                </div>
            )}

            {activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )
                    )}
                </ul>
            )}




        </Info>
    </DetailWrapper>
}

const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;

.active{
    background: linear-gradient(35deg, #494949, #313131);
    color:white;
}

img{
    width:300px;
    height:300px;
    // margin-top : 1rem;

}

h2{
    margin-top : 5rem; 
    font-size:1rem;
    line-height:2rem;
}

ul{
    margin-top:2rem;
}
li{
    
}
`

const Button = styled.button`
padding : 1rem 2rem;
color : #313131;
background : white;
border : 2px solid black;
margin-right: 2rem;
font-weight: 600;
`
const Info = styled.div`
margin-left:10rem; 
`

export default Recipe