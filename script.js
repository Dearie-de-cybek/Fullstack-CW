new Vue({
  el: '#app',
  data: {
    lessons: [],
    originalLessons: [],
    cart: [],
    showCart: false,
    currentView: 'lessons',
    searchText: '',
    sortKey: '',
    sortOrder: 1,
    form: {
      name: '',
      phone: '',
    },
    activeFilter: 'all',
    sortOrder: 'ascending',
  },
  computed: {
    totalCartPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  methods: {
    async fetchLessons() {
      try {
        const response = await fetch('https://fullstack-cw-backend.onrender.com/collections/lessons'); 
        const data = await response.json();
        this.lessons = data;
        this.originalLessons = [...data];
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    },
    addToCart(lesson) {
      if (lesson.spaces > 0) {
        this.cart.push(lesson);
        lesson.spaces--;
      }
    },
    removeFromCart(index) {
      const lesson = this.cart.splice(index, 1)[0];
      lesson.spaces++;
    },
    navigateToCheckout() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
      window.location.href = 'checkout.html';
    },
    
    async searchLessons() {
      try {
        const query = encodeURIComponent(this.searchText); 
        const response = await fetch(`http://localhost:3000/search/lessons?query=${query}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.lessons = data; 
      } catch (error) {
        console.error('Error searching lessons:', error);
      }
    },
    
    setFilter(filter) {
      this.activeFilter = filter;
      this.applyFilter();
    },
    setSortOrder(order) {
      this.sortOrder = order;
      this.applyFilter();
    },
    applyFilter() {
      let filteredLessons = [...this.lessons];

      if (this.activeFilter === 'price') {
        filteredLessons.sort((a, b) =>
          this.sortOrder === 'ascending' ? a.price - b.price : b.price - a.price
        );
      } else if (this.activeFilter === 'spaces') {
        filteredLessons.sort((a, b) =>
          this.sortOrder === 'ascending' ? a.spaces - b.spaces : b.spaces - a.spaces
        );
      } else if (this.activeFilter === 'location') {
        filteredLessons.sort((a, b) =>
          this.sortOrder === 'ascending'
            ? a.location.localeCompare(b.location)
            : b.location.localeCompare(a.location)
        );
      } else if (this.activeFilter === 'subject') {
        filteredLessons.sort((a, b) =>
          this.sortOrder === 'ascending'
            ? a.subject.localeCompare(b.subject)
            : b.subject.localeCompare(a.subject)
        );
      }

      this.lessons = filteredLessons;
    },
  },
  mounted() {
    this.fetchLessons();
    this.originalLessons = [...this.lessons];
  },
});
