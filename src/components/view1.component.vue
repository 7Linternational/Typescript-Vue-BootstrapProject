<template>
  <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
    <section class="inner-container">
      <div class="row">
        <div>
          <h2>Hello World #1</h2>
        </div>

        <div class="col-12">
          <div class="btn btn-primary" v-on:click="goToAdd">Go to next!</div>
        </div>
      </div>
    </section>
  </transition>
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

  private enter(el: any, done: any) {
    TweenMax.fromTo(
      el,
      1,
      {
        
        autoAlpha: 0,
        x:100,
        transformOrigin: "50% 50%"
      },
      {
        delay: 0.6,
        autoAlpha: 1,
        x: 0,
        transformOrigin: "50% 50%",
        ease: Power4.easeOut,
        onComplete: done
      }
    );
  }

  private leave(el: any, done: any) {
    TweenMax.fromTo(
      el,
      0.5,
      {
        
        autoAlpha: 1,
        transformOrigin: "50% 50%"
      },
      {
        autoAlpha: 0,
        x: -100,
        position: "absolute",
	      top: 0,
        ease: Power4.easeOut,
        onComplete: done,
        transformOrigin: "50% 50%"
      }
    );

  
  private goToAdd() {
    this.$parent.$router.push('add');
  }
  

}
</script>