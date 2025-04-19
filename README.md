Create a web application to facilitate bulk vegetable/fruit orders. Buyers can browse available products, place bulk orders, and track their status, while admins can manage orders and inventory efficiently. The main objectives are to develop a full-stack web application with a user-friendly interface, a robust backend, and an efficient database design. The expected learning outcomes include proficiency in Next.js/React.js, API development, database management, and deployment strategies.

Step-by-Step Instructions:

Project Setup and Initialization:

Project Directory Setup: 

Create a new directory for the project.

Initialize Project: Use npx create-next-app or create-react-app to initialize a new Next.js or React.js project within the directory. Choose TypeScript if desired.

Install Dependencies: Install necessary dependencies such as axios (for API requests), react-hook-form or formik (for form management), yup or zod (for form validation), and any UI library you choose (e.g., Material UI, Tailwind CSS, Chakra UI). Also install the PostgreSQL client library, such as pg if not using an ORM.

Initialize Git Repository: Initialize a Git repository in the project directory using git init.

Frontend Development:

Product Catalogue Page: Create a page to display the product catalogue fetched from the API.

Order Placement Form: Create a form for buyers to enter their details, select products, and specify quantities and delivery information.

Order Tracking View: Create a page where buyers can check the status of their orders using the order ID.

Admin Dashboard: Create a dashboard for admins to view and manage orders, and manage the product catalogue.

API Integration: Integrate the frontend components with the backend API to fetch data and submit orders.

State Management: Use React Context, Redux, Zustand, or similar for state management, especially for shared data like the product catalogue and user authentication status.

Order Status Logic: Implement logic to manage and update order statuses, ensuring proper transitions between "Pending", "In Progress", and "Delivered".

Inventory Management Logic: Implement logic to add, edit, and remove products from the catalogue.

Styling and Design:

UI Library/CSS Framework: Choose a UI library or CSS framework (e.g., Material UI, Tailwind CSS, Chakra UI, Bootstrap) to ensure a consistent and responsive design.

Responsive Design: Implement responsive design principles to ensure the application works well on different screen sizes.

User Experience (UX): Focus on creating an intuitive and user-friendly interface with clear navigation and feedback mechanisms.

Deployment:

Vercel Deployment: Create an account on Vercel.

Connect to GitHub: Connect your GitHub repository to Vercel.

Configure Environment Variables: Configure environment variables on Vercel with the database credentials from Neon.tech or your Docker setup.

Deploy Application: Deploy the application to Vercel.

Test Deployment: Test the deployed application to ensure it is working correctly.

Submission Guidelines:

GitHub Repository:

Source Code: Ensure all source code is committed to the GitHub repository.

README.md: Create a README.md file with:

A brief description of the project and implemented features.

Setup instructions for running the application locally.

Instructions for setting up the database.

Any other relevant information.
