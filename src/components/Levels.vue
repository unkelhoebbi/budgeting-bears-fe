<template>
    <div>
        <div class="col-12" v-for="item in levels" v-bind:key="item.level1Name">
            <div class="level" :style="{'background-color': item.color}">
                <router-link class="level-item-name" :to="{ name: 'Level-details', params: { id: item.postId }}">{{ item.level1Name }}</router-link>
                <div class="percentage" :style="{'width': item.ratio}"></div>
            </div>
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
                levels: []
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
                let options = {style: "currency", currency: "CHF"}

                let api_levels = response.data

                const max = api_levels.reduce(
                    (max, item) => (item.cost2019 > max ? item.cost2019 : max),
                    api_levels[0].cost2019
                );

                console.log(max)

                let counter = 0
                this.levels = api_levels
                    .sort(function (a, b) {
                        return b.cost2019 - a.cost2019
                    })
                    .map(function (item) {
                        item.color = colors[counter++]
                        if (item.postId == '2c10973b-5709-441d-2562-08d8eb33da43') {
                            item.level1Name = '0 citizenship, authorities'
                        }
                        let ratio = parseFloat(item.cost2019) / parseFloat(max) * 100
                        item.cost2019 = Intl.NumberFormat("de-CH", options).format(item.cost2019)
                        item.ratio = ratio.toString() + '%'
                        return item
                    })
            })
        }
    }
</script>

<style scoped>
    .percentage {
        border-radius: 6px;
        border-width: 0px;
        border-style: none;
        text-align: right;
        font-family: Taz;
        height: 10px;
        background: rgba(255, 255, 255, 0.32);
    }

    .level {
        width: 90%;
        margin-right: 4%;
        margin-left: 5%;
        margin-top: 3%;
        border-radius: 6px;
        border-width: 0px;
        border-style: none;
        text-align: right;
        font-family: Taz;
        height: 65px;
        background: #327454;
        box-shadow: 0px 0px 7px #347857;
        text-align: left;
        line-height: 35px;
    }

    .level-item-name {
        color: white;
        font-family: Taz;
        font-weight: bold;
        font-size: 20px;
        line-height: 55px;
        padding-left: 15px;
    }

</style>