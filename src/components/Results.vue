<template>
  <div>
    <h3>Your Answer is:</h3>
    <div class="viewer"> {{result}} </div>

    <div class="animate__animated animate_bounceIn animate__delay-1s">
      <hr />
      <button 
        class="btn"
        @click="startOver"
      >
        Start Over
      </button>

      <button 
        class="btn"
        @click="getResult"
      >
        Decide Again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['result'],
  mounted(){
    this.getResult();
  },
  methods:{
    startOver(){
      this.$emit('startOver');
    },
    getResult(){
      this.$emit('showResult');
    }
  }
}
</script>
