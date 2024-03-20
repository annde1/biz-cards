

## Business Card System

### Overview

The Business Card System is a web application that allows business users to showcase their business cards. Regular users can view cards, like them, and access basic details. Business users, on the other hand, have additional functionalities such as editing and deleting their own cards. The system provides a user-friendly interface, ensuring a seamless experience for both regular and business users.

### Features

#### Business User Features

Create, Edit, and Delete Cards:

Business users can create new business cards, providing details about their businesses.
They can edit the details of their existing cards to keep information up to date.
The delete option allows users to remove their cards from the system.

Profile Area:

Edit Profile: Users can update their personal information and change their business status.
Delete Profile: Users have the option to permanently delete their profile from the system.

#### Regular User Features

View Cards:

Regular users can browse and view cards created by business users.
Clicking on the info icon displays a modal with additional details about the business.

Like Cards:

Regular users can like cards, adding them to their favorite cards page.
Profile Area:

Edit Profile: Non-business users can update their personal information.
Admin Features

#### CRM Section:

Admin users have access to a CRM section where they can view a list of all users in the system along with their details.
They can update the business status of users and delete user profiles.

#### Technologies Used

React Library: Used for building a responsive and interactive user interface.
Axios Requests: Utilized for making asynchronous requests to the server.
Conditional Rendering: Implemented to show or hide features based on user roles.
LocalStorage/SessionStorage: User login status is stored locally or session-wise based on user preference.
Custom Hooks: Developed to encapsulate common functionality and reuse code.
Toastify Service: Integrated for providing user feedback through toast notifications.
React Router: Implemented for navigation within the application.

### Getting Started

#### Clone the Repository

git clone https://github.com/annde1/business-card-system.git
cd business-card-system

#### Install Dependencies

npm install

#### Run the Application

npm start

#### Access the Application

Open your browser and navigate to http://localhost:3000.
