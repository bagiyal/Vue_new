<template>
    <div>

              <span v-if="row.status==='0'" >
         <i style="color:#e59745" class="fa fa-clock-o" aria-hidden="true"></i>
            </span>
             <span v-if="row.status==='2'" >
          <i style="color:green" class="fa fa-check" aria-hidden="true"></i>

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

    created() {



        // Code...
    },
    methods: {
        // Code...
    }
}
</script>


<style scoped>

</style>

