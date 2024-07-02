import React, { useState, useEffect } from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";
import CardMain from "./CardMain";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import { getAllNFTs } from "../api";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const data = await getAllNFTs();
        setNfts(data.NFT); // Assuming the response structure is { NFT: [...] }
        console.log(data);
      } catch (error) {
        console.error("Error fetching NFTs", error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexander Vernof</p>
            <div className="bid">
              <a href="#" className="button">
                Bid Now
              </a>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
                Illustration
              </a>
              <a href="#" className="button2">
                Art
              </a>
              <a href="#" className="button2">
                Games
              </a>
            </div>
          </div>

          <main>
            {nfts.length > 0 ? (
              <>
                <CardMain imgSrc={nfts[0].image} title={"Scum Lord"} hearts={"65"} />
                <CardMain imgSrc={nfts[1].image} title={"Frog Ross"} hearts={"65"} />
                <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
                <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
                <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
                <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
              </>
            ) : (
              <p>Loading...</p> // Add a loading message or spinner if needed
            )}
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
