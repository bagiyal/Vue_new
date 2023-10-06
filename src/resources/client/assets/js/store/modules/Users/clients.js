function initialState() {
    return {
        all: [],
        relationships: {
            'role': 'title',
            'team': 'name',
            'city': 'title',
            'state': 'title',
            'country': 'title',
        },
        query: {},
        loading: false,
        actualdata:[],
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

        axios.get('/api/v1/clients')
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
        axios.delete('/api/v1/users/' + id)
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
    resetState({ commit }) {
        commit('resetState')
    },
    setsearch({ commit }, value) {
        commit('setsearch', value)
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


                if (f === "empty" && post.phone!=null) {

                    if (post.name.toLowerCase().includes(state.search.toLowerCase()) ||
                        post.email.toLowerCase().includes(state.search.toLowerCase()) ||
                        post.phone.toLowerCase().includes(state.search.toLowerCase())

                    ) {

                        f = "found";
                        arr.push(post);

                    }


                }
                else if (f === "empty" ) {

                    if (post.name.toLowerCase().includes(state.search.toLowerCase()) ||
                        post.email.toLowerCase().includes(state.search.toLowerCase())


                    ) {

                        f = "found";
                        arr.push(post);

                    }


                }




            });

            // console.log(arr);

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
