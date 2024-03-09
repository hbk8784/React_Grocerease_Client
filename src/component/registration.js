import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../features/userSlice";
import { useSelector } from "react-redux";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  email: "",
  role: "",
  userName: "",
  address: "",
  password: "",
  rePassword: "",
};
const Registration = () => {
  const [userData, setUserData] = useState(initialState);
  const { registerSuccess } = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, " and ", value);

    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("profile submited");
    dispatch(registerThunk(userData));
  }

  function cancelAndClear(e) {
    e.preventDefault();
    setUserData(initialState);
  }

  useEffect(() => {
    if (registerSuccess) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [registerSuccess]);

  return (
    <div className="container-fluid">
      <div className="container">
        {/* <!-- Title --> */}
        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 className="h5 mb-3 mb-lg-0 fw-bold">
            <Link to="/" className="text-muted">
              <i className="bi bi-arrow-left-square me-2"></i>
            </Link>{" "}
            Create new User
          </h2>
          <div className="hstack gap-3">
            <button
              className="btn btn-light btn-sm btn-icon-text"
              onClick={(e) => cancelAndClear(e)}
            >
              <i className="bi bi-x"></i>{" "}
              <span className="text fw-bold">Cancel</span>
            </button>
            <button
              className="btn btn-warning btn-sm btn-icon-text"
              onClick={handleSubmit}
            >
              <i className="bi bi-save"></i>{" "}
              <span className="text fw-bold">Save</span>
            </button>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div className="row">
          {/* <!-- Left side --> */}
          <div className="col-lg-8">
            {/* <!-- Basic information --> */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="h5 mb-4 fw-bold">Basic information</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData.firstName}
                        name="firstName"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData.lastName}
                        name="lastName"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={userData.email}
                        name="email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData.phone}
                        name="phone"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Dob </label>
                      <input
                        type="date"
                        className="form-control"
                        required
                        name="dob"
                        value={userData.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Gender </label>

                      <select
                        className="form-select"
                        name="gender"
                        required
                        value={userData.gender}
                        onChange={handleChange}
                      >
                        <option>-Select-</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Address --> */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="h5 mb-4 fw-bold">Other Info</h3>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    required
                    value={userData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">
                      User Name{" "}
                      <span style={{ color: "rgb(0,0,0,0.5)" }}>e.g @name</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="userName"
                      value={userData.userName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      value={userData.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">verify password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      name="rePassword"
                      value={userData.rePassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right side --> */}
          <div className="col-lg-4">
            {/* <!-- Status --> */}
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="h5 fw-bold">Account Type </h3>
                <select
                  className="form-select"
                  required
                  name="role"
                  value={userData.role}
                  onChange={handleChange}
                >
                  <option>-Select-</option>
                  <option value="customer">Customer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
