import React,{ createContext, useState} from 'react'

export const DataContext= createContext()

export const DataProvider = props =>{
    const [data, setData] = useState([
        // {
        //     name:'Abdul',
        //     role:'front',
        //     id:1
        // },
        // {
        //     name:'rub',
        //     role:'back',
        //     id:2
        // },
        // {
        //     name:'irfan',
        //     role:'full',
        //     id:3
        // },



    ]);
    console.log('data in data provider', data)
    return(
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
}