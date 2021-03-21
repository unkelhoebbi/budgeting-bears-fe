<template>
    <h1 class="level-title">{{levelTitle}}</h1>
    <p class="intro">Spatial planning systems refer to the methods and approaches used by the public and private sector to influence the distribution of people and activities in spaces of various scales.</p>
    <p class="propose-show-text top-info-collapse">
        <a class="proposal-text" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Tell us your idea
        </a>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <input v-model="title" type="text" class="form-control" id="formGroupExampleInput"
                           placeholder="Legalize it">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button v-on:click="publish" class="proposal-btn btn btn-primary">Send prompt</button>
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
                    "Level1Name": "7 Environment and spatial planning",
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
            let id = 'd4766d95-6523-422c-2569-08d8eb33da43'

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
        text-align: left;
        font-size: 32px;
        margin-top: 30px;
        margin-left: 15px;
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
        background: #264653;
    }

    .propose-show-text {
        text-align: left;
        height: 65px;
        padding-top: 15px;
        margin-left: 15px;
    }

    .collapse {
        margin-bottom: 25px;
    }

    .proposal-text {
        color: white;
        background: #264653;
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
    }

    .intro {
        margin-left: 15px;
        margin-right: 15px;
    }
</style>