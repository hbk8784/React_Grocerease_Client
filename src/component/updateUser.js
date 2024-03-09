import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import Wrapper from "../assets/wrapper/updateUser";
import { updateProfileThunk } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateUser = ({ oldUserData }) => {
  const [userData, setUserData] = useState({ id: oldUserData.id });
  const [rePassword, setRePassword] = useState("");
  const { userUpdateSuccess } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePassword(e) {
    const value = e.target.value;
    setRePassword(value);
  }

  function handleClear(e) {
    e.preventDefault();
    setUserData({ id: oldUserData.id });
    setRePassword("");
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userData.password && userData.password !== rePassword) {
      toast.error("Password did not match!");
      return;
    }
    dispatch(updateProfileThunk(userData));
  }

  useEffect(() => {
    if (userUpdateSuccess) {
      setTimeout(() => {
        navigate("/customer/profile");
      }, 1500);
    }
  }, [userUpdateSuccess]);

  useEffect(() => {
    return () => {
      window.removeEventListener("submit", handleSubmit);
      window.removeEventListener("change", handleChange);
      window.removeEventListener("click", handleClear);
    };
  }, []);

  return (
    <Wrapper className="container">
      <h2 className="h5 mb-3 mb-lg-0 fw-bold">
        <Link to="/customer/profile" className="text-muted">
          <i className="bi bi-arrow-left-square me-2"></i>
        </Link>{" "}
        Update User
      </h2>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                    />
                  </div>
                  <h5 className="user-name"></h5>
                  <h6 className="user-email">{userData.email}</h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>
                    Full Stack Designer I enjoy creating user-centric,
                    delightful and human experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"
          onSubmit={handleSubmit}
        >
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="fullName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="firstName"
                      value={userData.firstName}
                      placeholder={oldUserData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="eMail">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="eMail"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                      placeholder={oldUserData.lastName}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Gender</label>
                    <select
                      type="text"
                      className="form-select"
                      id="phone"
                      name="gender"
                      value={userData.gender}
                      onChange={handleChange}
                    >
                      <option style={{ color: "red" }}>
                        {oldUserData.gender}
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="website">DOB </label>
                    <input
                      type="date"
                      className="form-control"
                      id="website"
                      name="dob"
                      value={moment(userData.dob).format("YYYY-MM-DD")}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      placeholder={oldUserData.email}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="eMail">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="eMail"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      placeholder={oldUserData.phone}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="eMail">
                      User Name <b style={{ color: "red" }}>e.g @name</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eMail"
                      name="userName"
                      value={userData.userName}
                      onChange={handleChange}
                      placeholder={oldUserData.userName}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="eMail">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="eMail"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      placeholder="**********"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="eMail">Verify Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="eMail"
                      name="rePassword"
                      value={rePassword}
                      onChange={handlePassword}
                      placeholder="**********"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                  <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="Street">Addresss</label>
                    <input
                      type="name"
                      className="form-control"
                      id="Street"
                      name="address"
                      value={userData.address}
                      onChange={handleChange}
                      placeholder={oldUserData.address}
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                  <div className="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-secondary mt-3 mx-2"
                      onClick={handleClear}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="submit"
                      name="submit"
                      className="btn btn-primary mt-3 mx-2"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default UpdateUser;
