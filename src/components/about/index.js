import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const [fashion, setFashion]=useState([]);

    const GETFashion=()=>{
        axios(`https://fakestoreapi.com/products`).then((res)=>{
setFashion(res.data)
        })

    }
    console.log(fashion);
useEffect(()=>{
    GETFashion()
},0 )

    return (
        <div className='container'>
            <div className='about'>
                {
                    fashion.map((el)=>(
                       

<div class="w-full max-w-sm bg-white rounded-lg ">
    <a href="#">

        <Link to={'/detal'}>


        <img id='das' class="sap p-8 rounded-t-lg" src={el.image} alt="product image" />
        </Link>
<h1>{el.title}</h1>

    </a>

</div>

                    ))
                }


            </div>
        </div>
    );
};

export default About;