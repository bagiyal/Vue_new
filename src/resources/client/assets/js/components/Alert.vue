<template >

    <div v-if="inmodal">
        <div id="app" v-if="showme">

            <div v-if="message">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" @click="showmef">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>
                                    <div class="modal-body">
                                        <div class="row row-alert" v-if="message">
                                            <div class="col-xs-12">
                                                <div class="alert" :class="'alert-' + color">
                                                    <h4>
                                                        <i class="icon fa fa-check" v-if="color == 'success'"></i>
                                                        <i class="icon fa fa-ban" v-if="color == 'danger'"></i>
                                                        {{ message }}
                                                    </h4>
                                                    <ul v-if="errors">
                                                        <li v-for="(value, key) in errors">
                                                            {{ value[0] }}
                                                        </li>
                                                    </ul>
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


        </div>
    </div>
    <div v-else>
        <div class="row row-alert" v-if="message">
            <div class="col-xs-6">
                <div class="alert" :class="'alert-' + color">
                    <h4>
                        <i class="icon fa fa-check" v-if="color == 'success'"></i>
                        <i class="icon fa fa-ban" v-if="color == 'danger'"></i>
                        {{ message }}
                    </h4>
                    <ul v-if="errors">
                        <li v-for="(value, key) in errors">
                            {{ value[0] }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>





</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            // Code...

        }
    },
    computed: {
        ...mapGetters('Alert', ['message', 'errors', 'color'])
    },
    created() {
        // Code...
    },
    destroyed() {
        this.resetState()
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
        }

    },
    methods: {
        ...mapActions('Alert', ['resetState']),
        showmef(){
            this.showme=false,
                this.$emit('showmechange');
        }
    }
    ,
    props: ['showme','inmodal']

}
</script>


<style scoped>
.row-alert {
    padding: 10px;
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
    vertical-align: middle;
}
</style>
