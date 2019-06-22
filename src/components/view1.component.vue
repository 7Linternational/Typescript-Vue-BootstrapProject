<template>
 <section class="container">
	<div>
    	<h2>Hello World #1</h2>
    </div>

    <div class="col-12">
        <div class="btn btn-primary" v-on:click="goToAdd">Go to next!</div>
    </div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { localService } from '../local.service';
import { Todo }  from '../models/todo';
import { httpRequest } from "../API/HTTPRequest";
import { MealCategories } from '../models/MealCategories';


@Component
export default class View1 extends Vue {
  todos: Array<Todo> = [];
  deleteMessage: string = '';
  idToDelete: number = -1;

  mounted() {
    this.init();
  }

  private init() {
    // view init //
    console.log("view has started");
    
    httpRequest.makeAPICall("categories", response => {
      console.log(response);
      
    });
  }

  
  private goToAdd() {
    this.$parent.$router.push('add');
  }
  

}
</script>