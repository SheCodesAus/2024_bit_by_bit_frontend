// HOOKs
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth.js";

// API
import postLogin from "../../api/post-login.js";

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // REMOVED DUE TO MVP TIME PRESSURE - CAN COME BACK
  // const [showPassword, setShowPassword] = useState("false");

  // function showPassword() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  const handleUsernameChange = (event) => {
    const { id, value } = event.target;
    setUsername((prevUsername) => ({
      ...prevUsername,
      [id]: value,
    }));
  };
  const handlePasswordChange = (event) => {
    const { id, value } = event.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      postLogin(username, password)
        .then((response) => {
          console.log(response);
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("user_id", response.user_id);
          window.localStorage.setItem("username", response.username);
          window.localStorage.setItem("is_admin", response.is_admin);
          setAuth({
            token: response.token,
            user_id: response.user_id,
            username: response.username,
            is_admin: response.is_admin,
          });
        })
        .then(navigate("/home"));
    }
  };

  return (
    <>
      <form>
        {/* SECTION 1 - Inputs */}
        <section>
          {/* USERNAME */}
          <section>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              autoComplete="username"
              placeholder="epicusername"
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </section>
          {/* PASSWORD */}
          <section>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="password"
              placeholder="epicpassword"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {/* REMOVED DUE TO MVP TIME CONSTRAINTS */}
            {/* <div>
              <label htmlFor="check">Show Password</label>
              <input
                type="checkbox"
                value={showPassword}
                onChange={() => setShowPassword((prev) => !prev)}
              />
            </div> */}
          </section>
        </section>
        {/* SECTION 2 - Submit */}
        <section className="mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-orange-500 px-3"
          >
            Submit
          </button>
        </section>
      </form>
    </>
  );
}

export default LoginForm;
