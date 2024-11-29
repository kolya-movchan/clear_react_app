import { Provider } from "react-redux";
import { store } from "./store";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container mx-auto px-4">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
