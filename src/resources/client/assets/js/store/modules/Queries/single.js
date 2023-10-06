import built_remark from "../../../mixins/builtremark";
import todaydate from '../../../mixins/todaydate'
import addupdatemeta from '../../../mixins/addupdatemeta'
import built_interaction from '../../../mixins/builtinteraction'

function initialState() {
    return {
        item: {
            id: null,
            driver_pickup_date_time: null,
            booking_id: null,
            budget: null,
            places:[],
            traveler_name: null,
            bill_pay: null,
            no_of_adults: 1,
            no_of_children: 0,
            note: null,
            status: null,
            phone: null,
            email: null,
            email_second: null,
            traveller_id: null,
            generated_itinerary: null,
            itinerary_places:null,
            agency_id: null,
            agent_id: null,
            meal_day: null,
            meals_supplement: {'bf':true,'l':false,'d':false},
            messageidd: null,
            package_category: null,
            pickup_address: null,
            pickup_location: null,
            query_feel: null,
            remarks: [],
            score: null,
            score_new: null,
            total_room: 1,
            total_tour_days: null,
            tour_cost: [{'cost':'','type':''}],
            tour_cost_tax: null,
            tour_id: null,
            tour_name: null,
            tour_location: null,
            tour_location_obj:{},
            itinerary_places_obj:{},

            hotel_test:null,
            created_by: null,
            created_by_team: null,
        },
        createdid:null,
        hotel_only:[],
        usersAll: [],
        ScoreRange:{},
        teamsAll: [],
        tourAll:[],
        cityAll: [],
        places:{ 'places_city_id':{},'cites':[]},
        hotels:{},
        cityid:null,
        meta:{
            meta_infant:0,
            meta_extra_bed:0,
            meta_transport:null,
            meta_source:"Social Media",
            meta_flightprice:null,
            meta_flight:null,
            meta_welcome_mail:null,
            meta_incl_ex:null,
            meta_exclusion:null,
            meta_closuer:null,
            meta_exp_cost:[],
            meta_exp_costflight:[],
            markup1:{'percent':true,'value':'0'},
            markup2:{'percent':true,'value':'0'},
            sellingprice1:null,
            sellingprice2:null,
            meta_executive_name:document.querySelector("meta[name='user-name']").getAttribute('content'),
            meta_executive_no:document.querySelector("meta[name='user-phone']").getAttribute('content'),
            interactions:{},
            lost:{"title":"","details":""},
            by_lead:false,
            last_quote_no:0,
            last_previous:{'id':'', 'count': ''},
            meta_banner:'',

        },
        lead_data:null,
        lead_meta:null,
        clone_data:null,
        clone_meta:null,
        clonenew:null,
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
        locationplacecloneflag:true,
        add_place_modal_status:0,
        day_plan_mounted_status:false
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    usersAll: state => state.usersAll,
    ScoreRange: state => state.ScoreRange,
    teamsAll: state => state.teamsAll,
    tourAll: state => state.tourAll,
    places: state => state.places,
    cityid: state => state.cityid,
    hotels: state => state.hotels,
    cityAll: state => state.cityAll,
    createdid: state => state.createdid,
    locationplacecloneflag: state => state.locationplacecloneflag,

    // interactions: state => state.interactions,
    meta: state => state.meta,
    meta_data: state => state.meta_data,
    placedata: state => state.placedata,
    addplacemodal: state => state.addplacemodal,
    tourdata: state => state.tourdata,
    lead_data: state => state.lead_data,
    lead_meta: state => state.lead_meta,
    clone_data: state => state.clone_data,
    clone_meta: state => state.clone_meta,
    clonenew: state => state.clonenew,
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
        console.log("tour data")
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

            params.set('created_by_id', '')
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
        // dispatch('Alert/resetState', null, { root: true })
        // let dd=  Math.round(+new Date().getTime()/1000)-Math.round(+new Date(state.item.driver_pickup_date_time).getTime()/1000)

        var difference = +new Date().getTime() - +new Date(state.item.driver_pickup_date_time).getTime();

        var daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24

        var $dd="3"

        if(state.ScoreRange.dd['0'].start<difference && state.ScoreRange.dd['0'].end>difference){
            $dd=state.ScoreRange.dd['0'].score
        }
        else{
            if(state.ScoreRange.dd['1'].start<difference && state.ScoreRange.dd['1'].end>difference){
                $dd=state.ScoreRange.dd['1'].score
            }
            if(state.ScoreRange.dd['2'].start<difference && state.ScoreRange.dd['2'].end>difference){
                $dd=state.ScoreRange.dd['2'].score
            }
            if(state.ScoreRange.dd['3'].start<difference && state.ScoreRange.dd['3'].end>difference){
                $dd=state.ScoreRange.dd['3'].score
            }
            if(state.ScoreRange.dd['4'].start<difference && state.ScoreRange.dd['4'].end>difference){
                $dd=state.ScoreRange.dd['4'].score
            }
            if(state.ScoreRange.dd['5'].start<difference && state.ScoreRange.dd['5'].end>difference){
                $dd=state.ScoreRange.dd['5'].score
            }
        }



        var $vp=3

        if(parseInt(state.ScoreRange.vp['1'].start)< parseInt(state.item.budget) && parseInt(state.ScoreRange.vp['1'].end)>parseInt(state.item.budget)){
            $vp=state.ScoreRange.vp['1'].score
        }
        if(parseInt(state.ScoreRange.vp['2'].start)< parseInt(state.item.budget) && parseInt(state.ScoreRange.vp['2'].end)>parseInt(state.item.budget)){
            $vp=state.ScoreRange.vp['2'].score
        }
        if(parseInt(state.ScoreRange.vp['3'].start)< parseInt(state.item.budget) && parseInt(state.ScoreRange.vp['3'].end)>parseInt(state.item.budget)){
            $vp=state.ScoreRange.vp['3'].score
        }
        if(parseInt(state.ScoreRange.vp['4'].start)< parseInt(state.item.budget) && parseInt(state.ScoreRange.vp['4'].end)>parseInt(state.item.budget)){
            $vp=state.ScoreRange.vp['4'].score
        }
        if(parseInt(state.ScoreRange.vp['5'].start)< parseInt(state.item.budget) && parseInt(state.ScoreRange.vp['5'].end)>parseInt(state.item.budget)){
            $vp=state.ScoreRange.vp['5'].score
        }


        var $sl=state.ScoreRange.sl[state.meta.meta_source.replace(/\s+/g, '')];
        // alert(state.meta.meta_source+$sl)
        if($sl==='' || typeof $sl ==="undefined"){
            $sl=3;
        }


        // if()

        if(state.item.query_feel!=null){
            var $lf=state.item.query_feel;
        }
        else {
            var $lf=3;
        }

        var formula= JSON.parse(document.querySelector("meta[name='score-formula']").getAttribute('content')).Query
// console.log($dd)
//             console.log($vp)
//             console.log($lf)
//             console.log($sl)
//             console.log(formula)
        $dd=parseInt($dd)
        $vp=parseInt($vp)
        $lf=parseInt($lf)
        $sl=parseInt($sl)
        var evalscore=eval(formula);
state.item.score=evalscore;

        return new Promise((resolve, reject) => {
            let params = new FormData();
            let meta_data=_.cloneDeep(state.meta);
            meta_data.meta_exp_cost=JSON.stringify(meta_data.meta_exp_cost);
            meta_data.meta_exp_costflight=JSON.stringify(meta_data.meta_exp_costflight);
            meta_data.markup1=JSON.stringify(meta_data.markup1);
            meta_data.markup2=JSON.stringify(meta_data.markup2);
            meta_data.interactions=JSON.stringify(meta_data.interactions);
            meta_data.lost=JSON.stringify(meta_data.lost);
            meta_data.last_previous=JSON.stringify(meta_data.last_previous);
            // if(typeof (state.lead_data)!=="undefined" && state.lead_data!==null ) {
            //     state.meta.by_lead = state.lead_data.id;
            // }
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
                    else  if(fieldName=='remarks'){
                        // console.log("remark");
// console.log(JSON.stringify(fieldValue))
                        params.set(fieldName, JSON.stringify(fieldValue));

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
            if(state.item.remarks.length<1){
                params.delete('remarks')
                params.set('remarks', '[]')
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

            axios.post('/api/v1/queries', params)
                .then(response => {
// this.setcreatedid(response.data.data.id)
                    commit('setcreatedid', response.data.data.id)


                    let params = new FormData();
                    params.set('_method', 'PUT');

                    if(typeof (state.lead_data)!=="undefined" && state.lead_data!==null ){
                        if(state.lead_data.lead_status==1){

                            console.log("lead_data.lead_status")
                          //   params.set("lead_status", 2);
                          // params.set('meta', JSON.stringify({}));
                          //   axios.post('/api/v1/leads/' + state.lead_data.id, params)
                          //       .then(response => {
                          //           console.log("lead_datasucc"+response)
                          //           // commit('setItem', response.data.data)
                          //           // resolve()
                          //       });


                            let metaq=state.lead_meta.meta_query_gen;
                            console.log('metaq',metaq)
                            if(!_.isEmpty(metaq)){
                                metaq.push(response.data.data.id);
                                addupdatemeta(state.lead_data.id,'lead','meta_query_gen',JSON.stringify(metaq))
                            }
                            else {

                                addupdatemeta(state.lead_data.id,'lead','meta_query_gen',JSON.stringify([response.data.data.id]))
                            }

                        }
                        else {
                            console.log("meta_query_gen")

                            console.log(state.lead_meta.meta_query_gen)
                            let metaq=state.lead_meta.meta_query_gen;
                            if(!_.isEmpty(metaq)){
                                metaq.push(response.data.data.id);

                                addupdatemeta(state.lead_data.id,'lead','meta_query_gen',JSON.stringify(metaq))

                            }
                            else {

                                addupdatemeta(state.lead_data.id,'lead','meta_query_gen',JSON.stringify([response.data.data.id]))
                            }

                        }

                    }

                    // console.log(state.clone_data)
                    if(typeof (state.clone_data)!=="undefined" && state.clone_data!==null ){
console.log("in clone interaction")
                    let value=    built_interaction("Clone to other query","Click Action","Done",response.data.data.booking_id)

                        let metaq=state.clone_meta.interactions;
                        console.log(metaq)
                        if(metaq.hasOwnProperty(todaydate()) ){
                            metaq[todaydate()].push(value)
                        }
                        else {
                            metaq[todaydate()] =[value]
                        }


                            addupdatemeta(state.clone_data.id,'query','interactions',JSON.stringify(metaq))



                    }
                    //save generated id of query in lead meta

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
                                // dataObj.forEach( function(element) {
                                //     console.log(element);
                                // });
                                // for(let city in dataObj){
                                //     console.log(city);
                                //     newobj[city['id']]=fieldValue[city['id']];
                                // }
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
                    else  if(fieldName=='remarks'){

                        params.set(fieldName, JSON.stringify(fieldValue));

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




let meta_data=_.cloneDeep(state.meta);

            meta_data.meta_exp_cost=JSON.stringify(meta_data.meta_exp_cost);
            meta_data.meta_exp_costflight=JSON.stringify(meta_data.meta_exp_costflight);
            meta_data.markup1=JSON.stringify(meta_data.markup1);
            meta_data.markup2=JSON.stringify(meta_data.markup2);
            meta_data.interactions=JSON.stringify(meta_data.interactions);
            meta_data.lost=JSON.stringify(meta_data.lost);
            meta_data.last_previous=JSON.stringify(meta_data.last_previous);
            params.set('meta', JSON.stringify(meta_data));

            axios.post('/api/v1/queries/' + state.item.id, params)
                .then(response => {
                    // commit('setItem', response.data.data)
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
        axios.get('/api/v1/queries/' + id,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response_hotel_data => {
                console.log("response");
                console.log(response_hotel_data);
                commit('setItem', response_hotel_data.data.data)
                // commit('setTour_location', response.data.data.tour_location)
            })

        // dispatch('fetchUsersAll')
        // dispatch('fetchTeamsAll')
        // dispatch('fetchTourAll')
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
    fetchScoreRange({ commit }) {
        var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id

        axios.get('/api/webservices/agencyscore', {
            params: {
                agency_id:agency_id,


            }
        }).then(response => {
          console.log(response.data)
            commit('setfetchScoreRange', response.data)
        })



        // axios.get('/api/v1/users/'+agency_id)
        //     .then(response => {
        //         commit('setfetchScoreRange', response.data.data)
        //     })
    },


    setclonedata({ commit }, value) {
        commit('setclonedata', value)
    },
    setclonedatameta({ commit }, value) {
        commit('setclonedatameta', value)
    },

    setDriver_pickup_date_time({ commit }, value) {
        commit('setDriver_pickup_date_time', value)
    },
    fetchplace({commit,state},id){
        commit('setLoading', true)

        console.log("fetchplacetest");
        commit('setcityid', id)
        axios.get('/api/v1/city/ofcity/'+id)
            .then(response => {
                if(state.day_plan_mounted_status){
                    state.add_place_modal_status++;
                }
                commit('setplace', {data:response.data.data, id:id})
            })
            .finally(() => {
                commit('setLoading', false)
            })

    },
    fetchhotel({commit},id){
        commit('setLoading', true)
        // state.locationplacecloneflag=false;
        commit('setlocationplacecloneflag',false);
            console.log("fetchhotel");
        // commit('sethotel', id)
        axios.get('/api/v1/city/hotels/'+id)
            .then(response => {
                // console.log(response);
                if(!_.isEmpty(response.data)){
                    commit('sethotel', {hotel:response.data.data, location_id:id})
                }

                //      commit('sethotel', {data:response.data.data, id:id})
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    setBooking_id({ commit }, value) {
        // console.log(value);
        commit('setBooking_id', value)
    },
    setBudget({ commit }, value) {
        commit('setBudget', value)
    },



    // setplaces({ commit }, value) {
    //     commit('setplaces', value)
    // },

    setTraveler_name({ commit }, value) {
        commit('setTraveler_name', value)
    },
    setBill_pay({ commit }, value) {
        commit('setBill_pay', value)
    },
    setNo_of_adults({ commit }, value) {
        commit('setNo_of_adults', value)
    },
    setNo_of_children({ commit }, value) {
        commit('setNo_of_children', value)
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
          params.set('name',state.item.traveler_name);
          params.set('type','query');
          axios.post('/api/webservices/mail_formats' , params)
          .then(response => {response.data
              var welcome_mail=response.data[0]['welcome_note'];
              var closure_mail=response.data[1]['closure_note'];
              var incex_note=response.data[2]['incex_note'];
              commit('setmeta_welcome_mail', welcome_mail);
              commit('setmeta_closuer', closure_mail);
              commit('setmeta_incl_ex', incex_note);
              commit('setmeta_exclusion', incex_note);



        });
    },
    setmeta_extra_bed({ commit }, value) {
        commit('setmeta_extra_bed', value)
    },

    setmeta_transport({ commit }, value) {
        commit('setmeta_transport', value)
    },
    setmeta_source({ commit }, value) {
        commit('setmeta_source', value)
    },
    setmeta_flightprice({ commit }, value) {
        commit('setmeta_flightprice', value)
    },
    setmeta_flight({ commit }, value) {
        commit('setmeta_flight', value)
    },
    setmeta_welcome_mail({ commit }, value) {
        commit('setmeta_welcome_mail', value)
    },
    setmeta_incl_ex({ commit }, value) {
        commit('setmeta_incl_ex', value)
    },
    setmeta_banner({ commit }, value) {
        commit('setmeta_banner', value)
    },

    setmeta_exclusion({ commit }, value) {
        commit('setmeta_exclusion', value)
    },

    setmeta_closuer({ commit }, value) {
        commit('setmeta_closuer', value)
    },
    setmeta_exp_cost({ commit }, value) {
        commit('setmeta_exp_cost', value)
    },
    setmeta_exp_costflight({ commit }, value) {
        commit('setmeta_exp_costflight', value)
    },
    setmarkup1({ commit }, value) {
        commit('setmarkup1', value)
    },
    setmarkup2({ commit }, value) {
        commit('setmarkup2', value)
    },
    setsellingprice1({ commit }, value) {
        commit('setsellingprice1', value)
    },
    setsellingprice2({ commit }, value) {
        commit('setsellingprice2', value)
    },

    setmeta_interactions({ commit }, value) {
        commit('setmeta_interactions', value)
    },
    setmeta_interactionsfull({ commit }, value) {
        commit('setmeta_interactionsfull', value)
    },
    setmeta_lost({ commit }, value) {
        commit('setmeta_lost', value)
    },
    setby_lead({ commit }, value) {
        commit('setby_lead', value)
    },
    setlast_quote_no({ commit }, value) {
        commit('setlast_quote_no', value)
    },
    setlast_previous({ commit }, value) {
        commit('setlast_previous', value)
    },

    setlead_data({ commit }, value) {
        commit('setlead_data', value)
    },
    setlead_meta({ commit }, value) {
        commit('setlead_meta', value)
    },
    setclone_data({ commit }, value) {
        commit('setclone_data', value)
    },
    setclone_meta({ commit }, value) {
        commit('setclone_meta', value)
    },
    setclonenew({ commit }, value) {
        commit('setclonenew', value)
    },


    setmeta_executive_name({ commit }, value) {
        commit('setmeta_executive_name', value)
    },
    setmeta_executive_no({ commit }, value) {
        commit('setmeta_executive_no', value)
    },








    setNote({ commit }, value) {
        commit('setNote', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setEmail_second({ commit }, value) {
        commit('setEmail_second', value)
    },
    setTraveller_id({ commit }, value) {
        commit('setTraveller_id', value)
    },
    setGenerated_itinerary({ commit }, value) {
        commit('setGenerated_itinerary', value)
    },
    setItinerary_places({ commit }, value) {
        commit('setItinerary_places', value)
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
    setMeals_supplement({ commit }, value) {
        commit('setMeals_supplement', value)
    },
    setMessageidd({ commit }, value) {
        commit('setMessageidd', value)
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
    setQuery_feel({ commit }, value) {
        commit('setQuery_feel', value)
    },
    setRemark({ commit }, value) {
        commit('setRemark', value)
    },
    setRemarkedit({ commit }, value) {
        commit('setRemarkedit', value)
    },
    setRemarklead({ commit }, value) {
        commit('setRemarklead', value)
    },

    setScore({ commit }, value) {
        commit('setScore', value)
    },
    setScore_new({ commit }, value) {
        commit('setScore_new', value)
    },
    setTotal_room({ commit }, value) {
        commit('setTotal_room', value)
    },
    setTotal_tour_days({ commit }, value) {
        commit('setTotal_tour_days', value)
    },
    setTour_cost({ commit }, value) {
        commit('setTour_cost', value)
    },
    setTour_cost_tax({ commit }, value) {
        commit('setTour_cost_tax', value)
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
    setTour_location_obj({ commit }, value) {
        commit('setTour_location_obj', value)
    },
    setIinerary_places_obj({ commit }, value) {
        commit('setIinerary_places_obj', value)
    },

    sethotel_only({ commit }, value) {
        commit('sethotel_only',value)
    },
    setcreatedid({ commit }, value) {
        commit('setcreatedid',value)
    },
    setlocationplacecloneflag({ commit }, value) {
        commit('setlocationplacecloneflag',value)
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
    setLoading({ commit }) {
        commit('setLoading')
    }

}

const mutations = {
    setItem(state, item) {

        console.log("tour_location");
        // console.log(JSON.parse(item.tour_location));
        //  state.item = item
        // console.log(item);
        state.item = item
        console.log(state.item);
        // console.log(item.itinerary_places);
        state.item.itinerary_places=JSON.parse(item.itinerary_places);
        console.log("tour_location before");
    //    console.log(state.item.itinerary_places);
        state.item.tour_location=JSON.parse(item.tour_location);


        state.item.meals_supplement=JSON.parse(item.meals_supplement);
        state.item.tour_cost=JSON.parse(item.tour_cost);
        state.item.remarks=JSON.parse(item.remarks);
        console.log("tour_location after");
        console.log(state.item.tour_location);

        state.meta_data = item.get_meta;

        console.log(state.meta_data);

        state.meta_data.forEach(function(e){

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
            if(e.meta_key=='meta_flight'){

                state.meta.meta_flight=e.meta_value;
            }
            if(e.meta_key=='meta_welcome_mail'){

                state.meta.meta_welcome_mail=e.meta_value;
            }
            if(e.meta_key=='meta_incl_ex'){

                state.meta.meta_incl_ex=e.meta_value;
            }
            if(e.meta_key=='meta_banner'){

                state.meta.meta_banner=e.meta_value;
            }

            if(e.meta_key=='meta_exclusion'){

                state.meta.meta_exclusion=e.meta_value;
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
            if(e.meta_key=='interactions'){

                state.meta.interactions=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='lost'){

                state.meta.lost=JSON.parse(e.meta_value);
            }
            if(e.meta_key=='by_lead'){

                state.meta.by_lead=e.meta_value;
            }
            if(e.meta_key=='last_quote_no'){

                state.meta.last_quote_no=e.meta_value;
            }
            if(e.meta_key=='last_previous'){

                state.meta.last_previous=JSON.parse(e.meta_value);
            }


            if(e.meta_key=='meta_executive_name'){

                state.meta.meta_executive_name=e.meta_value;
            }
            if(e.meta_key=='meta_executive_no'){

                state.meta.meta_executive_no=e.meta_value;
            }

        });
    },


    setclonedata(state, value) {
        state.item.remarks=[];
        state.item=value;
        console.log("query cloning")
        console.log(state.item)
        // console.log(value)
    },
    setday_plan_mounted_status(state, value) {
        state.day_plan_mounted_status = value
    },
    setclonedatameta(state, value) {
        console.log("meta cloning")
        console.log(state.meta)

        // console.log(value);
        state.meta=value;
        console.log(state.meta)


    },

    setDriver_pickup_date_time(state, value) {
        state.item.driver_pickup_date_time = value;

        // console.log(moment(moment(value).format("YYYY-MM-DD")).add(5,'days').format("DD MMM YYYY"))
        var date_ori=value;
        if(state.item.tour_location){
            for(var i=0;i < state.item.tour_location.length;i++ ){

                state.item.tour_location[i]['date_from']=moment(date_ori,'DD-M-YYYY').add(0,'days').format('DD-MM-YYYY');
                state.item.tour_location[i]['daynights']=parseInt(state.item.tour_location[i]['days'])+1;

                state.item.tour_location[i]['date_to']=moment(state.item.tour_location[i]['date_from'],'DD-M-YYYY').add(state.item.tour_location[i]['days'],'days').format('DD-MM-YYYY')
                date_ori=state.item.tour_location[i]['date_to'] ;


            }

        }

        // state.item.tour_location
    },
    setBooking_id(state, value) {
        state.item.booking_id = value
    },

//     setplaces(state, value) {
//     state.item.places.push(value)
// },
    setBudget(state, value) {
        state.item.budget = value
    },
    setTraveler_name(state, value) {
        state.item.traveler_name = value
    },
    setBill_pay(state, value) {
        state.item.bill_pay = value
    },
    setNo_of_adults(state, value) {
        state.item.no_of_adults = value
    },
    setNo_of_children(state, value) {
        state.item.no_of_children = value
    },

    addplacemodal(state, value) {
        state.addplacemodal = value
    },
    tourdata(state, value) {
        state.tourdata = value
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
    setmeta_source(state, value) {
        state.meta.meta_source = value
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
    setmeta_incl_ex(state, value) {
        state.meta.meta_incl_ex = value
    },
    setmeta_banner(state, value) {
        state.meta.meta_banner = value
    },

    setmeta_exclusion(state, value) {
        state.meta.meta_exclusion = value
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
    setmarkup1(state, value) {
        state.meta.markup1 = value
    },
    setmarkup2(state, value) {
        state.meta.markup2 = value
    },
    setsellingprice1(state, value) {
        state.meta.sellingprice1 = value
    },
    setsellingprice2(state, value) {
        state.meta.sellingprice2 = value
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

if(!_.isEmpty(value)){
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
                console.log(dataObj);
                if(typeof dataObj.title !=="undefined"){
// alert("up");
                    state.meta.interactions[datetag].push(dataObj);
                }else {
                    // alert("down");
                    state.meta.interactions[datetag].push({"title":"Remark","status":"Done","type":"remark","remark":dataObj.remark,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":dataObj.time})

                }

                   }

        }
        else {
            console.log('in4');
            if (typeof dataObj.title != "undefined") {
                if(typeof state.meta.interactions[datetag]!= "undefined"){
                    state.meta.interactions[datetag].push(dataObj);
                }
             else {
                    state.meta.interactions[datetag] = [dataObj];
                }
            } else {
                state.meta.interactions[datetag] = [{
                    "title": "Remark",
                    "status": "Done",
                    "type": "remark",
                    "remark": dataObj.remark,
                    "agent": document.querySelector("meta[name='user-name']").getAttribute('content'),
                    "time": dataObj.time
                }]
            }
        }

    });
}




    },
    setmeta_lost(state, value) {
        state.meta.lost = value
    },
    setby_lead(state, value) {
        state.meta.by_lead = value
    },
    setlast_quote_no(state, value) {
        state.meta.last_quote_no = value
    },
    setlast_previous(state, value) {
        state.meta.last_previous = value
    },

    setlead_data(state, value) {
        state.lead_data = value
    },
    setlead_meta(state, value) {
        state.lead_meta = value
    },
    setclone_data(state, value) {
        state.clone_data = value
    },
    setclone_meta(state, value) {
        state.clone_meta = value
    },
    setclonenew(state, value) {
        state.clonenew = value
    },

    setmeta_executive_name(state, value) {
        state.meta.meta_executive_name = value
    },
    setmeta_executive_no(state, value) {
        state.meta.meta_executive_no = value
    },



    setNote(state, value) {
        state.item.note = value
    },
    setStatus(state, value) {
        state.item.status = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setEmail(state, value) {
        state.item.email = value
    },

    setEmail_second(state, value) {
        state.item.email_second = value
    },
    setTraveller_id(state, value) {
        state.item.traveller_id = value
    },
    setGenerated_itinerary(state, value) {
        state.item.generated_itinerary = value
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
    setAgency_id(state, value) {
        state.item.agency_id = value
    },
    setAgent_id(state, value) {
        state.item.agent_id = value
    },
    setMeal_day(state, value) {
        state.item.meal_day = value
    },
    setMeals_supplement(state, value) {
        state.item.meals_supplement = value
    },
    setMessageidd(state, value) {
        state.item.messageidd = value
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
    setQuery_feel(state, value) {
        state.item.query_feel = value
    },
    setRemarkedit(state, value) {

        // remark: [{"remark":"","agent":"","time":""}],
        if(_.isEmpty(state.item.remarks)){
            var rem= _.cloneDeep(value)
            state.item.remarks = [built_remark(rem)];
        }
        else {
            var rem= _.cloneDeep(value)
            var len= state.item.remarks.length
            state.item.remarks[len]=built_remark(rem)
        }


    },
    setRemark(state, value) {
        // remark: [{"remark":"","agent":"","time":""}],
        var len= state.item.remarks.length
        state.item.remarks[len]=built_remark(value)

    },
    setRemarklead(state, value) {

        state.item.remarks=value

    },


    setScore(state, value) {
        state.item.score = value
    },
    setScore_new(state, value) {
        state.item.score_new = value
    },
    setTotal_room(state, value) {
        state.item.total_room = value
    },
    setTotal_tour_days(state, value) {
        state.item.total_tour_days = value
    },
    setTour_cost(state, value) {
        state.item.tour_cost = value
    },
    setTour_cost_tax(state, value) {
        state.item.tour_cost_tax = value
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
    setTour_location_obj(state, value) {
        state.item.tour_location_obj = value
    },
    setIinerary_places_obj(state, value) {
        state.item.itinerary_places_obj = value
    },


    sethotel_only(state, value) {
        state.hotel_only = value
    },
    setcreatedid(state, value) {
        state.createdid = value
    },
    setlocationplacecloneflag(state, value) {
        state.setlocationplacecloneflag = value
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
    setfetchScoreRange(state, value) {
        state.ScoreRange = (value)
    },
    setTeamsAll(state, value) {
        state.teamsAll = value
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
        state.locationplacecloneflag=true;
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
    setLoading(state, loading) {
        state.loading = loading
    },
    setTourAll(state, loading) {


        state.tourAll = loading
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    },
    setCityAll(state, value) {
        state.cityAll = value
    },



}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
