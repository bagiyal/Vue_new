import moment from 'moment-timezone';
const Swal = require('sweetalert2');
function initialState() {
    return {
        added_partner_array:[],
        all: [],
        selected_all:[],
        relationships: {
            'created_by': 'name',
            'created_by_team': 'name',
        },
        query: {},
        loading: false,
        search:'',
        column:'',
        actualdata:'',
        actualdata2:'',
        filter_obj:{
            filter_order:'0',
            filter_sector:'',
            hub_filter:[],
            date_filter:null,
            queryfilter:'0',
            filter_datefrom:null,
            filter_dateto:null,
            status:false,

        },
        dataclone:'',
        all_members_data:[],
        pagination_buttons:0,
        current_page:1,
        page_size:10,
        hub_filtered:[],
    }
}

const getters = {
    data: state => {
        let rows = state.all

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order)
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit)
    },
    total:         state => state.all.length,
    loading:       state => state.loading,
    relationships: state => state.relationships,
    column: state => state.column,
    search: state => state.search,
    filter_obj: state => state.filter_obj,
    all: state => state.all,
    added_partner_array: state => state.added_partner_array,
    selected_all: state => state.selected_all,
    all_members_data: state => state.all_members_data,
    pagination_buttons: state => state.pagination_buttons,
    current_page: state => state.current_page,
    page_size: state => state.page_size,
    actualdata: state => state.actualdata,
    filteredHub: state => state.hub_filtered
}

