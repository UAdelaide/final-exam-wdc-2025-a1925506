
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          dogImage: '',
          clickCount: 0,
          clicksRequired: 3 // how many times the button must be clicked
        };
      },
      async created() {
        this.loadDog(); // initial dog
      },
      methods: {
        async loadDog() {
          this.clickCount++;
          if (this.clickCount < this.clicksRequired) {
            console.log(`Clicked ${this.clickCount} time(s). Need ${this.clicksRequired - this.clickCount} more.`);
            return;
          }

          try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await res.json();
            this.dogImage = data.message;
            this.clickCount = 0; // reset after successful load
          } catch (err) {
            console.error('Failed to load dog image:', err);
          }
        }
      }
    }).mount('#app');