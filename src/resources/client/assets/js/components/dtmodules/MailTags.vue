<template>
    <div class="row cursor">
        <div class="col-12 mt-3 mb-n2 text-center">
            <span class="f-2 text-success"> <i class="fa fa-hashtag" aria-hidden="true"></i></span>
        </div>
        <div class="col-12 text-center dropdown mt-n1" id="">
            <span class="f-1-4 text-success">Tags</span>

            <span class="dropdown-toggle f-1-7 text-success" data-toggle="dropdown" @click="remove_class(2)"></span>
            <ul class="dropdown-menu f-1-4 p-2 mt-3 border-0">
                <li><a @click="CopyToClipboard('##customer_name##')" class="text-success">
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                    Customer Name
                </a></li>
                <li class="divider"></li>
                <li><a @click="CopyToClipboard('##customer_number##')" class="text-success">
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                    Customer Number
                </a></li>
                <li class="divider"></li>
                <li><a @click="CopyToClipboard('##handler_name##')" class="text-success">
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                    Hander Name
                </a></li>
                <li class="divider"></li>
                <li><a @click="CopyToClipboard('##handler_number##')" class="text-success">
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                    Hander Number
                </a></li>
                <li class="divider"></li>
                <li><a @click="CopyToClipboard('##agency_name##')" class="text-success">
                    <i class="fa fa-hashtag" aria-hidden="true"></i>
                    Agency Name
                </a></li>

            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MailTags",
        data(){
            return{

            }
        },
        methods: {
            CopyToClipboard(val){
                try{

                    navigator.clipboard.writeText(val)
                        .then(() => {
                            this.$swal.fire({
                                type: 'success',
                                icon: 'success',
                                title: 'Copied To Clipboard',
                                showCloseButton:true,
                                showConfirmButton: false,
                                timer: 1000
                            })
                        })
                        .catch((error) => {
                            console.error("Failed to copy text: ", error);
                        });



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
        }
    }
</script>

<style scoped>

</style>
