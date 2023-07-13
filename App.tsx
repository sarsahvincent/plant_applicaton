import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store, persistor } from "./src/services/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import IndexScreen from "./src/index";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IndexScreen />
      </PersistGate>
    </Provider>
  );
}
