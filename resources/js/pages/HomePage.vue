<template>
  <DefaultLayout>
    <Header />
    <StepsSection />
    <TrainingSection />
     <Testimonials />
    <HighlightsSection />
   
    <FAQ />
    <ReservationForm />
    
    <Footer />
  </DefaultLayout>
</template>

<script>
import HighlightsSection from "../components/HighlightsSection.vue";
import Header from "../components/Header.vue";
import StepsSection from "../components/StepsSection.vue";
import TrainingSection from "../components/TrainingSection.vue";
import ReservationForm from "../components/ReservationForm.vue";
import Testimonials from "../components/Testimonials.vue";
import FAQ from "../components/FAQ.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    HighlightsSection,
    Header,
    StepsSection,
    TrainingSection,
    ReservationForm,
    Testimonials,
    FAQ,
    Footer,
  },
};
</script>
