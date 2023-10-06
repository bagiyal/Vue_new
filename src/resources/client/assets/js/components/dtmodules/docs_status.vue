<template>
    <span >F <sup >{{status.flight}}</sup> P <sup >{{status.passport}}</sup> V <sup >{{status.visa}}</sup></span>


</template>


<script>

    export default {

        props: ['row', 'field'],
        data() {
            return {
                    status:{'visa':0,'flight':0,'passport':0},
            }
        },
        computed:{

        },
        watch:{


        },
        created() {

               this.status.visa=this.row.visa_length;
               this.status.flight=this.row.flight_length;
               this.status.passport=this.row.passport_length;
        },
        methods: {
            // Code...
        },
        filters:{

        },
    }
</script>


<style scoped>
    sup{
        color: red;
        font-size: 13px;
    }
    span{
        font-size: 15px;
        font-weight: bold;

    }

</style>

