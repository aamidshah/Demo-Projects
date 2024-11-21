import {  FaUserCircle } from "react-icons/fa"

interface UserCardProps {
  id: number,
  person: string
  
}

const UserCard = ({id, person}: UserCardProps) => {


  return (
    <div className="flex items-center justify-between  ">
      <section className="flex items-center  ">
        <FaUserCircle  className="text-3xl text-black-200 "/>
        <span className="ml-[1rem] font-bold">{person.name}</span>
      </section>
      <button className={`font-medium border rounded-full px-2 py-1 hover:bg-slate-300 ${person.following ? 'bg-slate-800 hover:text-black text-white' : ''}`}>

        {person.following ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default UserCard