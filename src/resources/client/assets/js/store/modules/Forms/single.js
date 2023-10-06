function initialState() {
    return {
        item: {
            id: null,
            form_name: null,
            agency_id: null,
            agent_id: null,
            form_html: [],
            banner:'',
            footer:[],
            header:[],
            languages:[{ "code": "en", "name": "English", "nativeName": "English" }],
            add_member:false
        },
        fields_arr:'',
        loading: false,
        clone_data:null,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    fields_arr: state => state.fields_arr,
    clone_data: state => state.clone_data,


}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];

                if(fieldName=='form_html'){

                    params.set('form_html', JSON.stringify(fieldValue));



                }
                else if(fieldName=='languages'){
                    params.set('languages', JSON.stringify(fieldValue));

                }
                else if(fieldName=='header'){
                    params.set('header', JSON.stringify(fieldValue));

                }
                else if(fieldName=='footer'){
                    params.set('footer', JSON.stringify(fieldValue));

                }
                else {

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
                }}
            }



            axios.post('/api/v1/forms', params)
                .then(response => {
                    let form = new FormData();
                    form.set('form_id',response.data.data.id);
                    form.set('agency_id',response.data.data.agency_id);
                    form.set('agent_id',response.data.data.agent_id);
                    form.set('form_questions',JSON.stringify(state.fields_arr));
                    // axios.post('/api/webservices/save_template', form);

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

                if (fieldName == 'form_html') {

                    params.set('form_html', JSON.stringify(fieldValue));


                } else if(fieldName=='languages'){
                    params.set('languages', JSON.stringify(fieldValue));

                }
                else if(fieldName=='header'){
                    params.set('header', JSON.stringify(fieldValue));

                }
                else if(fieldName=='footer'){
                    params.set('footer', JSON.stringify(fieldValue));

                }
                 else {
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

            axios.post('/api/v1/forms/' + state.item.id, params)
                .then(response => {
                    let form = new FormData();
                    form.set('form_id',response.data.data.id);
                    form.set('agency_id',response.data.data.agency_id);
                    form.set('agent_id',response.data.data.agent_id);
                    form.set('form_questions',JSON.stringify(state.fields_arr));
                    // axios.post('/api/webservices/save_template', form);

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
        axios.get('/api/v1/forms/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })


    },

    setForm_name({ commit }, value) {
        commit('setForm_name', value)
    },
    setAgency_id({ commit }, value) {
        commit('setAgency_id', value)
    },
    setAgent_id({ commit }, value) {
        commit('setAgent_id', value)
    },
    setclone_data({ commit }, value) {
        commit('setclone_data', value)
    },

    setForm_html({ commit }, value) {
        commit('setForm_html', value)
    },
    setlanguage({ commit }, value) {
        commit('setlanguage', value)
    },
    setbanner({ commit }, value) {
        commit('setbanner', value)
    },
    setfooter({ commit }, value) {
        commit('setfooter', value)
    },
    setheader({ commit }, value) {
        commit('setheader', value)
    },





    setfields_arr({ commit }, value) {
        commit('setfields_arr', value)
    },

    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
        state.item.form_html=JSON.parse(item.form_html);
        state.item.languages=JSON.parse(item.languages);
        state.item.header=JSON.parse(item.header);
        state.item.footer=JSON.parse(item.footer);
        state.item.add_member=JSON.parse(item.add_member);

    },

    setForm_name(state, value) {
        state.item.form_name = value
    },
    setAgency_id(state, value) {
        state.item.agency_id = value
    },
    setAgent_id(state, value) {
        state.item.agent_id = value
    },

    setForm_html(state, value) {
        state.item.form_html = value
    },
    setlanguages(state, value) {
        state.item.language = value
    },
    setbanner(state, value) {
        state.item.banner = value
    },

    setfooter(state, value) {
        state.item.footer = value
    },

    setheader(state, value) {
        state.item.header = value
    },



    setfields_arr(state, loading) {
        state.fields_arr = loading
    },
    setclone_data(state, value) {
        state.clone_data = value
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
