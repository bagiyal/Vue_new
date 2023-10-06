<template>
    <div>

        {{row.driver_pickup_date_time.substring(0, row.driver_pickup_date_time.indexOf(' ')) }}

    </div>
</template>


<script>
    import moment from 'moment-timezone'
export default {
        props: ['row','xprops'],
    data() {
        return {

        }
    },
        created() {



        },
        methods: {



        },
        filters: {

            moment: function (value) {

                var datum = Date.parse(value);



                const milliseconds = datum// 1575909015000


                const dateObject = new Date(milliseconds)
// return dateObject;
                dateObject.setHours(dateObject.getHours() - 5);
                dateObject.setMinutes(dateObject.getMinutes() - 30);
// return milliseconds;
                const humanDateFormat = dateObject.toLocaleString("nl-NL").split(" ")[0] //2019-12-9 10:30:15
                return humanDateFormat;
                // dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
                dateObject.toLocaleString("en-US", {month: "long"}) // December
                dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
                dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
                dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
                dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
                dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
                dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST
                return  dateObject;
            },
            dateonly: function (value) {
                if (value) {
                    return moment.unix(value).format("MM-DD-YYYY")
                }
            },
            timeonly: function (value) {
                if (value) {
                    return moment.unix(value).format("h:mm a")
                }
            },
        },
}
</script>


<style scoped>

</style>

