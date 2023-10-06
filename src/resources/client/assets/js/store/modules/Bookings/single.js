 import built_remark from "../../../mixins/builtremark";
import todaydate from "../../../mixins/todaydate";

function initialState() {
    return {
        item: {
            id: null,
            booking_id: null,
            full_name: null,
            email: null,
            email2: null,
            phone: null,
            places:[],
            activated: null,
            score: null,
            no_of_adults: 1,
            no_of_children: 0,
            agency_id: null,
            agent_id: null,
            meal_day: null,
            bill_pay: null,
            budget: null,
            driver_pick_up_time: null,
            driver_pick_up_time_updated: null,
            drop_address: null,
            handler_name: document.querySelector("meta[name='user-name']").getAttribute('content'),
            handler_no: document.querySelector("meta[name='user-phone']").getAttribute('content'),
            meals_supplement: {'bf':true,'l':false,'d':false},
            member_of_iti: null,
            package_category: null,
            pickup_address: null,
            total_price: null,
            pickup_location: null,
            tour_cost:  [{'cost':'','type':''}],
            selected_car: null,
            status: null,
            supplier_id: null,
            total_room: 1,
            total_tour_days: null,
            traveller_id: null,
            itinerary_places: null,
            itinerary_places_time: null,
            tour_id: null,
            tour_name: null,
            tour_location: null,
            created_by: null,
            created_by_team: null,

            score_new: null,
            tour_cost_tax: null,


        },
        usersAll: [],
        teamsAll: [],
        tourAll:[],
        cityAll: [],
        places:{ 'places_city_id':{},'cites':[]},
        hotels:{},
        cityid:null,

        meta:{
            remarks:[],
            meta_infant:0,
            meta_extra_bed:0,
            meta_transport:null,
            meta_transport_no:null,
            meta_source:null,
            meta_flightprice:null,
            meta_flight:[{"date": "", "dep_code": "", "arr_date": "","arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight"}],
            meta_family:[],
            meta_welcome_mail:null,
            meta_incl_ex:null,
            meta_closuer:null,
            meta_exp_cost:[],
            meta_exp_costflight:[],
            meta_pickup_date:null,
            meta_pickup_time:null,
            markup1:{'percent':true,'value':'0'},
            markup2:{'percent':true,'value':'0'},
            sellingprice1:null,
            sellingprice2:null,
            meta_executive_name:null,
            meta_executive_no:null,
            interactions:{},
            meta_driver_name:null,
            meta_driver_no:null,
            query_feel: null,
            moneycollect:false,
            meta_activate_sms:null,
            meta_visa:[{"url":""}],
            meta_passport:[{"exp_date":"","issue_date":"","issue_place":"","name_first":"","name_last":"","passportno":"","url":"","url2":"","pdf":""}],
            meta_voucher:[{"url":""}],
            meta_insurance:[{"url":""}],
            meta_other:[{"url":""}],
            meta_photo_id:[{"id_num":"","id_name":"","mem_name":"","url":""}],

            meta_doc_tags:[],
            meta_doc_tags_family:[],
            Airport_Hub:'',
            home_town:'',
            Visa_Hub:'',
            Members_Allowed:'',
            member_status:0,
            member_doc_tags:{"documents":[],"color":"red","remark":[]},
            feedback_ques:[],
            kyc_sent:'false',
            no_show:'false',
            dealership:'',
            meta_rooming_status:0,
            meta_form_status:0,
            meta_members_allowed:0,
            meta_relation:0,
            meta_nomination:0,
            meta_gender:0,
            meta_dob:0,
            visa_status:'',
            welcome_mail_status:'false',
            payment_status:'true',
            payments:[],
            meta_registration_mail:null,
            meta_itinerary_mail:null,
            meta_banner:'',


            // cancelled_status:false
    },
        meta_data:null,
        loading: false,
        placedata:{'title':'',
        'description':'',
        'contact_no':'',
        'categories':'[57]',
        'place_longitude':'',
        'place_latitude':'',
        'featured_image':'',
        'city_id':'',
        'city':'',
        ' created_by':null,
        ' created_by_team':null,
    },
        addplacemodal:null,
        tourdata:{'titel':'','locations':'','total_tour_days':''},
        add_place_modal_status:0,
        day_plan_mounted_status:false
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    usersAll: state => state.usersAll,
    teamsAll: state => state.teamsAll,
    tourAll: state => state.tourAll,
    places: state => state.places,
    cityid: state => state.cityid,
    hotels: state => state.hotels,
    cityAll: state => state.cityAll,
    meta: state => state.meta,
    meta_data: state => state.meta_data,
    placedata: state => state.placedata,
    addplacemodal: state => state.addplacemodal,
    tourdata: state => state.tourdata,
    add_place_modal_status: state => state.add_place_modal_status,
    day_plan_mounted_status: state => state.day_plan_mounted_status,

}

const actions = {
    setday_plan_mounted_status({ commit }, value) {
        commit('setday_plan_mounted_status', value)
    },
    closeplace({ commit }, value) {
        commit('setLoading', true)
        commit('addplacemodal', value)
        setTimeout(
            function(){
                commit('setLoading', false)
            }
            , 2000);
    },
    setmeta_source({ commit }, value) {
        commit('setmeta_source', value)
    },
    setRemarkedit({ commit }, value) {
        commit('setRemarkedit', value)
    },

    addPlace({ commit, state, dispatch }){

        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in state.placedata) {


                let fieldValue = state.placedata[fieldName];
                if (fieldName == 'city') {


                }
                if (fieldName == 'city_id') {
                    var city_idd=fieldValue;
                    params.set('city[0]', fieldValue);
                    params.set('city_id', '[' + fieldValue + ']');
                }

                else if(fieldName != 'city_id' && fieldName != 'city' ){
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

                if (_.isEmpty(state.placedata.created_by)) {
                    params.set('created_by_id', '')
                } else {
                    params.set('created_by_id', state.placedata.created_by.id)
                }
                if (_.isEmpty(state.placedata.created_by_team)) {
                    params.set('created_by_team_id', '')
                } else {
                    params.set('created_by_team_id', state.placedata.created_by_team.id)
                }

            }


            axios.post('/api/v1/places', params)
                .then(response => {
                    // commit('resetState')
                    // dispatch(fetchplace(city_idd));
                    commit('addplacemodal', city_idd)
                    state.placedata=_.cloneDeep({'title':'',
                        'description':'',
                        'contact_no':'',
                        'categories':'[57]',
                        'place_longitude':'',
                        'place_latitude':'',
                        'featured_image':'',
                        'city_id':'',
                        'city':'',
                        ' created_by':null,
                        ' created_by_team':null,
                    })
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
                    // commit('setLoading', false)
                })
        })



    },
    //addnewtour
    addnewtour({ commit, state, dispatch },value) {
        // commit('setLoading', true)
        // dispatch('Alert/resetState', null, { root: true })
        console.log(value)
        console.log(state.tourdata)


        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in value) {
                let fieldValue = value[fieldName];
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

            axios.post('/api/v1/tours', params)
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


    storeTour({ commit, state, dispatch }) {
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

            axios.post('/api/v1/tours', params)
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



    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            let meta_data=_.cloneDeep(state.meta);

            meta_data.meta_exp_cost=JSON.stringify(state.meta.meta_exp_cost);
            meta_data.meta_exp_costflight=JSON.stringify(state.meta.meta_exp_costflight);
            meta_data.markup1=JSON.stringify(state.meta.markup1);
            meta_data.markup2=JSON.stringify(state.meta.markup2);
            meta_data.interactions=JSON.stringify(state.meta.interactions);

            meta_data.meta_visa=JSON.stringify(state.meta.meta_visa);
            meta_data.meta_passport=JSON.stringify(state.meta.meta_passport);
            meta_data.meta_voucher=JSON.stringify(state.meta.meta_voucher);
            meta_data.meta_insurance=JSON.stringify(state.meta.meta_insurance);
            meta_data.meta_other=JSON.stringify(state.meta.meta_other);
            meta_data.meta_photo_id=JSON.stringify(state.meta.meta_photo_id);
            meta_data.meta_doc_tags=JSON.stringify(state.meta.meta_doc_tags);
            meta_data.meta_doc_tags_family=JSON.stringify(state.meta.meta_doc_tags_family);
            meta_data.member_doc_tags=JSON.stringify(state.meta.member_doc_tags);
            meta_data.feedback_ques=JSON.stringify(state.meta.feedback_ques);
            meta_data.payments=JSON.stringify(state.meta.payments);



            meta_data.remarks=JSON.stringify(state.meta.remarks);
            meta_data.meta_flight=JSON.stringify(state.meta.meta_flight);
            meta_data.meta_family=JSON.stringify(state.meta.meta_family);



            params.set('meta', JSON.stringify(meta_data));

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                }
                else {

                    if (fieldValue && typeof fieldValue[0] !== 'object') {

                        if(fieldName=='itinerary_places'){
                            //   console.log("itinerary_places");
                            let newobj={};


                            state.places.cites.forEach( (dataObj) => {
                                console.log(dataObj['id']);
                                newobj[dataObj['id']]=fieldValue[dataObj['id']];

                            });

                            // console.log(newobj);
                            //   throw new Error("my error message");
                            params.set(fieldName, JSON.stringify(newobj));

                        }
                        // else  if(fieldName=='remarks'){
                        //
                        //     params.set(fieldName, JSON.stringify(fieldValue));
                        //
                        // }
                        else  if(fieldName=='meals_supplement'){

                            params.set(fieldName, JSON.stringify(fieldValue));


                        }
                        else {
                            params.set(fieldName, fieldValue);
                        }

                    }
                    else if(fieldName=='tour_location'){

                        params.set(fieldName, JSON.stringify(fieldValue));

                    }
                    else  if(fieldName=='tour_cost'){

                        params.set(fieldName, JSON.stringify(fieldValue));

                    }

                    else {

                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
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
            // console.log( "all params:");

            if (state.item.itinerary_places_time === null) {
                params.delete('itinerary_places_time');
            }
            // console.log( params);

            axios.post('/api/v1/bookings', params)
                .then(response => {

                 //   axios.get('/api/webservices/send_hotel_mail?book_id=' + state.item.booking_id)

                    if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
                        var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
                    }
                    else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
                        document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){

                        var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

                    }
                    axios.get('/api/v1/user/license/' + agency_id)
                        .then(response1 => {
                            var license=JSON.parse(response1.data.data[0].meta_value);

                            if(response.data.data.activated==="1"){
                                axios.get('/api/webservices/activate_noti?traveller_id='+response.data.data.traveller_id+'&id='+response.data.data.id+'&sms='+license.sms_service, {

                                })
                                    .then(response => {
                                    })
                            }
                        })





                    // commit('resetState')
                    // let params = new FormData();
                    // params.set('_method', 'PUT');


                    resolve()
                })
                .catch(error => {
                    // alert("error");


                    // alert("error1");
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors
                    // alert("error2");
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
                if (typeof fieldValue !== 'object')

                {

                    params.set(fieldName, fieldValue);
                }
                else {

                    if (fieldValue && typeof fieldValue[0] !== 'object') {

                        if(fieldName=='itinerary_places'){
                            //   console.log("itinerary_places");
                            let newobj={};
                            // console.log(fieldValue);
                            // console.log(state.places.cites)

                            state.places.cites.forEach( (dataObj) => {
                                console.log(dataObj['id']);
                                newobj[dataObj['id']]=fieldValue[dataObj['id']];

                            });

                            // console.log(newobj);
                            //   throw new Error("my error message");
                            params.set(fieldName, JSON.stringify(newobj));

                        }
                        else  if(fieldName=='meals_supplement'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }
                        else {
                            params.set(fieldName, fieldValue);
                        }

                    }

                    else if(fieldName=='tour_location'){

                        params.set(fieldName, JSON.stringify(fieldValue));

                    }

                    else  if(fieldName=='tour_cost'){

                        params.set(fieldName, JSON.stringify(fieldValue));

                    }


                    else {

                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
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
            let meta_data=_.cloneDeep(state.meta)

            meta_data.meta_exp_cost=JSON.stringify(state.meta.meta_exp_cost);
            meta_data.meta_exp_costflight=JSON.stringify(state.meta.meta_exp_costflight);
            meta_data.markup1=JSON.stringify(state.meta.markup1);
            meta_data.markup2=JSON.stringify(state.meta.markup2);
            meta_data.interactions=JSON.stringify(state.meta.interactions);
            meta_data.meta_visa=JSON.stringify(state.meta.meta_visa);
            meta_data.meta_passport=JSON.stringify(state.meta.meta_passport);
            meta_data.meta_voucher=JSON.stringify(state.meta.meta_voucher);
            meta_data.meta_insurance=JSON.stringify(state.meta.meta_insurance);
            meta_data.meta_other=JSON.stringify(state.meta.meta_other);
            meta_data.meta_photo_id=JSON.stringify(state.meta.meta_photo_id);
            meta_data.meta_doc_tags=JSON.stringify(state.meta.meta_doc_tags);
            meta_data.meta_doc_tags_family=JSON.stringify(state.meta.meta_doc_tags_family);
            meta_data.member_doc_tags=JSON.stringify(state.meta.member_doc_tags);
            meta_data.feedback_ques=JSON.stringify(state.meta.feedback_ques);
            meta_data.payments=JSON.stringify(state.meta.payments);

            meta_data.meta_flight=JSON.stringify(state.meta.meta_flight);
            meta_data.meta_family=JSON.stringify(state.meta.meta_family);
            meta_data.sellingprice1=state.meta.sellingprice1;
            meta_data.sellingprice2=state.meta.sellingprice2;
            meta_data.remarks=JSON.stringify(state.meta.remarks);
            params.set('meta', JSON.stringify(meta_data));

            axios.post('/api/v1/bookings/' + state.item.id, params)
                .then(response => {

                    // return false;
                 //   commit('setItem', response.data.data)
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
        commit('setLoading', true)
        axios.get('/api/v1/bookings/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

    //     dispatch('fetchUsersAll')
    // dispatch('fetchTeamsAll')
    //     dispatch('fetchTourAll')
        commit('setLoading', false)
    },
    fetchCityAll({ commit }) {
        axios.get('/api/v1/cities')
            .then(response => {
                commit('setCityAll', response.data.data)
            })
    },
    fetchTourAll({ commit }) {
        axios.get('/api/v1/tours_id_title')
            .then(response => {
                commit('setTourAll', response.data.data)
            })
    },
    fetchUsersAll({ commit }) {
        axios.get('/api/v1/users')
            .then(response => {
                commit('setUsersAll', response.data.data)
            })
    },
    fetchTeamsAll({ commit }) {
        axios.get('/api/v1/teams')
            .then(response => {
                commit('setTeamsAll', response.data.data)
            })
    },

    fetchplace({commit,state},id){
        commit('setLoading', true)
    console.log("fetchplace1");
    commit('setcityid', id)
    axios.get('/api/v1/city/ofcity/'+id)
        .then(response => {
            if(state.day_plan_mounted_status){
                state.add_place_modal_status++;
            }
            commit('setplace', {data:response.data.data, id:id})
        }) .finally(() => {
        commit('setLoading', false)
    })

},
    fetchhotel({commit},id){
        commit('setLoading', true)
    console.log("fetchhotel");
    // commit('sethotel', id)
    axios.get('/api/v1/city/hotels/'+id)
        .then(response => {
            console.log(response);
            if(!_.isEmpty(response.data)){
                commit('sethotel', {hotel:response.data.data, location_id:id})
            }

        }) .finally(() => {
        commit('setLoading', false)
    })

},
    setQuery_feel({ commit }, value) {
        commit('setQuery_feel', value)
    },
    setBooking_id({ commit }, value) {
        commit('setBooking_id', value)
    },
    setFull_name({ commit }, value) {
        commit('setFull_name', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setEmail2({ commit }, value) {
        commit('setEmail2', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setActivated({ commit }, value) {
        commit('setActivated', value)
    },
    setScore({ commit }, value) {
        commit('setScore', value)
    },
    setNo_of_adults({ commit }, value) {
        commit('setNo_of_adults', value)
    },
    setNo_of_children({ commit }, value) {
        commit('setNo_of_children', value)
    },
    setAgency_id({ commit }, value) {
        commit('setAgency_id', value)
    },
    setAgent_id({ commit }, value) {
        commit('setAgent_id', value)
    },
    setMeal_day({ commit }, value) {
        commit('setMeal_day', value)
    },
    setBill_pay({ commit }, value) {
        commit('setBill_pay', value)
    },
    setBudget({ commit }, value) {
        commit('setBudget', value)
    },
    setdriver_pick_up_time({ commit }, value) {
        commit('setdriver_pick_up_time', value)
    },
    setDriver_pick_up_time_updated({ commit }, value) {
        commit('setDriver_pick_up_time_updated', value)
    },
    setDrop_address({ commit }, value) {
        commit('setDrop_address', value)
    },
    setmoneycollect({ commit }, value) {
        commit('setmoneycollect', value)
    },
    setAirport_Hub({ commit }, value) {
        commit('setAirport_Hub', value)
    },
    setVisa_Hub({ commit }, value) {
        commit('setVisa_Hub', value)
    },
    setno_show({ commit }, value) {
        commit('setno_show', value)
    },
    setdealership({ commit }, value) {
        commit('setdealership', value)
    },
    setmeta_rooming_status({ commit }, value) {
        commit('setmeta_rooming_status', value)
    },
    setmeta_form_status({ commit }, value) {
        commit('setmeta_form_status', value)
    },
    // setcancelled_status({ commit }, value) {
    //     commit('setcancelled_status', value)
    // },

    setmeta_members_allowed({ commit }, value) {
        commit('setmeta_members_allowed', value)
    },
    setmeta_nomination({ commit }, value) {
        commit('setmeta_nomination', value)
    },
    setmeta_gender({ commit }, value) {
        commit('setmeta_gender', value)
    },
    setmeta_dob({ commit }, value) {
        commit('setmeta_dob', value)
    },
    setvisa_status({ commit }, value) {
        commit('setvisa_status', value)
    },
    setpayment_status({ commit }, value) {
        commit('setpayment_status', value)
    },

    setmeta_relation({ commit }, value) {
        commit('setmeta_relation', value)
    },



    setMembers_Allowed({ commit }, value) {
        commit('setMembers_Allowed', value)
    },
    setmember_status({ commit }, value) {
        commit('setmember_status', value)
    },
    setmember_doc_tags({ commit }, value) {
        commit('setmember_doc_tags', value)
    },
    setfeedback_ques({ commit }, value) {
        commit('setfeedback_ques', value)
    },
    setpayments({ commit }, value) {
        commit('setpayments', value)
    },

    setkyc_sent({ commit }, value) {
        commit('setkyc_sent', value)
    },

    setmeta_activate_sms({ commit }, value) {
        commit('setmeta_activate_sms', value)
    },


    setHandler_name({ commit }, value) {
        commit('setHandler_name', value)
    },
    setHandler_no({ commit }, value) {
        commit('setHandler_no', value)
    },
    setMeals_supplement({ commit }, value) {
        commit('setMeals_supplement', value)
    },
    setMember_of_iti({ commit }, value) {
        commit('setMember_of_iti', value)
    },
    setPackage_category({ commit }, value) {
        commit('setPackage_category', value)
    },
    setPickup_address({ commit }, value) {
        commit('setPickup_address', value)
    },



    setTotal_price({ commit }, value) {
        commit('setTotal_price', value)
    },
    setPickup_location({ commit }, value) {
        commit('setPickup_location', value)
    },
    setTour_cost({ commit }, value) {
        commit('setTour_cost', value)
    },
    setSelected_car({ commit }, value) {
        commit('setSelected_car', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    setSupplier_id({ commit }, value) {
        commit('setSupplier_id', value)
    },
    setTotal_room({ commit }, value) {
        commit('setTotal_room', value)
    },
    setTotal_tour_days({ commit }, value) {
        commit('setTotal_tour_days', value)
    },
    setTraveller_id({ commit }, value) {
        commit('setTraveller_id', value)
    },
    setItinerary_places({ commit }, value) {
        commit('setItinerary_places', value)
    },
    setItinerary_places_time({ commit }, value) {
        commit('setItinerary_places_time', value)
    },
    setTour_id({ commit }, value) {
        commit('setTour_id', value)
    },
    setTour_name({ commit }, value) {
        commit('setTour_name', value)
    },
    setTour_location({ commit }, value) {
        commit('setTour_location', value)
    },
    setCreated_by({ commit }, value) {
        commit('setCreated_by', value)
    },
    setCreated_by_team({ commit }, value) {
        commit('setCreated_by_team', value)
    },
    resetState({ commit }) {
        commit('resetState')
    },
    setRemark({ commit }, value) {
        commit('setRemark', value)
    },
    setRemarks({ commit }, value) {
        commit('setRemarks', value)
    },
    setmeta_flightprice({ commit }, value) {
        commit('setmeta_flightprice', value)
    },
    setmeta_flight({ commit }, value) {
        commit('setmeta_flight', value)
    },
   setmeta_family({ commit }, value) {
        commit('setmeta_family', value)
    },

    setmeta_incl_ex({ commit }, value) {
        commit('setmeta_incl_ex', value)
    },
    setmeta_welcome_mail({ commit }, value) {
        commit('setmeta_welcome_mail', value)
    },
    setmeta_registration_mail({ commit }, value) {
        commit('setmeta_registration_mail', value)
    },
    setmeta_itinerary_mail({ commit }, value) {
        commit('setmeta_itinerary_mail', value)
    },
    setmeta_banner({ commit }, value) {
        commit('setmeta_banner', value)
    },
    setmeta_closuer({ commit }, value) {
        commit('setmeta_closuer', value)
    },
    setdriver_pickup_date_time({ commit }, value) {
        commit('setdriver_pickup_date_time', value)
    },
    setmeta_infant({ commit }, value) {
        commit('setmeta_infant', value)
    },
    setmeta_mail_format({  commit, state, dispatch  }, value) {
        // commit('setmeta_mail_format', value)
        // alert('hello');
        var agent_id=document.querySelector("meta[name='user-id']").getAttribute('content');
          let params = new FormData();
          params.set('agent_id',agent_id);
          params.set('name',state.item.full_name);
          params.set('type','itinerary');
          axios.post('/api/webservices/mail_formats' , params)
          .then(response => {response.data
              var welcome_mail=response.data[0]['welcome_note'];
              var closure_mail=response.data[1]['closure_note'];
              var incex_note=response.data[2]['incex_note'];
              var registration=response.data[3]['register_note'];
              var itinerary_notes=response.data[4]['itinerary'];
              commit('setmeta_welcome_mail', welcome_mail);
              commit('setmeta_registration_mail', registration);
              commit('setmeta_itinerary_mail', itinerary_notes);
              commit('setmeta_closuer', closure_mail);
              commit('setmeta_incl_ex', incex_note);



        });
    },
    setmeta_extra_bed({ commit }, value) {
        commit('setmeta_extra_bed', value)
    },


    setmeta_transport({ commit }, value) {
        commit('setmeta_transport', value)
    },
    setmeta_transport_no({ commit }, value) {
        commit('setmeta_transport_no', value)
    },



    setEmail_second({ commit }, value) {
        commit('setEmail_second', value)
    },
    setTraveler_name({ commit }, value) {
        commit('setTraveler_name', value)
    },
    setmeta_pickup_date({ commit }, value) {
        commit('setmeta_pickup_date', value)
    },
    setmeta_pickup_time({ commit }, value) {
        commit('setmeta_pickup_time', value)
    },
    setmeta_driver_name({ commit }, value) {
        commit('setmeta_driver_name', value)
    },
    setmeta_driver_no({ commit }, value) {
        commit('setmeta_driver_no', value)
    },

    setmeta_interactions({ commit }, value) {
        commit('setmeta_interactions', value)
    },
    setmeta_interactionsfull({ commit }, value) {
        commit('setmeta_interactionsfull', value)
    },
}

const mutations = {
    setItem(state, item) {
        // state.item = item
        // state.item.itinerary_places=JSON.parse(item.itinerary_places);
        // state.item.tour_location=JSON.parse(item.tour_location);
        console.log(item);
        state.item = item
        console.log("tour_cost");
        state.item.itinerary_places=JSON.parse(item.itinerary_places);
        // state.item.meta_flight=JSON.parse(item.meta_flight);

        state.item.tour_location=JSON.parse(item.tour_location);
         state.item.meals_supplement=JSON.parse(item.meals_supplement);

            state.item.tour_cost=JSON.parse(item.tour_cost);

console.log("tour_cost");
        console.log( state.item.tour_cost);
        // state.meta.remarks=JSON.parse(meta.remarks);
        console.log("tour_location after");
        console.log(state.item.tour_location);

        state.meta_data = item.get_meta;

        console.log(state.meta_data);

        state.meta_data.forEach(function(e){
            if(e.meta_key=='meta_flight'){
                console.log("meta_flight after");
                state.meta.meta_flight=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_family'){
                console.log("meta_family after");
                state.meta.meta_family=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_infant'){

                state.meta.meta_infant=e.meta_value;
            }
            if(e.meta_key=='meta_extra_bed'){

                state.meta.meta_extra_bed=e.meta_value;
            }
            if(e.meta_key=='meta_transport'){

                state.meta.meta_transport=e.meta_value;
            }
            if(e.meta_key=='meta_source'){


                state.meta.meta_source=e.meta_value;
            }
            if(e.meta_key=='meta_flightprice'){

                state.meta.meta_flightprice=e.meta_value;
            }

            if(e.meta_key=='meta_welcome_mail'){

                state.meta.meta_welcome_mail=e.meta_value;
            }
            if(e.meta_key=='meta_registration_mail'){

                state.meta.meta_registration_mail=e.meta_value;
            }
            if(e.meta_key=='meta_itinerary_mail'){

                state.meta.meta_itinerary_mail=e.meta_value;
            }
            if(e.meta_key=='meta_banner'){

                state.meta.meta_banner=e.meta_value;
            }
            if(e.meta_key=='meta_incl_ex'){

                state.meta.meta_incl_ex=e.meta_value;
            }
            if(e.meta_key=='meta_closuer'){

                state.meta.meta_closuer=e.meta_value;
            }
            if(e.meta_key=='meta_exp_cost'){
                console.log("meta_exp_cost after");
                state.meta.meta_exp_cost=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_exp_costflight'){
                console.log("meta_exp_costflight after");
                state.meta.meta_exp_costflight=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_pickup_date'){

                state.meta.meta_pickup_date=e.meta_value;
            }
            if(e.meta_key=='meta_pickup_time'){

                state.meta.meta_pickup_time=e.meta_value;
            }
            if(e.meta_key=='meta_visa'){
                console.log("meta_visa after");
                state.meta.meta_visa=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_passport'){
                console.log("meta_passport after");
                state.meta.meta_passport=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_voucher'){
                console.log("meta_voucher after");
                state.meta.meta_voucher=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_insurance'){
                console.log("meta_insurance after");
                state.meta.meta_insurance=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_other'){
                console.log("meta_other after");
                state.meta.meta_other=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_photo_id'){

                state.meta.meta_photo_id=JSON.parse(e.meta_value);
            }


            if(e.meta_key=='meta_doc_tags'){

                state.meta.meta_doc_tags=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_doc_tags_family'){

                state.meta.meta_doc_tags_family=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='member_doc_tags'){

                state.meta.member_doc_tags=JSON.parse(e.meta_value);
            }

          if(e.meta_key=='feedback_ques'){

                state.meta.feedback_ques=JSON.parse(e.meta_value);
          }
          if(e.meta_key=='payments'){

                state.meta.payments=JSON.parse(e.meta_value);
          }

            if(e.meta_key=='kyc_sent'){

                state.meta.kyc_sent=e.meta_value;
            }


            if(e.meta_key=='meta_transport_no'){

                state.meta.meta_transport_no=e.meta_value;
            }
            if(e.meta_key=='meta_driver_name'){

                state.meta.meta_driver_name=e.meta_value;
            }
            if(e.meta_key=='Airport_Hub'){

                state.meta.Airport_Hub=e.meta_value;
            }
            if(e.meta_key=='Visa_Hub'){

                state.meta.Visa_Hub=e.meta_value;
            }
            if(e.meta_key=='no_show'){

                state.meta.no_show=e.meta_value;
            }
            if(e.meta_key=='dealership'){

                state.meta.dealership=e.meta_value;
            }
            if(e.meta_key=='meta_form_status'){

                state.meta.meta_form_status=e.meta_value;
            }
            if(e.meta_key=='cancelled_status'){

                state.meta.cancelled_status=e.meta_value;
            }
            if(e.meta_key=='meta_members_allowed'){

                state.meta.meta_members_allowed=e.meta_value;
            }
            if(e.meta_key=='meta_nomination'){

                state.meta.meta_nomination=e.meta_value;
            }
            if(e.meta_key=='meta_gender'){

                state.meta.meta_gender=e.meta_value;
            }
            if(e.meta_key=='meta_dob'){

                state.meta.meta_dob=e.meta_value;
            }
            if(e.meta_key=='visa_status'){

                state.meta.visa_status=e.meta_value;
            }

            if(e.meta_key=='payment_status'){

                state.meta.payment_status=e.meta_value;
            }

            if(e.meta_key=='meta_relation'){

                state.meta.meta_relation=e.meta_value;
            }

            if(e.meta_key=='meta_rooming_status'){

                state.meta.meta_rooming_status=e.meta_value;
            }


            if(e.meta_key=='member_status'){

                state.meta.member_status=e.meta_value;
            }

            if(e.meta_key=='meta_driver_no'){

                state.meta.meta_driver_no=e.meta_value;
            }
            if(e.meta_key=='markup1'){

                state.meta.markup1=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='markup2'){

                state.meta.markup2=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='sellingprice1'){

                state.meta.sellingprice1=e.meta_value;
            }
            if(e.meta_key=='sellingprice2'){

                state.meta.sellingprice2=e.meta_value;
            }

            if(e.meta_key=='meta_executive_name'){

                state.meta.meta_executive_name=e.meta_value;
            }

            if(e.meta_key=='meta_executive_no'){

                state.meta.meta_executive_no=e.meta_value;
            }

            if(e.meta_key=='interactions'){

                state.meta.interactions=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='query_feel'){

                state.meta.query_feel=e.meta_value;
            }

            if(e.meta_key=='meta_activate_sms'){

                state.meta.meta_activate_sms=e.meta_value;
            }
            if(e.meta_key=='remarks'){

                state.meta.remarks=JSON.parse(e.meta_value);
            }









        });
    },
    setRemarkedit(state, value) {

        // remark: [{"remark":"","agent":"","time":""}],
        if(_.isEmpty(state.meta.remarks)){
            var rem= _.cloneDeep(value)
            state.meta.remarks = [built_remark(rem)];
        }
        else {
            var rem= _.cloneDeep(value)
            var len= state.meta.remarks.length
            state.meta.remarks[len]=built_remark(rem)
        }


    },
    setday_plan_mounted_status(state, value) {
        state.day_plan_mounted_status = value
    },
    setQuery_feel(state, value) {
        state.meta.query_feel = value
    },
    setmeta_source(state, value) {
        state.meta.meta_source = value
    },
    setBooking_id(state, value) {
        state.item.booking_id = value
    },
    setFull_name(state, value) {
        state.item.full_name = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setEmail2(state, value) {
        state.item.email2 = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setActivated(state, value) {
        state.item.activated = value
    },
    setScore(state, value) {
        state.item.score = value
    },
    setNo_of_adults(state, value) {
        state.item.no_of_adults = value
    },
    setNo_of_children(state, value) {
        state.item.no_of_children = value
    },
    setAgency_id(state, value) {
        state.item.agency_id = value
    },
    setAgent_id(state, value) {
        state.item.agent_id = value
    },
    setMeal_day(state, value) {
        state.item.meal_day = value
    },
    setBill_pay(state, value) {
        state.item.bill_pay = value
    },
    setBudget(state, value) {
        state.item.budget = value
    },
    setdriver_pick_up_time(state, value) {
        state.item.driver_pick_up_time = value

        var date_ori=value;
        if(state.item.tour_location){
            for(var i=0;i < state.item.tour_location.length;i++ ){

                state.item.tour_location[i]['date_from']=moment(date_ori,'DD-M-YYYY').add(0,'days').format('DD-MM-YYYY');

                state.item.tour_location[i]['date_to']=moment(state.item.tour_location[i]['date_from'],'DD-M-YYYY').add(state.item.tour_location[i]['days'],'days').format('DD-MM-YYYY')
                date_ori=state.item.tour_location[i]['date_to'] ;
                // }

            }

        }
    },


    // setDriver_pick_up_time(state, value) {
    //     state.item.driver_pick_up_time = value
    // },
    setDriver_pick_up_time_updated(state, value) {
        state.item.driver_pick_up_time_updated = value
    },
    setDrop_address(state, value) {
        state.item.drop_address = value
    },
    setHandler_name(state, value) {
        state.item.handler_name = value
    },
    setHandler_no(state, value) {
        state.item.handler_no = value
    },
    setMeals_supplement(state, value) {
        state.item.meals_supplement = value
    },
    setMember_of_iti(state, value) {
        state.item.member_of_iti = value
    },
    setPackage_category(state, value) {
        state.item.package_category = value
    },
    setPickup_address(state, value) {
        state.item.pickup_address = value
    },

    setmoneycollect(state, value) {
        state.meta.moneycollect = value
    },
    setAirport_Hub(state, value) {
        state.meta.Airport_Hub = value
    },
    setVisa_Hub(state, value) {
        state.meta.Visa_Hub = value
    },
    setno_show(state, value) {
        state.meta.no_show = value
    },
    setdealership(state, value) {
        state.meta.dealership = value
    },
    setmeta_form_status(state, value) {
        state.meta.meta_form_status = value
    },
    // setcancelled_status(state, value) {
    //     state.meta.cancelled_status = value
    // },
    setmeta_members_allowed(state, value) {
        state.meta.meta_members_allowed = value
    },
    setmeta_nomination(state, value) {
        state.meta.meta_nomination = value
    },
    setmeta_gender(state, value) {
        state.meta.meta_gender = value
    },
    setmeta_dob(state, value) {
        state.meta.meta_dob = value
    },
    setvisa_status(state, value) {
        state.meta.visa_status = value
    },

    setpayment_status(state, value) {
        state.meta.payment_status = value
    },

    setmeta_relation(state, value) {
        state.meta.meta_relation = value
    },

    setmeta_rooming_status(state, value) {
        state.meta.meta_rooming_status = value
    },


    setmember_status(state, value) {
        state.meta.member_status = value
    },
    setmember_doc_tags(state, value) {
        state.meta.member_doc_tags = value
    },

   setfeedback_ques(state, value) {
        state.meta.feedback_ques = value
    },
   setpayments(state, value) {
        state.meta.payments = value
    },

    setkyc_sent(state, value) {
        state.meta.kyc_sent = value
    },

    setTotal_price(state, value) {
        state.item.total_price = value
    },
    setPickup_location(state, value) {
        state.item.pickup_location = value
    },
    setTour_cost(state, value) {
        state.item.tour_cost = value
    },
    setSelected_car(state, value) {
        state.item.selected_car = value
    },
    setStatus(state, value) {
        state.item.status = value
    },
    setSupplier_id(state, value) {
        state.item.supplier_id = value
    },
    setTotal_room(state, value) {
        state.item.total_room = value
    },
    setTotal_tour_days(state, value) {
        state.item.total_tour_days = value
    },
    setTraveller_id(state, value) {
        state.item.traveller_id = value
    },
    setmeta_flightprice(state, value) {
        state.meta.meta_flightprice = value
    },
    setmeta_flight(state, value) {
        state.meta.meta_flight = value
    },
    setmeta_family(state, value) {
        state.meta.meta_family = value
    },
    setmeta_welcome_mail(state, value) {
        state.meta.meta_welcome_mail = value
    },
    setmeta_registration_mail(state, value) {
        state.meta.meta_registration_mail = value
    },
    setmeta_itinerary_mail(state, value) {
        state.meta.meta_itinerary_mail = value
    },
    setmeta_banner(state, value) {
        state.meta.meta_banner = value
    },
    setmeta_incl_ex(state, value) {
        state.meta.meta_incl_ex = value
    },
    setmeta_closuer(state, value) {
        state.meta.meta_closuer = value
    },
    setmeta_exp_cost(state, value) {
        state.meta.meta_exp_cost = value
    },

    setmeta_exp_costflight(state, value) {
        state.meta.meta_exp_costflight = value
    },
    setmeta_meta_visa(state, value) {
        state.meta.meta_visa = value
    },
    setmeta_meta_passport(state, value) {
        state.meta.meta_passport = value
    },
    setmeta_meta_voucher(state, value) {
        state.meta.meta_voucher = value
    },
    setmeta_meta_insurance(state, value) {
        state.meta.meta_insurance = value
    },
    setmeta_meta_other(state, value) {
        state.meta.meta_other = value
    },
    setmeta_meta_photo_id(state, value) {
        state.meta.meta_photo_id = value
    },


addplacemodal(state, value) {
        state.addplacemodal = value
    },
    setTraveler_name(state, value) {
        state.item.full_name = value
    },
    setmeta_pickup_date(state, value) {
        state.meta.meta_pickup_date = value
    },
    setmeta_pickup_time(state, value) {
        state.meta.meta_pickup_time = value
    },
    setmeta_driver_name(state, value) {
        state.meta.meta_driver_name = value
    },
    setmeta_driver_no(state, value) {
        state.meta.meta_driver_no = value
    },
    setmeta_activate_sms(state, value) {
        state.meta.meta_activate_sms = value
    },



    setRemark(state, value) {
        // remark: [{"remark":"","agent":"","time":""}],
        var len= state.meta.remarks.length
        state.meta.remarks[len]=built_remark(value)

    },

    setEmail_second(state, value) {
        state.item.email_second = value
    },
    setdriver_pickup_date_time(state, value) {
        state.item.driver_pick_up_time = value;
console.log("I am in");
        // console.log(moment(moment(value).format("YYYY-MM-DD")).add(5,'days').format("DD MMM YYYY"))
        var date_ori=value;
        if(state.item.tour_location){
            for(var i=0;i < state.item.tour_location.length;i++ ){

                state.item.tour_location[i]['date_from']=moment(date_ori,'DD-M-YYYY').add(0,'days').format('DD-MM-YYYY');
                state.item.tour_location[i]['daynights']=parseInt(state.item.tour_location[i]['days'])+1;

                state.item.tour_location[i]['date_to']=moment(state.item.tour_location[i]['date_from'],'DD-M-YYYY').add(state.item.tour_location[i]['days'],'days').format('DD-MM-YYYY')
                date_ori=state.item.tour_location[i]['date_to'] ;


            }
            console.log(state.item.tour_location);
        }

        // state.item.tour_location
    },
    setItinerary_places(state, value) {



        if(state.item.itinerary_places!=null){
            // var    e_array=Object.entries(JSON.parse(state.item.itinerary_places))
            //
            // alert("not null");

            if( state.item.itinerary_places.hasOwnProperty(value)){
                // alert("up");
                //   console.log(this.objj);
                if(this.objj[locationid].hasOwnProperty(day)){

                }
            }
            // e_array.push(value)
            // state.item.itinerary_places=JSON.stringify(e_array)
            //   console.log(state.item.itinerary_places);
            state.item.itinerary_places=Object.assign(state.item.itinerary_places, value);

        }
        else {
            // alert("null");
//console.log(value);
            state.item.itinerary_places=value
            //  console.log(state.item.itinerary_places);
        }


    },
    setItinerary_places_time(state, value) {
        state.item.itinerary_places_time = value
    },
    setTour_id(state, value) {
        state.item.tour_id = value
    },
    setTour_name(state, value) {
        state.item.tour_name = value
    },
    setTour_location(state, value) {
        state.item.tour_location = value
    },
    setCreated_by(state, value) {
        state.item.created_by = value
    },
    setCreated_by_team(state, value) {
        state.item.created_by_team = value
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
    setcityid(state, value){
        state.cityid = value
    },
    sethotel(state, value){
        //   state.hotels =Object.assign( state.hotels,value)

        if(_.isEmpty(state.hotels)){
            state.hotels=Object.assign({},{[value.location_id] : value.hotel})
        }
        else {
            state.hotels=Object.assign(state.hotels,{[value.location_id] : value.hotel})
            state.hotels=Object.assign({},state.hotels)
        }

    },
    resetState(state) {
        state = Object.assign(state, initialState())
    },
    setplace(state, value){
        console.log(value.data)
// var places_city_id={};
//         state.places.cites.forEach((val) => {
//             var gg=val.id;
//             if(gg.split('-')[0]==state.cityid){
//                 places_city_id.push(value)
//             }
//
//
//         });
        if(_.isEmpty(state.places.places_city_id)){
            state.places.places_city_id=Object.assign({},{[value.id] : value.data})
        }
        else {
            state.places.places_city_id=Object.assign(state.places.places_city_id,{[value.id] : value.data})
            state.places.places_city_id=Object.assign({},state.places.places_city_id)
        }

        //  state.places.places_city_id.push(value.data)
    },
    setTourAll(state, loading) {
        state.tourAll = loading
    },
    setCityAll(state, value) {
        state.cityAll = value
    },
    setRemarks(state, value) {
        // state.meta.remarks.remark = value
        // state.meta.remarks.time = new Date().getTime();
        var len= state.meta.remarks.length
        state.meta.remarks[len]=built_remark(value)
    },
    setmeta_infant(state, value) {
        state.meta.meta_infant = value
    },
    setmeta_extra_bed(state, value) {
        state.meta.meta_extra_bed = value
    },


    setmeta_transport(state, value) {
        state.meta.meta_transport = value
    },
    setmeta_transport_no(state, value) {
        state.meta.meta_transport_no = value
    },
    setmeta_interactions(state, value) {

        if(state.meta.interactions.hasOwnProperty(todaydate()) ){
            state.meta.interactions[todaydate()].push(value)
        }
        else {
            state.meta.interactions[todaydate()] =[value]
        }

    },
    setmeta_interactionsfull(state, value) {
        // console.log('setmeta_interactionsfull');
        value.forEach( (dataObj) => {
            // console.log(dataObj.time)
            const today = new Date(dataObj.time*1000);
            const date1 = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

            var datetag=  date1;
            // console.log(datetag);
            if(state.meta.interactions.hasOwnProperty(datetag) ){
                console.log('in1');
                var i=0;
                var flag="nan";
                state.meta.interactions[datetag].forEach( (intObj) => {

                    // console.log('in2');
                    // console.log(intObj.time);
                    // console.log(dataObj.time);
                    if(intObj.time===dataObj.time){
                        console.log('found');

                        flag="found";
                    }


                    i++;
                });
                if(flag!=='found'){
                    console.log('in3');
                    state.meta.interactions[datetag].push({"title":"Remark","status":"Done","type":"remark","remark":dataObj.remark,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":dataObj.time})
                }
            }
            else {
                console.log('in4');
                state.meta.interactions[datetag] =[{"title":"Remark","status":"Done","type":"remark","remark":dataObj.remark,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":dataObj.time}]
            }


        });

        // if(state.meta.interactions.hasOwnProperty(todaydate()) ){
        //     state.meta.interactions[todaydate()].push(value)
        // }
        // else {
        //     state.meta.interactions[todaydate()] =[value]
        // }

    },


}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
