<template>
    <div style="margin-left: 25%">


<span v-if="row.meta_query_gen[0] !=='undefined'">

</span><span v-for="q in JSON.parse(row.meta_query_gen[0].meta_value)" >
        <router-link

            :to="{ name: 'queries.edit', params: { id: q } }"
           style="color: #0000ff">
         #{{q}}

        </router-link>
    </span>
        <br>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {
            meta_data:{

                meta_query_gen: ''

            }

        }
    },
    computed:{
        last() {

           // return    this.$router.push({ path: '/queries/'+this.meta_data.meta_query_gen+'/edit' })


        }
    },
    watch:{

    },
    created() {
        // this.meta_data.infant=this.row.get_meta.length

        // for(let i=0;i<this.row.get_meta.length;i++){
        //
        //     if(  this.row.get_meta[i].meta_key=='meta_query_gen'){
        //
        //         this.meta_data.meta_query_gen=JSON.parse(this.row.get_meta[i].meta_value);
        //
        //     }
        //
        // }

    },
    methods: {
        // Code...
    }
}
</script>


<style scoped>

</style>
