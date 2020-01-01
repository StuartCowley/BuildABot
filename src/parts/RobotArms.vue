<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in parts.arms" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
    <router-link to="/parts/browse"> back </router-link>
  </div>
</template>

<script>
import GetPartsMixin from './get-parts-mixin'
// import parts from '../data/parts';

export default {
  name: 'RobotArms',
  mixins: [GetPartsMixin]
};
</script>