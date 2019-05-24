<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="goToHome" class="list-item">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="goToFetchData" class="list-item">
          <v-list-tile-action>
            <v-icon>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Data Selector</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="goToDisplayData" class="list-item">
          <v-list-tile-action>
            <v-icon>widgets</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Data Table</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-group prepend-icon="all_inbox" value="true" class="list-item"> 
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Managment</v-list-tile-title>
            </v-list-tile>
          </template>

            <v-list-tile @click="goToManageCompetitors" class="sub-list-item">
              <v-list-tile-title>Manage Competitors</v-list-tile-title>
              <v-list-tile-action>
                <v-icon style="display:flex">people</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="goToManageAssignment" class="sub-list-item">
              <v-list-tile-title>Manage Assignment</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>assignment</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="goToManageMargin" class="sub-list-item">
              <v-list-tile-title>Set Category Margin</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>assessment</v-icon>
              </v-list-tile-action>
            </v-list-tile>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Competitor Price Watcher</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
   
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NavBar from "@/components/Layout/NavBar.vue";
  import SiteHeader from "@/components/Layout/Header.vue";
  import { Component, Prop, Watch} from 'vue-property-decorator';
  import { State } from 'vuex-class';

  import colors from 'vuetify/es5/util/colors';

  @Component
  export default class Layout extends Vue{
    @State height!:number;
    @Prop(String) readonly source!:string;
    drawer:boolean = true;

    $refs!: {
          screen:HTMLFormElement
        }

    goToHome():void{
      this.$router.push("/");
    }
    goToFetchData():void{
      this.$router.push("/fetch-data");
    }
    goToDisplayData():void{
      this.$router.push("/display-data");
    }
    goToManagement():void{
      this.$router.push("/");
    }

    goToManageCompetitors():void{
      this.$router.push("/manage-competitor");
    }
    goToManageAssignment():void{
      this.$router.push("/manage-assignment");
    }
    goToManageMargin():void{
      this.$router.push("/manage-margin");
    }

    getCurrentYear():number{
      return new Date().getFullYear();
    }
  }
</script>
<style scoped>
  .list-item{
    margin-top:10px;
  }

  .sub-list-item{
      padding-left:56px;
    }
</style>