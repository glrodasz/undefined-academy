import React from "react";
import Card from "./components/Card/Card";
import articles from "./data/articles.json";
import Time from "./components/Time/Time";

function App({ date }) {
  return (
    <React.Fragment>
      <div className="fixed">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://www.nftexpress.io/"> Spanish Notes</a>{" "}
            </li>
            <li>
              <a href="https://medium.com/@lucianogarriga"> English Notes</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- Header --> */}
      <header className="header">
        <h1>Welcome to my Blog</h1>
        <h4 className="sub">Luciano Garriga</h4>
      </header>
      <main className="main-container">
        {/* <!-- Hero --> */}
        <section className="hero">
          <h3 className="tit-hero">
            Search for the news in Blockchain and Web3!
          </h3>
          <p className="p-main">
            In this blog you can find some news about Blockchain, NFTs,
            Metaverse, Web3 and more. This website cointains two sections:
            articles in English, and articles in Spanish
          </p>
        </section>

        <div className="flex-container wrapper">
          {/* <!-- Content --> */}

          <section className="content">
            {articles.map((article, index) => (
              <Card key={index} {...article} />
            ))}
          </section>

          {/* Sidebar  */}
          <aside className="sidebar">
            <h3 className="tit2">Check some of my notes in NFTexpress.io</h3>
            <div className="content-aside">
              <div>
                <a
                  href="https://www.nftexpress.io/article/salesforce-polygon-blockchain-loyalty-nft-program"
                  className="title-link"
                >
                  <h3 className="tit1">
                    Salesforce and Polygon launch NFT loyalty program
                  </h3>
                </a>
                <a
                  href="https://www.nftexpress.io/article/liveart-x-card-access-great-nft-sales"
                  className="title-link"
                >
                  <h3 className="tit1">
                    LiveArt X Card: The pass to access great NFT
                  </h3>
                </a>
                <a
                  href="https://en.nftexpress.io/article/chainlink-functions-integrate-dapps-web2"
                  className="title-link"
                >
                  <h3 className="tit1">
                    Chainlink Functions: Integrate dApps with Web2 sites
                  </h3>
                </a>
                <a
                  href="https://www.nftexpress.io/article/nissan-registers-4-trademarks-for-web3-and-nft-market"
                  className="title-link"
                >
                  <h3 className="tit1">
                    Nissan applies for registration of 4 trademarks for NFT
                  </h3>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer className="footer-main">
        <p>
          Created by{" "}
          <a href="https://github.com/lucianogarriga"> lucianogarriga</a>
          <Time>{(date = "2023-05-04 15:00")}</Time>
        </p>
        <address>
          <a href="mailto:lucianogarriga@gmail.com">Contact me</a> for questions
          about the site!
        </address>
      </footer>
      <script type="module" src="my-module.js"></script>
    </React.Fragment>
  );
}

export default App;
