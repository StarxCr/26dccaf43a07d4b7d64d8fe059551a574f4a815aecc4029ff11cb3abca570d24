const express = require('express');
var bodyParser = require('body-parser');
var crypto = require('crypto');
const app = express();
const port = 5000;
const fs = require ('fs');
var contractSchema = require("./ERC721");
var cmpl = require('./compiler');

// app.get('/uploads/1.json', (req, res) => {
//     res.send({status:'success'})
//     console.log("Got GET reqeust")
// });
//Для возможности отпрявлять GET запросы и получать картинки и метадату
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use(bodyParser.raw({
    type: 'image/png',
    limit: '1000mb'
  }));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const cors=require("cors");
const { resolveSoa } = require('dns');
const compiler = require('./compiler');
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.post('/uploads', (req, res) =>{

    // let metadata = {
    //     name: data.name,
    //     description: data.description,
    //     image: `${baseUrl}/${uuid}.png`,
    //     attributes: data.attributes
    // }
    console.log('Got a POST request!');
    // res.send({name:'Thanks for submiting'})
    // console.log(res.body); undefined

    if (req.headers['content-type'] === 'image/png'){
        let uuid = crypto.randomUUID(); //создать сложный радомный id для поступающих данных
        //Сохранить фото на сервер в папке под уникальным id
        fs.writeFile(`./uploads/${uuid}.png`, req.body, (err) => {
            if (err) throw err;
            console.log("The image has been uploaded sucessfully! ");
          });
          //Возвращает ответ с id сохраненного файла на сервере
          res.json({'id': `${uuid}`});
          console.log('if statement end')
    }
    else{
        //Сохранение метадаты
        fs.writeFile(`./uploads/${req.body.uploadImage}.json`, JSON.stringify(req.body.nftData), (err) => {
          if (err) throw err;
          console.log("Metadata has been uploaded sucessfully!");
        });
        //Maybe we dont need to save the contract
        // fs.writeFile(`./contracts/${req.body.uploadImage}.sol`, contract, (err)=>{
        //     if(err) throw err;
        //     console.log('Contract saved');
        //   })
          //-------------
          //Место для компиляции кода, abi и bytecode
          const contract = contractSchema(req.body.nftData.name, req.body.nftData.name, req.body.nftData.supply);
          fs.writeFileSync('./ERC721.sol', contract.sourceCode);
          const compilerOutput = cmpl(contract);
        //-------------------
        //Ответ: исходный код,abi и bytecode
        // console.log(compilerOutput)
        console.log('else statement end')

        res.json(compilerOutput);
    }   


    // console.log(req.body);
    console.log('this is id')

});

app.listen(port, () =>console.log(`Listening on port ${port}`));

//Создание рандомного id
const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }