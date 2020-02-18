<template>
  <div id="app">
    <div v-if="entrance">
      <div class="page-header">
        <h1>Gölge ve Sentez Burcunuzu Hemen Öğrenin!</h1>
      </div>
      <div class="form-group">
        <label for="name" class="big-label">İsmininiz</label>
        <input v-model="name" type="email" class="form-control" id="name" placeholder="İsminiz" />
      </div>
      <div class="form-group">
        <label for="birthday" class="big-label">Doğum Tarihiniz</label>
        <div class="date">
          <div class="form-group">
            <label>Gün</label>
            <select class="form-control" id="day" v-model="day">
              <option v-for="i in 31" :key="i">{{ i }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Ay</label>
            <select class="form-control" id="month" v-model="month">
              <option v-for="i in 12" :key="i">{{ i }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Yıl</label>
            <select class="form-control" id="month" v-model="year">
              <option v-for="i in 100" :key="i">{{ i + 1950 }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="date" class="big-label">Doğum Saatiniz</label>
        <div class="date">
          <div class="form-group">
            <label>Saat</label>
            <select class="form-control" id="hour" v-model="hours">
              <option v-for="i in 24" :key="i-1">{{ i-1 }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Dakika</label>
            <select class="form-control" id="minute" v-model="minutes">
              <option v-for="i in 60" :key="i-1">{{ i-1 }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="timezone" class="big-label">Saat Dilimi</label>
        <select class="form-control" id="timezone" v-model="timezone">
          <option v-for="(i,idx) in timezones" :key="i" :value="idx + 2">{{ i }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="city" class="big-label">Doğduğunuz Şehir</label>
        <select class="form-control" id="city" v-model="city">
          <option v-for="(i,idx) in cities" :key="i" :value="cityValues[idx]">{{ i }}</option>
        </select>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="onClck">Öğren!</button>
      </div>
      <br />
    </div>
    <div v-else-if="loading">
      <p>Loading</p>
    </div>
    <div v-else-if="infoPage">
      <h1>Sentez Burcunuz:</h1>
      <img :src="sentezImg" alt="Sentez Burcu" />
      <p>{{sentez}}</p>
      <h1>Gölge Burcunuz:</h1>
      <img :src="golgeImg" alt="Gölge Burcu" />
      <p>{{golge}}</p>
      <h2>Sentez Burcu Nedir?</h2>
      <p>Sentez burcun senin özelliklerini en çok gösterdiğin burcundur</p>
      <h2>Gölge Burcu Nedir?</h2>
      <p>Gölge burcun senin en iyi uyum yakabiliceğin burcundur.En iyi bu burçla anlaşabilir ve hatta hayat arkadaşı edinebilirsin.</p>
      <h2>{{sentez}}</h2>
      <p>{{sentezText}}</p>
      <h2>{{golge}}</h2>
      <p>{{golgeText}}</p>
      <br />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      name: "",
      day: "",
      month: "",
      year: "",
      hours: "",
      minutes: "",
      timezone: "",
      city: "",
      sentezImg: null,
      golgeImg: null
    };
  },
  watch: {
    golgeEnglish(newVal) {
      this.golgeImg = require(`./assets/${newVal}.png`);
    },
    sentezEnglish(newVal) {
      this.sentezImg = require(`./assets/${newVal}.png`);
    }
  },
  computed: {
    ...mapGetters([
      "cities",
      "cityValues",
      "timezones",
      "entrance",
      "loading",
      "infoPage",
      "golge",
      "golgeEnglish",
      "golgeText",
      "sentez",
      "sentezEnglish",
      "sentezText"
    ])
  },
  methods: {
    ...mapActions(["calculate"]),
    onClck() {
      if (
        this.name !== "" &&
        this.day !== "" &&
        this.month !== "" &&
        this.year !== "" &&
        this.hours !== "" &&
        this.minutes !== "" &&
        this.timezone !== "" &&
        this.city !== ""
      ) {
        this.calculate({
          name: this.name,
          day: this.day,
          month: this.month,
          year: this.year,
          hour: this.hours,
          minute: this.minutes,
          timezone: this.timezone,
          city: this.city
        });
      } else {
        console.log("Lütfen boş alanları doldurunuz.");
      }
    }
  }
};
</script>

<style>
body {
  background-color: blueviolet;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: auto;
  color: white;
  padding-top: 5px;
}
.form-group {
  margin: auto;
  text-align: start;
  width: 300px;
  margin-top: 10px;
}
.form-text {
  color: white;
}
.date {
  display: flex;
  align-items: center;
}
.big-label {
  font-size: 160%;
}
button {
  width: 300px;
  height: 40px;
}
</style>
