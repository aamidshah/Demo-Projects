import ArticleCard from "./ArticleCard";
import { useBlogs } from "./Shared/BlogContext"
import { Blog } from "./Shared/BlogType";

interface ArticleListBlogs{
  onEdit: (blog: Blog) => void
}


const ArticleList: React.FC<ArticleListBlogs> = ({onEdit}) => {
const {blogs, deleteBlog} = useBlogs()

  return (
    <div className="ml-[5rem]">
      {
        blogs.map(blog =>(
          <ArticleCard key={blog.id} article={blog} 
          onEdit={()=> onEdit(blog)}
           onDelete={()=> deleteBlog(blog.id)}/>
          
        ))

      }
      
    </div>
  )
}

export default ArticleList