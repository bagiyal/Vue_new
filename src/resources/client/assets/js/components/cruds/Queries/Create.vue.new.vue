<template>

    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;">
        <section class="content-header">
            <h1>Query</h1>
        </section>

        <section class="content">
            <div class="row" >

                <div class="col-xs-12"  style="position: relative">
                    <ul style="width: 50px;height: 500px;list-style: none;margin-left: -30px    ">
                        <li><img src="./../dashboard_resources/createquery.png" style="height:25px;width:25px;">
                        </li>
                        <li><img src="./../dashboard_resources/querylist.png" style="height:25px;width:25px;margin-top: 10px"></li>
                    </ul>
                    <ul style="list-style: none;position: absolute;left:30px;color:black;top:-5px;font-size:20px;font-weight:normal;border-right:solid gainsboro 1px;padding-right: 25px">
                        <li @click="changeview('summ')">Summary</li>
                        <li class="mb-4 mt-4" @click="changeview('hotel')">Hotels</li>
                        <li @click="changeview('day')">Day Plan </li>
                        <li class="mb-4 mt-4" @click="changeview('trav')">Traveller</li>
                        <li @click="changeview('train')">Train/Flight</li>
                        <li class="mb-4 mt-4" @click="changeview('mail')">Mail Format</li>
                        <li @click="changeview('cost')">Cost</li>
                    </ul>

                    <div :class="[summ ? 'activedev' : 'hidedev' ]" style="position: absolute;left:230px;top:-55px;font-size:20px;width: 100%;height: 100%;">
                        <div class="container mt-5 mb-5">
                            <div class="row">
                                <!--            First section-->
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Cost Amount</p></div>
                                    </div>


                                    <div class="row" v-for="(cost,index) in item.tour_cost">
                                        <div class="col-3"><input type="number" style="padding-left:20px;color:grey;width: 100%;border:0;border: solid gainsboro 1px" v-model="cost.cost"></div>
                                        <div class="col-4" style="margin-left: -20px"><input type="text" style="padding-left:20px;color:grey;width: 100%;border:0;border: solid gainsboro 1px" v-model="cost.type"></div>
                                       <img  @click="item.tour_cost.splice(index, 1) " src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:3px;margin-left: -14px">
                                        <img @click="item.tour_cost.push({'cost':'','type':''})" src="./../dashboard_resources/plus.png" style="width: 27px;height: 27px;margin-top:3px;border:0;margin-left: -1px">
                                    </div>


                                    <div class="row mt-4">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Tour Date<i style="margin-left: 5px" class="fas fa-calendar-alt"></i></p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-8"><input type="date" style="width: 100%;padding-left:20px;color:grey;border:0;border: solid gainsboro 1px;"></div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Location 1 <img src="./../dashboard_resources/loction.png" style="width: 25px;height: 25px;margin-left: 5px;"></p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12  "><input  type="text" style="border:0;border:solid gainsboro 1px;width: 48%;color:grey;padding-left: 20px" value="Delhi"><input type="text" style="border:0;border:solid gainsboro 1px;width:7%;padding-left: 10px;color:grey" value="08"><img src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:0px;margin-left: 1px"><img src="./../dashboard_resources/plus.png" style="margin-top:0px;width: 27px;height: 27px"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Location 2 <img src="./../dashboard_resources/loction.png" style="width: 25px;height: 25px;margin-left: 5px;"></p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12  "><input  type="text" style="border:0;border:solid gainsboro 1px;width: 48%;color:grey;padding-left: 20px" value="Delhi"><input type="text" style="border:0;border:solid gainsboro 1px;width:7%;padding-left: 10px;color:grey" value="08"><img src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:0px;margin-left: 1px"><img src="./../dashboard_resources/plus.png" style="margin-top:0px;width: 27px;height: 27px"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Location 3 <img src="./../dashboard_resources/loction.png" style="width: 25px;height: 25px;margin-left: 5px;"></p></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12"><input  type="text" style="border:0;border:solid gainsboro 1px;width: 48%;color:grey;padding-left: 20px" value="Delhi"><input type="text" style="border:0;border:solid gainsboro 1px;width:7%;padding-left: 10px;color:grey" value="08"><img src="./../dashboard_resources/minus.png" style="width: 27px;height: 27px;margin-top:0px;margin-left: 1px"><img src="./../dashboard_resources/plus.png" style="margin-top:0px;width: 27px;height: 27px"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Duration</p></div>
                                    </div>
                                    <div class="row">
                                        <div class="ml-3" style="width:167px;border: solid gainsboro 1px;border-radius:3px;background-color: white"><input type="text" style="color:grey;padding-left:15px;width: 70%;border:0;border-right: solid gainsboro 1px;margin-top: 3px;margin-bottom: 3px" value="Nights"><input type="text" style="padding-left: 15px;color:grey;width: 25%;border:0" value="05"> </div>
                                        <div class="ml-3" style="width:167px;border: solid gainsboro 1px;border-radius:3px;background-color: white"><input type="text" style="color:grey;padding-left:15px;width: 70%;border:0;border-right: solid gainsboro 1px;margin-top: 3px;margin-bottom: 3px" value="Day"><input type="text" style="padding-left: 15px;color:grey;width: 25%;border:0" value="05"> </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Travelers</p></div>
                                    </div>
                                    <div class="row" style="margin-left: 0px">
                                        <div class="col-5" style="margin-top: 3px;margin-bottom: 3px;background-color: white;">
                                            <div class="row pt-2 pb-2" style="background-color: white;">
                                                <div class="col-lg-4">
                                                    <div class="row">
                                                        <div class="col-10 text-center">
                                                            <p style="font-size: 10px;color: black;font-weight: bold">Adults</p>
                                                        </div>
                                                        <div class="col-10">
                                                            <p style="font-size: 8px;color: darkgray;margin-top: -15px">(12+ yrs)</p>
                                                        </div>
                                                        <div class="col-10" style="margin-top: -15px">
                                                            <select style="font-size: 15px;color: black;width: 45px;height: 25px;border:0;border:solid gainsboro 2px;border-radius: 3px ">
                                                                <option>1</option>
                                                                <option selected="">2</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="row" style="margin-left: -40px">
                                                        <div class="col-10 text-center" >
                                                            <p style="font-size: 10px;color: black;font-weight: bold">Children</p>
                                                        </div>
                                                        <div class="col-10">
                                                            <p style="font-size: 8px;color: darkgray;margin-top: -15px">(2-12 yrs)</p>
                                                        </div>
                                                        <div class="col-10" style="margin-top: -15px">
                                                            <select style="font-size: 15px;color: black;width: 45px;height: 25px;border:0;border:solid gainsboro 2px;border-radius: 3px ">
                                                                <option>1</option>
                                                                <option selected="">2</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="row"   style="margin-left: -45px">
                                                        <div class="col-12 text-center" style="margin-left:-10px">
                                                            <p style="font-size: 10px;color: black;font-weight: bold">Infant</p>
                                                        </div>
                                                        <div class="col-12">
                                                            <p style="font-size: 8px;color: darkgray;margin-top: -15px">(below 2yrs)</p>
                                                        </div>
                                                        <div class="col-12" style="margin-top: -15px">
                                                            <select style="font-size: 15px;color: black;width: 45px;height: 25px;border:0;border:solid gainsboro 2px;border-radius: 3px ">
                                                                <option>1</option>
                                                                <option selected="">2</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 pt-2 pb-2" style="margin-left: -60px;margin-top: 3px;margin-bottom: 3px;background-color: white;border-left: solid gainsboro 1px;">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="row" >
                                                        <div class="col-12 text-center">
                                                            <p style="font-size: 10px;color: black;font-weight: bold;margin-left: -33px">Rooms</p>
                                                        </div>
                                                        <div class="col-12">
                                                            <p style="font-size: 8px;margin-top: -15px;color:darkgray">(12+ yrs)</p>
                                                        </div>
                                                        <div class="col-12" style="margin-top: -15px">
                                                            <select style="font-size: 15px;color: black;width: 45px;height: 25px;border:0;border:solid gainsboro 2px;border-radius: 3px ">
                                                                <option>1</option>
                                                                <option selected="">2</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="row" style="margin-left: -50px">
                                                        <div class="col-12 text-center">
                                                            <p  style="font-size: 10px;color: black;font-weight: bold;margin-left: -40px">Extra Beds</p>
                                                        </div>
                                                        <div class="col-12">
                                                            <p style="font-size: 8px;color:darkgrey;margin-top: -15px">(2-12 yrs)</p>
                                                        </div>
                                                        <div class="col-12" style="margin-top: -15px">
                                                            <select style="font-size: 15px;color: black;width: 45px;height: 25px;border:0;border:solid gainsboro 2px;border-radius: 3px ">
                                                                <option>1</option>
                                                                <option selected="">2</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                                <option>1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <!--            second section-->
                                <div class="col-lg-6" style="border-left: solid white 2px;margin-left: -180px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Budget</p></div>
                                        <div class="col-12"><input type="text" style="padding-left:20px;color:grey;width: 70%;border:0;border: solid gainsboro 1px" value="2000.00"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Executive Name<span style="margin-left: 5px"><i class="fa fa-user"></i></span></p></div>
                                        <div class="col-12"><input type="text" style="padding-left:20px;color:grey;width: 70%;border:0;border: solid gainsboro 1px" value="Delhi"><img src="./../dashboard_resources/edit.png" style="width: 25px;height: 25px;margin-left: -30px;margin-top: 3px"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Executive Mobile Number<span style="margin-left: 2px;"><img src="./../dashboard_resources/contact.png" height="25px" style="margin-top: 5px"></span></p></div>
                                        <div class="col-12"><input type="text" style="padding-left:20px;color:grey;width: 70%;border:0;border: solid gainsboro 1px" value="8888888888"><img src="./../dashboard_resources/edit.png" style="width: 25px;height: 25px;margin-left: -30px;margin-top: 3px"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Transport Type<span style="margin-left: 2px;"><img src="./../dashboard_resources/transport.png" height="25px" style="margin-top: 5px"></span></p></div>
                                        <div class="col-12"><input type="select" style="padding-left:20px;color:grey;width: 70%;border:0;border: solid gainsboro 1px" value="8888888888"><img src="./../dashboard_resources/dropdown_gray.png" style="width: 15px;height: 10px;margin-left: -30px;margin-top: 3px"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Pickup Location<span style="margin-left: 1px"><img src="./../dashboard_resources/location.png" height="20px" style="margin-top: -5px"></span></p></div>
                                        <div class="col-12"><input type="text"
                                                                   class="form-control"
                                                                   name="pickup_location"
                                                                   placeholder="Enter Pickup location"
                                                                   :value="item.pickup_location"
                                                                   @input="updatePickup_location" style="font-size: 16px;padding-left:20px;color:grey;width: 70%;border:0;border: solid gainsboro 1px"><img src="./../dashboard_resources/edit.png" style="width: 25px;height: 25px; position:absolute;left:350px;top:5px"></div>
                                    </div>
                                    <button style="color:white;background-color:forestgreen;width: 100px;border-radius: 5px;border:0;margin-top: 5px;margin-left: 280px">Next</button>
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px"><p style="color:grey;">Query Feel Rating:</p></div>
                                        <div class="col-12"><div class="row" style="margin-left: 1px"><div class="bg-danger" style="width:75px;height: 20px"></div><div class=" bg-warning" style="width:75px;"></div><div class="bg-primary" style="width:75px;"></div><div class=" bg-success" style="width:75px;"></div><div class=" bg-dark" style="width:75px;"></div> </div></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: 15px;margin-top: 15px"><p style="color:grey;">Past Interactions</p></div>
                                        <div style="width: 68%;height: 60px;background-color: white;margin-left: 15px;border:solid gainsboro 1px;border-radius: 5px;font-size:14px;margin-top:-25px">
                                            <p style="border:solid gainsboro 1px;border-radius: 15px;color:red;margin-top:2px;margin-left: 5px;width: 200px;padding-left: 10px;padding-right: 10px"><span style="color:black;margin-left:-5px;margin-right: 5px"><i class="far fa-clock"></i></span>05 Sep 19,  02:15 pm</p>
                                            <img @click="remarkk=remarkk?false:true" src="./../dashboard_resources/dropdown.png" style="margin-top: -70px;margin-left: 330px;height:20px" >
                                            <p style="width: 320px;border-left:solid black 4px;margin-left: 13px; margin-top:-25px;padding-left: 5px">Lorem Ipsum is simply dummy text of the</p>

                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -15px;margin-top: 15px"><p style="color:grey;">Add Remark: </p></div>
                                        <div class="col-12"><input type="text" style="width: 372px;height: 100px;border:0;border:solid gainsboro 1px;border-radius: 3px"></div>
                                    </div>
                                    <div :class="[remarkk ? 'activedev' : 'hidedev' ]" class="col-12" style="position: relative;">
                                        <div style="background-color: white;position: absolute;width: 600px;height: 250px;border: solid gainsboro 1px;border-radius: 10px;left: -220px;top: -140px;font-size: 16px;">
                                            <div style="width: 570px;color:forestgreen;margin-left: 20px;margin-top: 20px"><i class="far fa-clock" style="margin-right: 10px"></i>09-09-2019 / 12:15 pm<span style="margin-left: 290px">Completed</span>
                                                <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            </div>
                                            <div style="width: 570px;color:red;margin-left: 20px;margin-top:-10px"><i class="far fa-clock" style="margin-right: 10px"></i>05-09-2019 / 02:15 pm <span style="margin-left: 205px">Due Date : 10-09-2019</span>
                                                <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            </div>
                                            <div style="width: 570px;color:dodgerblue;margin-left: 20px;margin-top:-10px"><i class="far fa-clock" style="margin-right: 10px"></i>05-09-2019 / 02:15 pm <span style="margin-left: 295px">On Going</span>
                                                <p style="text-align:justify-all;width: 580px;height: 40px;border-left:solid black 3px;margin-left: 6px;padding-left: 5px;font-size: 12px;color:black;margin-top: 5px ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


