<template>
    <div class="container-fluid">
        <div class="accordion  d-md-block d-lg-block d-xl-block"   id="accordionExample" >
            <div class="item" :id="book.id" v-for="(book,index_book) in data" :key="index_book+book.id" v-if="book.id">
                <div class="item-header" :id="'headingOne'+book.id" @click="setTab(book.id)">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                :data-target="'#collapseOne'+book.id" aria-expanded="true" :aria-controls="'collapseOne'+book.id">
                            {{book.tour_name}}
                            <i class="fa " :class="Object.keys(data).length-1==1?'fa-angle-up':'fa-angle-down'"></i>
                        </button>
                    </h2>
                </div>
                <div :id="'collapseOne'+book.id"   :class="index_book+1==1?'collapse show':'collapse'"  :aria-labelledby="'headingOne'+book.id"
                     :data-parent="'#accordionExample'">
                    <div class="t-p">

                        <div class="">
                            <div class="row border-bottom" >
                                <div class="col-xs-4 " style=""  ><label>Name</label></div>
                                <div class="col-xs-4  center" style=""  ><label>Payment Status</label></div>
                                <div class="col-xs-4  center" style=""  ><label>Action</label></div>
                            </div>
                            <div class="row border-bottom mt-3 " v-for="(form,index) in book.forms" :key="index+form.id" v-if="(form.kyc_data==null) && ( form.approve==1 && form.group_id==''?true:book.member_of_iti==form.group_id)">
                                <div class="col-xs-4 HandilOverFloe" style=""  >
                                    <sup v-if="form.status==0" style="color: red;font-weight: bold">NEW</sup>
                                    <h2 :style="form.status==0?'margin-top: -10px;':''" >{{form.name}}
                                        <sub v-if="form.relation && form.long_id.search('FAM')>=0" class="text-secondary">{{form.relation.includes('relation_proof')?JSON.parse(form.relation).relation:form.relation}}</sub>
                                    </h2>

                                </div>
                                <div class="col-xs-4  center" >
                                    <span> <h2 :class="form.payment_status==0?'text-danger':'text-success'" >{{form.payment_status==0?'Pending':'Paid'}}</h2></span>
<!--                                    <span v-if="form.status==0 || form.status==3 "><i class="fa fa-file-text text-warning f-1-8" title="Form Pending" aria-hidden="true"></i></span>-->
<!--                                    <span v-else><i class="fa fa-file-text text-success  f-1-8" title="Filled" aria-hidden="true"></i></span>-->
<!--                                    <span v-if="form.payment_status==0"><i class="fa fa-money text-danger f-1-8" title="Payment Pending" aria-hidden="true"></i></span>-->
<!--                                    <span v-if="form.payment_status==1"><i class="fa fa-money text-success  f-1-8" title="Paid" aria-hidden="true"></i></span>-->

                                </div>
                                <div class="col-xs-4  center mb-2"  >

                                    <div  role="group" >

                                        <span class="btn-group btn-group-lg" v-if="form.payment_status==1 && form.status!=4 && form.kyc_data==null"  >
                                        <button type="button" href="#" v-if="form.status==0 && form.member_allowed>=0 && form.long_id.search('FAM')<0" class="btn btn-primary " @click="call_func(form.get_group?'show_form':'show_form1',index,form,book)" >Fill Form</button>
                                        <button type="button" href="#" v-else-if="form.status==0 && form.member_allowed>=0 && form.long_id.search('FAM')>=0" class="btn btn-primary " @click="$emit('show_form1',form,book)" >Fill Form</button>
                                        <button type="button" href="#" v-else-if="form.status==0 && form.member_allowed<=0" class="btn btn-primary " @click="$emit('show_form1',form,book)" >Fill Form </button>
                                        <button type="button" href="#" v-else class="btn btn-info " @click="$emit('show_form1',form,book)" >Update</button>
                                      </span>
                                        <span class="btn-group btn-group-lg" v-if="form.payment_status==0  && platform=='sotc'&& form.status!=4 && form.kyc_data==null">
                                    <!--<button type="button" class="btn btn-success">Pay Now</button>-->

                                            <button type="button" href="#" v-if="form.status==0 && form.member_allowed>=0 && form.long_id.search('FAM')<0" class="btn btn-primary " @click="call_func(form.get_group?'show_form':'show_form1',index,form,book)" >Fill Form</button>
                                            <button type="button" href="#" v-else-if="form.status==0 && form.member_allowed>=0 && form.long_id.search('FAM')>=0" class="btn btn-primary " @click="$emit('show_form1',form,book)" >Fill Form</button>
                                            <button type="button" href="#" v-else-if="form.status==0 && form.member_allowed<=0" class="btn btn-primary " @click="$emit('show_form1',form,book)" >Fill Form</button>
                                            <button type="button" href="#" v-else class="btn btn-info " @click="$emit('show_form1',form,book)" >Update</button>

                                        </span>
                                        <span class="btn-group btn-group-lg" v-if="form.payment_status==0  && platform!='sotc'&& form.status!=4">

                                             <button type="button " class="btn btn-success" @click="call_func('paynow',index,form)">Pay Now</button>

                                    </span>
                                        <span class="btn-group btn-group-lg" v-if="form.status==4" >

