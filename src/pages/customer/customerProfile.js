import Wrapper from "../../assets/wrapper/customerProfile";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
import { statusOnUpdate } from "../../features/userSlice";
import { Footer1, Footer2, NavBar, NavBar2 } from "../../component/main";

const CustomerProfile = () => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  function setUpdateTofalse() {
    dispatch(statusOnUpdate());
  }

  useEffect(() => {
    return () => {
      window.removeEventListener("click", setUpdateTofalse);
    };
  }, []);
  return (
    <div>
      <NavBar />
      <br></br>
      <Wrapper className="container">
        <div id="content" className="content p-0">
          <div className="profile-header">
            <div className="profile-header-cover"></div>

            <div className="profile-header-content">
              <div className="profile-header-img">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />
              </div>

              <div className="profile-header-info">
                <h4 className="m-t-sm">
                  {user.firstName} {user.lastName}
                </h4>
                <p className="m-b-sm">
                  {user.role} ID: {user.id}
                </p>
                <Link
                  to="/customer/edit/profile"
                  className="btn btn-xs btn-primary mb-3 mx-2"
                  onClick={setUpdateTofalse}
                >
                  Edit Profile
                </Link>
                <Link to="/" className="btn btn-xs btn-primary mb-3 mx-2">
                  Home
                </Link>
              </div>
            </div>
          </div>

          <div className="profile-container">
            <div className="row row-space-20">
              <div className="col-md-8">
                <div className="tab-content p-0">
                  <div className="tab-pane active show" id="profile-about">
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">CONTACT INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Phone No</td>
                          <td className="value">{user.phone}</td>
                        </tr>
                        <tr>
                          <td className="field">Email</td>
                          <td className="value">{user.email}</td>
                        </tr>

                        <tr>
                          <td className="field">Address</td>
                          <td className="value">{user.address}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">BASIC INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Birth of Date</td>
                          <td className="value">
                            {moment(user.dob).format("MMMM DD, YYYY")}
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Gender</td>
                          <td className="value">{user.gender}</td>
                        </tr>
                        <tr>
                          <td className="field">Created On</td>
                          <td className="value">
                            {moment(user.created_on).format("MMMM DD, YYYY")}
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Updated On</td>
                          <td className="value">
                            {moment(user.updated_on).format("MMMM DD,YYYY")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-4 hidden-xs hidden-sm">
                <ul className="profile-info-list">
                  <li className="title">PERSONAL INFORMATION</li>
                  <li>
                    <div className="field">User Name:</div>
                    <div className="value">{user.userName}</div>
                  </li>
                  <li>
                    <div className="field">Profile Type:</div>
                    <div className="value">{user.role}</div>
                  </li>
                  <li>
                    <div className="field">Status:</div>
                    <div className="value">
                      {user.active == 1 ? "active" : "inactive"}
                    </div>
                  </li>
                  <li>
                    <div className="field">Birth of Date:</div>
                    <div className="value">
                      {moment(user.dob).format("MMMM DD, YYYY")}
                    </div>
                  </li>

                  <li>
                    <div className="field">Address:</div>
                    <div className="value">
                      <address className="m-b-0">{user.address}</address>
                    </div>
                  </li>
                  <li>
                    <div className="field">Phone No:</div>
                    <div className="value">{user.phone}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default CustomerProfile;
