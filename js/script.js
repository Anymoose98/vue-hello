const { createApp } = Vue

createApp({
  data() {
    return {
      saluta: 'Hello Vue!',
      foto: "https://www.ufficistampanazionali.it/wp-content/uploads/2023/02/studio-proporzione-aurea.jpg",
    }
  }
}).mount('#app')