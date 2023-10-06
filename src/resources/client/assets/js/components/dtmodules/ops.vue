<template>
    <div>

        <span v-if="meta_data.ops" >
        {{meta_data.ops.name}}

        </span>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {
            meta_data:{
                ops: ''
            }
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
        if(this.row.get_meta.length>0){
            for(let i=0;i<this.row.get_meta.length;i++){

                if(  this.row.get_meta[i].meta_key=='ops'){

                    this.meta_data.ops=this.row.get_meta[i].meta_value;

                }

            }
        }

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

</style>

