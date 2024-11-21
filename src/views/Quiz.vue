<template>
    <section class="section flex-center">
        <div class="quiz flex-center" v-if="questions.length > 0">
            <h2>Question {{ currentQuestionIndex + 1 }} / {{ questions.length }}</h2>
            <h3>{{ currentQuestion.question }}</h3>
            <ul class = "flex-center-start">
            <li v-for="(option, index) in currentQuestion.options" :key="index">
                <label>
                <input
                    type="radio"
                    :value="index"
                    v-model="answerSelected"
                    :name="'question-' + currentQuestionIndex"
                />
                {{ option }}
                </label>
            </li>
            </ul>
        </div>
        <div v-else>
            <p>Chargement des questions...</p>
        </div>
        <div class="Arrow">
            <Arrow
            @click="previousQuestion"
            @nextQuestion="nextQuestion"
            />
        </div>
    </section>
    <footer>
        <Footer/>
    </footer>
</template>
  
<script>
import Footer from '@/components/Footer.vue';
import Checkbox from '@/components/Checkbox.vue';
import Arrow from '@/components/Arrow.vue';

export default {
name: "Quiz",
data() {
    return {
    questions: [], // Charger les questions depuis le JSON
    currentQuestionIndex: 0,
    answerSelected: null,
    score: 0,
    };
},
computed: {
    currentQuestion() {
    return this.questions[this.currentQuestionIndex];
    },
},
methods: {
    selectAnswer(index) {
    this.answerSelected = index;
    if (index === this.currentQuestion.correctAnswer) {
        this.score++;
    }
    },
    nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.answerSelected = null;
    } else {
        this.$router.push({ name: "Results", query: { score: this.score } });
    }
    },
},
mounted() {
    fetch("/quiz-finance.json")
    .then((response) => response.json())
    .then((data) => {
        this.questions = data.quiz;
    })
    .catch((error) => console.error("Erreur lors du chargement du quiz :", error));
},
components:{
    Footer, Arrow, Checkbox
}
};
</script>

<style>
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

.flex-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.flex-center-start{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
}

.quiz{
    padding: 1rem;
}

label{
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
}

input[type = "radio"]{
    background-color: blue;
    cursor: pointer;
    padding: 0.5rem;
}
li {
    list-style: none;
    font-size: 1rem;
}

section {
    padding: 2rem;
}

h3{
    font-size: 1.5rem;
    color: #252323;
    text-align: center;
}

</style>
