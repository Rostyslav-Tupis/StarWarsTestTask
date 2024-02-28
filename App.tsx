import {MainStack} from "@/navigations/MainStack/MainStack";
import {store} from "@/redux/store/store";
import {Provider} from "react-redux";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}

export default App;
