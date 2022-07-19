import axios from "axios"


export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";

export const CartRequest = () => {
    return {
        type : GET_CART_REQUEST
    }
}

export const CartSuccess = (data) => {
    return {
        type: GET_CART_SUCCESS,
        payload : data
    }
}

export const CartFailure = (err) => {
    return {
        type: GET_CART_FAILURE,
        payload : err
    }
}


export const AddToCart = (payload) => (dispatch)=> {
    dispatch(CartRequest())
  
    console.log("payload",payload)
    axios.post('http://localhost:8080/cart', payload)
      .then(function (response) {
          console.log("bag", response.data);
          alert("product added to cart")
          dispatch(GetCart())
      })
      .catch(function (error) {
          console.log(error);
          dispatch(CartFailure(error.message))
      });
}

export const GetCart = (payload) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.get('http://localhost:8080/cart')
      .then(function (response) {
          console.log(response.data);
          dispatch(CartSuccess(response.data))
      })
      .catch(function (error) {
          console.log(error);
          dispatch(CartFailure(error.message))
      });
}

export const DelteCart = (id) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.delete(`http://localhost:8080/cart/${id}`)
    .then(function (response) {
        console.log(response.data);
        dispatch(GetCart())
    })
    .catch(function (error) {
        console.log(error);
        dispatch(CartFailure(error.message))
    });
}