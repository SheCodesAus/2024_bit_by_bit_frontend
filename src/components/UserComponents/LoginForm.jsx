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
      postLogin(username, password).then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("userID", response.userID);
      });
      navigate("/");
    }
  };

  return (
    <>
      <form>
        {/* SECTION 1 - Inputs */}
        <section>
          {/* USERNAME */}
          <section>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              autoComplete="username"
              placeholder="epicusername"
              onChange={(e) => setUsername(e.target.value)}
            />
          </section>
          {/* PASSWORD */}
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="password"
              placeholder="epicpassword"
              onChange={(e) => setPassword(e.target.value)}
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
        <section>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </section>
      </form>
    </>
  );
}

export default LoginForm;
