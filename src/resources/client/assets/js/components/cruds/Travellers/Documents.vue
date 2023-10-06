<template>
    <div ><div   class="container-fluid">

        <div v-for="(mamDoc,key,index) in docs"  id="accordionExample" class="accordion  d-md-block d-lg-block d-xl-block">

            <div  id="90" class="item"><div  id="headingOne90" class="item-header">
            <h2  class="mb-0">
                <button  type="button" data-toggle="collapse" :data-target="'#collapseOne'+index" aria-expanded="true" :aria-controls="'collapseOne'+index" class="btn btn-link">
                {{key}}
        <i  class="fa  fa-angle-down"></i></button></h2></div>
                <div  :id="'collapseOne'+index" aria-labelledby="headingOne90" data-parent="#accordionExample" :class="index + 1 == 1 ?'collapse show':'collapse'">

                    <div  class="t-p"><div >
                        <div  class="row border-bottom" >
                        <div  class="col-xs-4 ">


                        <label >Name</label>
                        </div>
                        <div  class="col-xs-4  center">
                        <label > Document Type</label>
                        </div>
                        <div  class="col-xs-4  center">
                        <label >Download</label></div>
                        </div>
                        <div  class="row border-bottom mt-3 " v-for="mamData in mamDoc">

                        <div  class="col-xs-4 ">
                            <h2  style="margin-top: -10px;">{{mamData.docname}}</h2>
                        </div>
                        <div  class="col-xs-4  center">
                            <span ><h2  style="color: green;">{{mamData.doctype}}</h2></span>
                        </div>
                        <div  class="col-xs-4  center">
                            <span ><h2><a class="fa fa-download" :href=" mamData.doctype == 'passport' ? mamData.pdf:mamData.url"  target="_blank"></a></h2></span>
                        </div>
                    </div>
                        <div  style="text-align: center; padding: 1rem;">
                        </div></div></div></div></div>

            </div>
    </div></div>

</template>

<script>
    export default {
        name: "Documents",
        props: ['memDocs'],
        data(){
            return{
                traveller_id:null,
                docs:[],
                count:0,
            }
        },
        mounted() {
            this.docs=JSON.parse(this.memDocs)

        }
    }
</script>

<style scoped>
    .border-bottom-2{
        border-bottom: 1px dotted grey;
    }

    .comment_design{

        padding: 10px 13px 10px 13px;
        border-radius: 25px;
        background: #d0cfcf;
        color: #fff;
        text-transform: uppercase;
    }

    label{
        font-size: 20px !important;
        color: gray;
        font-weight: 300;
    }
    .accordion{
        margin: 20px 0;
    }
    .accordion .item {
        border: none;
        margin-bottom: 50px;
        background: none;
    }
    .t-p{
        color: black;
        padding: 20px 15px 0px 15px;
    }
    .accordion .item .item-header h2 button.btn.btn-link {
        background: #fff;
        color: black;
        border-radius: 0px;

        font-size: 18px;
        font-weight: 700;
        line-height: 2.5;
        text-decoration: none;
    }
    .accordion .item .item-header {
        border-bottom: none;
        background: transparent;
        padding: 0px;
        margin: 2px;
    }

    .accordion .item .item-header h2 button {
        color: white;
        font-size: 20px;

        display: block;
        width: 100%;
        text-align: left;
    }

    .accordion .item .item-header h2 i {
        float: right;
        font-size: 30px;
        color: black;
        background-color: transparent;
        width: 60px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    button.btn.btn-link.collapsed i {
        transform: rotate(0deg);
    }

    button.btn.btn-link i {
        transform: rotate(180deg);
        transition: 0.5s;
    }



</style>
