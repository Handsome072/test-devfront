<template>
  <section class="bg-white py-12 lg:py-16">
    <div
      class="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0"
    >
      <div class="lg:w-1/2">
      <div class="img-left relative ">
         <img
          src="@/images/hand-phone.jpg"
          alt="Hand holding a phone"
          class="w-full lg:w-[100%] hand-phone rounded-lg shadow-lg"
        />
        <img
          src="@/images/round-img.png"
          alt="Round smiling person"
          class="absolute rounded-full shadow-lg round-image"
        />
      </div>
       
      </div>
      <div class="step-content lg:w-1/2 text-center lg:text-left space-y-6 relative">
        <h2 class="section-title">
          Votre test psychotechnique en 3 étapes :
        </h2>
        <div class="step-space">
          <ul class=" relative">
            <div
              class="absolute left-5 top-0 h-full border-l-4 border-[#BF2A6B] transform -translate-x-1/2"
            ></div>

            <li class="flex items-start space-x-4">
              <div
                class="flex items-center justify-center w-14 h-14 bg-[#FFFFFF] text-gray-900 font-bold rounded-full shadow-md border"
                style="border-radius: 60%;"
              >
                1
              </div>
              <p>
                <strong>Réservez en ligne :</strong> Choisissez votre créneau
                horaire et votre psychologue agréé.
              </p>
            </li>

            <li class="flex items-start space-x-4">
              <div
                class="flex items-center justify-center w-14 h-14 bg-[#FFFFFF] text-gray-900 font-bold rounded-full shadow-md border"
                style="border-radius: 60%;"
              >
                2
              </div>
              <p >
                <strong>Passez votre test :</strong> Vous serez accueilli par un
                de nos psychologues qui vous expliquera le déroulement du test.
              </p>
            </li>

            <li class="flex items-start space-x-4">
              <div
                class="flex items-center justify-center w-14 h-14 bg-[#FFFFFF] text-gray-900 font-bold rounded-full shadow-md border"
                style="border-radius: 60%;"
              >
                3
              </div>
              <p>
                <strong>Recevez vos résultats :</strong> Vous recevrez vos
                résultats le jour même de votre test.
              </p>
            </li>
          </ul>
          <div class="mt-6">
               <button class="button-secondary">
              <span>Je réserve mon test psychotechnique</span>
              <font-awesome-icon icon="chevron-right" class="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "StepSection",
};
</script>

<style scoped>
.section-title{
margin-bottom: 73px;
}

.step-content p {
font-size: 20px;
  margin-top: -5px;
}

ul li div {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-left:-8px ;
}

ul li {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 55px;
}

ul li div {
  border-radius: 60%;
  flex-shrink: 0;
}

.step-space{
  padding-left:50px ;
}

.round-image {
  width: 9rem;
  height: 9rem;
  position: absolute;
  top: 30%;
  right: 0;
  transform: translate(50%, -50%);
}

.container {
  padding-left: 2rem;
  padding-right: 2rem; 
}

.relative {
  margin-left: auto;
  margin-right: auto;
}

.round-image {
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 25%;
  transform: translate(50%, -50%);
}

.img-left{
  width: 80%;
}

@media (max-width: 1400px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .step-content p {
  font: normal 18px;
}
.step-content h2 {
  font: normal 18px;
}
}

@media (max-width: 800px) {

  .round-image {
    top:20px;
    bottom: 10px;
    left: -50px;
    transform: none;
  }

  .step-content p {
  font-size: 18px ;
}
}

</style>
