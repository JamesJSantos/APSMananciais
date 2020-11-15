var axios = require("axios");

var dadosCantareira


function PersonList(){
    return axios.get("https://sabesp-api.herokuapp.com/")

}

dadosCantareira = PersonList();

dadosCantareira.then(function(res){
    console.log(res.data[0])

   
});
