"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Recent() {
  const [category, setCategory] = useState(`kitsune`);
  const [refresh, setRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState(``);
  const [artistName, setArtistName] = useState(``);
  const [artistUrl, setArtistUrl] = useState(``);

  async function nekoFetch() {
    try {
      const data = await fetch(`https://nekos.best/api/v2/${category}`, {
        method: "GET",
      });
      const info = await data.json();
      setImageUrl(info.results[0].url);
      setArtistName(info.results[0].artist_name);
      setArtistUrl(info.results[0].artist_href);
    } catch (error) {
      console.error("Ошибка поймана:", error);
    }
  }
  useEffect(() => {
    nekoFetch();
    setRefresh(false);
  }, [category, refresh]);
  return (
    <>
      <div className="recent">
        <div className="recent_title">NEKOS.BEST API</div>
        <div className="recent_category">
          <button onClick={() => setCategory("kitsune")}>kitsune</button>
          <button onClick={() => setCategory("husbando")}>husbando</button>
          <button onClick={() => setCategory("neko")}>neko</button>
          <button onClick={() => setCategory("waifu")}>waifu</button>
        </div>

        <div className="recent_image_description_container">
          {imageUrl && (
            <Image
              src={`${imageUrl}`}
              alt="Арт"
              width={480}
              height={400}
              className="recent_image"
            />
          )}
          <div className="recent_description">
            {artistUrl && (
              <>
                <p>
                  <b>Артист:</b> {`${artistName}`}
                </p>
                <p>
                  <b>Категория:</b> {`${category.toUpperCase()}`}
                </p>
                <a style={{ textDecoration: "none" }} href={`${artistUrl}`}>
                  <button
                    style={{ padding: "15px", width: "150px", height: "50px" }}
                    onClick={() => setRefresh(true)}
                  >
                    {"Источник"}
                  </button>
                </a>
              </>
            )}
            {artistName && (
              <>
                {" "}
                <button
                  style={{ padding: "15px", width: "150px", height: "50px" }}
                  onClick={() => setRefresh(true)}
                >
                  {"Следующий"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
