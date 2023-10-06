<template>
    <div>

        <span v-if="row.login" >
           <i style="color: green" class="fa fa-check-square checkbox_style" aria-hidden="true"></i>

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
    computed:{

    },
    watch:{
        // "row": function() {
        //
        //
        // }
    },
    created() {
        // this.meta_data.infant=this.row.get_meta.length

        // for(let i=0;i<this.row.get_meta.length;i++){
        //
        //     if(  this.row.get_meta[i].meta_key=='login'){

        //         this.meta_data.login=this.row.get_meta[i].meta_value;
        //
        //     }
        //
        // }
        // this.meta_data="hoooioi"
        // this.row.get_meta.forEach(function(e){
        //     // this.meta_data=e
        //
        //     if(e.meta_key=='meta_infant'){
        //
        //         this.meta_data.infant=e.meta_value;
        //
        //     }
        //
        //
        //
        // });


// console.log(this.row);
//         this.meta_data=this.row.get_meta;



        // Code...
    },
    methods: {
        // Code...
    }
}
</script>


<style scoped>
.checkbox_style{

font-size: 15px !important;
margin-left: 23% !important;
}
</style>
