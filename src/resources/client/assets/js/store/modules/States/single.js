function initialState() {
    return {
        item: {
            id: null,
            title: null,
            description: null,
            latitude: null,
            longitude: null,
            featured_image: null,
            country: null,
        },
        countriesAll: [],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    countriesAll: state => state.countriesAll,
    
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

            if (state.item.featured_image === null) {
                params.delete('featured_image');
            }
            if (_.isEmpty(state.item.country)) {
                params.set('country_id', '')
            } else {
                params.set('country_id', state.item.country.id)
            }

            axios.post('/api/v1/states', params)
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

            if (state.item.featured_image === null) {
                params.delete('featured_image');
            }
            if (_.isEmpty(state.item.country)) {
                params.set('country_id', '')
            } else {
                params.set('country_id', state.item.country.id)
            }

            axios.post('/api/v1/states/' + state.item.id, params)
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
        axios.get('/api/v1/states/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCountriesAll')
    },
    fetchCountriesAll({ commit }) {
        axios.get('/api/v1/countries')
            .then(response => {
                commit('setCountriesAll', response.data.data)
            })
    },
    setTitle({ commit }, value) {
        commit('setTitle', value)
    },
    setDescription({ commit }, value) {
        commit('setDescription', value)
    },
    setLatitude({ commit }, value) {
        commit('setLatitude', value)
    },
    setLongitude({ commit }, value) {
        commit('setLongitude', value)
    },
    setFeatured_image({ commit }, value) {
        commit('setFeatured_image', value)
    },
    
    setCountry({ commit }, value) {
        commit('setCountry', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setTitle(state, value) {
        state.item.title = value
    },
    setDescription(state, value) {
        state.item.description = value
    },
    setLatitude(state, value) {
        state.item.latitude = value
    },
    setLongitude(state, value) {
        state.item.longitude = value
    },
    setFeatured_image(state, value) {
        state.item.featured_image = value
    },
    setCountry(state, value) {
        state.item.country = value
    },
    setCountriesAll(state, value) {
        state.countriesAll = value
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
