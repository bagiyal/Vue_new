<template>
    <div>

        {{name}}

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

        name(){
if(this.row.group_name!==null){
    return this.row.group_name
}
else {
    return this.row.tour_name
}
        }
}


}
</script>


<style scoped>

</style>

