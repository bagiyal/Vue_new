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

                var default_length = 15;
                var trimmedString = this.row.remark.substring(0, default_length);

                return trimmedString+"...";
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

