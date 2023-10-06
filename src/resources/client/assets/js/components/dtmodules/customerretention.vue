<template>
    <div>

        <span  style="margin-left: 25%" >
            {{ row.type_customer }}
<!--            {{temp}}-->
        </span>
    </div>
</template>


<script>
    // import getmeta from '../../mixins/getmeta';
export default {
    props: ['row', 'field'],
    data() {
        return {
            meta_data:{
                traveller_id: ''
            },
            temp:""
            // Code...
        }
    },
    computed:{
        // last() {
        //     if(this.row.meta_traveller_id[0] ==='undefined' ){
        //         return "-"
        //     }
        //     else {
        //            getmeta(this.row.meta_traveller_id[0].meta_value,'traveller','association')
        //            .then(response => {
        //
        //               this.temp=response;
        //
        //                // let temp2= JSON.parse(response);
        //                // for(let i=0;i<temp2.length;i++){
        //                //     // this.temp=JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id;
        //                //     if(temp2[i].agency===JSON.parse(document.querySelector("meta[name='agency-id']").getAttribute('content')).id){
        //                //         // this.temp="hello1";
        //                //         if(temp2[i].customer_type==="customer"){
        //                //             this.temp= "Old Customer"
        //                //         }
        //                //         //"prospect"
        //                //         else{
        //                //             this.temp= "New Customer"
        //                //         }
        //                //
        //                //     }
        //                //
        //                // }
        //            })
        //         return this.temp;
        //           // typeof  JSON.parse(this.temp)
        //
        // }
        //
        // }
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
        //     if(  this.row.get_meta[i].meta_key=='traveller_id'){
        //
        //         this.meta_data.traveller_id=this.row.get_meta[i].meta_value;
        //
        //     }
        //
        // }




        // Code...
    },
    methods: {
        // Code...
    }
}
</script>


<style scoped>

</style>
