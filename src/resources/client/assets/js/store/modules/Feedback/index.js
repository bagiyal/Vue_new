function initialState() {
    return {
        all: [],
        relationships: {
            'created_by': 'name',
            'created_by_team': 'name',
        },
        query: {},
        loading: false,
        actualdata:[],
        column: [],
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
}

const actions = {
    fetchData({ commit, state }) {
        commit('setLoading', true)

        var user_id=document.querySelector("meta[name='user-id']").getAttribute('content');
        var role=document.querySelector("meta[name='user-role']").getAttribute('content');
        // alert(role);
        if(role=='agency'){
            this.user_role='agency';
            axios.get('api/webservices/feedback_db_questions?role=agency&id='+user_id)
                .then(response => {
                    commit('setAll', response.data)
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
        }
        else if(role=='lms_agent'){
            this.user_role='agent';
            axios.get('api/webservices/feedback_db_questions?role=agent&id='+user_id)
                .then(response => {
                    commit('setAll', response.data)
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
        }

    },
    destroyData({ commit, state }, id) {
        axios.get('api/webservices/delete_question?id='+id)
            .then(response => {
                commit('setAll', state.all.filter((item) => {
                    return item.id != id
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
    setsearch({ commit }, value) {
        commit('setsearch', value)
    },
    resetState({ commit }) {
        commit('resetState')
    },
    setcolumn({ commit }, value) {
        commit('setcolumn', value)
    }
}
// {"question":"What is your age?","type":"Text","options":[]}
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
    setcolumn(state, val) {
        state.column = val
    },
    setactualdata(state, items) {

        state.actualdata = _.cloneDeep(items);

    },
    setsearch(state, val) {
        // console.log(state);
        // console.log(val);
        state.search = val
        let arr = [];
        if (state.search !== '') {
            state.actualdata =_.cloneDeep( state.all)
            // console.log(state.actualdata);
            state.actualdata.forEach(post => {
                let f = "empty";
                let str = '';
                // console.log(post);


                    if (f === "empty" ) {

                        if (post.questions_html.toLowerCase().includes(state.search.toLowerCase())) {

                            f = "found";
                            arr.push(post);

                        }


                    }




            });

            console.log(arr);

            state.all = _.cloneDeep(arr);
        }
        else {

            state.all =_.cloneDeep( state.actualdata)
        }

    },

}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
