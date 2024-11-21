import { useBlogs } from "./Shared/BlogContext";
import { Blog } from "./Shared/Blog";

import { useEffect, useState } from "react";
interface BlogFormProps {
  existingBlog?: Blog ;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({existingBlog, onClose}) => {
  const {addBlog, updateBlog} = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || '')
const [ description, setDescription] = useState(existingBlog?.description || '')
const [ image, setImage] = useState(existingBlog?.image || '');
const [time, setTime] = useState(existingBlog?.time || '')

useEffect(() =>{
  if(existingBlog){
    setTime(existingBlog.time);
    setDescription(existingBlog.description);
    setTitle(existingBlog.title);
    setImage(existingBlog.image);

  }
},[existingBlog])


const handleCancel=()=>{
  const blog: Blog= {
    id: existingBlog ? existingBlog.id : Date.now(),
    title,
    description,
    image,
    time: existingBlog ? time : new Date().toDateString()
  }
  if(existingBlog){
    updateBlog(existingBlog.id,blog)
  }else{
    addBlog(blog)
  }
  onClose()

}

  return (
    <div className="bg-white p-6 rounded-lg  w-[30rem] mx-auto ">
      <h3 className="font-semibold text-xl mb-2 text-gray-800  ">
      {
        existingBlog ? 'Edit Blog' : 'Add Blog'
      }
      </h3>

      <div className="space-y-4">
        <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-md border-gray-900 p-2 w-full placeholder:font-medium placeholder:text-gray-600 outline-none " />

        <textarea placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)} className="border  border-gray-900 pb-[5rem] p-2 rounded-md   w-full placeholder:from-neutral-900 outline-none" >
        </textarea>
     
      <input type="text" placeholder="Enter Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="border rounded-md border-gray-900 p-2 w-full placeholder:font-medium placeholder:text-gray-600  outline-none"/>

      <input type="date" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} className="border rounded-md border-gray-900 p-2 w-full placeholder:font-medium placeholder:text-gray-600  outline-none"/>
    

      </div>
     <section className="flex justify-end mt-6 space-x-4">
      <button onClick={handleCancel} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md ">
        {existingBlog ? 'Update' : 'Add'}
      </button>

      <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md" onClick={onClose}>Cancel</button>

     </section>
    </div>
  ) 
}

export default BlogForm

