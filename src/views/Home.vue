<template>
  <BudgetDetails/>
  <Levels />
</template>

<script>
import Levels from '@/components/Levels'
import BudgetDetails from "../components/BudgetDetails";


export default {
  name: 'Home',
  components: {
    BudgetDetails,
    Levels
  },
}
</script>
