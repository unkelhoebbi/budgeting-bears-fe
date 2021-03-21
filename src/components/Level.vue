<template>
    <h1 class="level-title">{{levelTitle}}</h1>
    <p class="top-info-collapse">
        <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Propose your idea
        </a>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <input v-model="title" type="text" class="form-control" id="formGroupExampleInput"
                           placeholder="Example input">
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    <input v-model="description" type="text" class="form-control" id="formGroupExampleInput2"
                           placeholder="Another input">
                </div>
                <button v-on:click="publish" class="proposal-btn btn btn-primary">Publish</button>
            </form>
        </div>
    </div>

    <section class="testimonials-clean">
        <div class="container">
            <div class="row people proposal" v-for="proposal in proposals" v-bind:key="proposal.commentId">
                <div class="col-10">
                    <div class="box">
                        <p class="proposal-title">{{proposal.title}}</p>
                    </div>
                    <div class="box">
                        <p class="proposal-description">{{proposal.text}}</p>
                    </div>
                </div>
                <div class="col-2 icon-col">
                    <button class="endorse" v-on:click="add(proposal)">
                        <img v-if="!proposal.hasLike" class="icon" src='~@/assets/rocket_blue.svg'/>
                        <img v-if="proposal.hasLike" class="icon" src='~@/assets/rocket_orange.svg'/>
                    </button>
                    {{proposal.count}}
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "Level",
        data() {
            return {
                proposals: [],
                levelTitle: 'Environment and spatial planning',
                isHidden: true,
            }
        },
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
                            console.log(response)
                        }
                    )
            },
            add: function (proposal) {
                if (proposal.hasLike) {
                    proposal.count--
                } else {
                    proposal.count++
                }
                proposal.hasLike = !proposal.hasLike
            }
        },
        mounted() {
            let id = '1eaf7d6f-bff8-4b46-2563-08d8eb33da43'

            axios.get('https://blazor1291.azurewebsites.net/sgdata/level/' + id).then(response => {
                console.log(response.data.comments)
                this.proposals = response.data.comments.map(function (comment) {
                    comment.hasLike = false
                    comment.count = Math.round(Math.random() * 10000)
                    return comment
                })
            })
        }

    }
</script>
<style scoped>
    .proposal {
        background: #eef4f7;
        width: 100%;
        margin-left: 0px;
        margin-bottom: 15px;
        border-radius: 5px;
        padding-top: 20px;
        padding-bottom: 10px;
        padding-left: 5px;
    }

    .proposal-title {
        font-size: 20px;
    }

    .proposal-description {
        font-size: 16px;
    }

    .level-title {
        text-align: center;
    }

    .icon {
        width: 25px;
        color: blue;
        float: right;
    }

    .icon-col {
        padding-top: 10px;
    }

    .endorse {
        border: none;
        background: transparent;
    }

    .proposal-btn {
        background: #263653;
    }

    .propose-show-text {
        text-align: center;
    }
</style>