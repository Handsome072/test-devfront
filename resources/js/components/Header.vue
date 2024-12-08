<template>
  <header class="bg-[#F8F9FB] relative">
    <div class="container mx-auto px-4 py-8 lg:py-12">
      <div class="flex justify-center lg:justify-start logo">
        <img src="@/images/logo.png" alt="Logo Centre National" class="h-16" />
      </div>
      <div
        class="header-content relative flex flex-col-reverse lg:flex-row items-center lg:items-start mt-7 lg:mt-7"
      >
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1>Test psychotechnique : Récupérez votre permis</h1>
          <p class="list-text">Une démarche simple & rapide</p>
          <div class="list-offert">
            <ul class="mt-6 space-y-4">
              <li class="flex items-center">
                <img src="@/images/true.png" alt="Check icon" class="h-6 w-7" />
                <span class="ml-3 text-gray-700 text-sm lg:text-base">
                  97.8% de réussite à l'examen psychotechnique
                </span>
              </li>
              <li class="flex items-center">
                <img src="@/images/true.png" alt="Check icon" class="h-6 w-7" />
                <span class="ml-3 text-gray-700 text-sm lg:text-base">
                  Recevez vos résultats le jour de votre test
                </span>
              </li>
              <li class="flex items-center">
                <img src="@/images/true.png" alt="Check icon" class="h-6 w-7" />
                <span class="ml-3 text-gray-700 text-sm lg:text-base">
                  Centre enregistré, psychologues certifiés
                </span>
              </li>
            </ul>
          </div>

          <div class="mt-6">
            <button class="button-secondary">
              <span>Je réserve mon test psychotechnique</span>
              <font-awesome-icon icon="chevron-right" class="w-4 h-4" />
            </button>
            <div class="flex items-center header-hand mt-5">
              <img
                src="@/images/hand.png"
                alt=""
                style="width: 40px; height: 40px"
              />
              <p>Entraînement Gratuit inclus</p>
            </div>
          </div>

          <div
            class="flex justify-center lg:justify-start items-center mt-6 space-x-4"
          >
            <div class="flex items-center space-x-2">
              <img
                src="@/images/etoile.png"
                alt="Google stars"
                style="width: 131px; height: 90px"
              />
            </div>
            <div class="flex items-center space-x-2">
              <img
                src="@/images/trustpilot.png"
                alt="Trustpilot stars"
                style="width: 170px; height: 85px"
              />
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute rounded-full bg-[#BF2A6B]"
            style="
              top: -300px;
              right: -500px;
              width: 150%;
              height: 195%;
              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            "
          ></div>

          <div class="relative youtube z-10 flex justify-center items-center">
            <img
              src="@/images/youtube.png"
              alt="YouTube video thumbnail"
              class="youtube-img rounded-bl-lg rounded-br-lg w-[700px] h-[485px]"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

.header-content h1 {
  font: bold 35px/51px Lato;
  color: #1e1e1e;
}
.header-content p {
  font: 18px/27px Nunito;
}
.header-content .list-text {
  font: 25px/41px Lato;
  margin-top: 50px;
}

.header-content ul span {
  font: 21px/35px Nunito;
}

.header-content button {
  margin-top: 50px;
  width: 400px;
  height: 60px;
  background: #bf2a6b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 16px;
  font: normal 900 20px/32px Lato;
}
.youtube img {
  border-radius: 20px;
  width: 650px;
  height: 400px;
  margin-top: 50px;
  margin-right: -50px;
}

@media (max-width: 1020px) {
  header {
    text-align: left; 
  }
  .list-text{
    margin-top: 40px !important;
  }
  h1,p {
text-align: left;
  }

  .logo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f8f9fb; 
    z-index: 1000; 
    padding: 10px 0;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    margin: 0 auto;
    margin-top: 100px
  }

header .header-hand{
  justify-content: center;
}
  .header-content .lg {
    width: 100%;
    
  }

  .header-content .youtube-img {
    margin: 0 auto;
    margin-top: 100px;
  }

  .header-content h1,
  .header-content p,
  .header-content ul,
  .header-content button {
    margin-left: 0;
    margin-right: 0;
  }

  .youtube {
    position: relative;
  }

  .youtube img {
    width: 90%;
    margin: auto;
  }

  .header-content .absolute {
    right: auto;
    left: 0%;
    top: -470px !important;
    transform: translateX(-100%);
    transform: translateY(100%);
    width: 100% !important;
    height: 100% !important;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background-color: #bf2a6b;
  }

  .header-content button {
    margin: 20px auto;
    width: 90%;
    max-width: 400px;
  }
  .header-content .list-offert {
    padding-left: 4%;
  }
}
</style>