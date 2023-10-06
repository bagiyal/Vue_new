<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">

        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Place Categories</h1>
        </section>

          <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box box_design">



                        <div class="col-md-12 container-fluid" >
                            <div class="row">
                                <div class="col-md-2">
                                    <div   class="box-body">
                                        <div class="btn-group" >
                                            <button

                                                @click="show_modal=true"
                                                class="btn btn-success btn-sm"
                                                style="font-size: 15px"
                                            >
                                                <i class="fa fa-plus"></i> Add new
                                            </button>

                                            <button type="button" style="font-size: 15px;margin-left: 5px;background-color: #ffc107 !important;" class="btn btn-default btn-sm" @click="fetchData">
                                                <i class="fa fa-refresh" :class="{'fa-spin': loading}"></i> Refresh
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">

                                </div>
                                <div class="col-md-6">

<!--                                    <div class="input-group" style="margin-top: 10px;">-->

<!--                                        <input type="text" v-model="localsearch" class="filter_bar2" placeholder="Search" style="height: 35px;">-->
<!--                                        <div class="input-group-append">-->
<!--                                            <button @click="updatesearch" class="btn btn-secondary filter_button2" v-if="search"  type="button">-->
<!--                                                <i class="fa fa-search"></i>-->
<!--                                            </button>-->
<!--                                            <button @click="clearsearch" class="btn btn-secondary filter_button2"  v-if="clear"  type="button">-->
<!--                                                <i class="fa fa-times-circle"></i>-->
<!--                                            </button>-->
<!--                                        </div>-->
<!--                                    </div>-->
                                </div>

                                <div class="col-md-2">


                                </div>

                            </div>
                        </div>


                        <div class="box-body">




                            <div v-if="show_modal===true">
                                <transition name="modal">
                                    <div class="modal-mask">
                                        <div class="modal-wrapper">
                                            <div class="modal-dialog " style="max-width: 1050px !important;">
                                                <div class="modal-content">
                                                    <div class="modal-header border-0 border-dotted" style="background: rgb(236, 240, 245) none repeat scroll 0% 0% !important;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                                                        <div class="container-fluid pr-0 border-bottom" style="border-bottom-style:dotted !important">
                                                            <div class="row">
                                                                <div class="col-10">

                                                                </div>
                                                                <div class="col-2 text-right">
                                                                    <button type="button" class="close  f-2-5" @click="close_modal()">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    <div class="modal-body" style="background: #ecf0f5 !important">
                                                        <div class="container-fluid c-grey">
                                                            <div class="row no-gutters">

                                                                <div class="col-md-12">
                                                                    <div class="input-group row" >
                                                                        <!--Category Name-->
                                                                        <div class="col-md-4  border-right border-white text-center"  >
                                                                            <label for="field" style="color: black">Category Name</label><br>
                                                                            <input type="text"
                                                                                   class="form-control bg-white mt-2"
                                                                                   name="form_name"
                                                                                   style="  width: 90% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                   placeholder="Enter Category Name"
                                                                                   v-model="item.name">
                                                                        </div>
                                                                        <!--Category Slug-->
                                                                        <div class="col-md-4  border-right border-white text-center"  >
                                                                            <label for="field" style="color: black">Category Slug</label><br>
                                                                            <input type="text"
                                                                                   class="form-control bg-white mt-2"
                                                                                   name="form_name"
                                                                                   style="  width: 90% !important;margin-bottom: 10px;border-radius: 5px;"
                                                                                   placeholder="Enter Category Name"
                                                                                   v-model="item.slug">
                                                                        </div>
                                                                        <div class="col-md-4 border-right border-white text-center">
                                                                            <label for="field" style="color: black">Sub Category Type</label><br>
                                                                            <div class="form-group">
                                                                                <v-select :clearable="false"
                                                                                          name="question_type"
                                                                                          v-model="type_model"
                                                                                          label="field"
                                                                                          :options="cat_types"
                                                                                          class="bg-white"
                                                                                          @input="select_type"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-4 border-right border-white text-center">
                                                                            <label for="field" style="color: black">Category Image</label><br>
                                                                            <div class="row mt-3">
                                                                                <div class="col-12 text-center f-1-6" v-if="item.image_url==''">

                                                                                        <input type="file" size="20"  @change="updateimage($event,'place_cat',1)">

                                                                                </div>
                                                                                <div class="col-12 text-center f-1-6" v-else>
                                                                                    <div class="row">
                                                                                        <div class="col-md-8 ">
                                                                                            <a class="download_button mt-n2 offset-2 f-1-6" target= "_blank" v-bind:href="item.image_url">Download</a>
                                                                                        </div>
                                                                                        <div class="col-md-2">
                                                                                            <img  @click="item.image_url=''" src="./../dashboard_resources/trash.png" class="hw-3 ">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>


                                                                    </div >

                                                                </div>

                                                            </div>

                                                            <div class="row mt-3">
                                                                <div class="col text-right" >
                                                                    <a v-if="item.name!=''" class="button-css bg-success" style="color: white;" value="Save"  @click="save_question()" >Save</a>

                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>

                            <datatable
                                v-if="!loading"
                                :columns="columns"
                                :data="data"
                                :total="total"
                                :query="query"
                                :xprops="xprops"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    import DatatableActions from '../../dtmodules/DatatableActions'
    import DatatableSingle from '../../dtmodules/DatatableSingle'
    import DatatableList from '../../dtmodules/DatatableList'
    import DatatableCheckbox from '../../dtmodules/DatatableCheckbox'
    import CategoriesIndex from '../../../../js/store/modules/Feedback/index.js'
    import DatatableActionsCategories from "../../dtmodules/DatatableActionsCategories";
    import uploadfile from "../../../mixins/uploadfile";
    import DatatableActionsCategoriesImage from "../../dtmodules/DatatableActionsCategoriesImage";


    export default {
        data() {
            return {
                columns: [
                    { title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Category Name', field: 'name', colStyle: 'width: 50px;' },
                    { title: 'Sub Category', field: 'sub_categories', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Slug', field: 'slug', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Image', field: 'image_url', sortable: true, colStyle: 'width: 50px;' },
                    { title: 'Actions', tdComp: DatatableActionsCategories, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }
                ],
                query: { sort: 'id', order: 'asc' },
                xprops: {
                    module: 'CategoriesIndex',
                    route: 'feedback',
                    permission_prefix: 'feedback_',
                    update_id:''
                },
                user_role:'',
                clear:false,
                search:true,
                localsearch:'',
                // data:[],
                show_modal:false,
                item: {'taxonomy':'custom_category','name':'','slug':'','sub_categories':'','image_url':''},
                cat_types:[{'name':'shopping','field':'Shopping'},{'name':'cuisine','field':'Cuisine'},{'name':'sight-seeing','field':'Sight Seeing'},{'name':'expense','field':'Expense'}],
                type_model:{},
                user_id:'',
                role:'',
                counter:0,

            }
        },
        created() {
            this.$root.relationships = this.relationships
            this.fetchData()

        },
        destroyed() {
            this.resetState()
        },
        computed: {
            ...mapGetters('CategoriesIndex', [ 'data','total', 'loading']),
        },
        watch: {
            query: {
                handler(query) {
                    this.setQuery(query)
                },
                deep: true
            },
            "xprops.update_id": function () {
                if(this.xprops.update_id!=''){
                    this.data.forEach((data)=>{
                        if(this.xprops.update_id==data.id){
                            this.show_modal=true;
                            if(data.image_url==null){
                                data.image_url='';
                            }
                            if(data.sub_categories=='shopping'){
                                this.type_model={'name':data.sub_categories,'field':'Shopping'};
                            }
                            if(data.sub_categories=='cuisine'){
                                this.type_model={'name':data.sub_categories,'field':'Cuisine'};
                            }
                            if(data.sub_categories=='sight-seeing'){
                                this.type_model={'name':data.sub_categories,'field':'Sight Seeing'};
                            }
                            if(data.sub_categories=='expense'){
                                this.type_model={'name':data.sub_categories,'field':'Expense'};
                            }

                        this.counter=1;
                            this.item={'taxonomy':'custom_category','name':data.name,'slug':data.slug,'sub_categories':data.sub_categories,'image_url':data.image_url};
                        }
                    })
                }
            }
        },
        methods: {
            ...mapActions('CategoriesIndex', ['fetchData', 'setQuery', 'resetState']),
            updateimage(value, type, index) {
                uploadfile("place", type, value.target.files[0], Math.floor(Math.random() * 6) + 1
                ).then(response => {
                    this.item.image_url = window.location.origin+response.data;

                })
            },
            select_type(e){
                this.item.sub_categories=e.name;


            },
            updatesearch() {
                this.setsearch(this.localsearch)
                if(this.localsearch!=''){
                    this.search=false;
                    this.clear=true;
                }
            },
            clearsearch() {
                this.localsearch=""
                this.setsearch(this.localsearch)

                this.search=true;
                this.clear=false;
            },
            save_question(){
                if(this.item.name!='' && this.item.name!=''){

                    if(this.item.slug==''){
                        this.item.slug=this.item.name.toLowerCase();
                    }

                    let form = new FormData();
                    form.set("data", JSON.stringify(this.item))
                    form.set("counter", this.counter)
                    form.set("id", this.xprops.update_id)
                    axios.post('/api/webservices/save_place_categories', form)
                        .then(response => {
                            this.show_modal=false;
                            this.item={'taxonomy':'custom_category','name':'','slug':'','sub_categories':'','image_url':''};
                            this.type_model={};
                            this.fetchData()
                            this.counter=0;
                            this.$eventHub.$emit('create-success');
                            this.xprops.update_id='';
                        })



                }
                else{
                    alert('Please Fill All Fields');
                    return  false;
                }
            },
            close_modal(){
                this.show_modal=false;
                this.xprops.update_id='';
                this.counter=0;
                this.item={'taxonomy':'custom_category','name':'','slug':'','sub_categories':'','image_url':''};
                this.type_model={};
            },
        }
    }
</script>


<style scoped>
    .button-css{
        position: unset !important;
    }
</style>
<style scoped>
    .content_div{

        padding: 15px !important;
        border-radius: 5px !important;
        margin-top: 20px;
    }
    .content_row{
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .no_event{
        pointer-events:none;
    }
    .button-css{
        position: unset !important;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        /*vertical-align: middle;*/
    }
    .activedev{
        display: block !important;
    }
    .hidedev{
        display: none;
    }
    .bg-primary {
        color: white !important;
    }
    .v-select .selected-tag{
        display: none !important;
    }
    .hidetag .selected-tag{
        display: none !important
    }
    input[type="file"] {
        display: block !important;
    }
    .fa.fa-trash {
        font-size: 15px;
        padding: 3px;
    }
    input{
        border: none;
        /*border-bottom-color: currentcolor;*/
        /*border-bottom-style: none;*/
        /*border-bottom-width: medium;*/
        /*border-bottom: 1px solid #00000038;*/


        background: #ecf0f5 ;
        border-radius: 5px;
        margin-bottom:5px;
    }
    .fa-trash{
        color: gray !important;
        cursor: pointer;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
        font-size: 18px !important;
        color:black;
        font-weight: normal;
    }
    .header_footer{

        padding:10px 0px 10px 0px;
        color:black;

    }
    .field_class{
        border: none !important;
        border-radius: 5px !important;
        padding:10px;
    }
</style>
<style scoped>
    /* The container */
    .container_box {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container_box input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark_box {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius:5px;
    }

    /* On mouse-over, add a grey background color */
    .container_box:hover input ~ .checkmark_box {
        background-color: #ccc;
    }


    /* When the checkbox is checked, add a blue background */
    .container_box input:checked ~ .checkmark_box {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark_box:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container_box input:checked ~ .checkmark_box:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container_box .checkmark_box:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .fields_div{
        font-size: 18px; color: grey; font-weight: 525; margin-left: -20px;text-align: right;
    }
</style>

