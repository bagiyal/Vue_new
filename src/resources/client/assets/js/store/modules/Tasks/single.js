function initialState() {
    return {
        item: {
            id: null,
            agency_id: null,
            agent_id: null,
            agent_name: null,
            assign_date: null,
            due_date: null,
            ref_id: null,
            reminder: null,
            reminder_time: null,
            remark: null,
            status: null,
        },
        
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    
    
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

            

            axios.post('/api/v1/tasks', params)
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

            

            axios.post('/api/v1/tasks/' + state.item.id, params)
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
        axios.get('/api/v1/tasks/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        
    },
    
    setAgency_id({ commit }, value) {
        commit('setAgency_id', value)
    },
    setAgent_id({ commit }, value) {
        commit('setAgent_id', value)
    },
    setAgent_name({ commit }, value) {
        commit('setAgent_name', value)
    },
    setAssign_date({ commit }, value) {
        commit('setAssign_date', value)
    },
    setDue_date({ commit }, value) {
        commit('setDue_date', value)
    },
    setRef_id({ commit }, value) {
        commit('setRef_id', value)
    },
    setReminder({ commit }, value) {
        commit('setReminder', value)
    },
    setReminder_time({ commit }, value) {
        commit('setReminder_time', value)
    },
    setRemark({ commit }, value) {
        commit('setRemark', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setAgency_id(state, value) {
        state.item.agency_id = value
    },
    setAgent_id(state, value) {
        state.item.agent_id = value
    },
    setAgent_name(state, value) {
        state.item.agent_name = value
    },
    setAssign_date(state, value) {
        state.item.assign_date = value
    },
    setDue_date(state, value) {
        state.item.due_date = value
    },
    setRef_id(state, value) {
        state.item.ref_id = value
    },
    setReminder(state, value) {
        state.item.reminder = value
    },
    setReminder_time(state, value) {
        state.item.reminder_time = value
    },
    setRemark(state, value) {
        state.item.remark = value
    },
    setStatus(state, value) {
        state.item.status = value
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
