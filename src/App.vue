<template>
    <div id="app">
        <AllData/>
        <AllBasket/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import AllData from "./components/AllData";
    import AllBasket from "./components/AllBasket";

    export default {
        name: 'App',
        components: {AllData, AllBasket},
        methods:{
            ...mapActions('exchange', ["changeCurse"])
        },
        created() {
            this.changeCurse()
        },
        beforeDestroy() {
            this.changeCurse()
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
    }
</style>
