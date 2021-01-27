<template>
    <div :class="['item-product', {'item-product-2':activeStyle}]">
        <div class="title-block">
            <div class="title">
                {{NAMES[item.G].B[item.T].N}} ({{itemLeft}})
            </div>
            <div class="btns">
                <button @click="addToBasket(item)">+</button>
                <button @click="removeFromBasket(item)">-</button>
            </div>
        </div>
        <div :class="['price',  {'price-2':activeStyle}]">
            <span :class="['value',{'value-dawn' : CURSE_UP==='up' }, {'value-up' : CURSE_UP==='dawn' }]">{{Number(Math.round((item.C * CURSE)+'e'+2)+'e-'+2)}}</span><span> BYN</span>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'ItemProduct',
        props: ['item', 'activeStyle'],
        computed: {
            ...mapGetters('names', ['NAMES']),
            ...mapGetters('basket', ["QUANTITY_BASKET", "BASKET"]),
            ...mapGetters('exchange', ["CURSE", "CURSE_UP"]),
            itemLeft() {
                let i = this.QUANTITY_BASKET[this.BASKET.indexOf(this.item)] !== undefined ?
                    this.QUANTITY_BASKET[this.BASKET.indexOf(this.item)]
                    :
                    0;
                return this.item.P - i
            }
        },
        methods: {
            ...mapActions('basket', ['addToBasket', 'removeFromBasket']),
        }
    }
</script>

<style lang="scss" scoped>
    .item-product {
        width: 100%;
        display: flex;
        background: rgba(24, 161, 11, 0.19);

        .title-block {
            width: 75%;
            display: flex;
            justify-content: space-between;
            padding: 10px 10px 10px 20px;

            .btns {
                display: flex;

                button {
                    width: 25px;
                    height: 26px;
                }
            }
        }

        .price {
            width: 25%;
            background-color: #f3f3f3;
            display: flex;
            span{
                font-size: 24px;
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .value-up{
                color: green;
            }
            .value-dawn{
                color: red;
            }

        }

        .price-2 {
            background-color: rgba(243, 243, 243, 0.54);
        }
    }

    .item-product-2 {
        background: rgba(12, 72, 6, 0.19);
    }
</style>
