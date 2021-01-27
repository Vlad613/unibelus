<template>
    <div class="all-data">
        <ItemGroup v-for="(item, index) in this.NAMES"
                   :key="index"
                   :title="item.valueOf().G"
                   :productGroup="index"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ItemGroup from "./ItemGroup";

    export default {
        name: 'AllData',
        components: {ItemGroup},
        computed: {
            ...mapGetters('data', ["DATA"]),
            ...mapGetters('names', ['NAMES']),
        },
    }
</script>

<style scoped lang="scss">
    .all-data {
        width: 60%;
        display: flex;
        flex-direction: column;
    }
</style>
