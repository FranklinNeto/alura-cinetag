import FavoritesProvider from "contexts/FavoritesContext";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Favorites from "pages/Favorites";
import Initial from "pages/Initial";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/:id" element={<Player />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
