import React, {useEffect} from "react";
import * as s from "./Pages.styles";
import { useMoralis } from "react-moralis";

const ListingPage = (props) => {
 const  {account, apiKey} = props;
 const url = "https://api.etherscan.io/api?module=account&action=tokennfttx&address="+account+"&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey="+apiKey;

  const {
		Moralis,
		user,
		logout,
		authenticate,
		enableWeb3,
		isInitialized,
		isAuthenticated,
		isWeb3Enabled,
	} = useMoralis();

 const getNFT = async ()=>{
	if(account!=undefined){
		// const nftArray = await fetch("https://api.etherscan.io/api?module=account&action=tokennfttx&address=0x73e8f4ecbab1c6afd74f5c338f7b3e503e0790a1&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=GM2E4XQDH1PKJNYQ29SRJTQX2GQG57YQFE")
		const nftArray = await fetch(url)
		.then(res=>res.json()).then(data=>data.result);
		console.log(nftArray);
		return nftArray
	}
	else{
		console.log("Connect Metamask to website to see your nfts")
	}
 }
 useEffect(()=>getNFT(),[account]);

  const createSellOrder = async (price, tokenAddress, id) => {
		const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24);
		const startAmount = price;
		const endAmount = startAmount;
		await Moralis.Plugins.opensea.createSellOrder({
      network: "testnet",
			tokenAddress: tokenAddress,
			tokenId: id,
			tokenType: "ERC721",
			userAddress: account,
			startAmount,
			endAmount,
			expirationTime: startAmount > endAmount && expirationTime, // Only set if you startAmount > endAmount
		});
    
		console.log("Sell order was created successfully");
	};
  useEffect(() => {
    if (isInitialized) {
      Moralis.initPlugins();
    }
  }, []);

  useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled) {
			enableWeb3();
		}
		// eslint-disable-next-line
	}, [isAuthenticated]);

  return (
    
      <s.PageSection>
        <s.MainContainer>
          <s.Title>Look at me ima title</s.Title>
          <s.Button onClick={()=>createSellOrder()}>
            Sell Item on OpenSea
          </s.Button>
          <s.Button onClick={()=>authenticate()}>
            Authenticate
          </s.Button>
        </s.MainContainer>
      </s.PageSection>
  );
};

export default ListingPage;
