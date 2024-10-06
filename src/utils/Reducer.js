 export const actionType={
    SET_USER:'SET_USER',
    SET_FOOD_ITEMS:'SET_FOOD_ITEMS',
    SET_CART_SHOW:'SET_CART_SHOW',
    SET_CART_ITEMS:'SET_CART_ITEMS',
 };


 const reducer=(state,action)=>{
    switch(action.type){
        case "SET_USER":{
            return{
                ...state,
               user: action.user,
            }
             
        }
        case "SET_FOOD_ITEMS":{
            return{
                ...state,
               foodItems: action.foodItems  ,
            }
             
        }

        case 'SET_CART_SHOW':{
            return{
                ...state,
               cartShow: action.cartShow  ,
            }
             
        }

        case 'SET_CART_ITEMS':{
            return{
                ...state,
               cartItems: action.cartItems  ,
            }
             
        }

        default:
            return state
    }
 };


 export default reducer;