import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";

const test = createSlice({
  name: 'test',
  initialState: 'hello'
})

 const item = createSlice({
   name : 'item',
   initialState : ['apple', 'banana']
  

})



const num = createSlice({
  name:'num',
  initialState : 1,
  reducers: {
    changeNum() {
      return 10
    },
    plusNum(state) {
      return state+1 ;
    },
    nPlusNum(state,actions) {
      console.log(actions)
      
      return state + actions.payload
    },

  }
  })

  const obj = createSlice({
    name: 'obj',
    initialState: {name: 'hong', age:20},
    reducers: {
      changeAge(state , action) {
        state.age = action.payload
      },
    }
  })
  




  

  export const {changeNum,plusNum,nPlusNum,addCount}= num.actions
  export const { changeAge } = obj.actions


export default configureStore({
  reducer: {
    test: test.reducer,
    item: item.reducer,
    cart : cart.reducer,
    num: num.reducer,
    obj: obj.reducer,

  }

})