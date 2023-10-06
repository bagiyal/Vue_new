<template>
    <section class="content-wrapper"  style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <bootstrap-alert :inmodal=true :showme="showerror" @showmechange="showerror=false"/>
            <h1>Traveller Create</h1>
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
                                <div class="col-md-12">
                                    <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name">Name *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter Name *"
                                            :value="item.name"
                                            @input="updateName"
                                            >
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="display_name">Display name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="display_name"
                                        placeholder="Enter Display name"
                                        :value="item.display_name"
                                        @input="updateDisplay_name"
                                    >
                                </div>
                            </div></div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="email">Email Primary*</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="email"
                                                placeholder="Enter Email *"
                                                :value="item.email"
                                                @input="updateEmail"
                                            >
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="email">Email Secondary</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="email"
                                                placeholder="Enter Secondary Email"
                                                id="secondary_email"
                                                :value="meta.meta_secondary_email"
                                                @input="updatemeta_secondary_email"

                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="phone">Primary Phone Number *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="phone"
                                            placeholder="Enter Phone Number *"
                                            :value="item.phone"
                                            @input="updatePhone"
                                            >
                                </div>
                                <div class="form-group col-md-6">
                                            <label for="phone">Secondary Phone Number </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="phone"
                                                placeholder="Secondary Phone Number"
                                                id="secondary_num"
                                                :value="meta.meta_secondary_phone"
                                                @input="updatemeta_secondary_phone"

                                            >
                                        </div>
                                    </div></div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="company_name">Company Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="company"
                                                placeholder="Enter Company Name"
                                                :value="meta.meta_company_name"
                                                @input="updatemeta_company_name"

                                            >
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="role">Role</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="role"
                                                placeholder="Enter Role"
                                                :value="meta.meta_role"
                                                @input="updatemeta_role"

                                            >
                                        </div>
                                    </div></div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="address">Address</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="address"
                                                placeholder="Enter Address"
                                                v-model="address"

                                            >
                                        </div>
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="form-group col-md-6">
                                                    <label for="city">City</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        name="city"
                                                        placeholder="Enter City"
                                                        v-model="city"
                                                        >
                                                </div>
                                                <div class="form-group col-md-6" >
                                                    <label for="country">Country</label>
                                                    <v-select v-model="country"
                                                              name="country"
                                                              label="name"
                                                              :options="country_arr"
                                                              @input="inmodal2"
                                                              style="background-color: #fff;"
                                                              />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="message">Add Tags From Dropdown</label><br>
                                            <div class="form-group" style="background-color: #fff;">
                                                <v-select v-model="tags_type"
                                                          name="tag_dropdown"
                                                          label="tag"
                                                          :options="tags_field_default"
                                                          @input="inmodal"
                                                          class="hidetag"
                                                          multiple


                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="tags">Create Your own Tags</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="create_tags"
                                                placeholder="Enter Tag"
                                                id="own_tag_field"
                                            >

                                        </div>
                                        <div class="col-md-2">

                                            <a  class="button-css" style="color: white;margin-top: 20px;"  @click="add_custom_tag">Add Tag</a>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12" v-if="tags_arr_delete.length>0" >
                                    <label for="all_fields" style="color: black">Tags</label><br>

                                    <div class="row">
                                        <div class="" v-for="tags in this.tags_arr_delete" style="padding-bottom:3px;  padding-right: 7px;">

                                            <p style="font-size: 15px;padding: 10px;"> <i class="fa fa-tag" aria-hidden="true"></i>&nbsp;{{tags.tag}}&nbsp;
                                                <i class="fa fa-times" style="color: black;cursor: pointer;" @click="delete_tag_fun(tags.tag,tags.type,tags.loc)"></i>
                                            </p>

                                        </div>
                                    </div>
                                </div>







                            </div>

                            <div class="box-footer" style="background-color: transparent;">
                                <vue-button-spinner
                                        class="button-css"
                                        :isLoading="loading"
                                        :disabled="loading"
                                        style="float: right"
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
            country_arr:[{"name":"United States"},{"name":"Canada"},{"name":"Afghanistan"},{"name":"Albania"},{"name":"Algeria"},{"name":"American Samoa"},{"name":"Andorra"},{"name":"Angola"},{"name":"Anguilla"},{"name":"Antarctica"},{"name":"Antigua and\\/or Barbuda"},{"name":"Argentina"},{"name":"Armenia"},{"name":"Aruba"},{"name":"Australia"},{"name":"Austria"},{"name":"Azerbaijan"},{"name":"Bahamas"},{"name":"Bahrain"},{"name":"Bangladesh"},{"name":"Barbados"},{"name":"Belarus"},{"name":"Belgium"},{"name":"Belize"},{"name":"Benin"},{"name":"Bermuda"},{"name":"Bhutan"},{"name":"Bolivia"},{"name":"Bosnia and Herzegovina"},{"name":"Botswana"},{"name":"Bouvet Island"},{"name":"Brazil"},{"name":"British lndian Ocean Territory"},{"name":"Brunei Darussalam"},{"name":"Bulgaria"},{"name":"Burkina Faso"},{"name":"Burundi"},{"name":"Cambodia"},{"name":"Cameroon"},{"name":"Cape Verde"},{"name":"Cayman Islands"},{"name":"Central African Republic"},{"name":"Chad"},{"name":"Chile"},{"name":"China"},{"name":"Christmas Island"},{"name":"Cocos (Keeling) Islands"},{"name":"Colombia"},{"name":"Comoros"},{"name":"Congo"},{"name":"Cook Islands"},{"name":"Costa Rica"},{"name":"Croatia (Hrvatska)"},{"name":"Cuba"},{"name":"Cyprus"},{"name":"Czech Republic"},{"name":"Denmark"},{"name":"Djibouti"},{"name":"Dominica"},{"name":"Dominican Republic"},{"name":"East Timor"},{"name":"Ecudaor"},{"name":"Egypt"},{"name":"El Salvador"},{"name":"Equatorial Guinea"},{"name":"Eritrea"},{"name":"Estonia"},{"name":"Ethiopia"},{"name":"Falkland Islands (Malvinas)"},{"name":"Faroe Islands"},{"name":"Fiji"},{"name":"Finland"},{"name":"France"},{"name":"France, Metropolitan"},{"name":"French Guiana"},{"name":"French Polynesia"},{"name":"French Southern Territories"},{"name":"Gabon"},{"name":"Gambia"},{"name":"Georgia"},{"name":"Germany"},{"name":"Ghana"},{"name":"Gibraltar"},{"name":"Greece"},{"name":"Greenland"},{"name":"Grenada"},{"name":"Guadeloupe"},{"name":"Guam"},{"name":"Guatemala"},{"name":"Guinea"},{"name":"Guinea-Bissau"},{"name":"Guyana"},{"name":"Haiti"},{"name":"Heard and Mc Donald Islands"},{"name":"Honduras"},{"name":"Hong Kong"},{"name":"Hungary"},{"name":"Iceland"},{"name":"India"},{"name":"Indonesia"},{"name":"Iran (Islamic Republic of)"},{"name":"Iraq"},{"name":"Ireland"},{"name":"Israel"},{"name":"Italy"},{"name":"Ivory Coast"},{"name":"Jamaica"},{"name":"Japan"},{"name":"Jordan"},{"name":"Kazakhstan"},{"name":"Kenya"},{"name":"Kiribati"},{"name":"Korea, Democratic People\'s Republic of"},{"name":"Korea, Republic of"},{"name":"Kuwait"},{"name":"Kyrgyzstan"},{"name":"Lao People\'s Democratic Republic"},{"name":"Latvia"},{"name":"Lebanon"},{"name":"Lesotho"},{"name":"Liberia"},{"name":"Libyan Arab Jamahiriya"},{"name":"Liechtenstein"},{"name":"Lithuania"},{"name":"Luxembourg"},{"name":"Macau"},{"name":"Macedonia"},{"name":"Madagascar"},{"name":"Malawi"},{"name":"Malaysia"},{"name":"Maldives"},{"name":"Mali"},{"name":"Malta"},{"name":"Marshall Islands"},{"name":"Martinique"},{"name":"Mauritania"},{"name":"Mauritius"},{"name":"Mayotte"},{"name":"Mexico"},{"name":"Micronesia, Federated States of"},{"name":"Moldova, Republic of"},{"name":"Monaco"},{"name":"Mongolia"},{"name":"Montserrat"},{"name":"Morocco"},{"name":"Mozambique"},{"name":"Myanmar"},{"name":"Namibia"},{"name":"Nauru"},{"name":"Nepal"},{"name":"Netherlands"},{"name":"Netherlands Antilles"},{"name":"New Caledonia"},{"name":"New Zealand"},{"name":"Nicaragua"},{"name":"Niger"},{"name":"Nigeria"},{"name":"Niue"},{"name":"Norfork Island"},{"name":"Northern Mariana Islands"},{"name":"Norway"},{"name":"Oman"},{"name":"Pakistan"},{"name":"Palau"},{"name":"Panama"},{"name":"Papua New Guinea"},{"name":"Paraguay"},{"name":"Peru"},{"name":"Philippines"},{"name":"Pitcairn"},{"name":"Poland"},{"name":"Portugal"},{"name":"Puerto Rico"},{"name":"Qatar"},{"name":"Reunion"},{"name":"Romania"},{"name":"Russian Federation"},{"name":"Rwanda"},{"name":"Saint Kitts and Nevis"},{"name":"Saint Lucia"},{"name":"Saint Vincent and the Grenadines"},{"name":"Samoa"},{"name":"San Marino"},{"name":"Sao Tome and Principe"},{"name":"Saudi Arabia"},{"name":"Senegal"},{"name":"Seychelles"},{"name":"Sierra Leone"},{"name":"Singapore"},{"name":"Slovakia"},{"name":"Slovenia"},{"name":"Solomon Islands"},{"name":"Somalia"},{"name":"South Africa"},{"name":"South Georgia South Sandwich Islands"},{"name":"Spain"},{"name":"Sri Lanka"},{"name":"St. Helena"},{"name":"St. Pierre and Miquelon"},{"name":"Sudan"},{"name":"Suriname"},{"name":"Svalbarn and Jan Mayen Islands"},{"name":"Swaziland"},{"name":"Sweden"},{"name":"Switzerland"},{"name":"Syrian Arab Republic"},{"name":"Taiwan"},{"name":"Tajikistan"},{"name":"Tanzania, United Republic of"},{"name":"Thailand"},{"name":"Togo"},{"name":"Tokelau"},{"name":"Tonga"},{"name":"Trinidad and Tobago"},{"name":"Tunisia"},{"name":"Turkey"},{"name":"Turkmenistan"},{"name":"Turks and Caicos Islands"},{"name":"Tuvalu"},{"name":"Uganda"},{"name":"Ukraine"},{"name":"United Arab Emirates"},{"name":"United Kingdom"},{"name":"United States minor outlying islands"},{"name":"Uruguay"},{"name":"Uzbekistan"},{"name":"Vanuatu"},{"name":"Vatican City State"},{"name":"Venezuela"},{"name":"Vietnam"},{"name":"Virigan Islands (British)"},{"name":"Virgin Islands (U.S.)"},{"name":"Wallis and Futuna Islands"},{"name":"Western Sahara"},{"name":"Yemen"},{"name":"Yugoslavia"},{"name":"Zaire"},{"name":"Zambia"},{"name":"Zimbabwe"}],
            tags_field_default:[{tag:'Nature'},{tag:'Family'},{tag:'History'},{tag:'Adventure'},{tag:'Economy'}],
            country:[],
            tags_type:[],
            tags_arr_default:[],
            tags_arr_custom:[],
            tags_arr_final:[],
            tags_arr_delete:[],
            city:'',
            address:'',
            country_:'',


        }
    },
    computed: {
        ...mapGetters('TravellersSingle', ['item', 'loading','meta'])
    },
    created() {
        // Code ...
    },
    destroyed() {
        this.resetState()
    },
    methods: {
        ...mapActions('TravellersSingle', ['storeData', 'resetState', 'setName', 'setEmail', 'setDisplay_name', 'setPhone', 'setAddress', 'setFcm_token', 'setDevice', 'setAuth_key', 'setOtp'
        ,'setmeta_company_name',
         'setmeta_role',
         'setmeta_secondary_email',
         'setmeta_secondary_phone',
         'setmeta_tags',
        ]),
        updateName(e) {
            this.setName(e.target.value)
        },
        updateEmail(e) {
            this.setEmail(e.target.value)
        },
        updateDisplay_name(e) {
            this.setDisplay_name(e.target.value)
        },
        updatePhone(e) {
            this.setPhone(e.target.value)
        },
        updateAddress(e) {
            this.setAddress(e.target.value)
        },
        updateFcm_token(e) {
            this.setFcm_token(e.target.value)
        },
        updateDevice(e) {
            this.setDevice(e.target.value)
        },
        updateAuth_key(e) {
            this.setAuth_key(e.target.value)
        },
        updateOtp(e) {
            this.setOtp(e.target.value)
        },

        updatemeta_company_name(e) {
            this.setmeta_company_name(e.target.value)
        },
        updatemeta_role(e) {
            this.setmeta_role(e.target.value)
        },
        updatemeta_secondary_email(e) {

            this.setmeta_secondary_email(e.target.value)
        },
        updatemeta_secondary_phone(e) {
            this.setmeta_secondary_phone(e.target.value)
        },
        updatemeta_tags(e) {
            this.setmeta_tags(e)
        },
        submitForm() {

            this.item.address=JSON.stringify([{
                'address' : this.address,
                'city' : this.city,
                'country': this.country_
            }]);
            this.storeData()
                .then(() => {
                    this.$router.push({ name: 'travellers.index' })
                    this.$eventHub.$emit('create-success')
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        inmodal(value){
            this.tags_arr_default=[];
            this.tags_arr_delete=[];
            this.tags_arr_final=[];
            for(var k=0;k<value.length;k++){
                // console.log(value[k]['tag']);
                this.tags_arr_default.push(value[k]['tag']);
                this.tags_arr_final.push(value[k]['tag']);
                this.tags_arr_delete.push({
                    tag:value[k]['tag'],
                    type:'default',
                    loc:k

                });
            }
            for (var l=0;l<this.tags_arr_custom.length;l++){
                // console.log(this.tags_arr_custom[l]);
                this.tags_arr_final.push(this.tags_arr_custom[l]);
                this.tags_arr_delete.push({
                    tag:this.tags_arr_custom[l],
                    type:'custom',
                    loc:l

                });

            }


            this.meta.meta_tags=JSON.stringify(this.tags_arr_final);

        },
        inmodal2(value){
            if(value=='' || value==null){
                this.item.address="";
            }
            else{
                var type=Object.entries(value);
                this.country_=type[0][1];


            }
        },
        add_custom_tag(){
          var tag=document.getElementById('own_tag_field').value;
        if(tag.length>0){

          var count=0;
          var count2=0;
          for(var m=0;m<this.tags_arr_final.length;m++){
              if(tag.toLowerCase()===this.tags_arr_final[m].toLowerCase()){
                  count=1;
              }
          }
          if(count===0){
              for (var n=0;n<this.tags_field_default.length;n++){
                  if(tag.toLowerCase()===this.tags_field_default[n]['tag'].toLowerCase()){
                      this.tags_type.push(this.tags_field_default[n]);
                      this.tags_arr_default.push(this.tags_field_default[n]['tag']);
                      this.tags_arr_final.push(this.tags_field_default[n]['tag']);
                      this.tags_arr_delete.push({
                          tag:this.tags_field_default[n]['tag'],
                          type:'default',
                          loc:n

                      });
                      count2=1;
                  }
              }
               if(count2===0){
                   this.tags_arr_final.push(tag);
                   this.tags_arr_custom.push(tag);
                   this.tags_arr_delete.push({
                       tag:tag,
                       type:'custom',
                       loc:this.tags_arr_custom.length

                   });
               }
          }
          else{
              alert(tag+' already exist');
          }
            document.getElementById("own_tag_field").value = "";
        }
        else{
            alert('Enter Tag Name');
        }

            this.updatemeta_tags(this.tags_arr_final);
          },
        delete_tag_fun(tag,type,loc){
            // alert(tag+"---"+type+"---"+loc);
            if(type==='default'){
            this.tags_arr_final=[];
            this.tags_arr_delete=[];
            this.tags_type=[];

            var data_arr=[];
            for (var p=0;p<this.tags_arr_default.length;p++){
                if(this.tags_arr_default[p]!==tag){
                    // console.log(this.tags_arr_default[p]);
                    data_arr.push(this.tags_arr_default[p]);
                    this.tags_type.push({tag:this.tags_arr_default[p]});
                    this.tags_arr_final.push(this.tags_arr_default[p]);
                    this.tags_arr_delete.push({
                        tag:this.tags_arr_default[p],
                        type:'default',
                        loc:p

                    });
                }
            }
            this.tags_arr_default=[];
            this.tags_arr_default=data_arr;
            for(var q=0;q<this.tags_arr_custom.length;q++){


                for (var n=0;n<this.tags_field_default.length;n++){
                    if(this.tags_arr_custom[q].toLowerCase()===this.tags_field_default[n]['tag'].toLowerCase() && tag.toLowerCase() !==this.tags_field_default[n]['tag'].toLowerCase() ){
                        this.tags_type.push(this.tags_field_default[n]);
                    }
                }

                this.tags_arr_final.push(this.tags_arr_custom[q]);
                this.tags_arr_delete.push({
                    tag:this.tags_arr_custom[q],
                    type:'custom',
                    loc:q

                });
            }

                this.updatemeta_tags(this.tags_arr_final);
            }
            else if(type==='custom'){
                this.tags_arr_final=[];
                this.tags_arr_delete=[];
                this.tags_type=[];
                var data_arr=[];
                for (var p=0;p<this.tags_arr_default.length;p++){
                    this.tags_type.push({tag:this.tags_arr_default[p]});
                    this.tags_arr_final.push(this.tags_arr_default[p]);
                    this.tags_arr_delete.push({
                        tag:this.tags_arr_default[p],
                        type:'default',
                        loc:p

                    });

                }
                for(var q=0;q<this.tags_arr_custom.length;q++){
                    if(this.tags_arr_custom[q].toLowerCase()!==tag.toLowerCase()){
                        // console.log(this.tags_arr_custom[q]);
                        this.tags_arr_final.push(this.tags_arr_custom[q]);
                        data_arr.push(this.tags_arr_custom[q]);
                        this.tags_arr_delete.push({
                            tag:this.tags_arr_custom[q],
                            type:'custom',
                            loc:q

                        });
                    }
                }
               this.tags_arr_custom=[];
                this.tags_arr_custom=data_arr;

                this.meta.meta_tags=JSON.stringify(this.tags_arr_final);
            }

        }
    }
}
</script>


<style scoped>
    .button-css{
        position: unset !important;
    }
    .hidetag .selected-tag{
        display: none !important
    }
    label{
        font-size: 15px !important;
    }
</style>
