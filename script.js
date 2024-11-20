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
      filterLessons() {
        const text = this.searchText.toLowerCase();
        return this.lessons.filter(
          (lesson) =>
            lesson.subject.toLowerCase().includes(text) ||
            lesson.location.toLowerCase().includes(text) ||
            lesson.price.toString().includes(text) ||
            lesson.spaces.toString().includes(text)
        );
      },
      sortLessons(key) {
        this.sortKey = key;
        this.sortOrder = -this.sortOrder;
        this.lessons.sort((a, b) => {
          const valueA = a[key];
          const valueB = b[key];
          return valueA < valueB ? -this.sortOrder : this.sortOrder;
        });
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