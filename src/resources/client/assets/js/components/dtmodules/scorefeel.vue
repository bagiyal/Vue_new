<template>
    <div>

<span v-if="row.score_new">
      <div v-if="Math.trunc(parseInt(row.score_new))===5" class="bg-danger" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">5</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score_new))===4" class="bg-warning" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">4</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score_new))===3" class="bg-primary" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">3</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score_new))===2" class="bg-success" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">2</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score_new))===1" class="bg-dark" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">1</div>
      </div>


</span>
        <span v-else>
             <div v-if="Math.trunc(parseInt(row.score))===5" class="bg-danger" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">5</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score))===4" class="bg-warning" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">4</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score))===3" class="bg-primary" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">3</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score))===2" class="bg-success" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">2</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.score))===1" class="bg-dark" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">1</div>
      </div>
<!--temp-->
<!--<div v-else class="bg-primary" style=" border: solid 1px white;  height: 18px; text-align: center;">-->
<!--                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">3</div>-->
<!--      </div>-->
        </span>

        <span  >

   <div v-if="Math.trunc(parseInt(row.query_feel))===5" class="bg-danger" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">5</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.query_feel))===4" class="bg-warning" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">4</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.query_feel))===3" class="bg-primary" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">3</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.query_feel))===2" class="bg-success" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">2</div>
      </div>
      <div v-if="Math.trunc(parseInt(row.query_feel))===1" class="bg-dark" style=" border: solid 1px white;  height: 18px; text-align: center;">
                    <div  style=" border: solid 1px white;font-size: 12px; color: white; font-weight: 600;">1</div>
      </div>


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

