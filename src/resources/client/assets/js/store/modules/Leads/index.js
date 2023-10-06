function initialState() {
    return {
        all: [],
        relationships: {
            'created_by': 'name',
            'created_by_team': 'name',
        },
        query: {},
        loading: false,
        filter:0,
        search:'',
        column:'',
        actualdata:'',
        filter_obj:{
            filter_sector:'',
            queryfilter:'4',
            filter_datefrom:'',
            filter_dateto:'',
            status:false
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

if(state.filter==0){

}
else if(state.filter==1){
    rows = rows.filter(function (el) {
        return el.lead_status ==1 ;
    });

        }
else if(state.filter==2){
    rows = rows.filter(function (el) {
        return el.lead_status ==2 ;
    });

}
else if(state.filter==3){
    rows = rows.filter(function (el) {
        return el.lead_status ==3 ;
    });

}




        return rows.slice(state.query.offset, state.query.offset + state.query.limit)
    },
    total:         state => state.all.length,
    loading:       state => state.loading,
    relationships: state => state.relationships,
    filter: state => state.filter,
    column: state => state.column,
    search: state => state.search,
    filter_obj: state => state.filter_obj,


}

const actions = {
    fetchData({ commit, state }) {
        commit('setLoading', true)

        axios.get('/api/v1/leads')
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
        axios.delete('/api/v1/leads/' + id)
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
    setFilter({ commit }, value) {
        commit('setFilter', (value))
    },
    resetState({ commit }) {
        commit('resetState')
    }
    ,
    setsearch({ commit }, value) {
        commit('setsearch', value)
    }
    ,
    setfilter({ commit }, value) {
        commit('setfilter', value)
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

    setFilter(state, query) {
        state.filter = query
    },

    resetState(state) {
        state = Object.assign(state, initialState())
    },
    setfilter(state,val){

        state.dataclone=_.cloneDeep(state.actualdata)

        if(state.filter_obj.filter_sector!=='' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
                return post.package_type.toLowerCase().includes(state.filter_obj.filter_sector.toLowerCase())
            })
        }
        if(state.filter_obj.queryfilter!=='4' && state.dataclone.length>0){
            state.dataclone= state.dataclone.filter(post => {
                return post.lead_status.toLowerCase().includes(state.filter_obj.queryfilter.toLowerCase())
            })
        }


        var datum = Date.parse(state.filter_obj.filter_datefrom);
        console.log(state.filter_obj.filter_datefrom)
        var  fromdate= datum/1000;



        var datum1 = Date.parse(state.filter_obj.filter_dateto);
        console.log(state.filter_obj.filter_dateto)
        var  todate= datum1/1000;



        if(state.filter_obj.filter_datefrom!=='' && state.filter_obj.filter_dateto!=='' && state.dataclone.length>0){

            state.dataclone= state.dataclone.filter(post => {

                var datum3 = Date.parse(post.date);

                var  travdate= datum3/1000;


                  if(fromdate <=travdate && travdate<= todate ){


                      return true;
                }
        else {
            return false;
                  }
            })


        }


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

              //  console.log(arr);

                state.all=_.cloneDeep(arr);

            }
            else {
                state.all=_.cloneDeep(state.dataclone)

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

              //  console.log(arr);

                state.all=_.cloneDeep(arr);

            }
            else {
                state.all=_.cloneDeep(state.actualdata)

            }

        }


    },
    setcolumn(state, val) {
        state.column = val
    },
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
