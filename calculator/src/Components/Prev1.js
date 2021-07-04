// import React, { Component } from 'react'
import React, { Component, useContext } from 'react'
// import { DataProvider } from './DataContext'
import {BrowserRouter , Link} from 'react-router-dom'
import styled from 'styled-components'

import { DataProvider , DataContext} from './DataContext'
import ErrorBoundary from './ErrorBoundary'
import Previous from './Previous'
// import { DataContext } from './DataContext';
import Sample2 from './Sample2';
import { IoIosReturnLeft } from 'react-icons/fa';


function Prev1() {
    const [data, setData]= useContext(DataContext)
    const Button=styled.a`
    `

    console.log('in prev1', data)
    return (
        <div>
            <Link to="/">
                <button 
                  type='button' 
                  // onClick={()=>this.props.showValue()}
                  className='btn-work'>Return</button>
            </Link>
            <ErrorBoundary>
                <Previous/>
            </ErrorBoundary>
        </div>
    )
    
}

export default Prev1
