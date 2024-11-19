<template>
<div class="quiz">
    <h2>Question {{ currentQuestionIndex + 1 }} / {{ questions.length }}</h2>
    <p>{{ currentQuestion.question }}</p>
    <ul>
    <li
        v-for="(option, index) in currentQuestion.options"
        :key="index"
        @click="selectAnswer(index)"
    >
        {{ option }}
    </li>
    </ul>
    <button @click="nextQuestion" :disabled="!answerSelected">Suivant</button>
</div>
</template>
  
<script>
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
};
</script>
