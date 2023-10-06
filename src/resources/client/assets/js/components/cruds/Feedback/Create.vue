<template>
    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <h1>Feedback Question</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">
                            <div class="box-header ">

                            </div>


                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group col-md-12">
                                    <div class="row">
                                        <div class="col-md-5 col-sm-4">
                                            <label for="select_fields">Select Question Type</label>
                                            <v-select :clearable="false"
                                                      name="question_type"
                                                      label="type"
                                                      :options="question_type"
                                                      class="bg-white"
                                                      @input="select_type"
                                            />
                                        </div>
                                        <div class="col-md-5 col-sm-4" v-if="type!=''">
                                            <label for="form_name">Question</label>

                                            <textarea
                                                class="form-control bg-white "
                                                name="form_name"
                                                style="width: 100% !important;border: none;border-radius: 5px;"
                                                placeholder="Question"
                                                cols="100" rows="3"
                                                v-model="item.question" > </textarea>
                                        </div>

                                    </div>
                                    <div class="row">
                                            <div class="col-md-12 mt-5" v-if="type=='radio' || type=='checkbox'">
                                            <label for="field" style="color: black">Add Fields</label><br>
                                            <div class="form-group col-md-12">
                                                 <div class="row">
                                                <div v-for="(field,index) in item.options" class="col-md-3 form-group">

                                                    <input type="text"
                                                           class="form-control bg-white "
                                                           name="form_name"
                                                           style="  width: 90% !important;border-radius: 5px;"
                                                           placeholder="Option"
                                                           v-model="field.key">
                                                    <i style="float:right;font-size:20px;margin-top: -25px;" class="fa fa-trash f-2-0" title="Delete" @click="item.options.splice(index, 1)" aria-hidden="true"></i>

                                                </div>
                                                <div class="col-md-12 f-1-8"><i title="Add" aria-hidden="true"  @click="item.options.push({key:''})" class="fa fa-plus-circle f-2-5"></i>&nbsp;&nbsp;Add more</div>
                                                 </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="box-footer" style="text-align: right;background-color: transparent;">
                                <vue-button-spinner
                                    class="button-css"

                                >
                                    Save
                                </vue-button-spinner>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                item: {'question':'','type':'','options':[]},
                type:'',
                question_type:[{'type':'Text','field':'text'},{'type':'Radio','field':'radio'},{'type':'Check Box','field':'checkbox'}],
            }
        },
        computed: {

        },
        created() {
            // Code ...
        },

        methods: {
            select_type(e){
                this.type=e.field;
                this.item.type=e.field;
                this.item.options=[];

            },
            submitForm() {


                // this.storeData()
                //     .then(() => {
                //         this.$router.push({ name: 'rooms.index' })
                //         this.$eventHub.$emit('create-success')
                //     })
                //     .catch((error) => {
                //         console.error(error)
                //     })
            }
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

