<template>
  <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
    <section class="inner-container">
      <div class="row">
        <div>
          <h2>Hello World #2</h2>
        </div>

        <div class="col-12">
          <div class="btn btn-primary" @click="goBack">Back</div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { localService } from "../local.service";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { TweenMax } from "gsap";
import gsap from "gsap";

@Component
export default class View2 extends Vue {
  title: string = "";

  private goBack() {
    this.$parent.$router.push("/");
  }

  private enter(el: any, done: any) {
    TweenMax.fromTo(
      el,
      1,
      {
        autoAlpha: 0,
        x: 100,
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
  }
}
</script>