const actions = {
    fetchData({ commit, dispatch,state }, id) {
        commit('setLoading', true)
        axios.get('/api/v1/groupsmember/' + id)
            .then(response => {
                commit('setactualdata', response.data.data)
                commit('setactualdata2', response.data.data)
                commit('sethub', response.data.data)
                commit('setall_members_data', response.data.data.slice(0, 10))
                if(response.data.data.length>state.page_size){
                    commit('setall_members_data', response.data.data.slice(0, state.page_size))
                }
                else{
                    commit('setall_members_data', response.data.data.slice(0, response.data.data.length))
                }



                commit('setpagination_buttons', Math.ceil((state.actualdata.length/state.page_size)))



                // commit('setAll', response.data.data)







            })
            .catch(error => {
                message = error.response.data.message || error.message
                commit('setError', message)
                console.log(message)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },





    destroyData({ commit, state }, id) {
        axios.delete('/api/v1/groups/' + id)
            .then(response => {
                commit('setAll', state.all.filter((item) => {
                    return item.id != id
                }))
                commit('setactualdata', state.actualdata.filter((item1) => {
                    return item1.id != id
                }))
            })
            .catch(error => {
                message = error.response.data.message || error.message
                commit('setError', message)
                console.log(message)
            })
    },
    setQuery({ commit }, value) {
        commit('setQuery', purify(value))
    },
    resetState({ commit }) {
        commit('resetState')
    }
    ,
    setsearch({ commit ,state}, value) {

        commit('setsearch', value)
        commit('setcurrent_page', 1)
        let columns_search=['tour_name','booking_id','driver_pick_up_time','full_name','phone','pass_nos'];

        let arr = [];
        if (state.search !== '') {

            // console.log(state.actualdata),
            state.actualdata2.forEach(post => {
                let f = "empty";
                columns_search.forEach((dataObj) => {
                    // console.log(dataObj);
                    // console.log(dataObj)
                    // console.log(post[dataObj])

                    if (f === "empty" && post[dataObj]!==null) {
                        if (post[dataObj].toLowerCase().includes(state.search.toLowerCase())) {

                            f = "found";
                            arr.push(post);

                        }
                    }

                });

            });

            // console.log(arr);

            state.all_members_data = _.cloneDeep(arr);
            state.actualdata = _.cloneDeep(arr);

        }
        else {
            state.all_members_data =_.cloneDeep( state.actualdata2)
            state.actualdata =_.cloneDeep( state.actualdata2)

        }

        // if(state.actualdata.length>0){
            if(state.actualdata.length>state.page_size){
                commit('setall_members_data', state.actualdata.slice(0, state.page_size))
            }
            else{
                commit('setall_members_data', state.actualdata.slice(0, state.actualdata.length))
            }
            if(state.actualdata.length>0){
                let val_size=state.actualdata.length/state.page_size;
                let split_val=0;
                if(val_size.toString().split(".").length>1){

                    split_val=Math.ceil(val_size);

                }
                else{
                    split_val=val_size;

                }


                commit('setpagination_buttons', Math.ceil((state.actualdata.length/state.page_size)))

            }
            else{
                commit('setpagination_buttons', 0)
            }

        // }


    },
    setpaginate({ commit,state }, value) {
        commit('setpaginate', value)

        commit('setall_members_data', state.actualdata.slice((state.current_page*state.page_size)-state.page_size, state.current_page*state.page_size))
    },
    setall_members_data({ commit }, value) {

        commit('setall_members_data', value)
    },
    setpagination_buttons({ commit }, value) {

        commit('setpagination_buttons', value)
    },
    setcurrent_page({ commit }, value) {

        commit('setcurrent_page', value)
    },
    setpage_size({ commit,state }, value) {

        commit('setpage_size', value)
        commit('setcurrent_page', 1)
        if(state.actualdata.length>value){
            commit('setall_members_data', state.actualdata.slice(0, value))
        }
        else{
            commit('setall_members_data', state.actualdata.slice(0, state.actualdata.length))
        }
        let val_size=state.actualdata.length/value;
        let split_val=0;
        if(val_size.toString().split(".").length>1){

                     split_val=Math.ceil(val_size);

        }
        else{
            split_val=val_size;

        }


        commit('setpagination_buttons', Math.ceil((state.actualdata.length/state.page_size)))



    },
    setcolumn({ commit }, value) {
        commit('setcolumn', value)
    },
    setfilter({ commit,state }, value) {
        commit('setLoading', true)

        state.dataclone=_.cloneDeep(state.actualdata)

        // 👉️ filtering data hub wise
        if(state.filter_obj.hub_filter.length>0){
            // console.log( state.dataclone);
            let mem_filtered=[];
            state.filter_obj.hub_filter.forEach((hubs)=>{
              state.dataclone.forEach((post) => {
                    if(post.airport_hub.toLowerCase()==hubs.hub.toLowerCase()){
                        mem_filtered.push(post);
                    }



                })
            })
            state.dataclone=_.cloneDeep(mem_filtered);

        }

        // 👉️ filtering data last update date wise
        if(state.filter_obj.filter_datefrom!=null && state.filter_obj.filter_dateto!=null){


            const todateStr = moment(state.filter_obj.filter_dateto, 'DD-MM-YYYY HH:mm').toDate();
            const to_unixTimestamp = Math.floor(todateStr.getTime() / 1000);

            const fromdateStr = moment(state.filter_obj.filter_datefrom, 'DD-MM-YYYY HH:mm').toDate();
            const from_unixTimestamp = Math.floor(fromdateStr.getTime() / 1000);




            state.dataclone=state.dataclone.filter(post => {
            const unix_timestamp = moment(post.last_update_str, "DD-MM-YYYY HH:mm").unix();
                if(unix_timestamp!=''){


                    if(post.form_status!='3' && post.form_status!='0'){
                        const date = moment.unix(post.last_update);

                        // If you want to convert it back to a Unix timestamp, you can do this:
                        const newUnixTimestamp = date.unix();

                        if (unix_timestamp >= from_unixTimestamp && unix_timestamp <= to_unixTimestamp) {

                            return post;
                        }

                    }
                }
            })


        }
        else if(state.filter_obj.filter_datefrom!=null && state.filter_obj.filter_dateto==null){
            Swal.fire({
                type: 'error',
                icon: 'error',
                title: 'Please fill To Date Field!',
                showCloseButton:true,
                showConfirmButton: true,
                timer: 3500
            })
            commit('setLoading', false)

            return false;
        }
        else if(state.filter_obj.filter_datefrom==null && state.filter_obj.filter_dateto!=null){
            Swal.fire({
                type: 'error',
                icon: 'error',
                title: 'Please fill From Date Field!',
                showCloseButton:true,
                showConfirmButton: true,
                timer: 3500
            })
            commit('setLoading', false)

            return false;
        }

        // 👉️ sorting name and date wise
        if(state.filter_obj.queryfilter!=0){
            if(state.filter_obj.filter_order!=0){

                if(state.filter_obj.queryfilter==1){
                    state.dataclone.sort((a, b) => {
                        let fa = a.full_name.toLowerCase(),
                            fb = b.full_name.toLowerCase();
                        if(state.filter_obj.filter_order==1){
                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                        }
                        else{
                            if (fa > fb) {
                                return -1;
                            }
                            if (fa < fb) {
                                return 1;
                            }
                        }

                        return 0;
                    });
                }
                if(state.filter_obj.queryfilter==2){
                    state.dataclone.sort((a, b) => {
                        let fa = a.booking_id,
                            fb = b.booking_id;
                        if(state.filter_obj.filter_order==1){
                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                        }
                        else{
                            if (fa > fb) {
                                return -1;
                            }
                            if (fa < fb) {
                                return 1;
                            }
                        }

                        return 0;
                    });
                }
                if(state.filter_obj.queryfilter==3){
                    state.dataclone.sort((a, b) => {
                        let fa = a.last_update_str,
                            fb = b.last_update_str;
                        if(state.filter_obj.filter_order==1){
                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                        }
                        else{

                            if (fa > fb) {

                                return -1;

                            }
                            if (fa < fb) {

                                return 1;

                            }
                        }

                        return 0;
                    });
                }
                if(state.filter_obj.queryfilter==4){
                    state.dataclone.sort((a, b) => {
                        let fa = a.uploadedDocs,
                            fb = b.uploadedDocs;
                        if(state.filter_obj.filter_order==1){
                            if (fa < fb) {
                                return -1;
                            }
                            if (fa > fb) {
                                return 1;
                            }
                        }
                        else{
                            if (fa > fb) {
                                return -1;
                            }
                            if (fa < fb) {
                                return 1;
                            }
                        }

                        return 0;
                    });
                }


            }
            else{
                Swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'Please Choose Sort Type !',
                    showCloseButton:true,
                    showConfirmButton: true,
                    timer: 3500
                })
                commit('setLoading', false)

                return false;
            }
        }



        if(state.dataclone.length==0){
            Swal.fire({
                type: 'error',
                icon: 'error',
                title: 'No Data Available!',
                showCloseButton:true,
                showConfirmButton: true,
                timer: 3500
            })
            commit('setLoading', false)

            return false;
        }


        commit('setall_members_data', state.dataclone.slice(0, state.page_size))
        state.actualdata =_.cloneDeep(state.dataclone)



        if(state.actualdata.length>0){
            let val_size=state.actualdata.length/state.page_size;


            let split_val=0;
            if(val_size.toString().split(".").length>1){
                 // split_val=val_size.toString().split(".")[1][0];
                 split_val=Math.ceil(val_size);

            }
            else{
                 split_val=val_size;

            }


            commit('setpagination_buttons', Math.ceil((state.actualdata.length/state.page_size)))


        }
        else{
            commit('setpagination_buttons', 0)
        }

        commit('setLoading', false)
    }
}

