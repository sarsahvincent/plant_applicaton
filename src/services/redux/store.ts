import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createStore } from "redux";
import globalSlice from "./global/globalSlice";
import product_data_slice from "../../screens/products/data/product_data_slice";

const reducers = combineReducers({
  global: globalSlice,
  product: product_data_slice,
});

const persistConfig = {
  key: "plant_app_root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const baseStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat
      // globalSlice.middleware,
      (),
});

export const rootStore = configureStore({
  reducer: {
    global: globalSlice,
    product: product_data_slice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(baseStore.dispatch);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
