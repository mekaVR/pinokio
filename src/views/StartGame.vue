<template>
<div>
  <HeaderGame></HeaderGame>
  <p>Valentin raconte-nous une histoire qui parle de…</p>
  <p>Abeille</p>
  <button>changer de mot</button>
  <button>Voter</button>
</div>
</template>

<script>
import HeaderGame from "@/components/HeaderGame";

export default {
  name: "start-game",
  components: {
    HeaderGame,
  },
}
</script>