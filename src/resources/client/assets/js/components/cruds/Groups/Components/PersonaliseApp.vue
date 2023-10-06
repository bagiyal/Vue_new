<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <label style="font-size: large">Upload Background Image</label>
                <div  class="container-fluid">
                    <div class="col-6 text-center f-1-2" style="display: block ruby; margin:3%;" >


                        <label class="file_hidden mt-n2" style="font-size: small">
                            Choose File
                            <input type="file" id="bg_image_crt" size="20"  @change="uploadbg($event,'bg_image_crt')">
                        </label>
<!--                        <p style="font-size: small">No file Choosen</p>-->
                    </div>
                    <div class="col-6 text-center f-1-2" ></div>
                </div>
                <div class="black-line"></div>
                <label style="font-size: medium; text-align: center; margin: 2rem;">Pick Footer Color</label>
                <color-picker v-model="colorForParent"></color-picker>
                Color Code:<input type="text"  v-model="colorForParent" class="form-control " style="width: 20%;">
            </div>

            <div class="col-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                    <ol class="carousel-indicators" style="padding-left: 60px;">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style="background-color: #000;width: 50px;height:4px"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" style="background-color: #000;width: 50px;height:4px"></li>

                    </ol>
                    <div class="carousel-inner" style="height: 683px;">
                        <div class="carousel-item active">
                            <div class="outside">
                                <div class="col-xl-12">
                                    <div class="logo">
                                        <img
                                            :src="logo"
                                            class="logo_img"
                                            style="position: absolute;top: 55px; opacity: 0.7;"
                                        >
                                    </div>
                                    <div class="background_image">
                                        <img src="../resources/frame.png" style="position: absolute;height: 119%;width: 100%" />
                                        <img :src="bgimage" class="img" />
<!--                                        <img src="../resources/staticHome.png" class="img">-->
                                        <div class="footer" :style="{background:dynamicColor}">
                                            <div class="cancel" :style="{background: dynamicColor}">
                                                <i aria-hidden="true" class="fa fa-times text-white" style="font-size: 34px; margin-top: 11%; background-color: transparent"></i>
                                            </div>
                                            <div class="row" style="border-radius: 8px; opacity: 0.8; background-color: transparent; position: absolute; width: 90%; margin-top: 9%; border: 0.5px solid white; margin-left: 5%;  ">
                                                <div class="col-sm-4" style="text-align: center;margin-left: -1rem">
                                                    <i class="fa fa-map-marker text-white mt-3" aria-hidden="true"></i>
                                                    <p style="color: white;font-size: 12px;">Location </p>
                                                    <p style="color: white; font-size: 15px">Thailand</p>
                                                </div>
                                                <div class="col-sm-4" style="margin-left: 2rem; text-align: center">
                                                    <i class="fa fa-sun-o text-white mt-3" aria-hidden="true"></i>
                                                    <p style="color: white;font-size: 12px;">Weather</p>
                                                    <p style="color: white; font-size: 15px">30°C</p>
                                                </div>
                                                <div class="col-sm-4" style="text-align: center; margin-left: -1rem">
                                                    <i class="fa fa-clock-o text-white mt-3" aria-hidden="true"></i>
                                                    <p style="color: white;font-size: 12px;">Time</p>
                                                    <p style="color: white; font-size: 15px">11:10</p>
                                                </div>
                                            </div>
                                            <div class="all_card" style="width:100%;height:70%;margin-top:9.5rem;">
                                                <div class="upper_section">
                                                    <div class="card">
                                                        <i class="fa fa-plane" aria-hidden="true" style="font-size: 26px;"></i>
                                                        <span style="margin: 5px;">My Plan</span>
                                                    </div>
                                                    <div class="card">
                                                        <i class="fa fa-file-text" aria-hidden="true" style="font-size: 26px;"></i>
                                                        <span style="margin: 5px;">Travel Docs</span>
                                                    </div>
                                                </div>
                                                <div class="bottom_section">
                                                    <div class="card">
                                                        <i class="fa fa-users" aria-hidden="true" style="font-size: 26px;"></i>
                                                        <span style="margin: 5px;text-align: center">Important Contacts</span>
                                                    </div>
                                                    <div class="card">
                                                        <i class="fa fa-bed" aria-hidden="true" style="font-size: 26px;"></i>
                                                        <span style="margin: 5px;">Hotels</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  class="footer_icons" style="position: absolute;bottom: 0px; top: 77px; width: 100%; height: 68px;" :style="dynamicColor">
                                                <div  class="image_text"><i aria-hidden="true" class="fa fa-home f-2 mt-2 text-white"></i> <br >
                                                    <p  style="display: inline-block; color: white;">Home</p></div>
                                                <div  class="image_text"><i  aria-hidden="true" class="fa fa-comment f-2 mt-2 text-white"></i>
                                                    <br > <p  style="display: inline-block; color: white;">chat</p></div>
                                                <div class="image_text"><i aria-hidden="true" class="fa fa-bell f-2 mt-2 text-white ml-4"></i>
                                                    <br > <p style="display: inline-block; color: white; margin-left: 10%;">Notification</p></div>
                                                <div  class="image_text"><i aria-hidden="true" class="fa fa-bars f-2 mt-2 text-white"></i>
                                                    <br > <p style="display: inline-block; color: white;">Menu</p></div></div>


                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="carousel-item">
                            <div class="outside">
                                <div class="col-xl-12">
                                    <div class="logo">
                                        <img
                                            :src="logo"
                                            class="logo_img"
                                            style="position: absolute;top: 55px; opacity: 0.7;"
                                        >
                                    </div>
                                    <div class="background_image">
                                        <img src="../resources/frame.png" style="position: absolute;height: 119%;width: 100%; border-radius: 9px; " />
                                        <img :src="bgimage" style="width: 100%; height: 117%; border-radius: 40px 40px "/>

                                        <div class="footer_icons" style="position: absolute; margin-bottom: 5px; top: 247px; width: 88%; height: 68px;left: 6%;" :style="{background: dynamicColor}">
                                            <div style="position: absolute; top: -28px; width: 28%; text-align: center; border-radius: 40px 40px 10px 10px; left: 36%" :style="{background: dynamicColor}">
                                                <i aria-hidden="true" class="fa fa-times text-white" style="font-size: 34px; margin-top: 11%;"></i>
                                            </div>
                                            <div  class="image_text"><i aria-hidden="true" class="fa fa-home f-2 mt-2 text-white"></i> <br >
                                                <p  style="display: inline-block; color: white;">Home</p></div>
                                            <div  class="image_text"><i  aria-hidden="true" class="fa fa-comment f-2 mt-2 text-white"></i>
                                                <br > <p  style="display: inline-block; color: white;">chat</p></div>
                                            <div class="image_text"><i aria-hidden="true" class="fa fa-bell f-2 mt-2 text-white ml-4"></i>
                                                <br > <p style="display: inline-block; color: white; margin-left: 10%;">Notification</p></div>
                                            <div  class="image_text"><i aria-hidden="true" class="fa fa-bars f-2 mt-2 text-white"></i>
                                                <br > <p style="display: inline-block; color: white;">Menu</p></div></div>


                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>



            </div>


        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

