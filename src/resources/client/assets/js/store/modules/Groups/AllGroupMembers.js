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
        filter_str:'All',
        filter_str2:'All',
        column:'',
        actualdata:'',
        filter_obj:{
            filter_sector:'',
            queryfilter:'4',
            filter_datefrom:'',
            filter_dateto:'',
            status:false,

        },
        dataclone:'',
        all_members_data:[],
        dealerships:[],
        dealerships_filtered:[],
        hub:[],
        hub_filtered:[],
        pagedata:{},
        page_num:1,
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
    filter_str: state => state.filter_str,
    filter_str2: state => state.filter_str2,
    // all: state => state.all,
    filter_obj: state => state.filter_obj,
    all_members_data: state => state.all_members_data,
    dealerships_filtered: state => state.dealerships_filtered,
    hub_filtered: state => state.hub_filtered,
    dealerships: state => state.dealerships,
    hub: state => state.hub,
    pagedata:state => state.pagedata,
    page_num:state => state.page_num,
}

const actions = {
    fetchData({ commit, dispatch,state }, id) {
        commit('setLoading', true)
        axios.get('/api/v1/groupsmember2?id=' + id +'&page='+state.page_num)
            .then(response => {

                commit('setAll', response.data.data)
                commit('setactualdata', response.data.data)
                commit('setall_members_data', response.data.data)
                commit('setall_members_data', response.data.data)
                commit('setdealerships', response.data.data)
                commit('sethub', response.data.data)
                commit('setpagedata', response.data)


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
    },
    setpagedata({ commit }, value) {
        commit('setpagedata', value)
    },
    setpage_num({ commit }, value) {
        commit('setpage_num', value)
    },
    setsearch({ commit }, value) {
        commit('setsearch', value)
    },
    setreverse({ commit }, value) {
        commit('setreverse', value)
    },
    setfilter_str({ commit }, value) {
        commit('setfilter_str', value)
    },
    setfilter_str2({ commit }, value) {
        commit('setfilter_str2', value)
    },
    setfilter({ commit }, value) {
        commit('setfilter', value)
    },
    sethubfilter({ commit }, value) {
        commit('sethubfilter', value)
    },
    setcolumn({ commit }, value) {
        commit('setcolumn', value)
    },
    setall_members_data({ commit }, value) {
        commit('setall_members_data', value)
    },
    setdealerships_filtered({ commit }, value) {
        commit('setdealerships_filtered', value)
    },
    sethub_filtered({ commit }, value) {
        commit('sethub_filtered', value)
    },

    setdealerships({ commit }, value) {
        commit('setdealerships', value)
    },
    sethub({ commit }, value) {
        commit('sethub', value)
    },



}

const mutations = {
    setAll(state, items) {
        state.all = items
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
    setpagedata(state, items) {
        state.pagedata = items
    },
    setpage_num(state, items) {
        state.page_num = items
    },
    setsearch(state, val) {
        state.search = val
        let arr = [];

        if(state.filter_str!='All' || state.filter_str2!='All'){
            if (state.search !== ''){
                state.all.forEach(post => {
                    let f = "empty";
                    state.column.forEach((dataObj) => {
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
                state.all = _.cloneDeep(arr);
            }
            else{


                // console.log(state.filter_str2);
                // console.log(state.filter_str);
                // console.log(state.actualdata);
                state.actualdata.forEach(post => {
                    if(state.filter_str!='All'){
                    if(post.dealership==state.filter_str){
                        arr.push(post);
                    }
                    }
                    if(state.filter_str2!='All'){
                        if(post.airport_hub==state.filter_str2){
                            arr.push(post);
                        }
                    }


                })
                state.all = _.cloneDeep(arr);
            }


        }
        else{
            if(state.filter_obj.status){

                if (state.search !== '') {

                    // console.log(state.actualdata),
                    state.dataclone.forEach(post => {
                        let f = "empty";
                        state.column.forEach((dataObj) => {
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

                    state.all = _.cloneDeep(arr);

                } else {
                    state.all =_.cloneDeep( state.actualdata)

                }

            }
            else {

                if (state.search !== '') {

                    // console.log(state.actualdata),
                    state.actualdata.forEach(post => {
                        let f = "empty";
                        state.column.forEach((dataObj) => {
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

                    console.log(arr);

                    state.all = _.cloneDeep(arr);

                } else {
                    state.all =_.cloneDeep( state.actualdata)

                }
            }
        }




    },
    setreverse(state,val){
        console.log(state.all);
        state.all.shift();
        console.log(state.all);
        state.all.shift();

    },
    setfilter(state, val){
        state.filter_str = val
        let arr = [];
        if(val!='' && val!='All'){
            state.actualdata.forEach(post => {
                if(post.dealership==val){
                    arr.push(post);
                }

            })
            state.all = _.cloneDeep(arr);

        }
        else if(val!='' && val=='All'){
            state.all =_.cloneDeep( state.actualdata)
        }
        else{

        }
    },
    sethubfilter(state, val){
        state.filter_str2 = val

        let arr = [];
        if(val!='' && val!='All'){

            state.actualdata.forEach(post => {
                console.log(post);
                if(post.airport_hub==val){
                    arr.push(post);
                }

            })
            state.all = _.cloneDeep(arr);

        }
        else if(val!='' && val=='All'){
            state.all =_.cloneDeep( state.actualdata)
        }
        else{

        }
    },
    setall_members_data(state, val) {
        state.all_members_data = val
    },
    setdealerships_filtered(state, val) {
        state.dealerships_filtered = val
    },
    sethub_filtered(state, val) {
        state.hub_filtered = val
    },
    setdealerships(state, val) {
        state.dealerships = val;
        const uniqueDealerships = new Set();
        state.dealerships.forEach((item) => {
          uniqueDealerships.add(item.dealership);
        });
        uniqueDealerships.add("All");
      
        state.dealerships_filtered = Array.from(uniqueDealerships).map((item) => {
          return { dealer: item };
        });      
      },      
      sethub(state, val) {
    const uniqueHubs = [...new Set(val.map(item => item.airport_hub))];
    state.hub_filtered = uniqueHubs.map(hub => ({ hub }));
    },

    //   sethub(state, val) {
    //     state.hub=val;
    //     const uniqueSetHub = new Set();
    //     state.hub.forEach((item) => {
    //         uniqueSetHub.add(item.airport_hub);
    //         });
    //
    //     uniqueSetHub.add("All");
    //     state.hub_filtered = Array.from(uniqueSetHub).map((item) =>{
    //         return { hub : item};
    //     })
    // },
    // sethub(state, val) {
    //     state.hub=val;
    //     for(var j=0;j<state.hub.length;j++){
    //         state.hub_filtered.push(state.hub[j].airport_hub);
    //     }
    //     state.hub_filtered.push("All");
    //     state.hub_filtered = [ ...new Set(state.hub_filtered) ]
    //     var return_arr=[];
    //     for(var k=0;k<state.hub_filtered.length;k++){
    //
    //         return_arr.push({
    //             'hub' : state.hub_filtered[k]
    //         });
    //     }
    //     state.hub_filtered=_.cloneDeep(return_arr);
    //     console.log(state.hub_filtered);
    //
    // },
    setcolumn(state, val) {
        state.column = val
    },
    setactualdata(state, items) {

        state.actualdata = _.cloneDeep(items);

    },

}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
