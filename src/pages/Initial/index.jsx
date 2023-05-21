import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import React, { useEffect, useState } from "react";

import styles from "./Initial.module.css";

function Initial() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FranklinNeto/cinetag-api/videos")
      .then((res) => res.json())
      .then((dados) => setVideos(dados));
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card key={video.id} {...video} />;
        })}
      </section>
    </>
  );
}

export default Initial;
