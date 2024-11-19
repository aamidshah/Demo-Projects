import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const links =[
  {
    href: "https://www.linkedin.com/in/aamid-shah-a456b6270",
    label: "LinkedIn",
    icon: <FaLinkedinIn className="h-6 w-6 text-blue-700 " />
  },
  {
    href: "https://github.com/aamidshah",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-black-500 " />
  },
  {
    label: 'youtube',
    href: 'https://www.youtube.com/channel/UC9g2Q9q6Y6Y2V9Z8j7j9ZCw',
    icon: <FaYoutube className="h-6 w-6 text-red-500 " />
  },
  {
    label: 'facebook',
    href: 'https://www.facebook.com/smart.pie.39',
    icon: <FaFacebook className="h-6 w-6 text-blue-500 " />
  },
  {
    label: 'email',
    href: 'mailto:shahaamid33@gmail.com',
    icon: <MdEmail className="h-6 w-6 text-gray-500 " />
  }
]

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl ">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>

<div className="flex items-center">
  {
    links.map(link=>(
      <a key={link.label} href={link.href} target="-blank" rel="noopener noreferrer" className="flex items-center border p-[0.6rem] bg-white rounded-3xl space-x-2 text-gray-900 hover:bg-gray-200 mr-[2rem] ">
        {link.icon}
        <span className="text-lg"> {link.label}</span>
      </a>
    ))
  }

</div>

    </section>
  )
}

export default Contact