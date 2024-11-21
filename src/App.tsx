
import { IoMdAddCircle } from 'react-icons/io'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import { BlogProvider } from './components/Shared/BlogContext'
import TopicsList from './components/TopicsList'
import TrendsList from './components/TrendsList'
import './index.css'
import { useState } from 'react'
import { Blog } from './components/Shared/BlogType'
import Modal from './components/Modal'
import BlogForm from './components/BlogForm'
import ArticleList from './components/ArticleList'

const App = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

const openModalForNewBlog=()=>{
  setEditingBlog(null)
  setIsModalOpen(true);
}

const openModalForEditBlog =(blog:Blog) =>{
  setEditingBlog(blog);
  setIsModalOpen(true);
}


  return (
    <div>
      <BlogProvider>
    
    <Navigation />

<div className="flex justify-center">

   {/* {main area}  */}
   <section className='mx-auto p-6'>
    <div>
      <button onClick={openModalForNewBlog} className='ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4 '>
        Add a New Blog 
        <IoMdAddCircle className='ml-[.5rem]' />
        
        </button>

{/* {Article component } */}
<ArticleList onEdit={openModalForEditBlog} />

{isModalOpen && <Modal onClose={() => setIsModalOpen(false) }>
  <BlogForm  existingBlog ={editingBlog} onClose={()=> setIsModalOpen(false)} />
  </Modal>}
    </div>
   </section>

   
  <div className='w-[30%] '>
    <PeopleToFollow />
    <TrendsList />
    <TopicsList />
  </div>
</div>
</BlogProvider>
    </div>
  )
}

export default App