<template>
    <div>

        <span  >
            {{ pax }}
        </span>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {

        }
    },
    computed:{
        pax() {
            var inf=0;
            if(typeof this.row.meta_infant[0] ==="undefined"){
                inf=0;
            }
            else {

                inf=  this.row.meta_infant[0].meta_value
            }
          return   parseInt(this.row.no_of_adults) +  parseInt(this.row.no_of_children) +   parseInt(inf);
        }
    }

}
</script>


<style scoped>

</style>

