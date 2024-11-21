<template>
<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
<button @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default { 
props:{
    label:{
        type: String,
        Required: true
    }
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

button{
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  background: #003481;
  color: white;
  cursor: pointer;
  transition: 0.4s;
}

button:hover{
    background: #1a69df;
}

</style>
