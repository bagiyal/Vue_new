<template>
    <div >

        <input type="checkbox" @click="check()">

    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {


        }

    },
    created(){},
    method:{

        check(){
            this.$emit('showday',this.row.id)
        }

    }





}
</script>


<style scoped>

</style>

