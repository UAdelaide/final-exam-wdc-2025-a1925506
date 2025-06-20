//Top menu (task 1.5):

const TOP = [
    { title:'Home',         url:'/' },
    { title:'About',        url:'/about' },
    { title:'Contact Us',   url:'/contact' }
    ];

    const SPECIALS = [
        { name: 'Salt', price: '$0.99', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Korean_sea_salt.jpg' },
        { name: 'Pepper', price: '$2.49', url: 'https://live.staticflickr.com/191/449547916_ce1c87adeb_b.jpg' },
        { name: 'Tomato Sauce', price: '$3.50', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/640px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg' },
        { name: 'Worchestershire Sauce', price: '$4.20', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Worcester_Sauce_001.jpg' }
    ];

    const vueinst = new Vue({
        el: '#app',
        data: {
            choose: 'Choose...',
            special: SPECIALS[0],
            show_ad: true,
            dark_mode: false,
            top_menu: TOP,
            c_text: 'type your comment here',
            c_arr: [],
        }

    });