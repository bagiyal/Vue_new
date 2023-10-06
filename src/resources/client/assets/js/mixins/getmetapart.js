var getmetapart=async function (id,type,key) {


    window.axios = require('axios');

  //  alert("getmetapart")
    if(type=="lead"){

        // axios.post('/api/v1/leads/' + id, params)


        return await axios.get('/api/v1/leads/' + id,{
            headers: {
                'Content-Type': 'application/json'
            }
        })


    }
    if(type=="booking"){

        return await   axios.get('/api/v1/bookings/' + id,{
            headers: {
                'Content-Type': 'application/json'
            }
        })




    }
    if(type=="query"){

        return await      axios.get('/api/v1/queries/' + id,{
            headers: {
                'Content-Type': 'application/json'
            }
        })




    }
    if(type=="group"){

        return await      axios.get('/api/v1/groups/' + id,{
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }
    if(type=="traveller"){

        return await      axios.get('/api/v1/travellers/' + id,{
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }




}


export default getmetapart


