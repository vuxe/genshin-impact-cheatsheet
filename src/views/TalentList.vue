<template>
  <p>Based on your browser, it's {{ timestamp }}.</p>
  <h3>Today, we farm for...</h3>
  <div class="talents">
    <talent v-for="talent in talents" :key="talent.id" :talent="talent" />
  </div>
  <h3>And tomorrow is for...</h3>
  <div class="talents">
    <talent
      v-for="talent in tomorowTalents"
      :key="talent.id"
      :talent="talent"
    />
  </div>
</template>

<script>
// import EventCard from '@/components/EventCard.vue'
// import EventService from '@/services/EventService.js'
import talentService from "@/services/TalentService.js";
import talent from "@/components/TalentCard.vue";
// ~~import axios from 'axios'~~

export default {
  name: "talentList",
  components: {
    talent,
  },
  data() {
    return {
      talents: null,
      tomorowTalents: null,
      timestamp: null,
      day: null,
    };
  },
  created() {
    this.getNow();
    talentService
      .getTodayTalent()
      .then((response) => {
        this.talents = response.data.domains;
      })
      .catch((error) => {
        console.log(error);
      });
    talentService
      .getTomorowTalent()
      .then((response) => {
        this.tomorowTalents = response.data.domains;
      })
      .catch((error) => {
        console.log(error);
      });
    // setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      const day = today.getDay();
      this.day = day;
      this.timestamp = dateTime;
    },
  },
};
</script>

<style scoped>
.talents {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
}
</style>
