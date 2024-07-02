import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import UserProfile from "../components/UserProfile"
import TrendingCollectionCard from "../components/TrendingCollectionCard";
import CreatorCard from "../components/CreatorCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Root() {
    const [creators, setCreators] = useState([])
    const [trending, setTrending] = useState([])

    useEffect(()=>{
      setTrending(
        [
          {
            title: "DSGN Animals",
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            name: "Henry",
            username: "lexcode"
          },
          {
            title: "Magic Mushrooms",
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            name: "Alex",
            username: "Shroomie"
          },
          {
            title: "Disco Machines",
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            name: "Alexander",
            username: "BeKind2Robots"
          },
        ]
      )
      setCreators(
        [
          {
            ranking: 1,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 2,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 3,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 4,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 5,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 6,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 7,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 8,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 9,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 10,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 11,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
          {
            ranking: 12,
            userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
            username: "lexcode",
            totalSales: "34.53"
          },
        ]
      )
    },[])
    return (
      <>
        <main className="bg-background text-text min-h-screen font-primary flex flex-col gap-28">
            <section className="flex justify-between items-center py-5 px-2">
                <img src="/devto-light.svg" alt="logo" className="size-12"/>
                <nav className="flex justify-center items-center gap-5">
                    <Link to={`/login`} className="h-[60px] text-base rounded-[20px] text-white focus:ring-4 font-medium px-10 py-4 hover:bg-gray-700 focus:outline-none focus:ring-gray-800" >Ingresar</Link>
                    <Link to={`/register`} className="font-semibold py-4 px-10 rounded-[20px] text-base bg-call-to-action border-2 border-transparent hover:bg-blue-700" >Registrar</Link>
                </nav>
            </section>
            <section className="flex justify-center">
              <div className="flex flex-col justify-between md:flex-row w-full max-w-[1050px]">
                <div className="flex flex-col justify-between items-start gap-5 p-2 max-w-[510px]">
                  <h1 className="text-h1 font-bold">Discover Digital Art & Collect NFTs</h1>
                  <h2 className="w-full h-auto text-left text-h5">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h2>
                  <button className="font-semibold py-4 px-10 rounded-[20px] text-base bg-call-to-action border-2 border-transparent hover:bg-blue-700">Get Started</button>
                  <div className="flex justify-between pr-9 w-full">
                    <div>
                      <h4 className="font-secondary text-h4 font-bold">240K+</h4>
                      <h5 className="text-2xl font-normal">Total Scale</h5>
                    </div>
                    <div>
                      <h4 className="font-secondary text-h4 font-bold">100K+</h4>
                      <h5 className="text-2xl font-normal">Auctions</h5>
                    </div>
                    <div>
                      <h4 className="font-secondary text-h4 font-bold">240K+</h4>
                      <h5 className="text-2xl font-normal">Artists</h5>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-5 p-2 max-w-[510px]">
                  <Card
                    className="max-w-sm max-h-max bg-background-secondary border-transparent"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="https://res.cloudinary.com/dwuv0l98b/image/upload/c_crop,g_auto,h_800,w_800/samples/shoe.jpg"
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-white">Space Walking</h5>
                    <UserProfile image={"http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg"} username={"lexcode"} name={"henry"} />
                  </Card>
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <div className="flex flex-col justify-between gap-20 max-w-[1050px]">
                <div>
                  <h3 className="text-h3 font-bold">Trending Collection</h3>
                  <h4 className="text-2xl font-normal">Checkout our weekly updated trending collection.</h4>
                </div>
                <div className="flex justify-between">
                  {trending.map((item, index)=> (
                    <TrendingCollectionCard key={item.title} title={item.title} userImage={item.userImage} username={item.username} name={item.name} />
                  ))}
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <div className="flex flex-col justify-between gap-20 max-w-[1050px]">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-h3 font-bold">Top creators</h3>
                    <h4 className="text-2xl font-normal">Checkout Top Rated Creators on the NFT Marketplace.</h4>
                  </div>
                  <Link to={`/ranking`} className="h-[60px] font-semibold py-4 px-6 rounded-[20px] text-base text-text bg-transparent border-2 border-call-to-action hover:bg-blue-700" >View Rankings</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    { creators?.map((item) => (
                      <CreatorCard key={item.ranking} ranking={item.ranking} userImage={item.userImage} username={item.username} totalSales={item.totalSales} /> 
                    ))}
                </div>
              </div>
            </section>
            <section className="flex justify-center">
              <Footer/>
            </section>
        </main>
      </>
    );
  }