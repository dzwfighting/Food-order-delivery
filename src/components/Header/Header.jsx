import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

// import { motion } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/header.css";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  const menuRef = useRef(null);

  const headerRef = useRef(null);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const profileActionRef = useRef(null);

  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("log out");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    // it achieve when we scroll the page, the Tasty Treat logo not change, always in top
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  // const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  // const navigateToCart = () => {
  //   navigate("/cart");
  // };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ============= menu ============= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "avtive__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* =============== nav right icons ================= */}
          <div className="nav__right d-flex align-items-center gap-4">
            {currentUser ? (
              <span className="cart__icon" onClick={toggleCart}>
                <i class="ri-shopping-basket-line"></i>
                <span className="cart__badge">
                  {/* it shows how many cart the user add in */}
                  {totalQuantity}
                </span>
              </span>
            ) : (
              <span className="cart__icon">
                <Link to="/login">Visitors</Link>
              </span>
            )}

            <div
              className="profile"
              ref={profileActionRef}
              onClick={toggleProfileActions}
            >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i class="ri-user-line"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span>
                      <Link to="/home" onClick={logout}>
                        Logout
                      </Link>
                    </span>
                  ) : (
                    // <Dropdown.Item href="/home" onClick={logout}>
                    //   Logout
                    // </Dropdown.Item>
                    <div>
                      <span>
                        <Link to="/register">Register</Link>
                      </span>
                    </div>

                    // <div>
                    //   <Link to="/register">Register</Link>
                    //   <Dropdown.Item href="/register">Register</Dropdown.Item>
                    //   <Dropdown.Item href="/login">Login</Dropdown.Item>
                    // </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* <div
              className="profile nav__icons"
              ref={profileActionRef}
              onClick={toggleProfileActions}
            >
              {currentUser ? (
                <div className="profile__actions">
                  <span>Logout</span>
                </div>
              ) : (
                <div className="profile__actions">
                  <Link to="/register">Signup</Link>
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div> */}

            {/* </div> */}

            {/* <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span> */}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
