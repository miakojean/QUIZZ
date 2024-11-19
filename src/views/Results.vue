<template>
<div class="results">
    <h1>Résultats</h1>
    <p>Vous avez obtenu un score de {{ score }} / 10.</p>
    <router-link to="/">
    <button>Rejouer</button>
    </router-link>
</div>
</template>

<script>
export default {
name: "Results",
computed: {
    score() {
    return this.$route.query.score || 0;
    },
},
};
</script>
