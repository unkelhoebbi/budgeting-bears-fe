<template>
    <div>
        <div v-for="item in levels" v-bind:key="item.level1Name">
            <router-link to="/level" class="btn btn-primary level-item" :style="{'background-color': item.color}">{{ item.level1Name }}</router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Levels",
        props: {
            gregi: String
        },
        data() {
            return {
                levels: [],

            }
        },
        // Life cycle hook that calls axios
        mounted() {
            let colors = [
                '#264653',
                '#2b5e5f',
                '#347857',
                '#388440',
                '#579d3f',
                '#77a943',
                '#9cb646',
                '#c2bf49',
                '#cea94c',
                '#db8f4f',
            ]
            axios.get('https://blazor1291.azurewebsites.net/sgdata').then(response => {
                console.log(response.data)
                let api_levels = response.data
                let counter = 0
                this.levels = api_levels.map(function (item) {
                    item.color = colors[counter++]
                    return item
                })
            })
        }
    }
</script>

<style scoped>
    .level-item {
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
        margin-top: 5%;
        border-radius: 6px;
        border-width: 0px;
        border-style: none;
        height: 65px;
        text-align: left;
        font-family: Taz;
    }
</style>