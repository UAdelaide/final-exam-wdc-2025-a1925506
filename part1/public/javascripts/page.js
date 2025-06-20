

    const SPECIALS = [
        { name: 'Salt', price: '$0.99', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Korean_sea_salt.jpg' },
        { name: 'Pepper', price: '$2.49', url: 'https://live.staticflickr.com/191/449547916_ce1c87adeb_b.jpg' },
        { name: 'Tomato Sauce', price: '$3.50', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/640px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg' },
        { name: 'Worchestershire Sauce', price: '$4.20', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Worcester_Sauce_001.jpg' }
    ];

    const { createApp } = Vue;

createApp({
  data() {
    return {
      dogImage: ''
    };
  },
  async created() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    this.dogImage = data.message;
  }
}).mount('#app');
