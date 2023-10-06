function initialState() {
    return {
        item: {
            id: null,
            title: null,
            locations: null,
            total_tour_days: null,
            created_by: null,
            created_by_team: null,
        },

        usersAll: [],
        teamsAll: [],
        cityAll: [],
        locations:[],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,

    loading: state => state.loading,
    usersAll: state => state.usersAll,
    teamsAll: state => state.teamsAll,
    cityAll: state => state.cityAll,
    locations: state => state.locations,
    
}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '')
            } else {
                params.set('created_by_id', state.item.created_by.id)
            }
            if (_.isEmpty(state.item.created_by_team)) {
                params.set('created_by_team_id', '')
            } else {
                params.set('created_by_team_id', state.item.created_by_team.id)
            }

            axios.post('/api/v1/tours', params)
                .then(response => {
                    commit('resetState')
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    updateData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();
            params.set('_method', 'PUT')

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    }
                    else if(fieldName=='locations'){
                        params.set(fieldName, JSON.stringify(fieldValue));

                    }
                    else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '')
            } else {
                params.set('created_by_id', state.item.created_by.id)
            }
            if (_.isEmpty(state.item.created_by_team)) {
                params.set('created_by_team_id', '')
            } else {
                params.set('created_by_team_id', state.item.created_by_team.id)
            }

            axios.post('/api/v1/tours/' + state.item.id, params)
                .then(response => {
                    commit('setItem', response.data.data)
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    fetchData({ commit, dispatch }, id) {
        axios.get('/api/v1/tours/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchUsersAll')
    dispatch('fetchTeamsAll')
        dispatch('fetchCityAll')
    },
    fetchCityAll({ commit }) {
    axios.get('/api/v1/cities')
        .then(response => {
            commit('setCityAll', response.data.data)
        })
},

    fetchUsersAll({ commit }) {
        axios.get('/api/v1/users')
            .then(response => {
                commit('setUsersAll', response.data.data)
            })
    },
    fetchTeamsAll({ commit }) {
        axios.get('/api/v1/teams')
            .then(response => {
                commit('setTeamsAll', response.data.data)
            })
    },
    setTitle({ commit }, value) {
        commit('setTitle', value)
    },
    setLocations({ commit }, value) {
        commit('setLocations', value)
    },
    addLocationss({ commit }, value) {
        commit('addLocations', value)
    },


    setTotal_tour_days({ commit }, value) {
        commit('setTotal_tour_days', value)
    },
    setCreated_by({ commit }, value) {
        commit('setCreated_by', value)
    },
    setCreated_by_team({ commit }, value) {
        commit('setCreated_by_team', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {

    setItem(state, item) {
        state.item = item;
        state.item.locations=JSON.parse(item.locations);
    },
    setTitle(state, value) {
        state.item.title = value
    },
    setLocations(state, value) {
        state.item.locations = JSON.stringify(value);
    },
    addLocations(state, value) {
     //   console.log(value);
      state.item.locations.push(value);
    },
    setTotal_tour_days(state, value) {
        state.item.total_tour_days = value
    },
    setCreated_by(state, value) {
        state.item.created_by = value
    },
    setCreated_by_team(state, value) {
        state.item.created_by_team = value
    },
    setUsersAll(state, value) {
        state.usersAll = value
    },
    setTeamsAll(state, value) {
        state.teamsAll = value
    },
    
    setLoading(state, loading) {
        state.loading = loading
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    },
    setCity(state, value) {
        state.item.state = value
    },
    setCityAll(state, value) {
        state.cityAll = value
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
