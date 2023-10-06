<template>
    <div style="text-align: center;margin-top: -10px;" v-if="row.totalDocs>0" :key="row.id">

<!--        {{row.meta_doc_tags}}-->
<!--        {{row.meta_family}}-->

        {{row.uploadedDocs}}/{{row.totalDocs}}<br>
        <progress   :value=row.uploadedDocs :max=row.totalDocs> </progress>
    </div>
    <div  v-else>
        0/0<br>
    </div>
</template>


<script>
export default {
    props: ['row', 'field'],
    data() {
        return {
            doc:0,
            total:0,
            show:0,
            doc_data_new:[],
            fam:[],
            fam_count:0,

            // Code...
        }
    },
    computed:{

    },

}
</script>


<style scoped>
.checkbox_style{
color: #1E51A4 !important;
font-size: 15px !important;
margin-left: 30% !important;
}
.checkbox_style2{
font-size: 15px !important;
margin-left: 30% !important;
}

</style>
