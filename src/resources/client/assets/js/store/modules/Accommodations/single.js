function initialState() {
    return {
        item: {
            id: null,
            title: null,
            description: null,
            contact_no: null,
            accommodation_address: null,
            featured_image: null,
            website_address: null,
            check_in_time: null,
            check_out_time: null,
            latitude: null,
            longitude: null,
            city: null,
        },
        citiesAll: [],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    citiesAll: state => state.citiesAll,
    
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
            if (_.isEmpty(state.item.city)) {
                params.set('city_id', '')
            } else {
                params.set('city_id', state.item.city.id)
            }

            axios.post('/api/v1/accommodations', params)
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
            if (_.isEmpty(state.item.city)) {
                params.set('city_id', '')
            } else {
                params.set('city_id', state.item.city.id)
            }

            axios.post('/api/v1/accommodations/' + state.item.id, params)
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
        axios.get('/api/v1/accommodations/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCitiesAll')
    },
    fetchCitiesAll({ commit }) {
        axios.get('/api/v1/cities')
            .then(response => {
                commit('setCitiesAll', response.data.data)
            })
    },
    setTitle({ commit }, value) {
        commit('setTitle', value)
    },
    setDescription({ commit }, value) {
        commit('setDescription', value)
    },
    setContact_no({ commit }, value) {
        commit('setContact_no', value)
    },
    setAccommodation_address({ commit }, value) {
        commit('setAccommodation_address', value)
    },
    setFeatured_image({ commit }, value) {
        commit('setFeatured_image', value)
    },
    
    setWebsite_address({ commit }, value) {
        commit('setWebsite_address', value)
    },
    setCheck_in_time({ commit }, value) {
        commit('setCheck_in_time', value)
    },
    setCheck_out_time({ commit }, value) {
        commit('setCheck_out_time', value)
    },
    setLatitude({ commit }, value) {
        commit('setLatitude', value)
    },
    setLongitude({ commit }, value) {
        commit('setLongitude', value)
    },
    setCity({ commit }, value) {
        commit('setCity', value)
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
    setContact_no(state, value) {
        state.item.contact_no = value
    },
    setAccommodation_address(state, value) {
        state.item.accommodation_address = value
    },
    setFeatured_image(state, value) {
        state.item.featured_image = value
    },
    setWebsite_address(state, value) {
        state.item.website_address = value
    },
    setCheck_in_time(state, value) {
        state.item.check_in_time = value
    },
    setCheck_out_time(state, value) {
        state.item.check_out_time = value
    },
    setLatitude(state, value) {
        state.item.latitude = value
    },
    setLongitude(state, value) {
        state.item.longitude = value
    },
    setCity(state, value) {
        state.item.city = value
    },
    setCitiesAll(state, value) {
        state.citiesAll = value
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
