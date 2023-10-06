<template>
    <div style="font-family: 'Open Sans'">




            <div class=" row justify-content-center">
                <div class="col-lg-12">
                    <div class="col-lg-12" style="    background-color: rgb(245 243 243);" >


                        <div >
                            <div class="row" >
                                <div class="col-lg-12" style="padding-left:0;padding-right: 0;positon:relative;">
                                    <div  class=" colBox" :style="{ 'background-image': 'url('+banner+')'}"> </div>

                                </div>
                            </div>
                            <div style="top: 0;z-index: 999;width: 100%;padding: 0rem 0rem 2rem 0rem;">
                                <label>Select Language</label><br>

                                <v-select
                                    id="mySelect"
                                    v-model="SelectedLangForForm"
                                    :clearable="false"
                                    name="name"
                                    class="bg-white"
                                    label="name"
                                    :options="languages"
                                    style="width:30%;margin:0.5rem 0rem;background-color: #fff"



                                />

                            </div>
                            <div class="">

                                <div class="row" v-if="form_data.header!=''">
                                    <div class="col-lg-12" v-if="typeof form_data.header =='string'"  >

                                        <span v-for="(data,ind) in JSON.parse(form_data.header)">
                                            <span v-for="(value,key,ind) in data" v-if="key ===  SelectedLangForForm.code" >

                                               <div class="Title" v-html="value" style="text-align: justify;padding: 2rem;border-radius: 2rem;background: rgb(255, 255, 255);">
<!--                                            <u><h1>Head Title</h1></u>-->



                                        </div>
                                                   </span>
                                        </span>




                                    </div>
                                    <div class="col-lg-12" v-else>

                                        <span v-for="(data,ind) in form_data.header">
                                            <span v-for="(value,key,ind) in data" v-if="key ===  SelectedLangForForm.code" >

                                               <div class="Title" v-html="value" style="text-align: justify;padding: 2rem;border-radius: 2rem;background: rgb(255, 255, 255);">
<!--                                            <u><h1>Head Title</h1></u>-->



                                        </div>
                                                   </span>
                                        </span>




                                    </div>
                                </div>
                            </div>


                            <div id="main">
                                <div class="" style="text-align: left;">


                                    <div class="accordion" id="faq">

                                        <div class="card" v-if="populate_data!=undefined && this.form_data.long_id.search('FAM')==-1">
                                            <div class="container p-5" v-if="populate_data.status && populate_data.filtered_data.length>0">
                                                <p style="font-size: 18px;text-decoration: underline;font-weight: bold;">
                                                    Your {{populate_data.filtered_data[0].primary_heading}} is {{populate_data.filtered_data[0].primary_key}}
                                                </p>

                                                <div class="row f-1-6 p-3"  >
                                                    <table class="table">
                                                        <tbody>
                                                        <tr v-for="(value, key, index) in populate_data.filtered_data[0]"
                                                            v-if="key!='primary_heading' && key!='primary_key' && key!='NULL' && value!=''"
                                                        >
                                                            <td>{{key}}</td>
                                                            <td>{{value}}</td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                   </div>
                                            </div>
                                        </div>



                                        <div class="card" v-if=" hub_data_list.length != 0 && hub_data_list.travel_date !== null && hub_data_list.travel_date !='' ">
                                            <div class="card-body text_size_change" style="padding:2rem 1rem;border: 1px solid rgb(220, 220, 220);">
                                                <span style="font-size: 20px;">You are travelling from <span style="color:red">{{this.hub_data_list.get_meta[0].meta_value}}</span> and your travel date is:-</span><span style="font-size: 20px;"> {{hub_data_list.travel_date}}</span>


                                            </div>


                                        </div>

                                        <div class="card" id="tour_date" v-if="this.hub_data_list.length!=0 && (hub_data_list !== null || JSON.parse(traveler_hubsDate[0].meta_value).length > 0) && (form_filler=='trav' || form_filler=='handler_fill') && form_data.form_step.travel_date.visibility=='show'  && ( hub_data_list.travel_date==null ||  hub_data_list.travel_date=='') && form_data.long_id.search('FAM')==-1"  style="background-color: rgba(250, 250, 250, 0.9);border:1px solid rgb(220, 220, 220);">

                                            <div class="card-header" id="faqhead5">
                                                <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5"
                                                   aria-expanded="true" aria-controls="faq4" style="font-size: 25px;font-weight: 400;">

                                                    <span> <span v-if="'en' !==  SelectedLangForForm.code">Select preferred Hub / <br></span>{{ getLanguageText('Select preferred hub') }}</span>

                                                </a>
                                            </div>

                                            <div id="faq5" class=" collapse" :class="form_data.form_step.travel_date.status=='active' ?'show':''"    aria-labelledby="faqhead5" data-parent="#faq">
                                                <div class="card-body"  >

                                                        <div class="card-body" >
                                                            <div class="row" v-if="traveler_hubsDate.length>0 && hub_data_list !== null">

                                                                <v-select
                                                                    :clearable="false"
                                                                    id="dropDown"
                                                                    name="key"
                                                                    class=" bg-white"
                                                                    v-model="TravelerHub"
                                                                    label="Hub"
                                                                    :options="JSON.parse(traveler_hubsDate[0].meta_value)"
                                                                    style="width:300px;background-color: #fff"
                                                                />




                                                                <div class="col-md-12" v-for="(data,indx) in JSON.parse(traveler_hubsDate[0].meta_value)" v-if="data.Hub==TravelerHub.Hub && TravelerHub.Hub!=''"  :key ="indx">



                                                                           <div class="row card-body">
                                                                            <div class="col-lg-12 form-group">
                                                                                <div class="">
                                                                                <span style="font-size: 18px;" class="text_size_change">Selected hub is <span style="color:red">{{data.Hub}}</span>.</span>
                                                                                
                                                                            </div>
                                                                                <div class="" v-for="(dates,ind) in data.dates"  :key ="ind">

                                                                                   <span >

                                                                                       <input
                                                                                             v-if="dates.total != dates.used"
                                                                                              @click="validateBookingdate(dates.date)"
                                                                                              name="tour_date"
                                                                                              :value="dates.date"
                                                                                              type="radio"

                                                                                              :disabled="dates.total == dates.used">&nbsp

                                                                                       <label :class="dates.total != dates.used?'':'text-secondary'">{{dates.date}}&nbsp
                                                                                           <span style="font-size: 14px;">(Seats Available :-<span style="color:red;font-size:14px;">{{dates.total - dates.used}})</span></span>
                                                                                       </label>


                                                                                   </span>
                                                                                </div></div>
                                                                               </div>

                                                                           </div>

                                                            </div>



                                                        </div>

                                                </div>
                                            </div>


                                        </div>
                                        <!--passport accordion-->
                                        <div class="card" id="passport-acco" v-show="(form_filler=='trav' || form_filler=='handler_fill') && form_data.form_step.passport.visibility=='show'" style="background-color: rgb(245 243 243);border:1px solid rgb(220, 220, 220);">


                                            <div class="card-header" id="faqhead1" @click="updateStep('passport')">
                                                <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                                                   aria-expanded="true" aria-controls="faq1" style="font-size: 25px;font-weight: 400;">
                                                    <span> <span v-if="'en' !==  SelectedLangForForm.code">Passport Upload / </span>{{ getLanguageText('Passport Upload') }}</span>





                                                </a>
                                            </div>


                                            <div id="faq1" class="collapse " :class="form_data.form_step.passport.status=='active' && (form_filler=='trav' || form_filler=='handler_fill')?'show':''" aria-labelledby="faqhead1" data-parent="#faq">
                                                <div class="card-body">

                                                    <div class="">

                                                        <div class="row">
                                                            <!--passport upload      -->
                                                            <div class="col-lg-12" v-if="mode!='preview'" style="padding:2rem">
                                                                <div v-for="(tag,index) in form_data.html_qna"  v-if="tag.key=='file'  && tag.custom==1 && tag.ques=='Original Passport' "  :key="index+tag.key" >
                                                                    <!--                                                                        {{tag}}-->

                                                                    <!--Passport Front-->
                                                                    <div class="Paragrapg">
                                                                        <div style="display:flex;">
                                                                            <div > <h2 style="text-align: left" class="text_size_change">
                                                                                <b><span> <span v-if="'en' !==  SelectedLangForForm.code">Passport Front / </span>{{ getLanguageText('Passport Front') }}</span></b>




                                                                            </h2></div>
                                                                        <div ><h2 style="margin-left:2rem; ;text-align:right;" class="text_size_change"><i style="color:red;" @click="Showinfo('passport_F')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                        </div>
                                                                        <div style="width:80%;margin:0 auto;">
                                                                            <div class="row" >
                                                                                <div class="col-lg-8">

                                                                                    <div class="fileUpl">

                                                                                        <button  :class="tag.value.url==''?'btn-dark':'btn-danger'"  style="position: absolute;" @click="chooseFiles('passport-front')">{{tag.value.url==''?'Choose File':'Update'}}</button>
                                                                                    <input  type="file" name="avatar"    @change="uploadfile($event,'passport-front',index,tag.value.url,'passport-front')" accept="image/png,image/jpeg" id="passport-front" ref="passportFrontInput" :key = "fileInputKey" ></div>
                                                                                       <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                        </div>
                                                                                        <div  class="col-md-6">
                                                                                            <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="col-lg-4" >
                                                                                    <div style=" margin:0 auto;">
                                                                                        <a :href="tag.value.url" target="_blank" :class="tag.value.url==''?'disable-event':'cursor'">
                                                                                        <img style="width:100%;height:122px;" :src="tag.value.url==''?'/images/sample1.png':tag.value.url.search('pdf')<0?tag.value.url:'/images/pdfUploadIcon.jpg'"/>
                                                                                        </a>
                                                                                        <span v-if="tag.value.url!=''" class="Delete-icon" ><i style="color:black;" class="fa fa-trash" @click="tag.value.url='',passportUploadedFiles.image_first=false,fileInputKey++,tag.value.passportno='',tag.value.name_last='',tag.value.name_first='',tag.value.issue_place='',tag.value.issue_date='',tag.value.exp_date=''" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>



                                                                    </div>
                                                                    <!--Passport Back-->
                                                                    <div class="Paragrapg" >
                                                                        <div style="display:flex;">
                                                                            <div > <h2 style="text-align: left" class="text_size_change">    <b><span> <span v-if="'en' !==  SelectedLangForForm.code">Passport Back / </span>{{ getLanguageText('Passport Back') }}</span></b></h2></div>
                                                                        <div ><h2 style="margin-left:2rem; ;text-align:right;" class="text_size_change"><i style="color:red;" @click="Showinfo('passport_B')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                        </div>
                                                                        <div style="width:80%;margin:0 auto;">
                                                                            <div class="row" >
                                                                                <div class="col-lg-8">

                                                                                    <div class="fileUpl">
                                                                                        <button  :class="tag.value.url2==''?'btn-dark':'btn-danger'" style="position: absolute;"  @click="chooseFiles('passport-back')">{{tag.value.url2==''?'Choose File':'Update'}}</button>
                                                                                    <input  type="file" name="avatar"  @change="uploadfile($event,'passport-back',index,tag.value.url2,'passport-back')" accept="image/png,image/jpeg" id="passport-back" :key = "fileInputKey1"  >
                                                                                    </div>
                                                                                         <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                        </div>
                                                                                        <div  class="col-md-6">
                                                                                            <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="col-lg-4" >
                                                                                    <div style=" margin:0 auto;">
                                                                                        <a :href="tag.value.url2" target="_blank" :class="tag.value.url2==''?'disable-event':'cursor'">
                                                                                        <img style="width:100%;height:122px;" :src="tag.value.url2==''?'/images/sample1.png':tag.value.url2.search('pdf')<0?tag.value.url2:'/images/pdfUploadIcon.jpg'"/>
                                                                                        </a>
                                                                                        <span v-if="tag.value.url2!=''" class="Delete-icon" ><i @click="tag.value.url2='',passportUploadedFiles.image_last=false,fileInputKey1++,tag.value.passportno='',tag.value.name_last='',tag.value.name_first='',tag.value.issue_place='',tag.value.issue_date='',tag.value.exp_date=''" style="color:black;" class="fa fa-trash" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                    <div style="text-align: center;padding-top:2rem;"><h1 style="font-size: 40px;color:#cccccc"><b>--- OR ---</b></h1>
                                                                        <p style="color:red;"><b>Use this section only if you have merged passport pdf !</b></p>

                                                                    </div>

                                                                    <!--Passport Merged-->
                                                                    <div class="Paragrapg">
                                                                        <div style="display:flex;">
                                                                            <div > <h2 style="text-align: left" class="text_size_change">    <b><span> <span v-if="'en' !==  SelectedLangForForm.code">Merged Passport / </span>{{ getLanguageText('Merged Passport') }}</span></b></h2></div>
                                                                        <div ><h2 style="margin-left:2rem; ;text-align:right;" class="text_size_change"><i style="color:red;" @click="Showinfo('passport_M')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                        </div>
                                                                        <div style="width:80%;margin:0 auto;">
                                                                            <div class="row" >
                                                                                <div class="col-lg-8">

                                                                                    <div class="fileUpl">
                                                                                        <button  :class="tag.value.pdf==''?'btn-dark':'btn-danger'" style="position: absolute;;" class="btn-danger" @click="chooseFiles('passport-merged')">{{tag.value.pdf==''?'Choose File':'Update'}}</button>
                                                                                        <input  type="file" name="avatar" accept="application/pdf"   @change="uploadfile($event,'passport-merged',index,tag.value.pdf,'passport-merged')" id="passport-merged"  :key = "fileInputKey2" >
                                                                                    </div>
                                                                                       <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                        </div>
                                                                                        <div  class="col-md-6">
                                                                                            <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="col-lg-4" >
                                                                                    <div style=" margin:0 auto;">
                                                                                        <a :href="tag.value.pdf" target="_blank" :class="tag.value.pdf==''?'disable-event':'cursor'">
                                                                                        <img style="width:100%;height:122px;" :src="tag.value.pdf==''?'/images/sample2.png':tag.value.pdf.search('pdf')<0?tag.value.pdf:'/images/pdfUploadIcon.jpg'"/>
                                                                                        </a>
                                                                                        <span v-if="tag.value.pdf!=''" class="Delete-icon" ><i style="color:black;" class="fa fa-trash" @click="tag.value.pdf='',passportUploadedFiles.pdf=false,fileInputKey2++,tag.value.passportno='',tag.value.name_last='',tag.value.name_first='',tag.value.issue_place='',tag.value.issue_date='',tag.value.exp_date=''" aria-hidden="true"></i></span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>
<!--                                                                <div id="passport_validate" ref="passport_validate" style="text-align:center;padding:2rem;"  v-if="(form_data.html_qna[passIndex].value.url!=''&&form_data.html_qna[passIndex].value.url2!='') || (form_data.html_qna[passIndex].value.pdf!='') ">-->

