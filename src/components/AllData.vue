<template>
    <div class="all-data">
        <div class="item-products">
            <span class="title">Товары</span>
            <ItemProduct v-for="(item, index) in this.DATA"
                         :key="index"
                         :item="item"
                         :activeStyle="(index % 2) == 0? false : true"/>

        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ItemProduct from "./ItemProduct";

    export default {
        name: 'AllData',
        components: {ItemProduct},
        computed: {
            ...mapGetters('data', ["DATA"]),
        },
    }
</script>

<style scoped lang="scss">
    .all-data {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid black;
        overflow: hidden;

        .title {
            display: flex;
            justify-content: center;
            width: 100%;
            background-color: #c3e2ad;
            border-bottom: 1px solid black;
            color: #444444;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
        }

        .item-products {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
</style>
