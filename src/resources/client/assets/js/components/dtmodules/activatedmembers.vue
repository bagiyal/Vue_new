<template>
    <div>

        {{not_active}}/{{total}}

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

    not_active(){
return this.row.members.length-this.row.not_activated_mem.length

        },
    total(){
        return this.row.members.length

    }
}


}
</script>


<style scoped>

</style>

