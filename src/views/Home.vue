<template>
  <div>
    <HeaderHome></HeaderHome>
    <SectionHome></SectionHome>
    <FooterHome></FooterHome>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome";
import FooterHome from "@/components/FooterHome";
import SectionHome from "@/components/SectionHome";

export default {
  name: "home",
  components: {
    HeaderHome,
    FooterHome,
    SectionHome,
  }
}
</script>

<style lang="stylus">

</style>