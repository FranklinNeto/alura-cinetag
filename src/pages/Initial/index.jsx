import Banner from "components/Banner";
import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";
import React from "react";

function Initial() {
  return (
    <>
      <Header />
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Card
        id="1"
        titulo="Gato bonifácio"
        capa="https://thecatapi.com/api/images/get?format-src&type=png"
      />
      <Footer />
    </>
  );
}

export default Initial;