<!--                                                                    <button style=" color:#fff;" :disabled="form_data.html_qna[passIndex].value.status==true" @click="validatepass" class="btn btn-success btn-lg" >-->
<!--                                                                        <h2>Read & Upload</h2>-->
<!--                                                                    </button>-->
<!--                                                                </div>-->

                                                            </div>


                                                            <!--sample view-->
                                                            <div class="col-lg-12" v-else style="padding:2rem">
                                                                <!--Passport Front-->
                                                                <div class="Paragrapg">
                                                                    <div style="display:flex;">
                                                                        <div > <h2 style="text-align: left" class="text_size_change">
                                                                           <b> <span> <span v-if="'en' !==  SelectedLangForForm.code">Passport Front / </span>{{ getLanguageText('Passport Front') }}</span></b>

                                                                        </h2></div>
                                                                    <div ><h2 style="margin-left:2rem;text-align:right;" class="text_size_change"><i @click="Showinfo('passport_F')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                    </div>
                                                                    <div style="width:80%;margin:0 auto;">
                                                                        <div class="row" >
                                                                            <div class="col-lg-8">

                                                                                <div class="fileUpl">

                                                                                    <button style="position: absolute;" class="btn-danger disabled" @click="chooseFiles()">Choose File</button>
                                                                                    <input  type="file" class="disabled"
                                                                                            name="avatar"
                                                                                            accept="image/png, image/jpeg" id="fileUpload"></div>
                                                                                     <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                        <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                    </div>
                                                                                        <div  class="col-md-6">
                                                                                        <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div class="col-lg-4" ><div style=" margin:0 auto;"><img style="width:100%;height:122px;" src="/images/uploadType.png"/></div></div>

                                                                        </div>

                                                                    </div>



                                                                </div>
                                                                <!--Passport Back-->
                                                                <div class="Paragrapg">
                                                                    <div style="display:flex;">
                                                                        <div > <h2 style="text-align: left" class="text_size_change">
                                                                            <b><span> <span v-if="'en' !==  SelectedLangForForm.code">Passport Back / </span>{{ getLanguageText('Passport Back') }}</span></b>


                                                                        </h2></div>
                                                                    <div ><h2 style="margin-left:2rem; text-align:right;" class="text_size_change"><i @click="Showinfo('passport_B')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                    </div>
                                                                    <div style="width:80%;margin:0 auto;">
                                                                        <div class="row" >
                                                                            <div class="col-lg-8">

                                                                                <div class="fileUpl"> <button style="position: absolute;;" class="btn-danger disabled" @click="chooseFiles()">Choose File</button><input  type="file" class="disabled"
                                                                                                                                                                                                                         name="avatar"
                                                                                                                                                                                                                         accept="image/png, image/jpeg"></div>
                                                                                     <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                        <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                            </div>
                                                                                        <div  class="col-md-6">
                                                                                        <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4" ><div style=" margin:0 auto;"><img style="width:100%;height:122px;" src="/images/uploadType.png"/></div></div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div style="text-align: center;padding-top:2rem;"><h1 style="font-size: 40px;color:#cccccc"><b>--- OR ---</b></h1>
                                                                    <p style="color:red;">
                                                                        <b><span> <span v-if="'en' !==  SelectedLangForForm.code">Use this section only if you have merged passport image or pdf ! / </span>{{ getLanguageText('Form Note') }}</span></b>

                                                                    </p>
                                                                </div>

                                                                <!--Passport Merged-->
                                                                <div class="Paragrapg">
                                                                    <div style="display:flex;">
                                                                        <div > <h2 style="text-align: left" class="text_size_change">
                                                                            <b><span> <span v-if="'en' !==  SelectedLangForForm.code">Merged Passport / </span>{{ getLanguageText('Merged Passport') }}</span></b>


                                                                        </h2>
                                                                        </div>
                                                                    <div ><h2 style="margin-left:2rem;text-align:right;" class="text_size_change"><i @click="Showinfo('passport_M')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                    </div>
                                                                    <div style="width:80%;margin:0 auto;">
                                                                        <div class="row" >
                                                                            <div class="col-lg-8">

                                                                                <div class="fileUpl">
                                                                                    <button style="position: absolute;" class="btn-danger" @click="chooseFiles()">Choose File</button><input  type="file"
                                                                                                                                                                                                                 name="avatar"
                                                                                                                                                                                                                 accept="application/pdf">
                                                                                </div>
                                                                                     <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                    </div>
                                                                                        <div  class="col-md-6">
                                                                                        <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div class="col-lg-4" ><div style=" margin:0 auto;"><img style="width:100%;height:122px;" src="/images/uploadType.png"/></div></div>

                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <!--document accordion-->
                                        <div class="card" id="docs-acco" v-show="(form_filler=='trav' || form_filler=='handler_fill') && form_data.form_step.docs.visibility=='show'" style="margin-top: 3rem;background-color: rgba(250, 250, 250, 0.9);border:1px solid rgb(220, 220, 220);" >

                                            <div class="card-header" id="faqhead2" @click="updateStep('docs')">
                                                <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                                                   aria-expanded="true" aria-controls="faq2" style="font-size: 25px;font-weight: 400;">
                                                    <span> <span v-if="'en' !==  SelectedLangForForm.code">Document Upload / </span>{{ getLanguageText('Document Upload') }}</span>


                                                </a>
                                            </div>

                                            <!--doc data-->
                                            <div id="faq2" class="collapse " :class="form_data.form_step.docs.status=='active' && (form_filler=='trav' || form_filler=='handler_fill')?'show':''" aria-labelledby="faqhead2" data-parent="#faq">
                                                <div class="card-body">
                                                    <div class="">
                                                        <div class="row" v-if="mode!='preview'">

                                                            <!--main doc upload sec   -->
                                                            <div v-if="tag.key=='file'  && tag.custom==1 && tag.ques!='Original Passport' && tag.ques!='Photo ID'" v-for="(tag,index) in form_data.html_qna"  class="col-lg-12 " :key="index+tag.key" >
                                                                <div style="padding:2rem;" :id="tag.key+index">

                                                                    <div class="Paragrapg" >
                                                                        <div style="display:flex;">
                                                                            <div >
                                                                                <h2 style="text-align: left" class="text_size_change">
                                                                                    <b>{{tag.ques}}</b>
                                                                                    <label v-if="tag.require" class="text-danger">*</label>
                                                                                </h2>
                                                                            </div>
                                                                            <div >
                                                                                <h2 style="margin-left:2rem;text-align:right;" class="text_size_change">
                                                                                <i style="color:red;" @click="Showinfo('Document')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i>
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width:80%;margin:0 auto;">
                                                                            <div class="row" >
                                                                                <div class="col-lg-8">

                                                                                    <div class="fileUpl">
                                                                                        <button style="position: absolute;" :class="tag.value==''?'btn-dark':'btn-danger'" @click="chooseFiles(index+tag.key)">{{tag.value==''?'Choose File':'Update'}}</button>
                                                                                        <input type="file" name="avatar"  accept="image/png, image/jpeg, application/pdf" :id="index+tag.key" @change="uploadfile($event,'file_form',index,tag.value,index+tag.key)">
                                                                                    </div>
                                                                                           <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                        </div>
                                                                                        <div  class="col-md-6">
                                                                                            <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="col-lg-4" >
                                                                                    <div style=" margin:0 auto;" >


                                                                                        <a :href="tag.value" target="_blank" :class="tag.value==''?'disable-event':'cursor'">
                                                                                            <img  style="width:100%;height:122px;"   :title="tag.ques" :src="tag.value==''?'/images/uploadType.png':tag.value.search('pdf')<0?tag.value:'/images/pdfUploadIcon.jpg'"/>

                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <!--main doc upload sec  for photo id -->
                                                            <div v-if="tag.key=='file' && tag.ques=='Photo ID'" v-for="(tag,index) in form_data.html_qna"  class="col-lg-12 " :key="index+tag.key" >
                                                                <div style="padding:2rem;">

                                                                    <div class="Paragrapg"  style="padding:1rem;background-color: #fff;">
                                                                        <div style="display:flex;">
                                                                            <div >
                                                                                <h2 style="text-align: left" class="text_size_change">
                                                                                    <b>{{tag.ques}}</b>
                                                                                    <label v-if="tag.require" class="text-danger">*</label>
                                                                                </h2>
                                                                            </div>
                                                                            <div >
                                                                                <h2 style="margin-left:2rem;text-align:right;" class="text_size_change">
                                                                                <i style="color:red;" @click="Showinfo('Document')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i>
                                                                                </h2>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width:80%;margin:0 auto;">
                                                                            <div class="row" >
                                                                                <div class="col-lg-8">

                                                                                    <div class="fileUpl">


                                                                                        <v-select

                                                                                            :clearable="false"
                                                                                            name="addmem"
                                                                                            label="label"

                                                                                            :options="[{'label':'Aadhar Card'},{'label':'Pan Card'},{'label':'Driving Licence'},{'label':'Voter Id'}]"
                                                                                            v-model="tag.value.id_name"
                                                                                            class="bg-white"
                                                                                            style="background-color: #fff"
                                                                                        />

                                                                                        <button :disabled="tag.value.id_name==''" style="position: absolute;top:44px" :class="tag.value.id_name==''?'btn-secondary':tag.value.url==''?'btn-dark':'btn-danger'"  @click="chooseFiles(index+tag.key)">{{tag.value.url==''?'Choose File':'Update'}}</button>

                                                                                        <input :disabled="tag.value.id_name==''"  type="file" name="avatar"  accept="image/png, image/jpeg, application/pdf" :id="index+tag.key" @change="uploadfile($event,'photo_id',index,tag.value,index+tag.key)">
                                                                                    </div>
                                                                                           <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                        </div>
                                                                                        <div  class="col-md-6">
                                                                                            <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="col-lg-4" >
                                                                                    <div style=" margin:0 auto;">
                                                                                        <a :href="tag.value.url" target="_blank" :class="tag.value.url==''?'disable-event':'cursor'">
                                                                                            <img  style="width:100%;height:122px;"   :title="tag.ques"   :src="tag.value.url==''?'/images/uploadType.png':tag.value.url.search('pdf')<0?tag.value.url:'/images/pdfUploadIcon.jpg'"/>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
<!--                                                            <div id="id_validate" style="text-align:center;padding:2rem;width:100%;" v-if="form_data.html_qna[photoIdindex].value.url!='' && (tabsVisibility.photoId==true || tabsVisibility.docs==true) && photoIdindex!=0">-->
<!--                                                                <button style=" color:#fff;" :disabled="form_data.html_qna[photoIdindex].value.status==true" class="btn btn-success btn-lg" @click="validatePhotoId">-->
<!--                                                                    <h2>Read & Upload</h2>-->
<!--                                                                </button>-->
<!--                                                            </div>-->



                                                        </div>
                                                        <!--sample view-->
                                                        <div class="row" v-else>

                                                            <div class="col-lg-12 " style="padding:2rem;">
                                                                <div class="Paragrapg">
                                                                    <div style="display:flex;">
                                                                        <div > <h2 style="text-align: left" class="text_size_change"><b>
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Document Upload / </span>{{ getLanguageText('Document Upload') }}</span>




                                                                        </b></h2></div>
                                                                        <div ><h2 style="margin-left:2rem;text-align:right;" class="text_size_change"><i @click="Showinfo('pasport-front')" class="fa fa-info-circle cursor" aria-hidden="true" title="Info"></i></h2></div>
                                                                    </div>
                                                                    <div style="width:80%;margin:0 auto;">
                                                                        <div class="row" >
                                                                            <div class="col-lg-8">

                                                                                <div class="fileUpl"> <button style="position: absolute;" class="btn-danger disabled" >Choose File</button><input class="disabled"  type="file"
                                                                                                                                                                                                  name="avatar"
                                                                                                                                                                                                  accept="image/png, image/jpeg"></div>
                                                                                       <div style="" class="row">
                                                                                        <div class="col-md-6">
                                                                                            <p><b>Format:</b>  <span style="font-weight: 600;font-size:12px;color:gray">PNG/JPG</span></p>

                                                                                    </div>
                                                                                        <div  class="col-md-6">
                                                                                        <p><b>File Size:  <span style="font-weight: 600;font-size:12px;color:gray">Below 5M</span></b></p>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div class="col-lg-4" ><div style=" margin:0 auto;"><img style="width:100%;height:122px;" src="/images/uploadType.png"/></div></div>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--other details accordion-->
                                        <div class="card" id="details-acco" v-show="(form_filler=='trav' || form_filler=='handler_fill') && form_data.form_step.otherDetails.visibility=='show'" style="background-color: rgba(250, 250, 250, 0.9);border:1px solid rgb(220, 220, 220);">

                                            <div class="card-header" id="faqhead3" @click="updateStep('otherDetails')">
                                                <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                                                   aria-expanded="true" aria-controls="faq3" style="font-size: 25px;font-weight: 400;">
                                                    <span> <span v-if="'en' !==  SelectedLangForForm.code">Other Detail / </span>{{ getLanguageText('Other Detail') }}</span>



                                                </a>
                                            </div>

                                            <div id="faq3" class="collapse" :class="form_data.form_step.otherDetails.status=='active' && (form_filler=='trav' || form_filler=='handler_fill')?'show':''"  aria-labelledby="faqhead3" data-parent="#faq">
                                                <div class="card-body"  >
                                                    <form >
                                                        <div class="card-body" >

                                                            <div class="row form-row" v-for="(tag,index) in mode=='preview'?form_data.form_html:form_data.html_qna " >
                                                                <!--                                                                {{tag}}-->
                                                                <div class="form-group col-lg-12" :name="tag.key+index" :id="tag.key+index"  v-if="tag.key==='dob'"  >


                                                                    <label for="birthday" class="label-heading" >  <span> <span v-if="'en' !==  SelectedLangForForm.code">Date Of Birth / </span>{{ getLanguageText('Date Of Birth') }}</span>
                                                                    </label>





                                                                    <label v-if="tag.require" class="text-danger">*</label><br>

                                                                    <date-picker


                                                                        v-model="tag.value"
                                                                        :config="$root.dpconfigDate_disable_future_dates"
                                                                        :disabled="mode=='preview'"
                                                                        id="dob" name="DOB"
                                                                        class="form-control fields input_field_design"
                                                                        style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"
                                                                     >
                                                                    </date-picker>

                                                                </div>
                                                                <div class="form-group col-lg-12" :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='gender' " >
                                                                    <label for="foodpref" class="label-heading">  <span v-if="'en' !==  SelectedLangForForm.code">Gender / </span>{{ getLanguageText('Gender') }}</label>

                                                                    <label v-if="tag.require" class="text-danger">*</label><br>

                                                                    <div class=" form-check-block" v-for="op in tag.options">
                                                                     <span v-for="(value2,key2,indx) in op">
                                                                         <span v-if="SelectedLangForForm.code==key2"  v-for="(value3,key,inde) in value2">
                                                                               <input :disabled="mode=='preview'"  type="radio"  v-model="tag.value" :value="tag.value !== '' && value3.key == tag.value?tag.value:key" >
                                                                        <label style="margin-left:1rem;font-size: 18px;" class="form-check-label" for="inlineRadio1"><span v-if="SelectedLangForForm.code !== 'en'">{{tag.options[0].en[key].key}} /</span> {{value3.key}}</label><br>
                                                                         </span>

                                                                     </span>



<!--                                                                        <input :disabled="mode=='preview'"  type="radio"  v-model="tag.value" :value="op.key" >-->
<!--                                                                        <label style="margin-left:1rem;font-size: 18px;" class="form-check-label" for="inlineRadio1">{{op.key}}</label><br>-->
                                                                    </div>
                                                                    <!--                                                                    <div class="form-check form-check-inline">-->
                                                                    <!--                                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">-->
                                                                    <!--                                                                        <label class="form-check-label" for="inlineRadio2">Femail</label>-->
                                                                    <!--                                                                    </div>-->

                                                                </div>
                                                                <div class="form-group col-lg-12" :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='foodpref' && tag.custom==0" >


                                                                    <label for="foodpref" class="label-heading">  <span v-if="'en' !==  SelectedLangForForm.code">Food Prefrences / </span>{{ getLanguageText('Food Prefrences') }}</label>


                                                                    <label v-if="tag.require" class="text-danger">*</label><br>
                                                                    <div class=" form-check-block" v-for="op in tag.option">
                                                                     <span v-for="(value2,key2,indx) in op">
                                                                         <span v-if="SelectedLangForForm.code==key2"  v-for="(value3,key,inde) in value2">
                                                                               <input :disabled="mode=='preview'"  type="radio"  v-model="tag.value" :value="key" >
                                                                        <label style="margin-left:1rem;font-size: 18px;" class="form-check-label" for="inlineRadio1"><span v-if="SelectedLangForForm.code !== 'en'">{{tag.option[0].en[key].key}} /</span> {{value3.key}}</label><br>
                                                                         </span>

                                                                     </span>



                                                                        <!--                                                                        <input :disabled="mode=='preview'"  type="radio"  v-model="tag.value" :value="op.key" >-->
                                                                        <!--                                                                        <label style="margin-left:1rem;font-size: 18px;" class="form-check-label" for="inlineRadio1">{{op.key}}</label><br>-->
                                                                    </div>

                                                                    <!--                                                                    <div class="form-check form-check-inline">-->
                                                                    <!--                                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">-->
                                                                    <!--                                                                        <label class="form-check-label" for="inlineRadio2">Femail</label>-->
                                                                    <!--                                                                    </div>-->

                                                                </div>
                                                                <div class="form-group col-lg-12" :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='marriage_anni'"  >
                                                                    <label for="schedule_date" class="label-heading">  <span v-if="'en' !==  SelectedLangForForm.code">Marriage Anniversary / </span>{{ getLanguageText('Marriage Anniversary') }}</label>

                                                                    <label v-if="tag.require" class="text-danger">*</label><br>
                                                                    <div class="row" style="margin-top: 10px;margin-bottom: 5px;">
                                                                        <div class="col-lg-12 no_event">
                                                                            <!--                                                                            <input :disabled="mode=='preview'" style="width:70%; border-radius: 1rem;boeder: 2px solid #fff;border: 2px solid #fff;padding: 3rem;background: #e6eef1;" type="date" class="form-control input_field_design" id="anniversary" v-model="tag.value"  name="anniversary" placeholder="Enter Your Anniversary Date" >-->
                                                                            <date-picker



                                                                                :config="$root.dpconfigDate_disable_future_dates"
                                                                                :disabled="mode=='preview'"
                                                                                id="anniversary" v-model="tag.value"  name="anniversary"
                                                                                class="form-control fields input_field_design"
                                                                                style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"
                                                                            >
                                                                            </date-picker>

                                                                        </div>


                                                                    </div> </div>

                                                                <div class="form-group col-lg-12 " :name="tag.key+index" :id="tag.key+index"  v-if="(tag.key==='pan' || tag.key==='address'||  tag.key==='city'|| tag.key==='country'||  tag.key==='pincode'||  tag.key==='nominee'||  tag.key==='disease')&&(tag.key!='state' &&  tag.key!=='file')"  >

                                                                     <span v-for="(data,ind) in tag.questions" :key="ind">
                                    <span  v-for="(value,key,indx) in data" :key="indx" v-if="key ===  SelectedLangForForm.code">

                                        <label for="custom_field" class="label-heading" ><span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value}}</label>
                                        <label v-if="tag.require" class="text-danger">*</label><br>
                                </span>
                                </span>

