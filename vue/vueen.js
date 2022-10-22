const app = Vue.createApp({

});

app.component('contact', {
  data() {
    return {
      detailsAreVisible: false,
      id: 0,
      friends: [
        {
          id:     '1',
          name:   'Mihajlo Veljković',
          phone:  '+381 66 405 676',
          email:  'mihajloveljkovic1999@gmail.com',
          area:   'Creation, maintenance and redesign of web sites',
        },
        {
          id:     '2',
          name:   'Kosta Milović',
          phone:  '+381 66 123 455',
          email:  'kosta@gmail.com',
          area:   'Graphic design',
        },
        {
          id:     '3',
          name:   'Relja Mihajlović',
          phone:  '+381 66 000 000',
          email:  'relja@gmail.com',
          area:   'Creation of Web shops and SEO optimization of the website',
        },
      ],
    };
  },

  template: `
    <li v-for="friend in friends">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails(friend.id)">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible && id == friend.id">
        <li><strong>Phone: </strong>{{ friend.phone }}</li>
        <li><strong>Email: </strong>{{ friend.email }}</li>
        <li><strong>Oblast: </strong>{{ friend.area}}</li>
      </ul>
    </li>
  `,

  methods: {
    toggleDetails(id) {
      this.detailsAreVisible = !this.detailsAreVisible;
      this.id = id;
    },
  },
});

app.mount('#app');