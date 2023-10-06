<template>
    <div>

        {{createdate}}

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
        createdate(){
            let create=Math.round(+new Date(this.row.created_at).getTime()/1000);
            //return create
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
            const dateObject = new Date(today2)
//return final;
return        dateObject.toLocaleString("en-US", {year: "numeric"}) +"-"+
            dateObject.toLocaleString("en-US", {month: "2-digit"})+"-"+
            dateObject.toLocaleString("en-US", {day: "2-digit"})+" "+

             dateObject.toLocaleString().split(' ')[1]

           // return dateObject.toLocaleString()
        }
    }

    ,
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

