function initialState() {
    return {
        all: [],
        relationships: {
            'created_by': 'name',
            'created_by_team': 'name',
        },
        query: {},
        loading: false,
        search:'',
        column:'',
        actualdata:'',
        filter_obj:{
            filter_sector:'',
            queryfilter:'4',
            filter_datefrom:'',
            filter_dateto:'',
            status:false,
            sincelast:'',
            sincelastdays:'',
            relation:'=',
            score:'',
            feel:'',
        },
        dataclone:''
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
}

const actions = {
    fetchData({ commit, state }) {
        commit('setLoading', true)

        axios.get('/api/v1/queries')
            .then(response => {
                commit('setAll', response.data.data)
                commit('setactualdata', response.data.data)

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
        axios.delete('/api/v1/queries/' + id)
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
    },
    setsearch({ commit }, value) {
        commit('setLoading', true)
        commit('setsearch', value)
        commit('setLoading', false)
    }
    ,   setfilter({ commit }, value) {
        commit('setLoading', true)

        commit('setfilter', value)
        commit('setLoading', false)
    }
    ,
    setcolumn({ commit }, value) {
        commit('setcolumn', value)
    }

}

const mutations = {
    setAll(state, items) {

            state.all = items

    },
    setactualdata(state, items) {

        state.actualdata = _.cloneDeep(items);

    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setQuery(state, query) {
        state.query = query
    },

    setfilter(state,val){

        state.dataclone=_.cloneDeep(state.actualdata)

        if(state.filter_obj.filter_sector!=='' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
                return post.tour_name.toLowerCase().includes(state.filter_obj.filter_sector.toLowerCase())
            })
        }
        if(state.filter_obj.queryfilter!=='4' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
                return post.status.toLowerCase().includes(state.filter_obj.queryfilter.toLowerCase())
            })
        }

        // var myDate=state.filter_obj.filter_datefrom.split("-");
        // var newDate=myDate[1]+","+myDate[0]+","+myDate[2];
        // var fromdate =new Date(newDate).getTime()
        var datum = Date.parse(state.filter_obj.filter_datefrom);
        var  fromdate= datum/1000;


        // var myDate1=state.filter_obj.filter_dateto.split("-");
        // var newDate1=myDate1[1]+","+myDate1[0]+","+myDate1[2];
        // var todate =new Date(newDate1).getTime()
        var datum1 = Date.parse(state.filter_obj.filter_dateto);
        var  todate= datum1/1000;

        // alert(fromdate)

        if(state.filter_obj.filter_datefrom!=='' && state.filter_obj.filter_dateto!=='' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {

                var datum3 = Date.parse(post.driver_pickup_date_time);
                var  travdate= datum3/1000;

                if(fromdate <=travdate && travdate<= todate ){

                    // alert("in")
                    return true;
                }
                else {
                    return false;
                }
            })
        }

        if((state.filter_obj.sincelast!=='' || state.filter_obj.sincelastdays!=='') && state.filter_obj.relation!=='' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
var resp;
                post.meta_lastquote_time.forEach(function(e){
// /console.log(e);
                    if(e.meta_key==='lastquote_time'){

                        resp= e.meta_value;
                    }

                })


                if(resp!='' && typeof resp!== "undefined"){

                    let     today = Math.round(+new Date().getTime()/1000);
                    var res = (today) - parseInt(resp);
                    var diff =res;
                    diff /= (60 * 60);
                    var hrss= Math.abs(Math.round(diff));
// console.log(hrss)
//                     console.log("-----")
//                     console.log(parseInt(state.filter_obj.sincelast));


 if(state.filter_obj.sincelast!==''){
     if(state.filter_obj.relation==='>'){

         if(hrss >parseInt(state.filter_obj.sincelast)){

             return true;
         }
         else {
             return false;
         }

     }
     else if(state.filter_obj.relation==='<'){

         if(hrss < parseInt(state.filter_obj.sincelast)){

             return true;
         }
         else {
             return false;
         }
     }
     else if(state.filter_obj.relation==='>='){

         if(hrss >= parseInt(state.filter_obj.sincelast)){

             return true;
         }
         else {
             return false;
         }
     }
     else if(state.filter_obj.relation==='<='){

         if(hrss <= parseInt(state.filter_obj.sincelast)){

             return true;
         }
         else {
             return false;
         }
     }
     else if(state.filter_obj.relation==='='){

         if(hrss === parseInt(state.filter_obj.sincelast)){

             return true;
         }
         else {
             return false;
         }
     }
 }

                    var y=hrss;
                    var x=24;
                    var quotient = Math.floor(y/x); //2 d
                    var remainder = y % x; //3 h


 if(state.filter_obj.sincelastdays!==''){

     if(state.filter_obj.relation==='>'){

         if(quotient >parseInt(state.filter_obj.sincelastdays)){

             return true;
         }
         else {
             return false;
         }

     }
     else if(state.filter_obj.relation==='<'){

         if(quotient < parseInt(state.filter_obj.sincelastdays)){

             return true;
         }
         else {
             return false;
         }
     }
     else if(state.filter_obj.relation==='>='){

         if(quotient >= parseInt(state.filter_obj.sincelastdays)){

             return true;
         }
         else {
             return false;
         }
     }
     else if(state.filter_obj.relation==='<='){

         if(quotient <= parseInt(state.filter_obj.sincelastdays)){

             return true;
         }
         else {
             return false;
         }
     }
     else if(state.filter_obj.relation==='='){

         if(quotient === parseInt(state.filter_obj.sincelastdays)){

             return true;
         }
         else {
             return false;
         }
     }



 }


                }


            })
        }

