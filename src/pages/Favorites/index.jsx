import Banner from "components/Banner";
import styles from "./Favorites.module.css";
import Title from "components/Title";

import Card from "components/Card";
import { useFavoriteContext } from "contexts/FavoritesContext";

function Favorites() {
  const { favorito } = useFavoriteContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Title>
        <h1>Meus favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card key={fav.id} {...fav} />;
        })}
      </section>
    </>
  );
}

export default Favorites;
