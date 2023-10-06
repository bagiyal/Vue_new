<template>
    <div>
        <span class="label label-info" v-for="item in JSON.parse(value)">
            {{ item[$root.datatablelocation] }}
        </span>
    </div>
</template>


<script>
export default {
    props: ['value', 'field'],
    data() {
        return {
            // Code...
        }
    },
    created() {
        // Code...
    },
    methods: {
        // Code...
    }
}
</script>


<style scoped>

</style>

