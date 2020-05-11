<template>
  <div>
    <HeaderGame></HeaderGame>
    <p>Ajoutez des joueurs</p>
    <input type="text" name="players" id="players">
    <input type="button" name="add" id="add">
    <div>
      <p>Liste des joueurs</p>
    </div>
    <div>
      <button>commencer la partie</button>
    </div>
  </div>
</template>

<script>
import HeaderGame from "@/components/HeaderGame";

export default {
  name: "AddPlayers",
  components: {
    HeaderGame,
  },
}
</script>