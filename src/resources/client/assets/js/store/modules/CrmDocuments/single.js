function initialState() {
    return {
        item: {
            id: null,
            customer: null,
            name: null,
            description: null,
            file: null,
        },
        crmcustomersAll: [],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    crmcustomersAll: state => state.crmcustomersAll,
    
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

            if (_.isEmpty(state.item.customer)) {
                params.set('customer_id', '')
            } else {
                params.set('customer_id', state.item.customer.id)
            }
            if (state.item.file === null) {
                params.delete('file');
            }

            axios.post('/api/v1/crm-documents', params)
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

            if (_.isEmpty(state.item.customer)) {
                params.set('customer_id', '')
            } else {
                params.set('customer_id', state.item.customer.id)
            }
            if (state.item.file === null) {
                params.delete('file');
            }

            axios.post('/api/v1/crm-documents/' + state.item.id, params)
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
        axios.get('/api/v1/crm-documents/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCrmcustomersAll')
    },
    fetchCrmcustomersAll({ commit }) {
        axios.get('/api/v1/crm-customers')
            .then(response => {
                commit('setCrmcustomersAll', response.data.data)
            })
    },
    setCustomer({ commit }, value) {
        commit('setCustomer', value)
    },
    setName({ commit }, value) {
        commit('setName', value)
    },
    setDescription({ commit }, value) {
        commit('setDescription', value)
    },
    setFile({ commit }, value) {
        commit('setFile', value)
    },
    
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setCustomer(state, value) {
        state.item.customer = value
    },
    setName(state, value) {
        state.item.name = value
    },
    setDescription(state, value) {
        state.item.description = value
    },
    setFile(state, value) {
        state.item.file = value
    },
    setCrmcustomersAll(state, value) {
        state.crmcustomersAll = value
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
