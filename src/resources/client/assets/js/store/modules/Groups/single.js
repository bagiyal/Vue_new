import built_remark from "../../../mixins/builtremark";
import todaydate from "../../../mixins/todaydate";
import uploadfile from '../../../mixins/uploadfile'
const Swal = require('sweetalert2');
function initialState() {
    return {
        item: {
            id: null,
            booking_id: null,
            full_name: null,
            email: null,
            phone: null,
            activated: 1,
            no_of_adults: 1,
            no_of_children: 0,
            agency_id: null,
            agent_id: null,
            meal_day: null,
            bill_pay: null,
            driver_pick_up_time: null,
            driver_pick_up_time_updated: null,
            drop_address: null,
            handler_name: document.querySelector("meta[name='user-name']").getAttribute('content'),
            handler_no: document.querySelector("meta[name='user-phone']").getAttribute('content'),
            meals_supplement: {'bf':true,'l':false,'d':false},
            package_category: null,
            pickup_address: null,
            pickup_location: null,
            total_price: null,
            tour_cost:  [{'cost':'','type':''}],
            selected_car: null,
            status: null,
            supplier_id: null,
            total_room: {'single':1,'double':0,'triple':0},
            total_tour_days: null,
            traveller_id: null,
            tour_id: null,
            itinerary_places: null,
            itinerary_places_time: null,
            group: [],
            group_name: '',
            group_id: null,
            group_logo: '',
            group_place: null,
            members: null,
            tour_cost_tax: null,
            tour_handler: null,
            tour_name: null,
            tour_location: null,
            created_by: null,
            created_by_team: null,
        },
        usersAll: [],
        teamsAll: [],

        loading: false,
        tourAll:[],
        cityAll: [],
        places:{ 'places_city_id':{},'cites':[]},
        hotels:{},
        cityid:null,
        csvupload:false,
        csvupload_reg:false,

        meta:{
            travel_Hubs:[],
            remarks:[],
            meta_infant:0,
            meta_extra_bed:0,
            meta_transport:null,
            meta_transport_no:null,
            meta_source:null,
            meta_flightprice:null,
            meta_flight:[{"date": "", "dep_code": "", "arr_date": "","arr_code": "", "ticket": "", "url": "","dep_name":"","arr_name":"","type":"Flight"}],
            meta_welcome_mail:null,
            meta_confirmation_mail:null,
            meta_doc_completion_mail:null,
            meta_incl_ex:null,
            meta_closuer:null,
            meta_exp_cost:[],
            meta_exp_costflight:[],
            meta_pickup_date:null,
            meta_pickup_time:null,
            markup1:{'percent':true,'value':''},
            markup2:{'percent':true,'value':''},
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
            meta_visa:[{"url":"","updated":false}],
            meta_passport:[{"exp_date":"","issue_date":"","issue_place":"","name_first":"","name_last":"","passportno":"","url":"","url2":"","pdf":"","updated":false}],
            meta_voucher:[{"url":"","updated":false}],
            meta_insurance:[{"url":"","updated":false}],
            meta_other:[{"url":"","updated":false}],
            meta_photo_id:[{"id_num":"","id_name":"","mem_name":"","url":"","updated":false}],
            meta_doc_req:[],
            // meta_kyc_req:[],
            // kyc_check:false,
            // doc_kyc_list:[],
            meta_group_bg_color:'#ca0004',
            meta_group_bg_image:'',
            meta_registration_mail:null,
            meta_non_member_list:{'button_title':'','exhibitor':[],'share':false,'support':[{'name':'','email':'','mobile':''}]},
            meta_embed_button:{'instruction':'','title':'','link':''},
            meta_live_expense:[],
            meta_visa_hist:[],
            meta_insu_hist:[],
            meta_voucher_hist:[],
            meta_other_hist:[],
            meta_photo_id_hist:[],
            meta_pass_hist:[],
            meta_ticket_hist:[],
            meta_flight_hist:[],
            meta_stock:[],
            meta_forms:[],
            feedback_ques:[],
            managers_data:[],
            approvers_data:{"levels":4,"L1":null,"L2":null,"L3":null,"L4":null},


            meta_cost_history:[],
            pre_populated_ques:{'data':[{'question':'','file':'','question_type':'populate','data':[]}],'status':false},
            hub_master:{'data':[],'file':''},
            // meta_live_expense:[{'tour_manager':101,     'date':110,     'type':120,     'currency':'INR',     'cost':140,     'remark':140, 'doc':'445' },
            //     {'tour_manager':310,     'date':410,     'type':7130,     'currency':'INR',     'cost':107,     'remark':103,'doc':'445'  }
            // ]
             },
        meta_data:null,
        meta_form_id:'',



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
        search:'',
        column:'',
        all:[],
        all_members:[],
        all_members_filtered:[],
        all_member_upload_sheet:[],
        add_place_modal_status:0,
        day_plan_mounted_status:false,
        uploaded_members:[],

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
    csvupload: state => state.csvupload,
    csvupload_reg: state => state.csvupload_reg,
    hotels: state => state.hotels,
    cityAll: state => state.cityAll,
    meta: state => state.meta,
    meta_data: state => state.meta_data,
    placedata: state => state.placedata,
    addplacemodal: state => state.addplacemodal,
    tourdata: state => state.tourdata,
    meta_form_id: state => state.meta_form_id,
    search: state => state.search,
    column: state => state.column,
    all: state => state.all,
    all_members: state => state.all_members,
    all_members_filtered: state => state.all_members_filtered,
    all_member_upload_sheet: state => state.all_member_upload_sheet,
    add_place_modal_status: state => state.add_place_modal_status,
    day_plan_mounted_status: state => state.day_plan_mounted_status,
    excel_uploaded_members: state => state.uploaded_members

}

const actions = {

    setday_plan_mounted_status({ commit }, value) {
        commit('setday_plan_mounted_status', value)
    },
    setcsvupload({ commit }, value) {
        commit('setcsvupload', value)
    },
    setcsvupload_reg({ commit }, value) {
        commit('setcsvupload_reg', value)
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
    setsearch({ commit }, value) {
        commit('setsearch', value)
    },
    setsearch2({ commit }, value) {
        commit('setsearch2', value)
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
            meta_data.travel_Hubs=JSON.stringify(state.meta.travel_Hubs);
            meta_data.meta_voucher=JSON.stringify(state.meta.meta_voucher);
            meta_data.meta_insurance=JSON.stringify(state.meta.meta_insurance);
            meta_data.meta_other=JSON.stringify(state.meta.meta_other);
            meta_data.meta_photo_id=JSON.stringify(state.meta.meta_photo_id);
            meta_data.meta_doc_req=JSON.stringify(state.meta.meta_doc_req);
       //     meta_data.meta_kyc_req=JSON.stringify(state.meta.meta_kyc_req);


            meta_data.meta_non_member_list=JSON.stringify(state.meta.meta_non_member_list);
            meta_data.meta_embed_button=JSON.stringify(state.meta.meta_embed_button);
            meta_data.meta_live_expense=JSON.stringify(state.meta.meta_live_expense);

            meta_data.meta_visa_hist=JSON.stringify(state.meta.meta_visa_hist);
            meta_data.meta_insu_hist=JSON.stringify(state.meta.meta_insu_hist);
            meta_data.meta_voucher_hist=JSON.stringify(state.meta.meta_voucher_hist);
            meta_data.meta_other_hist=JSON.stringify(state.meta.meta_other_hist);
            meta_data.meta_photo_id_hist=JSON.stringify(state.meta.meta_photo_id_hist);
            meta_data.meta_pass_hist=JSON.stringify(state.meta.meta_pass_hist);
            meta_data.meta_ticket_hist=JSON.stringify(state.meta.meta_ticket_hist);
            meta_data.meta_flight_hist=JSON.stringify(state.meta.meta_flight_hist);
            meta_data.meta_stock=JSON.stringify(state.meta.meta_stock);
            meta_data.meta_forms=JSON.stringify(state.meta.meta_forms);
            meta_data.feedback_ques=JSON.stringify(state.meta.feedback_ques);
            meta_data.managers_data=JSON.stringify(state.meta.managers_data);
            meta_data.approvers_data=JSON.stringify(state.meta.approvers_data);
            meta_data.meta_cost_history=JSON.stringify(state.meta.meta_cost_history);
            meta_data.pre_populated_ques=JSON.stringify(state.meta.pre_populated_ques);
            meta_data.hub_master=JSON.stringify(state.meta.hub_master);




            meta_data.remarks=JSON.stringify(state.meta.remarks);


            meta_data.meta_flight=JSON.stringify(state.meta.meta_flight);

            params.set('meta', JSON.stringify(meta_data));


            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if(fieldName=='total_room'){

                    params.set(fieldName, JSON.stringify(fieldValue));
//console.log(JSON.stringify(fieldValue))
                }
                else if(fieldName=='group'){

                    params.set(fieldName, JSON.stringify(fieldValue));

                }
                else   if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                }
                else {

                    if (fieldValue && typeof fieldValue[0] !== 'object') {

                        if(fieldName=='itinerary_places'){
                            //   console.log("itinerary_places");
                            let newobj={};
                            console.log(fieldValue);
                            console.log(state.places.cites)

                            state.places.cites.forEach( (dataObj) => {
                                console.log(dataObj['id']);
                                newobj[dataObj['id']]=fieldValue[dataObj['id']];

                            });

                            console.log(newobj);
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
            // console.log( "all params:");

            if (state.item.itinerary_places_time === null) {
                params.delete('itinerary_places_time');
            }
            // console.log( params);


            axios.post('/api/v1/groups', params)
                .then(response => {
                    let login = new FormData();
                    login.set("id",  response.data.data.id)
                    login.set("code", Math.floor(100000 + Math.random() * 900000))
                    axios.post('/api/v1/save_manager_login', login)
//register mail and csv upload



                    // manager_login_code
                    if(state.csvupload_reg=='reg'){

                        if(state.csvupload){
                            let params = new FormData();
                            params.set("members", state.all_member_upload_sheet);
                            params.set("ref_id", 'excel');
                            params.set("collection_name", "groupexcel:doc");
                            params.append("file",state.csvupload);
                            params.set("ref_key", response.data.data.id);
                            params.set("type", 'reg');
                            axios.post('/api/v1/uploadcsv_reg_with_excel_json', params)
                                .then(res=>{

                                    if(res.data.status=='Success'){

                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem':res.data.invalid_mem,'invalid_mem_status':res.data.flag,'upload_status':res.data.msg,'error_section':false};

                                        resolve(arr)
                                    }
                                    else{
                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false,'error_section':false};

                                        resolve(arr)
                                    }
                                })
                                .catch(error => {
                                    var arr={
                                        'id':response.data.data.id,
                                        'msg':'success',
                                        'invalid_mem':JSON.parse( state.all_member_upload_sheet)[0].valid.length,
                                        'invalid_mem_status':true,
                                        'upload_status':true,
                                        'error_section':true
                                    };

                                    resolve(arr)


                                })


                        }


                    }
                    else  if(state.csvupload_reg=='pre'){

                        if(state.csvupload){
                            let params = new FormData();
                            params.set("members", state.all_member_upload_sheet);
                            params.set("ref_id", 'excel');
                            params.set("collection_name", "groupexcel:doc");
                            params.append("file",state.csvupload);
                            params.set("ref_key", response.data.data.id);
                            params.set("type", 'pre');
                            axios.post('/api/v1/uploadcsv_reg_with_excel_json', params)
                                .then(res=>{

                                    if(res.data.status=='Success'){

                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem':res.data.invalid_mem,'invalid_mem_status':res.data.flag,'upload_status':res.data.msg,'error_section':false};

                                        resolve(arr)
                                    }
                                    else{
                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false,'error_section':false};

                                        resolve(arr)
                                    }
                                })
                                .catch(error => {
                                    var arr={'id':response.data.data.id,'msg':'success','invalid_mem':JSON.parse( state.all_member_upload_sheet)[0].valid.length,'invalid_mem_status':true,'upload_status':true,'error_section':true};

                                    resolve(arr)


                                })


                        }


                    }
                    else {


                        let params = new FormData();
                        params.set("members", state.all_member_upload_sheet);
                        params.set("ref_id", response.data.data.booking_id);
                        params.set("collection_name", "groupexcel:doc");
                        params.append("file",state.csvupload);
                        params.set("ref_key",response.data.data.id );
                        axios.post('/api/v1/uploadcsv_with_excel_json', params)
                            .then(res=>{
                                //
                                if(res.data.status=='Success'){

                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem':res.data.invalid_mem,'invalid_mem_status':res.data.flag,'upload_status':res.data.msg};


                                    resolve(arr)
                                }
                                else{
                                    var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false};
                                    resolve(arr)
                                }
                            })


                    }

                })
                .catch(error => {
                    console.log(error)
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


                            params.set(fieldName, JSON.stringify(newobj));

                        }
                        else  if(fieldName=='meals_supplement'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }else  if(fieldName=='total_room'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }
                        else  if(fieldName=='group'){

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
            meta_data.travel_Hubs=JSON.stringify(state.meta.travel_Hubs);
            meta_data.meta_voucher=JSON.stringify(state.meta.meta_voucher);
            meta_data.meta_insurance=JSON.stringify(state.meta.meta_insurance);
            meta_data.meta_other=JSON.stringify(state.meta.meta_other);
            meta_data.meta_photo_id=JSON.stringify(state.meta.meta_photo_id);
            meta_data.meta_non_member_list=JSON.stringify(state.meta.meta_non_member_list);
            meta_data.meta_doc_req=JSON.stringify(state.meta.meta_doc_req);
         //   meta_data.meta_kyc_req=JSON.stringify(state.meta.meta_kyc_req);
            meta_data.meta_embed_button=JSON.stringify(state.meta.meta_embed_button);
            meta_data.meta_live_expense=JSON.stringify(state.meta.meta_live_expense);

            meta_data.meta_visa_hist=JSON.stringify(state.meta.meta_visa_hist);
            meta_data.meta_insu_hist=JSON.stringify(state.meta.meta_insu_hist);
            meta_data.meta_voucher_hist=JSON.stringify(state.meta.meta_voucher_hist);
            meta_data.meta_other_hist=JSON.stringify(state.meta.meta_other_hist);
            meta_data.meta_photo_id_hist=JSON.stringify(state.meta.meta_photo_id_hist);
            meta_data.meta_pass_hist=JSON.stringify(state.meta.meta_pass_hist);
            meta_data.meta_ticket_hist=JSON.stringify(state.meta.meta_ticket_hist);
            meta_data.meta_flight_hist=JSON.stringify(state.meta.meta_flight_hist);
            meta_data.meta_stock=JSON.stringify(state.meta.meta_stock);
            meta_data.meta_forms=JSON.stringify(state.meta.meta_forms);
            meta_data.feedback_ques=JSON.stringify(state.meta.feedback_ques);
            meta_data.managers_data=JSON.stringify(state.meta.managers_data);
            meta_data.approvers_data=JSON.stringify(state.meta.approvers_data);
            meta_data.meta_cost_history=JSON.stringify(state.meta.meta_cost_history);
            meta_data.pre_populated_ques=JSON.stringify(state.meta.pre_populated_ques);
            meta_data.hub_master=JSON.stringify(state.meta.hub_master);


            meta_data.meta_flight=JSON.stringify(state.meta.meta_flight);
            // meta_data.sellingprice1=JSON.stringify(state.meta.sellingprice1);
            // meta_data.sellingprice2=JSON.stringify(state.meta.sellingprice2);
            meta_data.remarks=JSON.stringify(state.meta.remarks);
            params.set('meta', JSON.stringify(meta_data));

            axios.post('/api/v1/groups/' + state.item.id, params)
                .then(response => {

                        if(state.csvupload_reg =='reg'){

                            if(state.csvupload){
                                let params = new FormData();
                                params.set("members", state.all_member_upload_sheet);
                                params.set("ref_id", 'excel');
                                params.set("collection_name", "groupexcel:doc");
                                params.append("file",state.csvupload);
                                params.set("ref_key", response.data.data.id);
                                params.set("type", 'reg');
                                axios.post('/api/v1/uploadcsv_reg_with_excel_json', params)

                                    .then(res=>{
                                        //
                                        state.csvupload_reg='';
                                        state.csvupload='';
                                        if(res.data.status){

                                            state.uploaded_members=_.cloneDeep(res.data.data);


                                            Swal.fire({
                                                type: 'success',
                                                icon: 'success',
                                                title: 'File has been uploaded successfully, Members will be uploaded soon.',
                                                showConfirmButton: true,
                                                timer: 3000

                                            })

                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem':res.data.invalid_mem,'invalid_mem_status':res.data.flag,'upload_status':res.data.msg,'error_section':false};

                                            resolve(arr)
                                        }
                                        else{
                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false,'error_section':false};

                                            resolve(arr)

                                            Swal.fire({
                                                type: 'error',
                                                icon: 'error',
                                                title: res.data.error,
                                                showConfirmButton: true,
                                                timer: 3000

                                            })
                                        }
                                    })
                                    .catch(error => {
                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem':JSON.parse( state.all_member_upload_sheet)[0].valid.length,'invalid_mem_status':true,'upload_status':true,'error_section':true};

                                        resolve(arr)
                                        state.csvupload_reg='';
                                        state.csvupload='';

                                    })


                            }


                        }
                        else if(state.csvupload_reg =='pre'){

                            if(state.csvupload){
                                let params = new FormData();
                                params.set("members", state.all_member_upload_sheet);
                                params.set("ref_id", 'excel');
                                params.set("collection_name", "groupexcel:doc");
                                params.append("file",state.csvupload);
                                params.set("ref_key", response.data.data.id);
                                params.set("type", 'pre');
                                axios.post('/api/v1/uploadcsv_reg_with_excel_json', params)

                                    .then(res=>{
                                        //
                                        state.csvupload_reg='';
                                        state.csvupload='';

                                        if(res.data.status){

                                            state.uploaded_members=_.cloneDeep(res.data.data);


                                            Swal.fire({
                                                type: 'success',
                                                icon: 'success',
                                                title: 'File has been uploaded successfully, Members will be uploaded soon.',
                                                showConfirmButton: true,
                                                timer: 3000

                                            })

                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem':res.data.invalid_mem,'invalid_mem_status':res.data.flag,'upload_status':res.data.msg,'error_section':false};



                                            resolve(arr)
                                        }
                                        else{
                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false,'error_section':false};

                                            resolve(arr)
                                            Swal.fire({
                                                type: 'error',
                                                icon: 'error',
                                                title: res.data.error,
                                                showConfirmButton: true,
                                                timer: 3000

                                            })
                                        }



                                    })
                                    .catch(error => {
                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem':JSON.parse( state.all_member_upload_sheet)[0].valid.length,'invalid_mem_status':true,'upload_status':true,'error_section':true};

                                        resolve(arr)
                                        state.csvupload_reg='';
                                        state.csvupload='';

                                    })

                            }


                        }
                        else if(state.csvupload_reg =='populated'){


                            if(state.csvupload){
                                let params = new FormData();
                                params.set("members", state.all_member_upload_sheet);
                                params.set("ref_id", 'excel');
                                params.set("collection_name", "groupexcel:doc");
                                params.append("file",state.csvupload);
                                params.set("ref_key", response.data.data.id);
                                params.set("type", 'populated');
                                axios.post('/api/v1/uploadcsv_reg_with_excel_json', params)

                                    .then(res=>{
                                        //
                                        state.csvupload_reg='';
                                        state.csvupload='';

                                        if(res.data.status){

                                            state.uploaded_members=_.cloneDeep(res.data.data);

                                            Swal.fire({
                                                type: 'success',
                                                icon: 'success',
                                                title: 'File has been uploaded successfully, Members will be uploaded soon.',
                                                showConfirmButton: true,
                                                timer: 3000
                                            })

                                            var arr={
                                                'id':response.data.data.id,
                                                'msg':'success',
                                                'invalid_mem':res.data.invalid_mem,
                                                'invalid_mem_status':res.data.flag,
                                                'upload_status':res.data.msg,
                                                'error_section':false
                                            };

                                            resolve(arr)
                                        }
                                        else{
                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false,'error_section':false};

                                            resolve(arr)
                                            Swal.fire({
                                                type: 'error',
                                                icon: 'error',
                                                title: res.data.error,
                                                showConfirmButton: true,
                                                timer: 3000

                                            })
                                        }



                                    })
                                    .catch(error => {
                                        var arr={'id':response.data.data.id,'msg':'success','invalid_mem':JSON.parse( state.all_member_upload_sheet)[0].valid.length,'invalid_mem_status':true,'upload_status':true,'error_section':true};

                                        resolve(arr)
                                        state.csvupload_reg='';
                                        state.csvupload='';

                                    })

                            }


                        }
                        else {


                            // console.log(state.csvupload_reg);
                            // console.log(state.all_member_upload_sheet);
                            if(state.csvupload!=''){
                                let params = new FormData();
                                params.set("members", state.all_member_upload_sheet);
                                params.set("ref_id", response.data.data.booking_id);
                                params.set("collection_name", "groupexcel:doc");
                                params.append("file",state.csvupload);
                                params.set("ref_key",response.data.data.id );
                                axios.post('/api/v1/uploadcsv_with_excel_json', params)
                                    .then(res=>{
                                        //
                                        state.csvupload_reg='';
                                        state.csvupload='';
                                        if(res.data.status=='Success'){

                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem':res.data.invalid_mem,'invalid_mem_status':res.data.flag,'upload_status':res.data.msg};


                                            resolve(arr)
                                        }
                                        else{
                                            var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false};
                                            resolve(arr)
                                        }
                                    })
                            }
                            else{
                                var arr={'id':response.data.data.id,'msg':'success','invalid_mem_status':false};
                                resolve(arr)
                            }


//                 if(state.csvupload){
//
//
//
//                     uploadfile("groupcsv", response.data.data.id, state.csvupload, response.data.data.booking_id).then(response2 => {
// //console.log(response2)
//                         if(response2.data==='Success'){
//
//                             var arr={'id':response.data.data.id,'msg':'success'};
//
//
//                             resolve(arr)
//                         }
//                         else if(response2.data.includes("Invalid")){
//
//
//                             alert(response2.data);
//                             var arr={'id':response.data.data.id,'msg':'fail'};
//
//
//                             resolve(arr)
//
//                         }
//                         else {
//
//                             reject(response2.data)
//                         }
//
//                     })
//
//                 }
//                 else{
//                     resolve(response.data.data)
//                 }
                        }



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
        axios.get('/api/v1/groups/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        //     dispatch('fetchUsersAll')
        // dispatch('fetchTeamsAll')
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
        // console.log("fetchplace");
        commit('setcityid', id)
        axios.get('/api/v1/city/ofcity/'+id)
            .then(response => {
                commit('setplace', {data:response.data.data, id:id})
                // console.log("----------");
                if(state.day_plan_mounted_status){
                    state.add_place_modal_status++;
                }


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
    setBooking_id({ commit }, value) {
        commit('setBooking_id', value)
    },
    setFull_name({ commit }, value) {
        commit('setFull_name', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setActivated({ commit }, value) {
        commit('setActivated', value)
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
    setDriver_pick_up_time({ commit }, value) {
        commit('setDriver_pick_up_time', value)
    },
    setDriver_pick_up_time_updated({ commit }, value) {
        commit('setDriver_pick_up_time_updated', value)
    },
    setDrop_address({ commit }, value) {
        commit('setDrop_address', value)
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
    setPackage_category({ commit }, value) {
        commit('setPackage_category', value)
    },
    setPickup_address({ commit }, value) {
        commit('setPickup_address', value)
    },
    setPickup_location({ commit }, value) {
        commit('setPickup_location', value)
    },
    setTotal_price({ commit }, value) {
        commit('setTotal_price', value)
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
    setTour_id({ commit }, value) {
        commit('setTour_id', value)
    },
    setItinerary_places({ commit }, value) {
        commit('setItinerary_places', value)
    },
    setItinerary_places_time({ commit }, value) {
        commit('setItinerary_places_time', value)
    },
    setGroup({ commit }, value) {
        commit('setGroup', value)
    },
    setGroup_name({ commit }, value) {
        commit('setGroup_name', value)
    },
    setGroup_id({ commit }, value) {
        commit('setGroup_id', value)
    },
    setGroup_logo({ commit }, value) {
        commit('setGroup_logo', value)
    },

    setGroup_place({ commit }, value) {
        commit('setGroup_place', value)
    },
    setMembers({ commit }, value) {
        commit('setMembers', value)
    },
    setTour_cost_tax({ commit }, value) {
        commit('setTour_cost_tax', value)
    },
    setTour_handler({ commit }, value) {
        commit('setTour_handler', value)
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
    setmeta_flightprice({ commit }, value) {
        commit('setmeta_flightprice', value)
    },
    setmeta_flight({ commit }, value) {
        commit('setmeta_flight', value)
    },
    setmeta_incl_ex({ commit }, value) {
        commit('setmeta_incl_ex', value)
    },
    setmeta_welcome_mail({ commit }, value) {
        commit('setmeta_welcome_mail', value)
    },
    setmeta_doc_completion_mail({ commit }, value) {
        commit('setmeta_doc_completion_mail', value)
    },

    setmeta_confirmation_mail({ commit }, value) {
        commit('setmeta_confirmation_mail', value)
    },

    setmeta_registration_mail({ commit }, value) {
        commit('setmeta_registration_mail', value)
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
        params.set('type','group');
        // axios.post('/api/webservices/mail_formats' , params)
        //     .then(response => {
        //         var welcome_mail=response.data[0]['welcome_note'];
        //         var closure_mail=response.data[1]['closure_note'];
        //         var incex_note=response.data[2]['incex_note'];
        //         var register_note=response.data[3]['register_note'];
        //
        //         commit('setmeta_welcome_mail', welcome_mail);
        //         commit('setmeta_closuer', closure_mail);
        //         commit('setmeta_incl_ex', incex_note);
        //         commit('setmeta_registration_mail', register_note);
        //
        //
        //
        //     });
    },
    setmeta_extra_bed({ commit }, value) {
        commit('setmeta_extra_bed', value)
    },
    setcolumn({ commit }, value) {
        commit('setcolumn', value)
    }
    ,

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
    setmeta_form_id({ commit }, value) {
        commit('setmeta_form_id', value)
    },
    setall_members({ commit }, value) {
        commit('setall_members', value)
    },
    setall_members_filtered({ commit }, value) {
        commit('setall_members_filtered', value)
    },
    setall_member_upload_sheet({ commit }, value) {
        commit('setall_member_upload_sheet', value)
    },
    setpre_populated_ques({ commit }, value) {

        commit('setpre_populated_ques', value)
    },
    sethub_master({ commit }, value) {

        commit('sethub_master', value)
    },


}

const mutations = {
    setItem(state, item) {
        // console.log('here-----------',item.uploaded_sheets);
        state.item = item
        state.uploaded_members=item.uploaded_sheets;
        state.item.itinerary_places=JSON.parse(item.itinerary_places);
        // state.item.meta_flight=JSON.parse(item.meta_flight);
     //   console.log("tour_cost");
        state.item.tour_location=JSON.parse(item.tour_location);
       // console.log("tour_cost1");
        state.item.meals_supplement=JSON.parse(item.meals_supplement);
     //   console.log("tour_cost2");
        state.item.total_room=JSON.parse(item.total_room);
       // console.log("tour_cost3");
        state.item.tour_cost=JSON.parse(item.tour_cost);
        state.item.group=JSON.parse(item.group);

        // console.log("tour_cost");
        // console.log( state.item.tour_cost);
        // state.meta.remarks=JSON.parse(meta.remarks);
        // console.log("tour_location after");
        // console.log(state.item.tour_location);

        state.meta_data = item.get_meta;

        // console.log(state.meta_data);

        state.meta_data.forEach(function(e){
            if(e.meta_key=='meta_flight'){

                state.meta.meta_flight=JSON.parse(e.meta_value);
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
            if(e.meta_key=='meta_doc_completion_mail'){

                state.meta.meta_doc_completion_mail=e.meta_value;
            }

            if(e.meta_key=='meta_confirmation_mail'){

                state.meta.meta_confirmation_mail=e.meta_value;
            }

            if(e.meta_key=='meta_registration_mail'){

                state.meta.meta_registration_mail=e.meta_value;
            }


            if(e.meta_key=='meta_incl_ex'){

                state.meta.meta_incl_ex=e.meta_value;
            }
            if(e.meta_key=='meta_closuer'){

                state.meta.meta_closuer=e.meta_value;
            }
            if(e.meta_key=='meta_exp_cost'){

                state.meta.meta_exp_cost=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_exp_costflight'){

                state.meta.meta_exp_costflight=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_pickup_date'){

                state.meta.meta_pickup_date=e.meta_value;
            }
            if(e.meta_key=='meta_pickup_time'){

                state.meta.meta_pickup_time=e.meta_value;
            }
            if(e.meta_key=='meta_visa'){

                state.meta.meta_visa=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_passport'){

                state.meta.meta_passport=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='travel_Hubs'){

                state.meta.travel_Hubs=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_voucher'){

                state.meta.meta_voucher=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_insurance'){

                state.meta.meta_insurance=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_other'){

                state.meta.meta_other=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_photo_id'){

                state.meta.meta_photo_id=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_doc_req'){

                state.meta.meta_doc_req=JSON.parse(e.meta_value);
            }
            // if(e.meta_key=='meta_kyc_req'){
            //
            //     state.meta.meta_kyc_req=JSON.parse(e.meta_value);
            // }

            if(e.meta_key=='meta_non_member_list'){

                state.meta.meta_non_member_list=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_embed_button'){

                state.meta.meta_embed_button=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_live_expense'){

                state.meta.meta_live_expense=JSON.parse(e.meta_value);
                state.all=JSON.parse(e.meta_value);

            }

            if(e.meta_key=='meta_visa_hist'){

 state.meta.meta_visa_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_insu_hist'){

 state.meta.meta_insu_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_voucher_hist'){

 state.meta.meta_voucher_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_other_hist'){

 state.meta.meta_other_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_photo_id_hist'){

 state.meta.meta_photo_id_hist=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_pass_hist'){

 state.meta.meta_pass_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_ticket_hist'){

 state.meta.meta_ticket_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_flight_hist'){
 state.meta.meta_flight_hist=JSON.parse(e.meta_value);

            }
            if(e.meta_key=='meta_stock'){
                state.meta.meta_stock=JSON.parse(e.meta_value);

            }
            if(e.meta_key=='meta_forms'){
                state.meta.meta_forms=JSON.parse(e.meta_value);

            }
            if(e.meta_key=='feedback_ques'){

                state.meta.feedback_ques=JSON.parse(e.meta_value);
            }

             if(e.meta_key=='managers_data'){

                state.meta.managers_data=JSON.parse(e.meta_value);
            }
             if(e.meta_key=='approvers_data'){

                state.meta.approvers_data=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_cost_history'){

                state.meta.meta_cost_history=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='pre_populated_ques'){

                state.meta.pre_populated_ques=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='hub_master'){

                state.meta.hub_master=JSON.parse(e.meta_value);
            }



            if(e.meta_key=='meta_transport_no'){

                state.meta.meta_transport_no=e.meta_value;
            }
            if(e.meta_key=='meta_driver_name'){

                state.meta.meta_driver_name=e.meta_value;
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
            if(e.meta_key=='meta_doc_req'){

                state.meta.meta_doc_req=JSON.parse(e.meta_value);
            }
            // if(e.meta_key=='meta_kyc_req'){
            //
            //     state.meta.meta_kyc_req=JSON.parse(e.meta_value);
            // }

            if(e.meta_key=='meta_non_member_list'){

                state.meta.meta_non_member_list=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_embed_button'){

                state.meta.meta_embed_button=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_live_expense'){

                state.meta.meta_live_expense=JSON.parse(e.meta_value);
            }
             if(e.meta_key=='meta_visa_hist'){

                state.meta.meta_visa_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_insu_hist'){

                state.meta.meta_insu_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_voucher_hist'){

                state.meta.meta_voucher_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_other_hist'){

                state.meta.meta_other_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_photo_id_hist'){

                state.meta.meta_photo_id_hist=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_pass_hist'){

                state.meta.meta_pass_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_ticket_hist'){

                state.meta.meta_ticket_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_flight_hist'){

                state.meta.meta_flight_hist=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='meta_stock'){

                state.meta.meta_stock=JSON.parse(e.meta_value);
            }

            if(e.meta_key=='meta_forms'){

                state.meta.meta_forms=JSON.parse(e.meta_value);
            }



            if(e.meta_key=='meta_group_bg_color'){

                state.meta.meta_group_bg_color=e.meta_value;
            }
            if(e.meta_key=='meta_group_bg_image'){

                state.meta.meta_group_bg_image=e.meta_value;
            }





        });

    },
    setsearch(state, val) {
        state.search = val
        let arr = [];



            if (state.search !== '') {

                // console.log(state.actualdata),
                state.all.forEach(post => {
                    let f = "empty";
                    state.column.forEach((dataObj) => {
                        console.log(dataObj)
                        console.log(post[dataObj])
                        if (f === "empty" && post[dataObj]!==null) {
                            if (post[dataObj].toLowerCase().includes(state.search.toLowerCase())) {

                                f = "found";
                                arr.push(post);

                            }
                        }

                    });

                });

                console.log(arr);

                state.meta.meta_live_expense = _.cloneDeep(arr);

            } else {
                state.meta.meta_live_expense =_.cloneDeep( state.all)

            }




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
    setcolumn(state, val) {
        state.column = val
    },
    setBooking_id(state, value) {
        state.item.booking_id = value
    },
    setTraveler_name(state, value) {
        state.item.full_name = value
    },
    setFull_name(state, value) {
        state.item.full_name = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setActivated(state, value) {
        state.item.activated = value
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
    setcityid(state, value){
        state.cityid = value
    },
    setdriver_pick_up_time(state, value) {
        state.item.driver_pick_up_time = value

        var date_ori=value;
        if(state.item.tour_location){
            for(var i=0;i < state.item.tour_location.length;i++ ){

                state.item.tour_location[i]['date_from']=moment(date_ori,'DD-M-YYYY').add(0,'days').format('DD-MM-YYYY');

                state.item.tour_location[i]['date_to']=moment(state.item.tour_location[i]['date_from'],'DD-M-YYYY').add(state.item.tour_location[i]['days'],'days').format('DD-MM-YYYY')
                    // moment(moment(state.item.tour_location[i]['date_from']).format("YYYY-MM-DD")).add(state.item.tour_location[i]['days'],'days').format("DD MMM YYYY");
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
    setPackage_category(state, value) {
        state.item.package_category = value
    },
    setPickup_address(state, value) {
        state.item.pickup_address = value
    },
    setPickup_location(state, value) {
        state.item.pickup_location = value
    },
    setTotal_price(state, value) {
        state.item.total_price = value
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
    setTour_id(state, value) {
        state.item.tour_id = value
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
                   // moment(moment(state.item.tour_location[i]['date_from']).format("YYYY-MM-DD")).add(state.item.tour_location[i]['days'],'days').format("DD MMM YYYY");
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
    setGroup(state, value) {
        state.item.group = value
    },
    setGroup_name(state, value) {
        state.item.group_name = value
    },
    setGroup_id(state, value) {
        state.item.group_id = value
    },
    setGroup_logo(state, value) {
        state.item.group_logo = value
    },
    setGroup_place(state, value) {
        state.item.group_place = value
    },
    setMembers(state, value) {
        state.item.members = value
    },
    setTour_cost_tax(state, value) {
        state.item.tour_cost_tax = value
    },
    setTour_handler(state, value) {
        state.item.tour_handler = value
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
    resetState(state) {
        state = Object.assign(state, initialState())
    },
    setmeta_flightprice(state, value) {
        state.meta.meta_flightprice = value
    },
    setmeta_flight(state, value) {
        state.meta.meta_flight = value
    },
    setmeta_welcome_mail(state, value) {
        state.meta.meta_welcome_mail = value
    },
    setmeta_doc_completion_mail(state, value) {
        state.meta.meta_doc_completion_mail= value
    },

    setmeta_confirmation_mail(state, value) {
        state.meta.meta_confirmation_mail = value
    },

    setmeta_registration_mail(state, value) {
        state.meta.meta_registration_mail = value
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
    travel_Hubs(state, value) {
        state.meta.travel_Hubs = value
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
    setmeta_doc_req(state, value) {
        state.meta.meta_doc_req = value
    },
    // setmeta_kyc_req(state, value) {
    //     state.meta.meta_kyc_req = value
    // },

    setmeta_non_member_list(state, value) {
        state.meta.meta_non_member_list = value
    },
    setmeta_embed_button(state, value) {
        state.meta.meta_embed_button = value
    },
    setmeta_live_expense(state, value) {
        state.meta.meta_live_expense = value
    },
    setmeta_visa_hist(state, value) {
        state.meta.meta_visa_hist = value
    },
    setmeta_insu_hist(state, value) {
        state.meta.meta_insu_hist = value
    },
    setmeta_voucher_hist(state, value) {
        state.meta.meta_voucher_hist = value
    },
    setmeta_other_hist(state, value) {
        state.meta.meta_other_hist = value
    },
    setmeta_photo_id_hist(state, value) {
        state.meta.meta_photo_id_hist = value
    },

    setmeta_pass_hist(state, value) {
        state.meta.meta_pass_hist = value
    },
    setmeta_ticket_hist(state, value) {
        state.meta.meta_ticket_hist= value
    },
    setmeta_flight_hist(state, value) {
        state.meta.meta_flight_hist = value
    },
    setmeta_stock(state, value) {
        state.meta.meta_stock = value
    },
    setfeedback_ques(state, value) {
        state.meta.feedback_ques = value
    },

 setmanagers_data(state, value) {
        state.meta.managers_data = value
    },
    sethub_master(state, value) {
        state.meta.hub_master = value
    },
setapprovers_data(state, value) {
        state.meta.approvers_data = value
    },

setmeta_cost_history(state, value) {
        state.meta.meta_cost_history = value
    },

    setpre_populated_ques(state, value) {

        state.meta.pre_populated_ques.data = value
        state.meta.pre_populated_ques.status = true
    },


    setday_plan_mounted_status(state, value) {
        state.day_plan_mounted_status = value
    },
    setcsvupload(state, value) {
        state.csvupload = value
    },
    setcsvupload_reg(state, value) {
        state.csvupload_reg = value
    },


    addplacemodal(state, value) {
        state.addplacemodal = value

    }, setmeta_pickup_date(state, value) {
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
    setmeta_form_id(state, value) {
        state.meta_form_id = value
    },




    setRemark(state, value) {
        // remark: [{"remark":"","agent":"","time":""}],
        var len= state.meta.remarks.length
        state.meta.remarks[len]=built_remark(value)

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
    setplace(state, value){
        console.log(value.data)

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
        console.log('setmeta_interactionsfull');
        value.forEach( (dataObj) => {
            console.log(dataObj.time)
            const today = new Date(dataObj.time*1000);
            const date1 = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

            var datetag=  date1;
            console.log(datetag);
            if(state.meta.interactions.hasOwnProperty(datetag) ){
                console.log('in1');
                var i=0;
                var flag="nan";
                state.meta.interactions[datetag].forEach( (intObj) => {

                    console.log('in2');
                    console.log(intObj.time);
                    console.log(dataObj.time);
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
    setall_members(state, loading) {
        state.all_members = loading
    },
    setall_members_filtered(state, loading) {
        state.all_members_filtered = loading
    },
   setall_member_upload_sheet(state, value) {
        state.all_member_upload_sheet = value
    },

    setsearch2(state, val) {
        state.search = val;
        let arr = [];

        if (state.search !== '') {

            state.all_members.forEach(post => {
                let f = "empty";
                // console.log(post['full_name']);
                if (f === "empty" && post!==null) {
                    if (post['full_name'].toLowerCase().includes(state.search.toLowerCase())) {
                        f = "found";
                        arr.push(post);
                    }

                }
            });
            console.log(arr);

            state.all_members = _.cloneDeep(arr);
        }
        else {
            state.all_members =_.cloneDeep(state.all_members_filtered)

        }


    },


}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
