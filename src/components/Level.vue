<template>
    <h1>Propose your idea</h1>
<!--    <form>-->
<!--        <div class="form-group">-->
<!--            <label for="formGroupExampleInput">Title</label>-->
<!--            <input v-model="title" type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">-->
<!--        </div>-->
<!--        <div class="form-group">-->
<!--            <label for="formGroupExampleInput2">Description</label>-->
<!--            <input v-model="description" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">-->
<!--        </div>-->
<!--        <button v-on:click="publish" class="btn btn-primary">Publish</button>-->
<!--    </form>-->

</template>

<script>
    import axios from 'axios'

    export default {
        name: "Level",
        methods: {
            publish: function () {
                const proposal = {
                    "Level1Name": "1 Public Safety",
                    "Title": this.title,
                    "Text": this.description
                }
                axios.post("https://blazor1291.azurewebsites.net/sgdata/comment", proposal)
                    .then(
                        response => {
                            console.log(response.data)
                        }
                    )
            }
        },
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

            axios.get('https://blazor1291.azurewebsites.net/sgdata/level').then(response => {
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

</style>