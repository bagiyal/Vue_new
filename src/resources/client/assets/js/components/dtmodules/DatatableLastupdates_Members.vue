<template>
    <div v-if="row.form_status!='3' && row.form_status!='0'"  >
        <div v-html="row.last_update" style="font-size:12px "></div>

    </div>
</template>


<script>

    import moment from 'moment-timezone'
    import QrcodeVue from 'qrcode.vue'

    export default {
        props: ['row', 'xprops'],
        data() {
            return {


            }
        },
        created() {





        },
        methods: {




        },
        components: {
            }
    }
</script>
