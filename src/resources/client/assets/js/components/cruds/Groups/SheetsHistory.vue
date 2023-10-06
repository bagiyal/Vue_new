<template>
    <div class="row d-flex justify-content-center container">
        <div class="col-md-6">
            <div class="card-hover-shadow-2x mb-3 card">
                <div class="scroll-area-sm">
                    <perfect-scrollbar class="ps-show-limits">
                        <div style="position: static;" class="ps ps--active-y">
                            <div class="ps-content">
                                <ul class=" list-group list-group-flush">
                                    <li class="list-group-item " v-for="(sheet,index) in data">
                                       <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading f-1-6">
                                                        Excel File : {{index+1}}
                                                        <!--0:Pending,1:Uploaded All Members, 2:Rejected,3:Insufficient balance,4:Error in some members-->
                                                        <div :class="sheet.status==1?'badge-success':'badge-danger'" class="badge  ml-2">{{sheet.status==0?'Pending':sheet.status==1?'Uploaded':sheet.status==2?'Rejected':sheet.status==3?'Insufficient Balance':'Error In Some PAX'}}</div>
                                                    </div>
                                                    <div class="widget-subheading text-left f-1-4"><i>{{sheet.status==1?sheet.total_members:sheet.last_index}}/{{sheet.total_members}}</i></div>
                                                </div>
                                                <div class="widget-content-right" title="Download Excel File">
<!--                                                    <button class="border-0 btn-transition btn btn-outline-success f-1-4 ">-->
<!--                                                        <i class="fa fa-download"></i>-->
<!--                                                    </button>-->
                                                    <a type="button"
                                                       :href="sheet.url"
                                                       download
                                                       class="border-0 btn-transition btn btn-outline-success f-1-4 fa fa-download"
                                                    />


                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </perfect-scrollbar>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SheetsHistory",
        props:['data'],
    }
</script>

<style scoped>

    .card {
        box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
        border-width: 0;
        transition: all .2s;
    }

    .card-header:first-child {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    .widget-subheading{
        color: #858a8e;
        font-size: 12px;
    }
    .card-header.card-header-tab .card-header-title {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .card-header .header-icon {
        font-size: 1.65rem;
        margin-right: 0.625rem;
    }

    .card-header.card-header-tab .card-header-title {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }



    .list-group-item {
        position: relative;
        display: block;
        padding: 0.75rem 1.25rem;
        margin-bottom: -1px;
        /*background-color: #fff;*/
        border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .list-group {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
    }

    .todo-indicator {
        position: absolute;
        width: 4px;
        height: 60%;
        border-radius: 0.3rem;
        left: 0.625rem;
        top: 20%;
        opacity: .6;
        transition: opacity .2s;
    }

    .bg-warning {
        background-color: #f7b924 !important;
    }

    .widget-content {
        padding: 1rem;
        flex-direction: row;
        align-items: center;
    }

    .widget-content .widget-content-wrapper {
        display: flex;
        flex: 1;
        position: relative;
        align-items: center;
    }

    .widget-content .widget-content-right.widget-content-actions {
        visibility: hidden;
        opacity: 0;
        transition: opacity .2s;
    }

    .widget-content .widget-content-right {
        margin-left: auto;
    }

    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .btn {
        position: relative;
        transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    }

    .btn-outline-success {
        color: #3ac47d;
        border-color: #3ac47d;
    }

    .btn-outline-success:hover {
        /*color: #fff;*/
        background-color: #3ac47d;
        border-color: #3ac47d;
        color: #fff ;
    }

    .btn-outline-success:hover {
        /*color: #fff;*/
        background-color: #3ac47d;
        border-color: #3ac47d;
    }

    .btn {
        position: relative;
        transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
        outline: none !important;
    }

</style>
