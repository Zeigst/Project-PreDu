import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PreduContext } from '../PreduContext';
import { ReactComponent as AccountCircleIcon } from '../Resources/Icons/account_circle.svg';
import { ReactComponent as ShoppingCartIcon } from '../Resources/Icons/shopping_cart.svg';
import { ReactComponent as MenuIcon } from '../Resources/Icons/menu.svg';
import { ReactComponent as CloseIcon } from '../Resources/Icons/close.svg';
import { ReactComponent as CategoryMenuIcon } from '../Resources/Icons/keyboard_double_arrow_down.svg';

const Header = () => {
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState("false");
  const {categoryMenuStatus, changeCategoryMenuStatus, numCartItems} = useContext(PreduContext);

  function toggleMenu() {
    setOpen(!isOpen);
  }

  function toHome() {
    window.scrollTo(0, 0);
    if (isOpen === false) {
      setOpen(!isOpen)
    }
    if (categoryMenuStatus === true) {
      changeCategoryMenuStatus()
    }
    navigate('/Home')
  }
  
  function toShop() {
    window.scrollTo(0, 0);
    setOpen(!isOpen)
    if (categoryMenuStatus === true) {
      changeCategoryMenuStatus()
    }
    navigate('/Shop')
  }

  window.addEventListener("scroll", function() {
    var selection = document.querySelector('.header') !== null;
    if (selection) {
      document.querySelector("header").classList.toggle("sticky", window.scrollY > 0)
    }
  })

  return (
    <header className="header">
      
      <div className="logo">
        <h1 onClick={toHome}>PreDu</h1>
      </div>

      <div className={`container ${isOpen ? "" : "open"}`}>
        
        <button className="account-button-responsive" type="button">
          <AccountCircleIcon className="icon"/>
        </button>
        
        <nav className="navigation">
          <ul className="menu-list">
            <li className="menu-item" onClick={toShop}>
              <h2>Shop</h2>
            </li>
            <li className="menu-item">
              <h2>News</h2>
            </li>
            <li className="menu-item">
              <h2>About Us</h2>
            </li>
            <li className="menu-item">
              <h2>Help</h2>
            </li>
          </ul>
        </nav>

        <div className="buttons">
          <button className="cart-button" type="button">
            <ShoppingCartIcon className="icon"/>
            <h2>Your Cart {numCartItems}</h2>
          </button>
          <button className="account-button" type="button">
            <AccountCircleIcon className="icon"/>
          </button>
        </div>
      </div>

      <div className="responsive-buttons">
        <button className={`category-menu-button ${categoryMenuStatus ? "open" : ""}`} onClick={changeCategoryMenuStatus} type="button">
          <CategoryMenuIcon className="icon"/>
        </button>
        <button className={`menu-button ${isOpen ? "" : "open"}`} onClick={toggleMenu} type="button">
          <MenuIcon className="menu-icon"/>
          <CloseIcon className="close-icon"/>
        </button>
      </div>
    </header>
  )
}

export default Header