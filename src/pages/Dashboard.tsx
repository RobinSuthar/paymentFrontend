import axios from "axios";
import { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { Link } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
interface ButtonDemoProps {
  id: string;
  firstName: string;
}

interface User {
  _id: string;
  firstName: string;
}

export function ButtonDemo({ id, firstName }: ButtonDemoProps) {
  return (
    <div className="border-2 p-3  m-3 rounded-xl">
      <Link to={`/send?id=${id}&name=${firstName}`}> Send Money </Link>
    </div>
  );
}
const Dashboard = () => {
  const [user, setUsers] = useState<User[]>([]);
  const [balance, setBalance] = useState<number>(0);

  const [filter, setFilter] = useState<string>("");
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/bulk?filter=` + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/account/balance`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.msg);
      });
  }, []);
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="p-4 ">
      <div className=" border-gray mt-12 rounded-lg">
        <div>
          <div className=" flex justify-center text-xl md:text-2xl gap-9 md:gap-96  mt-3">
            <p className=""> Your Balance $: {Math.round(balance)}</p>

            <p className="">{localStorage.getItem("firstname")}</p>
          </div>
          <div>
            <div className=" flex flex-col justify-center  items-center px-4">
              <h2 className=" mt-8 mb-6 text-base md:text-xl text-center sm:text-2xl dark:text-white text-black">
                User's
              </h2>
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
        <br />
        <div>
          <div>
            <div className="flex justify-center  ">
              <div className="flex text-xl ">
                <div>
                  <div className="  md:ml-14">
                    {user.map((Each) => {
                      return (
                        <div key={Each._id} className="">
                          <div
                            key={Math.random()}
                            className="flex justify-center md:gap-96 "
                          >
                            <div className="flex ">
                              <div className=" mt-7 mr-20 ">
                                {Each.firstName}
                              </div>
                            </div>
                            <div className="">
                              <ButtonDemo
                                id={Each._id}
                                firstName={Each.firstName}
                              ></ButtonDemo>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
