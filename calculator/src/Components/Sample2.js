import { DataContext } from "./DataContext"
import React,{ useContext} from 'react'
const Sample2 = (props) =>{
    // const [data, setData] =  useContext(DataContext)
    return(
        <div>
            {/* {data.map(item =>(
                <h1>{item.name}</h1>
            ))} */}
            <h3>{props.name}</h3>
        </div>
    )
}
export default Sample2