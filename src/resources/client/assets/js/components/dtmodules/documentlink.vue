<template>
    <div >

  <a v-if=" row.image!=null" :href="base_url+'/'+row.image" download>Download</a>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {
            base_url:'',


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
        this.base_url = window.location.origin;


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
