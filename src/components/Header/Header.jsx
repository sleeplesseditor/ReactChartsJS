/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import "./Header.scss";
import HeaderIcon from '../../assets/baseline_menu_white_18dp.png';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 100vw)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <h3 className="navbar-heading">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
          >
            React Chart.js
          </Link>
        </h3>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Line Graph Page
          </Link>
          <Link 
            to={"/donut-chart"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Donut Chart Page
          </Link>
          <Link 
            to={"/dashboard"}
            style={{ textDecoration: 'none' }}
            onClick={toggleNav}
          >
            Dashboard Page
          </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="header-button">
        <img 
            src={HeaderIcon} 
            alt="HeaderIcon"
        />
      </button>
    </header>
  );
}