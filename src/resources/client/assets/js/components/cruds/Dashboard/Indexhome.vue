<template>


    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">

      <task-maker :mode="'full'" style="    position: relative;    top: -123px;    left: 2%;"></task-maker>


    <div style="height:500px">

        <h2 style="margin-left: 100px">{{msg}}</h2></div>
        </section></section>


</template>


<script>

    export default {


        data() {
            return {
                license:{
            },
                msg:''

        }

        },
        created(){
            var role=document.querySelector("meta[name='user-role']").getAttribute('content');
       if(role==='lms_agent'){

           if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
               var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
           }
           else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
               document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){

               var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

           }
           axios.get('/api/v1/user/license/' + agency_id)
               .then(response => {
                   this.license=JSON.parse(response.data.data[0].meta_value);
                   if(this.license.lead_mng_sys && this.license.data_analysis){
                       this.$router.push({name: 'dashboard.index'})
                   }
                   else {
                       this.msg="You are not authorised to access Dashboard. Please contact Administrator."
                   }
               })

       }
       else if(role==='agency'){
           if(document.querySelector("meta[name='user-role']").getAttribute('content')==="lms_agent"){
               var agency_id= JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id
           }
           else if(document.querySelector("meta[name='user-role']").getAttribute('content')==="agency" ||
               document.querySelector("meta[name='user-role']").getAttribute('content')==="Administrator (can create other users)" ){

               var agency_id= JSON.parse(document.querySelector("meta[name='user-id']").getAttribute('content'))

           }
           axios.get('/api/v1/user/license/' + agency_id)
               .then(response => {
                   this.license=JSON.parse(response.data.data[0].meta_value);
                   if(this.license.lead_mng_sys && this.license.data_analysis){
                       this.$router.push({name: 'dashboard.index'})
                   }
                   else {
                       this.msg="You are not authorised to access Dashboard. Please contact Administrator."
                   }
               })

       }
       else if(role==='subscriber'){

           var log_id=document.querySelector("meta[name='user-id']").getAttribute('content');
           this.$router.push({ path: '/travellers/'+log_id+'/edit' })
       }






        }



    }

</script>
