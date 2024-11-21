import React, { createContext, useState, useContext } from "react";
import {Blog} from "./BlogType"

interface  BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
  updateBlog: (id: number, blog: Blog) => void;
}
 export const BlogContext = createContext<BlogContextType | undefined>(undefined);


export const BlogProvider: React.FC<{children: React.ReactNode}> = ({children})=>{

  const [blogs, setBlogs]=useState<Blog[]>([])
  const addBlog = (blog: Blog)=>{
    setBlogs([...blogs, blog])
  }

const updateBlog = (id: number, updateBlog: Blog) => {
  setBlogs(blogs.map((blog) => (blog.id === id ? updateBlog  : blog)));
}

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  return(
    <BlogContext.Provider value = {{
      blogs,
      addBlog,
      deleteBlog,
      updateBlog }}> ;
    {children}
    </BlogContext.Provider >
  );
  }

export const useBlogs = () => {
  const context  = useContext(BlogContext);
  if(!context){
    throw new Error("useBlogs must be used within a BlogProvider");
  }

  return context;
  }

