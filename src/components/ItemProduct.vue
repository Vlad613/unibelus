<template>
    <div :class="['item-product', {'item-product-2':activeStyle}, {'item-product-in-basket':inBasket}]">
        <div class="title-block">
            <div class="title">
                    <span style="font-size: 20px">{{item.B}}</span>
                    <span>Осталось: {{itemLeft}} шт.</span>
            </div>
            <div class="btns">
                <span style="margin-right: 10px"
                v-show="inBasket">Добавлен</span>
                <button  @click="addToBasket(item)">+</button>
                <button  @click="removeFromBasket(item)">-</button>
            </div>
        </div>
        <div :class="['price', {'price-2':activeStyle}]">
            <span>{{item.C}}</span><span> BYN</span>
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'ItemProduct',
        props: ['item', 'activeStyle'],
        computed: {
            ...mapGetters('basket', ["QUANTITY_BASKET", "BASKET"]),
            itemLeft() {
                let i = this.QUANTITY_BASKET[this.BASKET.findIndex(x=>x.T === this.item.T)] !== undefined ?
                    this.QUANTITY_BASKET[this.BASKET.findIndex(x=>x.T === this.item.T)]
                    :
                    0;
                return this.item.P - i
            },
            inBasket(){
                return (this.QUANTITY_BASKET[this.BASKET.findIndex(x=>x.T === this.item.T)] !== undefined
                    && this.QUANTITY_BASKET[this.BASKET.findIndex(x=>x.T === this.item.T)] > 0)

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
        background: rgba(33, 92, 99, 0.19);

        .title-block {
            width: 75%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px 10px 20px;

            .title{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                min-height: 40px;
            }

            .btns {
                display: flex;
                margin-left: 20px;

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

            span {
                font-size: 24px;
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .price-2 {
            background-color: rgba(243, 243, 243, 0.54);
        }
    }

    .item-product-2 {
        background: rgba(12, 72, 6, 0.19);
    }
    .item-product-in-basket {
        background-color: rgba(26, 162, 68, 0.95);
    }
</style>
