<template>
  <div class="container">
    <transition name="fade" appear mode="out-in">
    
      <component 
        :is="screens[position]"
        :question="question"
        :result="result"
        @goto="handleGoTo"
        @question="handleQuestion"
        @showResult="showResult"
        @startOver="startOver"
        @handleToast="handleToast"
      />
    </transition>
  </div>
  
</template>

<script>
import Initial from './components/Initial.vue';
import Confirm from './components/Confirm.vue';
import Results from './components/Results.vue'

export default {
  components: {Initial, Confirm, Results},
  data(){
    return {
      list:['Yes','No','Maybe','Not sure...Try again','Ask a Friend','Call the Police'],
      screens: ['Initial','Confirm','Results'],
      position: 0,
      question:'',
      result: ''
    }
  },
  methods:{
    /*handleToast(values){
      this.$toast.show(values.message,{
        type:values.type,
        position: "top",
        duration:2000,
        pauseOnHover: false
      })
    },*/
    handleGoTo(position){
      this.position = position;

    },
    handleQuestion(question){
      this.question = question;
    },
    getRandomValue(){
      return this.list[Math.floor(Math.random() * this.list.length)];
    },
    generateResult(){
      let rand = this.getRandomValue();
      if(this.result !== ''){
        while(rand === this.result){
          rand = this.getRandomValue();
        }
      }
      this.result = rand;
    },
    showResult(){
      this.generateResult();
    },
    startOver(){
      this.position = 0;
      this.question = '';
      this.result = ''
    }
  }
}

</script>

<style>
  @import './assets/styles.css';
  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active{
    transition: 0.5s;
  }

  .fade-enter-to{
    opacity: 1;
  }

  .fade-leave-from{
    opacity: 1;
  }
  .fade-leave-active{
    transition: 0.5s;
  }

  .fade-leave-to{
    opacity: 0;
  }
</style>
