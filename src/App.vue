<template>
    <div id="app">
        <div class="shop-wrap">
            <AllData/>
            <button class="clear-btn" @click="clearCookies">clear cookies</button>
        </div>
            <AllBasket/>
    </div>
</template>

<script>
    import Cookies from "js-cookie";
    import {mapActions, mapGetters} from 'vuex'
    import AllData from "./components/AllData";
    import AllBasket from "./components/AllBasket";

    export default {
        name: 'App',
        components: {AllData, AllBasket},
        methods: {
            ...mapActions('basket', ["getCookieBasket", "getCookieQuantity", "setCookies"]),

            clearCookies() {
                Cookies.remove('basket'),
                    Cookies.remove('quantity')
            }
        },
        computed: {
            ...mapGetters('basket', ["BASKET", "QUANTITY_BASKET"])
        },
        watch: {
            BASKET() {
                this.setCookies()
            },
            QUANTITY_BASKET() {
                this.setCookies()
            }
        },

        created() {
            if (Cookies.get("basket") != null) {
                this.getCookieBasket(Cookies.getJSON("basket"));
            }
            if (Cookies.get("quantity") != null) {
                this.getCookieQuantity(Cookies.getJSON("quantity"));
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
        max-width: 1600px;
        margin: 0 auto 0 auto;
        display: flex;
        justify-content: space-between;

        .shop-wrap {
            display: flex;
            flex-direction: column;
            width: 60%;
        }

        .clear-btn {
            margin: 20px 0;
            width: 150px;
            height: 50px;
        }
    }
</style>
