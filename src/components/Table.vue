/**
* Created by Linfeng Li on 02/10/21
* University of Illinois at Chicago
*/

<template>
  <div>
    <div v-if="this.state" class="table-holder">
      <b-table striped hover :items="this.getItems" class="table">

        <template #cell(Delete)="data">
          <b-button pill variant="danger" @click="deleteNumber(data.index)">
            delete
          </b-button>
        </template>

        <template #cell(Regenerate)="data">
          <b-button pill variant="outline-primary" @click="changeNumber(data.index)">
            Regenerate
          </b-button>
        </template>
      </b-table>

      <b-button pill variant="outline-primary" @click="addNumber">
        Add new row
      </b-button>
    </div>
    <div v-else>
      <b-alert variant="danger" :show="5" @dismissed="redirect">
        you are not authorized, redirecting to homepage after 5 seconds
      </b-alert>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Table",
  methods: {
    ...mapActions([
      "addNumber",
      "deleteNumber",
      "changeNumber"
    ]),
    redirect() {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['getItems']),
  },
  data() {
    return {
      state: sessionStorage.getItem('state') === "true",
    }
  },

}
</script>

<style scoped>
.table-holder {
  width: 800px;
  margin: 40px auto;
}

.table {

}
</style>