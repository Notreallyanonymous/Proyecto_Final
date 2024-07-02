import React from 'react'

const CreatorCard = ({ ranking, userImage, username, totalSales}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-background-secondary rounded-[20px] size-60 relative'>
        <span className='absolute top-3 left-7 flex justify-center items-center rounded-full bg-background size-8 text-text text-center text-base'>{ranking}</span>
        <img src={userImage} alt="simple image" className="rounded-full object-contain bg-text size-32"/>
        <div className="flex flex-col justify-center items-start space-y-1 font-medium">
            <h3 className="text-h5 font-bold">@{username}</h3>
            <h4 className="text-sm opacity-80">Total Sales: <span className='text-sm font-secondary font-normal'>{totalSales} ETH</span></h4>
        </div>
    </div>
  )
}

export default CreatorCard