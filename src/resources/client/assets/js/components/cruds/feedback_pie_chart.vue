<template>
    <div  id="chart" class="bg-white mt-2" style="border-radius: 10px;">
        <apexchart type="pie" v-if="show_data" width="380" :options="chartOptions" :series="series"></apexchart>


    </div>
</template>

<script>
    import LocationPlaceEditComponent from "./Locationsplaceedit";

    export default {
        props: ['data'],
        components: {apexchart: VueApexCharts},
        name: "feedback_pie_chart",
        data(){
            return{
                series: [],
                chartOptions: {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    toolbar: {
                        show: true
                    },
                    labels: [],

                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
                show_data:false,


            }
        },
        mounted(){
            let values=[];
            let keys=[];
            this.data.forEach((data)=>{
                for (const [key, value] of Object.entries(data)) {
                    values.push(value)
                    keys.push(key)

                }
            })
            this.chartOptions.labels=keys;
            this.series=values;
            this.show_data=true;

        },
    }
</script>

<style scoped>

</style>
