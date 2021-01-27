<template>
    <div class="item-group">
        <span class="title">{{title}}</span>
        <div class="item-products">
            <ItemProduct v-for="(item, index) in this.groupItemProducts"
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
        name: 'ItemGroup',
        components: {ItemProduct},
        props: ['title', 'productGroup'],
        computed: {
            ...mapGetters('data', ["DATA"]),
            ...mapGetters('names', ['NAMES']),

            groupItemProducts() {
                return this.DATA.filter(item => item.G == this.productGroup)
            }
        }
    }
</script>

<style scoped lang="scss">
    .item-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px 0;
        overflow: hidden;

        .title {
            display: flex;
            justify-content: center;
            width: 100%;
            background-color: #d2dee2;
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
