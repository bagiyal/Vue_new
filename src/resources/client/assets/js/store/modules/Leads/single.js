import built_remark from "../../../mixins/builtremark";

function initialState() {
    return {
        item: {
            id: null,
            lead_id: '',
            lead_status: null,
            package_type: null,
            date: null,
            email: null,
            phone: null,
            name: null,
            adult_guest: 1,
            score: null,
            kids_guests: 0,
            agent_id: document.querySelector("meta[name='user-id']").getAttribute('content'),
            agency_id: null,
            score_new: null,
            lead_feel: null,
            created_by: 1,
            created_by_team: null,
            created_by_id: null,
remark: [],
            //meta
            meta_id:null,
            query_id:null,
            sl_score:null,
            dd_score:null,
            source:null,
            source_id:null,
            source_url:null,
            task:null,
            task_status:null,
infant_guest: 0,
        },
        meta:{
            meta_query_gen:[],
            traveller_id:'',
            lost:{"title":"","details":""},
        },
        meta_data:null,
        usersAll: [],
        teamsAll: [],
        ScoreRange:{},
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    usersAll: state => state.usersAll,
    teamsAll: state => state.teamsAll,
    meta:state => state.meta,
    meta_data: state => state.meta_data,
    ScoreRange: state => state.ScoreRange,
}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        var difference = +new Date().getTime() - +new Date(state.item.date).getTime();
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


        var $sl=state.ScoreRange.sl[state.item.source.replace(/\s+/g, '')];
        // alert(state.meta.meta_source+$sl)
        if($sl==='' || typeof $sl ==="undefined"){
            $sl=3;
        }


        // if()

        if(state.item.lead_feel!=null){
            var $lf=state.item.lead_feel;
        }
        else {
            var $lf=3;
        }

        var formula= JSON.parse(document.querySelector("meta[name='score-formula']").getAttribute('content')).Lead
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
            meta_data.meta_query_gen=JSON.stringify(meta_data.meta_query_gen);
            meta_data.lost=JSON.stringify(meta_data.lost);
            params.set('meta', JSON.stringify(meta_data));
            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                }
                else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {


                            params.set(fieldName, fieldValue);



                    } else {

                        if(fieldName=='remark'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }
                        else {

                            for (let index in fieldValue) {
                                params.set(fieldName + '[' + index + ']', fieldValue[index]);
                            }


                        }


                    }
                }
            }

            if (state.item.created_by=='' ) {
                console.log("empty");
                params.set('created_by_id', '')
            } else {
                console.log("not empty");
                params.set('created_by_id', state.item.created_by)
            }
            if (_.isEmpty(state.item.created_by_team)) {
                params.set('created_by_team_id', '')
            } else {
                params.set('created_by_team_id', state.item.created_by_team.id)
            }

            axios.post('/api/v1/leads', params)
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
            let meta_data=_.cloneDeep(state.meta);
            meta_data.meta_query_gen=JSON.stringify(meta_data.meta_query_gen);

            meta_data.lost=JSON.stringify(meta_data.lost);
            params.set('meta', JSON.stringify(meta_data));
            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {

                        if(fieldName=='remark'){

                            params.set(fieldName, JSON.stringify(fieldValue));

                        }
                        else {

                            for (let index in fieldValue) {
                                params.set(fieldName + '[' + index + ']', fieldValue[index]);
                            }


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

            axios.post('/api/v1/leads/' + state.item.id, params)
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
        axios.get('/api/v1/leads/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchUsersAll')
    dispatch('fetchTeamsAll')
        commit('setLoading', false)
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


         if(document.querySelector("meta[name='user-role']").getAttribute('content')=="agency"){

            var agency_id=document.querySelector("meta[name='user-id']").getAttribute('content');

             // state.item.agency_id=agency_id;
         }else{
             var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
         }
        commit('setAgency_id','{"id":'+agency_id+',"name":"'+document.querySelector("meta[name='user-name']").getAttribute('content')+'"}')
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

    setLead_id({ commit }, value) {
        commit('setLead_id', value)
    },
    setLead_status({ commit }, value) {
        commit('setLead_status', value)
    },
    setPackage_type({ commit }, value) {
        commit('setPackage_type', value)
    },
    setDate({ commit }, value) {
        commit('setDate', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setTraveller_id({ commit }, value) {
        commit('setTraveller_id', value)
    },
    setPhone({ commit }, value) {
        commit('setPhone', value)
    },
    setName({ commit }, value) {
        commit('setName', value)
    },
    setAdult_guest({ commit }, value) {
        commit('setAdult_guest', value)
    },
    setScore({ commit }, value) {
        commit('setScore', value)
    },
    setKids_guests({ commit }, value) {
        commit('setKids_guests', value)
    },
    setAgent_id({ commit }, value) {
        commit('setAgent_id', value)
    },
    setAgency_id({ commit }, value) {
        commit('setAgency_id', value)
    },
    setScore_new({ commit }, value) {
        commit('setScore_new', value)
    },
    setLead_feel({ commit }, value) {
        commit('setLead_feel', value)
    },
    setCreated_by({ commit }, value) {
        commit('setCreated_by', value)
    },
    setCreated_by_team({ commit }, value) {
        commit('setCreated_by_team', value)
    },
    setRemark({ commit }, value) {
        commit('setRemark', value)
    },
    setRemarkedit({ commit }, value) {
        commit('setRemarkedit', value)
    },

    setSource({ commit }, value) {
        commit('setSource', value)
    },
    setInfant_guest({ commit }, value) {
        commit('setInfant_guest', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item


            state.item.remark=JSON.parse(item.remark);

        // state.meta_data = item.get_meta;

        // console.log(state.meta_data);
        state.meta_data = item.get_meta;
        console.log("state.meta_data");
        console.log(state.meta_data);
        state.meta_data.forEach(function(e) {

            if (e.meta_key == 'meta_query_gen') {

                state.meta.meta_query_gen = JSON.parse(e.meta_value);
            }
            if (e.meta_key == 'lost') {

                state.meta.lost = JSON.parse(e.meta_value);
            }
            if (e.meta_key == 'traveller_id') {

                state.meta.traveller_id = e.meta_value;
            }
        });
    },
    setLead_id(state, value) {
        state.item.lead_id = value
    },
    setLead_status(state, value) {
        state.item.lead_status = value
    },
    setPackage_type(state, value) {
        state.item.package_type = value
    },
    setDate(state, value) {
        state.item.date = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setTraveller_id(state, value) {
        state.meta.traveller_id = value
    },
    setPhone(state, value) {
        state.item.phone = value
    },
    setName(state, value) {
        state.item.name = value
    },
    setAdult_guest(state, value) {
        state.item.adult_guest = value
    },
    setScore(state, value) {
        state.item.score = value
    },
    setKids_guests(state, value) {
        state.item.kids_guests = value
    },
    setAgent_id(state, value) {
        state.item.agent_id = value
    },
    setAgency_id(state, value) {
        state.item.agency_id = value
    },
    setScore_new(state, value) {
        state.item.score_new = value
    },
    setLead_feel(state, value) {
        state.item.lead_feel = value
    },
    setCreated_by(state, value) {
        state.item.created_by = value
    },
    setCreated_by_team(state, value) {
        state.item.created_by_team = value
    },
    setRemark(state, value) {
        // remark: [{"remark":"","agent":"","time":""}],
        // state.item.remark = [{"remark":value,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":Math.round(+new Date()/1000)}]

    var len= state.item.remark.length
        console.log("len");
        console.log(len);

    state.item.remark[len]={"remark":value,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":Math.round(+new Date()/1000)}



    },
    setRemarkedit(state, value) {
        // remark: [{"remark":"","agent":"","time":""}],
        var len= state.item.remark.length
        state.item.remark[len]={"remark":value,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":Math.round(+new Date()/1000)}

    },

    setSource(state, value) {
        state.item.source = value
    },
    setInfant_guest(state, value) {
        state.item.infant_guest = value
    },
    setUsersAll(state, value) {
        state.usersAll = value
    },
    setTeamsAll(state, value) {
        state.teamsAll = value
    },
    setfetchScoreRange(state, value) {
        state.ScoreRange = (value)
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
