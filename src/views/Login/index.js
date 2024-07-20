import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signin() {
    login(email, password)
      // .then(() => {
      //   navigate('/');
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
  }

  return (
    <div
      className={`fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center`}
    >
      <div className="bg-white p-5 px-10 rounded-lg ">
        <div className="w-28 m-auto">
          <img className="my-2" alt="" />
        </div>
        <div className="my-2">
          <h1 className="text-center mb-10 m-auto font-bold">Login</h1>
        </div>
        <div>
          <div className="my-3">
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="border-2 border-black rounded-sm p-3 w-80"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="bg-gray-200 my-5 p-2 flex justify-center cursor-pointer">
          <button className="" onClick={signin}>
            <h1 className="">Login</h1>
          </button>
        </div>
        <div className="p-3 text-sm">
          <h3>
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