<!--                    Day Plan-->
                    <div :class="[day ? 'activedev' : 'hidedev' ]" style="position: absolute;left:290px;top:-15px;font-size:20px;width: 1000px;height: 100%;">
                        <div style="margin-left: -88px;margin-top: 20px;"><button class="bg-primary" style=";width: 70px;border: 0;border-radius:0px 15px 15px 0px;font-size:14px;color:white">Delhi</button><button style="background-color:#EFF5FA;width: 70px;border: 0;border-radius: 0px 15px 15px 0px;font-size: 14px;margin-left: 60px;">Jaipur</button><button style="width:70px;border: 0;border-radius: 0px 15px 15px 0px;font-size: 14px;background-color:#EFF5FA;margin-left: 60px">Udaipur</button><button style="background-color:#EFF5FA;width: 70px;border: 0;border-radius: 0px 15px 15px 0px;font-size: 14px;margin-left: 60px">Jodhpur</button><button style="background-color:#EFF5FA;width: 70px;border: 0;border-radius: 0px 15px 15px 0px;font-size: 14px;margin-left: 60px">Shimla</button></div>
                        <div class="text-center text-dark" style="margin-top: 0px;margin-left: -320px;font-size: 18px    ">Delhi 13 SEP 2019 - 17 SEP 2019</div>
                        <div style="background-color: white;text-align: center;margin-left: -50px;width: 800px;height:25px;border-radius: 10px 0px 0px 0px "><button class="bg-primary" style="width: 160px;border: 0;border-radius: 15px;font-size: 14px;color:white;margin-left:-250">Day 1</button><button style="width: 160px;border: 0;border-radius: 15px;font-size: 14px;background-color: white">Day 2</button><button style="width: 160px;border: 0;border-radius: 15px;font-size: 14px;background-color: white;">Day 3</button><button style="background-color: white;width: 160px;border: 0;border-radius: 15px;font-size: 14px;">Day 4</button><button style="background-color: white;width: 160px;border: 0;border-radius: 10px;font-size: 12px;">Day 5</button></div>
                        <div class="card-carousel" style="margin-left: -300px">
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left text-success">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                            <div class="my-card"><div class="container">
                                <div class="card" style="height: 500px ; width: 400px" >
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-6">
                                                <i class="fas fa-calendar-week text-muted" style="font-size:25px;"></i>
                                                <span class="text-primary pl-1" style="font-size: 15px; font-weight: 10px">Day 1<sup class="text-secondary">13 Sep 2019</sup></span>
                                            </div>
                                            <div class="col-6" style="text-align: right;">
                                                <span class="text-secondary" style="font-weight: 5px">Meal Plan</span>
                                                <div class="row" style="margin-right: -100px;text-align: center">
                                                    <div class="col-3"></div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/bfdown.png" alt="task"><br>bf
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/lunchdown.png" alt="task"><br>ln
                                                    </div>
                                                    <div class="col-3" style="font-size: 10px;margin-right: -40px">
                                                        <img height="15px" width="15px" src="./../dashboard_resources/dinnerdown.png" alt="task"><br>dn
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <span class="text-secondary" style="font-size: 12px"><img height="30px" width="30px" src="./../dashboard_resources/setting_Icon.png"> Activity<hr></span>
                                        <p class="text-secondary" style="font-size:15px"><b>kalka mandir dehli</b></p>
                                        <div class="row">
                                            <div class="col-6 float-left"><img src="./../dashboard_resources/slide1.jpg" height="100px" width="150px"></div>
                                            <div class="col-6 text-secondary text-justify" style="font-size: 10px;margin-left: -30px;"><img class="mr-1" height="15px" width="15px" src="./../dashboard_resources/setting_Icon.png">Mobile:<b>0987456321</b><br>fj as lk dfj aslkdfjask ldfjsad klfjsalkdf jslkdafjsd klfjsakld fjsdklfj skdfjsdklfjsd klfjsdklfjsdk lfjsdklfjs dklfjsdkfjsd k lfsddkflsd jfkldsfjd skfjsdklf jsdlkfj<p><a href="#">know more+</a></p></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="text-dark" style="font-size: 15px">Remark</span>
                                            <p class="text-secondary text-justify" style="font-size: 10px">fjaslkdfja slkdfjaskldfjs adklfjsalk dfjslkda fjsdklfjsak ldfjs dklfjskd fjsdkl fjsdklfjs dklfjsd klfjsdkl fjsdklfjs dkf jsdk lfsd dkfl sdjfk ldsfj dskfj sdklfj sdlkfj</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-success float-left">Strat Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">10:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                            <div class=" col-6" style="padding-left: 90px">
                                                <span class="text-danger">End Time:</span><br><span class="border border-outline-dark pl-1 pr-1 text-primary">11:00</span><span class="border border-outline-dark pl-1 pr-1 text-primary">AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer text-center" style="background-image: linear-gradient(to bottom,#343434, #1d1d1d, #343434, #4d4c4c, #676665);">
                                        <a href="#" class="text-light">Click to Edit</a>
                                    </div>
                                </div>
                            </div></div>
                        </div>
                    </div>
<!--                    travellers -->
                    <div :class="[trav ? 'activedev' : 'hidedev' ]" class="container mt-5 mb-5" style="left:220px;position: absolute;left:130px;top:-50px;">
                        <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 800px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 12px">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>
                        <div class="row" style="margin-top: 50px">
                            <div class="col-6" style="margin-left: 50px ">
                                <div class="col-lg-12"> <span style="color:grey;font-size:20px;margin-left: 10px">Traveller Name</span></div>
                                <div class="col-lg-12" style="position: relative"><span style="position: absolute;left:20px;color:grey;font-size: 18px"><i class="fa fa-user" style="margin-left: 20px;margin-top: 10px"></i></span><input value="abc com" type="text" style="font-size:16px;border:0;width: 80%;padding-left: 40px;margin-left: 13px;height: 35px"><span style="position: absolute;left:395px;color:grey;"><img src="./../dashboard_resources/edit.png" style="height: 25px;margin-top: 5px"></span></div>
                            </div>
                            <div class="col-6"style="margin-left: -100px">
                                <div class="col-lg-12"> <span style="color:grey;font-size:20px;margin-left: 10px">Traveller Mobile no</span></div>
                                <div class="col-lg-12" style="position: relative"><span style="position: absolute;left:20px;color:grey"><img src="./../dashboard_resources/contact.png" style="margin-left: 10px"></span><input type="text"
                                                                                                                                                                                                                                class="form-control"
                                                                                                                                                                                                                                name="phone"
                                                                                                                                                                                                                                placeholder="Enter Phone"
                                                                                                                                                                                                                                :value="item.phone"
                                                                                                                                                                                                                                @input="updatePhone" style="border:0;width: 80%;padding-left: 40px;margin-left: 13px;height: 35px;font-size:16px"><span style="position: absolute;left: 395px;color:grey;top:0px;"><img src="./../dashboard_resources/edit.png" style="height: 25px;margin-top: 5px"></span></div>
                            </div>
                        </div>
                        <div class="row mt-3" style="margin-left: 50px">
                            <div class="col-lg-12"><span style="color:grey;font-size:20px;margin-left: 10px">Email ID(the email will not visible to supplier)</span></div>
                            <div class="col-lg-12" style="position: relative"><span style="position:absolute;left:30px;top:5px"> <img src="./../dashboard_resources/email.png" style=";height: 25px"></span><input type="email"
                                                                                                                                                                                                                   class="form-control"
                                                                                                                                                                                                                   name="email"
                                                                                                                                                                                                                   :value="item.email"
                                                                                                                                                                                                                   @input="updateEmail" style="margin-left: 11px ; width: 84%;border:0;height: 35px;padding-left: 40px;font-size: 16px" placeholder="asd@mail.com"></div>
                        </div>
                        <div class="row mt-3" style="margin-left: 50px">
                            <div class="col-lg-12"><span style="color:grey;font-size:20px;margin-left: 10px">Email ID(Secondary)</span></div>
                            <div class="col-lg-12" style="position: relative"><span style="position:absolute;left:30px;top:5px"> <img src="./../dashboard_resources/email.png" style=";height: 25px"></span><input type="text"
                                                                                                                                                                                                                   class="form-control"
                                                                                                                                                                                                                   name="email_second"
                                                                                                                                                                                                                   placeholder="Enter Email second"
                                                                                                                                                                                                                   :value="item.email_second"
                                                                                                                                                                                                                   @input="updateEmail_second" style="margin-left: 11px ; width: 84%;border:0;height: 35px;padding-left: 40px;font-size: 16px"></div>
                        </div>
                        <div style="position: relative"><button class="bg-success pl-5 pr-5" style="position: absolute;color: white;left:850px;top:170px;border:0;font-size: 20px;border-radius: 5px">Next</button></div>
                    </div>
<!--                    train/flight-->
                    <div :class="[train ? 'activedev' : 'hidedev' ]" class="container mb-5 mt-3" style="left:230px;top:-50px;position:absolute;">
                        <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 700px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 12px ">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>
                        <div class="row mb-5" style="margin-top: 50px">
                            <div class="col-12">
                                <div class="card" style="border: 0px;width: 850px;font-size: 20px">
                                    <div class="card-header" style="height: 40px;background-color: gainsboro;border:0"></div>
                                    <div class="card-body" style="font-weight: bold;color:darkgrey">
                                        <p>New Delhi</p>
                                        <p>Indira Gandhi International Airport</p>
                                        <p>Terminal 3</p>
                                        <p>2hrs 10mins</p>
                                        <p>07:45</p>
                                        <p>Fri, 14 Nov 10</p>
                                    </div>
                                    <div class="card-footer"style="border:0;height: 40px;background-color: gainsboro"><p style="text-align: right;margin-top: -3px">Flight Price:<span style="font-weight: bold;padding-left: 5px">12,000 INR</span></p></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-success pl-5 pr-5" style="margin-left: 755px;font-size: 16px;border-radius:5px">Next</button>
                    </div>
<!--                    mail format-->


                    <div :class="[mail ? 'activedev' : 'hidedev' ]" class="container" style="left:90px;top:-50px;position:absolute;">
                        <div class="row">
                            <div class="col-12">
                                <form id="msform" style="width: 100%">
                                    <!-- progressbar -->
                                    <ul id="progressbar">
                                        <li class="active"><span style="font-size: 14px;font-weight: bold;color:black">Welcome Notes</span></li>
                                        <li><span style="font-size: 14px;font-weight: bold;color:black">Tour Details</span></li>
                                        <li><span style="font-size: 14px;font-weight: bold ;color:black"> Closure Notes</span></li>
                                    </ul>

                                    <!-- fieldsets -->

                                    <fieldset style="margin-top: 50px">
                                        <div><span style="position: relative"><button style="position: absolute;width: 200px;left: 230px;top:-40px;background-color: white;padding-left: 30px;padding-right: 30px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png"></span></button></span></div>
                                        <span style="font-size: 20px;margin-left: -570px">Welcome/Registration Mail</span><span style="color:royalblue;position:relative"><p style="position: absolute;left: 403px;top:-5px;width: 200px;font-size:15px;margin-top:5px">(Character Limit 244)</p></span>
                                        <div class="card mt-1">
                                            <div class="card-header" style="border: 0;background-color: gainsboro">Header</div>
                                            <div class="card-body" style="border: 0;color:grey;text-align: justify">Thank you for choosing us. Over the years, we have helped people create beautiful travel memories, just like we hope to do for you. After reviewing your preferences and the available options, we are proposing the below package which we believe best matches your requirements. </div>

                                        </div>
                                        <input type="button" name="next" class="next action-button" value="Next" style="margin-top: 130px;"/>
                                    </fieldset>
                                    <fieldset style="margin-top: 50px">
                                        <div><span style="position: relative"><button style="position: absolute;width: 200px;left: 230px;top:-40px;background-color: white;padding-left: 30px;padding-right: 30px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png"></span></button></span></div>
                                        <span style="font-size: 20px;margin-left: -320px">Tour details inclusions, exclusions notes and other T&C :
</span><span style="color:royalblue;position:relative"><p style="position: absolute;left: 153px;top:0px;width: 200px;font-size:15px;">(Character Limit 244)</p></span>
                                        <div class="card mt-1">
                                            <div class="card-header" style="border: 0;background-color: gainsboro">Header</div>
                                            <div class="card-body" style="border: 0;color:grey;text-align: justify">Thank you for choosing us. Over the years, we have helped people create beautiful travel memories, just like we hope to do for you. After reviewing your preferences and the available options, we are proposing the below package which we believe best matches your requirements. </div>

                                        </div>
                                        <input type="button" name="previous" class="previous action-button" value="Previous" style="margin-top: 130px;"/>
                                        <input type="button" name="next" class="next action-button" value="Next" style="margin-top: 130px;"/>
                                    </fieldset>
                                    <fieldset style="margin-top: 50px">
                                        <div><span style="position: relative"><button style="position: absolute;width: 200px;left: 230px;top:-40px;background-color: white;padding-left: 30px;padding-right: 30px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;">Send Quotes<span><img src="./../dashboard_resources/dropdown11.png"></span></button></span></div>
                                        <span style="font-size: 20px;margin-left: -681px">Closure Notes:</span><span style="color:royalblue;position:relative"><p style="position: absolute;left: 513px;top:0px;width: 200px;font-size:15px">(Character Limit 244)</p></span>
                                        <div class="card mt-1">
                                            <div class="card-header" style="border: 0;background-color: gainsboro">Header</div>
                                            <div class="card-body" style="border: 0;color:grey;text-align: justify">Thank you for choosing us. Over the years, we have helped people create beautiful travel memories, just like we hope to do for you. After reviewing your preferences and the available options, we are proposing the below package which we believe best matches your requirements. </div>

                                        </div>
                                        <div style="position: relative"><input type="button"  class="btn-light" value="Short Quote" style="position: absolute;left: 30px;top:40px;width: 200px;border:0;border:solid gainsboro 1px;border-radius:15px;height: 30px;padding-left: 40px;"/><span style="color:black;position: absolute;left:80px;top:43px;"><i class="fas fa-envelope"></i></span>
                                            <input class="btn-primary" value="Detailed Quote" style="text-align:center;position: absolute;top:40px;left:320px;border:solid gainsboro 1px;border-radius: 20px;width:200px;height: 30px "><span style="color: white;position: absolute;top:43px;left:340px "><i class="fas fa-envelope pr-2"></i></span>
                                            <input type="button" onclick="popupfunction()" class="btn-success" value="Send Via Whatsapp" style="position: absolute;top:40px;left:600px;border:solid gainsboro 1px;border-radius: 20px;text-align:center;width:220px;height: 30px"><span style="color: white;position: absolute;top:43px;left:620px"><i class="fab fa-whatsapp"></i></span>
                                        </div>
                                    </fieldset>
                                </form>


                            </div>
                        </div>
                    </div>
<!--                    cost-->
                    <div  :class="[cost ? 'activedev' : 'hidedev' ]" class="container" style="left:190px;top:-50px;position:absolute;">
                            <button style="background-color: white;padding-left: 30px;padding-right: 30px;margin-left: 830px;border:0;border-radius: 15px;box-shadow: 4px 3px 7px 0px grey;font-size: 12px ">Send Quotes<span style="margin-left: 5px;"><img src="./../dashboard_resources/dropdown11.png" style="height: 8px"></span></button>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-6" style="margin-left:120px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Hotel 1 </p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:70%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 520px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Price</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left: 685px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Qty. </p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 775px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Total</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left:970px;top:60px;">
                                    <div class="row">
                                        <button style="background-color: white;border-radius: 2px;border:solid 1px;border-color: #F1F1F1" size="10px"><span style="font-weight: 2px;font-size: 20px;text-align:center">+</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-6" style="margin-left:120px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Hotel 2 </p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:70%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 520px;top:140px">
                                    <div class="row">

                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left: 685px;top:140px">
                                    <div class="row">

                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 775px;top:140px">
                                    <div class="row">

                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left:970px;top:135px">
                                    <div class="row">
                                        <button style="background-color: white;border-radius: 2px;border:solid 1px;border-color: #F1F1F1" size="10px"><span style="font-weight: 2px;font-size: 20px;text-align:center">+</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-6" style="margin-left:120px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Transport </p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:70%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 520px;top:215px">
                                    <div class="row">

                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left: 685px;top:215px">
                                    <div class="row">
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 775px;top:215px">
                                    <div class="row">

                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left:970px;top:210px">
                                    <div class="row">
                                        <button style="background-color: white;border-radius: 2px;border:solid 1px;border-color: #F1F1F1" size="10px"><span style="font-weight: 2px;font-size: 20px;text-align:center">+</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-2" style="position:absolute;left: 775px;top:240px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Total</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-2" style="position:absolute;left: 590px;top:310px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Markup</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 775px;top:310px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Selling Price</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-6" style="position: absolute;top:390px;left:120px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Flight 1 </p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:70%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 520px;top:390px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Price</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left: 685px;top:390px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Qty. </p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:100%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 775px;top:390px;">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Total</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-1" style="position: absolute;left:970px;top:425px;margin-top: 6px">
                                    <div class="row">
                                        <button style="background-color: white;border-radius: 2px;border:solid 1px;border-color: #F1F1F1" size="10px"><span style="font-weight: 2px;font-size: 20px;text-align:center">+</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px">
                                <div class="col-2" style="position:absolute;left: 775px;top:460px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Total</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" style="margin-top: 0px;">
                                <div class="col-2" style="position:absolute;left: 590px;top:530px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Markup</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                                <div class="col-2" style="position:absolute;left: 775px;top:530px">
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: -10px;margin-top: 15px;font-size: 20px;"><p style="color:grey;">Selling Price</p></div>
                                        <div class="col-12"><input type="text" style="border:0;border:solid gainsboro 1px;border-radius: 3px;width:90%;height:30px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <form @submit.prevent="submitForm" novalidate style="margin-top:300px">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Create</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group">
                                    <label for="booking_id">Booking id *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="booking_id"
                                            placeholder="Enter Booking id *"
                                            :value="item.booking_id"
                                            @input="updateBooking_id"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="budget">Budget *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="budget"
                                            placeholder="Enter Budget *"
                                            :value="item.budget"
                                            @input="updateBudget"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="traveler_name">Traveler name</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="traveler_name"
                                            placeholder="Enter Traveler name"
                                            :value="item.traveler_name"
                                            @input="updateTraveler_name"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="bill_pay">Bill pay</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="bill_pay"
                                            placeholder="Enter Bill pay"
                                            :value="item.bill_pay"
                                            @input="updateBill_pay"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="no_of_adults">No of adults</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="no_of_adults"
                                            placeholder="Enter No of adults"
                                            :value="item.no_of_adults"
                                            @input="updateNo_of_adults"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="no_of_children">No of children</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="no_of_children"
                                            placeholder="Enter No of children"
                                            :value="item.no_of_children"
                                            @input="updateNo_of_children"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="note">Note</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="note"
                                            placeholder="Enter Note"
                                            :value="item.note"
                                            @input="updateNote"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="status"
                                            placeholder="Enter Status"
                                            :value="item.status"
                                            @input="updateStatus"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="phone"
                                            placeholder="Enter Phone"
                                            :value="item.phone"
                                            @input="updatePhone"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            :value="item.email"
                                            @input="updateEmail"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="email_second">Email second</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="email_second"
                                            placeholder="Enter Email second"
                                            :value="item.email_second"
                                            @input="updateEmail_second"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="traveller_id">Traveller id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="traveller_id"
                                            placeholder="Enter Traveller id"
                                            :value="item.traveller_id"
                                            @input="updateTraveller_id"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="generated_itinerary">Generated itinerary</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="generated_itinerary"
                                            placeholder="Enter Generated itinerary"
                                            :value="item.generated_itinerary"
                                            @input="updateGenerated_itinerary"
                                    >
                                </div>
                                <div class="form-group">
                                    <ul id="sortable">
                                        <draggable v-model="places.cites" group="people" @start="drag=true" @end="drag=false">
                                            <location-place-component v-for="(location,index ) in places.cites"  :key="location.id" :location="location" :place="places.places_city_id[index]" @addplace="addplace"  @delete="remove"></location-place-component>
                                        </draggable>

                                    </ul>
                                    <!--                                    <ul><li v-for="tour in item.tour_location" :key="item.tour_location.id" >{{item.tour_location.title}}-->


                                    <!--                                    </li></ul>-->
                                    <!--                                    <ul>{{places.places_city_id[1][0]}}<li v-for="tour in places.places_city_id[1]" :key="tour.id" >{{tour.title}}-->


                                    <!--                                    </li></ul>-->


                                    <label for="addtours">Select Tour</label>
                                    <v-select
                                            name="addtours"
                                            label="title"
                                            @input="inmodal"
                                            :value="item.tour"
                                            :options="tourAll"

                                    />
                                </div>
                                <div class="form-group">
                                    <label for="tour_id">Tour id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="tour_id"
                                            placeholder="Enter Tour id"
                                            :value="item.tour_id"
                                            @input="updateTour_id"
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="itinerary_places">Itinerary places</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="itinerary_places"
                                            placeholder="Enter Itinerary places"
                                            :value="item.itinerary_places"

                                    >
                                </div>
                                <div class="form-group">
                                    <label for="agency_id">Agency id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="agency_id"
                                            placeholder="Enter Agency id"
                                            :value="item.agency_id"
                                            @input="updateAgency_id"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="agent_id">Agent id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="agent_id"
                                            placeholder="Enter Agent id"
                                            :value="item.agent_id"
                                            @input="updateAgent_id"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="meal_day">Meal day</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="meal_day"
                                            placeholder="Enter Meal day"
                                            :value="item.meal_day"
                                            @input="updateMeal_day"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="meals_supplement">Meals supplement</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="meals_supplement"
                                            placeholder="Enter Meals supplement"
                                            :value="item.meals_supplement"
                                            @input="updateMeals_supplement"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="messageidd">Messageidd</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="messageidd"
                                            placeholder="Enter Messageidd"
                                            :value="item.messageidd"
                                            @input="updateMessageidd"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="package_category">Package category</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="package_category"
                                            placeholder="Enter Package category"
                                            :value="item.package_category"
                                            @input="updatePackage_category"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="pickup_address">Pickup address</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="pickup_address"
                                            placeholder="Enter Pickup address"
                                            :value="item.pickup_address"
                                            @input="updatePickup_address"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="pickup_location">Pickup location</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="pickup_location"
                                            placeholder="Enter Pickup location"
                                            :value="item.pickup_location"
                                            @input="updatePickup_location"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="query_feel">Query feel</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="query_feel"
                                            placeholder="Enter Query feel"
                                            :value="item.query_feel"
                                            @input="updateQuery_feel"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="remarks">Remarks</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="remarks"
                                            placeholder="Enter Remarks"
                                            :value="item.remarks"
                                            @input="updateRemarks"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="score">Score</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="score"
                                            placeholder="Enter Score"
                                            :value="item.score"
                                            @input="updateScore"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="score_new">Score new</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="score_new"
                                            placeholder="Enter Score new"
                                            :value="item.score_new"
                                            @input="updateScore_new"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="total_room">Total room</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="total_room"
                                            placeholder="Enter Total room"
                                            :value="item.total_room"
                                            @input="updateTotal_room"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="total_tour_days">Total tour days</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="total_tour_days"
                                            placeholder="Enter Total tour days"
                                            :value="item.total_tour_days"
                                            @input="updateTotal_tour_days"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="tour_cost">Tour cost</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="tour_cost"
                                            placeholder="Enter Tour cost"
                                            :value="item.tour_cost"
                                            @input="updateTour_cost"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="tour_cost_tax">Tour cost tax</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="tour_cost_tax"
                                            placeholder="Enter Tour cost tax"
                                            :value="item.tour_cost_tax"
                                            @input="updateTour_cost_tax"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="tour_id">Tour id</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="tour_id"
                                            placeholder="Enter Tour id"
                                            :value="item.tour_id"
                                            @input="updateTour_id"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="tour_name">Tour name</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="tour_name"
                                            placeholder="Enter Tour name"
                                            :value="item.tour_name"
                                            @input="updateTour_name"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="tour_location">Tour location</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="tour_location"
                                            placeholder="Enter Tour location"
                                            :value="item.tour_location"
                                            @input="updateTour_location"
                                    >
                                </div>
                            </div>

                            <div class="box-footer">
                                <vue-button-spinner
                                        class="btn btn-primary btn-sm"
                                        :isLoading="loading"
                                        :disabled="loading"
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
    import LocationPlaceComponent from '../../cruds/Locationsplace'
    import draggable from 'vuedraggable'


    export default {
        data() {
            return {
                tourlocation:[],
                summ:true,
                hotel:false,
                day:false,
                trav:false,
                train:false,
                mail:false,
                cost:false,
                remarkk:false


                //   place:[]
                // Code...
            }
        },
        computed: {
            ...mapGetters('QueriesSingle', ['item', 'loading','tourAll','places','cityid'])
        },
        created() {
            // Code ...
            this.fetchTourAll()
        },
        mounted(){
            var $num = $('.my-card').length;
    var $even = $num / 2;
    var $odd = ($num + 1) / 2;
    // alert($num);

    if ($num % 2 == 0) {
        $('.my-card:nth-child(' + $even + ')').addClass('active');
        $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $even + ')').next().addClass('next');
    } else {
        $('.my-card:nth-child(' + $odd + ')').addClass('active');
        $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
        $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
    }

    $('.my-card').click(function() {
        var $slide = $('.active').width();
        console.log($('.active').position().left);

        if ($(this).hasClass('next')) {
            $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
        } else if ($(this).hasClass('prev')) {
            $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
    });


    // Keyboard nav
    $('html body').keydown(function(e) {
        if (e.keyCode == 37) { // left
            alert('left');
            $('.active').prev().trigger('click');
        }
        else if (e.keyCode == -37) { // right
            alert('right');
            $('.active').next().trigger('click');
        }
    });
    $(function() {

//jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function(){
            if(animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            $("#hotel_progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'transform': 'scale('+scale+')'});
                    next_fs.css({'left': left, 'opacity': opacity});
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function(){
            if(animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            $("#hotel_progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".submit").click(function(){
            return false;
        })

    });
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
    jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
    function popupfunction() {
        var x = document.getElementById("popup");
        if (x.style.display === "block") {
            x.style.display = "block";
        } else {
            x.style.display = "block";
        }
    }
    (function ($) {
        'use strict';

        $.fn.waterwheelCarousel = function (startingOptions) {

            // Adds support for intializing multiple carousels from the same selector group
            if (this.length > 1) {
                this.each(function() {
                    $(this).waterwheelCarousel(startingOptions);
                });
                return this; // allow chaining
            }

            var carousel = this;
            var options = {};
            var data = {};

            function initializeCarouselData() {
                data = {
                    itemsContainer:         $(carousel),
                    totalItems:             $(carousel).find('img').length,
                    containerWidth:         $(carousel).width(),
                    containerHeight:        $(carousel).height(),
                    currentCenterItem:      null,
                    previousCenterItem:     null,
                    items:                  [],
                    calculations:           [],
                    carouselRotationsLeft:  0,
                    currentlyMoving:        false,
                    itemsAnimating:         0,
                    currentSpeed:           options.speed,
                    intervalTimer:          null,
                    currentDirection:       'forward',
                    leftItemsCount:         0,
                    rightItemsCount:        0,
                    performingSetup:        true
                };
                data.itemsContainer.find('img').removeClass(options.activeClassName);
            }

            /**
             * This function will set the autoplay for the carousel to
             * automatically rotate it given the time in the options
             * Can clear the autoplay by passing in true
             */
            function autoPlay(stop) {
                // clear timer
                clearTimeout(data.autoPlayTimer);
                // as long as no stop command, and autoplay isn't zeroed...
                if (!stop && options.autoPlay !== 0) {
                    // set timer...
                    data.autoPlayTimer = setTimeout(function () {
                        // to move the carousl in either direction...
                        if (options.autoPlay > 0) {
                            moveOnce('forward');
                        } else {
                            moveOnce('backward');
                        }
                    }, Math.abs(options.autoPlay));
                }
            }

            /**
             * This function will preload all the images in the carousel before
             * calling the passed in callback function. This is only used so we can
             * properly determine the width and height of the items. This is not needed
             * if a user instead manually specifies that information.
             */
            function preload(callback) {
                if (options.preloadImages === false) {
                    callback();
                    return;
                }

                var $imageElements = data.itemsContainer.find('img'), loadedImages = 0, totalImages = $imageElements.length;

                $imageElements.each(function () {
                    $(this).bind('load', function () {
                        // Add to number of images loaded and see if they are all done yet
                        loadedImages += 1;
                        if (loadedImages === totalImages) {
                            // All done, perform callback
                            callback();
                            return;
                        }
                    });
                    // May need to manually reset the src to get the load event to fire
                    // http://stackoverflow.com/questions/7137737/ie9-problems-with-jquery-load-event-not-firing
                    $(this).attr('src', $(this).attr('src'));

                    // If browser has cached the images, it may not call trigger a load. Detect this and do it ourselves
                    if (this.complete) {
                        $(this).trigger('load');
                    }
                });
            }

            /**
             * Makes a record of the original width and height of all the items in the carousel.
             * If we re-intialize the carousel, these values can be used to re-establish their
             * original dimensions.
             */
            function setOriginalItemDimensions() {
                data.itemsContainer.find('img').each(function () {
                    if ($(this).data('original_width') == undefined || options.forcedImageWidth > 0) {
                        $(this).data('original_width', $(this).width());
                    }
                    if ($(this).data('original_height') == undefined || options.forcedImageHeight > 0) {
                        $(this).data('original_height', $(this).height());
                    }
                });
            }

            /**
             * Users can pass in a specific width and height that should be applied to every image.
             * While this option can be used in conjunction with the image preloader, the intended
             * use case is for when the preloader is turned off and the images don't have defined
             * dimensions in CSS. The carousel needs dimensions one way or another to work properly.
             */
            function forceImageDimensionsIfEnabled() {
                if (options.forcedImageWidth && options.forcedImageHeight) {
                    data.itemsContainer.find('img').each(function () {
                        $(this).width(options.forcedImageWidth);
                        $(this).height(options.forcedImageHeight);
                    });
                }
            }

            /**
             * For each "visible" item slot (# of flanking items plus the middle),
             * we pre-calculate all of the properties that the item should possess while
             * occupying that slot. This saves us some time during the actual animation.
             */
            function preCalculatePositionProperties() {
                // The 0 index is the center item in the carousel
                var $firstItem = data.itemsContainer.find('img:first');

                data.calculations[0] = {
                    distance: 0,
                    offset:   0,
                    opacity:  0.5
                }

                // Then, for each number of flanking items (plus one more, see below), we
                // perform the calcations based on our user options
                var horizonOffset = options.horizonOffset;
                var separation = options.separation;
                for (var i = 1; i <= options.flankingItems + 2; i++) {
                    if (i > 1) {
                        horizonOffset *= options.horizonOffsetMultiplier;
                        separation *= options.separationMultiplier;
                    }
                    data.calculations[i] = {
                        distance: data.calculations[i-1].distance + separation,
                        offset:   data.calculations[i-1].offset + horizonOffset,
                        opacity:  data.calculations[i-1].opacity * options.opacityMultiplier
                    }
                }
                // We performed 1 extra set of calculations above so that the items that
                // are moving out of sight (based on # of flanking items) gracefully animate there
                // However, we need them to animate to hidden, so we set the opacity to 0 for
                // that last item
                if (options.edgeFadeEnabled) {
                    data.calculations[options.flankingItems+1].opacity = 0;
                } else {
                    data.calculations[options.flankingItems+1] = {
                        distance: 0,
                        offset: 0,
                        opacity: 0
                    }
                }
            }

            /**
             * Here we prep the carousel and its items, like setting default CSS
             * attributes. All items start in the middle position by default
             * and will "fan out" from there during the first animation
             */
            function setupCarousel() {
                // Fill in a data array with jQuery objects of all the images
                data.items = data.itemsContainer.find('img');
                for (var i = 0; i < data.totalItems; i++) {
                    data.items[i] = $(data.items[i]);
                }

                // May need to set the horizon if it was set to auto
                if (options.horizon === 0) {
                    if (options.orientation === 'horizontal') {
                        options.horizon = data.containerHeight / 2;
                    } else {
                        options.horizon = data.containerWidth / 2;
                    }
                }

                // Default all the items to the center position
                data.itemsContainer
                    .css('position','relative')
                    .find('img')
                    .each(function () {
                        // Figure out where the top and left positions for center should be
                        var centerPosLeft, centerPosTop;
                        if (options.orientation === 'horizontal') {
                            centerPosLeft = (data.containerWidth / 2) - ($(this).data('original_width') / 2);
                            centerPosTop = options.horizon - ($(this).data('original_height') / 2);
                        } else {
                            centerPosLeft = options.horizon - ($(this).data('original_width') / 2);
                            centerPosTop = (data.containerHeight / 2) - ($(this).data('original_height') / 2);
                        }
                        $(this)
                        // Apply positioning and layering to the images
                            .css({
                                'left': centerPosLeft,
                                'top': centerPosTop,
                                'visibility': 'visible',
                                'position': 'absolute',
                                'z-index': 0,
                                'opacity': 0
                            })
                            // Give each image a data object so it remembers specific data about
                            // it's original form
                            .data({
                                top:             centerPosTop,
                                left:            centerPosLeft,
                                oldPosition:     0,
                                currentPosition: 0,
                                depth:           0,
                                opacity:         0
                            })
                            // The image has been setup... Now we can show it
                            .show();
                    });
            }

            /**
             * All the items to the left and right of the center item need to be
             * animated to their starting positions. This function will
             * figure out what items go where and will animate them there
             */
            function setupStarterRotation() {
                options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;

                data.rightItemsCount = Math.ceil((data.totalItems-1) / 2);
                data.leftItemsCount = Math.floor((data.totalItems-1) / 2);

                // We are in effect rotating the carousel, so we need to set that
                data.carouselRotationsLeft = 1;

                // Center item
                moveItem(data.items[options.startingItem-1], 0);
                data.items[options.startingItem-1].css('opacity', 1);

                // All the items to the right of center
                var itemIndex = options.startingItem - 1;
                for (var pos = 1; pos <= data.rightItemsCount; pos++) {
                    (itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;

                    data.items[itemIndex].css('opacity', 0.5);
                    moveItem(data.items[itemIndex], pos);
                }

                // All items to left of center
                var itemIndex = options.startingItem - 1;
                for (var pos = -1; pos >= data.leftItemsCount*-1; pos--) {
                    (itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;

                    data.items[itemIndex].css('opacity', 0.5);
                    moveItem(data.items[itemIndex], pos);
                }
            }

            /**
             * Given the item and position, this function will calculate the new data
             * for the item. One the calculations are done, it will store that data in
             * the items data object
             */
            function performCalculations($item, newPosition) {
                var newDistanceFromCenter = Math.abs(newPosition);

                // Distance to the center
                if (newDistanceFromCenter < options.flankingItems + 1) {
                    var calculations = data.calculations[newDistanceFromCenter];
                } else {
                    var calculations = data.calculations[options.flankingItems + 1];
                }

                var distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter)
                var newWidth = distanceFactor * $item.data('original_width');
                var newHeight = distanceFactor * $item.data('original_height');
                var widthDifference = Math.abs($item.width() - newWidth);
                var heightDifference = Math.abs($item.height() - newHeight);

                var newOffset = calculations.offset
                var newDistance = calculations.distance;
                if (newPosition < 0) {
                    newDistance *= -1;
                }

                if (options.orientation == 'horizontal') {
                    var center = data.containerWidth / 2;
                    var newLeft = center + newDistance - (newWidth / 2);
                    var newTop = options.horizon - newOffset - (newHeight / 2);
                } else {
                    var center = data.containerHeight / 2;
                    var newLeft = options.horizon - newOffset - (newWidth / 2);
                    var newTop = center + newDistance - (newHeight / 2);
                }

                var newOpacity;
                if (newPosition === 0) {
                    newOpacity = 1;
                } else {
                    newOpacity = calculations.opacity;
                }

                // Depth will be reverse distance from center
                var newDepth = options.flankingItems + 2 - newDistanceFromCenter;

                $item.data('width',newWidth);
                $item.data('height',newHeight);
                $item.data('top',newTop);
                $item.data('left',newLeft);
                $item.data('oldPosition',$item.data('currentPosition'));
                $item.data('depth',newDepth);
                $item.data('opacity',newOpacity);
            }

            function moveItem($item, newPosition) {
                // Only want to physically move the item if it is within the boundaries
                // or in the first position just outside either boundary
                if (Math.abs(newPosition) <= options.flankingItems + 1) {
                    performCalculations($item, newPosition);

                    data.itemsAnimating++;

                    $item
                        .css('z-index',$item.data().depth)
                        // Animate the items to their new position values
                        .animate({
                            left:    $item.data().left,
                            width:   $item.data().width,
                            height:  $item.data().height,
                            top:     $item.data().top,
                            opacity: $item.data().opacity
                        }, data.currentSpeed, options.animationEasing, function () {
                            // Animation for the item has completed, call method
                            itemAnimationComplete($item, newPosition);
                        });

                } else {
                    $item.data('currentPosition', newPosition)
                    // Move the item to the 'hidden' position if hasn't been moved yet
                    // This is for the intitial setup
                    if ($item.data('oldPosition') === 0) {
                        $item.css({
                            'left':    $item.data().left,
                            'width':   $item.data().width,
                            'height':  $item.data().height,
                            'top':     $item.data().top,
                            'opacity': $item.data().opacity,
                            'z-index': $item.data().depth
                        });
                    }
                }

            }

            /**
             * This function is called once an item has finished animating to its
             * given position. Several different statements are executed here, such as
             * dealing with the animation queue
             */
            function itemAnimationComplete($item, newPosition) {
                data.itemsAnimating--;

                $item.data('currentPosition', newPosition);

                // Keep track of what items came and left the center position,
                // so we can fire callbacks when all the rotations are completed
                if (newPosition === 0) {
                    data.currentCenterItem = $item;
                }

                // all items have finished their rotation, lets clean up
                if (data.itemsAnimating === 0) {
                    data.carouselRotationsLeft -= 1;
                    data.currentlyMoving = false;

                    // If there are still rotations left in the queue, rotate the carousel again
                    // we pass in zero because we don't want to add any additional rotations
                    if (data.carouselRotationsLeft > 0) {
                        rotateCarousel(0);
                        // Otherwise there are no more rotations and...
                    } else {
                        // Reset the speed of the carousel to original
                        data.currentSpeed = options.speed;

                        data.currentCenterItem.addClass(options.activeClassName);

                        if (data.performingSetup === false) {
                            options.movedToCenter(data.currentCenterItem);
                            options.movedFromCenter(data.previousCenterItem);
                        }

                        data.performingSetup = false;
                        // reset & initate the autoPlay
                        autoPlay();
                    }
                }
            }

            /**
             * Function called to rotate the carousel the given number of rotations
             * in the given direciton. Will check to make sure the carousel should
             * be able to move, and then adjust speed and move items
             */
            function rotateCarousel(rotations) {
                // Check to see that a rotation is allowed
                if (data.currentlyMoving === false) {

                    // Remove active class from the center item while we rotate
                    data.currentCenterItem.removeClass(options.activeClassName);

                    data.currentlyMoving = true;
                    data.itemsAnimating = 0;
                    data.carouselRotationsLeft += rotations;

                    if (options.quickerForFurther === true) {
                        // Figure out how fast the carousel should rotate
                        if (rotations > 1) {
                            data.currentSpeed = options.speed / rotations;
                        }
                        // Assure the speed is above the minimum to avoid weird results
                        data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
                    }

                    // Iterate thru each item and move it
                    for (var i = 0; i < data.totalItems; i++) {
                        var $item = $(data.items[i]);
                        var currentPosition = $item.data('currentPosition');

                        var newPosition;
                        if (data.currentDirection == 'forward') {
                            newPosition = currentPosition - 1;
                        } else {
                            newPosition = currentPosition + 1;
                        }
                        // We keep both sides as even as possible to allow circular rotation to work.
                        // We will "wrap" the item arround to the other side by negating its current position
                        var flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
                        if (Math.abs(newPosition) > flankingAllowance) {
                            newPosition = currentPosition * -1;
                            // If there's an uneven number of "flanking" items, we need to compenstate for that
                            // when we have an item switch sides. The right side will always have 1 more in that case
                            if (data.totalItems % 2 == 0) {
                                newPosition += 1;
                            }
                        }

                        moveItem($item, newPosition);
                    }
                }
            }

            /**
             * The event handler when an image within the carousel is clicked
             * This function will rotate the carousel the correct number of rotations
             * to get the clicked item to the center, or will fire the custom event
             * the user passed in if the center item is clicked
             */
            $(this).find('img').bind("click", function () {
                var itemPosition = $(this).data().currentPosition;

                if (options.imageNav == false) {
                    return;
                }
                // Don't allow hidden items to be clicked
                if (Math.abs(itemPosition) >= options.flankingItems + 1) {
                    return;
                }
                // Do nothing if the carousel is already moving
                if (data.currentlyMoving) {
                    return;
                }

                data.previousCenterItem = data.currentCenterItem;

                // Remove autoplay
                autoPlay(true);
                options.autoPlay = 0;

                var rotations = Math.abs(itemPosition);
                if (itemPosition == 0) {
                    options.clickedCenter($(this));
                } else {
                    // Fire the 'moving' callbacks
                    options.movingFromCenter(data.currentCenterItem);
                    options.movingToCenter($(this));
                    if (itemPosition < 0) {
                        data.currentDirection = 'backward';
                        rotateCarousel(rotations);
                    } else if (itemPosition > 0) {
                        data.currentDirection = 'forward';
                        rotateCarousel(rotations);
                    }
                }
            });


            /**
             * The user may choose to wrap the images is link tags. If they do this, we need to
             * make sure that they aren't active for certain situations
             */
            $(this).find('a').bind("click", function (event) {
                var isCenter = $(this).find('img').data('currentPosition') == 0;
                // should we disable the links?
                if (options.linkHandling === 1 || // turn off all links
                    (options.linkHandling === 2 && !isCenter)) // turn off all links except center
                {
                    event.preventDefault();
                    return false;
                }
            });

            function nextItemFromCenter() {
                var $next = data.currentCenterItem.next();
                if ($next.length <= 0) {
                    $next = data.currentCenterItem.parent().children().first();
                }
                return $next;
            }

            function prevItemFromCenter() {
                var $prev = data.currentCenterItem.prev();
                if ($prev.length <= 0) {
                    $prev = data.currentCenterItem.parent().children().last();
                }
                return $prev;
            }

            /**
             * Intiate a move of the carousel in either direction. Takes care of firing
             * the 'moving' callbacks
             */
            function moveOnce(direction) {
                if (data.currentlyMoving === false) {
                    data.previousCenterItem = data.currentCenterItem;

                    options.movingFromCenter(data.currentCenterItem);
                    if (direction == 'backward') {
                        options.movingToCenter(prevItemFromCenter());
                        data.currentDirection = 'backward';
                    } else if (direction == 'forward') {
                        options.movingToCenter(nextItemFromCenter());
                        data.currentDirection = 'forward';
                    }
                }

                rotateCarousel(1);
            }

            /**
             * Navigation with arrow keys
             */
            $(document).keydown(function(e) {
                if (options.keyboardNav) {
                    // arrow left or up
                    if ((e.which === 37 && options.orientation == 'horizontal') || (e.which === 38 && options.orientation == 'vertical')) {
                        autoPlay(true);
                        options.autoPlay = 0;
                        moveOnce('backward');
                        // arrow right or down
                    } else if ((e.which === 39 && options.orientation == 'horizontal') || (e.which === 40 && options.orientation == 'vertical')) {
                        autoPlay(true);
                        options.autoPlay = 0;
                        moveOnce('forward');
                    }
                    // should we override the normal functionality for the arrow keys?
                    if (options.keyboardNavOverride && (
                        (options.orientation == 'horizontal' && (e.which === 37 || e.which === 39)) ||
                        (options.orientation == 'vertical' && (e.which === 38 || e.which === 40))
                    )) {
                        e.preventDefault();
                        return false;
                    }
                }
            });

            /**
             * Public API methods
             */
            this.reload = function (newOptions) {
                if (typeof newOptions === "object") {
                    var combineDefaultWith = newOptions;
                } else {
                    var combineDefaultWith = {};
                }
                options = $.extend({}, $.fn.waterwheelCarousel.defaults, newOptions);

                initializeCarouselData();
                data.itemsContainer.find('img').hide();
                forceImageDimensionsIfEnabled();

                preload(function () {
                    setOriginalItemDimensions();
                    preCalculatePositionProperties();
                    setupCarousel();
                    setupStarterRotation();
                });
            }

            this.next = function() {
                autoPlay(true);
                options.autoPlay = 0;

                moveOnce('forward');
            }
            this.prev = function () {
                autoPlay(true);
                options.autoPlay = 0;

                moveOnce('backward');
            }

            this.reload(startingOptions);

            return this;
        };

        $.fn.waterwheelCarousel.defaults = {
            // number tweeks to change apperance
            startingItem:               1,   // item to place in the center of the carousel. Set to 0 for auto
            separation:                 175, // distance between items in carousel
            separationMultiplier:       0.6, // multipled by separation distance to increase/decrease distance for each additional item
            horizonOffset:              0,   // offset each item from the "horizon" by this amount (causes arching)
            horizonOffsetMultiplier:    1,   // multipled by horizon offset to increase/decrease offset for each additional item
            sizeMultiplier:             0.7, // determines how drastically the size of each item changes
            opacityMultiplier:          0.8, // determines how drastically the opacity of each item changes
            horizon:                    0,   // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto
            flankingItems:              3,   // the number of items visible on either side of the center

            // animation
            speed:                      300,      // speed in milliseconds it will take to rotate from one to the next
            animationEasing:            'linear', // the easing effect to use when animating
            quickerForFurther:          true,     // set to true to make animations faster when clicking an item that is far away from the center
            edgeFadeEnabled:            false,    // when true, items fade off into nothingness when reaching the edge. false to have them move behind the center image

            // misc
            linkHandling:               2,                 // 1 to disable all (used for facebox), 2 to disable all but center (to link images out)
            autoPlay:                   0,                 // indicate the speed in milliseconds to wait before autorotating. 0 to turn off. Can be negative
            orientation:                'horizontal',      // indicate if the carousel should be 'horizontal' or 'vertical'
            activeClassName:            'carousel-center', // the name of the class given to the current item in the center
            keyboardNav:                false,             // set to true to move the carousel with the arrow keys
            keyboardNavOverride:        true,              // set to true to override the normal functionality of the arrow keys (prevents scrolling)
            imageNav:                   true,              // clicking a non-center image will rotate that image to the center

            // preloader
            preloadImages:              true,  // disable/enable the image preloader.
            forcedImageWidth:           0,     // specify width of all images; otherwise the carousel tries to calculate it
            forcedImageHeight:          0,     // specify height of all images; otherwise the carousel tries to calculate it

            // callback functions
            movingToCenter:             $.noop, // fired when an item is about to move to the center position
            movedToCenter:              $.noop, // fired when an item has finished moving to the center
            clickedCenter:              $.noop, // fired when the center item has been clicked
            movingFromCenter:           $.noop, // fired when an item is about to leave the center position
            movedFromCenter:            $.noop  // fired when an item has finished moving from the center
        };

    })(jQuery);



    $(document).ready(function() {
        var carousel = $('.carousel').waterwheelCarousel();
    });
        },
        destroyed() {
            this.resetState()
        },
        methods: {
            ...mapActions('QueriesSingle', ['storeData', 'resetState', 'setBooking_id','setplaces', 'setBudget', 'setTraveler_name', 'setBill_pay', 'setNo_of_adults', 'setNo_of_children', 'setNote', 'setStatus', 'setPhone', 'setEmail', 'setEmail_second', 'setTraveller_id', 'setGenerated_itinerary', 'setItinerary_places', 'setAgency_id', 'setAgent_id', 'setMeal_day', 'setMeals_supplement', 'setMessageidd', 'setPackage_category', 'setPickup_address', 'setPickup_location', 'setQuery_feel', 'setRemarks', 'setScore', 'setScore_new', 'setTotal_room', 'setTotal_tour_days', 'setTour_cost', 'setTour_cost_tax', 'setTour_id', 'setTour_name', 'setTour_location','fetchTourAll','fetchplace']),
            changeview(item){
            //    alert(item);
                this.summ=false;
                this.hotel=false;
                this.day=false;
                this.trav=false;
                this.train=false;
                this.mail=false;
                this.cost=false;
                this[item]=true;
            },

            inmodal(value){
                //      console.log(value);
                this.item.tour_location =JSON.parse(value.locations);
                this.item.tour_name=value.title;
                this.item.tour_id=value.id;
                this.places.cites=JSON.parse(value.locations);


                this.places.cites.forEach((val) => {

                    console.log(val.id);
                    var gg=val.id;


                    this.fetchplace(gg.split('-')[0]);

                });



            },
            call_place(id){
                console.log(id);
            },
            remove(id){

                let index = this.item.tour_location.findIndex(location => location.id === id);
                this.item.tour_location.splice(index, 1);
            },

            addplace(id){
                console.log(id);
                this.setItinerary_places(id)
            },

            updateBooking_id(e) {
                this.setBooking_id(e.target.value)
                //   this.fetchplace();
            },
            updateBudget(e) {
                this.setBudget(e.target.value)
            },
            updateTraveler_name(e) {
                this.setTraveler_name(e.target.value)
            },
            updateBill_pay(e) {
                this.setBill_pay(e.target.value)
            },
            updateNo_of_adults(e) {
                this.setNo_of_adults(e.target.value)
            },
            updateNo_of_children(e) {
                this.setNo_of_children(e.target.value)
            },
            updateNote(e) {
                this.setNote(e.target.value)
            },
            updateStatus(e) {
                this.setStatus(e.target.value)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updateEmail_second(e) {
                this.setEmail_second(e.target.value)
            },
            updateTraveller_id(e) {
                this.setTraveller_id(e.target.value)
            },
            updateGenerated_itinerary(e) {
                this.setGenerated_itinerary(e.target.value)
            },
            // updateItinerary_places(e) {
            //     this.setItinerary_places(e.target.value)
            // },
            updateAgency_id(e) {
                this.setAgency_id(e.target.value)
            },
            updateAgent_id(e) {
                this.setAgent_id(e.target.value)
            },
            updateMeal_day(e) {
                this.setMeal_day(e.target.value)
            },
            updateMeals_supplement(e) {
                this.setMeals_supplement(e.target.value)
            },
            updateMessageidd(e) {
                this.setMessageidd(e.target.value)
            },
            updatePackage_category(e) {
                this.setPackage_category(e.target.value)
            },
            updatePickup_address(e) {
                this.setPickup_address(e.target.value)
            },
            updatePickup_location(e) {
                this.setPickup_location(e.target.value)
            },
            updateQuery_feel(e) {
                this.setQuery_feel(e.target.value)
            },
            updateRemarks(e) {
                this.setRemarks(e.target.value)
            },
            updateScore(e) {
                this.setScore(e.target.value)
            },
            updateScore_new(e) {
                this.setScore_new(e.target.value)
            },
            updateTotal_room(e) {
                this.setTotal_room(e.target.value)
            },
            updateTotal_tour_days(e) {
                this.setTotal_tour_days(e.target.value)
            },
            updateTour_cost(e) {
                this.setTour_cost(e.target.value)
            },
            updateTour_cost_tax(e) {
                this.setTour_cost_tax(e.target.value)
            },
            updateTour_id(e) {
                this.setTour_id(e.target.value)
            },
            updateTour_name(e) {
                this.setTour_name(e.target.value)
            },
            updateTour_location(e) {
                this.setTour_location(e.target.value)
            },
            submitForm() {
                this.storeData()
                    .then(() => {
                        this.$router.push({ name: 'queries.index' })
                        this.$eventHub.$emit('create-success')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        },
        components: {LocationPlaceComponent,draggable}
    }
</script>


<style scoped>
    .card-carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .card-carousel .my-card {
        height: 20rem;

        position: relative;
        z-index: 1;
        -webkit-transform: scale(0.6) translateY(-5rem);
        transform: scale(0.6) translateY(-2rem);
        opacity: 0;
        cursor: pointer;
        pointer-events: none;
        /*background: #2e5266;*/
        /*background: linear-gradient(to top, #2e5266, #6e8898);*/
        transition: 1s;
    }

    .card-carousel .my-card:after {
        content: '';
        position: absolute;
        left:200px;
        height: 2px;
        width: 100%;
        border-radius: 100%;

        /*background-color: rgba(0,0,0,0.3);*/
        bottom: -5rem;
        -webkit-filter: blur(4px);
        filter: blur(4px);
    }

    .card-carousel .my-card:nth-child(0):before {
        content: '0';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(1):before {
        content: '1';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(2):before {
        content: '2';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(3):before {
        content: '3';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(4):before {
        content: '4';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(5):before {
        content: '5';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(6):before {
        content: '6';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(7):before {
        content: '7';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(8):before {
        content: '8';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card:nth-child(9):before {
        content: '9';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        font-size: 3rem;
        font-weight: 300;
        color: #fff;
    }

    .card-carousel .my-card.active {
        z-index: 5;
        -webkit-transform: scale(0.9) translateY(0) translateX(0);
        transform: scale(0.9) translateY(0) translateX(0);
        opacity: 1;
        pointer-events: auto;
        transition: .8s;
    }

    .card-carousel .my-card.prev {
        z-index: 2;
        -webkit-transform: scale(0) translateY(1rem) translateX(250px);
        transform: scale(.6) translateY(1rem) translateX(250px);
        opacity: 0.6;
        pointer-events: auto;
        transition: 1s;
    }
    .card-carousel .my-card.next{
        z-index: 2;
        -webkit-transform: scale(0) translateY(1rem) translateX(-250px);
        transform: scale(.6) translateY(1rem) translateX(-250px);
        opacity: 0.6;
        pointer-events: auto;
        transition: 1s;
    }
    /*form styles*/
    #msform {
        width: 400px;
        margin: 50px auto;
        text-align: center;
        position: relative;
    }
    #hotel_msform{
        width: 100px;
        margin: 50px auto;
        text-align: center;
        position: relative;
    }
    #msform fieldset {
        font-size: 16px;
        border: 0 none;
        border-radius: 3px;
        /*box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);*/
        padding: 20px 30px;
        /*box-sizing: border-box;*/
        width: 80%;
        margin: 0 10%;
        /*stacking fieldsets above each other*/
        position: absolute;
    }
    #hotel_msform fieldset {
        font-size: 16px;
        border: 0 none;
        border-radius: 3px;
        /*box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);*/
        padding: 20px 30px;
        /*box-sizing: border-box;*/
        width: 80%;
        margin: 0 10%;
        /*stacking fieldsets above each other*/
        position: absolute;
    }
    /*Hide all except first fieldset*/
    #msform fieldset:not(:first-of-type) {
        display: none;
    }
    #hotel_msform fieldset:not(:first-of-type) {
        display: none;
    }
    /*inputs*/
    /*#msform input, #msform textarea {*/
    /*    padding: 15px;*/
    /*    border: 1px solid #ccc;*/
    /*    border-radius: 3px;*/
    /*    margin-bottom: 10px;*/
    /*    width: 100%;*/
    /*    box-sizing: border-box;*/
    /*    font-family: montserrat;*/
    /*    color: #2C3E50;*/
    /*    font-size: 13px;*/
    /*}*/
    /*buttons*/
    #msform .action-button {
        width: 100px;
        background: #27AE60;
        font-weight: bold;
        color: white;
        border: 0 none;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px 5px;
        margin: 10px 5px;
    }
    #hotel_msform .action-button {
        width: 100px;
        background: #27AE60;
        font-weight: bold;
        color: white;
        border: 0 none;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px 5px;
        margin: 10px 5px;
    }

    /*headings*/


    /*progressbar*/
    #progressbar {
        margin-bottom: 30px;
        overflow: hidden;
        /*CSS counters to number the steps*/
        counter-reset: step;
        width:100%;
    }
    #hotel_progressbar {
        margin-bottom: 30px;
        overflow: hidden;
        /*CSS counters to number the steps*/
        counter-reset: step;
    }
    #progressbar li {
        list-style-type: block;
        color: white;
        text-transform: uppercase;
        font-size: 9px;
        width: 33.33%;
        margin-left:-10px;
        float: left;
        position: relative;
    }
    #hotel_progressbar li {
        list-style-type: block;
        color: white;
        text-transform: uppercase;
        font-size: 9px;
        width: 20.0%;
        float: left;
        position: relative;
    }
    #progressbar li:before {
        content: counter(step);
        counter-increment: step;
        width: 20px;
        line-height: 20px;
        display: block;
        font-size: 10px;
        color: #333;
        background: white;
        border-radius: 3px;
        margin: 0 auto 5px auto;
    }
    #hotel_progressbar li:before {
        content: counter(step);
        counter-increment: step;
        width: 20px;
        line-height: 20px;
        display: block;
        font-size: 10px;
        color: #333;
        background: white;
        border-radius: 3px;
        margin: 0 auto 5px auto;
    }
    /*progressbar connectors*/
    #progressbar li:after {
        content: '';
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        left: -50%;
        top: 9px;
        z-index: -1; /*put it behind the numbers*/
    }
    #hotel_progressbar li:after {
        content: '';
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        left: -50%;
        top: 9px;
        color:black;
        z-index: -1; /*put it behind the numbers*/
    }
    #progressbar li:first-child:after {
        /*connector not needed before the first step*/
        content: none;
    }
    #hotel_progressbar li:first-child:after {
        /*connector not needed before the first step*/
        content: none;
    }
    /*marking active/completed steps green*/
    /*The number of the step and the connector before it = green*/
    #progressbar li.active:before, #progressbar li.active:after {
        background: #27AE60;
        color: white;
    }
    #hotel_progressbar li.active:before, #progressbar li.active:after {
        background: #27AE60;
        color: white;
    }
    #box {
        width: 10;
        height: 10;
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #007bff transparent transparent;
        margin-top: -11px;
        margin-left: 270px;
    }
    #box2 {
        width: 10;
        height: 10;
        border-style: solid;
        border-width: 0 50px 50px 0;
        border-color: transparent #007bff transparent transparent;
        margin-top: -11px;
        margin-left: 270px;
    }
    .activedev{
        display: block;
    }
    .hidedev{
        display: none;
    }
</style>
