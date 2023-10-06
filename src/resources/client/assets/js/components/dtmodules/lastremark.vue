<template>
    <div>

        <span  >
            {{ last }}
        </span>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {

            // Code...
        }
    },
    computed:{
        last() {
           let rem_arr= JSON.parse(this.row.remark);
           // rem_arr.forEach(function (obj) {
           //     let rem=obj;
           //
           // })
            var length=rem_arr.length;
            var default_length = 10;
            var trimmedString = rem_arr[Object.keys(rem_arr)[length-1]].remark.substring(0, default_length);

           return trimmedString+"...";
           // return rem_arr[Object.keys(rem_arr)[length-1]].remark;
//            let rem_ob= rem_arr[rem_arr.length-1]
// return rem_ob.remark
        }
    },
    watch:{
        // "row": function() {
        //
        //
        // }
    },
    created() {

    },
    methods: {
        // Code...
    }
}
</script>


<style scoped>

</style>

