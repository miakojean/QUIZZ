<template>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <div class="Arrow">
        <i class="ri-arrow-left-line" @click="$emit('click')"></i>
        <i class="ri-arrow-right-line" @click="$emit('nextQuestion')"></i>
    </div>
</template>

<script>
export default {
  name: "ArrowControls", // Nom du composant
};

</script>

<style>
.Arrow {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 4rem 0 4rem;
}

i{
    font-size: 2rem;
    font-weight: 700;
    color: #003481;
    cursor: pointer;
}
</style>