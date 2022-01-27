import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Navbar.css";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="left-nav">
          <Link to="/">
            <svg
              width="75"
              height="82"
              viewBox="0 0 75 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66.5123" height="81.4925" rx="20" fill="#7BAEBF" />
              <path
                d="M35.7551 32.445V36.8747H22.5012V32.445H35.7551ZM24.3117 22.1443V47.738H18.5813V22.1443H24.3117ZM39.7102 22.1443V47.738H33.9973V22.1443H39.7102Z"
                fill="white"
              />
              <path
                d="M49.8223 60.4219H55.5176C55.4238 62.1797 54.9434 63.7324 54.0762 65.0801C53.2207 66.416 52.0312 67.4648 50.5078 68.2266C48.9844 68.9766 47.1738 69.3516 45.0762 69.3516C43.4004 69.3516 41.9004 69.0645 40.5762 68.4902C39.252 67.916 38.127 67.0957 37.2012 66.0293C36.2871 64.9512 35.584 63.6562 35.0918 62.1445C34.6113 60.6211 34.3711 58.9043 34.3711 56.9941V55.4297C34.3711 53.5195 34.623 51.8027 35.127 50.2793C35.6309 48.7559 36.3516 47.4551 37.2891 46.377C38.2266 45.2988 39.3516 44.4727 40.6641 43.8984C41.9766 43.3242 43.4414 43.0371 45.0586 43.0371C47.2383 43.0371 49.0781 43.4297 50.5781 44.2148C52.0781 45 53.2383 46.0781 54.0586 47.4492C54.8906 48.8203 55.3887 50.3848 55.5527 52.1426H49.8398C49.793 51.1465 49.6055 50.3086 49.2773 49.6289C48.9492 48.9375 48.4453 48.416 47.7656 48.0645C47.0859 47.7129 46.1836 47.5371 45.0586 47.5371C44.2383 47.5371 43.5176 47.6895 42.8965 47.9941C42.2871 48.2988 41.7773 48.7734 41.3672 49.418C40.9688 50.0625 40.6699 50.8828 40.4707 51.8789C40.2715 52.8633 40.1719 54.0352 40.1719 55.3945V56.9941C40.1719 58.3418 40.2598 59.5078 40.4355 60.4922C40.6113 61.4766 40.8926 62.291 41.2793 62.9355C41.6777 63.5801 42.1875 64.0605 42.8086 64.377C43.4297 64.6934 44.1855 64.8516 45.0762 64.8516C46.0957 64.8516 46.9453 64.6934 47.625 64.377C48.3047 64.0488 48.8262 63.5566 49.1895 62.9004C49.5527 62.2441 49.7637 61.418 49.8223 60.4219Z"
                fill="#E4BE37"
              />
            </svg>
          </Link>
        </div>
        <div className="right-nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/contact" style={{ border: "2px solid white" }}>
            Contact Us
          </Link>
        </div>
      </div>
      <div className="hidden-nav">
        <div className="nav-svg">
          <Link to="/">
            <svg
              width="75"
              height="82"
              viewBox="0 0 75 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66.5123" height="81.4925" rx="20" fill="#7BAEBF" />
              <path
                d="M35.7551 32.445V36.8747H22.5012V32.445H35.7551ZM24.3117 22.1443V47.738H18.5813V22.1443H24.3117ZM39.7102 22.1443V47.738H33.9973V22.1443H39.7102Z"
                fill="white"
              />
              <path
                d="M49.8223 60.4219H55.5176C55.4238 62.1797 54.9434 63.7324 54.0762 65.0801C53.2207 66.416 52.0312 67.4648 50.5078 68.2266C48.9844 68.9766 47.1738 69.3516 45.0762 69.3516C43.4004 69.3516 41.9004 69.0645 40.5762 68.4902C39.252 67.916 38.127 67.0957 37.2012 66.0293C36.2871 64.9512 35.584 63.6562 35.0918 62.1445C34.6113 60.6211 34.3711 58.9043 34.3711 56.9941V55.4297C34.3711 53.5195 34.623 51.8027 35.127 50.2793C35.6309 48.7559 36.3516 47.4551 37.2891 46.377C38.2266 45.2988 39.3516 44.4727 40.6641 43.8984C41.9766 43.3242 43.4414 43.0371 45.0586 43.0371C47.2383 43.0371 49.0781 43.4297 50.5781 44.2148C52.0781 45 53.2383 46.0781 54.0586 47.4492C54.8906 48.8203 55.3887 50.3848 55.5527 52.1426H49.8398C49.793 51.1465 49.6055 50.3086 49.2773 49.6289C48.9492 48.9375 48.4453 48.416 47.7656 48.0645C47.0859 47.7129 46.1836 47.5371 45.0586 47.5371C44.2383 47.5371 43.5176 47.6895 42.8965 47.9941C42.2871 48.2988 41.7773 48.7734 41.3672 49.418C40.9688 50.0625 40.6699 50.8828 40.4707 51.8789C40.2715 52.8633 40.1719 54.0352 40.1719 55.3945V56.9941C40.1719 58.3418 40.2598 59.5078 40.4355 60.4922C40.6113 61.4766 40.8926 62.291 41.2793 62.9355C41.6777 63.5801 42.1875 64.0605 42.8086 64.377C43.4297 64.6934 44.1855 64.8516 45.0762 64.8516C46.0957 64.8516 46.9453 64.6934 47.625 64.377C48.3047 64.0488 48.8262 63.5566 49.1895 62.9004C49.5527 62.2441 49.7637 61.418 49.8223 60.4219Z"
                fill="#E4BE37"
              />
            </svg>
          </Link>
        </div>
        {isClicked ? (
          <CloseIcon
            sx={{ fontSize: 60 }}
            style={{ color: "#E4BE37" }}
            onClick={() => setIsClicked(!isClicked)}
          />
        ) : (
          <MenuIcon
            sx={{ fontSize: 60 }}
            style={{ color: "#E4BE37" }}
            onClick={() => setIsClicked(!isClicked)}
          />
        )}
        {isClicked && (
          <div className="nav-vertical">
            <div className="close-nav">
              {isClicked ? (
                <CloseIcon
                  sx={{ fontSize: 60 }}
                  style={{ color: "#E4BE37" }}
                  onClick={() => setIsClicked(!isClicked)}
                />
              ) : (
                <MenuIcon
                  sx={{ fontSize: 60 }}
                  style={{ color: "#E4BE37" }}
                  onClick={() => setIsClicked(!isClicked)}
                />
              )}
            </div>
            <Link to="/">Home</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/staff">Our Staff</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;