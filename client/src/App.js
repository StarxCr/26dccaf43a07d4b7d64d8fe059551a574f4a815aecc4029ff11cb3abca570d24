import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Nav&Sidebar/Navigation';
import {FormPage} from './components/MainView/FormPage';
import ListingPage from './components/MainView/ListingPage';
import Statistics from './components/MainView/Statistics';
import Preview from './components/MainView/Preview';
import Home from './components/MainView/Home';
import {Routes, Route} from "react-router-dom";
import Web3 from 'web3';
import Sidebar from './components/Nav&Sidebar/Sidebar.js';


function App() {
  var web3;
  const apiKey = "GM2E4XQDH1PKJNYQ29SRJTQX2GQG57YQFE";
  const sidebarHeight = '100';
  const sidebarWidth = '80';

  //---------States--------------
  const [account, setAccounts] = useState();
  const [chainId, setChainId] = useState();
  //handle and unmount account change event
 window.ethereum.on('accountsChanged', (newAccount)=>{
    setAccounts(newAccount);
  });
  window.ethereum.removeListener('accountsChanged', setAccounts);

  //handle and unmount network change(from ehtereum to binance smart chain and etc.)
  window.ethereum.on('chainChanged', (newChainId) => {
    setChainId(newChainId)
    web3 = new Web3(Web3.givenProvider);
    console.log(web3.currentProvider.chainId);

  });
  window.ethereum.removeListener('chainChanged', setChainId);

  
  return (
    <div className="App" style={{background:'black'}}>
      <Navigation account={account} setAccounts={setAccounts} style={{overflowX:'hidden'}}>Header</Navigation>
      <Sidebar height={sidebarHeight} width={sidebarWidth}/>
      <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/preview' element={<Preview/> }/>
      <Route path='/create' element={<FormPage wallet={account}/> }/>
      <Route path='/statistics' element={<Statistics/>} />
      <Route path='/listing' element={<ListingPage account={account} apiKey={apiKey}/>} />
      </Routes>
    </div>
  );
}

export default App;
