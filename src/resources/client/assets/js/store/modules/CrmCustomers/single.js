function initialState() {
    return {
        item: {
            id: null,
            first_name: null,
            last_name: null,
            crm_status: null,
            email: null,
            phone: null,
            address: null,
            skype: null,
            website: null,
            description: null,
        },
        crmstatusesAll: [],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    crmstatusesAll: state => state.crmstatusesAll,
    
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

            if (_.isEmpty(state.item.crm_status)) {
                params.set('crm_status_id', '')
            } else {
                params.set('crm_status_id', state.item.crm_status.id)
            }

            axios.post('/api/v1/crm-customers', params)
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
                    } else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.crm_status)) {
                params.set('crm_status_id', '')
            } else {
                params.set('crm_status_id', state.item.crm_status.id)
            }

            axios.post('/api/v1/crm-customers/' + state.item.id, params)
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
        axios.get('/api/v1/crm-customers/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCrmstatusesAll')
    },
    fetchCrmstatusesAll({ commit }) {
        axios.get('/api/v1/crm-statuses')
            .then(response => {
                commit('setCrmstatusesAll', response.data.data)
            })
    },
    setFirst_name({ commit }, value) {
        commit('setFirst_name', value)
    },
    setLast_name({ commit }, value) {
        commit('setLast_name', value)
    },
    setCrm_status({ commit }, value) {
        commit('setCrm_status', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setAddress({ commit }, value) {
        commit('setAddress', value)
    },
    setSkype({ commit }, value) {
        commit('setSkype', value)
    },
    setWebsite({ commit }, value) {
        commit('setWebsite', value)
    },
    setDescription({ commit }, value) {
        commit('setDescription', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setFirst_name(state, value) {
        state.item.first_name = value
    },
    setLast_name(state, value) {
        state.item.last_name = value
    },
    setCrm_status(state, value) {
        state.item.crm_status = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setAddress(state, value) {
        state.item.address = value
    },
    setSkype(state, value) {
        state.item.skype = value
    },
    setWebsite(state, value) {
        state.item.website = value
    },
    setDescription(state, value) {
        state.item.description = value
    },
    setCrmstatusesAll(state, value) {
        state.crmstatusesAll = value
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
