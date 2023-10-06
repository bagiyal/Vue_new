window.axios = require('axios');
let data=async function (id,key,type) {

    return await axios.post('/api/v1/fetchMetaData',{
        'id':id,
        'key':key,
        'type':type,
    })


}

export default data;
