<template>
    <div>

       <span v-if="row.activated==='1'" >
           <i style="color: #3b9bff" class="fa fa-check-square checkbox_style" aria-hidden="true"></i>

        </span>
        <span v-if="row.activated==='2'" >
           <i style="color: rgba(0,0,0,0.42)" class="fa fa-check-square checkbox_style2" aria-hidden="true"></i>

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
color: #1E51A4 !important;
font-size: 15px !important;
margin-left: 30% !important;
}
.checkbox_style2{
font-size: 15px !important;
margin-left: 30% !important;
}
</style>
