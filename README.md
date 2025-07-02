#  Recipe Book Web Application

This project is a web-based application designed to manage and display personal recipes. It allows users to add, view, and search for dishes in a visually appealing and user-friendly format. Built using only HTML, CSS, and JavaScript, this application stores all recipe data locally in the browser using `localStorage`, ensuring persistence across sessions without requiring a backend.

---

## Objective

The goal of this project is to create a dynamic, responsive recipe book that provides:

- A simple interface to **add recipes** with image, name, ingredients, and preparation steps.
- A **searchable** recipe list with a clean tile view (only image and name).
- A **detailed view** when a user clicks a recipe tile.
- A **persisted experience** using localStorage so the data remains intact even after refreshing or closing the browser.

---

##  Features

###  Add Recipes
- Users can add recipes using a modal form.
- Input fields include:
  - Recipe Name
  - Ingredients (separated by commas)
  - Preparation Steps (multi-line textarea)
  - Upload Photo (styled button)
- Input validation ensures all fields are filled.

###  View Recipes
- Main page shows **only the recipe image and name** in a grid layout.
- Clicking on a recipe tile displays the full details in a scrollable, styled overlay.
- A **"Close" button** brings the user back to the main view smoothly.

###  Search Functionality
- Search bar filters recipes by name or ingredients.
- Responsive search with instant filtering.

###  Data Persistence
- All recipes are stored using **`localStorage`**.
- Recipes persist even after refreshing or closing the browser.

###  Design
- The color theme uses warm beige, white, soft blue, and dark gray for a clean and professional look.
- Fully responsive layout across devices.
- Custom styling for the upload photo button.
- Smooth transitions and scroll behavior.

---

## 🛠 Technologies Used

- HTML5
- CSS3 (with modern layout techniques and responsive design)
- JavaScript (ES6)
- `localStorage` API

---

##  Setup and Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)

### Steps

1. Clone or download the repository from GitHub:
   - git clone https://github.com/lakshmi-ridhanya-a/Recipe-book.git

2. Navigate into the folder:
   - cd Recipe-book

3. Open `index.html` in your preferred browser.

>  All recipe data will be saved locally in your browser.

---

##  File Structure

Recipe-book/
│
├── index.html 
├── style.css 
├── script.js
└── README.md 


---

##  How It Works

1. User opens the app and sees a grid of recipes (name + image).
2. Clicking a recipe opens a modal with full details and a "Close" button.
3. "Add Recipe" button opens a form modal to input new recipes.
4. Recipes are stored locally and dynamically rendered to the UI.
5. Search field filters recipes live by name or ingredients.

![image](https://github.com/user-attachments/assets/f54d0ee1-30dc-4473-81a2-1357011c44fe)


---

##  Evaluation Criteria

| Component       | Description                                          |
|----------------|------------------------------------------------------|
| Functionality   | Full CRUD using localStorage                        |
| Code Quality    | Modular, clean, and commented JS                    |
| UI/UX           | Pastel theme, clean tile layout, smooth scrolling   |
| Responsiveness  | Fully responsive for desktop, tablet, and mobile    |
| Validation      | Input validation before saving recipe               |

---

##  Future Enhancements

- Edit and Delete recipe functionality.
- Export/import recipes as JSON or CSV.
- Firebase integration for cloud storage.
- User login with basic authentication.
- Theme switcher (dark mode).
- Tag-based filtering.

---

##  License

This project is open for **educational and personal use**. Feel free to use and modify the code with attribution. Commercial use is not permitted without explicit permission.

---

##  Author

**Lakshmi Ridhanya A**  
B.Tech Computer Science and Engineering  
Amrita Vishwa Vidyapeetham

---



