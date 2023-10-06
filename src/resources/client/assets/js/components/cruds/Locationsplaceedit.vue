<template>

    <li class="col-xs-12"  :id="location.id" >

        <p class="col-xs-3">{{location.name}} - Days :  </p>
        <div class="col-xs-2"><input type="text" v-model="location.days"></div>
        <div class="col-xs-4">
{{tour_location[index]['hotel']}}

            <v-select v-model="tour_location[index]['hotel']"
                      name="addhotel"
                      label="title"
                      @input="addtohotel(index,location.id)"
                      :value="tour_location[index]['hotel']"
                      :options=hoteloptions[location.id]

            />
        </div>


        <div class="col-xs-1"></div>



        <div class="col-xs-12" v-for="day in parseInt(location.days)" :key="day">
            Day {{day}}-
{{preselect(day,itiplace,location.id,place)}}
            <v-select v-model="days[day]"
                      name="addplaceloc"
                      label="title"
                      @input="addtoplaces(day,location.id)"
                      :value="checkin(itiplace,day)"
                      :options="localplace[location.id][day]"
                      multiple
            />

            <div  v-for="(placeinfo, index) in allitiplace[location.id]['day-'+day]['place']">Place: {{placeinfo['title']}}

                <label>From:</label><input type="text" v-model="allitiplace[location.id]['day-'+day]['place'][index]['from_time']">
                <label>To:</label><input type="text" v-model="allitiplace[location.id]['day-'+day]['place'][index]['to_time']">
                <label>Remark:</label><input type="text" v-model="allitiplace[location.id]['day-'+day]['place'][index]['remark']">
<!--                <button @click="run"> yess</button>-->
            </div>
            <!--    <days-place-component  v-for="lo in parseInt(location.days)" :key="lo" :place="place" :day="lo"></days-place-component>-->

        </div>

    </li>

    <!--@click="remove"-->
</template>


