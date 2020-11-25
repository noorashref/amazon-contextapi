export const initialState = {
  basket: [
    {
      id: "49538094",
      title:
        "Kenwood mix stand mixer for baking, Stylish kitchen mixer with k-beater,Dough hook and whisk ,5 Liter Glass bowl",
      price: 98.0,
      rating: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//state consider all state inside data layer
//action consider what type action needs to take place like add or remove from basket
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //   break;
    case "REMOVE_FROM_BASKET":
      //LOGIC FOR REMOVE ITEM TO BASKET

      //we clone the basket
      let newBasket = [...state.basket];

      //
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant move product (id: ${action.id} as its not in basket)`
        );
      }
      return { ...state, basket: newBasket };
    //   break;
    default:
      return state;
  }
};

export default reducer;
