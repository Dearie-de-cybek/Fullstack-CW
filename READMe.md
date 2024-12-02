# **Full Stack Development Project**

## **Overview**
This project is a Full Stack application for managing lessons and orders. The system consists of:
- A **Vue.js** front-end where users can browse lessons, add them to a cart, and place orders.
- A **Node.js/Express.js** back-end that provides RESTful API endpoints for managing lessons and orders.
- A **MongoDB Atlas** database for storing lessons and order information.

---

## **Links**

### **GitHub Repositories**
- [Front-End Repository](https://github.com/Dearie-de-cybek/Fullstack-CW.git)
- [Back-End Repository](https://github.com/Dearie-de-cybek/FullStack-CW-Backend.git)

### **Hosted Applications**
- [Live Front-End App (GitHub Pages)](https://dearie-de-cybek.github.io/Fullstack-CW/)
- [Live Back-End API (Render.com)](https://fullstack-cw-backend.onrender.com/)

---

## **Database Exports**
Exported data in `.json` format for the `lessons` and `orders` collections can be found below:
- [Lessons Collection Export](./lessons.json)
- [Orders Collection Export](./orders.json)

---

## **Postman Collection**
The Postman collection includes requests for testing the API endpoints. You can download it here:
- [Download Postman Collection](https://documenter.getpostman.com/view/24466122/2sAYBYgAZk)

### **Postman Requests Included**
1. **GET** `/collections/lessons`  
   Fetches all lessons with their details.
2. **POST** `/collections/orders`  
   Saves a new order to the database.
3. **PUT** `/collections/lessons/:id`  
   Updates the available spaces for a lesson after an order is placed.

---

