<template>
    <div class="all-basket">
        <span class="title">Корзина</span>
        <ItemProductBasket v-for="(item, index) in this.BASKET"
                           :key="index"
                           :item="item"
                           :activeStyle="(index % 2) == 0? false : true"/>
        <span class="AllPrice">
              Общая стоимость: {{Number(Math.round((allPrice)+'e'+2)+'e-'+2)}} BYN
</span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ItemProductBasket from "./ItemProductBasket";

    export default {
        name: 'AllBasket',
        components: {ItemProductBasket},
        computed: {
            ...mapGetters('data', ["DATA"]),
            ...mapGetters('basket', ["BASKET", "QUANTITY_BASKET"]),

            allPrice() {
                let allPriceStart = 0;
                for (let i = 0; i < this.BASKET.length; i++) {
                    allPriceStart = allPriceStart + (this.BASKET[i].C * this.QUANTITY_BASKET[i])
                }
                return allPriceStart
            }
        },
    }
</script>

<style scoped lang="scss">
    .all-basket {
        position: sticky;
        width: 39%;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        overflow: hidden;
        min-height: 25px;
        height: max-content;

        .title {
            text-align: center;
            background-color: #c3e2ad;
            border-bottom: 1px solid black;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
        }

        .AllPrice {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
