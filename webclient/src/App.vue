<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Layout from './layout/Layout.vue';
import { Action } from 'vuex-class';

@Component({
  components:{
    Layout
  }
})
export default class App extends Vue{
  @Action initData!:()=>void;

  mounted(){
    this.initData();
  }
}
</script>

<style lang="scss">

</style>
