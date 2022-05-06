import $ from 'jquery';

// const contractCode(name, symbol) -> solc compile(solContract) to ABI; compile to bytecode -> web3 new contract(abi) 
// -> contract.deploy(data: {bytecode})->contract.method('createCollectible', baseURI);<->verify-> list
// Promise:
// send money to dev wallet
//deploy contract
// verify
//call function

//Etherscan верификация
//
export const verify = async (_apiKey, _url, _contractCode, _contractAddress, _encodedParameter) =>{
    //Submit Source Code for Verification
    const apiKey = _apiKey
    const url = _url
    const contractCode = _contractCode
    const contractAddress = _contractAddress
    const encodedParameter = _encodedParameter;
    console.log( typeof _contractCode);
$.ajax({
    type: "POST", //Only POST supported  
    // url: `${url}/api?module=contract&action=verifysourcecode&address=${contractAddress}&apikey=${apiKey}&codeformat=solidity-single-file&contractname=NFTContract&compilerversion=v0.8.9+commit.e5eed63a&optimizationUsed=0&runs=200`, //Set to the  correct API url for Other Networks //api.etherscan.io/api https://api-rinkeby.etherscan.io https://api-ropsten.etherscan.io
    url: `${url}/api`, //Set to the  correct API url for Other Networks //api.etherscan.io/api https://api-rinkeby.etherscan.io https://api-ropsten.etherscan.io
    data: {
        apikey: apiKey,                     //A valid API-Key is required        
        module:'contract',                             //Do not change
        action:'verifysourcecode',                     //Do not change
        contractaddress:contractAddress,   //Contract Address starts with 0x...     
        sourceCode:contractCode,             //Contract Source Code (Flattened if necessary)
        codeformat:'solidity-single-file',             //solidity-single-file (default) or solidity-standard-json-input (for std-input-json-format support
        contractname:"NameSecond",         //ContractName (if codeformat=solidity-standard-json-input, then enter contractname as ex: erc20.sol:erc20)
        compilerversion:'v0.8.13+commit.abaa5c0e',   // see https://etherscan.io/solcversions for list of support versions
        optimizationUsed:1, //0 = No Optimization, 1 = Optimization used (applicable when codeformat=solidity-single-file)
        runs:200,                                      //set to 200 as default unless otherwise  (applicable when codeformat=solidity-single-file)        
        constructorArguements:encodedParameter,   //if applicable
        evmversion: '',             //leave blank for compiler default, homestead, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul (applicable when codeformat=solidity-single-file)
        licenseType:'1'  //if applicable, matching pair required
    },
    success: function (result) {
        console.log(result);
        if (result.status === "1") {
            // checkVerification(result.result)
            //1 = submission success, use the guid returned (result.result) to check the status of your submission.
            // Average time of processing is 30-60 seconds
            // document.getElementById("postresult").innerHTML = result.status + ";" + result.message + ";" + result.result;
            console.log(result.result)
            console.log('The contract was successfully verified')
            // result.result is the GUID receipt for the submission, you can use this guid for checking the verification status
        } else {
            //0 = error
            // document.getElementById("postresult").innerHTML = result.status + ";" + result.message + ";" + result.result;
            
            console.log('Verification failed.');
            console.log(result.status + ";" + result.message + ";" + result.result)
        }
        console.log("status : " + result.status);
        console.log("result : " + result.result);
    },
    error: function (result) {
        console.log("error!");
        // document.getElementById("postresult").innerHTML = "Unexpected Error"
    }
});
}
//Проверка верификации
export const checkVerification = async (_guid) =>{
    $.ajax({
        type: "GET",
        url: "https://api-rinkeby.etherscan.io/api",
        data: {
            apikey: 'GM2E4XQDH1PKJNYQ29SRJTQX2GQG57YQFE', 
            guid: _guid, //Replace with your Source Code GUID receipt above
            module: "contract",
            action: "checkverifystatus"
        },
        success: function (result) {
            console.log("status : " + result.status);   //0=Error, 1=Pass 
            console.log("message : " + result.message); //OK, NOTOK
            console.log("result : " + result.result);   //result explanation
            // $('#guidstatus').html(">> " + result.result);
        },
        error: function (result) {
            alert('error');
        }
    });
}