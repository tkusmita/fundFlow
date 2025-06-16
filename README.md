

# FundFlow: A Fund Management System for Non-Profits

-----

## Table of Contents

  * [About](https://www.google.com/search?q=%23about)
  * [Features](https://www.google.com/search?q=%23features)
  * [Technology Stack](https://www.google.com/search?q=%23technology-stack)
  * [Project Phases & Progress](https://www.google.com/search?q=%23project-phases--progress)
  * [Getting Started](https://www.google.com/search?q=%23getting-started)
  * [Contact](https://www.google.com/search?q=%23contact)

-----

## About

**FundFlow** is a MERN stack application designed to empower non-profit organizations with efficient and transparent fund management. Our mission is to simplify the complex processes of donor engagement, fundraising, and financial tracking, allowing **FundFlow**s to maximize their impact.

Inspired by the critical need for **accountability and clarity in financial giving**, FundFlow aims to build trust between donors and organizations. By providing a centralized platform, we help **FundFlow**s reduce administrative overhead and clearly demonstrate how contributions are utilized, ultimately fostering a more sustainable and impactful giving ecosystem.

-----

## Features

FundFlow provides a comprehensive set of features tailored to the unique needs of non-profit operations:

### Core Operational Features

  * **Secure Authentication & Access Control**: Robust registration and login for both **general users (donors, volunteers)** and **FundFlow administrators**.
  * **FundFlow Registration & Verification**: Non-profit organizations can register their establishments, with a built-in process for verification to ensure legitimacy.
  * **Donor Management**: Comprehensive tracking of donor information, including donation history and communication preferences.
  * **Campaign & Project Creation**: Tools for administrators to define, launch, and manage various fundraising campaigns or specific charitable projects.
  * **Donation Processing**: Securely accept and record both one-time and recurring financial contributions.
  * **Transparent Fund Allocation**: Crucially, the ability to **clearly allocate received funds to specific campaigns or projects**, providing a real-time overview of fund utilization.
  * **Reporting & Analytics**: Generate insightful reports on donor trends, campaign performance, and detailed financial breakdowns of fund usage.
  * **Automated Communication**: Send personalized **thank-you notes, donation receipts, and project updates** via automated email notifications.
  * **Official Document Generation**: Generate professional **receipts and tax documents** for donors, simplifying their record-keeping.
  * **Secure Payment Integration**: Seamless integration with secure payment gateways for all financial transactions.

### Enhanced Engagement & Accountability Features

  * **Interactive Donor Dashboards**: Personalized portals for donors to view their contribution history and track the impact of their giving on specific projects.
  * **Pledge Management**: Track and manage pledges made by donors, ensuring proper follow-up and fulfillment.
  * **User Preferences & Personalization**: Tailor communication and suggest relevant campaigns based on donor history and interests.
  * **In-App Communication**: Facilitate direct, real-time communication between donors and **FundFlow** administrators for inquiries or updates.

-----

## Technology Stack

FundFlow is built using the industry-standard **MERN stack**, leveraging a powerful combination of modern web technologies to ensure a scalable, high-performance, and reliable application.

### Frontend

  * **Next.js (with App Router)**: Our choice for building a fast, SEO-friendly, and scalable React application, utilizing server-side rendering and static site generation capabilities.
  * **Shadcn UI**: Provides a collection of beautifully designed and accessible UI components built with Radix UI and Tailwind CSS, ensuring a consistent and polished user experience.
  * **Formik & Yup**: Utilized for streamlined **form state management and robust client-side validation**, ensuring data integrity.
  * **Axios**: A promise-based HTTP client for making efficient and secure API requests to the backend.
  * **Redux Toolkit**: The official, opinionated, and battery-included toolset for managing application state, ensuring predictability and scalability.

### Backend

  * **Node.js & Express.js**: The core of our server-side logic, providing a fast, unopinionated, and flexible JavaScript runtime and web framework.
  * **Mongoose**: An elegant MongoDB object data modeling (ODM) library for Node.js, simplifying interactions with our NoSQL database through a schema-based approach.
  * **bcrypt**: A cryptographic library used for **securely hashing passwords**, protecting user credentials.
  * **jsonwebtoken (JWT)**: Implemented for secure, stateless authentication by generating and verifying tokens, allowing users to access protected resources.
  * **Nodemailer**: Integrated for robust **email sending capabilities**, enabling automated receipts, thank-you notes, and other communications.

### Database

  * **MongoDB**: A powerful NoSQL, document-oriented database that offers high flexibility, scalability, and performance for storing all application data, including donor records, campaign details, and fund transactions.

-----

## Project Phases & Progress

We are developing FundFlow in distinct, iterative phases, focusing on building a robust core before expanding to more advanced features.

### Phase 1: Foundational Authentication & Basic Data Management (Currently In Progress)

**Goal**: Establish the fundamental user and administrator authentication systems and lay the groundwork for managing core data entities.

  * **Frontend**:
      * ✅ Implemented **User Login** page.
      * ✅ Implemented **User Register** page.
      * ✅ Basic **Logout** functionality.
      * ⬜ Admin Login/Dashboard interface.
      * ⬜ **FundFlow** Registration Form.
      * ⬜ Initial dashboard views for users/donors.
  * **Backend (Completed up to)**:
      * ✅ **User Registration Endpoint**: Allows new users to sign up securely, checking for existing emails and hashing passwords using **bcrypt**.
      * ✅ **User Login Endpoint**: Authenticates users by verifying email existence, comparing passwords with **bcrypt**, and generating a **JWT** upon successful login.
      * ✅ **Get All Users Endpoint**: (For internal use/testing) Retrieves a list of all registered users.
      * ⬜ **FundFlow** Registration Endpoint (pending verification flow).
      * ⬜ Endpoints for submitting basic donation data.

### Phase 2: Core Fund Management, Donor & Campaign Tools (Upcoming)

**Goal**: Implement comprehensive donor and campaign management, along with initial fund tracking and automated communications.

  * ⬜ **Donor Profile Management**: CRUD (Create, Read, Update, Delete) operations for detailed donor information and their giving history.
  * ⬜ **Campaign Creation & Management**: Tools for **FundFlow** administrators to create, edit, and track various fundraising campaigns and specific projects.
  * ⬜ **Fund Allocation System**: Core functionality to explicitly link donations to specific campaigns or projects.
  * ⬜ **Automated Thank-You Emails & Receipts**: Implement sending automated email confirmations for donations and thank-you notes.
  * ⬜ **Payment Gateway Integration**: Integrate a secure payment gateway for seamless and secure transactions (initially in a test environment).
  * ⬜ **Basic Financial Reporting**: Generate summary reports on total donations and campaign progress.

### Phase 3: Advanced Analytics, Transparency & Engagement (Future)

**Goal**: Enhance the system with powerful analytics, advanced transparency features, and richer user engagement tools.

  * ⬜ **Interactive Dashboards**: Visual dashboards for administrators, providing real-time insights into fundraising performance and fund utilization.
  * ⬜ **Advanced Reporting & Audit Trails**: Customizable, detailed reports and comprehensive audit logs for all financial transactions.
  * ⬜ **Pledge Management**: A dedicated module to track and manage multi-installment pledges.
  * ⬜ **In-App Communication**: Implement a real-time chat feature for direct communication between users, volunteers, and **FundFlow** staff.
  * ⬜ **Public Transparency Portal**: An optional, public-facing component allowing **FundFlow**s to share aggregated fund utilization data and project progress with full transparency.
  * ⬜ **Impact Storytelling**: Features to allow **FundFlow**s to showcase the direct impact of donations through narratives and updates.

-----

## Getting Started

To get a local copy of FundFlow up and running for development or testing, follow these simple steps.

### Prerequisites

Ensure you have the following software installed on your machine:

  * **Node.js (LTS version recommended)**: The JavaScript runtime environment.
  * **MongoDB**: A local installation or access to a cloud-based service like MongoDB Atlas.

### Installation

1.  **Clone the Repository**:
    Open your terminal or command prompt and run the following command:

    ```bash
    git clone <your-repository-url>
    cd fundflow
    ```

2.  **Backend Setup**:
    Navigate into the `backend` directory, install the necessary Node.js packages, and configure your environment variables:

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory. Populate it with your MongoDB connection string, a secure JWT secret, and your email credentials for sending automated notifications (e.g., thank-you emails). **Ensure your `JWT_SECRET` is complex and kept private.**

    ```env
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="a_strong_random_secret_key_for_jwt_which_is_very_long_and_unique"
    # Optional: For email sending with Nodemailer (e.g., for thank you notes)
    EMAIL_USER="your_email_for_sending_notifications@example.com"
    EMAIL_PASS="your_email_app_password_or_regular_password"
    ```

    Start the backend server:

    ```bash
    npm start
    ```

3.  **Frontend Setup**:
    Open a *new* terminal window, navigate back to the root `fundflow` directory, then into the `frontend` directory. Install its dependencies and start the development server:

    ```bash
    cd ../frontend
    npm install
    ```

    Run the frontend development server:

    ```bash
    npm run dev
    ```

    The FundFlow frontend application should now be accessible in your web browser at `http://localhost:3000`.

-----

## Contact

We're excited about FundFlow and always open to questions, feedback, or collaboration\! Feel free to reach out.

  * **Project Lead**: [kusmita timsina ]
  * **Email**: [Your Email Address]
  * **GitHub Repository**: [Link to your GitHub profile/project]
