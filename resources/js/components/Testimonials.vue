<template>
  <section class="bg-[#F8F9FB] testimonials-section">
    <h2 class="section-title text-center mb-8">
      Ce qu'en pensent nos candidats
    </h2>
    <div
      class="container bg-white p-12 shadow-lg mx-auto flex items-center flex-col lg:flex-row gap-6"
    >
    
      <div class="flex-col basis-1/4 flex-grow-0 rounded-lg text-center">
        <h2 class="text-xl font-semibold mb-2">Excellent</h2>
        <img src="@/images/stars.png" alt="Évaluation étoiles" class="w-24 mb-2 mx-auto" />
        <p class="text-sm text-gray-700">
          Based on <strong>414 reviews</strong>
        </p>
        <img src="@/images/google.png" alt="Logo Google" class="w-24 h-12 mt-4 mx-auto" />
      </div>
      <div class="relative caroussel-content w-full flex-grow basis-2/3 overflow-hidden">
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
            class="flex-shrink-0 flex flex-col items-center px-4"
            :style="{ width: `${100 / itemsPerView}%` }"
          >
            <div class="w-full flex items-center justify-center gap-4 mb-4">
              <img
                v-if="testimonial.image"
                :src="testimonial.image"
                alt="Photo de l'utilisateur"
                class="rounded-full w-16 h-16 object-cover"
              />
              <span
                v-else
                class="text-lg font-bold text-white bg-gray-400 w-16 h-16 flex items-center justify-center rounded-full"
              >
                {{ testimonial.name.charAt(0).toUpperCase() }}
              </span>
              <div>
                <p class="text-lg font-semibold">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.date }}</p>
              </div>
            </div>
            <div class="text-center">
              <img src="@/images/stars.png" alt="Étoiles" class="w-20 mx-auto" />
              <p class="text-sm text-gray-600 mt-2">
                {{ testimonial.review }}
              </p>
            </div>
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:scale-110 transition"
        >
          <font-awesome-icon icon="chevron-left" class="w-4 h-4" />
        </button>
        <button
          @click="nextSlide"
          class="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:scale-110 transition"
        >
          <font-awesome-icon icon="chevron-right" class="w-4 h-4" />
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
};
</script>
<style scoped>
.testimonials-section {
  padding: 120px 0;
}
.section-title {
  font: bold 35px/51px Lato, sans-serif;
  color: #1e1e1e;
}
.caroussel-content {
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
}
button {
  cursor: pointer;
}
button:hover {
  background-color: #e5e5e5;
}
.transition-none {
  transition: none !important;
}
</style>
