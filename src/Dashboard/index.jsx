import AddResume from "./component/AddResume"


function Dashboard() {
  return (
    <div>
      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="font-bold text-3xl">My resume</h2>
        <p>Start Creating Ai Resume to your next job</p>

        <div className="grid grid-cols-2  md:grid-cols-3  lg:grid-cols-5">
          <AddResume/>
        </div>

      </div>
    </div>
  )
}

export default Dashboard