import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/FavoritesContext";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  );
}

export default MainPage;
