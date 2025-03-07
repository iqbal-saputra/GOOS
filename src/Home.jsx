import React from "react";
import goosLogo from "./Images/Logo_GOOS_kiri_atas.png"; // Pastikan tidak ada spasi di nama file
import goosLogoTengah from "./Images/Logo_GOOS_Tengah.png"; // Pastikan tidak ada spasi di nama file

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="logo-left">
          <a
            href="#"
            onClick={() => window.location.reload()}
            className="logo-left"
          >
            <img src={goosLogo} alt="GOOS Logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="https://id.shp.ee/fdVwJFU"
                target="_blank"
                rel="noopener noreferrer"
              >
                APOLLO
              </a>
            </li>
            <li>
              <a
                href="https://id.shp.ee/4KFzhVc"
                target="_blank"
                rel="noopener noreferrer"
              >
                ATHENA
              </a>
            </li>
            <li>
              <a
                href="https://id.shp.ee/SN64QaP"
                target="_blank"
                rel="noopener noreferrer"
              >
                ARES
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="logo-center">
          <img src={goosLogoTengah} alt="GOOS Logo" />
          {/* Pastikan file ada di public/Images/ */}
        </div>
      </main>

      <footer>
        <div className="social-media">
          <a
            href="https://www.instagram.com/goos.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/instagram.png" alt="Instagram" />
          </a>
          <div className="separator"></div>
          <a
            href="https://www.tiktok.com/@goos.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/tiktok.png" alt="TikTok" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
