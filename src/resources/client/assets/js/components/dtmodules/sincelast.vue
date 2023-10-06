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
                meta_data:{
                    last_quote_time: ''
                }
                // Code...
            }
        },
        computed:{
            last() {
                if(typeof this.row.meta_lastquote_time[0] ==="undefined"){
                    return "-"
                }
                else {
                    let     today = Math.round(+new Date().getTime()/1000);
                    var res = (today) - parseInt(this.row.meta_lastquote_time[0].meta_value);
// return today + '-'+this.meta_data.last_quote_time
                    //     var mins = Math.floor(res / 60000);
                    //     var hrs = Math.floor(mins / 60);
                    //     hrs = hrs % 24;
                    //     // var hours = Math.floor(res / 3600) % 24;
                    //     // var hours =  (parseInt(today) - parseInt(this.meta_data.last_quote_time)) / 36e5;
                    // return   hrs+'(Hrs)';
                    var diff =res;
                    diff /= (60 * 60);
                    // return Math.abs(Math.round(diff))+'(hrs)';
                    var result= Math.abs(Math.round(diff));
                    if(result<=24){
                        return Math.abs(Math.round(diff))+'(H)';
                    }
                    else{
                        // alert(result);
                        var y=result;
                        var x=24;
                        var quotient = Math.floor(y/x); //2
                        var remainder = y % x; //3
                        return quotient+'(D)'+remainder+'(H)';

                    }


                }

            }
        },
        watch:{
            // "row": function() {
            //
            //     for(let i=0;i<this.row.get_meta.length;i++){
            //
            //         if(  this.row.get_meta[i].meta_key=='lastquote_time'){
            //
            //             this.meta_data.last_quote_time=this.row.get_meta[i].meta_value;
            //
            //         }
            //
            //     }
            // },
            // "row.get_meta": function() {
            //
            //     for(let i=0;i<this.row.get_meta.length;i++){
            //
            //         if(  this.row.get_meta[i].meta_key=='lastquote_time'){
            //
            //             this.meta_data.last_quote_time=this.row.get_meta[i].meta_value;
            //
            //         }
            //
            //     }
            // }
        },
        created() {

            // this.meta_data.infant=this.row.get_meta.length

            // for(let i=0;i<this.row.get_meta.length;i++){
            //
            //     if(  this.row.get_meta[i].meta_key=='lastquote_time'){
            //
            //         this.meta_data.last_quote_time=this.row.get_meta[i].meta_value;
            //
            //     }
            //
            // }
            // this.meta_data="hoooioi"
            // this.row.get_meta.forEach(function(e){
            //     // this.meta_data=e
            //
            //     if(e.meta_key=='meta_infant'){
            //
            //         this.meta_data.infant=e.meta_value;
            //
            //     }
            //
            //
            //
            // });


// console.log(this.row);
//         this.meta_data=this.row.get_meta;



            // Code...
        },
        methods: {
            // Code...
        }
    }
</script>


<style scoped>

</style>

