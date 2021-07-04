import React, { Component, useContext } from 'react'
import {connect} from 'react-redux';
import { AiOutlineClose} from "react-icons/ai";
import {delValue} from '../Actions/actions'
// import { Link } from "react-router-dom";
import {BrowserRouter , Link} from 'react-router-dom'
import styled from 'styled-components'
import './body.css';
import ErrorBoundary from './ErrorBoundary'

import { DataContext } from './DataContext';

const Element=styled.a`
    color: white;
    display: flex;
    justify-content: center;
    :hover{
        color:green;
    }
    text-decoration:none;`



const Previous =() => {
    const [data, setData] = useContext(DataContext)
    console.log('data in history', data)
    
    if (data.length === 0){
        console.log('is empty',data)
        throw new Error('No value here')
    }
    else{
        console.log('not empty', data)
    }
    return (               
        <div className='li'  >
            {data.map((item,index)=>(       
                <div className='title1'  key={index} >
                    {/* <span className='word' onClick={()=>delValue(index)} > 
                        <AiOutlineClose/>
                    </span> */}
                    <Element >
                        {item}
                    </Element>
                </div>
            ))}
        </div>
            
    )
}

export default Previous;