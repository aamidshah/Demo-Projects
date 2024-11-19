import { useState } from "react"
import { FaCamera } from "react-icons/fa"
import Tabs from "./Tabs"
const Profile = () => {

const [bannerUrl , setBannerUrl] = useState("https://via.placeholder.com/1500x400")
const [profileUrl, setProfileUrl] = useState("https://via.placeholder.com/100")


const handleBannerChange=(event:any) =>{
  const file = event.target.files[0]

  if(file){
    setBannerUrl(URL.createObjectURL(file))
  }
}

const handleProfileChange=(event:any) =>{
  const file = event.target.files[0]

  if(file){
    setProfileUrl(URL.createObjectURL(file))
  }
}

  return (
    <div className="relative w=[94%] ml-[5rem]  ">

      {/* channel banner */}

      <div className="relative">
        <img src={bannerUrl} alt="background img" className="w-full h-60 object-cover " />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 ">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

    <input type="file" name="" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange} />

        </button>
      </div>
      {/* end */}

      {/* {channel logo } */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img src={profileUrl} alt="channel logo" className="w-40 min-w-40 h-40 rounded-full border-white relative " />
        <button className="absolute ml-[4rem] mt-[9rem]  bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600  ">
        <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input type="file"  id="profile-upload" accept="image/*" className="hidden" onChange={handleProfileChange} />
        </button>

        {/* channel details  */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[2rem]">HuXn Dev</h1>
          <p className="text-gray-600 ml-[2rem]"> 1M Views</p>
          <p className="mt-2 ml-[2rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vitae.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, nobis.

          </p>
          <button className="mt-4 bg-red-600 text-white px-2 py-2 rounded hover:bg-red-500 ml-[2rem]">Subscribe</button>
        </div>
      </div>
 
      <Tabs />
    </div>
  )
}

export default Profile