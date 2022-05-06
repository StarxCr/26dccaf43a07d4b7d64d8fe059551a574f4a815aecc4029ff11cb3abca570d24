import React from "react";
import * as s from "./Nav&Sb.style";
import {Link} from 'react-router-dom';
const Navigation = (props) => {
  const {
    navItems = [
      {
        name: "Home", path: "/",
      },
      {
        name: "Preview", path: "/preview",
      },
      {
        name: "Create", path: "/create",
      },
      { name: "Statictics", path: "/statistics" },
      { name: "Listing", path: "/listing" }
    ], account='', setAccounts
    
  } = props;
  //mapping navigation elements to render them later
  const navItemsJSX = navItems.map((item, i) => (
    <Link key={i} to={item.path} style={{textDecoration:'none'}}><s.NavItem>{item.name}</s.NavItem></Link>
  )); 
  const connect = async ()=>{
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(account);
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
          console.error(`User rejected connection: ${error}`);
      }
    }
  }
  };
  //if user changes wallet you need to rerender button text to new account address and assign 'address' to new value
  const strAccount = String(account);
  //button with text 'Connect' or formatted wallet address
  const displayedAccount = account === '' ? 'Connect' : strAccount.slice(0, 4) + '...' + strAccount.slice(strAccount.length-3, strAccount.length);
  const[open,setOpen] = React.useState(false);
  const animate = () =>{
    setOpen(!open);
  }
  return (
    <>
      <s.navToggler style={{background:'transparent'}} onClick={()=>setOpen(!open)} >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <s.Line1 open={open} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <s.Line2  open={open} d="M 20,50 H 80" />
        <s.Line3 open={open} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </s.navToggler>
    <s.NavContainer open={open}>
      <s.Logo src='/images/Logo.svg'/>
      <s.Nav>
        {navItemsJSX}
        <s.ConnectButton onClick={()=>connect()}>{displayedAccount}</s.ConnectButton>
      </s.Nav>
    </s.NavContainer>
    </>
  );
};

export default Navigation;
