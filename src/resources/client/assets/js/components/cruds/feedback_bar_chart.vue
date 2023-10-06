<template>
    <div  id="chart" class="bg-white mt-2" style="border-radius: 10px;">
        <apexchart type="bar" height="250" :options="chartOptions" :series="series"></apexchart>
<!--        {{show_data}}<br>-->
<!--        {{chartOptions.xaxis.categories}}-->
    </div>
</template>

<script>
    import LocationPlaceEditComponent from "./Locationsplaceedit";

    export default {
        props: ['data'],
        components: {apexchart: VueApexCharts},
        name: "feedback_bar_chart",
        data(){
            return{
                series: [],
                chartOptions:   {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    toolbar: {
                        show: false
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '50%',
                            endingShape: 'rounded'
                        },
                    },

                    stroke: {
                        show: false,
                        width: 2,
                        colors: ['white']
                    },
                    xaxis: {
                        categories: ['1','2','3','4','5'],
                    },
                    fill: {
                        opacity: 1
                    },

                },
                show_data:[],

            }
        },
        mounted(){
            let values=[];
            let keys=[];
            this.data.forEach((data)=>{
                for (const [key, value] of Object.entries(data)) {
                    values.push(value)
                    keys.push(key)
                    this.show_data.push(value)
                }
            })
            // this.chartOptions.xaxis.categories=_.cloneDeep(keys);
            this.series.push({
                name: 'Total Rating',
                data: values
            })

        },
    }
</script>

<style scoped>

</style>
