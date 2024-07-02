import React from 'react'
import UserProfile from "../components/UserProfile"
import { Link } from 'react-router-dom'

const NFTCard = ({image, title, userImage, name, username, price, addToCart }) => {
  return (
    <article className='flex flex-col gap-2 bg-background-secondary rounded-[20px]'>
        <Link to={"#"}>
            <img className="h-auto max-w-full rounded-lg" src={image} alt={title}/>
        </Link>
        <div className='p-5'>
            <div to={"#"} className='flex flex-col gap-2'>
                <h5 className="text-2xl font-bold tracking-tight text-white"><Link to={"#"}>{title}</Link></h5>
                <UserProfile image={userImage} username={username} name={name} />
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col justify-center items-start space-y-1 font-medium">
                    <h3 className="text-h5 font-bold">Price</h3>
                    <h4 className="text-sm opacity-80">{price}</h4>
                </div>
                <div>
                    <button className="font-semibold py-4 px-10 rounded-[20px] text-base bg-call-to-action border-2 border-transparent hover:bg-blue-700" onClick={()=> addToCart({title, image, price})}>Añadir</button>
                </div>
            </div>
        </div>
    </article>  
  )
}

export default NFTCard