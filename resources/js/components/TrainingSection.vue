<template>
  <section class="bg-white training-section px-6 md:px-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-[52px]">
      <div class="md:w-1/2 ">
        <h2 class="section-title">
          Votre entraînement Gratuit inclus
        </h2>
        <p class="leading-relaxed">
        <strong> Pour vous préparer au mieux à votre test,</strong>  nous avons mis à votre disposition un entraînement des types de test que vous pouvez rencontrer lors de votre examen.
        </p>
        <p class="leading-relaxed">
          Pour avoir accès à cet entraînement rien de plus simple : Réservez votre test psychotechnique et vous recevrez par mail vos identifiants pour commencer à vous <strong>entraîner en illimité !</strong> 
        </p>
        <p class="leading-relaxed">
          Ne laissez pas la peur vous freiner dans votre démarche, entraînez-vous dès maintenant et soyez prêt pour le jour J.
        </p>
        <div class="mx-auto flex booking-button">
   <button class="button-secondary mt-4">
          <span>Je réserve mon test psychotechnique</span>
          <font-awesome-icon icon="chevron-right" class="w-4 h-4" />
        </button>
        </div>
     
      </div>

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

<style>
.section-title{
margin-bottom: 51px;
}

.training-section p{
 font-size:20px;
font-family: "Lato", sans-serif;
margin-bottom: 20px;
}
.booking-button{
  margin-top: 51px;
}

@media (max-width: 1200px) {
.training-section{
padding-left: 50px;
}
  .section-title{
    text-align: center;
    margin-bottom: 20px;
  }
  .training-section p{
 font-size:16px;
}
.booking-button{
  justify-content: center;
}
}
</style>
