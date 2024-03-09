import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../features/userSlice";
import { useNavigate } from "react-router";

const initialState = {
  userName: "",
  password: "",
};

//component
const Login = () => {
  const { user } = useSelector((store) => store.user);
  const [loginData, setloginData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!loginData.userName || !loginData.password) {
      toast.error("Please Fill out all fields");
      return;
    }
    dispatch(loginThunk(loginData));
  }

  //Redirecting users afte logging in as per there role
  useEffect(() => {
    if (user && user.role == "customer") {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (user && user.role == "seller") {
      setTimeout(() => {
        navigate("/seller");
      }, 1000);
    } else if (user && user.role == "admin") {
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }

    return () => {
      window.removeEventListener("change", handleChange);
      window.removeEventListener("click", handleSubmit);
    };
  }, [user]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-group mb-0">
            <div className="card p-4">
              <div className="card-body">
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <div className="input-group mb-3">
                  <span className="mt-2 px-2">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="userName"
                    value={loginData.userName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="mt-2 px-2">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-warning px-4"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-6 text-right">
                    <button type="button" className="btn btn-link px-0">
                      Forgot password?
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card text-black bg-warning py-5 d-md-down-none mycol"
              style={{ width: "44%" }}
            >
              <div className="card-body text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button type="button" className="btn btn-warning active mt-3">
                    Register Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
