/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401) {
        window.location.assign('/login')
    }

    return Promise.reject(error)
})

window.purify = o => JSON.parse(JSON.stringify(o))


let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

let date_format     = document.head.querySelector('meta[name="dp-date"]')
let time_format     = document.head.querySelector('meta[name="dp-time"]')
let datetime_format = document.head.querySelector('meta[name="dp-datetime"]')
let app_locale      = document.head.querySelector('meta[name="app-locale"]')

if (date_format && time_format && datetime_format) {
    window.date_format_moment     = date_format.content
    window.time_format_moment     = time_format.content
    window.datetime_format_moment = datetime_format.content
    window.app_locale             = app_locale.content
} else {
    console.error('Moment.js date and time formats not found')
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

window.Vue = require('vue')
Vue.prototype.$eventHub = new Vue()

import router from '../src/resources/client/assets/js/routes'
import store from '../src/resources/client/assets/js/store'
import Datatable from 'vue2-datatable-component'
import VueAWN from 'vue-awesome-notifications'
import vSelect from 'vue-select'
// import datePicker from 'vue-bootstrap-datetimepicker'
// import VueSweetalert2 from 'vue-sweetalert2'
// import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'
import ability from '../src/resources/client/assets/js/config/ability'
// import { abilitiesPlugin } from '@casl/vue'
import VueCkeditor from 'vue-ckeditor2'
// import excel from 'vue-excel-export'
import VueNumericInput from 'vue-numeric-input';
import JsonExcel from 'vue-json-excel'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
// import {RotateSquare2} from 'vue-loading-spinner'
import VueProgressBar from 'vue-progressbar'

import VueEllipseProgress from 'vue-ellipse-progress';

Vue.use(VueEllipseProgress)

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '10px'
});

Vue.component('rotate-square2', RotateSquare2)
// Global registration
// Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
// Vue.config.silent = true
Vue.component('downloadExcel', JsonExcel)
Vue.use(VueNumericInput)
// Vue.use(excel)
Vue.use(Datatable)
Vue.use(VueAWN, { position: 'top-right' })
Vue.use(datePicker)
Vue.use(VueSweetalert2)
Vue.use(abilitiesPlugin, ability)
Vue.use(VueCkeditor)
Vue.use(require('vue-resource'));
Vue.component('pagination', require('laravel-vue-pagination'));

Vue.component('back-buttton', require('../src/resources/client/assets/js/components/BackButton.vue'))
Vue.component('bootstrap-alert', require('../src/resources/client/assets/js/components/Alert.vue'))
Vue.component('event-hub', require('../src/resources/client/assets/js/components/EventHub.vue'))
Vue.component('task-maker', require('../src/resources/client/assets/js/components/TaskMaker.vue'))
Vue.component('vue-button-spinner', require('../src/resources/client/assets/js/components/VueButtonSpinner.vue'))
Vue.component('v-select', vSelect)
Vue.component('vue-ckeditor', VueCkeditor)

moment.updateLocale(window.app_locale, {
    week: {
        dow: 1
    }
})


// TODO: the next line is added for debugging purposes and should be removed for production build
window.ability = ability

const app = new Vue({
    data: {
        relationships: {},
        dpconfigDate: {
            useCurrent: false,
            format: window.date_format_moment,
        },
        dpconfigDate_disable_dates: {
            useCurrent: false,
            format: window.date_format_moment,
            minDate: new Date(Date.now() - 8640000)
        },
        dpconfigTime: {
            useCurrent: false,
            format: window.time_format_moment
        },
        dpconfigTimeshort: {
            useCurrent: false,
            format:'HH:mm'
        },
        dpconfigDatetime: {
            useCurrent: false,
            format: window.datetime_format_moment,
            sideBySide: true,

        },
        dpconfigDatetime_disable_dates: {
            useCurrent: false,
            format: window.datetime_format_moment,
            sideBySide: true,
            minDate: new Date(Date.now() - 8640000)
        },
        dpconfigDate_disable_future_dates: {
            useCurrent: false,
            format: window.date_format_moment,
            maxDate: new Date(Date.now() - 86400000)
        },
        booking_ref_id:''
    },
    mounted() {
        this.updateRules()
    },
    watch: {
        '$route': function() {
            this.updateRules()
        }
    },
    methods: {
        updateRules() {
            store.dispatch('Rules/fetchData')
                .then(() => {
                    this.$eventHub.$emit('rules-update')
                })
        }
    },
    router,
    store
}).$mount('#app')
