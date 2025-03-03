import openeye from "../assets/img/pics/openeye.png";
import closeeye from "../assets/img/pics/closeeye.png";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userDetails = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userDetails.user) {
        navigate("/");
      }
    } catch (error) {
      alert("incorrent user details");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="text"
                id="text"
                value={name}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="relative mt-2 w-full">
              <input
                type={show === false ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 border-2 border-black-700 focus:outline-2 focus:-outline-offset-2 focus:outline-black-600 sm:text-sm/6"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />

              {show === false ? (
                <img
                  src={closeeye}
                  alt="icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "12px",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <img
                  src={openeye}
                  alt="icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "12px",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShow(!show)}
                />
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => onSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
