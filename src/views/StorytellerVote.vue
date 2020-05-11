<template>
  <div>
    <HeaderGame></HeaderGame>
    <p>C’est l’heure de voter !</p>
    <p>Valentin, toi qui connais la vérité. Cette histoire est</p>
   <button>vraie</button>
   <button>fausse</button>
   <button>valider</button>
  </div>
</template>

<script>
import HeaderGame from "@/components/HeaderGame";

export default {
  name: "storyteller",
    components: {
    HeaderGame,
  }
}
</script>