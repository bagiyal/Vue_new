<template>


    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">

<!--      <task-maker :mode="'full'" style="    position: relative;    top: -123px;    left: 2%;"></task-maker>-->


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
            var log_id = document.querySelector("meta[name='user-id']").getAttribute('content');
   if(role==='subscriber'){

                let params = new FormData();
                params.set('id', log_id);

                axios.post('/api/webservices/get_traveller', params)
                    .then(response => {
                        //  alert(response.data)
                        if (this.$route.params.id !== response.data) {
                            this.$router.push({path: '/travellers/' + response.data + '/edit'})
                        }
                    });


        }


        }
    }

</script>
