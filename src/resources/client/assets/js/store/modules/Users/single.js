function initialState() {
    return {
        item: {
            id: null,
            name: null,
            email: null,
            password: null,
            role: [],
            approved: false,
            team: null,
            account_manager: null,
            agree: null,
            banner_color: null,
            address: null,
            city: null,
            state: null,
            country: null,
            phone: null,
            postcode: null,
            company: null,
            device: null,
            locale: null,
            login: null,
            login_date_time: null,
            login_status: null,
            logo: null,
            mycred_default: null,
            mycred_default_total: null,
            mycred_epp_mycred: null,
            owners_email: null,yearofinc:null,typeofcomapny:null,docs:null
        },
        rolesAll: [],
        teamsAll: [],
        citiesAll: [],
        statesAll: [],
        countriesAll: [],
        agencyAll:[],

        loading: false,
        meta:{
            // meta_color:{'agency':'','agent':''},
            time_zone:{
                "offset": "+05:30",
                "name": "Asia/Kolkata"
            },
            meta_bio_metric_mail:null,
            meta_bio_metric_sms:null,
            meta_cloure_note_i:null,
            meta_cloure_note_q:null,
            meta_doc_not_rec_mail:null,
            meta_doc_not_rec_sms:null,
            meta_doc_tags:[ { key: 'originalpassport', value: 'Original Passport' },
                            { key: 'photo_id', value: 'Photo ID' },
                         ],
            meta_incex_note_i:null,
            meta_incex_note_q:null,
            meta_interview_mail:null,
            meta_interview_sms:null,
            meta_notification_history:null,
            meta_paid_bal_total:null,
            meta_price_mode_user:null,
            meta_registered_thru:null,
            meta_score:{"dd":
                    {"0":{"start":"","end":"","score":"0"},
                        "1":{"start":"51","end":"999","score":"1"},
                        "2":{"start":"31","end":"50","score":"2"},
                        "3":{"start":"21","end":"30","score":"3"},
                        "4":{"start":"6","end":"20","score":"4"},
                        "5":{"start":"0","end":"5","score":"5"}},
                "sl":{"Adwords":"5",
                    "SocialMedia":"1",
                    "OfflinePurchase":"3",
                    "Repeat":"4",
                    "Referred":"5",
                    "Website":"4",
                    "WalkIn":"2",
                    "PhoneCall":"2",
                    "Corporate":"3",
                    "SalesTeam":"3",
                    "Others":"3"},
                "vp":{"1":{"start":"1000","end":"5000","score":"1"},
                    "2":{"start":"5001","end":"10000","score":"2"},
                    "3":{"start":"10001","end":"50000","score":"3"},
                    "4":{"start":"50001","end":"100000","score":"4"},
                    "5":{"start":"100001","end":"99999999","score":"5"}},

                "formula":{"Lead":"($lf+$dd+$sl)/3","Query":"($lf+$dd+$sl+$vp)/4"}
            },
            meta_sms_i:null,
            meta_supplier:null,
            meta_token_id:null,
            meta_welcome_group:null,
            meta_registration_group:null,
            meta_welcome_note_i:null,
            meta_welcome_note_q:null,
            meta_subscription:false,
            meta_licence: {"type":"Point","exp_date":'',"start_date":''
                ,"query":"10"
                ,"itinerary":"10"
                ,"group":"10"
                ,"broadcast_to_all":"10"
                ,"broadcast_to_live":"10"
                ,"direct":"10"
                ,"exhibitor":"10"
                ,"nomination":"10"


            },
            meta_subscription_pack:{
                "starter":true,
                "base":false,
                "impact":false,
                "enterprise":false

            },
            meta_subscription_features:{

                "lead_mng_sys":true,
                "cust_info_repo":true,
                "tech_aug":false,
                "data_analysis":false,
                "task_rem":true,
                "quotation_gen":false,
                "confirm_letter":false,
                "booking_accessL":false,
                "cost_sheet":false,
                "whatsapp_integ":false,
                "post_booking_app":false,
                "multi_broadcast":false,
                "partial_app_branding":false,
                "group_module":false,
                "email_masking":false,
                "sms_service":false,
                "mis_report":false,
                "personalised_mail":false,
                "full_app_branding":false,
                "vendro_mng_sys":false,
                "visa_support":false,
                "activity_upselling":false,
                "sms_integration":false,
                "own_quot_temp":false,
                "customer_retention_tool":false,
                "full_edit_mode":true



            },
            meta_main_formula:{"Lead":"($lf+$dd+$sl)/3","Query":"($lf+$dd+$sl+$vp)/4"},
            approve_agents:false,
            kyc_docs:[],
            accountant_email:null,
            payment_mode:null,
	    approval_levels:{'levels':'0','level1':'','level2':'','level3':'','level4':''},
            app_links:{'ios':'','android':''}

        },
        meta_data:null,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    rolesAll: state => state.rolesAll,
    teamsAll: state => state.teamsAll,
    citiesAll: state => state.citiesAll,
    statesAll: state => state.statesAll,
    countriesAll: state => state.countriesAll,
    agencyAll: state => state.agencyAll,
    meta: state => state.meta,
}

const actions = {
    storeData({ commit, state, dispatch }) {

        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            var meta_loc =_.cloneDeep(state.meta);
            meta_loc.meta_licence=JSON.stringify(meta_loc.meta_licence)
            var flag=0;
            for( var j =0; j<meta_loc.meta_doc_tags.length; j++){
                if(meta_loc.meta_doc_tags[j].key=='originalpassport'){

                    flag++
                }
            }
            if(flag){

                meta_loc.meta_doc_tags=JSON.stringify(meta_loc.meta_doc_tags)
            }
            else {
                meta_loc.meta_doc_tags.push(  { key: 'originalpassport', value: 'Original Passport' });
            meta_loc.meta_doc_tags=JSON.stringify(meta_loc.meta_doc_tags)
            }


            meta_loc.time_zone=JSON.stringify(meta_loc.time_zone)

            meta_loc.meta_subscription_features=JSON.stringify(meta_loc.meta_subscription_features)
            meta_loc.kyc_docs=JSON.stringify(meta_loc.kyc_docs)
            meta_loc.meta_subscription_pack=JSON.stringify(meta_loc.meta_subscription_pack)
            meta_loc.meta_main_formula=JSON.stringify(meta_loc.meta_main_formula)
            meta_loc.meta_score=JSON.stringify(meta_loc.meta_score)
            meta_loc.approval_levels=JSON.stringify(meta_loc.approval_levels)
            meta_loc.app_links=JSON.stringify(meta_loc.app_links)




            params.set('meta', JSON.stringify(meta_loc));
            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if(fieldName=='company'){
                    // console.log(fieldName);
                    // console.log(4);
                    params.set(fieldName, JSON.stringify(fieldValue));

                }
                else if (typeof fieldValue !== 'object') {
                    // console.log(fieldName);
                    // console.log(fieldName);
                    // console.log(1);
                    params.set(fieldName, fieldValue);
                }
                else {
                    // console.log(fieldName);
                    // console.log(2);

                    if(fieldName=='docs'){
                        // console.log(fieldName);
                        // console.log(4);
                        params.set(fieldName, JSON.stringify(fieldValue));

                    }
                 if (fieldValue && typeof fieldValue[0] !== 'object') {
                        // console.log(fieldName);
                        // console.log(3);
                        params.set(fieldName, fieldValue);
                    }


                    else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.role)) {
                params.delete('role')
            } else {
                for (let index in state.item.role) {
                    params.set('role['+index+']', state.item.role[index].id)
                }
            }
            params.set('approved', state.item.approved ? 1 : 0)
            if (_.isEmpty(state.item.team)) {
                params.set('team_id', '')
            } else {
                params.set('team_id', state.item.team.id)
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
            if (state.item.logo === null) {
                params.delete('logo');
            }

            axios.post('/api/v1/users', params)
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
            var meta_loc =_.cloneDeep(state.meta);
            meta_loc.meta_licence=JSON.stringify(meta_loc.meta_licence)
            var flag=0;
            for( var j =0; j<meta_loc.meta_doc_tags.length; j++){
                if(meta_loc.meta_doc_tags[j].key=='originalpassport'){

                    flag++
                }
            }
            if(flag){

                meta_loc.meta_doc_tags=JSON.stringify(meta_loc.meta_doc_tags)
            }
            else {
                meta_loc.meta_doc_tags.push(  { key: 'originalpassport', value: 'Original Passport' });
            meta_loc.meta_doc_tags=JSON.stringify(meta_loc.meta_doc_tags)
            }


            meta_loc.time_zone=JSON.stringify(meta_loc.time_zone)

            meta_loc.meta_subscription_features=JSON.stringify(meta_loc.meta_subscription_features)
            meta_loc.kyc_docs=JSON.stringify(meta_loc.kyc_docs)
            meta_loc.meta_subscription_pack=JSON.stringify(meta_loc.meta_subscription_pack)
            meta_loc.meta_main_formula=JSON.stringify(meta_loc.meta_main_formula)
            meta_loc.meta_score=JSON.stringify(meta_loc.meta_score)
            meta_loc.approval_levels=JSON.stringify(meta_loc.approval_levels)
            meta_loc.app_links=JSON.stringify(meta_loc.app_links)


            params.set('meta', JSON.stringify(meta_loc));
            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if(fieldName=='company'){
                    // console.log(fieldName);
                    // console.log(4);
                    params.set(fieldName, JSON.stringify(fieldValue));

                }
                else
                if (typeof fieldValue !== 'object') {
                    // console.log(fieldName);
                    // console.log(1);
                    params.set(fieldName, fieldValue);
                } else {
                    // console.log(fieldName);
                    // console.log(2);

                    if(fieldName=='docs'){
                        // console.log(fieldName);
                        // console.log(4);
                        params.set(fieldName, JSON.stringify(fieldValue));

                    }
                    else if (fieldValue && typeof fieldValue[0] !== 'object') {
                        // console.log(fieldName);
                        // console.log(3);
                        params.set(fieldName, fieldValue);
                    }


                    else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.role)) {
                params.delete('role')
            } else {
                for (let index in state.item.role) {
                    params.set('role['+index+']', state.item.role[index].id)
                }
            }
            params.set('approved', state.item.approved ? 1 : 0)
            if (_.isEmpty(state.item.team)) {
                params.set('team_id', '')
            } else {
                params.set('team_id', state.item.team.id)
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
            if (state.item.logo === null) {
                params.delete('logo');
            }

            axios.post('/api/v1/users/' + state.item.id, params)
                .then(response => {
                    console.log(" gagdgd ",response.data)
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
        axios.get('/api/v1/users/' + id)
            .then(response => {
                // console.log(" sfdfsdaf ",JSON.stringify(response.data.data));
                commit('setItem', response.data.data)
            })

        dispatch('fetchRolesAll')
    dispatch('fetchTeamsAll')
    dispatch('fetchCitiesAll')
    dispatch('fetchStatesAll')
    dispatch('fetchCountriesAll')
        dispatch('fetchAgencyAll')

    },
    fetchRolesAll({ commit }) {
        axios.get('/api/v1/roles')
            .then(response => {
                commit('setRolesAll', response.data.data)
            })
    },
    fetchTeamsAll({ commit }) {
        axios.get('/api/v1/teams')
            .then(response => {
                commit('setTeamsAll', response.data.data)
            })
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
    fetchAgencyAll({ commit }) {
        axios.get('/api/v1/agency')
            .then(response => {
                commit('setAgencyAll', response.data.data)
            })
    },


    setName({ commit }, value) {
        commit('setName', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setPassword({ commit }, value) {
        commit('setPassword', value)
    },
    setRole({ commit }, value) {
        commit('setRole', value)
    },
    setApproved({ commit }, value) {
        commit('setApproved', value)
    },
    setTeam({ commit }, value) {
        commit('setTeam', value)
    },
    setAccount_manager({ commit }, value) {
        commit('setAccount_manager', value)
    },
    setAgree({ commit }, value) {
        commit('setAgree', value)
    },
    setBanner_color({ commit }, value) {
        commit('setBanner_color', value)
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
    setCompany({ commit }, value) {
        commit('setCompany', value)
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
    setLogo({ commit }, value) {
        commit('setLogo', value)
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
    setOwners_email({ commit }, value) {
        commit('setOwners_email', value)
    },

    //meta


        setmeta_bio_metric_mail({ commit }, value) {
    commit('setmeta_bio_metric_mail', value)
},
    setmeta_time_zone({ commit }, value) {
        commit('setmeta_time_zone', value)
    },

    setmeta_bio_metric_sms({ commit }, value) {
        commit('setmeta_bio_metric_sms', value)
    },
setmeta_cloure_note_i({ commit }, value) {
    commit('setmeta_cloure_note_i', value)
},
    setmeta_cloure_note_q({ commit }, value) {
        commit('setmeta_cloure_note_q', value)
    },
setmeta_doc_not_rec_mail({ commit }, value) {
    commit('setmeta_doc_not_rec_mail', value)
},
    setmeta_doc_not_rec_sms({ commit }, value) {
        commit('setmeta_doc_not_rec_sms', value)
    },
setmeta_incex_note_i({ commit }, value) {
    commit('setmeta_incex_note_i', value)
},
    setmeta_incex_note_q({ commit }, value) {
        commit('setmeta_incex_note_q', value)
    },
setmeta_interview_mail({ commit }, value) {
    commit('setmeta_interview_mail', value)
},
    setmeta_interview_sms({ commit }, value) {
        commit('setmeta_interview_sms', value)
    },
setmeta_price_mode_user({ commit }, value) {
    commit('setmeta_price_mode_user', value)
},
    setmeta_registered_thru({ commit }, value) {
        commit('setmeta_registered_thru', value)
    },
setmeta_score({ commit }, value) {
    commit('setmeta_score', value)
},
    setmeta_sms_i({ commit }, value) {
        commit('setmeta_sms_i', value)
    },
    setpayment_mode({ commit }, value) {
        commit('setpayment_mode', value)
    },

    setaccountant_email({ commit }, value) {
        commit('setaccountant_email', value)
    },

setmeta_welcome_group({ commit }, value) {
    commit('setmeta_welcome_group', value)
},
    setmeta_registration_group({ commit }, value) {
        commit('setmeta_registration_group', value)
    },

    setmeta_welcome_note_i({ commit }, value) {
        commit('setmeta_welcome_note_i', value)
    },
    setapproval_levels({ commit }, value) {
        commit('setapproval_levels', value)
    },
    setapp_links({ commit }, value) {
        commit('setapp_links', value)
    },

setmeta_welcome_note_q({ commit }, value) {
    commit('setmeta_welcome_note_q', value)
},
    setmeta_subscription({ commit }, value) {
        commit('setmeta_subscription', value)
    },
    setmeta_licence({ commit }, value) {
        commit('setmeta_licence', value)
    },
    setmeta_subscription_features({ commit }, value) {
        commit('setmeta_subscription_features', value)
    },
    setkyc_docs({ commit }, value) {
        commit('setkyc_docs', value)
    },


    setmeta_subscription_pack({ commit }, value) {
        commit('setmeta_subscription_pack', value)
    },
    setmeta_main_formula({ commit }, value) {
        commit('setmeta_main_formula', value)
    },



    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
        // console.log(item);
        state.meta_data = item.get_meta;
        if(item.company){
        state.item.company = JSON.parse(item.company);}
        if(item.docs){
            state.item.docs = JSON.parse(item.docs);}
        // state.meta_data.meta_doc_tags = JSON.parse(item.get_meta.meta_doc_tags);
        console.log("state meta data ",item.app_links);
        state.meta.app_links = item.app_links;
        console.log("state ----- data ",state.meta.app_links);

        state.meta_data.forEach(function(e){

            // if(e.meta_key=='meta_color'){
            //
            //     state.meta.meta_color=e.meta_value;
            // }
            if(e.meta_key=='meta_doc_tags'){
            // console.log(e.meta_value);
                state.meta.meta_doc_tags=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_bio_metric_mail'){

                state.meta.meta_bio_metric_mail=e.meta_value;
            }
            if(e.meta_key=='time_zone'){

                state.meta.time_zone=JSON.parse(e.meta_value);
            }



            if(e.meta_key=='meta_bio_metric_sms'){


                state.meta.meta_bio_metric_sms=e.meta_value;
            }
            if(e.meta_key=='meta_cloure_note_i'){

                state.meta.meta_cloure_note_i=e.meta_value;
            }
            if(e.meta_key=='meta_cloure_note_q'){

                state.meta.meta_cloure_note_q=e.meta_value;
            }
            if(e.meta_key=='meta_doc_not_rec_mail'){

                state.meta.meta_doc_not_rec_mail=e.meta_value;
            }
            if(e.meta_key=='meta_doc_not_rec_sms'){

                state.meta.meta_doc_not_rec_sms=e.meta_value;
            }
            if(e.meta_key=='meta_incex_note_i'){

                state.meta.meta_incex_note_i=e.meta_value;
            }
            if(e.meta_key=='meta_incex_note_q'){

                state.meta.meta_incex_note_q=e.meta_value;
            }
            if(e.meta_key=='meta_interview_mail'){

                state.meta.meta_interview_mail=e.meta_value;
            }
            if(e.meta_key=='meta_interview_sms'){

                state.meta.meta_interview_sms=e.meta_value;
            }
            if(e.meta_key=='meta_notification_history'){

                state.meta.meta_notification_history=e.meta_value;
            }
            if(e.meta_key=='meta_paid_bal_total'){

                state.meta.meta_paid_bal_total=e.meta_value;
            }
            if(e.meta_key=='meta_price_mode_user'){

                state.meta.meta_price_mode_user=e.meta_value;
            }
            if(e.meta_key=='meta_registered_thru'){

                state.meta.meta_registered_thru=e.meta_value;
            }
            if(e.meta_key=='meta_score'){
if(e.meta_value==null){
    state.meta.meta_score={"dd":
            {"0":{"start":"","end":"","score":"0"},
                "1":{"start":"51","end":"999","score":"1"},
                "2":{"start":"31","end":"50","score":"2"},
                "3":{"start":"21","end":"30","score":"3"},
                "4":{"start":"6","end":"20","score":"4"},
                "5":{"start":"0","end":"5","score":"5"}},
        "sl":{"Adwords":"5",
            "SocialMedia":"1",
            "OfflinePurchase":"3",
            "Repeat":"4",
            "Referred":"5",
            "Website":"4",
            "WalkIn":"2",
            "PhoneCall":"2",
            "Corporate":"3",
            "SalesTeam":"3",
            "Others":"3"},
        "vp":{"1":{"start":"1000","end":"5000","score":"1"},
            "2":{"start":"5001","end":"10000","score":"2"},
            "3":{"start":"10001","end":"50000","score":"3"},
            "4":{"start":"50001","end":"100000","score":"4"},
            "5":{"start":"100001","end":"99999999","score":"5"}},

        "formula":{"Lead":"($lf+$dd+$sl)/3","Query":"($lf+$dd+$sl+$vp)/4"}
    }
}
else{
    state.meta.meta_score=JSON.parse(e.meta_value);
}

            }
            if(e.meta_key=='meta_sms_i'){

                state.meta.meta_sms_i=e.meta_value;
            }
            if(e.meta_key=='accountant_email'){

                state.meta.accountant_email=e.meta_value;
            }
            if(e.meta_key=='payment_mode'){

                state.meta.payment_mode=e.meta_value;
            }
            if(e.meta_key=='meta_supplier'){

                state.meta.meta_supplier=e.meta_value;
            }
            if(e.meta_key=='meta_token_id'){

                state.meta.meta_token_id=e.meta_value;
            }
            if(e.meta_key=='meta_welcome_group'){

                state.meta.meta_welcome_group=e.meta_value;
            }
            if(e.meta_key=='meta_registration_group'){

                state.meta.meta_registration_group=e.meta_value;
            }


            if(e.meta_key=='meta_welcome_note_i'){

                state.meta.meta_welcome_note_i=e.meta_value;
            }
            if(e.meta_key=='approval_levels'){

                state.meta.approval_levels=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='app_links'){

                state.meta.app_links=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_welcome_note_q'){

                state.meta.meta_welcome_note_q=e.meta_value;
            }
            if(e.meta_key=='meta_subscription'){

                state.meta.meta_subscription=parseInt(e.meta_value);
            }
            if(e.meta_key=='approve_agents'){

                state.meta.approve_agents=parseInt(e.meta_value);
            }

            if(e.meta_key=='meta_licence'){

                state.meta.meta_licence=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_subscription_pack'){

                state.meta.meta_subscription_pack=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_subscription_features'){

                state.meta.meta_subscription_features=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='kyc_docs'){

                state.meta.kyc_docs=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_main_formula'){

                state.meta.meta_main_formula=JSON.parse(e.meta_value);
            }




        });
    },

    setName(state, value) {
        state.item.name = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setPassword(state, value) {
        state.item.password = value
    },
    setRole(state, value) {
        state.item.role = value
    },
    setApproved(state, value) {
        state.item.approved = value
    },
    setTeam(state, value) {
        state.item.team = value
    },
    setAccount_manager(state, value) {
        state.item.account_manager = value
    },
    setAgree(state, value) {
        state.item.agree = value
    },
    setBanner_color(state, value) {
        state.item.banner_color = value
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
    setCompany(state, value) {
        state.item.company = value
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
    setLogo(state, value) {
        state.item.logo = value
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
    setOwners_email(state, value) {
        state.item.owners_email = value
    },
    setRolesAll(state, value) {
        state.rolesAll = value
    },
    setTeamsAll(state, value) {
        state.teamsAll = value
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
    setAgencyAll(state, value) {
        state.agencyAll = value
    },

    //meta
    setmeta_bio_metric_mail(state, value) {
        state.meta.meta_bio_metric_mail = value
    },
    setmeta_time_zone(state, value) {
        state.meta.time_zone = value
    },





    setmeta_bio_metric_sms(state, value) {
        state.meta.meta_bio_metric_sms = value
    },
    setmeta_cloure_note_i(state, value) {
        state.meta.meta_cloure_note_i = value
    },
    setmeta_cloure_note_q(state, value) {
        state.meta.meta_cloure_note_q = value
    },
    setmeta_doc_not_rec_mail(state, value) {
        state.meta.meta_doc_not_rec_mail = value
    },
    setmeta_doc_not_rec_sms(state, value) {
        state.meta.meta_doc_not_rec_sms = value
    },
    setmeta_incex_note_i(state, value) {
        state.meta.meta_incex_note_i = value
    },
    setmeta_incex_note_q(state, value) {
        state.meta.meta_incex_note_q = value
    },
    setmeta_interview_mail(state, value) {
        state.meta.meta_interview_mail = value
    },



    setmeta_interview_sms(state, value) {
        state.meta.meta_interview_sms = value
    },
    setmeta_price_mode_user(state, value) {
        state.meta.meta_price_mode_user = value
    },
    setmeta_registered_thru(state, value) {
        state.meta.meta_registered_thru = value
    },
    setmeta_score(state, value) {
        state.meta.meta_score = value
    },
    setmeta_sms_i(state, value) {
        state.meta.meta_sms_i = value
    },
    setaccountant_email(state, value) {
        state.meta.accountant_email = value
    },
    setpayment_mode(state, value) {
        state.meta.payment_mode = value
    },
    setmeta_welcome_group(state, value) {
        state.meta.meta_welcome_group = value
    },
    setmeta_registration_group(state, value) {
        state.meta.meta_registration_group = value
    },

    setapproval_levels(state, value) {
        state.meta.approval_levels = value
    },
    setapp_links(state, value) {
        state.meta.app_links = value
    },

    setmeta_welcome_note_q(state, value) {
        state.meta.meta_welcome_note_q = value
    },
    setmeta_subscription(state, value) {
        state.meta.meta_subscription = value
    },
    setmeta_licence(state, value) {
        state.meta.meta_licence = value
    },
    setmeta_subscription_pack(state, value) {
        state.meta.meta_subscription_pack = value
    },
    setmeta_subscription_features(state, value) {
        state.meta.meta_subscription_features = value
    },
    setkyc_docs(state, value) {
        state.meta.kyc_docs = value
    },

    setmeta_main_formula(state, value) {
        state.meta.meta_main_formula = value
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
