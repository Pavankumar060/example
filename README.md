## E-Commerce Website Project

A simple E-commerce site was developed using different aspects from existed ecommerce sites.
Since as pasrt of frontend only , No apis were used here but the processes invloived in API integrations ands Products management was delt by using an array of products and array methods.

## Challenge Details

# Product Listing

- Displayed products with images, names, prices, and "Add to Cart" & 'Remove' buttons.
- Implemented filters to sort products by category, price and ratings.

# Shopping Cart

- Implemented a cart section to display the added products, quantities, and total cost.
- Users can increase, decrease, or remove items from the cart.
- Displayed real-time updates of the cart total and item count.

# Checkout

- Implemented a checkout process that calculates the total cost of items in the cart.
- Users need to enter shipping information and payment details.

# Responsive Design

- Whole website is responsive and works seamlessly on both desktop and mobile devices.
- Optimized the layout for different screen sizes.

The project structure follows typical React conventions, with components organized logically in a folder structure. Here is an example of the project structure:

markdown
Copy code

- src/
  - components/
    - Home.js
    - Cart.js
    - Checkout.js
    - cartoperations
  - App.js
  - index.js
- data/
  - products.js
- public/
- README.md
- package.json
- ...
  The data/products.js file contains an array of products that will be used throughout the project.

The components/cartoperations file contains functionality of saving and retreiving cart items from local storage with validity of 7days.
