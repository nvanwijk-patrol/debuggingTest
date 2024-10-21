# Debugging Task - Shopify Product Title Update

## Overview

Welcome to the debugging task! The goal of this exercise is to assess your debugging and problem-solving skills by working on a single-page application that retrieves product information from a Shopify store and allows users to update the product titles. However, the current implementation has several bugs that need to be fixed.
This task is part of the application for a role of founding engineer at Patrol AI inc.

### Expected Time

- **Estimated Time:** 30 - 60 minutes.

## Task Description

You have been provided with a Remix application designed to fetch products from a Shopify store and display them on a webpage. Users should be able to update the titles of these products. Unfortunately, there are several issues in the current implementation, and your job is to identify and fix them.

### Current Issues:
1. **API Route Errors:** The app may be incorrectly handling the API requests, leading to 404 errors or failed updates.
2. **State Management Issues:** The application might not correctly handle state updates after form submissions.
3. **Form Handling Errors:** The form may not correctly capture or submit the necessary data to update the product title.

### Bonus Objective:
- **Use Strong Typing:** Refactor the code to use strong typing features of TypeScript wherever applicable. This includes defining interfaces or types for API responses, form data, and other key parts of the application.
- **Migrate the app to use Shopify's GraphQL API:** Shopify is in the process of depreciating their REST API. Can you convert this application to the updated equivalent methods. 

### Additional Information:
- **Sample Video:** A sample video of the functional application is provided to help you understand the expected behavior.
- **Concurrency Warning:** In the rare case that multiple applicants are working on this task simultaneously, you may encounter unexpected updates to product titles. Please be aware of this possibility during your testing.

## Steps to Complete the Task

1. **Clone the Repository:**
   - Download the provided ZIP file or repository and extract it to your local development environment.

2. **Set Up the Environment:**
   - Install the necessary dependencies by running:
     ```bash
     npm install
     ```

3. **Run the Application:**
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Debug and Fix the Issues:**
   - Identify the bugs in the application related to API requests, form handling, state management, and UI rendering.
   - Fix the issues to ensure that the application works as expected. Users should be able to update the product titles without errors.

5. **Implement the Bonus Objective (Optional):**
   - Add comments to the codebase to improve readability and maintainability.
   - Use TypeScript’s strong typing features to define types or interfaces for the data structures and ensure type safety throughout the application.
   - Retrieve the equivalent data from the GraphQL API as opposed to the REST API

6. **Test Your Fixes:**
   - Test the application thoroughly to ensure all identified issues are resolved.
   - Ensure that all changes are correctly reflected in the Shopify Admin and on the front-end of the application.

## Submission

1. **Prepare Your Submission:**
   - Ensure your code is clean, well-documented, and clearly explains any changes made.
   - Include a brief explanation of each bug you found and how you resolved it in a separate `BUGFIX.md` file.

2. **Submit Your Work:**
   - Compress the project directory into a ZIP file.
   - Email the ZIP file to nico@patrolapp.ai.

## Important Notes

- The application should be fully functional upon submission, with all the bugs fixed.
- Attempting the bonus objective is optional but encouraged, as it will help demonstrate your coding style and attention to detail.

## Questions?

If you have any questions or encounter any issues, feel free to reach out to nico@patrolapp.ai.
