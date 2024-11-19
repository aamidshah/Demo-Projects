import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa"
import { GoProjectSymlink } from "react-icons/go"
import { SiCoursera } from "react-icons/si"
import Card from "./Card"
import About from "./About"
import Contact from "./Contact"
import { useState } from "react"

interface Project {
  link:string
}
const projects = [

  {
    id: 1,
    title: "Project 1",
    description: "This is the first project",
    image: "indo.avif",
    link: "https://mern-netflix-clone-lp9d.onrender.com/"
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the second project",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is the third project",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is the fourth project",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is the fifth project",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Project 6",
    description: "This is the sixth project", 
    image: "https://via.placeholder.com/150",
  }
]

const tabs = [
  {
  id: 'home',
  label: 'Home',
  icon: <FaHome />,
  content: (
    <div className="flex flex-wrap ">
      {
        Array.from({length:6}).map((_, index)=>(
          <Card 
          key={index}
          title="Amaxing Card"
          description=" This is a Cool Card component using Raect and Tailwind css"
          image="https://via.placeholder.com/400x300"
          link="/"
          />
        ))
      }

    </div>
  )
},
{
  id: 'about',
  label: 'About',
  icon: <FaInfoCircle />,
  content: <About />
   
},
{
  id: 'projects',
  label: 'Projects',
  icon: <GoProjectSymlink />,
  content: (
    <div className="flex flex-wrap ">
      {
        projects.map((project)=>(
          <Card 
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          />
        ))
      }

    </div>

  )
},
{
  id:'courses',
  label: 'Courses',
  icon: <SiCoursera />,
  content: (
    <div className="flex flex-wrap ">
    {
      Array.from({length:6}).map((_, index)=>(
        <Card
        key={index}
        title="Amaxing Card"
        description=" This is a Cool Card component"
        image="https://via.placeholder.com/400x300"
        />
      ))
    }

  </div>
  )
},
{
  id: 'contact',
  label: 'Contact',
  icon: <FaPhone />,
  content: <Contact />
}
]

const Tabs = () => {

const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="p-2 mt-[3rem]  ">
      <div className="flex border-b border-gray-200">
        {tabs.map(tab=>(
          <button key={tab.id}className={`flex-1 text-center py-2 px-4 font-medium text-sm ${activeTab === tab.id ? 'border-b-2': 'text-gray-600' } `} onClick={()=> setActiveTab(tab.id)} >
            <div className="flex items-center justify-center space-x-2 ">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 rounded-large">
        {
          tabs.find((tab)=> tab.id === activeTab) ?.content
        }
      </div>
      
    </div>
  )
}

export default Tabs