
interface CardProps{
  title: string,
  description: string,
  image: string,
  link: string
}

const Card = ({title, description, image, link}:CardProps ) => {


  return (
    // <div className="max-w-sm mx-auto m-[1rem] w-64  rounded-lg shadow-md overflow-hidden ">
    <div className="max-w-sm mx-auto m-4 w-64 rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform transform duration-300 hover:scale-105 hover:border-blue-500 animate-pop-in">


      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 ">{description}</p>


        <a href={link} className="inline-block px-4 py-2 bg-gray-400 font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200 ">Click Me</a>
        </div>
    </div>
  )
}

export default Card