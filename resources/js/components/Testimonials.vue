<template>
  <section class="bg-[#F8F9FB] testimonials-section">
    <div class="container mx-auto">
     <h2 class="section-title mb-8">
      Ce qu'en pensent nos candidats
    </h2>
    </div>
  
    <div
      class="container bg-white p-12 shadow-lg mx-auto flex flex-col lg:flex-row gap-6 items-center"
    >
      <!-- Sidebar gauche -->
      <div
        class="hidden lg:block flex-col basis-1/4 flex-grow-0 rounded-lg text-center"
      >
        <h2 class="text-2xl font-semibold mb-2">Excellent</h2>
        <img
          src="@/images/stars.png"
          alt="Évaluation étoiles"
          class="w-24 mb-2 mx-auto"
        />
        <p class="text-sm text-gray-700">
          Based on <strong>414 reviews</strong>
        </p>
        <img
          src="@/images/google.png"
          alt="Logo Google"
          class="w-24 h-24 mx-auto"
        />
      </div>

      <!-- Carrousel -->
      <div class="relative caroussel-content flex-grow overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :class="{ 'transition-none': !isTransitioning }"
          :style="{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }"
        >
          <div
            v-for="(testimonial, index) in extendedTestimonials"
            :key="index"
            class="flex-none w-full md:w-1/3 px-4"
          >
            <!-- Carte du témoignage -->
            <div
              class="bg-[#00000029] rounded-lg p-6 pb-10 h-full text-left shadow-md"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mr-4"
                  :class="testimonial.image ? 'bg-gray-300' : 'bg-green-500'"
                >
                  <template v-if="testimonial.image">
                    <img
                      :src="testimonial.image"
                      alt="Image de témoignage"
                      class="rounded-full w-full h-full object-cover"
                    />
                  </template>
                  <template v-else>
                    <span class="text-lg font-bold text-white">
                      {{ testimonial.name.charAt(0).toUpperCase() }}
                    </span>
                  </template>
                </div>
                <!-- Nom et Date -->
                <div>
                  <h3 class="font-bold text-lg">
                    {{ testimonial.name }}
                  </h3>
                  <p class=" text-sm text-gray-600">
                    {{ testimonial.date }}
                  </p>
                </div>
              </div>

              <!-- Contenu des étoiles et avis (aligné séparément) -->
              <div class="text-left">
                <img src="@/images/stars.png" alt="Étoiles" class="w-20 mb-3" />
                <p class="caroussel-text">
                  {{ testimonial.review }}
                </p>
                <a href="javascript:void(0);">Read more</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Boutons de navigation -->
        <button
          @click="prevSlide"
          class="absolute top-1/2 btn-navigation -left-4 transform -translate-y-1/2 p-4 transition"
        >
          ‹
        </button>
        <button
          @click="nextSlide"
          class="absolute top-1/2 -right-4 btn-navigation transform -translate-y-1/2 p-4 transition"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Test1Image from "@/images/test-1.jpg";
import Test3Image from "@/images/test-3.jpg";

export default {
  data() {
    return {
      currentIndex: 3,
      itemsPerView: 3,
      testimonials: [
        {
          name: "Daniele",
          date: "4 December 2023",
          review:
            "I had the procedure with Dr. Kovacs on the 1st of December. She and her team were very professional and caring.",
          image: Test1Image,
        },
        {
          name: "A. H. M.",
          date: "2 December 2023",
          review:
            "The idea was initially to my brother, we decided to contact other clinics but were slow to respond. Just little search on...",
          image: null,
        },
        {
          name: "The Bearer of Light",
          date: "29 November 2023",
          review:
            "Hello everyone, my name is Rafehel Moreira and I'm here to share my experience with the HairPalace clinic.",
          image: Test3Image,
        },
        {
          name: "New User",
          date: "1 December 2023",
          review:
            "The team was extremely helpful, ensuring my comfort and satisfaction throughout.",
          image: null,
        },
        {
          name: "User 5",
          date: "30 November 2023",
          review:
            "Fantastic experience with the clinic. I highly recommend it.",
          image: null,
        },
      ],
      isTransitioning: true,
    };
  },
  computed: {
    extendedTestimonials() {
      return [
        ...this.testimonials.slice(-this.itemsPerView),
        ...this.testimonials,
        ...this.testimonials.slice(0, this.itemsPerView),
      ];
    },
  },
  methods: {
    updateItemsPerView() {
      if (window.innerWidth < 768) {
        this.itemsPerView = 1;
      } else {
        this.itemsPerView = 3;
      }
    },
    nextSlide() {
      this.isTransitioning = true;
      this.currentIndex++;
      if (this.currentIndex >= this.testimonials.length + this.itemsPerView) {
        setTimeout(() => {
          this.isTransitioning = false;
          this.currentIndex = this.itemsPerView;
        }, 500);
      }
    },
    prevSlide() {
      this.isTransitioning = true;
      this.currentIndex--;
      if (this.currentIndex < this.itemsPerView) {
        setTimeout(() => {
          this.isTransitioning = false;
          this.currentIndex = this.testimonials.length + this.itemsPerView - 1;
        }, 500);
      }
    },
  },
  mounted() {
    this.updateItemsPerView();
    window.addEventListener("resize", this.updateItemsPerView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateItemsPerView);
  },
};
</script>

<style scoped>
.testimonials-section {
  padding: 120px 0;
}

.transition-none {
  transition: none !important;
}

.caroussel-content {
  padding: 13px;
  width: 100%;
  z-index: 0;
}

@media (max-width: 768px) {
  .caroussel-content {
    padding: 10px 12px;
  }

  .caroussel-content img {
    max-width: 100%;
    height: auto;
  }
}

img {
  display: block;
}

.btn-navigation {
  font-size: 45px;
  color: #00000070;
}

.text-left p {
  font-size: 16px;
  font-weight: normal;
  font-family: "Lato", sans-serif;
}
.text-left a {
  font-size: 15px;
  color: #00000083;
  font-weight: bold;
}
</style>
