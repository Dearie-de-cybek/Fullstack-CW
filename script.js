  new Vue({
    el: '#app', 
    data: {
      lessons: [
        { subject: 'Maths', location: 'London', price: 100, spaces: 5, image: 'images/maths.jpg' },
        { subject: 'English', location: 'London', price: 100, spaces: 5, image: 'images/english.jpg' },
        { subject: 'Biology', location: 'London', price: 100, spaces: 5, image: 'images/biology.jpg' },
        { subject: 'Chemistry', location: 'London', price: 100, spaces: 5, image: 'images/chemistry.jpg' },
        { subject: 'Music', location: 'London', price: 100, spaces: 5, image: 'images/music.jpg' },
      ],
      cart: [],
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
    methods: {
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
      checkout() {
        if (/^[a-zA-Z\s]+$/.test(this.form.name) && /^[0-9]+$/.test(this.form.phone)) {
          alert('Order Confirmed!');
          this.cart = [];
          this.form.name = '';
          this.form.phone = '';
        } else {
          alert('Invalid Name or Phone Number!');
        }
      },
    },
    methods: {
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
          filteredLessons.sort((a, b) => (this.sortOrder === 'ascending' ? a.price - b.price : b.price - a.price));
        } else if (this.activeFilter === 'spaces') {
          filteredLessons.sort((a, b) => (this.sortOrder === 'ascending' ? a.spaces - b.spaces : b.spaces - a.spaces));
        } else if (this.activeFilter === 'location') {
          filteredLessons.sort((a, b) => (this.sortOrder === 'ascending' ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location)));
        } else if (this.activeFilter === 'subject') {
          filteredLessons.sort((a, b) => (this.sortOrder === 'ascending' ? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject)));
        }

        this.lessons = filteredLessons;
      },
    },
  });





// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// const navElems = [overlay, navOpenBtn, navCloseBtn];

// for (let i = 0; i < navElems.length; i++) {
//   navElems[i].addEventListener("click", function () {
//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//   });
// }





// const header = document.querySelector("[data-header]");
// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 80) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }
// });