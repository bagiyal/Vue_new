function initialState() {
    return {
        item: {
            id: null,
            title: null,
            description: null,
            contact_no: null,
            timing: null,
            closed_day: null,
            time_required_to_visit: null,
            categories: [],
            esb_visiblity: null,
            address: null,
            place_longitude: null,
            place_latitude: null,
            city: [],
            featured_image: null,
            gallery: [],
            uploaded_gallery: [],
            cuisine: null,
            recommended: null,
            partner: null,
            place_tripadvisor_id: null,
            city_id: [],
            created_by: null,
            created_by_team: null,
        },
        citiesAll: [],
        usersAll: [],
        teamsAll: [],

        loading: false,
        cat:[]
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    citiesAll: state => state.citiesAll,
    usersAll: state => state.usersAll,
    teamsAll: state => state.teamsAll,
    cat: state => state.cat,
}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];

if(fieldName==='categories'){
    console.log(fieldName);
    params.set('categories', JSON.stringify(fieldValue));

}
else if (fieldName === 'city_id') {
    params.set('city_id', JSON.stringify(fieldValue));

}

    else if (fieldName == 'city') {
        console.log(fieldValue);
        var obj=[];
        for(var key in fieldValue){
            obj.push(fieldValue[key]['id']);
        }
        // alert(obj);
        params.set('city_id', JSON.stringify(obj));

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
    else if(fieldName != 'city_id'){
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

            }

            if (_.isEmpty(state.item.city)) {
                params.delete('city')
            } else {
                for (let index in state.item.city) {
                    params.set('city['+index+']', state.item.city[index].id)
                }
            }
            if (state.item.featured_image === null) {
                params.delete('featured_image');
            }
            params.set('uploaded_gallery', state.item.uploaded_gallery.map(o => o['id']))
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
            params.delete('city')
            axios.post('/api/v1/places', params)
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


                if(fieldName==='categories'){

                    params.set('categories', JSON.stringify(fieldValue));

                }
                else if (fieldName == 'city_id') {
                    params.set('city_id', JSON.stringify(fieldValue));

                }
                else if (fieldName == 'city') {

                        console.log(fieldValue);
                        var obj=[];
                        for(var key in fieldValue){
                            obj.push(fieldValue[key]['id']);
                        }
                        // alert(obj);
                        params.set('city_id', JSON.stringify(obj));


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

                    } else if(fieldName != 'city_id'){
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
                    params.delete('city')
                } else {
                    for (let index in state.item.city) {
                        params.set('city['+index+']', state.item.city[index].id)
                    }
                }
                if (state.item.featured_image === null) {
                    params.delete('featured_image');
                }

                if (typeof state.item.uploaded_gallery!== "undefined") {
                    params.set('uploaded_gallery', state.item.uploaded_gallery.map(o => o['id']))
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

            }

            axios.post('/api/v1/places/' + state.item.id, params)
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
        axios.get('/api/v1/places/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCitiesAll')
    dispatch('fetchUsersAll')
    dispatch('fetchTeamsAll')
        dispatch('fetchcat')

    },
    fetchCitiesAll({ commit }) {
        axios.get('/api/v1/cities')
            .then(response => {
                commit('setCitiesAll', response.data.data)
            })
    },
    fetchUsersAll({ commit }) {
        axios.get('/api/v1/users')
            .then(response => {
                commit('setUsersAll', response.data.data)
            })
    },

    fetchcat({ commit }){

        axios.get('/api/v1/categories')
            .then(response => {
                commit('setcat', response.data.data)


            });
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
    setDescription({ commit }, value) {
        commit('setDescription', value)
    },
    setContact_no({ commit }, value) {
        commit('setContact_no', value)
    },
    setTiming({ commit }, value) {
        commit('setTiming', value)
    },
    setClosed_day({ commit }, value) {
        commit('setClosed_day', value)
    },
    setTime_required_to_visit({ commit }, value) {
        commit('setTime_required_to_visit', value)
    },
    setCategories({ commit }, value) {
        commit('setCategories', value)
    },
    setEsb_visiblity({ commit }, value) {
        commit('setEsb_visiblity', value)
    },
    setAddress({ commit }, value) {
        commit('setAddress', value)
    },
    setPlace_longitude({ commit }, value) {
        commit('setPlace_longitude', value)
    },
    setPlace_latitude({ commit }, value) {
        commit('setPlace_latitude', value)
    },
    setCity({ commit }, value) {
        commit('setCity', value)
    },
    setFeatured_image({ commit }, value) {
        commit('setFeatured_image', value)
    },

    setGallery({ commit }, value) {
        commit('setGallery', value)
    },
    destroyGallery({ commit }, value) {
        commit('destroyGallery', value)
    },
    destroyUploadedGallery({ commit }, value) {
        commit('destroyUploadedGallery', value)
    },
    setCuisine({ commit }, value) {
        commit('setCuisine', value)
    },
    setRecommended({ commit }, value) {
        commit('setRecommended', value)
    },
    setPartner({ commit }, value) {
        commit('setPartner', value)
    },
    setPlace_tripadvisor_id({ commit }, value) {
        commit('setPlace_tripadvisor_id', value)
    },
    setCity_id({ commit }, value) {
        commit('setCity_id', value)
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
        state.item.categories=JSON.parse( state.item.categories)
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
    setTiming(state, value) {
        state.item.timing = value
    },
    setClosed_day(state, value) {
        state.item.closed_day = value
    },
    setTime_required_to_visit(state, value) {
        state.item.time_required_to_visit = value
    },
    setCategories(state, value) {
        state.item.categories = value
    },
    setEsb_visiblity(state, value) {
        state.item.esb_visiblity = value
    },
    setAddress(state, value) {
        state.item.address = value
    },
    setPlace_longitude(state, value) {
        state.item.place_longitude = value
    },
    setPlace_latitude(state, value) {
        state.item.place_latitude = value
    },
    setCity(state, value) {
        state.item.city = value
    },
    setFeatured_image(state, value) {
        state.item.featured_image = value
    },
    setGallery(state, value) {
        for (let i in value) {
            let gallery = value[i];
            if (typeof gallery === "object") {
                state.item.gallery.push(gallery);
            }
        }
    },
    destroyGallery(state, value) {
        for (let i in state.item.gallery) {
            if (i == value) {
                state.item.gallery.splice(i, 1);
            }
        }
    },
    destroyUploadedGallery(state, value) {
        for (let i in state.item.uploaded_gallery) {
            let data = state.item.uploaded_gallery[i];
            if (data.id === value) {
                state.item.uploaded_gallery.splice(i, 1);
            }
        }
    },
    setCuisine(state, value) {
        state.item.cuisine = value
    },
    setRecommended(state, value) {
        state.item.recommended = value
    },
    setPartner(state, value) {
        state.item.partner = value
    },
    setPlace_tripadvisor_id(state, value) {
        state.item.place_tripadvisor_id = value
    },
    setCity_id(state, value) {

        state.item.city_id = value
    },
    setCreated_by(state, value) {
        state.item.created_by = value
    },
    setCreated_by_team(state, value) {
        state.item.created_by_team = value
    },
    setCitiesAll(state, value) {
        state.citiesAll = value
    },
    setcat(state, value) {
        state.cat = value
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
