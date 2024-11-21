

const trends =[
  {
    title: "The Art of Mindful Living   Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    author: "Sophia Reynolds"
  },
  {
    title: "Chasing the Horizon",
    author: "Ethan Sawyer"
  },
  {
    title: "Echoes of the Past",
    author: "Liam Davenport"
  },
  {
    title: "Beyond the Stars",
    author: "Aria Bennett"
  },

]


const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8  ">
      <h3 className="font-semibold text-lg mt-4">Today's Top Trends</h3>
      <ul className="space-y-4 mt-5">
        {trends.map((trend, id) => (
        <li key={id} className="flex flex-col">
          <span className=" text-gray-900 font-bold italic ">{trend.title}</span>
          <span className="text-sm text-gray-500">By {trend.author}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default TrendsList