"use client";
import { useState } from "react";

export default function Links() {
  const [next, setNext] = useState(false);

  return (
    <>
      <div className="links">
        <div className="links_title">LINKS</div>
        <div className="slider">
          <div
            style={{
              transform: next ? "translateX(-100%)" : "translateX(-0%)",
              transition: "transform 0.3s ease",
            }}
            className="slider-track"
          >
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/bluesky-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/spotify-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/insta-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/steam-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/twitter-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/discord-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/email-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
            <div className="slide">
              <a href="#">
                <img
                  alt="icon"
                  height="56"
                  src="/img/telegram-icon.svg"
                  width="56"
                  className="slider_icon"
                />
              </a>
            </div>
          </div>
          <button
            style={{ display: !next ? "none" : null }}
            onClick={() => {
              setNext(false);
            }}
            className="slider-btn prev"
            aria-label="Предыдущий слайд"
          >
            ←
          </button>
          <button
            style={{ display: next ? "none" : null }}
            onClick={() => {
              setNext(true);
            }}
            className="slider-btn next"
            aria-label="Следующий слайд"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
