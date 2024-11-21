import { FaRegUserCircle, FaSearch } from "react-icons/fa"

const Navigation = () => {
  return (
    <nav className=" text-black bg-[#0F3cc9]   p-4 flex justify-between items-center ">
      <div className="flex items-center bg-[#0a2885]  rounded-full px-3  py-2 max-w-md ml-[2rem] text-white ">
        <FaSearch size={20} />
        <input type="text" placeholder="Search" className="bg-transparent ml-4  w-full outline-none font-medium  placeholder-white" />
      </div>

<section className="flex items-center  mr-[5rem]">
  <FaRegUserCircle className="text-[1.8rem] text-gray-300 mr-2 " />

</section>


    </nav>
  )
}

export default Navigation