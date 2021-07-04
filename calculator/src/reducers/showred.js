
const INITIAL_STATE ={
    visible:false
}

    const showReducer = (state=INITIAL_STATE, action) =>{
        switch(action.type){
            
            case 'SHOW_VALUE':
                // const newtemp=action.payload
                // console.log("at reducer")
                const list=!state.visible
                // list.push(newtemp)
                // const newlist=[newtemp, ...state.items]
                // console.log("new reducer", state.visible)
                return{
                    ...state,
                    visible:!state.visible
                }
             
            default: return state;
        }
    }
    export default  showReducer;