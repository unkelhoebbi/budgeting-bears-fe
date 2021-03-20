<template>
    <BudgetDetails/>
    <router-view/>
</template>
<script>
    import BudgetDetails from "./components/BudgetDetails";
    export default {
        components: {
            BudgetDetails
        }
    }
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    @font-face {
        font-family: "Taz";
        src: local("Taz"),
        url("/src/assets/Taz.ttf") format("truetype");
    }
</style>
