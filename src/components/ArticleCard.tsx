import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa"
import { Blog } from "./Shared/BlogType"

interface ArticleCardProps {
  article: Blog,
  onDelete: () => void,
  onEdit: () => void

 
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  onDelete,article, onEdit
}) => {


  return (
    <div className="flex p-4 bg-white  lg:min-w-[50rem] mb-6 ml-[2rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative">

      <img src={article.image} alt={article.title} className=" min-w-36  rounded-md shadow-md h-24   object-cover " />
    
    
      <div className="ml-[1.5rem]  flex flex-col ">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 ">{article.title}</h3>
        <p className="text-sm text-gray-700 flex-1">{article.description}</p>

        <div className="flex items-center justify-between mt-4
         text-gray-500  ">
          <span className="text-sm">{article.time}</span>


          <div className="flex absolute bottom-4 right-4 space-x-3  ">
            <FaBookmark className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200 ease-in-out size-[.9rem] " />
            <FaEdit onClick={onEdit} className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200 ease-in-out size-[.9rem]  " />

            <FaTrash onClick={onDelete} className="text-gray-3500 hover:text-gray-700 cursor-pointer transition-colors duration-200 ease-in-out  size-[.9rem] ml-9 " />
          </div>
         </div>
      </div>
    </div>
  )
}

export default ArticleCard