<template>
    <div>

        {{company}}

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

        company(){
if(this.row.company !== null){
    if(this.row.company!=='null' && this.row.company.length>4 ){
        return JSON.parse(this.row.company).name
    }
    else {
        return ""
    }
}
else {
    return ""
}
        }
}


}
</script>


<style scoped>

</style>

