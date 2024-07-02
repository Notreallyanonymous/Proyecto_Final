import { Link } from "react-router-dom";

const UserProfile = ({image, name, username}) => {
  return (
    <Link to={"#"} className="flex items-center gap-2 text-text">
      <img src={image} alt="simple image" className="rounded-full object-contain size-10"/>
      <div className="flex flex-col justify-center items-start space-y-1 font-medium">
        <h3 className="font-bold">{name}</h3>
        <h4 className="text-sm opacity-80 ">@{username}</h4>
      </div>
    </Link>
  )
}

export default UserProfile