<template>
    <div class="top-info">
        <nav class="navbar navbar-light navbar-expand-md">
            <div v-on:click="show = !show" class="container-fluid">
                <img class="align-content-center my-auto" src='~@/assets/svg_white_head.svg' style="width: 50px;">
                <img src='~@/assets/svg_white_budgetingBears_text.svg' style="width: 120px;">
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .top-info {
        background: #264653;
        box-shadow: 0px 0px 7px #264653;
        font-family: Taz;
        color: #ffffff;
        height: 65px;
    }
</style>