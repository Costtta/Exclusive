const ADDTOCART = 'ADD_TO_CART';
const DELETE = 'DELETE';

function addToCartF(product) {
    return { type: ADDTOCART, payload: product };
}

function deleteF(product){
    return {type: DELETE, payload: product }
}

const initialState = {
    cart: [] // The cart array is inside the state object
};

function cartReducer(state = initialState, actions) {
    switch (actions.type){
        case ADDTOCART :
            return{
                ...state,
            cart: [...state.cart, actions.payload]
        }
        case DELETE :
            return {
                ...state,
                cart: state.cart.filter(index => index.img !== actions.payload.img)
            };
        default :
            return state
    }
}

const store = Redux.createStore(cartReducer); // Access createStore like this



export const calculateTotalPrice = (cart) => {
    return cart.reduce((accumulator, item) => {
        const price = parseFloat(item.price.replace('$', '')); // Correct parsing
        return accumulator + price;
    }, 0);
};

export { deleteF, addToCartF};
export default store;