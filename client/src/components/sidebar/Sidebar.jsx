import { useEffect } from "react";
import "./sidebar.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cat,setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCat(res.data);
    };
    getCats();
  },[]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link"> <li className="sidebarListItem">{c.name}</li></Link>
          
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
