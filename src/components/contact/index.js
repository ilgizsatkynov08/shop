import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
	const [user, setUser]=useState([])

	const AddProduct=()=>{
		axios(`https://api.escuelajs.co/api/v1/users`).then((res)=>{
			setUser(res.data)
		})
	}

	console.log(user);
	useEffect(()=>{
  AddProduct()
	},[])
	return (
		<div className='container'>
			<div className='product'>
{
	user.map((el)=>(
		<div className='username'>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={el.avatar} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.email}</p>
				<h2 className='text-xl'>{el.updatedAt}</h2>
				<h3 className='text-xl'>{el.role}</h3>
    </div>
		
</a>
</div>

	))
}
			</div>
			
		</div>
	);
};

export default Product;
