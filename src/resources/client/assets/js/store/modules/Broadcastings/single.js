function initialState() {
    return {
        item: {
            id: null,
            schedule_date: null,
            agency_id: null,
            agent_id: null,
            traveller_id: null,
            status: null,
            message: null,
            type: null,
            category: null,
            time_zone: null,
            created_by: null,
            created_by_team: null,
        },
        usersAll: [],
        teamsAll: [],

        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    usersAll: state => state.usersAll,
    teamsAll: state => state.teamsAll,

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

            axios.post('/api/v1/broadcastings', params)
                .then(response => {

                    if(response.data.data.category!=='Notification'){
                        let params = new FormData();
                        params.set('agent_id',response.data.data.agent_id);
                        params.set('id',response.data.data.id);
                        axios.post('/api/webservices/broadcast' , params);
                    }


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

            axios.post('/api/v1/broadcastings/' + state.item.id, params)
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
        axios.get('/api/v1/broadcastings/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchUsersAll')
    dispatch('fetchTeamsAll')
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
    setSchedule_date({ commit }, value) {
        commit('setSchedule_date', value)
    },
    setAgency_id({ commit }, value) {
        commit('setAgency_id', value)
    },
    setAgent_id({ commit }, value) {
        commit('setAgent_id', value)
    },
    setTraveller_id({ commit }, value) {
        commit('setTraveller_id', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    setMessage({ commit }, value) {
        commit('setMessage', value)
    },
    setType({ commit }, value) {
        commit('setType', value)
    },
    setCategory({ commit }, value) {
        commit('setCategory', value)
    },
    setTime_zone({ commit }, value) {
        commit('setTime_zone', value)
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
        state.item = item
    },
    setSchedule_date(state, value) {
        state.item.schedule_date = value
    },
    setAgency_id(state, value) {
        state.item.agency_id = value
    },
    setAgent_id(state, value) {
        state.item.agent_id = value
    },
    setTraveller_id(state, value) {
        state.item.traveller_id = value
    },
    setStatus(state, value) {
        state.item.status = value
    },
    setMessage(state, value) {
        state.item.message = value
    },
    setType(state, value) {
        state.item.type = value
    },
    setCategory(state, value) {
        state.item.category = value
    },
    setTime_zone(state, value) {
        state.item.time_zone = value
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
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
