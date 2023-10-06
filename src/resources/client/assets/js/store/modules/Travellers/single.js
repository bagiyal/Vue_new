function initialState() {
    return {
        item: {
            id: null,
            name: null,
            email: null,
            display_name: null,
            phone: null,
            address: null,
            fcm_token: null,
            device: null,
            auth_key: null,
            otp: null,
        },
        meta:{

            meta_company_name:null,
            meta_role:null,
            meta_secondary_email:null,
            meta_secondary_phone:null,
            meta_tags:null,

            meta_interests:null,
            meta_allergens:null,
            meta_food_prefrence:null,
            meta_dob:null,
            meta_anniversary:null,
            meta_gender:null,
            meta_family_size:null,
            meta_occupation:null,
            meta_income_range:null,
            meta_marital_status:null,
            meta_remark:null,
            meta_type_tourist:null,
            meta_lifestyle:null,
            meta_room_pref:null,
            meta_seating_pref:null,
            meta_reward:null,
            meta_food_habits:null,
            documents:[]



        },

        meta_data:null,
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    meta: state => state.meta,

}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();
            let meta_data=_.cloneDeep(state.meta);
            meta_data.documents=JSON.stringify(state.meta.documents);
            meta_data.meta_company_name=state.meta.meta_company_name;
            meta_data.meta_role=state.meta.meta_role;
            meta_data.meta_secondary_email=state.meta.meta_secondary_email;
            meta_data.meta_secondary_phone=state.meta.meta_secondary_phone;
            meta_data.meta_tags=state.meta.meta_tags;
            meta_data.meta_interests=state.meta.meta_interests;
            meta_data.meta_allergens=state.meta.meta_allergens;
            meta_data.meta_food_prefrence=state.meta.meta_food_prefrence;
            meta_data.meta_dob=state.meta.meta_dob;
            meta_data.meta_anniversary=state.meta.meta_anniversary;
            meta_data.meta_gender=state.meta.meta_gender;
            meta_data.meta_family_size=state.meta.meta_family_size;
            meta_data.meta_occupation=state.meta.meta_occupation;
            meta_data.meta_income_range=state.meta.meta_income_range;
            meta_data.meta_marital_status=state.meta.meta_marital_status;
            meta_data.meta_remark=state.meta.meta_remark;
            meta_data.meta_type_tourist=JSON.stringify(state.meta.meta_type_tourist);
            meta_data.meta_lifestyle=state.meta.meta_lifestyle;
            meta_data.meta_room_pref=state.meta.meta_room_pref;
            meta_data.meta_seating_pref=state.meta.meta_seating_pref;
            meta_data.meta_reward=state.meta.meta_reward;
            meta_data.meta_food_habits=state.meta.meta_food_habits;
            params.set('meta', JSON.stringify(meta_data));

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];

                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    }
                    else  if(fieldName=='address'){

                        params.set(fieldName, JSON.stringify(fieldValue));


                    }

                    else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }



            axios.post('/api/v1/travellers', params)
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
        // dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();
            let meta_data=_.cloneDeep(state.meta);
            meta_data.documents=JSON.stringify(state.meta.documents);
            meta_data.meta_company_name=state.meta.meta_company_name;
            meta_data.meta_role=state.meta.meta_role;
            meta_data.meta_secondary_email=state.meta.meta_secondary_email;
            meta_data.meta_secondary_phone=state.meta.meta_secondary_phone;
            meta_data.meta_tags=state.meta.meta_tags;
            meta_data.meta_interests=state.meta.meta_interests;
            meta_data.meta_allergens=state.meta.meta_allergens;
            meta_data.meta_food_prefrence=state.meta.meta_food_prefrence;
            meta_data.meta_dob=state.meta.meta_dob;
            meta_data.meta_anniversary=state.meta.meta_anniversary;
            meta_data.meta_gender=state.meta.meta_gender;
            meta_data.meta_family_size=state.meta.meta_family_size;
            meta_data.meta_occupation=state.meta.meta_occupation;
            meta_data.meta_income_range=state.meta.meta_income_range;
            meta_data.meta_marital_status=state.meta.meta_marital_status;
            meta_data.meta_remark=state.meta.meta_remark;
            meta_data.meta_type_tourist=state.meta.meta_type_tourist;
            meta_data.meta_lifestyle=state.meta.meta_lifestyle;
            meta_data.meta_room_pref=state.meta.meta_room_pref;
            meta_data.meta_seating_pref=state.meta.meta_seating_pref;
            meta_data.meta_reward=state.meta.meta_reward;
            meta_data.meta_food_habits=state.meta.meta_food_habits;
            params.set('_method', 'PUT')
            params.set('meta', JSON.stringify(meta_data));


            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];

                if(fieldName=='address'){

                    params.set(fieldName, JSON.stringify(fieldValue));


                }
                else  if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);


                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    }

                    else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }



            axios.post('/api/v1/travellers/' + state.item.id, params)
                .then(response => {
                    // commit('setItem', response.data.data)
                    resolve()
                })
                .catch(error => {

                    alert("error")
                    console.log(error)
                    // let message = error.response.data.message || error.message
                    // let errors  = error.response.data.errors

                    // dispatch(
                    //     'Alert/setAlert',
                    //     { message: message, errors: errors, color: 'danger' },
                    //     { root: true })

                    // reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    fetchData({ commit, dispatch }, id) {
        axios.get('/api/v1/travellers/' + id)
            .then(response => {
               // console.log(response.data.data)
                commit('setItem', response.data.data)
            })


    },

    setName({ commit }, value) {
        commit('setName', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setDisplay_name({ commit }, value) {
        commit('setDisplay_name', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setAddress({ commit }, value) {
        commit('setAddress', value)
    },
    setFcm_token({ commit }, value) {
        commit('setFcm_token', value)
    },
    setDevice({ commit }, value) {
        commit('setDevice', value)
    },
    setAuth_key({ commit }, value) {
        commit('setAuth_key', value)
    },
    setOtp({ commit }, value) {
        commit('setOtp', value)
    },

    setmeta_company_name({ commit }, value) {
        commit('setmeta_company_name', value)
    },

    setdocuments({ commit }, value) {
        commit('setdocuments', value)
    },

    setmeta_role({ commit }, value) {
        commit('setmeta_role', value)
    },
    setmeta_secondary_email({ commit }, value) {
        commit('setmeta_secondary_email', value)
    },
    setmeta_secondary_phone({ commit }, value) {
        commit('setmeta_secondary_phone', value)
    },

    setmeta_interests({ commit }, value) {
        commit('setmeta_interests', value)
    },
    setmeta_allergens({ commit }, value) {
        commit('setmeta_allergens', value)
    },
    setmeta_food_prefrence({ commit }, value) {
        commit('setmeta_food_prefrence', value)
    },
    setmeta_dob({ commit }, value) {
        commit('setmeta_dob', value)
    },
    setmeta_anniversary({ commit }, value) {
        commit('setmeta_anniversary', value)
    },

    setmeta_gender({ commit }, value) {
        commit('setmeta_gender', value)
    },
    setmeta_family_size({ commit }, value) {
        commit('setmeta_family_size', value)
    },
    setmeta_occupation({ commit }, value) {
        commit('setmeta_occupation', value)
    },
    setmeta_income_range({ commit }, value) {
        commit('setmeta_income_range', value)
    },
    setmeta_marital_status({ commit }, value) {
        commit('setmeta_marital_status', value)
    },
    setmeta_remark({ commit }, value) {
        commit('setmeta_remark', value)
    },
    setmeta_type_tourist({ commit }, value) {
        commit('setmeta_type_tourist', value)
    },
    setmeta_lifestyle({ commit }, value) {
        commit('setmeta_lifestyle', value)
    },
    setmeta_room_pref({ commit }, value) {
        commit('setmeta_room_pref', value)
    },
    setmeta_seating_pref({ commit }, value) {
        commit('setmeta_seating_pref', value)
    },
    setmeta_reward({ commit }, value) {
        commit('setmeta_reward', value)
    },
    setmeta_food_habits({ commit }, value) {
        commit('setmeta_food_habits', value)
    },


    setmeta_tags({ commit }, value) {
        commit('setmeta_tags', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }


}

const mutations = {
    setItem(state, item) {
        state.item = item
        //state.item.address=JSON.parse(item.address);
        state.meta_data = item.get_meta;
        state.meta_data.forEach(function(e){
//console.log(e.meta_key)
            if(e.meta_key=='documents'){

                state.meta.documents=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_company_name'){

                state.meta.meta_company_name=e.meta_value;
            }
            if(e.meta_key=='meta_role'){

                state.meta.meta_role=e.meta_value;
            }
            if(e.meta_key=='meta_secondary_email'){

                state.meta.meta_secondary_email=e.meta_value;
            }
            if(e.meta_key=='meta_secondary_phone'){

                state.meta.meta_secondary_phone=e.meta_value;
            }
            if(e.meta_key=='meta_tags'){

                state.meta.meta_tags=e.meta_value;
            }

            if(e.meta_key=='meta_interests'){

                state.meta.meta_interests=e.meta_value;
            }
            if(e.meta_key=='meta_allergens'){

                state.meta.meta_allergens=e.meta_value;
            }
            if(e.meta_key=='meta_food_prefrence'){

                state.meta.meta_food_prefrence=e.meta_value;
            }
            if(e.meta_key=='meta_dob'){

                state.meta.meta_dob=e.meta_value;
            }
            if(e.meta_key=='meta_anniversary'){

                state.meta.meta_anniversary=e.meta_value;
            }


            if(e.meta_key=='meta_gender'){

                state.meta.meta_gender=e.meta_value;
            }
            if(e.meta_key=='meta_family_size'){

                state.meta.meta_family_size=e.meta_value;
            }
            if(e.meta_key=='meta_occupation'){

                state.meta.meta_occupation=e.meta_value;
            }
            if(e.meta_key=='meta_income_range'){

                state.meta.meta_income_range=e.meta_value;
            }
            if(e.meta_key=='meta_marital_status'){

                state.meta.meta_marital_status=e.meta_value;
            }
            if(e.meta_key=='meta_remark'){

                state.meta.meta_remark=e.meta_value;
            }
            if(e.meta_key=='meta_type_tourist'){

                state.meta.meta_type_tourist=e.meta_value;
            }
            if(e.meta_key=='meta_lifestyle'){

                state.meta.meta_lifestyle=e.meta_value;
            }
            if(e.meta_key=='meta_room_pref'){

                state.meta.meta_room_pref=e.meta_value;
            }
            if(e.meta_key=='meta_seating_pref'){

                state.meta.meta_seating_pref=e.meta_value;
            }
            if(e.meta_key=='meta_reward'){

                state.meta.meta_reward=e.meta_value;
            }
            if(e.meta_key=='meta_food_habits'){

                state.meta.meta_food_habits=e.meta_value;
            }


        });
    },


    setName(state, value) {
        state.item.name = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setDisplay_name(state, value) {
        state.item.display_name = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setAddress(state, value) {
        state.item.address = value
    },
    setFcm_token(state, value) {
        state.item.fcm_token = value
    },
    setDevice(state, value) {
        state.item.device = value
    },
    setAuth_key(state, value) {
        state.item.auth_key = value
    },
    setOtp(state, value) {
        state.item.otp = value
    },
    //meta

    setmeta_company_name(state, value) {
        state.meta.meta_company_name = value
    },
    setdocuments(state, value) {
        state.meta.documents = value
    },

    setmeta_role(state, value) {
        state.meta.meta_role = value
    },
    setmeta_secondary_email(state, value) {
        state.meta.meta_secondary_email = value
    },
    setmeta_secondary_phone(state, value) {
        state.meta.meta_secondary_phone = value
    },
    setmeta_tags(state, value) {
        state.meta.meta_tags = value
    },

    setmeta_interests(state, value) {
        state.meta.meta_interests = value
    },
    setmeta_allergens(state, value) {
        state.meta.meta_allergens = value
    },
    setmeta_food_prefrence(state, value) {
        state.meta.meta_food_prefrence = value
    },
    setmeta_dob(state, value) {
        state.meta.meta_dob = value
    },
    setmeta_anniversary(state, value) {
        state.meta.meta_anniversary = value
    },


    setmeta_gender(state, value) {
        state.meta.meta_gender = value
    },
    setmeta_occupation(state, value) {
        state.meta.meta_occupation = value
    },
    setmeta_income_range(state, value) {
        state.meta.meta_income_range = value
    },
    setmeta_marital_status(state, value) {
        state.meta.meta_marital_status = value
    },
    setmeta_remark(state, value) {
        state.meta.meta_remark = value
    },
    setmeta_type_tourist(state, value) {
        state.meta.meta_type_tourist = value
    },
    setmeta_lifestyle(state, value) {
        state.meta.meta_lifestyle = value
    },
    setmeta_room_pref(state, value) {
        state.meta.meta_room_pref = value
    },
    setmeta_seating_pref(state, value) {
        state.meta.meta_seating_pref = value
    },
    setmeta_reward(state, value) {
        state.meta.meta_reward = value
    },
    setmeta_food_habits(state, value) {
        state.meta.meta_food_habits = value
    },
    setmeta_family_size(state, value) {
        state.meta.meta_family_size = value
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
