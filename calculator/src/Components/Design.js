import React, { Component, useState, useContext } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './design.css'
import {connect} from 'react-redux';
import { DataProvider , DataContext} from './DataContext'

import {addValue, showValue} from '../Actions/actions';
import {BrowserRouter, Link } from "react-router-dom";
function Design() { 
  const [Number, setNumber] = useState('')
  const [data, setData]= useContext(DataContext)

console.log('data',data)
  const InputAccept = (event) => {
        let number=event.target.value;
        if(number){
            setNumber(number)
        }
      }
  const numberPad = (value) => {
        let input=value
        let number=  Number
        let count=0
        let status=false
        for(let i=0; i<number.length-1;i++){
          if(number[i]==='='){
            status= true
            console.log('= found  ')
            
          }
        }      
        if(status === true){
          console.log('= found  ')
          number=''
          if(input === '.'){
            number+='0'
            number+=input
            // count += 1
            console.log('do nothing', input, number)
            console.log('count', count)
          }else if(input === '+' || input === '-' || input === '/' || input === '*' ){
            number+='0'
            number+=input
          }
          else{
            number+=input
            // count += 1
            console.log('count', count)


            console.log('after adding', number, input)
          
          }
        }
        else{
        if(input!=='.'){
          if(number==='' && (input === '+' || input === '-' || input === '/' || input === '*' )){
            number+='0'
            number+=input    
          }
        if( parseInt(number[number.length-1])%1!==0){
          if(parseInt(input)%1!==0){
            number=number.substring(0,number.length-1)
            number+=input
            console.log('if condition',number)
          }
          else{
            number+=input
            console.log('if condition',number)
          }
        }
        else{
          console.log('if condition',number)
          if(count<1){
          number+=input
          console.log('count', count)

          console.log('if condition',number)
          }
        }
        }
        else if(number[number.length-1] === '.'){
          console.log('do nothing', input, number)
        }
        else if(number===''  || (number!=='' && parseInt(number[number.length-1])%1!==0)){
          number+='0'
          number+=input    
          console.log('if condition',number)

        }
        else if(number === ''){
          if(input === '+' || input === '-' || input === '/' || input === '*' ){
          // number+='0'
          // number+=input
          console.log('oper present')
        }
      }
        else{
          number+=input
          console.log('if condition',number)

        } }  
      
          setNumber(number)
      }
  const clear = ()=> {
        //  temp='0';
          setNumber('')
      }
       
  const final = ()=> {
        let number=  Number     
        // nums.push(  Number)
        // console.log("in final", number)
        if(parseInt(number[number.length-1])%1!==0){
          // console.log('number[number.length-1]',number[number.length-1])
          number=number.substring(0,number.length-1)
          // console.log('after substring', number)
        }
        if(parseInt(number[0])%1!==0){
          number=number.substring(0,0)
        }
        // console.log('at final',number)
        let first=''
        // first+=number[0]
        let opers=[]
        for(let i=0;i<number.length;i++){
          if(parseInt(number[i])%1==0 || number[i]==='.'){
            first+=number[i]
            // opers.push(i)
            // console.log("first",first )
          }
          else{
            if(first!==''){
              opers.push(first)
            }
            opers.push(number[i])
            first=''
          }
        }
        // console.log("first",first)
        opers.push(first)
        for(let i=0; i<opers.length;i++){
          if(opers[i] !== parseInt(opers[i])){
            if(opers[i]!=='*' && opers[i]!=='-' && opers[i]!=='+' && opers[i]!=='/'){
              opers[i]=parseFloat(opers[i])
            }
          }
        }
        // console.log('after parse', opers)
  
        // console.log("in loop", opers)

        let basic=0
        basic+=opers[0]
        let c1=0
        // console.log('in basic',basic)
  
        for(let i=1;i<opers.length-1  ;i++){
          if( parseInt(opers[i])%1!==0 && parseInt(opers[i+1])%1===0) {
              if(opers[i]=== '+'){
                basic+=opers[i+1]
                // console.log('+', basic)
  
              }
              if(opers[i]=== '-'){
                basic-=opers[i+1]
                // console.log('-', basic)
  
              }
              if(opers[i]=== '/'){
                basic/=opers[i+1]
                // console.log('/', basic)
  
              }
              if(opers[i]=== '*'){
                basic*=opers[i+1]
                // console.log('*', typeof(basic))
              }
              
            }if(basic !== parseInt(basic)){
              let basic1=String(basic)
              let basic2=''
              for(let i=0; i<basic1.length;i++){
                if(basic1[i]==='.' && basic1[i+6]){
                  for(let j=0; j<8;j++){
                    basic2+=basic1[j]
                  }                    
                  // console.log('2 after .', basic1)
                  break
                }
                else{
                  basic2+=basic1[i]
                }
              }
              // console.log("decimal", String(basic).length, basic2 )
              basic=basic2
            }
            // console.log('in else', basic)
            c1=basic
          // }

        }
        // if(basic !== parseInt(basic)){
        //   console.log("decimal", parseInt(basic), basic )
        // }
        
        // basic1=String(basic)
        // for(let i=0; i< basic1.length-1; i++){

        // }
        // console.log("basic",c1, basic)
        //  setState({
        //   number:number+' = '+basic
        // })
        setNumber(number+' = '+basic)
        // console.log("number",  Number)
  
         getnumber(c1)             
      }  
  const getnumber=(c1)=>{
       console.log("in getnumber",   Number+'='+c1)
       let item=Number+'='+c1
       setData(prevdata => [...prevdata, item])
       console.log('in final', data)
        // props.addValue(  Number+'='+c1)
     }
  const deletevar=()=>{
       let number=  Number
      //  number.slice(number[-1])
      let newnum=number.substring(0,number.length-1)
      //  console.log("in delete", newnum,  Number)
      //   setState({
      //    number:newnum
      //  })
       setNumber(newnum)
     }
   
      return (
          <div className='container'>
              <div className='iphone-x'>
                  <div className='screen'>
                      {/* <div className='notch'>
                          <div className='sound'></div>
                          <div className='camera'></div>

                      </div> */}
                      <div className='time' id='time'></div>
                      <form className='calculator conatiner'>
                          <textarea type='text' placeholder='0' name='displayResutlt' onChange={ InputAccept} className='area' value={ Number}/>
                          <div className='key container' id='keyboard'>
                              <div className='first-col'></div>
                              <div className='second-col'>
                                  <div className='button'><button type='button'   onClick={ clear}className='btn-work' >AC</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('7')} className='btn-work'>7</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('4') }className='btn-work'>4</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('1') }className='btn-work'>1</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('0') }className='btn-work'>0</button></div>
                              </div>
                              <div className='third-col'>
                                  <div className='button'><button type='button'  onClick={()=> deletevar()} className='btn-work' >del</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('8') } className='btn-work'>8</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('5')} className='btn-work'>5</button></div>
                                  <div className='button'><button type='button'  onClick={(event) =>  numberPad('2')} className='btn-work' >2</button></div>
                                  <div className='button'><button type='button'onClick={(event) =>  numberPad('.')}  className='btn-work' >.</button></div>
                              </div>
                              <div className='fourth-col'>
                                  <div className='button1 '>
                                    {/* <BrowserRouter> */}
                                    <Link to="/history">
                                      <button 
                                        type='button' 
                                        // onClick={()=> props.showValue()}
                                        className='btn-work'>History</button>
                                    </Link>
                                    {/* </BrowserRouter> */}
                                    </div>

                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('9')} className='btn-work' >9</button></div>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('6')} className='btn-work' >6</button></div>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('3')} className='btn-work' >3</button></div>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('00')} className='btn-work' >00</button></div>

                              </div>
                              <div className='fifth-col'>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('/')}  className='btn-work'>/</button></div>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('*')} className='btn-work'>*</button></div>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('-')} className='btn-work'>-</button></div>
                                  <div className='button'><button type='button' onClick={(event) =>  numberPad('+')} className='btn-work' >+</button></div>
                                  <div className='button'><button type='button'  onClick={ final}className='btn-work' >=</button></div>

                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      )
  
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addValue:(value) => dispatch(addValue(value)),
        showValue:() => dispatch(showValue()),
        
       
    }
}
export default connect(null,mapDispatchToProps)(Design)

