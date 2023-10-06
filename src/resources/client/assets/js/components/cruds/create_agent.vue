<template>

    <section class="content-wrapper" style="margin-left: 5% !important;min-height: 960px;;font-family: Open Sans">

        <section class="content-header">
            <task-maker :mode="'full'"></task-maker>
            <rotate-square2 v-if="loading"  :background="'#007bff'" :color="'#007bff'"></rotate-square2>
            <h1 style="margin-left: 50px">Create Agent</h1>

        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box box_design">

                            <div class="box-body">
                                <div class="form-group col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="name">Agent Name *</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="name"
                                                placeholder="Enter Name *"
                                                :value="item.name"
                                                @input="updateName"
                                            >

                                        </div>
                                        <div class="col-md-6">
                                            <label for="email">Agent Email *</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                name="email"
                                                placeholder="Enter Email *"
                                                :value="item.email"
                                                @input="updateEmail"
                                            >

                                        </div>
                                        <div class="col-md-6 mt-5">
                                            <label for="password">Password *</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                name="password"
                                                placeholder="Enter Password *"
                                                @input="updatePassword"
                                            >

                                        </div>
                                        <div class="col-md-6 mt-5">
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
                                        <div class="col-md-12 mt-5">
                                            <label for="address">Address</label>

                                            <vue-ckeditor
                                                :value="item.address"
                                                @input="updateAddress"
                                            />

                                        </div>



                                    </div>
                                </div>

                            </div>

                                <a class="button-css" style="color: white;" @click="submitForm">
                                    Save
                                </a>


                        </div>
                    </form>
                </div>
            </div>





        </section>
    </section>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
    import UsersSingle from "../../store/modules/Users/single.js";


    export default {
        data() {
            return {
                role:[],
                agency_id:'',
                agency_name:'',

            }
        },
        computed: {

            ...mapGetters('UsersSingle', ['item', 'loading', 'rolesAll','agencyAll','meta'])
        },

        created() {
        // approve agent
        this.item.approved = true;
        // fetch roles
            this.fetchRolesAll();
        //company
            var name=document.querySelector("meta[name='user-name']").getAttribute('content');
            var id=document.querySelector("meta[name='user-id']").getAttribute('content');
            this.agency_id=id;
            this.agency_name=name;
            var company={id:id,name:name};
            this.updateCompany(company);

        },

        destroyed() {

        },
        watch:{
        "rolesAll":function () {
            this.rolesAll.forEach( (data) =>{
                if(data.title==='lms_agent'){

                    this.role.push(data);
                    this.updateRole(this.role);
                }
            })
        },


        },
        methods: {
            ...mapActions('UsersSingle', ['storeData', 'resetState', 'setName', 'setEmail', 'setPassword', 'setRole', 'setApproved', 'setTeam', 'setAddress', 'setPhone', 'setCompany','fetchRolesAll','fetchAgencyAll']),
            updateName(e) {
                this.setName(e.target.value)
            },
            updateEmail(e) {
                this.setEmail(e.target.value)
            },
            updatePassword(e) {
                this.setPassword(e.target.value)
            },
            updateRole(value) {
                this.setRole(value)
            },
            updateApproved(e) {
                this.setApproved(e.target.checked)
            },
            updateAddress(e) {
                this.setAddress(e)
            },
            updatePhone(e) {
                this.setPhone(e.target.value)
            },
            updateCompany(e) {
                this.setCompany(e)
            },
            submitForm() {
                var return_arr=[
                    {
                        name:this.item.name,
                        email:this.item.email,
                        phone:this.item.phone,
                        agency_name:this.agency_name,
                        agency_id:this.agency_id,
                        address:this.item.address,
                        password:this.item.password,


                    }
                ]
                let form = new FormData();
                form.set('approval',2);
                form.set('data', JSON.stringify(return_arr));
                axios.post('/api/webservices/approve_agents', form)
                    .then(response => {
                        this.$router.push({ name: 'users.index' })
                        this.$eventHub.$emit('create-success')

                    })
                    .catch((error) => {
                        alert(error);
                    })



            }


        },
        components: {}
    }
</script>


<style scoped>
    .arrange_edit-add-task{
        position: relative;
        top: -122px;
        right: -4px;
    }
    @media screen and (min-width: 1200px) and (max-width: 1300px){
        .arrange_edit-add-task{
            position: relative;

            right: -13px;
        }
    }
    @media screen and (min-width: 1900px){
        .arrange_edit-add-task{
            position: relative;

            right: -20px;
        }
    }
    .custom_label{
        font-size: 17px;
        color: gray;
        font-weight: bolder;
    }
    .custom_label2{
        font-size: 15px;
        color: gray;
        font-weight: 400;
        -webkit-margin-bottom:10px !important;
    }
    th{
        font-size: 15px;
    }




</style>
