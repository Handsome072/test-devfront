<template>
  <div class="container mx-auto p-6 bg-gray-50 rounded-lg ">
    <div class="reservation-form" @click="closeAllDropdowns">
      <!-- Barre de recherche -->
      <div class="search-bar bg-white p-5 shadow rounded-2xl">
        <div class="location-input">
          <font-awesome-icon icon="location-dot" class="icon" />
          <span class="location-text">Aisne</span>
        </div>
        <button class="search-button">Rechercher</button>
      </div>

      <!-- Filtres -->
      <div class="filters">
        <div class="filter-dropdown" @click.stop="toggleDropdown('month')">
          <span>{{ selectedMonth || 'Filtrer par mois' }}</span>
          <font-awesome-icon icon="chevron-down" class="dropdown-icon" />
          <ul v-if="dropdowns.month" class="dropdown-list">
            <li
              v-for="month in months"
              :key="month"
              @click.stop="selectOption('month', month)"
            >
              {{ month }}
            </li>
          </ul>
        </div>

        <div class="filter-dropdown" @click.stop="toggleDropdown('day')">
          <span>{{ selectedDay || 'Filtrer par jour' }}</span>
          <font-awesome-icon icon="chevron-down" class="dropdown-icon" />
          <ul v-if="dropdowns.day" class="dropdown-list">
            <li
              v-for="day in days"
              :key="day"
              @click.stop="selectOption('day', day)"
            >
              {{ day }}
            </li>
          </ul>
        </div>

        <div class="filter-dropdown" @click.stop="toggleDropdown('halfDay')">
          <span>{{ selectedHalfDay || 'Filtrer par demi-journée' }}</span>
          <font-awesome-icon icon="chevron-down" class="dropdown-icon" />
          <ul v-if="dropdowns.halfDay" class="dropdown-list">
            <li
              v-for="halfDay in halfDays"
              :key="halfDay"
              @click.stop="selectOption('halfDay', halfDay)"
            >
              {{ halfDay }}
            </li>
          </ul>
        </div>

        <button class="filter-button">Filtrer</button>
        <button class="reset-button" @click="resetFilters">
          <span class="reset-text">Réinitialiser les filtres</span>
        </button>
      </div>
    </div>

    <!-- Recherche en cours -->
    <div class="loading-section">
      <div class="loading-circle"></div>
      <span class="loading-text">Recherche en cours</span>
    </div>
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
  </div>
 
 <div class="container mx-auto bg-gray-50">
  <div class="flex flex-col lg:flex-row gap-6">
    <!-- Section Gauche -->
    <div class="flex-[2] rounded-lg ">
      <div
        v-for="n in 6"
        :key="n"
        class="p-4 rounded-lg bg-white border w-full mb-4"
      >
        <!-- Contenu de la section gauche -->
        <div class="flex items-center justify-between">
          <p class="text-lg font-semibold">Lundi</p>
          <p class="text-lg">04 Novembre 2024</p>
        </div>
        <div class="flex items-center space-x-2">
          <font-awesome-icon icon="location-dot" class="text-gray-700 w-5 h-5" />
          <p class="text-gray-700">50 avenue d'Essômes, 02400 Château-Thierry</p>
        </div>
        <div class="flex items-center space-x-2">
          <font-awesome-icon icon="triangle-exclamation" class="text-red-600 w-5 h-5" />
          <p class="text-red-600 font-medium">Dernière places à cette date</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-xl font-semibold text-[#BF2A6B]">77€</p>
          <button
            class="bg-[#BF2A6B] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#9E2453] flex items-center space-x-2"
          >
            <span>Réserver</span>
            <font-awesome-icon icon="chevron-right" class="w-4 h-4" />
          </button>
        </div>
        <p class="text-gray-500 text-sm">3 places disponibles à cette date</p>
      </div>
    </div>

 
<div class="flex-2 space-y-6 mb-5 rounded-lg">
  <div class="bg-white shadow pb-5">
 <div class="text-center bg-blue-600 text-white mb-5 py-2">
    <p class="font-semibold">Les tests par ville à Aisne (02)</p>
  </div>
  <div class="flex justify-center   mb-4 space-x-4 py-5">
    <button class="bg-gray-100 text-gray-800 py-2 px-4 rounded-full shadow">
      Château-Thierry
    </button>
    <button class="bg-gray-100 text-gray-800 py-2 px-4 rounded-full shadow">
      Saint-Quentin
    </button>
  </div>
  </div>
 

 <div class="bg-gray-50 p-6 rounded-lg bg-white rounded-lg shadow mb-4 text-center space-y-4 relative">
  <img src="@/images/true.png" alt="Check icon" class="h-6 w-6 mx-auto" />
  <p class="text-3xl font-semibold text-black">97,7%</p>
  

  <p class="text-gray-600 text-sm">Taux de réussite <br> à nos tests psychotechniques</p>
  

  <div class="flex justify-between items-center absolute inset-0 px-4">
  
    <button class="flex items-center justify-center h-full">
      <font-awesome-icon icon="chevron-left" class="w-5 h-5 text-gray-500 cursor-pointer" />
    </button>
    <button class="flex items-center justify-center h-full">
      <font-awesome-icon icon="chevron-right" class="w-5 h-5 text-gray-500 cursor-pointer" />
    </button>
  </div>
</div>


  <div class="flex justify-between items-center space-x-4">
    <div class="flex flex-col shadow bg-white items-center">
      <img src="@/images/etoile.png" alt="Google stars" style="width: 131px; height: 90px;" />
    </div>
    <div class="flex flex-col shadow bg-white  items-center">
      <img src="@/images/trustpilot.png" alt="Trustpilot stars" style="width: 170px; height: 85px;" />
    
    </div>
  </div>

  <div class="flex justify-center">
    <img src="@/images/car.jpg" alt="Car" class="rounded-lg shadow-lg w-full max-w-md" />
  </div>
</div>

  </div>
</div>



</template>


<script>
export default {
  name: "ReservationForm",
  data() {
    return {
      months: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      halfDays: ["Matin", "Après-midi"],
      dropdowns: { month: false, day: false, halfDay: false },
      selectedMonth: null,
      selectedDay: null,
      selectedHalfDay: null,
    };
  },
  methods: {
    toggleDropdown(type) {
      Object.keys(this.dropdowns).forEach((key) => {
        this.dropdowns[key] = key === type ? !this.dropdowns[key] : false;
      });
    },
selectOption(type, value) {
  this[`selected${type.charAt(0).toUpperCase() + type.slice(1)}`] = value;

  this.closeAllDropdowns();
},
    closeAllDropdowns() {
      Object.keys(this.dropdowns).forEach((key) => {
        this.dropdowns[key] = false;
      });
    },
    handleClickOutside(event) {
      const form = this.$el;
      if (!form.contains(event.target)) {
        this.closeAllDropdowns();
      }
    },
    resetFilters() {
      this.selectedMonth = null;
      this.selectedDay = null;
      this.selectedHalfDay = null;
      this.closeAllDropdowns();
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>


<style scoped>
.container{
  padding-bottom: 50px;
}
.reservation-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 600px;
}

.location-input {
  display: flex;
  align-items: center;
  padding: 10px;
  flex: 1;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.location-text {
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
}

.search-button {
  background-color: #36578a;
  color: white;
  border: none;
  border-radius: 38px;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.filter-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: none;
  border-right: none;
  outline: none;
  background-color: #fff;
  width: 200px;
  cursor: pointer;
}

.dropdown-icon {
  margin-left: 10px;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.dropdown-list li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}

.filter-button {
  width: 287px;
  height: 52px;
  background: #434343;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.reset-button {
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  color: blue;
  font-size: 14px;
  margin-top: 10px;
}

.reset-text {
  display: inline-block;
}
.loading-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.loading-circle {
  width: 16px;
  height: 16px;
  border: 2px solid #36578a;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 16px;
  color: #000;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #dbd8d8;
  margin-bottom: 20px;
  position: relative;
}

.progress {
  width: 20%; 
  height: 100%;
  background-color: #36578a;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%; 
}

.filters {
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  width: 100%; 
  justify-content: space-between; 
}
.icon {
  width: 1.25rem; 
  height: 1.25rem;
}
</style>