<!--                                                                    <label for="custom_field" class="label-heading">{{tag.type}}</label><label v-if="tag.require" class="text-danger">*</label><br>-->

                                                                    <div class="row content_row">
                                                                        <div class="col-lg-12 no_event">
                                                                            <input :disabled="mode=='preview'" type="text"   style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);" class="form-control input_field_design" v-model="tag.value"  >
                                                                        </div>


                                                                    </div>

                                                                </div>

                                                                <div class="form-group col-lg-12 " :name="tag.key+index" :id="tag.key+index"  v-if=" tag.key==='state'"  >

                                                                      <span v-for="(data,ind) in tag.questions" :key="ind">
                                    <span  v-for="(value,key,indx) in data" :key="indx" v-if="key ===  SelectedLangForForm.code">

                                        <label for="custom_field" class="label-heading" ><span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value}}</label>
                                        <label v-if="tag.require" class="text-danger">*</label><br>
                                </span>
                                </span>

<!--                                                                    <label for="custom_field" class="label-heading">{{tag.type}}</label><label v-if="tag.require" class="text-danger">*</label><br>-->

                                                                    <div class="row content_row">
                                                                        <div class="col-lg-12 no_event">
                                                                            <!--                                                                            <input :disabled="mode=='preview'" type="text" style="border-radius: 1rem;boeder: 2px solid #fff;border: 2px solid #fff;padding: 3rem;background: #e6eef1;" class="form-control input_field_design" v-model="tag.value"  :placeholder="tag.type">-->
                                                                            <v-select
                                                                                :disabled="mode=='preview'"
                                                                                v-model="tag.value"
                                                                                :clearable="false"
                                                                                name="states"
                                                                                label="State"
                                                                                :options="states"
                                                                                style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"


                                                                            />
                                                                        </div>


                                                                    </div>

                                                                </div>

                                                                <!--custom-->
                                                                <div :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='textarea' && tag.custom==1"  v-for="(data,ind) in tag.questions" :key="ind" style="width:100%"  >
                                                                   <div v-for="(value,key,indx) in data"  v-if="key ===  SelectedLangForForm.code" class="form-group col-md-12 bg-white all-scroll content_div">
                                                                       <div>
                                                                           <label for="custom_filed" style="font-size: 21px;font-weight:600"><span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value}}</label>
                                                                    <label v-if="tag.require" class="text-danger">*</label><br>
                                                                       </div>
                                                                    <textarea :disabled="mode=='preview'" class="field_class" v-model="tag.value" cols="100" rows="3" style=" width: 100%; font-size: 16px;background: rgb(243 244 245); border-radius: 1rem;border:none;"></textarea>


                                                                   </div>



                                                                </div>
                                                                <div :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='text' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" style="width:100%">
                                                                   <div v-for="(value,key,indx) in data"  v-if="key ===  SelectedLangForForm.code"  class="form-group col-md-12 bg-white all-scroll content_div" >
                                                                       <div>
                                                                           <label for="custom_filed" class="label-heading"> <span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value}}</label>
                                                                    <label v-if="tag.require" class="text-danger">*</label><br>
                                                                       </div>


                                                                    <div class="row content_row">
                                                                        <div class="col-lg-12 no_event">
                                                                               <input :disabled="mode=='preview'" type="text" style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);" class="form-control input_field_design" v-model="tag.value"
                                                                            >
                                                                        </div>


                                                                    </div>
                                                                   </div>



                                                                </div>
                                                                <div :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='date' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" style="width:100%" >
                                                                    <div v-for="(value,key,indx) in data"  v-if="key ===  SelectedLangForForm.code"   class="form-group col-md-12 bg-white all-scroll content_div">
                                                                        <div>
                                                                            <label for="custom_filed" style="font-size: 21px;font-weight:600"> <span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value}}</label>
                                                                    <label v-if="tag.require" class="text-danger">*</label><br>
                                                                        </div>
                                                                    <div class="row content_row">
                                                                        <div class="col-lg-12 no_event">
                                                                            <date-picker
                                                                                :disabled="mode=='preview'"

                                                                                v-model="tag.value"
                                                                                :config="$root.dpconfigDate"
                                                                                name="date"
                                                                                class="form-control input_field_design"
                                                                                style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"
                                                                                placeholder="dd/mm/yyyy"
                                                                            >
                                                                            </date-picker>
                                                                        </div>


                                                                    </div>
                                                                    </div>



                                                                </div>
                                                                <div :name="tag.key+index" :id="tag.key+index"  v-if="tag.key==='options' && tag.custom==1" class="form-group col-md-12 bg-white all-scroll content_div"  >
                                                                    <label for="options" >{{tag.ques}}</label><label v-if="tag.require" class="text-danger">*</label><br>


                                                                    <div class="row content_row">
                                                                        <div class="col-md-5 no_event">
                                                                            <select class="form-control" v-model="tag.value" style="">
                                                                                <option v-for="op in tag.option" :value="op.key">{{op.key}}</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-1 " >
                                                                            <i style="font-size:20px " class="fa fa-trash f-2-0" title="Delete" @click="form_data.form_html.splice(index, 1)" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div class="col-md-6 ">



                                                                        </div>

                                                                    </div>



                                                                </div>
                                                                <div :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='checkbox' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" style="width:100%" >
                                                                   <div v-for="(value1,key1,indx) in data"  v-if="key1 ===  SelectedLangForForm.code"  class="form-group col-md-12 bg-white all-scroll content_div"  >
                                                                       <label for="custom_filed" style="font-size: 21px;font-weight: 600;"><span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value1}}</label><label v-if="tag.require" class="text-danger">*</label><br>


                                                                    <div class="row content_row">
                                                                        <div class="col-lg-12 no_event">
                                                                               <div class="row" v-for="op in tag.options">
                                                                                   <div class="col-lg-12"  v-for="(value2,key2,indx) in op" >
                                                                            <div class="row">
                                                                                           <div class="col-md-12"  v-for="(value3,key,inde) in value2">
                                                                                               <span v-if="languages[ind].code == key2">
                                                                                                   <input :disabled="mode=='preview'" type="checkbox" v-model="tag.value" :value="key"   style="" >
                                                                                    <span class="checkmark_box"></span>
                                                                                                    <label  class="container_box" style="font-size: 18px;margin-left: 1rem;"><span v-if="SelectedLangForForm.code !== 'en'">{{tag.options[0].en[key].key}} /</span> {{value3.key}}</label>
                                                                                               </span>
                                                                                           </div>

                                                                                       </div>


                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                   </div>



                                                                </div>
                                                                <div :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='dropdown' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" style="width:100%" >
                                                                    <div v-for="(value1,key1,indx) in data"  v-if="key1 ===  SelectedLangForForm.code"  class="form-group col-md-12 bg-white all-scroll content_div"  >
                                                                        <label for="custom_filed" style="font-size: 21px;font-weight: 600;"><span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value1}}</label><label v-if="tag.require" class="text-danger">*</label><br>


                                                                        <div class="row content_row">
                                                                            <div class="col-lg-12 no_event">
                                                                                <div class="row" v-for="op in tag.options">
                                                                                    <div class="col-lg-12"    v-for="(value2,key2,indx) in op" v-if="SelectedLangForForm.code == key2">
                                                                                        <div class="row">
                                                                                            <div class="col-md-12 no_event" >


                                                                                                <v-select
                                                                                                    :disabled="mode=='preview'"
                                                                                                    v-model="tag.value"
                                                                                                    name="key"



                                                                                                    label="key"
                                                                                                    :options="value2"
                                                                                                    style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"

                                                                                                    multiple

                                                                                                />
                                                                                            </div>


                                                                                        </div>


                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                    </div>



                                                                </div>

                                                                <div :name="tag.key+index" :id="tag.key+index" v-if="tag.key==='radio' && tag.custom==1" v-for="(data,ind) in tag.questions" :key="ind" style="width:100%" >
                                                                    <div v-for="(value1,key1,indx) in data"  v-if="key1 ===  SelectedLangForForm.code"  class="form-group col-md-12 bg-white all-scroll content_div"  >
                                                                        <label for="radio" style="font-size: 21px;font-weight: 600;" ><span v-if="SelectedLangForForm.code !== 'en'">{{tag.questions[0].en}} /</span> {{value1}}</label><label v-if="tag.require" class="text-danger">*</label><br>


                                                                    <div class="row content_row">
                                                                        <div class="col-lg-12 no_event">
                                                                                <div class="row" v-for="op in tag.options">
                                                                                    <div class="col-lg-12"  v-for="(value2,key2,indx) in op" >
                                                                            <div class="row">
                                                                                            <div class="col-md-12"  v-for="(value3,key,inde) in value2">
                                                                                               <span v-if="languages[ind].code == key2">
                                                                                    <span class="checkmark_box" style="border-radius:50px;"></span>
                                                                                                     <input :disabled="mode=='preview'" type="radio" v-model="tag.value" :value="key"   style="" >
                                                                                                      <label class="container_box" style="font-size: 18px;margin-left: 1rem;"><span v-if="languages[ind].code !== 'en'">{{tag.options[0].en[key].key}} /</span> {{value3.key}} </label>
                                                                                               </span>
                                                                                            </div>

                                                                                        </div>


                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        </div>

                                                                    </div>



                                                                </div>
                                                                <!--photo id-->
                                                                <div :id="tag.key+index+'-field'"  v-if=" tag.ques==='Photo ID'  && tag.custom==1" class="form-group col-md-12 bg-white all-scroll content_div">
                                                                    <label for="custom_filed" class="label-heading">  <span v-if="'en' !==  SelectedLangForForm.code">Photo ID / </span>{{ getLanguageText('Photo ID') }}</label>

                                                                    <label v-if="tag.require" class="text-danger">*</label><br>

                                                                    <div class="row" style="">


                                                                        <div  class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' ">
                                                                            <label for="photoId" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Id Type / </span>{{ getLanguageText('Id Type') }}</label>


                                                                            <br>
                                                                            <input   v-model="tag.value.id_name.label" :disabled="tag.value.id_name.label!=''"  type="text" class="form-control fields input_field_design" name=""  style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);">
                                                                        </div>
                                                                        <div  class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' ">

                                                                            <label for="photoId" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Member First Name / </span>{{ getLanguageText('Member First Name') }}</label>



                                                                            <br>

                                                                            <input id="photoId_firstName"  v-model="trav_name.first"    type="text" class="form-control fields input_field_design" name=""  style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);">
                                                                        </div>
                                                                        <div class="col-md-12" :style=" form_data.status!=4   ? '':'pointer-events: none' ">
                                                                            <label for="photoId" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Member Last Name / </span>{{ getLanguageText('Member Last Name') }}</label>


                                                                            <br>
                                                                            <input id="photoId_lastName" v-model="trav_name.last"   type="text" class="form-control fields input_field_design" name=""   style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);">
                                                                        </div>
                                                                        <div class="col-md-12"  :style=" form_data.status!=4? '':'pointer-events: none' ">

                                                                            <label for="photoId" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Id Number / </span>{{ getLanguageText('Id Number') }}</label>


                                                                            <br>
                                                                            <input id="photoId_num" v-model="tag.value.id_num"   type="text" class="form-control fields input_field_design"  name=""   style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);">
                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                <!--passport-->
                                                                <div :id="tag.key+index"  v-if="(tag.key==='passport' || tag.ques==='Original Passport'  ) && tag.custom==1" class="form-group col-md-12 bg-white all-scroll content_div">

                                                                    <label for="custom_filed" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Passport Details / </span>{{ getLanguageText('Passport Details') }}</label>


                                                                    <label v-if="tag.require" class="text-danger">*</label><br>

                                                                    <div class="row" style="">


                                                                        <div  class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' ">

                                                                            <label for="passport" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Issue Date / </span>{{ getLanguageText('Issue Date') }}</label>


                                                                            <br>
                                                                            <date-picker

                                                                                v-model="tag.value.issue_date"
                                                                                @input="err_passport=[]"
                                                                                :config="$root.dpconfigDate_disable_future_dates"
                                                                                id="passport_issue_date"
                                                                                name="passport_issue_date"
                                                                                class="form-control fields input_field_design"
                                                                                style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"
                                                                               >
                                                                            </date-picker>
                                                                        </div>
                                                                        <div  class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' "
                                                                        >
                                                                            <label for="passport" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Exp. Date / </span>{{ getLanguageText('Exp. Date') }}</label>





                                                                            <br>
                                                                            <date-picker

                                                                                v-model="tag.value.exp_date"
                                                                                @input="err_passport=[]"
                                                                                :config="$root.dpconfigDate"
                                                                                id="passport_date" name="passport_date"
                                                                                class="form-control fields input_field_design"

                                                                                style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);"
                                                                            >
                                                                            </date-picker>

                                                                        </div>
                                                                        <div class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' ">

                                                                            <label for="passpassportport" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Issue Place / </span>{{ getLanguageText('Issue Place') }}</label>



                                                                            <br><input v-model="tag.value.issue_place"   type="text" class="form-control fields input_field_design" id="passport_issue_place" name="passport_issue_place"    style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);" ></div>
                                                                        <div class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' ">

                                                                            <label for="passport" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">First Name / </span>{{ getLanguageText('First Name') }}</label>


                                                                            <br><input v-model="tag.value.name_first"   type="text" class="form-control fields input_field_design" id="passport_first_name" name="passport_first_name"    style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);" ></div>
                                                                        <div class="col-md-12 " :style=" form_data.status!=4   ? '':'pointer-events: none' ">

                                                                            <label for="passport" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Last Name / </span>{{ getLanguageText('Last Name') }}</label>



                                                                            <br><input v-model="tag.value.name_last"  type="text" class="form-control fields input_field_design" id="passport_last_name" name="passport_last_name"    style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);" ></div>
                                                                        <div class="col-md-12" :style=" form_data.status!=4   ? '':'pointer-events: none' ">

                                                                            <label for="passport" class="label-heading"> <span v-if="'en' !==  SelectedLangForForm.code">Passport Number / </span>{{ getLanguageText('Passport Number') }}</label>


                                                                            <br><input v-model="tag.value.passportno"  type="text" class="form-control fields input_field_design" id="passport_no" name="passport_no"    style="padding-left: 20px;border: 2px solid #fff;padding: 2rem;background: rgb(243 244 245);" ></div>




                                                                    </div>
                                                                </div>





                                                            </div>

                                                            <span>

