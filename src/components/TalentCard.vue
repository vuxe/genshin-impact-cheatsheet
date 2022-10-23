<template>
  <div class="talent-card">
    <h4>{{ talent.title }}</h4>
    <p>{{ talent.location }}</p>
    <hr />
    <div class="talent-img-wrapper">
      <div
        class="talent-img"
        v-for="(talentbook, bookIndex) in talent.book"
        :key="bookIndex"
      >
        <img
          :src="'./Item_Philosophies_of_' + talentbook + '.webp'"
          class="img-fluid"
          :key="bookIndex"
          onerror="this.onerror=null; this.src='./abstract-user-flat-3.svg'"
          :alt="talentbook"
        />
        <p>{{ talentbook }}</p>
      </div>
    </div>
    <hr />
    <!-- <ul>
      <li v-for="(character, index) in talent.characters" :key="index">
        {{ character }}
      </li>
    </ul> -->
    <div class="talent-img-wrapper">
      <div
        class="talent-img"
        v-for="(character, charIndex) in talent.characters"
        :key="charIndex"
      >
        <img
          :src="'./UI_AvatarIcon_' + character + '.png'"
          class="img-fluid"
          :key="charIndex"
          onerror="this.onerror=null; this.src='./abstract-user-flat-3.svg'"
          :alt="character"
        />
        <p>{{ character }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    talent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.talent-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

ul {
  text-align: justify;
}

.talent-img-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.talent-img {
  flex: 1 0 21%;
  margin: 5px;
  /* height: 100px; */
  /* background-color: blue; */
}

.img-fluid {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: cover;
  max-height: 3em;
}

.talent-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
