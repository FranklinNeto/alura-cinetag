import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

//Hook personalizado
export function useFavoriteContext() {
  const { favorito, setFavorito } = useContext(FavoritesContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  /* Para usar o hook personalizado de forma análoga ao useState, por exemplo:
 const {favorito, adicionarFavorito} = useAdicionarFavorito()*/

  return {
    favorito,
    adicionarFavorito,
  };
}