<!--                                                                && addMemValidate ==''-->
                                                            </span>
                                                            <div  class="form-group col-md-12 bg-white all-scroll content_div"
                                                                  v-if="((form_data.add_member == true || form_data.member_allowed >1 || form_data.add_member=='true' )
                                                                  && form_data.form_step.addmembers.status!=='active'
                                                                  && form_data.long_id.search('FAM')==-1
                                                                  && form_data.status==0) || addMemValidate!=''"

                                                            >
                                                                <label  class="label-heading">
                                                                    <span  v-if="form_data.member_allowed>1" style="color:red;">You are entitled to nominate {{form_data.member_allowed - 1 }} members. Do you want to nominate</span>
                                                                    <span v-else style="color:red;">Do you want to add self paid member?</span>

                                                                </label><br>



                                                                <input type="radio" v-model="addMemValidate" value="Yes" @change="addMemberValidationfunc"> <label class="container_box" style="font-size: 18px;margin-left: 1rem;">Yes</label><br>

                                                                <input type="radio" v-model="addMemValidate" value="No"  @change="addMemberValidationfunc"> <label class="container_box" style="font-size: 18px;margin-left: 1rem;">No</label>
                                                            </div>


                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Add Members details accordion-->
                                        <div class="card" id="members-acco" v-show="((form_data.add_member==true ||form_data.add_member=='true') && form_data.form_step.addmembers.visibility=='show') ||((form_filler=='agent' || (form_filler=='trav' && form_data.member_allowed > 1) || form_filler=='handler_fill') && mode!='preview' && form_data.form_step.addmembers.visibility=='show' && form_data.long_id.search('FAM')==-1 )" style="background-color: rgba(250, 250, 250, 0.9);border:1px solid rgb(220, 220, 220);"
                                             :class="form_filler=='trav' ||  form_filler=='handler_fill'  ?
                                             form_data.member_allowed>0 || (form_data.long_id.search('FAM')==-1  && (form_data.add_member==true || form_data.add_member=='true') && form_data.status!=4) ?
                                             ''
                                             :
                                             'hidesec'
                                             :form_data.member_allowed>0?'':'hidesec'
                                            ">

                                            <div class="card-header" id="faqhead4" @click="updateStep('addmembers')">
                                                <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4"
                                                   aria-expanded="true" aria-controls="faq4" style="font-size: 25px;font-weight: 400;">

                                                   <span> <span v-if="'en' !==  SelectedLangForForm.code">Add Members / </span>{{ getLanguageText('Add Members') }}</span>




                                                </a>
                                            </div>

                                            <div id="faq4" :class=" form_filler=='agent' || form_data.form_step.addmembers.status=='active'?'show':''"  class="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                                                <div class="card-body"  >
                                                    <form >
                                                        <div class="card-body" >
                                                            <!--nominations-->
                                                            <div class="col-md-12 form-group  mt-5"

                                                                 v-for="(member,index) in form_data.member_data" :id="'add_member'+(index+1)"


                                                                 :class=" member.approval_status==2?'border border-danger':''"
                                                            >


                                                                <label  for="custom_filed" class="label-heading">

                                                                    <span> <span v-if="'en' !==  SelectedLangForForm.code">Add Memberss {{index+1}}  /

                                                                    </span>{{ getLanguageText('Add Members') }}  {{index+1}}</span>

                                                                    <span class="badge "
                                                                          :class="member.approval_status==1?'badge-warning':member.approval_status==2?'badge-danger':'badge-success'"
                                                                          v-if="member.approval_status!=0" style="border-radius: 10px">
                                                                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                                                                        {{member.approval_status==1?'Approval Pending':member.approval_status==2?'Approval Rejected':'Approval Accepted'}}
                                                                    </span>
                                                                </label><br>



                                                                <h4 class="text-danger" v-if="member.approval_status==2">* Rejected Reason :  {{member.approval_msg}}</h4>

                                                                <div  class="row"
                                                                      :style="member.approval_status==0 || member.approval_status==2 ? '' : 'pointer-events: none' "
                                                                      style="padding:20px;background-color:#fff;"
                                                                      v-if="form_filler=='trav' || form_filler=='handler_fill' " :id="'add_member'+index"
                                                                >

                                                                    <div class="col-md-4 border-right" >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Gender  / </span><br>{{ getLanguageText('Gender') }}</span>




                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <v-select
                                                                            :clearable="false"
                                                                            :disabled="member.approval_status==1 || member.approval_status==3 "
                                                                            name="addmem"
                                                                            label="label"
                                                                            :options="[{'label':'Male','type':'male'},{'label':'Female','type':'female'}]"
                                                                            v-model="member.gender"
                                                                            style="background-color: #fff"
                                                                            class=""/>
                                                                    </div>

                                                                    <div class="col-md-4 border-right"  >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Name  / </span><br>{{ getLanguageText('Name') }}  </span>


                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.name"  type="text" class="form-control input_field_design" ></div>

                                                                    <div class="col-md-4 border-right" >


                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Date Of Birth  / </span><br>{{ getLanguageText('Date Of Birth') }}  </span>




                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <date-picker
                                                                            :config="$root.dpconfigDate_disable_future_dates"
                                                                            class="form-control text-muted fw-4 "
                                                                            name="dob"
                                                                            :disabled="member.approval_status==1 || member.approval_status==3"
                                                                            v-model="member.dob"
                                                                            placeholder="dd-mm-yyyy"
                                                                        >
                                                                        </date-picker>


                                                                    </div>


                                                                    <div class="col-md-4 border-right"  v-if="(form_filler=='trav' || form_filler=='handler_fill') && Sheettype[0].meta_value!=2">
                                                                        <label for="exp" class="label-heading" title="Associate to Parent">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Select  / </span><br>{{ getLanguageText('Select') }}  </span>

                                                                            <p class="text-danger d-print-inline">*</p></label> <br>

                                                                        <v-select
                                                                            :clearable="false"
                                                                            name="addmem"
                                                                            label="label"
                                                                            :options="mem_cat_options"
                                                                            v-model="member.cat"
                                                                            style="background-color: #fff"
                                                                            class=" "
                                                                        />

                                                                    </div>

                                                                    <div class="col-md-4 border-right" style="margin-top: 30px;"  v-if="member.cat.type=='iti' " >


                                                                        <label for="exp" class="label-heading">

                                                                            <span>
                                                                                We are related?
                                                                            </span>

                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <v-select

                                                                            :clearable="false"
                                                                            name="addmem"
                                                                            label="label"
                                                                            :options="[{'label':'Yes'},{'label':'No'}]"
                                                                            v-model="member.relation_cat"
                                                                            style="background-color: #fff"
                                                                            class=" "



                                                                        />

                                                                    </div>

                                                                    <div class="col-md-4 border-right" v-if="member.relation_cat.label!='' && member.cat.type=='iti' ">
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Phone  / </span><br>{{ getLanguageText('Phone') }}  </span>

                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <vue-tel-input v-bind="bindProps" v-model="member.phone" name="phone"  class="form-control vue-tel-input fw-3"></vue-tel-input>
                                                                    </div>
                                                                    <div class="col-md-4 border-right" v-if="member.relation_cat.label!='' && member.cat.type=='iti' ">
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">E-mail / </span><br>{{ getLanguageText(' E-mail') }}  </span>



                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.email"  type="text" class="form-control input_field_design"  >
                                                                    </div>
                                                                    <div class="col-md-4 border-right" v-if="member.relation_cat.label!='' && member.cat.type=='iti' ">
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Home Town  / </span><br>{{ getLanguageText('Home Town') }}  </span>



                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.home_town"  type="text" class="form-control input_field_design"  >
                                                                    </div>
                                                                    <div class="col-md-4 border-right" v-else-if="member.cat.type=='fam' ">

                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Home Town  / </span><br>{{ getLanguageText('Home Town') }}  </span>


                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.home_town"  type="text" class="form-control input_field_design"  >


                                                                    </div>


                                                                    <div class="col-md-4 border-right" v-if="member.cat.type=='iti' && member.relation_cat.label=='Yes'">
                                                                        <label for="exp" class="label-heading" title="Relation">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Relation  / </span><br>{{ getLanguageText('Relation') }}  </span>




                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.relation1.relation" title="relation"  type="text" class="form-control input_field_design"  >
                                                                    </div>
                                                                    <div class="col-md-4 " v-else-if="member.cat.type=='fam' ">
                                                                        <label for="exp" class="label-heading" title="Relation">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Relation  / </span><br>{{ getLanguageText('Relation') }}  </span>


                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.relation1.relation" title="relation"  type="text" class="form-control input_field_design"  >
                                                                    </div>
                                                                    <div class="col-md-4 border-right" v-if="member.cat.type=='iti' && member.relation_cat.label=='Yes'">
                                                                        <label for="exp" class="label-heading" title="Relation">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Proof of relation / </span><br>{{ getLanguageText('Relation_proof') }}  </span>
                                                                           <p class="text-danger d-print-inline">*</p></label> <br>

                                                                          <div class="fileUpl">
                                                                              <button style="position: absolute;" :class="member.relation1.relation_proof==''?'btn-dark':'btn-danger'" @click.prevent="chooseFiles('relationShipProof'+(index+1))">{{member.relation1.relation_proof==''?'Choose File':'Update'}}</button>
                                                                              <input type="file" name="avatar"  accept="image/png, image/jpeg, application/pdf" :id="'relationShipProof'+(index+1)" @change="uploadfile($event,'relation_proof',index,member.relation1.relation_proof,'relationShipProof'+(index+1))">
                                                                          </div>

                                                                    </div>

                                                                    <div class="col-md-4 border-right" :disabled="member.approval_status==1 || member.approval_status==3 "   v-else-if="member.cat.type=='fam' ">
                                                                        <label for="exp" class="label-heading" title="Relation">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Proof of relation  / </span><br>{{ getLanguageText('Relation_proof') }}  </span>
                                                                            <p class="text-danger d-print-inline">*</p></label> <br>

                                                                        <div class="fileUpl">
                                                                            <button style="position: absolute;" :class="member.relation1.relation_proof==''?'btn-dark':'btn-danger'" @click.prevent="chooseFiles('relationShipProof'+(index+1))">{{member.relation1.relation_proof==''?'Choose File':'Update'}}</button>
                                                                            <input type="file" name="avatar"  accept="image/png, image/jpeg, application/pdf" :id="'relationShipProof'+(index+1)" @change="uploadfile($event,'relation_proof',index,member.relation1.relation_proof,'relationShipProof'+(index+1))">
                                                                        </div>

                                                                    </div>



                                                                </div>

                                                                <div class="row" style="padding:20px;background-color:#fff;" v-if="form_filler=='agent'" :id="'add_member'+index">
                                                                    <div class="col-md-4 "  >
                                                                        <label for="exp" class="label-heading">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Name  / </span><br>{{ getLanguageText('Name') }}  </span>


                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.name"  type="text" class="form-control input_field_design"  ></div>
                                                                    <div class="col-md-4 " >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Phone  / </span><br>{{ getLanguageText('Phone') }}  </span>


                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <vue-tel-input v-bind="bindProps" v-model="member.phone" name="phone"  class="form-control vue-tel-input fw-3"></vue-tel-input>

                                                                        <!--                                                                                        <input v-model="member.phone"  type="text" class="form-control input_field_design" placeholder="Phone" >-->
                                                                    </div>
                                                                    <div class="col-md-4 " >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">E-mail  / </span><br>{{ getLanguageText('E-mail') }}  </span>



                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.email"  type="text" class="form-control input_field_design"  ></div>
                                                                    <div class="col-md-4 " >
                                                                        <label for="exp" class="label-heading">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Home Town  / </span><br>{{ getLanguageText('Home Town') }}  </span>

                                                                        </label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.home_town"  type="text" class="form-control input_field_design" >
                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <!--Self Paid Members-->

                                                            <div v-if="form_filler=='trav' || form_filler=='handler_fill'"
                                                                 class="col-md-12 form-group  mt-5"  v-for="(member,index) in form_data.member_name"
                                                                 :id="'member'+(index+1)"
                                                                 :class=" member.approval_status==2?'border border-danger':''"
                                                            >

                                                                <label for="custom_filed" class="label-heading" style="width: 100% !important;">
                                                                    <span> <span v-if="'en' !==  SelectedLangForForm.code">Self Paid Member {{index+1}} {{form_data.member_name}}  / </span>{{ getLanguageText('Self Paid Member') }} {{index+1}} </span>


                                                                    <span class="badge "
                                                                          :class="member.approval_status==1?'badge-warning':member.approval_status==2?'badge-danger':'badge-success'"
                                                                          v-if="member.approval_status!=0" style="border-radius: 10px">
                                                                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                                                                        {{member.approval_status==1?'Approval Pending':member.approval_status==2?'Approval Rejected':'Approval Accepted'}}
                                                                    </span>

                                                                </label><br>

                                                                <h4 class="text-danger" v-if="member.approval_status==2">* Rejected Reason :  {{member.approval_msg}}</h4>
                                                                <div class="row" :id="'member-'+index" style="padding:20px;" :style="member.approval_status==1 || member.approval_status==3 ? 'pointer-events: none' : '' " >


                                                                    <div class="col-md-4 border-right" >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Gender  / </span><br>{{ getLanguageText('Gender') }}  </span>



                                                                            <p class="text-danger d-print-inline">*</p></label>


                                                                        <br>
                                                                        <v-select
                                                                            :clearable="false"
                                                                            name="addmem"
                                                                            label="label"
                                                                            :disabled="member.approval_status==1 || member.approval_status==3"
                                                                            :options="[{'label':'Male','type':'male'},{'label':'Female','type':'female'}]"
                                                                            v-model="member.gender"
                                                                            class=" "
                                                                            style="background-color: #fff"


                                                                        />
                                                                    </div>
                                                                    <div class="col-md-4 border-right" >
                                                                        <label for="exp" class="label-heading">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Name  / </span><br>{{ getLanguageText('Name') }}  </span>



                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3" v-model="member.name"  type="text" class="form-control input_field_design"  ></div>
                                                                    <div class="col-md-4 border-right" >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Date Of Birth  / </span><br>{{ getLanguageText('Date Of Birth') }}  </span>



                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <date-picker


                                                                            :config="$root.dpconfigDate_disable_future_dates"
                                                                            class="form-control text-muted fw-4 "
                                                                            :disabled="member.approval_status==1 || member.approval_status==3"
                                                                            name="dob"
                                                                            v-model="member.dob"
                                                                            placeholder="dd-mm-yyyy"
                                                                        >
                                                                        </date-picker>

                                                                    </div>
                                                                    <div class="col-md-4 border-right" >
                                                                        <label for="exp" class="label-heading" title="Relation">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Relation  / </span><br>{{ getLanguageText('Relation') }}  </span>




                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3" v-model="member.relation1.relation"  type="text" class="form-control input_field_design"  >
                                                                    </div>
                                                                    <div class="col-md-4 border-right">
                                                                        <label for="exp" class="label-heading" title="Relation">
                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Proof of relation / </span><br>{{ getLanguageText('Relation_proof') }}  </span>
                                                                            <p class="text-danger d-print-inline">*</p></label> <br>

                                                                        <div class="fileUpl">
                                                                            <button style="position: absolute;" :class="member.relation1.relation_proof==''?'btn-dark':'btn-danger'" @click.prevent="chooseFiles('relationShipProofSelfPade'+(index+1))">{{member.relation1.relation_proof==''?'Choose File':'Update'}}</button>
                                                                            <input  :disabled="member.approval_status==1 || member.approval_status==3" type="file" name="avatar"  accept="image/png, image/jpeg, application/pdf" :id="'relationShipProofSelfPade'+(index+1)" @change="uploadfile($event,'relation_proof_self',index,member.relation1.relation_proof,'relationShipProofSelfPade'+(index+1))">
                                                                        </div>

                                                                    </div>
                                                                    <div class="col-md-4 " >
                                                                        <label for="exp" class="label-heading">

                                                                            <span> <span v-if="'en' !==  SelectedLangForForm.code">Home Town  / </span><br>{{ getLanguageText('Home Town') }}  </span>

                                                                            <p class="text-danger d-print-inline">*</p></label> <br>
                                                                        <input :disabled="member.approval_status==1 || member.approval_status==3 " v-model="member.home_town"  type="text" class="form-control input_field_design"  >
                                                                    </div>
                                                                    <div class="col-md-1 mt-2" >
                                                                        <i style="float:right " v-if="member.status==1" class="fa fa-trash" title="Delete" @click="form_data.member_name.splice(index, 1)" aria-hidden="true"></i>
                                                                        <!--                                                                                        <label for="exp">Airport Hub</label> <br>-->
                                                                        <!--                                                                                        <input v-model="member.airport_hub"  type="text" class="form-control input_field_design" placeholder="Relation" >-->
                                                                    </div>


                                                                </div>
                                                            </div>


                                                            <span style="font-size:15px" v-if="(this.form_data.member_allowed==1 || this.form_data.member_allowed== '-1' ||  this.form_data.member_allowed== -1 ) && (form_filler=='trav' ||  form_filler=='handler_fill')
                                                                  && form_data.long_id.search('FAM')===-1
                                                            && (form_data.add_member==true || form_data.add_member=='true')
                                                            && form_data.status!=4" >Note:- To add more additional self paid passengers to the group, click on <span style="color:red">Add Member</span></span><br>

                                                            <span style="font-size:15px" v-if="this.form_data.member_allowed >1 && (form_filler=='trav' ||  form_filler=='handler_fill')
                                                                  && form_data.long_id.search('FAM')===-1
                                                            && (form_data.add_member==true || form_data.add_member=='true')
                                                            && form_data.status!=4">Note:-  To add additional self paid passengers to the group, click on <span style="color:red">Add Member</span></span><br>


                                                            <!--Add Member Button-->
                                                            <a
                                                                v-if="(form_filler=='trav' ||  form_filler=='handler_fill')
                                                                && form_data.long_id.search('FAM')===-1
                                                                && (form_data.add_member==true || form_data.add_member=='true')
                                                                && form_data.status!=4" href="#"
                                                                @click="form_data.member_name.push({'gender':'','name':'','dob':'','relation1':{'relation':'','relation_proof':''},'relation':'','home_town':'','status':1,'paid':false,'approval_status':0,'rejection_status':false,'approval_msg':''})"
                                                                class="btn-primary btn btn-lg " >
                                                                Add Member
                                                            </a>


                                                        </div>
                                                    </form>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>



                                <div class="row" v-if="form_data.footer!=''">
                                    <div class="col-lg-12" v-if="typeof form_data.footer =='string'"  >
                                          <span   v-for="(data,ind) in JSON.parse(form_data.footer)">
                                            <span v-for="(value,key,ind) in data" v-if="key ===  SelectedLangForForm.code" >

                                               <div class="Title" v-html="value" style="text-align: justify;padding: 2rem;border-radius: 2rem;background: rgb(255, 255, 255);">
<!--                                            <u><h1>Head Title</h1></u>-->

                                              </div>
                                                   </span>
                                        </span>



                                        </div>
                                    <div class="col-lg-12" v-else>
                                          <span   v-for="(data,ind) in form_data.footer">
                                            <span v-for="(value,key,ind) in data" v-if="key ===  SelectedLangForForm.code" >

                                               <div class="Title" v-html="value" style="text-align: justify;padding: 2rem;border-radius: 2rem;background: rgb(255, 255, 255);">
