import React from 'react'
import UserProfile from './UserProfile'

const TrendingCollectionCard = ({title, userImage, username, name}) => {
  return (
    <article className='flex flex-col gap-2 px-2'>
        <div className="grid gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
            <UserProfile image={userImage} username={username} name={name} />
        </div>
    </article>
  )
}

export default TrendingCollectionCard