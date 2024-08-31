import me from "../../../assets/images/pp.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

import "./Profile.scss";

const Profile = () => {

  return (
    <section className="profile">
      <main>
        <img src={me} alt="User" />
        <h5 >
          Abhishek
        </h5>
        <div>
          <Link
            to="/admin"
            style={{
              borderRadius: 0,
              backgroundColor: "rgb(40,40,40)",
            }}
          >
            <MdDashboard /> Dashboard
          </Link>
        </div>
        <div
        >
          <Link to="/my-orders">Orders</Link>
        </div>

        <button
         
        >
          Logout
        </button>
      </main>
    </section>
  );
};

export default Profile;