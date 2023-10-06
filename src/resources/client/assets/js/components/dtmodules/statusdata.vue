<template>
    <div style="margin-left: 25%">




        <span v-if="row.status==='1'"  title="Pending Confirmation">
         <i style="color:#e59745" class="fa fa-clock-o button_style" aria-hidden="true"></i>
            </span>
             <span v-if="row.status==='2'" title="Confirmed" >
          <i style="color:green" class="fa fa-check button_style" aria-hidden="true"></i>

        </span>
        <span v-if="row.status==='3'" title="Lost" >
         <i style="color:red" class="fa fa-times-circle button_style" aria-hidden="true"></i>
  </span>

        <span v-if="row.lead_status==='1'" title="Pending Confirmation">
         <i style="color:#e59745" class="fa fa-clock-o button_style" aria-hidden="true"></i>
            </span>
             <span v-if="row.lead_status==='2'"  title="Confirmed" >
          <i style="color:green" class="fa fa-check button_style" aria-hidden="true"></i>

        </span>
        <span v-if="row.lead_status==='3'" title="Lost">
         <i style="color:red" class="fa fa-times-circle button_style" aria-hidden="true"></i>



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
