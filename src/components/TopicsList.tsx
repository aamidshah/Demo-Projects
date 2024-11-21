

const topics =[
"Technology",
"Health",
"Design Thinking",
"Data Science",
"Artificial Intelligence",
"Machine Learning",
"Crypto",
"personal Growth"

]


const TopicsList = () => {
  return (
    <div className=" bg-white p-4 rounded-lg shadow mt-8 ">
      <h3 className="font-semibold text-lg mb-4">Topics For You</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic,id) =>(
          <span key={id} className="px-3 py-1 bg-gray-200  rounded-full text-sm cursor-pointer hover:bg-gray-300">{topic}</span>
        ))}
      </div>
    </div>
  )
}

export default TopicsList