import { PlaceholdersAndVanishInputDemo } from "@/components/PlaceholdersAndVanishInputDemo";
import image from "../components/Images/home.png";
const Dashboard = () => {
  return (
    <div className="border-2 border-gray mt-12">
      <div>
        <div>
          <p>Your Balance is : 10,000</p>
        </div>
        <div>
          <p>User's</p>
          <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo>
          <button>Copy Link</button>
        </div>
      </div>
      <br />
      <div>
        <div>
          <ShowUser></ShowUser>
        </div>
      </div>
    </div>
  );
};

function ShowUser() {
  return (
    <div className="flex justify-center gap-96">
      <div className="flex ">
        <div>
          <img className="h-12 w -12" src={image} alt="" />
        </div>
        <div>
          <div className="mt-3">Name</div>
        </div>
      </div>
      <div className="ml-96 mt-3">can View</div>
    </div>
  );
}

export default Dashboard;
