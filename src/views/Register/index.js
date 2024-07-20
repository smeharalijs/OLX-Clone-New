// import { useNavigate } from "react-router-dom";
import { register } from "../../config/firebase";
import { useState } from "react";

function Registered() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function signup() {
    register( email, password )
      // .then(() => {
      //   // navigate('/signin');
      // })
      // .catch((error) => {
      //   console.error(error);
      // });

      console.log(email,password);
  }
  
  
  
  return (
    <div
      className={` fixed inset-0 bg-white bg-opacity-100  flex items-center justify-center 
      }`}
    >
      <div className="bg-white p-5 px-10   rounded-lg ">
     

        <div className="w-28 m-auto">
        </div>
        <div className="my-2">
          <h1 className="text-center my-2 m-auto font-bold mb-10 ">
            Create an Account
          </h1>
        </div>
        <div>
         

         

          <div className="my-3 ">
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <input   
              onChange={(event) => setPassword(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="password"
              placeholder="Enter your password"
            />
          </div>
         
        </div>

        <div className="bg-gray-200 my-5 p-2 flex justify-center cursor-pointer">
          <button className=""  onClick={signup}>
            <h1 className="">Register</h1>
          </button>
        </div>
        <div className="p-3 text-sm">
          <h3>
            Already have an Account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              // onClick={() => navigate("/signin")}
            >
              Login here
            </span>{""}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Registered;
