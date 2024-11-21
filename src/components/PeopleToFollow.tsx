import UserCard from "./UserCard"

const PeopleToFollowList =[
  {name: 'John Doe', following: false,},
  {name: 'J Smith', following: true,},
  {name: 'Bob ', following: false,},
  {name: 'Alice Doe', following: false}
]


const PeopleToFollow = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow mt-6  ">
      <h3 className="font-semibold text-lg mb-4">People To Follow</h3>
      <div className="space-y-4">
        {
          PeopleToFollowList.map((person, id)=>(
            <UserCard key={id} person={person} />
          ))
        }
      </div>
    </div>
  )
}

export default PeopleToFollow