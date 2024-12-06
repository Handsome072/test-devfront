<template>
  <section class="bg-white training-section py-16 px-6 md:px-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-[52px]">
      <!-- Texte à gauche -->
      <div class="md:w-1/2">
        <h2 class="section-title mb-6">
          Votre entraînement Gratuit inclus
        </h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Pour vous préparer au mieux à votre test, nous avons mis à votre disposition un entraînement des types de test que vous pouvez rencontrer lors de votre examen.
        </p>
        <p class="text-gray-700 leading-relaxed mb-6">
          Pour avoir accès à cet entraînement rien de plus simple : Réservez votre test psychotechnique et vous recevrez par mail vos identifiants pour commencer à vous entraîner en illimité !
        </p>
        <p class="text-gray-700 leading-relaxed mb-6">
          Ne laissez pas la peur vous freiner dans votre démarche, entraînez-vous dès maintenant et soyez prêt pour le jour J.
        </p>
        <button class="button-secondary mt-4">
          <span>Je réserve mon test psychotechnique</span>
          <font-awesome-icon icon="chevron-right" class="w-4 h-4" />
        </button>
      </div>

      <!-- Image à droite -->
      <div class="md:w-1/2">
        <img src="@/images/training.png" alt="Votre entraînement" class="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrainingSection",
};
</script>

<style scoped>
.training-section p{
 font: normal normal normal 23px/28px Lato;
letter-spacing: 0px;
color: #424242;
}
</style>
