<template>
    <p class="top-info-collapse">
        <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Expense details
        </a>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
    </div>
</template>

<script>
    export default {
        name: "BudgetDetails"
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

    .top-info-collapse {
        text-align: center;
    }
</style>