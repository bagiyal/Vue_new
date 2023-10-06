var addupdatemeta=async function (id,type,key,value) {


    window.axios = require('axios');


    let params = new FormData();
    params.set('_method', 'PUT');

if(typeof (value)=="string"){

}
else if(typeof (value)=="object"){

    value=JSON.stringify(value);
}

    let keyname={};
    keyname[key]=value;

    params.set('meta', JSON.stringify(keyname));
    if(type=="lead"){
console.log(params)
        axios.post('/api/v1/leads/' + id, params)
            // .then(response => {
            //
            // })
            // .catch(error => {
            //     message = error.response.data.message || error.message
            //
            //     console.log(message)
            // })
    }
    if(type=="booking"){
        axios.post('/api/v1/bookings/' + id, params)
    }
    if(type=="query"){
        axios.post('/api/v1/queries/' + id, params)
    }
    if(type=="group"){
        axios.post('/api/v1/groups/' + id, params)
    }




}


export default addupdatemeta


