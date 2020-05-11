<template>
 <div>
   <HeaderGame></HeaderGame>
   <p>C’est l’heure de voter !</p>
   <p>Lucile, est-ce que tu penses que cette histoire est</p>
   <button>vraie</button>
   <button>fausse</button>
   <button>Oups, revenir en arriere</button>
   <button>valider</button>
 </div>
</template>

<script>
import HeaderGame from "@/components/HeaderGame";

export default {
  name: "players-vote",
  components: {
    HeaderGame,
  }
}
</script>