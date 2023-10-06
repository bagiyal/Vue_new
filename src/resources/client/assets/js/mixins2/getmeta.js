import getmetapart from "./getmetapart";

var getmeta=async function (id,type,key) {

let resp='';
    // window.axios = require('axios');

   // alert("getmeta")

   await getmetapart(id,type,key)
        .then(response => {
         //   alert("response- in clone");
            console.log("response- in clone");
            console.log(response.data.data.get_meta);
            // console.log(response.data.data.meta_data);
            response.data.data.get_meta.forEach(function(e){

                if(e.meta_key===key){
                    console.log("match found");
                    console.log( e.meta_value);
                    resp=    e.meta_value;
                }

            })


        })


return resp;

}


export default getmeta


