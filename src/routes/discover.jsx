import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import NFTCard from "../components/NFTCard";
import Header from "../components/Header"

export default function DiscoverPage () {
    // Estas constantes son para hacer desde aqui las consultas al backend mas adelante
    const categories = ['All categories', 'Art', 'Virtual Worlds', 'Collectibles', 'Utility', 'Gaming']
    const cards = [
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Art"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Art"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Art"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Virtual Worlds"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Virtual Worlds"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Virtual Worlds"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Virtual Worlds"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Collectibles"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Collectibles"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Utility"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Gaming"
        },
      {
          image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
          title: "Magic Mushroom 0325",
          userImage: "http://res.cloudinary.com/dwuv0l98b/image/upload/v1706217896/samples/man-portrait.jpg",
          username: "Shroomie",
          name: "Alex",
          price: "1.63 ETH",
          category: "Gaming"
        },
    ]
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const [filteredCards, setFilteredCards] = useState([]);
    const [search, setSearch] = useState('')

    // const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = (e)=> {
      e.preventDefault()
      console.log(search);
    }
    const filterNFTs = (category) => {
      setSelectedCategory(category)
      };
    const addToCart = (product) => {
        console.log(product)
      };
    
    useEffect(() => {
      if (selectedCategory === 'All categories') {
        setFilteredCards(cards);
      } else {
        setFilteredCards(cards.filter(card => card.category === selectedCategory));
      }
    }, [selectedCategory]);
    return (
        <main className="bg-background text-text min-h-screen font-primary flex flex-col gap-28">
         <Header/>
            <section className="flex justify-between items-center py-5 px-2">
                <img src="/devto-light.svg" alt="logo" className="size-12"/>
                <nav className="flex justify-center items-center gap-5">                
                </nav>
            </section>
            <section className="flex justify-center">
                <div className="flex flex-col justify-between gap-5 w-full max-w-[1050px]">
                    <div className="flex flex-col justify-between items-start gap-5 p-2 w-full">
                        <h1 className="text-h1 font-bold">Browse Marketplace</h1>
                        <h2 className="w-full h-auto text-left text-h5">Browse through more than 50k NFTs on the NFT Marketplace.</h2>
                    </div>  
                    <form className="w-full mx-auto gap-2" onSubmit={handleSearch}>   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search the latest NFTs..." value={search} onChange={handleChange} required/>
                            <button type="submit" className="h-[54px] text-white absolute end-0 bottom-0 bg-call-to-action hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-4">Search</button>
                        </div>
                    </form>
                    <div className="flex flex-col justify-between w-full max-w-[1050px]">
                        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                            {categories.map((categ, index)=> (
                                <button key={index} type="button" className="text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-call-to-action rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3" onClick={()=> filterNFTs(categ)}>{categ}</button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredCards.map((item, index) => (
                                <NFTCard key={index+100} image={item.image} title={item.title} userImage={item.userImage} username={item.username} name={item.name} price={item.price} addToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
              <Footer/>
            </section>
        </main>
    )
}