<template>
  <BudgetDetails/>
  <Levels />
</template>

<script>
import Levels from '@/components/Levels'
import Navigation from "../components/Navigation";
import BudgetDetails from "../components/BudgetDetails";


export default {
  name: 'Home',
  components: {
    BudgetDetails,
    Navigation,
    Levels
  },
}
</script>
