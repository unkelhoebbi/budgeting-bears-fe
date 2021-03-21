<template>
    <Navigation/>
    <router-view/>
</template>
<script>
    import Navigation from "./components/Navigation";
    export default {
        components: {
            Navigation,
        }
    }
</script>
<style>

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
