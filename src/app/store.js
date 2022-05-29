import { createStore } from 'redux';



const availableItems = {
  1: {
    name: "Blue shirt",
    code: "SHIRT - BLUE",
    color: "Blue",
    size: "S",
    price: 14.99,
    notes: "1 piece",
    img: "https://5.imimg.com/data5/JH/SP/MY-33710583/men-s-blue-shirt-500x500.jpg"
  },
  2: {
    name: "Red hoodie",
    code: "HOODIE - RED",
    color: "Red",
    size: "S",
    price: 29.99,
    notes: null,
    img: "https://m.media-amazon.com/images/I/41RnAglTvxL.jpg"
  }
}

const shoppingCartInit = {
  availableItems: availableItems,
  items: {
    1: 1,
    2: 1
  },
  shippingCost: 0
}

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const SET_QTY = "SET_QTY";
export const REMOVE = "REMOVE";

function copyState(state){
  return {
    ...state,
    items: {
      ...state.items
    }
  };
}

function reducer(state = shoppingCartInit, action) {
  let newState = null;
  switch(action.type) {
    case INCREASE:
      newState = copyState(state);
      newState.items[action.id] += 1;
      return newState;
    case DECREASE:
      newState = copyState(state);
      if (newState.items[action.id] > 1)
        newState.items[action.id] -= 1;
      return newState;
    case SET_QTY:
      let qty = action.qty;
      if (qty === "" || (!qty && qty !== 0))
        return state;
      newState = copyState(state);
      qty = Math.floor(qty);
      if (qty < 1)
        qty = 1;
      newState.items[action.id] = qty;
      return newState;
    case REMOVE:
      newState = copyState(state);
      newState.items[action.id] = 0;
      delete newState.items[action.id]
      return newState;
    default:
      return state;
  }
}

// store
//import { createStore } from 'redux';
export const store = createStore(reducer);

/*
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
*/