/**
* Created by Linfeng Li on 02/10/21
* University of Illinois at Chicago
*/

<template>
  <b-navbar :type="this.color" :variant="this.color">
    <b-navbar-nav>

      <b-nav-item href="/#/" exact>Home</b-nav-item>
      <b-nav-item href="/#/tables" exact>Tables</b-nav-item>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Color" right>
        <b-dropdown-item @click="changeColor('dark')">Dark</b-dropdown-item>
        <b-dropdown-item @click="changeColor('light')">Light</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex';
export default {
  name: "Navbar",
  methods: {
    changeColor() {
      sessionStorage.setItem('color',
          sessionStorage.getItem('color') === "dark" ? "light" : "dark");
      this.color = sessionStorage.getItem('color');
    }
  },
  data() {
    return {
      color: sessionStorage.getItem('color'),
    }
  }
}
</script>

<style scoped>

</style>