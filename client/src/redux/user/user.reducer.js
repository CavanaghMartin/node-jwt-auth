
const initialState = {
    user: {},
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER_DATA":
        return{
          ...state,
          user:action.payload
        }
        default:
            return state
    }
}
export default productReducer;