<script>
    import DaysPlaceComponent from '../cruds/daysplaces'

    export default{

        data(){
            return{
                tour:[],
                days:[],
                objj:{},
                temp:{},
             //   temp:[{'id':1,'title':'place 1'},{'id':2,'title':'place 2'}],
                e:1,
                localplace:{},
                hotelselect:[],
                hoteloptions:{},
                non:[],

            }

        },
        watch: {
            'hotels': function(newVal, oldVal) {
                // console.log("watch");
                // console.log('value changed from ' + oldVal + ' to ' + newVal);
                this.hotelset(this.location.id,this.hotels);
            }
        },
created(){
            // alert("hilok");
   //
    console.log(this.itiplace);
 //   console.log(Object.assign({},this.itiplace[this.e]['place']));


},
        computed:{


        },
        methods: {
            checkin(val,day){

                if(typeof val['day-'+day] !== 'undefined'){

                    return val['day-'+day]['place'];
                }
                else {

                    return [{"id":1,
                        "title":"Day at Leisure",
                        "to_time":"",
                        "from_time":"",
                        "remark":""

                    }];
                }

            },
            hotelset(locationid,hotels){

                // alert("hotel set");
                console.log(locationid);
                console.log(hotels);

                if (!this.hotelselect.hasOwnProperty(locationid)){
                    this.hotelselect = {[locationid]: {}};

                }
                if (!this.hotelselect2.hasOwnProperty(locationid)){
                    this.hotelselect2 = {[locationid]: {}};

                }

                if (!_.isEmpty(hotels) && typeof hotels !== 'undefined') {

                    console.log(hotels);
                    console.log("jjjj");
                    var hot = _.cloneDeep(hotels);
                    //  this.hoteloptions={[locationid]:hot};
                    console.log(hot);
                    //
                    this.hoteloptions = {[locationid]: hot};
                    // this.hoteloptions=Object.assign(this.hoteloptions,{[locationid]:hot});
                    // this.hoteloptions=Object.assign({},this.hoteloptions);


                }
                else if (typeof hotels !== 'undefined' && _.isEmpty(this.hoteloptions[locationid])) {
                    console.log("kkkk");
                    var hot = _.cloneDeep(hotels);
                    this.hoteloptions = {[locationid]: hot};
                }
                console.log(this.hoteloptions);
                console.log("iii");
            },


            preselect(a,b,locationid,place){
               // alert("me1");
                if(_.isEmpty(this.localplace) && typeof place !== 'undefined'){
                    // alert("test");
                    var pla=_.cloneDeep(place);
                    this.localplace[locationid]={[a]:pla};
//var arr=_.clone(place);
                    // this.localplace[locationid][a]=place;
                    console.log("cloned");
                    console.log(this.localplace);
                }
                else if(typeof place !== 'undefined' && _.isEmpty(this.localplace[locationid][a])){

                    var pla=_.cloneDeep(place);
                    this.localplace[locationid]={[a]:pla};
                }

if(typeof b['day-'+a]!== 'undefined'){
    this.days[a]=b['day-'+a]['place'];

}
else {
    this.days[a]=[{"id":1,
        "title":"Day at Leisure",
        "to_time":"",
        "from_time":"",
        "remark":""

    }];
this.allitiplace[locationid]['day-'+a]={ ['place']:[{"id":1,
    "title":"Day at Leisure",
    "to_time":"",
    "from_time":"",
    "remark":""

}]};
}

                return null;
            },


            addtohotel(index,location){
                console.log(this.tour_location[index]);
                console.log(this.hotelselect[location]);
                Object.assign(this.tour_location[index],{["hotel"]:this.hotelselect[location]});


            },

            remove(){
                //  alert('hello');
      //          this.$emit('delete', this.location.id)

            },
            // setday(day)
            // {
            //     this.days=day
            //     console.log(this.days)
            // },
            addtoplaces(day,locationid){
                //      console.log(this.days[day]);
                //    console.log(day);

                //   var obj={'place': this.days[day]};
                // alert("dddddd");

                if( this.allitiplace.hasOwnProperty(locationid)){
                    // alert("up");
                    console.log(this.allitiplace);
                    if(this.allitiplace[locationid].hasOwnProperty('day-'+day)){

                        this.allitiplace[locationid]['day-'+day].place=_.clone(this.days[day])

                        //   console.log(this.days[day]);
                        //      this.objj[locationid][day].place=[];
                        //
                        //        this.$set(this.objj[locationid][day], 'place', this.days[day]);
                        console.log(this.allitiplace);
                    }
                    else{
                        // alert("in else");

                        Object.assign( this.allitiplace[locationid], {['day-'+day]: {'place':_.clone(this.days[day])}})
                        // this.objj[locationid]={
                        //     [day]: {'place':this.days[day]}
                        // }
                        // this.objj[locationid][day].place=[];
                        // this.objj[locationid][day].place=this.days[day]
                    }


                    // this.objj[locationid].push(obj)

                }
                else {
                    // alert("down");
                    //    console.log(obj)

                    // console.log({ [locationid]:obj })
                    //      console.log(newob);
                    this.temp[locationid]={};

                    //  this.objj[locationid].push([day]);
                    this.temp[locationid]['day-'+day]={'place':_.clone(this.days[day])};


                    this.allitiplace = Object.assign(this.allitiplace, this.temp);
                    //this.objj[locationid][day]=[];
                    //   this.objj[locationid][day].place.push(this.days[day])
                    console.log(this.allitiplace)


                }

                //      console.log(this.objj)
                this.$emit('addplace',this.allitiplace)
            }
            // addtoplaces(day,locationid){
            //     //      console.log(this.days[day]);
            //     //    console.log(day);
            //
            //     //   var obj={'place': this.days[day]};
            //
            //
            //     if( this.objj.hasOwnProperty(locationid)){
            //         alert("up");
            //         //   console.log(this.objj);
            //         if(this.objj[locationid].hasOwnProperty(day)){
            //             alert("in if");
            //
            //             this.objj[locationid][day].place=this.days[day]
            //         }
            //         else{
            //             alert("in else");
            //
            //             Object.assign( this.objj[locationid], {[day]: {'place':this.days[day]}})
            //             // this.objj[locationid]={
            //             //     [day]: {'place':this.days[day]}
            //             // }
            //             // this.objj[locationid][day].place=[];
            //             // this.objj[locationid][day].place=this.days[day]
            //         }
            //
            //
            //         // this.objj[locationid].push(obj)
            //
            //     }
            //     else {
            //         alert("down");
            //         //    console.log(obj)
            //
            //         // console.log({ [locationid]:obj })
            //         //      console.log(newob);
            //         this.temp[locationid]={};
            //
            //         //  this.objj[locationid].push([day]);
            //         this.temp[locationid][day]={'place':this.days[day]};
            //
            //
            //         this.objj = Object.assign(this.objj, this.temp);
            //         //this.objj[locationid][day]=[];
            //         //   this.objj[locationid][day].place.push(this.days[day])
            //         console.log(this.objj)
            //
            //
            //     }
            //
            //     //      console.log(this.objj)
            //     this.$emit('addplace',this.objj)
            // }
//             updatedays(){
// //alert('hello');
//                     this.$root.$emit(' dayupdate', this.location.id)
//             },

        },
        // components: {DaysPlaceComponent},

        props: ['location','place','itiplace','allitiplace','hotels','index','tour_location']

    }


</script>

<style>
</style>
