import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './ducks'
 export default configureStore({
     reducer: {
         cart: cartReducer
     }
 })