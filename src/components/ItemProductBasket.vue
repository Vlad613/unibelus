<template>
    <div :class="['item-product', {'item-product-2':activeStyle}]">
        <div class="item-wrap">
            <div class="title-block">
                <div class="title">
                    {{NAMES[item.G].B[item.T].N}}
                </div>
                <div class="quantity">
                    <input type="number" v-model="itemData"><span> шт.</span>
                </div>
            </div>
            <div :class="['price',  {'price-2':activeStyle}]">
               <span>{{Number(Math.round((item.C * CURSE)+'e'+2)+'e-'+2)}}</span> <span>BYN</span>
            </div>
        </div>
        <div class="err" v-if="err">
            Столько товара нет в наличии!
        </div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'ItemProductBasket',
        props: ['item', 'activeStyle'],
        data() {
            return {
                err: false
            }
        },

        computed: {
            ...mapGetters('names', ['NAMES']),
            ...mapGetters('basket', ["BASKET", "QUANTITY_BASKET"]),
            ...mapGetters('exchange', ["CURSE"]),

            itemData: {
                get() {
                    return this.QUANTITY_BASKET[this.BASKET.indexOf(this.item)]
                },
                set(value) {
                    let data = {
                        value: Number(value),
                        item: this.item
                    };
                    data.item.P < data.value ?
                        this.err = true
                        :
                        (this.err = false,
                            this.inputToBasket(data))
                }
            }
        },
        methods: {
            ...mapActions('basket', ["inputToBasket"]),
        }
    }
</script>

<style lang="scss" scoped>
    .item-product {
        width: 100%;
        display: flex;
        background: rgba(24, 161, 11, 0.19);
       flex-direction: column;

        .item-wrap{
            width: 100%;
            display: flex;
            justify-content: space-between;

        }

        .title-block {
            display: flex;
            justify-content: space-between;
            width: 75%;
            padding: 10px 10px 10px 20px;

            .title {
                width: calc(100% - 60px);
            }

            .quantity {
                width: 60px;

                input {
                    width: 24px;
                    height: 24px;
                    text-align: center;
                }
            }
        }

        .price {
            width: 25%;
            background-color: #f3f3f3;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            span{
                width: 50%;
                text-align: center;
            }
        }

        .price-2 {
            background-color: rgba(243, 243, 243, 0.54);
        }
        .err{
            text-align: center;
            color: rgba(214, 0, 0, 0.62);
        }
    }

    .item-product-2 {
        background: rgba(12, 72, 6, 0.19);
    }
</style>