// console.log(state.filter_obj.feel)
        // console.log(post.query_feel)
        // console.log("feel")
        if(state.filter_obj.feel!=='' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
                // console.log(post.query_feel)
                if(parseInt(post.query_feel) === parseInt(state.filter_obj.feel)){
                    // console.log('in')
                    return true;
                }
                else {
                    return false;
                }

            })
        }
        if(state.filter_obj.score!=='' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
if(post.score_new){

    if(Math.trunc(parseInt(post.score_new)) === parseInt(state.filter_obj.score)){

        return true;
    }
    else {
        return false;
    }


}
else{

    if(Math.trunc(post.score )=== state.filter_obj.score){

        return true;
    }
    else {
        return false;
    }



}


            })
        }

        console.log(state.dataclone);

        state.all=_.cloneDeep(state.dataclone)

    },
    setsearch(state, val) {

        state.search = val
let arr=[];
        if(state.filter_obj.status){

            if(state.search!==''){


                state.dataclone.forEach(post => {
                    let f="empty";
                    state.column.forEach( (dataObj) => {

                        if (f === "empty" && post[dataObj]!==null) {
                            if(post[dataObj].toLowerCase().includes(state.search.toLowerCase())){

                                f="found";
                                arr.push(post);

                            }
                        }

                    });

                });

                console.log(arr);

                state.all=_.cloneDeep(arr);

            }
            else {
                state.all=_.cloneDeep(state.actualdata)

            }
        }
        else {
            if(state.search!==''){


                state.actualdata.forEach(post => {
                    let f="empty";
                    state.column.forEach( (dataObj) => {

                        if (f === "empty" && post[dataObj]!==null) {
                            if(post[dataObj].toLowerCase().includes(state.search.toLowerCase())){

                                f="found";
                                arr.push(post);

                            }
                        }

                    });

                });

                // console.log(arr);

                state.all=_.cloneDeep(arr)

            }
            else {
                state.all=_.cloneDeep(state.actualdata)

            }

        }


    },
    setcolumn(state, val) {
        state.column = val
    },


    resetState(state) {
        state = Object.assign(state, initialState())
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
