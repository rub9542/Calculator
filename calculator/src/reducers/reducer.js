
const INITIAL_STATE ={
    items:[

    ]}

    const calcReducer = (state=INITIAL_STATE, action) =>{
        switch(action.type){
            
            case 'ADD_VALUE':
                const newtemp=action.payload
                // console.log("at reducer", newtemp)
                const list=[...state.items]
                list.push(newtemp)
                // const newlist=[newtemp, ...state.items]
                // console.log("new reducer", list)
                return{
                    ...state,
                    items:list
                }
            case 'DEL_VALUE':
                const l2=state.items
                l2.splice(action.payload,1)
                // console.log("after rem",l2)
                const l1=[...l2]
                
                return{
                    ...state,
                    items:l1
                }
               
            default: return state;
        }
    }
    export default  calcReducer;