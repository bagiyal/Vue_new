<template>
    <div style="margin-left: 25%">

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

        }
    },
    computed:{
        last() {

             let     today = Math.round(+new Date().getTime()/1000);
             let create=Math.round(+new Date(this.row.created_at).getTime()/1000);
              var new_date=this.convert(create);
              var today2 = new Date(new_date);
            var hh=document.querySelector("meta[name='time-zone-offset']").getAttribute('content').split(':').shift()
            var mm=document.querySelector("meta[name='time-zone-offset']").getAttribute('content').split(':')[1]
            var sign = document.querySelector("meta[name='time-zone-offset']").getAttribute('content').charAt(0)
            if(parseInt(mm)>0){
                var mm2=parseInt(mm)/60
            }
            else{
                var mm2=0
            }

            var finalh=sign + parseInt(hh);
            var finalm=sign + parseInt(mm);

            today2.setHours(today2.getHours() + parseInt(finalh));
            today2.setMinutes(today2.getMinutes() + parseInt(finalm));
            var create2=Math.round(+new Date(today2).getTime()/1000);
                var res = (today) - parseInt(create2);

                var diff =res;
                diff /= (60 * 60);
            var result= Math.abs(Math.round(diff));
            if(result<=24){
                return Math.abs(Math.round(diff))+'(H)';
            }
            else{
                 var y=result;
                var x=24;
                var quotient = Math.floor(y/x); //2
                var remainder = y % x; //3
                return quotient+'(D)'+remainder+'(H)';
            }


        }
    },
    watch:{

    },
    created() {
        // this.meta_data.infant=this.row.get_meta.length
        // alert('hello');

    },
    methods: {
        convert(value){

            // Unixtimestamp
            var unixtimestamp = value;

            // Months array
            var months_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];

            // Convert timestamp to milliseconds
            var date = new Date(unixtimestamp*1000);

            // Year
            var year = date.getFullYear();

            // Month
            var month = months_arr[date.getMonth()];

            // Day
            var day = date.getDate();

            // Hours
            var hours = date.getHours();

            // Minutes
            var minutes = "0" + date.getMinutes();

            // Seconds
            var seconds = "0" + date.getSeconds();

            // Display date time in MM-dd-yyyy h:m:s format
            var convdataTime = year+'-'+month+'-'+day+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            return convdataTime;

        },
    }
}
</script>


<style scoped>

</style>
