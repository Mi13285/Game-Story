import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page";
// import { GamePage } from "./pages/game-page";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/app/:title"></Route>
            {/* <Route index element={<GamePage />} /> */}
            <Route index element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
