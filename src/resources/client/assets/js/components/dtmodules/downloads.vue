<template>
    <div>
        {{cal}}
        <div v-if="total>0">

            {{login}} <progress   :value=login :max=total> </progress>

        </div>
    </div>

</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {
total:0,
            login:0
        }
    },
computed:{

    cal(){
this.total= this.row.members.length

        var newArray = this.row.members.filter(function (el) {
            return el.login == '1' ||  el.login ==1

        });
     this.login=newArray.length
        },

}


}
</script>


<style scoped>

</style>

