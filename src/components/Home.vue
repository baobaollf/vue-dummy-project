/**
* Created by Linfeng Li on 02/10/21
* University of Illinois at Chicago
*/

<template>
  <div>
    <h1>
      home
    </h1>

    <b-button @click="changeState" pill variant="outline-primary">
      Authenticate
    </b-button>

    <h3 v-if="this.state">You are authenticated</h3>
    <h3 v-else>You are NOT authenticated</h3>

  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    changeState() {
      sessionStorage.setItem('state',
          sessionStorage.getItem('state') === "true" ? "false" : "true");
      this.state = sessionStorage.getItem('state') === "true"

    }
  },
  data() {
    return {
      state: sessionStorage.getItem('state') === "true",
    }
  }
}
</script>

<style scoped>

</style>