<template>
  <div>
    <HeaderGame></HeaderGame>
    <p>Résultats</p>
    <p>Cette histoire était vrai !</p>
    <ul>
      <li>Thibault</li>
      <li>Lucie</li>
      <li>Benoit</li>
      <li>Herbert</li>
      <li>Robin</li>
    </ul>
    <button>Tirer un nouveau mot</button>
  </div>
</template>

<script>
import HeaderGame from "@/components/HeaderGame";

export default {
  name: "results",
  components: {
    HeaderGame,
  },
}
</script>