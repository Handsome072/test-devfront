<template>
  <section class="bg-white py-10" @click="closeAll">
    <div class="container accordion mx-auto" @click.stop>
      <h2 class="faq-title " :style="{ color: '#36578A' }">
        Préparez votre test psychotechnique
      </h2>
      <div class="faq-border">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border-b "
        >
          <button
            class="flex justify-between items-center w-full p-4 focus:outline-none"
            @click="toggle(index)"
          >
            <span class="font-semibold text-lg">{{ item.question }}</span>
            <font-awesome-icon
              :icon="item.open ? 'minus' : 'plus'"
              class="w-4 h-4"
            />
          </button>
          <div
            ref="faqContents"
            :style="{
              height: item.open ? item.contentHeight + 'px' : '0px',
              overflow: 'hidden',
              transition: item.open
                ? 'height 0.3s ease-in-out'
                : 'height 0.3s ease-in-out',
            }"
          >
            <div class="px-4 py-2" ref="faqContent">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Qu'est-ce qu'un test psychotechnique ?",
          answer:
            "Un test psychotechnique est une évaluation des aptitudes cognitives et comportementales, souvent utilisée pour valider ou reprendre un permis de conduire.",
          open: false,
          contentHeight: 0,
        },
        {
          question: "Quels sont les documents nécessaires ?",
          answer:
            "Un test psychotechnique est une évaluation des aptitudes cognitives et comportementales, souvent utilisée pour valider ou reprendre un permis de conduire.",
          open: false,
          contentHeight: 0,
        },
        {
          question: "Combien de temps dure le test ?",
          answer:
            "Le test dure en moyenne 45 minutes, incluant des exercices et des discussions avec un psychologue agréé.",
          open: false,
          contentHeight: 0,
        },
        {
          question: "Qu'est-ce qu'un test psychotechnique ?",
          answer:
            "Un test psychotechnique est une évaluation des aptitudes cognitives et comportementales, souvent utilisée pour valider ou reprendre un permis de conduire.",
          open: false,
          contentHeight: 0,
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.faqs.forEach((faq, i) => {
        if (i !== index && faq.open) {
          faq.open = false;
          faq.contentHeight = 0;
        }
      });

      this.faqs[index].open = !this.faqs[index].open;

      this.$nextTick(() => {
        const contentElement = this.$refs.faqContents[index];
        if (this.faqs[index].open) {
          this.faqs[index].contentHeight =
            this.$refs.faqContent[index]?.scrollHeight || 0;
        } else {
          this.faqs[index].contentHeight = 0;
        }
      });
    },
    closeAll() {
      this.faqs.forEach((faq) => {
        faq.open = false;
        faq.contentHeight = 0;
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  padding: 100px 0;
}

.container .faq-title{
  font: normal normal 600 30px/45px "lato", sans-serif;
  letter-spacing: 0px;
  color: #36578a;
  margin-bottom: 30px;
}

button {
  cursor: pointer;
}
.accordion {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 57px;
}
.faq-border > div:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .container {
    padding: 50px 20px;
  }

  .faq-title {
    font-size: 24px;
    line-height: 36px;
  }

  .accordion {
    padding: 30px; 
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 
  }

  button {
    padding: 12px; 
  }

  button span {
    font-size: 16px; 
  }

  .faq-border > div {
    border-bottom-width: 1px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 20px 10px;
  }

  .faq-title {
    font-size: 20px;
    line-height: 30px;
  }

  .accordion {
    padding: 20px;
  }

  button span {
    font-size: 14px;
  }

  button {
    padding: 10px;
  }
}

</style>