const mutations = {
    setadded_partner_array(state,items){
      state.added_partner_array=items
    },
    setAll(state, items) {
        state.all = items

          //  state.all.meta_rooming = JSON.parse(state.all.meta_rooming)
         for(let i=0; i<state.all.length; i++){

         //   console.log("****");
             state.all[i].meta_family=JSON.parse(state.all[i].meta_family)

             state.all[i].book[0].tour_location=JSON.parse(state.all[i].book[0].tour_location)
             if(state.all[i].meta_rooming){
                 // console.log( state.all[i].meta_rooming);

                let room_string='Family: '
                 for(let t=0; t<state.all[i].meta_family.length; t++){
                     room_string=room_string+state.all[i].meta_family[t].first_name + ", "
                 }


                 state.all[i].meta_rooming= JSON.parse(state.all[i].meta_rooming)
                 if(_.isEmpty(state.all[i].meta_rooming.rooms) && state.all[i].meta_family.length>0 ){
                     state.all[i].meta_rooming.rooms=room_string
                 }

                 for(let j=0; j<state.all.length; j++){
                    // console.log("-------#");

                     var flag=1;
                     for (let k =0 ; k<state.all[i].meta_rooming.drop.length; k++ ){

                         if(state.all[i].meta_rooming.drop[k].email==state.all[j].email ){
                             flag=0;
                         }

                     }
                  //   console.log("-------&");
                    if(i!==j && flag){

                        state.all[i].meta_rooming.drop.push({"name":state.all[j].full_name,"email":state.all[j].email,"status":true});

                    }

                 }
//console.log("-------o");
             }
             else{
                 state.all[i].meta_rooming=[]
             }
            // console.log("-------$$"+state.all[i].meta_rooming.with_me.length);
             for (let p =0 ; p<state.all[i].meta_rooming.with_me.length; p++ ){

              //   console.log("-------$$");

                 state.added_partner_array.push(state.all[i].meta_rooming.with_me[p].email)

             }
         }

    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setQuery(state, query) {
        state.query = query
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    },
    setpaginate(state,val){
        console.log('val',val);
        state.current_page = val
    },
    setsearch(state, val) {
        state.search = val

    },
    setcolumn(state, val) {
        state.column = val
    },
    setall_members_data(state, val) {
        state.all_members_data = val
    },
    setpagination_buttons(state, val) {
        state.pagination_buttons = val
    },
    setcurrent_page(state, val) {
        state.current_page = val
    },
    setpage_size(state, val) {
        state.page_size = val

    },
    setactualdata(state, items) {

        state.actualdata = _.cloneDeep(items);

    },
    setactualdata2(state, items) {

        state.actualdata2 = _.cloneDeep(items);

    },
    sethub(state, val) {
        const uniqueHubs = Array.from(new Set(val.map(item => item.airport_hub)));

        state.hub_filtered = uniqueHubs.map(hub => ({ hub }));
    },
    // sethub(state, val) {
    //
    //     for(var j=0;j<val.length;j++){
    //         state.hub_filtered.push(val[j].airport_hub);
    //     }
    //
    //     state.hub_filtered = [ ...new Set(state.hub_filtered) ]
    //     var return_arr=[];
    //     for(var k=0;k<state.hub_filtered.length;k++){
    //
    //         return_arr.push({
    //             'hub' : state.hub_filtered[k]
    //         });
    //     }
    //     state.hub_filtered=_.cloneDeep(return_arr);
    //
    // },

}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
