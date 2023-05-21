import Banner from "components/Banner";
import "./Player.module.css";
import styles from "components/Container/Container.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {
  const parametros = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/FranklinNeto/cinetag-api/videos?id=${parametros.id}`
    )
      .then((res) => res.json())
      .then((dados) => setVideo(...dados));
  });

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner imagem="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
