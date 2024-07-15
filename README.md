# Foodit - Food Ordering Mobile Application

Foodit is a mobile application designed to streamline the food ordering process, providing users with an intuitive and seamless experience for browsing, selecting, and ordering from a variety of restaurants. Leveraging the power of React Native, Redux Toolkit, and NativeWind, Foodit ensures smooth navigation, efficient state management, and visually appealing styling. The app features comprehensive restaurant listings, detailed menu displays, and a robust cart system, all while maintaining a user-friendly interface for optimal performance and usability.

## Tech Stack

- React Native: Provides a framework for building the mobile application.
- React Navigation: Enables seamless navigation throughout the app. (stack navigation)
- Redux Toolkit: Facilitates efficient state management within the application.
- NativeWind: Simplifies the styling of components using utility classes similar to TailwindCSS.
- TailwindCSS: Provides a utility-first CSS framework for quickly styling components (used with NativeWind).
- React Native Vector Icons: Provides a library of icons for use in the application.
- React Native Linear Gradient: Allows for the creation of gradient backgrounds and other effects.
- React Native Modal: Provides customizable modal components.
- React Native Shimmer Placeholder: Adds shimmer effects to placeholder components during content loading.

## Features

- #### Restaurants Listing Page :

  - Display All Restaurants: Fetches and displays all restaurants using the FlatList component, differentiating between veg and non-veg restaurants with Higher Order Components (HOCs).
  - Search Filter: Enables searching for restaurants based on name.
  - Top Rated Restaurant Filter: Filter to show top-rated restaurants.
  - Home Cart Info Details : Displays cart details on the home page with restaurant information.
  - Clear Cart Modal: Modal to clear all items in the cart.

- #### Restaurant Menu Page :-

  - Restaurant Description: Displays the information about the restaurant.
  - Menu Categories: Renders the restaurant's menu with different categories using FlatList.
  - Truncated Description: Shows a shortened version of the menu item descriptions, with the option to toggle to view the full description of menu item.
  - Category Toggle: Toggles the visibility of menu categories.
  - Add to Cart: Add items to the cart.
  - Remove from Cart: Remove items from the cart.
  - Adjust Quantity: Increases or decreases the quantity of items in the cart.
  - Cart Info Footer: Displays the number of items in the cart and provides a link to navigate to the cart page.
  - Replace Cart Item Modal: Modal to replace items in the cart.

- #### Cart Page

  - Modal Display: Shows the cart page as a modal using stack navigation.
  - Cart Header: Displays restaurant information.
  - Cart Items: Displays the total items in the cart for a particular restaurant using FlatList, including menu item information, quantity, and calculated price according to quantity.
  - Cart Footer: Displays the total order amount based on a dummy delivery fee.

- Redux Store :- Efficiently manages cart information, handling all CRUD operations and maintaining restaurants information.
- Ensured clean and readable code by separating concerns and implementing custom hooks for various logic and features,
- Shimmer UI : Provides loading placeholders for both the restaurant list and restaurant menu pages.

## Screenshots of the App
<img width="200" alt="Screenshot 2024-07-15 at 12 22 37 PM" src="https://github.com/user-attachments/assets/74d061ba-f120-4162-824c-addfd2e2d560"> &nbsp;
<img width="200" alt="Screenshot 2024-07-15 at 12 23 04 PM" src="https://github.com/user-attachments/assets/521374f3-ac7b-4b10-a686-fd413761f148"> &nbsp;
<img width="200" alt="Screenshot 2024-07-15 at 12 23 29 PM" src="https://github.com/user-attachments/assets/4f86c555-c22c-46d0-89e4-dc9fd19c7c61"> &nbsp;
<img width="200" alt="Screenshot 2024-07-15 at 12 25 27 PM" src="https://github.com/user-attachments/assets/4fccc889-497a-43b3-9351-0c58820f8d2e"> &nbsp; 
<img width="200" alt="Screenshot 2024-07-15 at 12 25 43 PM" src="https://github.com/user-attachments/assets/4010fde8-a74c-4d01-acdb-e91382dd3ca1"> &nbsp;
<img width="200" alt="Screenshot 2024-07-15 at 12 26 03 PM" src="https://github.com/user-attachments/assets/5cd3deb1-fb34-450c-bc0d-232ed4dba80c"> &nbsp;
<img width="200" alt="Screenshot 2024-07-15 at 12 26 23 PM" src="https://github.com/user-attachments/assets/3d58ff1c-9081-46f7-9f3f-915231f36cf6"> &nbsp;
<img width="200" alt="Screenshot 2024-07-15 at 12 27 15 PM" src="https://github.com/user-attachments/assets/96166f3d-d375-4636-863a-5d2dd22538c7"> &nbsp;

## ScreenRecording of the App

https://github.com/user-attachments/assets/00a1244d-557b-4f01-9131-ef589dfacbc8


