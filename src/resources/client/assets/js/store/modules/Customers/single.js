function initialState() {
    return {
        item: {
            id: null,
            name: null,
            email: null,
            account_manager: null,
            agree: null,
            address: null,
            city: null,
            state: null,
            country: null,
            phone: null,
            postcode: null,
            device: null,
            locale: null,
            login: null,
            login_date_time: null,
            login_status: null,
            mycred_default: null,
            mycred_default_total: null,
            mycred_epp_mycred: null,
            profile: null,
            facebook: null,
            google: null,
            otp: null,
            registered_thru: null,
        },
        citiesAll: [],
        statesAll: [],
        countriesAll: [],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    citiesAll: state => state.citiesAll,
    statesAll: state => state.statesAll,
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

            if (_.isEmpty(state.item.city)) {
                params.set('city_id', '')
            } else {
                params.set('city_id', state.item.city.id)
            }
            if (_.isEmpty(state.item.state)) {
                params.set('state_id', '')
            } else {
                params.set('state_id', state.item.state.id)
            }
            if (_.isEmpty(state.item.country)) {
                params.set('country_id', '')
            } else {
                params.set('country_id', state.item.country.id)
            }

            axios.post('/api/v1/customers', params)
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

            if (_.isEmpty(state.item.city)) {
                params.set('city_id', '')
            } else {
                params.set('city_id', state.item.city.id)
            }
            if (_.isEmpty(state.item.state)) {
                params.set('state_id', '')
            } else {
                params.set('state_id', state.item.state.id)
            }
            if (_.isEmpty(state.item.country)) {
                params.set('country_id', '')
            } else {
                params.set('country_id', state.item.country.id)
            }

            axios.post('/api/v1/customers/' + state.item.id, params)
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
        axios.get('/api/v1/customers/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCitiesAll')
    dispatch('fetchStatesAll')
    dispatch('fetchCountriesAll')
    },
    fetchCitiesAll({ commit }) {
        axios.get('/api/v1/cities')
            .then(response => {
                commit('setCitiesAll', response.data.data)
            })
    },
    fetchStatesAll({ commit }) {
        axios.get('/api/v1/states')
            .then(response => {
                commit('setStatesAll', response.data.data)
            })
    },
    fetchCountriesAll({ commit }) {
        axios.get('/api/v1/countries')
            .then(response => {
                commit('setCountriesAll', response.data.data)
            })
    },
    setName({ commit }, value) {
        commit('setName', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setAccount_manager({ commit }, value) {
        commit('setAccount_manager', value)
    },
    setAgree({ commit }, value) {
        commit('setAgree', value)
    },
    setAddress({ commit }, value) {
        commit('setAddress', value)
    },
    setCity({ commit }, value) {
        commit('setCity', value)
    },
    setState({ commit }, value) {
        commit('setState', value)
    },
    setCountry({ commit }, value) {
        commit('setCountry', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setPostcode({ commit }, value) {
        commit('setPostcode', value)
    },
    setDevice({ commit }, value) {
        commit('setDevice', value)
    },
    setLocale({ commit }, value) {
        commit('setLocale', value)
    },
    setLogin({ commit }, value) {
        commit('setLogin', value)
    },
    setLogin_date_time({ commit }, value) {
        commit('setLogin_date_time', value)
    },
    setLogin_status({ commit }, value) {
        commit('setLogin_status', value)
    },
    setMycred_default({ commit }, value) {
        commit('setMycred_default', value)
    },
    setMycred_default_total({ commit }, value) {
        commit('setMycred_default_total', value)
    },
    setMycred_epp_mycred({ commit }, value) {
        commit('setMycred_epp_mycred', value)
    },
    setProfile({ commit }, value) {
        commit('setProfile', value)
    },
    setFacebook({ commit }, value) {
        commit('setFacebook', value)
    },
    setGoogle({ commit }, value) {
        commit('setGoogle', value)
    },
    setOtp({ commit }, value) {
        commit('setOtp', value)
    },
    setRegistered_thru({ commit }, value) {
        commit('setRegistered_thru', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setName(state, value) {
        state.item.name = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setAccount_manager(state, value) {
        state.item.account_manager = value
    },
    setAgree(state, value) {
        state.item.agree = value
    },
    setAddress(state, value) {
        state.item.address = value
    },
    setCity(state, value) {
        state.item.city = value
    },
    setState(state, value) {
        state.item.state = value
    },
    setCountry(state, value) {
        state.item.country = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setPostcode(state, value) {
        state.item.postcode = value
    },
    setDevice(state, value) {
        state.item.device = value
    },
    setLocale(state, value) {
        state.item.locale = value
    },
    setLogin(state, value) {
        state.item.login = value
    },
    setLogin_date_time(state, value) {
        state.item.login_date_time = value
    },
    setLogin_status(state, value) {
        state.item.login_status = value
    },
    setMycred_default(state, value) {
        state.item.mycred_default = value
    },
    setMycred_default_total(state, value) {
        state.item.mycred_default_total = value
    },
    setMycred_epp_mycred(state, value) {
        state.item.mycred_epp_mycred = value
    },
    setProfile(state, value) {
        state.item.profile = value
    },
    setFacebook(state, value) {
        state.item.facebook = value
    },
    setGoogle(state, value) {
        state.item.google = value
    },
    setOtp(state, value) {
        state.item.otp = value
    },
    setRegistered_thru(state, value) {
        state.item.registered_thru = value
    },
    setCitiesAll(state, value) {
        state.citiesAll = value
    },
    setStatesAll(state, value) {
        state.statesAll = value
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
