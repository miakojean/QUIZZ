<template>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
  <section class="flex-center">
    <div class="container flex-center" >
      <h1>Bienvenu chez Caladrius Academy</h1>
      <h2>Apprendre la finance des marchés avec des professionnels</h2>
      <p>
        Jeu gratuit mis en ligne par CALADRIUS academy pour vous faire comprendre
        les mécanismes de la finance des marchés et de la finance comportementale.
      </p>
      <p>
        Cliquer sur le boutton ci-dessous pour commencer l'exercice
      </p>
      <div>
        <Button label = "Commencer"/>
      </div>
    </div>
  </section>
  <footer>
    <Footer/>
  </footer>
</template>

<script>
import Button from '@/components/Button.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components:{
    Button, Footer
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

h1{
  font-size: 2.5rem;
  color: #003481;
  text-align: center;
  font-weight: 700;
}

h2{
  font-size: 1.5rem;
  color: #003481;
  text-align: center;
  font-weight: 700;
}

p{
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}

body{
  background: white;
}

.flex-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

section{
  padding: 2rem;
}

</style>
