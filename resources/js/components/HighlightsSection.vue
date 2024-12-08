<template>
  <section class="highlights-section">
    <div
      class="highlight"
      v-for="(highlight, index) in highlights"
      :key="index"
    >
      <img :src="highlight.icon" alt="icon" class="highlight-icon" />
      <p class="highlight-text">{{ highlight.text }}</p>
    </div>
  </section>
</template>

<script>
import Image1 from "@/images/img-1.png";
import Image2 from "@/images/img-2.png";
import Image3 from "@/images/img-3.png";
import Image4 from "@/images/img-4.png";
export default {
  name: "HighlightsSection",
  data() {
    return {
      highlights: [
        {
          icon: Image1,
          text: "Repartez directement avec vos résultats de test psychotechnique",
        },
        {
          icon: Image2,
          text: "Entraînement en ligne pour garantir votre réussite",
        },
        {
          icon: Image3,
          text: "Centre enregistré, psychologues certifiés et à l'écoute",
        },
        {
          icon: Image4,
          text: "Taux de réussite de 97.8%",
        },
      ],
    };
  },
};
</script>
<style scoped>
.highlights-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background-color: #bf2a6b;
  padding: 60px 30px;
}

.highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 200px;
  max-width: 210px;
}

.highlight-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.highlight-text {
  font: normal normal normal 20px/27px Nunito, sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
}

@media (max-width: 800px) {
.highlight {
margin-bottom: 50px;
min-width: 300px;
}

}
</style>
