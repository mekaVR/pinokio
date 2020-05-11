import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/views/Home")
    },
    {
      name: "add-players",
      path: "/players",
      component: () => import("@/views/AddPlayers")
    },
    {
      name: "start-game",
      path: "/start",
      component: () => import("@/views/StartGame")
    },
    {
      name: "players-vote",
      path: "/vote",
      component: () => import("@/views/PlayersVote")
    },
    {
      name: "storyteller-vote",
      path: "/storyteller",
      component: () => import("@/views/StorytellerVote")
    },
    {
      name: "results",
      path: "/results",
      component: () => import("@/views/Results")
    },
  ]
});