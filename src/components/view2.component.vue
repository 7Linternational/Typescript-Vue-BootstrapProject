<template>
<section class="container">
	<div>
    	<h2>Hello World #2</h2>
    </div>

    <div class="col-12">
        <div class="btn btn-primary" @click="goBack">Back</div>
    </div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { localService } from '../local.service';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class View2 extends Vue {
	title: string = '';

	private goBack() {
		this.$parent.$router.push('/');
	}
}
</script>