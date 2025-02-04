import { PlaceholdersAndVanishInputDemo } from "@/components/PlaceholdersAndVanishInputDemo";

import { Link } from "react-router-dom";

export function ButtonDemo() {
  return (
    <div className="border-2 p-3   rounded-xl">
      <Link to={"/send"}> Send Money </Link>
    </div>
  );
}
const Dashboard = () => {
  return (
    <div className="p-4 ">
      <div className=" border-gray mt-12 rounded-lg">
        <div>
          <div className=" flex justify-center text-2xl gap-96 mt-3">
            <p className="mr-72"> Your Balance 10000</p>

            <p className="ml-72">Full Name</p>
          </div>
          <div>
            <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo>
          </div>
        </div>
        <br />
        <div>
          <div>
            <ShowUser></ShowUser>
          </div>
        </div>
      </div>
    </div>
  );
};

function ShowUser() {
  return (
    <div className="flex justify-center gap-96">
      <div className="flex text-xl ">
        <div>
          <p>R</p>
        </div>
        <div>
          <div className=" ml-14">Name</div>
        </div>
      </div>
      <div className="ml-96 mt-3">
        <ButtonDemo></ButtonDemo>
      </div>
    </div>
  );
}

export default Dashboard;