<!--                                            <u><h1>Head Title</h1></u>-->

                                              </div>
                                                   </span>
                                        </span>



                                        </div>



                                    </div>
                                <div class="row" style="padding:2rem 2rem;">
                                    <input type="checkbox" v-model="CheckFiest" class="check1" value="" ><span class="checkTest" >I do hereby declare that all the above information given by me are true to the best of my knowledge and belief.</span>

                                </div>
                                </div>

                                <div style="padding:2rem;display:flex;position: sticky;bottom: 0;background: rgb(245, 243, 243);" v-if="form_data.status!=4 && form_filler=='trav'">

                                    <div  style="text-align: left;width:50%"> <button :disabled="mode=='preview'"  type="button" class="btn  btn-lg" style="width:95%;background:#0D5AD9;color:#fff" @click="submitForm(0)">Save</button></div>

                                    <div  style="text-align: right;width:50%" >
                                        <button :disabled="mode=='preview'" type="button" class="btn  btn-lg"  style="width:95%;color:#fff;background: #00a157;" @click="form_filler=='agent' && form_data.status!=4?submit_form('submit_traveller_form2'):submit_form('submit_traveller_form')"
                                                v-if="form_data.payment_status==1">
                                            Submit & Share
                                        </button>
                                    </div>



                                    </div>

                                <div style="padding:2rem;display:flex;" v-else-if="form_data.status!=4 && form_filler=='handler_fill'">

                                    <div  style="text-align: left;width:50%">
                                        <button   type="button" class="btn  btn-lg" style="width:95%;background:#0D5AD9;color:#fff" @click="submitForm(0)">Save</button>
                                </div>

                                    <div  style="text-align: right;width:50%">
                                        <button type="button" class="btn  btn-lg"  style="width:95%;color:#fff;background: #00a157;" @click="submitForm(4)">
                                            Mark as complete
                                        </button>
                                    </div>


                                </div>
                                <div style="padding:2rem;display:flex;" v-else-if="form_data.status==4 && form_filler=='handler_fill'">

                                    <div  style="text-align: left;width:50%"> <button :disabled="mode=='preview'" type="button" class="btn  btn-lg" style="width:95%;background:#0d5ad9;color:#fff" @click="submitForm(form_data.status)">Save</button></div>


                                </div>
                                <div style="padding:2rem;display:flex;" v-else-if="form_filler=='agent'">

                                    <div  style="text-align: left;width:100%">
                                        <button :disabled="mode=='preview'"
                                                type="button"
                                                class="btn  btn-lg"
                                                style="width:95%;background:#0d5ad9;color:#fff"
                                                @click="submit_form('submit_traveller_form2')">
                                            Submit
                                        </button>
                                    </div>


                                </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>




</template>

