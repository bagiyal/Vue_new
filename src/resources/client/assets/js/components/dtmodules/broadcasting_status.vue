<template>
    <div>

         <span v-if="row.status==='0'" >
        <b style="color: rgb(255, 193, 7) !important">Pending</b>
         </span>
        <span v-if="row.status==='1'" >
        <b style="color: rgb(255, 193, 7) !important">Pending</b>
         </span>
        <span v-if="row.status==='2'" >
        <b style="color: #28a745">Sent</b>
         </span>
        <span v-if="row.status==='3'" >
        <b style="color: #ff0000">Disapprove</b>
         </span>
    </div>
</template>


<script>
    export default {
        props: ['row', 'field'],
        data() {
            return{

            }

        },
        computed:{


        },
        watch:{

        },
        created() {

            // Code...
        },
        methods: {
            // Code...
        }
    }
</script>


<style scoped>

</style>

