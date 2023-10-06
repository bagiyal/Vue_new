<template>
    <div>




        <span v-if="row.status==='2'" >
        <b style="color: #ff8d27">Live</b>
            </span>
             <span v-if="row.status==='3'" >
         <b style="color: green">Completed</b>

        </span>
        <span v-if="row.status==='4'" >
         <b style="color: #ff0600">Lost</b>
  </span>

              <span v-if="row.lead_status==='1'" >
         <i style="color:#e59745" class="fa fa-clock-o" aria-hidden="true"></i>
            </span>
             <span v-if="row.lead_status==='2'" >
          <i style="color:green" class="fa fa-check" aria-hidden="true"></i>

        </span>
        <span v-if="row.lead_status==='3'" >
         <i style="color:red" class="fa fa-times-circle" aria-hidden="true"></i>



        </span>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {

            // Code...
        }
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

