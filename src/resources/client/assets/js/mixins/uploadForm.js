var uploadfile=async function (col_name,id,file,booking_id,len) {

    window.axios = require('axios');
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        }
    }
    let d;
    let params = new FormData();



    // For Group registration mail
    if(col_name==='groupcsv_reg'){

        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );

        // return  id+"---"+booking_id;
        return    axios.post('/api/v1/uploadcsv_reg', params,config)
    }
//tour support
    else if(col_name==='groupsupport'){

        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );


        return    axios.post('/api/v1/uploadsupport', params,config)
    }

    // Exhibitors upload
    else if(col_name==='groupexhibitors'){

        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );
        params.set("len",len );

        return    axios.post('/api/v1/uploadexhibitors', params,config)
    }

    // Direct confirmation
    else if(col_name==='groupcsv'){

        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );

        return    axios.post('/api/v1/uploadcsv', params,config)
    }
    else if(col_name==='uploadcsv_pre_creating_group'){

        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );

        return    axios.post('/api/v1/uploadcsv_pre_creating_group', params,config)
    }

    else if(col_name==='form_update'){

        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );

        return    axios.post('/api/v1/uploadformupdate', params,config)
    }

    else {
        var col=col_name?col_name:"doc";
        params.append("file",file);
        params.set("ref_id", booking_id);
        params.set("collection_name", col);
        params.set("ref_key",id );

        return    axios.post('/api/v1/upload', params,config)
    }

}

export default uploadfile