<script>
    import { VueTelInput } from 'vue-tel-input';
    import hin from './../../mixins/hin';
    import te from './../../mixins/te';
    import ta from './../../mixins/ta';
    import gu from './../../mixins/gu';
    import kn from './../../mixins/kn';
    import mr from './../../mixins/mr';
    import uploadfiledata from "../../mixins/uploadfile";
    import getLanguageText from "../../mixins/getLanguageText"

    export default {
        name: "FormComponent",
        props:['banner','form_data','mode','form_filler',"tabsVisibility","trav_name","states",'languages','hub_data_list','populate_data'],
        components: {VueTelInput},
        mixins:[hin,ta,te,gu,kn,mr,getLanguageText],

        data() {
            return {
                Sheettype:[],
                addMemValidate:'',
                CheckFiest:false,
                fileInputKey: 0,
                fileInputKey1:0,
                fileInputKey2: 0,
                fileInputKey3:0,
                SelectedLangForForm:{ "code": "en", "name": "English", "nativeName": "English" },
                langSelected:'',
                show:false,
                TravelerHub:{ "Hub": "", "dates": [], "hubDone": true } ,
                HubDetailArr:[],
                mem_cat_options:[{'type':'fam','label':'I will manage their booking'},{'type':'iti','label':'They will manage their booking'}],
                passportUploadedFiles:{'image_first':false,'image_last':false,'pdf':false,'status':false},
                passIndex:0,
                photoIdindex:0,
                bindProps: {
                    mode: "international",
                    defaultCountry: "INR",
                    disabledFetchingCountry: false,
                    disabled: false,
                    disabledFormatting: false,

                    required: false,
                    enabledCountryCode: true,
                    enabledFlags: true,
                    preferredCountries: ["AU", "BR"],
                    onlyCountries: [],
                    ignoredCountries: [],
                    autocomplete: "off",
                    name: "telephone",
                    maxLen: 25,
                    wrapperClasses: "",
                    inputClasses: "",
                    dropdownOptions: {
                        disabledDialCode: false
                    },
                },
                hubsExist:false,
                traveler_hubsDate:[]

            }
        },





        beforeMount() {

            if(typeof this.form_data.form_step =="string"  ){
                        // console.log(this.form_data.form_step)
                const Obj1 = this.form_data.form_step.replace(/\\/g, '')

                const Obj2 =  Obj1.replace(/""/g, '')

                    //     console.log("form_stemomg",Obj2);

                this.form_data.form_step=JSON.parse(Obj2);

            }
            if(typeof this.form_data.member_name =="string"){


                this.form_data.member_name=JSON.parse(this.form_data.member_name);

            }


           if(this.form_filler=='agent'){

                this.tabsVisibility.docs=false;
                this.tabsVisibility.passport=false;
                this.tabsVisibility.passport =false;

           }
            else if(this.form_filler === "handler_fill"){

                if(this.hub_data_list.travel_hubs == null){
                    this.traveler_hubsDate.push([])

                }else{
                this.traveler_hubsDate.push(this.hub_data_list.travel_hubs)

                if(JSON.parse(this.traveler_hubsDate[0].meta_value).length > 0){
                this.tabsVisibility.travel_date =true;

            }





                }



            }
            else{

                this.traveler_hubsDate = _.cloneDeep(this.hub_data_list.travel_hubs);



            }





            if(this.form_data.long_id==undefined){
                this.form_data.long_id='';
            }
            //adding headers and footes to main level of form_data
            if(this.form_data.get_form){

                this.form_data.header=_.cloneDeep(this.form_data.get_form.header);
                this.form_data.footer=_.cloneDeep(this.form_data.get_form.footer);

            }



            if(this.form_data.form_step==0 || this.form_data.form_step==1 || this.form_data.form_step=="" || this.form_data.form_step==undefined){
                this.form_data.form_step=_.cloneDeep({
                    'travel_date':{
                        'visibility':this.tabsVisibility.travel_date?'show':'hide',
                        'status':this.tabsVisibility.travel_date?'active':'inactive',
                    },
                    'passport':{
                        'visibility':this.tabsVisibility.passport?'show':'hide',
                        'status':this.tabsVisibility.passport?'active':'inactive',
                    },
                    'docs':{
                        'visibility':this.tabsVisibility.passport==false && (this.tabsVisibility.docs || this.tabsVisibility.photoId)?'show':'hide',
                        'status':this.tabsVisibility.docs || this.tabsVisibility.photoId?'active':'inactive',
                    },

                    'otherDetails':{
                        'visibility':this.tabsVisibility.passport==false && this.tabsVisibility.docs==false?this.tabsVisibility.docs?'show':'show':'hide',
                        'status':this.tabsVisibility.passport==false && this.tabsVisibility.docs==false?this.tabsVisibility.docs?'inactive':'active':'inactive'
                    },
                    'addmembers':{
                        'visibility':(this.form_data.add_member==true || this.form_data.add_member=='true') && this.tabsVisibility.passport==false && this.tabsVisibility.photoId==false ?'show':'hide',
                        'status':'inactive',
                    }
                })

            }


            if(this.mode!=='preview'){
                var memArr = _.cloneDeep(this.hub_data_list.get_meta);
                var ArrFil = memArr.filter(item => item.meta_key.trim() == 'sheet_type');

                this.Sheettype =_.cloneDeep(ArrFil);
                if( this.Sheettype.length ==0){
                    this.Sheettype.push({'meta_value':''});
                }






            }



         },
        mounted() {



        if(this.mode!=='preview'){
            var memArr = _.cloneDeep(this.hub_data_list.get_meta);
             var ArrFil = memArr.filter(item => item.meta_key.trim() == 'sheet_type');

             this.Sheettype =_.cloneDeep(ArrFil);
            if( this.Sheettype.length ==0){
                this.Sheettype.push({'meta_value':''});
            }


            if(this.Sheettype[0].meta_value =='2'){

                for (var i = 0; i < this.form_data.member_data.length; i++) {

                        this.form_data.member_data[i].cat ={'type':'fam','label':'I will manage their booking'};

                }

            }

            if(this.form_data.member_data.length>0){
                this.form_data.member_data.forEach(member => {
                    this.addMissingRelation1Key(member);
                });


            }







            if(this.form_data.html_qna[this.form_data.html_qna.length - 1].addMemberSection !=='' && this.form_data.html_qna[this.form_data.html_qna.length - 1].addMemberSection !== undefined){
                this.addMemValidate = this.form_data.html_qna[this.form_data.html_qna.length - 1].addMemberSection;

            }
        }





            if(this.form_data.long_id.includes('FAM') && this.form_data.status !==1 && (typeof this.form_data.form_step !=="object" )){

                this.form_data.form_step.travel_date.status='inactive';
                if(this.tabsVisibility.passport == true){

                    this.form_data.form_step.passport.visibility='show';
                    this.form_data.form_step.passport.status='active';
                    this.form_data.form_step.otherDetails.visibility='hide';
                    this.form_data.form_step.otherDetails.status='inactive';




                }
                else if(this.tabsVisibility.docs || this.tabsVisibility.photoId){
                    this.form_data.form_step.docs.visibility='show';
                    this.form_data.form_step.docs.status='active';

                    if(this.tabsVisibility.photoId==false){
                        this.form_data.form_step.otherDetails.visibility='show';
                        this.form_data.form_step.otherDetails.status='inactive';


                    }

                }
                else{
                    this.form_data.form_step.otherDetails.visibility='show';
                    this.form_data.form_step.otherDetails.status='active';
                }
            }





            if(this.hub_data_list.travel_hubs ==undefined){
                this.hub_data_list.travel_hubs = ''
            }



            if(this.hub_data_list.travel_hubs != undefined){
                if(this.hub_data_list.travel_hubs.length>0  ){

                        if(JSON.parse(this.hub_data_list.travel_hubs[0].meta_value).length>0){

                            this.hubsExist=true;

                        }

                        }

            }



            // setting preview mode
            if(this.mode=='preview'){
                this.tabsVisibility={'docs':true,'passport':true,'photoId':true};
                this.form_filler='trav';
                this.form_data.payment_status=1;
                this.form_data.form_step=_.cloneDeep({


                    'passport':{
                        'visibility':'show',
                        'status':'active',
                    },
                    'docs':{
                        'visibility':'show',
                        'status':'inactive',
                    },
                    'otherDetails':{
                        'visibility':'show',
                        'status':'inactive',
                    },
                    'addmembers':{
                        'visibility':'hide',
                        'status':'inactive',
                    },
                    'travel_date':{
                        'visibility':'hide',
                        'status':'inactive',
                    },
                })
            }

  if(typeof this.form_data.form_step =="string"  ){
                const Obj1 = this.form_data.form_step.replace(/\\/g, '')
              
               const Obj2 =  Obj1.replace(/""/g, '')
              
                this.form_data.form_step=JSON.parse(Obj2);
               
            }



            //setting passport validation for edit mode
        if(this.mode!='preview'){


     if ((this.hub_data_list.travel_date !== "" && (this.hub_data_list.travel_date !== null && this.hub_data_list.travel_date !== 'null') )) {



         this.form_data.form_step.travel_date.status = 'inactive';


         if (this.tabsVisibility.passport == true) {
             this.form_data.form_step.passport.visibility = 'show';
             this.form_data.form_step.passport.status = 'active';
         } else if (this.tabsVisibility.docs || this.tabsVisibility.photoId) {
             this.form_data.form_step.docs.visibility = 'show';
             this.form_data.form_step.docs.status = 'active';



             if (this.tabsVisibility.photoId == false) {
                 this.form_data.form_step.otherDetails.visibility = 'show';
                 this.form_data.form_step.otherDetails.status = 'inactive';
             }
         } else {
             this.form_data.form_step.otherDetails.visibility = 'show';
             this.form_data.form_step.otherDetails.status = 'active';
         }
     }
      else {
         if (this.tabsVisibility.travel_date == true && !this.form_data.long_id.includes('FAM')) {


                    if(this.hub_data_list.travel_date==null || this.hub_data_list.travel_date==''){

                        this.form_data.form_step.travel_date.visibility='show';
                        this.form_data.form_step.travel_date.status='active';
                 this.form_data.html_qna.forEach((data)=>{
                     if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Original Passport'){
                         if((data.value.url=='' ||data.value.url2 =='') && data.value.pdf ==''){
                        this.form_data.form_step.passport.visibility='hide';
                        this.form_data.form_step.passport.status='inactive';
                 this.form_data.form_step.docs.visibility = 'hide';
                 this.form_data.form_step.docs.status = 'inactive';
                 this.form_data.form_step.otherDetails.visibility = 'hide';
                 this.form_data.form_step.otherDetails.status = 'inactive';
                 this.form_data.form_step.addmembers.visibility ='hide';
                 this.form_data.form_step.addmembers.status ='inactive';
                         }

                     }
                 })






             } else {
                 // Add any additional code here if needed
                    }
                }

                }



                this.passIndex=this.form_data.html_qna.findIndex(form => (form.key=='file' && form.ques=='Original Passport'));
                this.photoIdindex=this.form_data.html_qna.findIndex(form => (form.key=='file' && form.ques=='Photo ID'));

                if(this.photoIdindex<0){
                    this.photoIdindex=0;
                }
                if(this.passIndex<0){
                    this.passIndex=0;

                }

                if( this.hub_data_list.get_meta==undefined){

                if(this.tabsVisibility.passport){


                    if(this.form_data.html_qna[this.passIndex].value.status==undefined){
                        this.form_data.html_qna[this.passIndex].value.status=false;
                    }

                    if(this.form_data.html_qna[this.photoIdindex].value.status==undefined){
                        this.form_data.html_qna[this.photoIdindex].value.status=false;
                    }


                    if(this.form_data.html_qna[this.passIndex].value.url!=""){
                        this.passportUploadedFiles.image_first=true;
                    }
                    if(this.form_data.html_qna[this.passIndex].value.url2!=""){
                        this.passportUploadedFiles.image_last=true;
                    }
                    if(this.form_data.html_qna[this.passIndex].value.pdf!=""){
                        this.passportUploadedFiles.pdf=true;
                    }




                    if(this.form_data.html_qna[this.passIndex].value.status==false){

                        // this.form_data.form_step.passport.status='active';
                    }
                }

                if(this.photoIdindex==0 && this.passIndex==0){

                    this.form_data.form_step.otherDetails.visibility='show';
                    this.form_data.form_step.otherDetails.status='active';

                        if((this.form_data.add_member==true || form_data.add_member=='true') && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                        this.form_data.form_step.addmembers.visibility='show';
                        this.form_data.form_step.addmembers.status='inactive';
                    }
                }


                    }


                    if(this.tabsVisibility.passport){


                        if(this.form_data.html_qna[this.passIndex].value.status==undefined){
                            this.form_data.html_qna[this.passIndex].value.status=false;
                        }

                        if(this.form_data.html_qna[this.photoIdindex].value.status==undefined){
                            this.form_data.html_qna[this.photoIdindex].value.status=false;
                        }

                        if(this.form_data.html_qna[this.passIndex].value.url!=""){
                            this.passportUploadedFiles.image_first=true;
                        }
                        if(this.form_data.html_qna[this.passIndex].value.url2!=""){
                            this.passportUploadedFiles.image_last=true;
                        }
                        if(this.form_data.html_qna[this.passIndex].value.pdf!=""){
                            this.passportUploadedFiles.pdf=true;
                        }




                        if(this.form_data.html_qna[this.passIndex].value.status==false){

                            // this.form_data.form_step.passport.status='active';
                        }
                    }

                    if(this.photoIdindex==0 && this.passIndex==0){

                        this.form_data.form_step.otherDetails.visibility='show';
                        this.form_data.form_step.otherDetails.status='active';



                    }




            }
            if(this.form_filler=='agent'){
                this.form_data.form_step.passport.status='inactive';
                this.form_data.form_step.passport.visibility='hide';
                this.form_data.form_step.docs.status='inactive';
                this.form_data.form_step.docs.visibility='hide';

                this.form_data.form_step.passport.status='inactive';
                this.form_data.form_step.passport.visibility='hide';
                this.form_data.form_step.addmembers.status='active';
                this.form_data.form_step.addmembers.visibility='show';

            }

        if(this.mode!='preview' ){
            if(this.form_data.status==1){
                this.CheckFiest=true;
            }
        }

        },
        methods:{
            addMissingRelation1Key(member) {
                if (!member.hasOwnProperty("relation1")) {
                    // Add relation1 key with default values
                    member.relation1 = { relation: "", relation_proof: "" };
                }
            },
            addMemberValidationfunc(){

                const addMemIndex=this.form_data.html_qna.findIndex(form => (form.type=='AddMem' && form.key=='AddMem'));

                // console.log(addMemIndex);
                if(addMemIndex>0){
                    this.form_data.html_qna[addMemIndex].addMemberSection=this.addMemValidate;

                }
                else{
                    this.form_data.html_qna.push({"type":"AddMem","key":"AddMem","value":"","custom":0,"require":0,"addMemberSection" : this.addMemValidate});
                }

                if((this.form_data.member_allowed ==-1 || this.form_data.member_allowed =='-1' ) &&  this.addMemValidate == 'Yes' ){
                    this.form_data.member_name.push({'gender':'','name':'','dob':'','relation1':{'relation':'','relation_proof':''},'relation':'','home_town':'','status':1,'paid':false})

                }

                if( this.addMemValidate == 'Yes'){
                    if((this.form_data.add_member==true || this.form_data.add_member=='true')  && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                        this.form_data.form_step.addmembers.visibility='show';
                        this.form_data.form_step.addmembers.status='active';
                    }
                    if(this.form_data.member_data.length > 0){
                        this.form_data.form_step.addmembers.visibility='show';
                        this.form_data.form_step.addmembers.status='active';

                    }
                }

                if( this.addMemValidate == 'No'){
                    if((this.form_data.add_member==true || this.form_data.add_member=='true')  && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                        this.form_data.form_step.addmembers.visibility='hide';
                        this.form_data.form_step.addmembers.status='inactive';
                    }
                    if(this.form_data.member_data.length > 0){
                        this.form_data.form_step.addmembers.visibility='hide';
                        this.form_data.form_step.addmembers.status='inactive';

                    }
                }






            },








            showLoader(status){
                this.$emit('kycLoadervisibility',status)
            },
            chooseFiles(id) {
                try{

                    let error_msg='';
                    if(id=='passport-front' || id=='passport-back'){

                        if(this.passportUploadedFiles.pdf){
                            error_msg='Merged Passport';
                        }


                    }

                    if(id=='passport-merged'){
                        if(this.passportUploadedFiles.image_first || this.passportUploadedFiles.image_last){

                            if(this.passportUploadedFiles.image_first){
                                error_msg='Passport Front';
                            }
                            if(this.passportUploadedFiles.image_last){


                                error_msg=error_msg!=''?error_msg+', Passport Back':'Passport Back';
                            }

                        }


                    }

                    if(error_msg!=''){
                        // console.log('Please remove '+error_msg+' file before Uploading');
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please remove '+error_msg+' file before Uploading',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })
                        // return false;
                    }
                    else{

                        document.getElementById(id).click();

                    }



                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }

            },
            Showinfo(type){
                try{
                    const base_url = window.location.origin;
                    let url="https://www.freeiconspng.com/thumbs/alert-icon/alert-icon-red-11.png";
                    let titles = '';

                    switch (type) {
                        case 'passport_F':
                        case 'passport_B':
                        case 'Document':
                            url = `${base_url}/images/passportValidation.gif`;
                            break;
                        case 'passport_M':
                            url = `${base_url}/images/sample3.png`;
                            titles = 'Before uploading a document, please check the following:\n' +
                            'a. Merged passport should be in two pages -passport first page on page 1 and last page on page 2\n' +
                                'b. Merged Passport should be in PDF format.';
                            break;
                    }
                    this.$swal.fire({
                        title: titles ,
                        imageUrl: url,
                        imageWidth: 350,
                        imageHeight: 350,
                        imageAlt: 'alt tag',
                        showCloseButton:true,
                        showDenyButton: true,
                        showCancelButton: false,
                        denyButtonText: 'Ok',
                    });
                } catch (error) {
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occurred. Please Try Again Later!',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500,
                    });
                }

            },
            uploadfile(value,type, index,url,id){
                try{

                    const myFile = document.getElementById(id).files[0];

                    const fileSize = myFile.size / 1024 / 1024;
                    if (fileSize > 5) {
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'File size exceeds 5 MB',
                            showConfirmButton: true,
                            timer: 3000,
                        });
                    } else {
                        if (type === 'passport-merged' && myFile.type !== 'application/pdf') {
                                document.getElementById(type).value='';
                                this.$swal.fire({

                                    type: 'error',
                                    icon: 'error',
                                title: 'Only PDF files are allowed',
                                    showConfirmButton: true,
                                timer: 3000,
                            });
                                return false;
                            }

                        if ((type === 'passport-front' || type === 'passport-back') && myFile.type === 'application/pdf') {
                                document.getElementById(type).value='';

                                this.$swal.fire({

                                    type: 'error',
                                    icon: 'error',
                                title: 'Only PNG/JPG files are allowed',
                                    showConfirmButton: true,
                                timer: 3000,
                            });
                                return false;

                            }


                            let error_val=false;

                        if (type === 'passport-front' && this.passportUploadedFiles.image_last) {
                            if (this.passIndex != null && ['image/jpg', 'image/jpeg', 'image/png'].includes(myFile.type)) {
                                        if(this.form_data.html_qna[this.passIndex].value.url2.search('img')<0){
                                            error_val=true;
                                        }
                                    }
                                }

                        if (type === 'passport-back' && this.passportUploadedFiles.image_first) {
                            if (this.passIndex != null && ['image/jpg', 'image/jpeg', 'image/png'].includes(myFile.type)) {
                                        if(this.form_data.html_qna[this.passIndex].value.url.search('img')<0){
                                            error_val=true;
                                        }
                                    }
                                }

                            if(error_val){
                                this.$swal.fire({
                                    type: 'error',
                                    icon: 'error',
                                title: 'Please upload the same file format in Passport Front & Passport Back!',
                                    showCloseButton:true,
                                    showConfirmButton: true,
                                timer: 3500,
                            });
                                return false;
                            }

                        let typeoffile='img';

                        if (['png', 'jpg', 'jpeg', 'pdf'].some(ext => myFile.type.includes(ext))) {
                            if (myFile.type === 'application/pdf') {
                                typeoffile='pdf';
                            }

                            const event = type.includes('passport-') ? 'uploaddocumentpass' : 'uploaddocument';
                            this.showLoader(true);

                            uploadfiledata('form_update', `${type}-${typeoffile}`, value.target.files[0], this.form_data.booking_id)
                                .then(response => {
                                    switch (type) {
                                        case 'passport-front':
                                    this.form_data.html_qna[this.passIndex].value.url = response.data;
                                            break;
                                        case 'passport-back':
                                    this.form_data.html_qna[this.passIndex].value.url2 = response.data;
                                            break;
                                        case 'passport-merged':
                                    this.form_data.html_qna[this.passIndex].value.pdf = response.data;
                                            break;
                                        case 'photo_id':
                                    this.form_data.html_qna[this.photoIdindex].value.url = response.data;
                                            break;
                                        case 'relation_proof':
                                           this.form_data.member_data[index].relation1.relation_proof= response.data;
                                           break;
                                        case 'relation_proof_self':
                                            this.form_data.member_name[index].relation1.relation_proof= response.data;
                                            break;
                                        default:
                                    this.form_data.html_qna[index].value = response.data;
                                            break;
                                }

                            let scroll=null;

                                    if (type === 'passport-front' || type === 'passport-back') {
                                        const isFront = type === 'passport-front';
                                        const isBack = type === 'passport-back';

                                this.form_data.html_qna[this.passIndex].value.status=false;

                                        if (isFront) {
                                            this.passportUploadedFiles.image_first = true;
                                        } else if (isBack) {
                                            this.passportUploadedFiles.image_last = true;
                            }

                                if(this.passportUploadedFiles.image_first && this.passportUploadedFiles.image_last){
                                    scroll='passport_validate';
                                }
                                    } else if (type === 'passport-merged') {
                                this.form_data.html_qna[this.passIndex].value.status=false;
                                this.passportUploadedFiles.pdf=true;
                                if(this.passportUploadedFiles.pdf){
                                    scroll='passport_validate';
                                }
                                    } else if (type === 'photo_id') {
                                this.form_data.html_qna[this.photoIdindex].value.status=false;
                                scroll='id_validate';


                            }

                                    if (scroll && (this.form_filler === 'trav' || this.form_filler === 'handler_fill')) {
                                        this.$swal
                                            .fire({
                                    type: 'success',
                                    icon: 'success',
                                    title: 'We are in the process of reading your document. Please give us a moment.....',
                                    showCloseButton:true,
                                    showConfirmButton: false,
                                                timer: 3500,
                                            })
                                            .then(() => {
                                                if (scroll === 'passport_validate') {
                                        this.validatepass();
                                                } else if (scroll === 'id_validate') {
                                        this.validatePhotoId();
                                    }
                                            });
                            }

                                    this.showLoader(false);
                                });
                        }
                        else{


                            this.$swal.fire({

                                type: 'error',
                                icon: 'error',
                                title: 'Please Upload Correct File Type (PNG,JPG,PDF)',
                                showConfirmButton: true,
                                timer: 3000

                            })



                        }


                    }

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }



                // uploaddocument
            },
            validate_pass(index){
                try{

                    this.$emit('validate_passport',index)
                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            validateBookingdate: function(date){
                this.HubDetailArr =[]

                this.HubDetailArr = _.cloneDeep([{"HubName":this.TravelerHub.Hub,"HubDate":date,"totalPassanger":0}]);
                console.log( this.HubDetailArr);

                                this.form_data.form_step.travel_date.status='inactive';
                                console.log("this.tabsVisibility.passport",this.tabsVisibility.passport);
                                if(this.tabsVisibility.passport==true){
                                    this.form_data.form_step.passport.visibility='show';
                                    this.form_data.form_step.passport.status='active';


                                }
                                else if(this.tabsVisibility.docs || this.tabsVisibility.photoId){
                                    this.form_data.form_step.docs.visibility='show';
                                    this.form_data.form_step.docs.status='active';

                                    console.log("this.tabsVisibility.photoId",this.tabsVisibility.photoId)

                                    if(this.tabsVisibility.photoId==false){
                                        this.form_data.form_step.otherDetails.visibility='show';
                                        this.form_data.form_step.otherDetails.status='inactive';


                                    }

                                }
                                else{
                                    this.form_data.form_step.otherDetails.visibility='show';
                                    this.form_data.form_step.otherDetails.status='active';
                                }

            },
            validatepass: async function(){

               try{
                    if(this.form_data.html_qna[this.passIndex].value.status==false){
                        this.showLoader(true);
                        let doc_type='';
                        if(this.form_data.html_qna[this.passIndex].value.pdf!=''){
                            doc_type='pdf';
                        }
                        if(this.form_data.html_qna[this.passIndex].value.url!='' && this.form_data.html_qna[this.passIndex].value.url2!=''){
                            if(this.form_data.html_qna[this.passIndex].value.url.search('pdf')>=0){
                                doc_type='pdf';
                            }
                            if(this.form_data.html_qna[this.passIndex].value.url.search('img')>=0){
                                doc_type='img';
                            }
                        }

                        if(doc_type!==''){

                            let form_data= new FormData();
                            form_data.set('form_id',this.form_data.id);
                            form_data.set('trav_id',this.form_data.traveller_id);
                            form_data.set('doc_data',JSON.stringify(this.form_data.html_qna[this.passIndex].value));
                            form_data.set('doc_type',doc_type);
                            form_data.set('upload_type','passport');
                            form_data.set('bookid',this.form_data.booking_id);

                            await axios.post('/api/v1/getOcrData', form_data)
                                .then((res)=>{

                                    if(res.data.status){
                                        this.showLoader(false);
                                        let counter=0;
                                        var currentDate = new Date();

                                        var inputDate = res.data.data[0].details.doe.value;


                                        var dateParts = inputDate.split("-");


                                        var convertedDate = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];

                                        var expDate= convertedDate;
                                        var passportExpiryDate = new Date(expDate);

                                        console.log(passportExpiryDate);
                                        console.log(passportExpiryDate.getFullYear());


                                        var monthsDifference = (passportExpiryDate.getFullYear() - currentDate.getFullYear()) * 12;
                                        monthsDifference -= currentDate.getMonth() + 1;
                                        monthsDifference += passportExpiryDate.getMonth();
                                        console.log("monthsDifference",monthsDifference)

                                        if (monthsDifference <= 6 && monthsDifference >=0) {
                                            // Display an alert
                                            this.$swal({
                                                title:'Note :Your passport will expire in less *than* 6 months' ,

                                                type: 'error',
                                                icon: 'error',
                                                showCancelButton: true,
                                                cancelButtonText: "Re-Upload",
                                                cancelButtonColor: 'green',
                                                confirmButtonClass:'f-22',
                                                confirmButtonText:"Continue",

                                                confirmButtonColor: 'blue',
                                                focusCancel: true,

                                                reverseButtons: true,
                                                allowOutsideClick:false,
                                                showCloseButton:false,
                                                closeButtonAriaLabel:'Close',
                                                closeButtonColor: 'blue',
                                            })
                                                .then(result => {
                                                    // console.log(result);
                                                    if (result.value) {
                                                        console.log("Reupload...");
                                        this.form_data.html_qna.forEach((data)=>{

                                            if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Original Passport'){
                                                                console.log(data);
                                                if(res.data.data[0].details.doi.value!=''){
                                                    data.value.issue_date=_.cloneDeep(res.data.data[0].details.doi.value);
                                                                    if(res.data.data[0].details.doi.conf<75){
                                                                    document.getElementById('passport_issue_date').style.border='1px solid red';
                                                                    }
                                                }
                                                if(res.data.data[0].details.doe.value!=''){
                                                    data.value.exp_date=_.cloneDeep(res.data.data[0].details.doe.value);
                                                                    if(res.data.data[0].details.doe.conf<75){
                                                                    document.getElementById('passport_date').style.border='1px solid red';
                                                                    }
                                                }
                                                if(res.data.data[0].details.passport_num.value!=''){
                                                    data.value.passportno=_.cloneDeep(res.data.data[0].details.passport_num.value);
                                                                    if(res.data.data[0].details.passport_num.conf<75){
                                                                    document.getElementById('passport_no').style.border='1px solid red';
                                                                    }
                                                }
                                                if(res.data.data[0].details.place_of_issue.value!=''){
                                                    data.value.issue_place=_.cloneDeep(res.data.data[0].details.place_of_issue.value);
                                                                    if(res.data.data[0].details.place_of_issue.conf<75){
                                                                    document.getElementById('passport_issue_place').style.border='1px solid red';
                                                                    }
                                                }
                                                if(res.data.data[0].details.given_name.value!=''){
                                                    data.value.name_first=_.cloneDeep(res.data.data[0].details.given_name.value);
                                                                    if(res.data.data[0].details.given_name.conf<75){
                                                                    document.getElementById('passport_first_name').style.border='1px solid red';
                                                                    }
                                                }
                                                if(res.data.data[0].details.surname.value!=''){
                                                    data.value.name_last=_.cloneDeep(res.data.data[0].details.surname.value);
                                                                    if(res.data.data[0].details.surname.conf<75){
                                                                    document.getElementById('passport_last_name').style.border='1px solid red';
                                                                    }
                                                }
                                                if(res.data.image_front!=''){
                                                    data.value.url=_.cloneDeep(res.data.image_front);
                                                }
                                                if(res.data.image_back!=''){
                                                    data.value.url2=_.cloneDeep(res.data.image_back);
                                                }
                                                if(res.data.pdf!=''){
                                                    data.value.pdf=_.cloneDeep(res.data.pdf);
                                                }


                                            }
                                            if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Photo ID'){

                                                if(res.data.data[0].details.given_name.value!=''){
                                                    this.trav_name.first=_.cloneDeep(res.data.data[0].details.given_name.value);
                                                    data.value.mem_name=_.cloneDeep(res.data.data[0].details.given_name.value);
                                                    // if(res.data.data[0].details.given_name.conf<75){
                                                        // document.getElementById('photoId_firstName').style.border='1px solid red';
                                                    // }
                                                }
                                                if(res.data.data[0].details.surname.value!=''){
                                                    this.trav_name.last=_.cloneDeep(res.data.data[0].details.surname.value);
                                                    // if(res.data.data[0].details.surname.conf<75){
                                                        // document.getElementById('photoId_lastName').style.border='1px solid red';
                                                    // }

                                                    if(data.value.mem_name!=''){
                                                        data.value.mem_name=data.value.mem_name+' '+res.data.data[0].details.surname.value;
                                                    }
                                                    else{
                                                        data.value.mem_name=_.cloneDeep(res.data.data[0].details.surname.value);
                                                    }
                                                }

                                            }
                                            if(data['type']=='DOB' && data['custom']==0){
                                                if(res.data.data[0].details.dob.value!=''){


                                                    data.value=_.cloneDeep(res.data.data[0].details.dob.value)
                                                    // if(res.data.data[0].details.dob.conf<75){
                                                        // document.getElementById(this.form_data.html_qna[flag].key+[counter]).style.border='1px solid red';
                                                    // }
                                                }
                                            }
                                            if(data['type']=='Gender' && data['custom']==0){
                                                if(res.data.data[0].details.gender.value!=''){
                                                    // if(res.data.data[0].details.gender.conf<75){
                                                        // document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                    // }

                                                    if(res.data.data[0].details.gender.value=='MALE'){
                                                        data.value=_.cloneDeep('Male')
                                                    }
                                                    else{
                                                        data.value=_.cloneDeep('Female')
                                                    }

                                                }

                                            }
                                            if(data['type']=='Address' && data['custom']==0){
                                                if(res.data.data[1].details.address.line1!=''){
                                                    data.value=_.cloneDeep(res.data.data[1].details.address.line1);
                                                }

                                                if(res.data.data[1].details.address.line2!=''){
                                                    data.value=data.value!=''?data.value+', '+res.data.data[1].details.address.line2:res.data.data[1].details.address.line2;

                                                }

                                                // if(res.data.data[1].details.address.conf<75){
                                                //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                // }

                                            }
                                            if(data['type']=='City' && data['custom']==0){
                                                if(res.data.data[1].details.address.city!=''){
                                                    // if(res.data.data[1].details.address.conf<75){
                                                    //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                    // }
                                                    data.value=_.cloneDeep(res.data.data[1].details.address.city);
                                                }




                                            }
                                            if(data['type']=='State' && data['custom']==0){
                                                if(res.data.data[1].details.address.state!=''){
                                                    // if(res.data.data[1].details.address.conf<75){
                                                    //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                    // }
                                                    data.value=_.cloneDeep(res.data.data[1].details.address.state);
                                                }

                                            }
                                            if(data['type']=='Pincode' && data['custom']==0){
                                                if(res.data.data[1].details.address.pin!=''){
                                                    // if(res.data.data[1].details.address.conf<75){
                                                    //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                    // }
                                                    data.value=_.cloneDeep(res.data.data[1].details.address.pin);
                                                }

                                            }

                                            counter++;
                                        })
                                        this.form_data.html_qna[this.passIndex].value.status=true;
                                        this.form_data.form_step.passport.status='inactive';
                                        if(this.tabsVisibility.docs){
                                            this.form_data.form_step.docs.visibility='show';
                                            this.form_data.form_step.docs.status='active';

                                            if(this.tabsVisibility.photoId==false){
                                                this.form_data.form_step.otherDetails.visibility='show';
                                                this.form_data.form_step.otherDetails.status='inactive';
                                                                // if((this.form_data.add_member==true || form_data.add_member=='true') && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                                                                //     this.form_data.form_step.addmembers.visibility='show';
                                                                //     this.form_data.form_step.addmembers.status='inactive';
                                                                // }
                                                                // if(this.form_data.member_data.length > 0){
                                                                //     this.form_data.form_step.addmembers.visibility='show';
                                                                //     this.form_data.form_step.addmembers.status='inactive';
                                                                //
                                                                // }


                                            }

                                        }
                                        else{
                                            this.form_data.form_step.otherDetails.visibility='show';
                                            this.form_data.form_step.otherDetails.status='active';

                                                            // if((this.form_data.add_member==true || form_data.add_member=='true')  && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                                                            //     this.form_data.form_step.addmembers.visibility='show';
                                                            //     this.form_data.form_step.addmembers.status='active';
                                                            // }
                                                            // if(this.form_data.member_data.length > 0){
                                                            //     this.form_data.form_step.addmembers.visibility='show';
                                                            //     this.form_data.form_step.addmembers.status='inactive';
                                                            //
                                                            // }





                                        }


                                                    }
                                                    else{

                                                        this.passportUploadedFiles.image_first=false
                                                        this.passportUploadedFiles.image_last=false;
                                                        this.passportUploadedFiles.pdf=false;

                                                        this.fileInputKey ++;
                                                        this.fileInputKey1 ++;
                                                        this.fileInputKey2 ++;

                                                            this.form_data.html_qna.forEach((data)=>{
                                                                if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Original Passport'){
                                                                    console.log(data);
                                                                    if(res.data.data[0].details.doi.value!=''){
                                                                        data.value.issue_date='';

                                                                    }
                                                                    if(res.data.data[0].details.doe.value!=''){
                                                                        data.value.exp_date='';

                                                                    }
                                                                    if(res.data.data[0].details.passport_num.value!=''){
                                                                        data.value.passportno='';

                                                                    }
                                                                    if(res.data.data[0].details.place_of_issue.value!=''){
                                                                        data.value.issue_place='';

                                                                    }
                                                                    if(res.data.data[0].details.given_name.value!=''){
                                                                        data.value.name_first='';

                                                                    }
                                                                    if(res.data.data[0].details.surname.value!=''){
                                                                        data.value.name_last='';

                                                                    }
                                                                    if(res.data.image_front!=''){
                                                                        data.value.url='';
                                                                    }
                                                                    if(res.data.image_back!=''){
                                                                        data.value.url2='';
                                                                    }
                                                                    if(res.data.pdf!=''){
                                                                        data.value.pdf='';
                                                                    }


                                                                }
                                                        })

                                                    }
                                        })


                                        }
                                        else if(monthsDifference < 0){
                                            this.$swal({
                                                title:'Note :Your Passport is expired ,please upload new passport or contact to your handler' ,

                                                type: 'error',
                                                icon: 'error',
                                                showCancelButton: true,

                                                confirmButtonClass:'f-22',
                                                confirmButtonText:"Ok",

                                                confirmButtonColor: 'blue',
                                                focusCancel: true,
                                                showCancelButton:false,

                                                reverseButtons: true,
                                                allowOutsideClick:false,
                                                showCloseButton:false,

                                            }).then(result =>{

                                                if(result.value){


                                                        console.log("noneeee.....")
                                                         this.passportUploadedFiles.image_first=false
                                                        this.passportUploadedFiles.image_last=false;
                                                        this.passportUploadedFiles.pdf=false;

                                                        this.fileInputKey ++;
                                                        this.fileInputKey1 ++;
                                                        this.fileInputKey2 ++;

                                                        this.form_data.html_qna.forEach((data)=>{
                                                            if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Original Passport'){
                                                                console.log(data);
                                                                if(res.data.data[0].details.doi.value!=''){
                                                                    data.value.issue_date='';

                                                                }
                                                                if(res.data.data[0].details.doe.value!=''){
                                                                    data.value.exp_date='';

                                                                }
                                                                if(res.data.data[0].details.passport_num.value!=''){
                                                                    data.value.passportno='';

                                                                }
                                                                if(res.data.data[0].details.place_of_issue.value!=''){
                                                                    data.value.issue_place='';

                                                                }
                                                                if(res.data.data[0].details.given_name.value!=''){
                                                                    data.value.name_first='';

                                                                }
                                                                if(res.data.data[0].details.surname.value!=''){
                                                                    data.value.name_last='';

                                                                }
                                                                if(res.data.image_front!=''){
                                                                    data.value.url='';
                                                                }
                                                                if(res.data.image_back!=''){
                                                                    data.value.url2='';
                                                                }
                                                                if(res.data.pdf!=''){
                                                                    data.value.pdf='';
                                                                }


                                                            }
                                                        })

                                                    }

                                            })

                                        }
                                    else{
                                            this.form_data.html_qna.forEach((data)=>{
                                                if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Original Passport'){
                                                    console.log(data);
                                                    if(res.data.data[0].details.doi.value!=''){
                                                        data.value.issue_date=_.cloneDeep(res.data.data[0].details.doi.value);
                                                        // if(res.data.data[0].details.doi.conf<75){
                                                        // document.getElementById('passport_issue_date').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.data[0].details.doe.value!=''){
                                                        data.value.exp_date=_.cloneDeep(res.data.data[0].details.doe.value);
                                                        // if(res.data.data[0].details.doe.conf<75){
                                                        // document.getElementById('passport_date').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.data[0].details.passport_num.value!=''){
                                                        data.value.passportno=_.cloneDeep(res.data.data[0].details.passport_num.value);
                                                        // if(res.data.data[0].details.passport_num.conf<75){
                                                        // document.getElementById('passport_no').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.data[0].details.place_of_issue.value!=''){
                                                        data.value.issue_place=_.cloneDeep(res.data.data[0].details.place_of_issue.value);
                                                        // if(res.data.data[0].details.place_of_issue.conf<75){
                                                        // document.getElementById('passport_issue_place').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.data[0].details.given_name.value!=''){
                                                        data.value.name_first=_.cloneDeep(res.data.data[0].details.given_name.value);
                                                        // if(res.data.data[0].details.given_name.conf<75){
                                                        // document.getElementById('passport_first_name').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.data[0].details.surname.value!=''){
                                                        data.value.name_last=_.cloneDeep(res.data.data[0].details.surname.value);
                                                        // if(res.data.data[0].details.surname.conf<75){
                                                        // document.getElementById('passport_last_name').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.image_front!=''){
                                                        data.value.url=_.cloneDeep(res.data.image_front);
                                                    }
                                                    if(res.data.image_back!=''){
                                                        data.value.url2=_.cloneDeep(res.data.image_back);
                                                    }
                                                    if(res.data.pdf!=''){
                                                        data.value.pdf=_.cloneDeep(res.data.pdf);
                                                    }


                                                }
                                                if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Photo ID'){

                                                    if(res.data.data[0].details.given_name.value!=''){
                                                        this.trav_name.first=_.cloneDeep(res.data.data[0].details.given_name.value);
                                                        data.value.mem_name=_.cloneDeep(res.data.data[0].details.given_name.value);
                                                        // if(res.data.data[0].details.given_name.conf<75){
                                                        // document.getElementById('photoId_firstName').style.border='1px solid red';
                                                        // }
                                                    }
                                                    if(res.data.data[0].details.surname.value!=''){
                                                        this.trav_name.last=_.cloneDeep(res.data.data[0].details.surname.value);
                                                        // if(res.data.data[0].details.surname.conf<75){
                                                        // document.getElementById('photoId_lastName').style.border='1px solid red';
                                                        // }

                                                        if(data.value.mem_name!=''){
                                                            data.value.mem_name=data.value.mem_name+' '+res.data.data[0].details.surname.value;
                                                        }
                                                        else{
                                                            data.value.mem_name=_.cloneDeep(res.data.data[0].details.surname.value);
                                                        }
                                                    }

                                                }
                                                if(data['type']=='DOB' && data['custom']==0){
                                                    if(res.data.data[0].details.dob.value!=''){


                                                        data.value=_.cloneDeep(res.data.data[0].details.dob.value)
                                                        // if(res.data.data[0].details.dob.conf<75){
                                                        // document.getElementById(this.form_data.html_qna[flag].key+[counter]).style.border='1px solid red';
                                                        // }
                                                    }
                                                }
                                                if(data['type']=='Gender' && data['custom']==0){
                                                    if(res.data.data[0].details.gender.value!=''){
                                                        // if(res.data.data[0].details.gender.conf<75){
                                                        // document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                        // }

                                                        if(res.data.data[0].details.gender.value=='MALE'){
                                                            data.value=_.cloneDeep('Male')
                                                        }
                                                        else{
                                                            data.value=_.cloneDeep('Female')
                                                        }

                                                    }

                                                }
                                                if(data['type']=='Address' && data['custom']==0){
                                                    if(res.data.data[1].details.address.line1!=''){
                                                        data.value=_.cloneDeep(res.data.data[1].details.address.line1);
                                                    }

                                                    if(res.data.data[1].details.address.line2!=''){
                                                        data.value=data.value!=''?data.value+', '+res.data.data[1].details.address.line2:res.data.data[1].details.address.line2;

                                                    }

                                                    // if(res.data.data[1].details.address.conf<75){
                                                    //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                    // }

                                                }
                                                if(data['type']=='City' && data['custom']==0){
                                                    if(res.data.data[1].details.address.city!=''){
                                                        // if(res.data.data[1].details.address.conf<75){
                                                        //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                        // }
                                                        data.value=_.cloneDeep(res.data.data[1].details.address.city);
                                                    }




                                                }
                                                if(data['type']=='State' && data['custom']==0){
                                                    if(res.data.data[1].details.address.state!=''){
                                                        // if(res.data.data[1].details.address.conf<75){
                                                        //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                        // }
                                                        data.value=_.cloneDeep(res.data.data[1].details.address.state);
                                                    }

                                                }
                                                if(data['type']=='Pincode' && data['custom']==0){
                                                    if(res.data.data[1].details.address.pin!=''){
                                                        // if(res.data.data[1].details.address.conf<75){
                                                        //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                        // }
                                                        data.value=_.cloneDeep(res.data.data[1].details.address.pin);
                                                    }

                                                }
                                                counter++;


                                            })
                                        this.form_data.html_qna[this.passIndex].value.status=true;
                                        this.form_data.form_step.passport.status='inactive';
                                        if(this.tabsVisibility.docs){
                                            this.form_data.form_step.docs.visibility='show';
                                            this.form_data.form_step.docs.status='active';

                                            if(this.tabsVisibility.photoId==false){
                                                this.form_data.form_step.otherDetails.visibility='show';
                                                this.form_data.form_step.otherDetails.status='inactive';




                                            }

                                        }
                                        else{
                                            this.form_data.form_step.otherDetails.visibility='show';
                                            this.form_data.form_step.otherDetails.status='active';
                                                console.log(this.form_data.add_member,this.form_data.status!=4,this.form_data.long_id.search('FAM')==-1)

                                            // if((this.form_data.add_member==true || this.form_data.add_member=='true') && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                                            //         this.form_data.form_step.addmembers.visibility='show';
                                            //         this.form_data.form_step.addmembers.status='active';
                                            //         console.log(this.form_data.form_step);
                                            //     }
                                            //     if(this.form_data.member_data.length > 0){
                                            //         this.form_data.form_step.addmembers.visibility='show';
                                            //         this.form_data.form_step.addmembers.status='inactive';
                                            //
                                            //     }




                                            // form_data.status!=4
                                        }
                                        }




                                    }
                                    else if(!res.data.status && res.data.code==2){






                                        if(res.data.image_front!=''){
                                            this.form_data.html_qna[this.passIndex].value.url=_.cloneDeep(res.data.image_front);
                                        }
                                        if(res.data.image_back!=''){
                                            this.form_data.html_qna[this.passIndex].value.url2=_.cloneDeep(res.data.image_back);
                                        }
                                        if(res.data.pdf!=''){
                                            this.form_data.html_qna[this.passIndex].value.pdf=_.cloneDeep(res.data.pdf);
                                        }

                                        this.showLoader(false);
                                        this.$swal({
                                            title: res.data.msg,
                                            text: 'Note : Please upload a different image.',
                                            type: 'error',
                                            icon: 'error',
                                            showCancelButton: true,
                                            cancelButtonText: "Fill Manually",
                                            cancelButtonColor: 'green',
                                            confirmButtonClass:'f-22',
                                            confirmButtonText:"Re-Upload Passport",
                                            confirmButtonColor: 'blue',
                                            focusCancel: true,

                                            reverseButtons: true,
                                            allowOutsideClick:false,
                                            showCloseButton:false,
                                            closeButtonAriaLabel:'Close',
                                            closeButtonColor: 'blue',
                                        })
                                            .then(result => {
                                                // console.log(result);
                                                if (result.value) {
                                                    this.form_data.html_qna[this.passIndex].value.status=true;


                                                    console.log("noneeee.....")
                                                    this.passportUploadedFiles.image_first=false
                                                    this.passportUploadedFiles.image_last=false;
                                                    this.passportUploadedFiles.pdf=false;

                                                    this.fileInputKey ++;
                                                    this.fileInputKey1 ++;
                                                    this.fileInputKey2 ++;

                                                    this.form_data.html_qna.forEach((data)=>{
                                                        if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Original Passport') {
                                                            console.log(data.value);

                                                            data.value.issue_date = '';


                                                            data.value.exp_date = '';


                                                            data.value.passportno = '';


                                                            data.value.issue_place = '';

                                                            data.value.name_first = '';


                                                            data.value.name_last = '';


                                                            data.value.url = '';

                                                            data.value.url2 = '';

                                                            data.value.pdf = '';


                                                        }
                                                    })


                                                }
                                                else if(result.dismiss=='cancel'){
                                                    this.form_data.html_qna[this.passIndex].value.status=true;
                                                    this.form_data.form_step.passport.status='inactive';
                                                    if(this.tabsVisibility.docs && this.tabsVisibility.PhotoID){
                                                        this.form_data.form_step.docs.visibility='show';
                                                        this.form_data.form_step.docs.status='active';
                                                        if(res.data.image_front!=''){
                                                            this.form_data.html_qna[this.passIndex].value.url=_.cloneDeep(res.data.image_front);
                                                        }
                                                        if(res.data.image_back!=''){
                                                            this.form_data.html_qna[this.passIndex].value.value.url2=_.cloneDeep(res.data.image_back);
                                                        }
                                                        if(res.data.pdf!=''){
                                                            this.form_data.html_qna[this.passIndex].value.value.pdf=_.cloneDeep(res.data.pdf);
                                                        }

                                                        
                                                    }
                                                    else{
                                                        if(this.tabsVisibility.docs){
                                                            this.form_data.form_step.docs.visibility='show';
                                                            this.form_data.form_step.docs.status='active';

                                                        this.form_data.form_step.otherDetails.visibility='show';
                                                            this.form_data.form_step.otherDetails.status='inactive';


                                                        }
                                                        else{
                                                        this.form_data.form_step.otherDetails.visibility='show';
                                                        this.form_data.form_step.otherDetails.status='active';



                                                        }




                                                        // form_data.status!=4
                                                    }

                                                }
                                            })

                                    }
                                    else{
                                        this.showLoader(false);
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: res.data.msg,
                                            showConfirmButton: true,
                                            timer: 3000
                                        })

                                    }

                                })
                                .catch((error)=>{
                                    this.showLoader(false);
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Some Error Occured, Please Contact Your Handler!',
                                        showConfirmButton: true,
                                        timer: 3000
                                    })
                                })
                        }
                        else{
                            this.showLoader(false);
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Passport Not Uploaded Yet!',
                                showConfirmButton: true,
                                timer: 3000

                            })

                        }
                    }
                    else{

                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Passport Not Uploaded Yet!',
                            showConfirmButton: true,
                            timer: 3000

                        })

                    }



               }
               catch(error){
                   this.$swal.fire({
                       type: 'error',
                       icon: 'error',
                       title: 'Some Error Occured. Please Try Again Later !',
                       showCloseButton:true,
                       showConfirmButton: true,
                       timer: 3500
                   })
               }

            },
            validatePhotoId: async function(){
                try{
                    if(this.form_data.html_qna[this.photoIdindex].value.status==false){

                        this.showLoader(true);
                        let doc_type='image';
                        if(this.form_data.html_qna[this.photoIdindex].value.url.search('pdf')>=0){
                            doc_type='pdf';
                        }

                        if(doc_type!==''){
                            let form_data= new FormData();
                            form_data.set('form_id',this.form_data.id);
                            form_data.set('trav_id',this.form_data.traveller_id);
                            form_data.set('doc_data',JSON.stringify(this.form_data.html_qna[this.photoIdindex].value));
                            form_data.set('doc_type',doc_type);
                            form_data.set('upload_type','photo_id');
                            form_data.set('bookid',this.form_data.booking_id);
                            await axios.post('/api/v1/getOcrData', form_data)
                                .then((res)=>{

                                    if(res.data.status){

                                        let status='inactive';
                                        if(this.form_data.html_qna.length > 0){
                                            let counter=0;
                                            // console.log("1");
                                            this.form_data.html_qna.forEach((data)=>{
                                                // console.log("------1");
                                                // console.log(data);
                                                if(data['type']=='File Upload' && data['custom']==1 && data['ques']=='Photo ID'){

                                                    if(res.data.data.name!=''){

                                                            if(res.data.data.name.value!=''){
                                                                data.value.mem_name=_.cloneDeep(res.data.data.name.value);
                                                                this.trav_name.first=_.cloneDeep(data.value.mem_name.split(' ').slice(0, -1).join(' '));
                                                                this.trav_name.last=_.cloneDeep(data.value.mem_name.split(' ').slice(-1).join(' '));

                                                            }
                                                            // if(res.data.data.name.conf<75){
                                                                // document.getElementById('photoId_firstName').style.border='1px solid red';
                                                                // document.getElementById('photoId_lastName').style.border='1px solid red';
                                                            // }


                                                    }
                                                    if(res.data.data.num!=''){
                                                        if(res.data.data.num.value!=''){
                                                            data.value.id_num=_.cloneDeep(res.data.data.num.value);
                                                            // if(res.data.data.num.conf<75){
                                                                // document.getElementById('photoId_num').style.border='1px solid red';
                                                            // }
                                                        }
                                                        else{
                                                            data.value.id_num=_.cloneDeep('');
                                                        }
                                                    }
                                                    else{
                                                        data.value.id_num=_.cloneDeep('');
                                                    }

                                                }
                                                if(this.form_data.html_qna[this.photoIdindex].value.id_name.label=='Pan Card'){

                                                    if(res.data.data.num!=''){
                                                        if(res.data.data.num.value!=''){
                                                            if(data['type']=='Pan Card Number' && data['custom']==0 && data['value']==""){
                                                                data.value=_.cloneDeep(res.data.data.num.value);
                                                            }
                                                        }
                                                        // if(res.data.data.num.conf<75){
                                                            // document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                        // }
                                                    }

                                                }
                                                if(this.passIndex==null){

                                                    if(data['type']=='DOB' && data['custom']==0){
                                                        if(res.data.data.dob!=""){
                                                            if(res.data.data.dob.value!=''){
                                                                data.value=_.cloneDeep(res.data.data.dob.value)
                                                            }
                                                            // if(res.data.data.dob.conf<75){
                                                                // document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                            // }

                                                        }

                                                    }

                                                }
                                                if(res.data.data.address!=""){
                                                    if(data['type']=='Address' && data['custom']==0 && data['value']==""){
                                                        let address='';
                                                        if(res.data.data.address.line1){

                                                            if(res.data.data.address.line1!=""){

                                                                address+=res.data.data.address.line1;
                                                                // if(res.data.data.address.conf<75){
                                                                //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                                // }

                                                            }

                                                        }
                                                        if(res.data.data.address.line2){

                                                            if(res.data.data.address.line2!=""){

                                                                address+=res.data.data.address.line2;
                                                                // if(res.data.data.address.conf<75){
                                                                //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                                // }
                                                            }

                                                        }
                                                        if(address!=''){
                                                            data['value']=_.cloneDeep(address)


                                                        }
                                                    }
                                                    if(data['type']=='City' && data['custom']==0 && data['value']==""){

                                                        if(this.form_data.html_qna[this.photoIdindex].value.id_name.label!='Driving Licence'?res.data.data.address.district:res.data.data.address.city){

                                                            if(this.form_data.html_qna[this.photoIdindex].value.id_name.label!='Driving Licence'?res.data.data.address.district:res.data.data.address.city){

                                                                data['value']=_.cloneDeep(this.form_data.html_qna[this.photoIdindex].value.id_name.label!='Driving Licence'?res.data.data.address.district:res.data.data.address.city)
                                                                // if(res.data.data.address.conf<75){
                                                                //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                                // }


                                                            }

                                                        }



                                                    }
                                                    if(data['type']=='State' && data['custom']==0 && data['value']==""){

                                                        if(res.data.data.address.state){

                                                            if(res.data.data.address.state!=""){

                                                                data['value']=_.cloneDeep(res.data.data.address.state)

                                                                // if(res.data.data.address.conf<75){
                                                                //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                                // }

                                                            }


                                                        }

                                                    }
                                                    if(data['type']=='Pincode' && data['custom']==0 && data['value']==""){

                                                        if(res.data.data.address.pin){

                                                            if(res.data.data.address.pin!=""){

                                                                data['value']=_.cloneDeep(res.data.data.address.pin)

                                                                // if(res.data.data.address.conf<75){
                                                                //     document.getElementById(this.form_data.html_qna[counter].key+[counter]).style.border='1px solid red';
                                                                // }

                                                            }

                                                        }

                                                    }

                                                }
                                                if(data['type']=='File Upload' && data['custom']==1 && data['ques']!='Photo ID' && data['ques']!='Original Passport'){
                                                    if(data['url']==''){
                                                        status='active';
                                                    }
                                                }


                                                counter++;
                                                // console.log(data);
                                            })
                                            this.form_data.html_qna[this.photoIdindex].value.status=true;
                                            this.form_data.form_step.docs.status=status;

                                            this.form_data.form_step.otherDetails.visibility='show';
                                            this.form_data.form_step.otherDetails.status='active';
                                            console.log(this.form_data.add_member,this.form_data.status,this.form_data.long_id.search('FAM'))

                                            // if((this.form_data.add_member==true || this.form_data.add_member=='true')
                                            //  && this.form_data.status!=4 && this.form_data.long_id.search('FAM')==-1){
                                            //     this.form_data.form_step.addmembers.visibility='show';
                                            //     this.form_data.form_step.addmembers.status='inactive';
                                            //
                                            //     console.log("formstep",   this.form_data.form_step)
                                            // }
                                            // if(this.form_data.member_data.length > 0){
                                            //     this.form_data.form_step.addmembers.visibility='show';
                                            //     this.form_data.form_step.addmembers.status='inactive';
                                            //
                                            // }


                                        }

                                    }
                                    else{
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: res.data.msg,
                                            showConfirmButton: true,
                                            timer: 3000
                                        })
                                    }

                                    this.showLoader(false);
                                })
                                .catch((error)=>{
                                    this.showLoader(false);
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'Some Error Occured, Please Contact Your Handler!',
                                        showConfirmButton: true,
                                        timer: 3000
                                    })
                                })

                        }
                        else{
                            this.showLoader(false);
                            this.$swal.fire({
                                type: 'error',
                                icon: 'error',
                                title: 'Photo ID Not Uploaded Yet!',
                                showConfirmButton: true,
                                timer: 3000

                            })

                        }


                    }
                    else{

                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Photo ID Not Uploaded Yet!',
                            showConfirmButton: true,
                            timer: 3000

                        })

                    }
                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },
            submitForm(status){
                try{

                 this.$emit('submit_form_partial',status)

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            },

            updateStep(step){
                try{

                    // this.form_data.form_step['passport'].status='inactive';
                    // this.form_data.form_step['docs'].status='inactive';
                    // this.form_data.form_step['otherDetails'].status='inactive';
                    // this.form_data.form_step['addmembers'].status='inactive';
                    //
                    //
                    // this.form_data.form_step[step].status='active';

                }
                catch(error){
                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured. Please Try Again Later !',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    })
                }

            },

            async submit_form(method){
                try{

                    for (var i = 0; i < this.form_data.member_data.length; i++) {
                        if (this.form_data.member_data[i].relation1 && this.form_data.member_data[i].relation1.relation !='') {
                            this.form_data.member_data[i].relation = this.form_data.member_data[i].relation1.relation;
                        }
                    }
                    for (var i = 0; i < this.form_data.member_name.length; i++) {
                        if (this.form_data.member_name[i].relation1 && this.form_data.member_name[i].relation1.relation !='') {
                            this.form_data.member_name[i].relation = this.form_data.member_name[i].relation1.relation;
                        }
                    }

                    if(this.CheckFiest ==true){

                        if(
                            this.hub_data_list.length!=0 &&
                            (JSON.parse(this.traveler_hubsDate[0].meta_value).length > 0) &&
                            (this.hub_data_list.travel_date =='' ||   this.hub_data_list.travel_date == null)){


                            var memArr = _.cloneDeep(this.form_data.member_data);



                            var filteredMemArr = memArr.filter(item => item.name.trim() !== '');



                            var memCount = filteredMemArr.length;
                            var selfmemCount = this.form_data.member_name.length;

                            console.log(memCount,selfmemCount);


                            this.HubDetailArr[0].totalPassanger = 1 + (memCount + selfmemCount);


                            let form_data= new FormData();

                            form_data.set('bookId',this.form_data.booking_id);
                            form_data.set('groupId',this.form_data.group_id);
                            form_data.set('hub',JSON.stringify(this.HubDetailArr));

                            await axios.post('/api/v1/SaveTravelDate', form_data)

                                .then((res)=>{
                                    if(res.data.status){
                                        document.getElementById('tour_date').style.border='none';
                                        document.getElementById('tour_date').style.background='none';


                                        this.hub_data_list.travel_date=this.HubDetailArr[0].HubDate;
                    this.$emit(method);



                                    }
                                    else{
                                        this.showLoader(false);
                                        this.$swal.fire({
                                            type: 'error',
                                            icon: 'error',
                                            title: res.data.error,
                                            showConfirmButton: true
                                        }).then((result)=>{
                                            if(result.value){
                                                document.getElementById('faq5').classList.add('show');
                                                document.getElementById('tour_date').style.border='2px solid red';
                                                document.getElementById('tour_date').style.background='#ffdfdf';

                                                document.getElementById('tour_date').scrollIntoView();


                                            }})

                                    }
                                    console.log("formStep",this.form_data.form_step);

                                })
                                .catch((error)=>{
                                    this.showLoader(false);
                                    this.$swal.fire({
                                        type: 'error',
                                        icon: 'error',
                                        title: 'please Select travel date',
                                        showConfirmButton: true,
                                        timer: 3000
                                    }).then((result)=> {
                                        if (result.value) {
                                            document.getElementById('faq5').classList.add('show');
                                            document.getElementById('tour_date').style.border = '2px solid red';
                                            document.getElementById('tour_date').style.background = '#ffdfdf';

                                            document.getElementById('tour_date').scrollIntoView();


                                        }
                                    })
                                })

                        }
                        else{

                    this.$emit(method);

                        }

                    }
                    else{
                        this.$swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Please click checkbox first to submit and share  the form !',
                            showCloseButton:true,
                            showConfirmButton: true,
                            timer: 3500
                        })}



                }
                catch(error){

                    this.$swal.fire({
                        type: 'error',
                        icon: 'error',
                        title: 'Some Error Occured.please check all fields!',
                        showCloseButton:true,
                        showConfirmButton: true,
                        timer: 3500
                    }).then((result)=> {
                        if (result.value) {
                            document.getElementById('faq5').classList.add('show');
                            document.getElementById('tour_date').scrollIntoView();


                        }
                    })
                }

            },
        },
    }