</template>

<script>
    import ColorPicker from 'vue-color-picker-wheel';
    import uploadfile from "../../../../mixins/uploadfile";


    export default {
        name: "PersonaliseApp",
        props:['logo','bgimage','dynamicColor'],
        components: {ColorPicker},

        data(){
        return{
            colorForParent:'',
            // bgimage:'',
        }
        },
    mounted(){

        this.colorForParent = this.dynamicColor;
        console.log(" check bg image ",this.bgimage);
    },
    watch:{
      "colorForParent": function () {
          this.passDataToParent();
      }
    },
    methods:{
        uploadbg(value, type) {
            this.$emit('dynamicBg',value,type);
        },
      passDataToParent(){
          this.$emit('coloradd',this.colorForParent);
      }
    },
    computed:{
        getImageSource() {
            if (this.bgimage !== '') {
                return '/public/images/staticHome.png';
                // return this.bgimage;
            } else {
                return '/public/images/staticHome.png';
            }
        }
    }

    }


</script>

<style scoped>
    .background_image{
        width: 300px;
        height: 530px;
        position: relative;
        margin: 0 auto;



    }
    .logo{
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .logo_img{
        width: 100px !important;
        height: auto;
        z-index: 1;
        top:80px;
        opacity: .7%;
    }
    .img{
        width: 100%;
        height: 89%;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    .footer{

        justify-content: space-evenly;
        align-content: center;
        background-color: black;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        position: absolute;
        width: 92%;
        margin: 1rem;
        top: 190px;
        height: 420px;
    }

    .footer_icons{
        display: flex;
        top: -25%;
        margin-top: 100%;
        height: 20%;
        padding: 14px;
        justify-content: space-around;
        width: 99%;
        border-radius: 11px 11px 30px 30px;
    }
    .row{
        margin-top: 5%;
    }
    .image_text{
        text-align: center !important;
    }
    .rounted-arrow{
        position: absolute;
        bottom: 7%;
        background-color: black;
        padding: 10px;
        border-radius: 21px 21px 30px 30px;
        margin: 110%;
    }
    .black-line {
        border-top: 1px solid black;
        margin: 10px 0; /* Optional: Adjust margin as per your needs */
    }
    .all_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Adjust this value as needed */
    }

    .upper_section,
    .bottom_section {
        display: flex;
        justify-content: center;
        margin-bottom: 20px; /* Adjust this value as needed */
    }

    .card {
        width: 118px;
        height: 100px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.2); /* Using rgba to set opacity */
        color: white;
        border-radius: 12px;
    }

    .card i {
        font-size: 30px;
        color: white;
    }
    .cancel{
        position: absolute;
        top: -7%;
        height: 12%;
        width: 28%;
        text-align: center;
        border-radius: 40px 40px 10px 10px;
        left: 36%;
    }
</style>
