<template>
    <h1>Propose your idea</h1>
    <form>
        <div class="form-group">
            <label for="formGroupExampleInput">Title</label>
            <input v-model="title" type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Description</label>
            <input v-model="description" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
        </div>
        <button v-on:click="publish" class="btn btn-primary">Publish</button>
    </form>
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
        }

    }
</script>

<style scoped>

</style>