</script>

<style scoped>

    /*just bg and body style*/
    i{
        font-size: 18px;
    }

    [type="checkbox"], [type="radio"] {
        height: 14px;
        width: 15px;
    }
    .label-heading{
        font-size: 21px;
        font-weight: 600;

    }
    label{
        font-size: 18px;
        font-weight: 400;
    }
    .cart{
        background-color: rgba(250, 250, 250, 0.9);
    }
    .center{
        text-align:center;
    }
    #top{
        margin-top:20px;
    }
    .btn-container{
        background:#fff;
        border-radius:5px;
        padding-bottom:20px;
        margin-bottom:20px;
    }
    .white{
        color:white;
    }
    .imgupload{
        color:#ebeced;
        padding-top:40px;
        font-size:7em;
    }
    #namefile{
        color:black;
    }
    h4>strong{
        color:#ff3f3f;
    }
    .btn-primary{
        border-color: #ff3f3f !important;
        color: #ffffff;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        background-color: #ff3f3f !important;
        border-color: #ff3f3f !important;
    }

    /*these two are set to not display at start*/
    .imgupload.ok{
        display:none;
        color:green;
    }
    .imgupload.stop{
        display:none;
        color:red;
    }


    /*this sets the actual file input to overlay our button*/
    #fileup{
        opacity: 0;
        -moz-opacity: 0;
        filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
        width:200px;
        cursor: pointer;
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        height: 50px;
    }

    /*switch between input and not active input*/
    #submitbtn{
        padding:5px 50px;
        display:none;
    }
    #fakebtn{
        padding:5px 40px;
    }


    /*www.emilianocostanzo.com*/
    #sign{
        color:#1E2832;
        position:fixed;
        right:10px;
        bottom:10px;
        text-shadow:0px 0px 0px #1E2832;
        transition:all.3s;
    }
    #sign:hover{
        color:#1E2832;
        text-shadow:0px 0px 5px #1E2832;
    }

    .colBox{
        /*background-color: rgba(56, 83, 240, 0.911);*/
        background-repeat: no-repeat;
        background-size: 100% 180px;

        padding:1.5rem;

        height:180px;
        margin-bottom: 2rem;

    }
    #main {
        margin-top:50px ;
    }

    #main #faq .card {
        margin-bottom: 30px;
        border: 0;
    }

    #main #faq .card .card-header {
        border: 0;
        -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
        box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
        border-radius: 2px;
        padding: 0;
    }

    #main #faq .card .card-header .btn-header-link {
        color: #222;
        display: block;
        text-align: left;
        background: #fff;
        color: #222;
        padding: 20px;
    }

    #main #faq .card .card-header .btn-header-link:after {
        content: "\f107";
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        float: right;
    }

    #main #faq .card .card-header .btn-header-link.collapsed {
        background: #fff;
        color: #222;
    }

    #main #faq .card .card-header .btn-header-link.collapsed:after {
        content: "\f106";
    }

    #main #faq .card .collapsing {
        background:#fff;
        line-height: 30px;
    }

    #main #faq .card .collapse {
        border: 0;
    }

    #main #faq .card .collapse.show {
        background: #fff;
        line-height: 30px;
        color: #222;
    }

    input[type="file"] {
        display: block !important;

    }
    .fileUpl input {
        margin-top: 1rem;
        background: rgb(243 244 245);
        width:100%;
        margin-bottom: 1.5rem;
        height: 37px !important;
        text-align: left !important;

        padding-left: 1rem;

    }


    input[type='file']::file-selector-button{
        font-weight: bold;
        color:#fff;
        padding: 0.5em;
        border: none;
        border-radius: 3px;
        background:black;
        visibility: hidden;
    }
    .SubBtn{
        color:#fff;
        background:#00CC99;
        border:none;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        width:70px;

    }
    .check1{
        height:15px;
    }
    .checkTest{
        font-weight:500;font-size: 14px;padding-left:1rem;
    }
    @media(min-width:990px){
        .btnn2{
            display:none;
        }

    }
    @media(max-width:991px) {
        .btnn1 {
            display: none;
        }
    }
    @media(max-width:560px) {
        .btn-header-link {
           font-size:14px !important;
        }
        label{
            font-size:14px !important;
        }
        .text_size_change{
            font-size:14px !important;
        }
        .check1{
            height:13px;
        }
        .checkTest{
            font-size: 12px;
            padding-left:0rem !important;
        }
    }

    .d-print-inline{
        display: inline-block !important;
    }

    img{
        width: 100%;
        height: 120px;
        background: #B5CCEC;
        border-radius: 3px;

    }
    .Paragrapg{
        padding:1rem; background-color: #fff;margin-top:2rem; border:1px solid rgb(220, 220, 220);
    }
    .form-group{
        background: #fff;padding:2rem;border:1px solid rgb(220, 220, 220);

    }
    .Delete-icon{

        padding: 0px 8px;

        border-radius: 50%;
        position: absolute;

        background: #fff;
        right: 14px;
        top: 90px;
        opacity: 0.9;


    }
    .select-Style{
        border-radius: 1rem;
        border: 2px solid rgb(255, 255, 255);

        background: rgb(230, 238, 241);
        border: none;
    }
    .v-select.searchable{
        border:none !important;

    }
    textarea{
        padding: 10px !important;
    }
    .Title div p{
        font-size: 20px !important;
        background: #c0ddf6;

    }
    .swal2-popup .swal2-title{
        font-size: 16px !important;
        text-align: left !important;
    }
    .swal2-popup .swal2-content{
        font-weight: bold !important;
    }
  #tour_date{
      overflow: visible;
  }

</style>
