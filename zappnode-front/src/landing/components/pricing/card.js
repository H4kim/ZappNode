import React, {useState, useEffect} from 'react';
import Button from '../button/button';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Card = (props)=> {
    let lists = props.list;
    console.log(lists)
    
    let li = lists.map(cur => {
        return (
            <li className="text-gray-600 font-semibold my-3">{cur}</li>
        )
    });

    return(
        <div className="bg-secondary lg:w-1/4 md:w-2/3 sm:w-3/3 mx-6 flex justify-center items-center flex-col rounded mb-8 pb-10">
        <div className="w-full  py-4 bg-green bg-green">
        <h2 className="text-1xl font-semibold text-center">{props.heading}</h2>
        </div>
        <div className="my-8">
        <div className="text-green px-6 py-2 bg-gray-300 rounded-full my-3">
        <h1 className="text-3xl">${props.amount}/<span className="text-sm">mo</span></h1>
        </div> 
        <p className="font-semibold text-gray-600">Billed ${props.amount * 12} yearly</p>
        </div>
        <div>
        <ul className="flex flex-col text-center text-secondary">
        {li}
        </ul>
        <div className="flex justify-center mt-6">
        <Button link="#" content="Sign up" styles="text-cl-none btn-primary py-3 px-10 rounded-full font-semibold"/>
        </div>
        </div>
        </div>
    )
}

export default Card;