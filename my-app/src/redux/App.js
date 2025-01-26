import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../components/header/header";
import { HomePage } from "../pages/home-page";
import { GamePage } from "../pages/game-page";
import { Provider } from "react-redux";
import { store } from "./cart/games";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/"></Route>
            <Route index element={<HomePage />} />
            <Route index element={<GamePage />} />
            <Route exact path="/app/:title"></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