<!--                                        <button type="button " class="btn btn-secondary" @click="call_func('show_form1',index,form,book)">Form Window Closed</button>-->
                                        <button type="button " class="btn btn-secondary" >Form Window Closed</button>

                                         </span>
                                        <span class="btn-group btn-group-lg" v-if="form.long_id.search('FAM')<0 && book.get_meta.length>0 && book.get_meta.length>0 && form.booking_id==book.id">

                                            <span v-for="meta in book.get_meta" v-if="book.kyc_status=='sent' && meta.meta_key=='payments'">

                                                  <button v-if="JSON.parse(meta.meta_value).length >0"  @click="call_func('show_form1',form.booking_id,'kyc',book)" type="button " class="btn btn-success" style="font-size: 14px">Payment</button>
                                                <button v-else @click="call_func('show_form1',form.booking_id,'kyc',book)" type="button " class="btn btn-success" style="font-size: 14px">Fill Kyc</button>


                                            </span>


                                            <button v-if="book.kyc_status=='filled'" @click="call_func('show_form1',form.booking_id,'kyc',book)" type="button " class="btn btn-dark">KYC Filled</button>

                                         </span>


                </div>

                                </div>
                            </div>
                            <!--                                        only for tc/sotc-->
                            <div style="text-align: center;padding:1rem">

                                <button

                                    @click="$emit('payment_details',book.id,book.forms[0])"
                                    style="margin-right: 1rem"
                                    v-if="book.forms[0].payment_check!=null"
                                    class="btn btn-lg"
                                    :class="book.get_meta[1].meta_value.includes('true')?'btn-secondary':'btn-warning' "
                                    >
                                    Check Quote
                                </button>
                                <button
                                    class="btn btn-danger btn-lg"
                                    @click="$emit('mf_payment',book.id,book.forms[0])"
                                    v-if="(payment_button || book.forms[0].payment_check!=null) && (book.get_meta[1].meta_value.includes('false') ) "
                                >Pay Now
                                </button>
                            </div>
                        </div>
                    <!--{{book.forms}}-->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['data','platform','traveller_data','form_data','payment_button'],
        name: "FormsAccordion",
        data(){
            return{
                currentTab:null,
                select_form:null,
                options:[],
                forms:[],
                total_forms:0,
                selected_group: {},
                group_selector:false,
                formIndex:null,


            }
        },
        watch: {
            'data':function (){

                // alert(typeof this.data);
                this.forms=this.data;

                // this.data.forEach((forms)=>{
                //     if(forms.id){
                //         this.options.push({'label':forms.tour_name+' on '+forms.driver_pick_up_time,'id':forms.id})
                //     }
                // })
            },
            'forms':function (){
                this.options=[];
                this.total_forms=0;
                Object.keys(this.forms).forEach(key => {
                    if(this.forms[key]['id']){

                        this.options.push({'label':this.forms[key]['tour_name']+' on '+this.forms[key]['driver_pick_up_time'],'id':this.forms[key]['id']});
                        this.total_forms++;
                    }

                    // console.log(this.forms[key]); // the value of the current key.
                });
                if(this.total_forms>1){
                    this.group_selector=true;
                }
                else{
                    Object.keys(this.forms).forEach(key => {
                        if(this.forms[key]['id']){
                            this.selected_group=_.cloneDeep(this.forms[key]);

                        }
                    });
                }

            }
        },
        computed:{

        },
        mounted(){


        },
        filters: {
            // showTab: function (value) {
            //     alert(value);
            // },
        },
        methods:{
            setTab (id){
                // alert(id);
                var element = document.getElementById("collapseOne"+id);
                if(id==this.currentTab){
                    // alert('if');
                    this.currentTab=null;
                    // element.classList.remove("show")
                    // setTimeout(, 1000);

                    // return true;
                }
                else{
                    // alert('else');
                    // return false;
                    this.currentTab=id;

                    // element.classList.add("show")

                }

            },
            inmodal(value){
                if(value!=null){
                    this.selected_group= {};
                    Object.keys(this.forms).forEach(key => {
                        if(this.forms[key]['id']==value.id){

                            this.selected_group=_.cloneDeep(this.forms[key]);
                        }
                    })


                }
                else{
                    this.selected_group= {};
                }

            },
            call_func(func,id,form,book){
                //
                // alert(func);
                // console.log(form);
                // return false;
                if(form=='kyc'){

                    Object.keys(this.forms).forEach(key => {
                        if(this.forms[key]['id']){
                            if(this.forms[key]['id']==id){
                                this.forms[key].forms.forEach((mem_form)=>{
                                    if(mem_form.kyc_data){
                                        this.$emit(func,mem_form,book);
                                    }
                                })
                            }

                        }
                    });


                }
                else{
                    this.$emit(func,form,book);
                    // alert(func+'-'+id);
                }
            },
        },
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
<style>
    a.notif{
        display:none  !important;
    }
    .HandilOverFloe{
        word-wrap: break-word;
    }
</style>
