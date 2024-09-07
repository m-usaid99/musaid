import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "../Box";
import Sketch from "../Sketch";
import styles from "../../styles/ExpenseMate.module.css";
import { arcDraw, arcSetup } from "../sketches/arcSketch";


function ExpenseMate() {

  return (
    <Box sketch={<Sketch setup={arcSetup} draw={arcDraw} />}>
      <div className={styles.topBar}>
        <Link to="/" className={styles.homeLink}>HOME</Link>
        <Link to="/projects" className={styles.homeLink}>PROJECTS</Link>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>ExpenseMate</h1>
        <h2 className={styles.subtitle}>a streamlined personal finance management tool</h2>
        <div className={styles.summaryContainer}>
          <p className={styles.summary}>
            ExpenseMate is a personal finance tool that helps users
            track income, expenses, and visualize financial data in real time.
            With an intuitive interface and expense categorization, users
            can efficiently manage their spending habits. Built with React,
            Redux, Express, and MongoDB, ExpenseMate provides a seamless experience across devices.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.viewProjectButton}>
            View GitHub Repository
          </button>
          <button className={styles.viewProjectButton}>
            View Live Demo
          </button>
        </div>
        <div className={styles.scrollIndicator}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 21l-12-18h24z" />
          </svg>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.featuresSection}>
            <h2 className={styles.featuresTitle}>Core Capabilities</h2>
            <ul className={styles.featuresList}>
              <li><strong>Real-time Income and Expense Tracking:</strong> Manage finances with instant updates to income and expenses, reflected immediately in the UI.</li>
              <li><strong>Data Visualization:</strong> Visualize financial data with dynamic charts, helping users track spending and income trends.</li>
              <li><strong>Category-based Expense Management:</strong> Organize transactions by customizable categories for easy filtering and analysis.</li>
              <li><strong>Secure JWT Authentication:</strong> Ensure secure session management and prevent unauthorized access to financial data.</li>
              <li><strong>Full CRUD Operations:</strong> Perform create, read, update, and delete operations with robust validation and error handling.</li>
              <li><strong>Responsive Design:</strong> Optimized for all devices, ensuring a smooth experience across desktops and smartphones.</li>
              <li><strong>Data Security:</strong> Input validation and security features protect against CSRF and XSS threats.</li>
              <li><strong>Real-Time UI Updates:</strong> Instantly reflect data changes in the UI without needing page reloads.</li>
            </ul>
          </div>
          <div className={styles.techStackSection}>
            <h2 styles={styles.techStackTitle}>Tools & Technologies</h2>
            <div className={styles.techStackList}>
              <div className={styles.techStackItem}>
                <h3>Frontend</h3>
                <p><strong>React:</strong> React was chosen for its ability to build dynamic, component-based UIs that can easily manage state and re-render when financial data changes. This allows users to interact with the app in real-time, like adding or updating income and expenses, without refreshing the page.</p>
                <p><strong>Redux:</strong> Redux was implemented to centralize and manage the app’s global state, particularly user data and financial records. Using Redux Thunk, the app handles asynchronous actions like API calls, ensuring that data fetching and updates occur smoothly without disrupting the user experience.</p>
                <p><strong>Material-UI:</strong> Material-UI provided ready-to-use, responsive components that allowed for rapid development while maintaining a professional and consistent design. Its grid system and pre-built elements such as forms and buttons ensured that the app remains visually cohesive across all devices.</p>
              </div>
              <div className={styles.techStackItem}>
                <h3>Backend</h3>
                <p><strong>Node.js:</strong> Node.js was selected for its non-blocking, event-driven architecture, which efficiently handles multiple concurrent requests. It powers the backend by processing API requests for adding, updating, and retrieving user financial data, ensuring fast server response times.</p>
                <p><strong>Express:</strong> Express was chosen as the backend framework for its lightweight and flexible nature, allowing for easy creation of RESTful API routes. These routes handle CRUD operations for financial records, managing incoming data and serving responses to the frontend.</p>
                <p><strong>MongoDB:</strong> MongoDB, a NoSQL database, was used for its flexibility in storing unstructured financial data. It allows for quick querying and updating of records, while Mongoose ensures data integrity through schema validation and provides an easy way to interact with the database.</p>
                <p><strong>JWT (JSON Web Tokens):</strong> JWT was implemented to secure user authentication and manage sessions in a stateless manner. After login, a JWT is generated and sent to the client, where it's used to verify user identity on subsequent requests, ensuring secure access to sensitive financial data.</p>
              </div>
            </div>
            <div className={styles.techStackItem}>
              <h3>Other Tools and Libraries</h3>
              <p><strong>Jest:</strong> Jest was used for unit and integration testing to ensure the app’s functionality remains consistent. It tests both frontend components and backend API endpoints, ensuring that user interactions and data flows behave as expected.</p>
              <p><strong>Axios:</strong> Axios was chosen for making HTTP requests between the frontend and backend. It simplifies API interactions, handling data submission and fetching while also attaching JWTs for secure user authentication in each request.</p>
              <p><strong>Swagger:</strong> Swagger was employed to auto-generate API documentation, making it easy to visualize, test, and interact with backend API routes during development, improving the overall efficiency of backend testing and debugging.</p>
              <p><strong>Vercel & Render:</strong> Vercel was used to deploy the frontend due to its fast and seamless integration with React, while Render hosts the backend, managing the Node.js server and ensuring API requests are handled reliably.</p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ExpenseMate;
