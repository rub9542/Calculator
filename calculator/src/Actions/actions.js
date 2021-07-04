export const addValue = (items)=>{
    // console.log("items",items)
    return{
        type:'ADD_VALUE',
        payload:items
    }
}
export const delValue = (index)=>{
    // console.log("at actions",index)
    return{
        type:'DEL_VALUE',
        payload:index
    }
}
export const showValue = ()=>{
    // console.log("at actions")
    return{
        type:'SHOW_VALUE'
        // payload:index
    }
}
