<template>
    <div>
      <h1 class="mt-4">
        Welcome to competitor price.
      </h1>
      <p>
        Competitor Price is ordered(low to high), Keyword format: key1,key2,key3... equals to search on StaticICE: "key1 key2 key3"
      </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class Home extends Vue{
}
</script>
