import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "../Box";
import Sketch from "../Sketch";
import styles from "../../styles/ExpenseMate.module.css";
import { arcDraw, arcSetup } from "../sketches/arcSketch";
import { stagger } from "framer-motion";


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
          <div className={styles.devProcessSection}>
            <h2 className={styles.devProcessTitle}>Development Process</h2>
            <h2 className={styles.devProcessSubHeading}>FrontEnd & API Integration</h2>
            <div className={styles.devProcessItem}>
              <h3>Initial Setup and Architecture</h3>
              <p>
                The React frontend was structured into reusable components, such as <strong>Dashboard</strong>, <strong>ExpensesPage</strong>, and <strong>IncomePage</strong>, allowing for modular development. Each page
                consists of smaller components like <strong>SummaryCardsSection</strong>, <strong>ExpenseList</strong>, and <strong>ChartsSection</strong>,
                facilitating a clean and maintainable architecture.
              </p>
              <p>
                The project uses <strong>Redux</strong> for global state management,
                centralizing the state for expenses, income, user authentication, and
                notifications. This makes it easy to handle complex state interactions
                across the app, with each slice (e.g., <strong>incomeSlice</strong>, <strong>expensesSlice</strong>) managing specific parts of the data.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>State Management with Redux</h3>
              <p>
                Redux slices (<strong>incomeSlice</strong>, <strong>expensesSlice</strong>, <strong>userSlice</strong>) were developed to manage the core state of
                the app, such as user login, fetching income/expense data, and handling
                CRUD operations. <strong>Redux Thunks</strong> were utilized to handle
                asynchronous actions, ensuring seamless API interactions.
              </p>
              <p>
                The <strong>store.js</strong> file consolidates all reducers, combining
                slices like expenses, income, user, and notification, making the state
                management modular and scalable.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>Authentication and Protected Routes</h3>
              <p>
                The app implements <strong>JWT-based authentication</strong>, managing
                user sessions using the <strong>userSlice</strong> in Redux. After login,
                JWT tokens are stored securely, and protected routes (like <strong>Dashboard</strong>,
                <strong>ExpensesPage</strong>, and <strong>IncomePage</strong>) are only
                accessible to authenticated users.
              </p>
              <p>
                The <strong>ProtectedRoute</strong> component ensures that users cannot
                access sensitive pages without being logged in. It redirects unauthenticated
                users to the login page.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>API Design and CRUD Operations</h3>
              <p>
                The backend API was designed to handle CRUD operations for expenses and income. <strong>Async Thunks</strong> (e.g., <strong>fetchIncomesAsync</strong>, <strong>addIncomeAsync</strong>, <strong>updateIncomeAsync</strong>, <strong>deleteIncomeAsync</strong>) were used to fetch and manipulate
                financial data from the backend. The state is updated dynamically as users
                add, edit, or delete entries, with notifications providing feedback.
              </p>
              <p>
                For both expenses and income, additional functionality was developed to track
                trends over time using selectors like <strong>selectExpenseTrendsData</strong> and <strong>selectIncomeTrendsData</strong>, which format data for visual representation.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>UI/UX and Theming</h3>
              <p>
                The app's UI is designed using <strong>Material-UI</strong> for a consistent
                and responsive experience across devices. Components like <strong>TextField</strong>, <strong>Button</strong>, and <strong>Container</strong> are utilized throughout
                the app for input forms and layout structures.
              </p>
              <p>
                Theming was implemented using a custom <strong>ThemeContext</strong>, allowing
                users to toggle between light and dark modes. This was integrated with <strong>Material-UI’s ThemeProvider</strong>, and user preferences are
                persisted using Redux in the <strong>userSlice</strong> and stored in localStorage.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>Notification System</h3>
              <p>
                A global notification system was developed using <strong>Redux</strong> and <strong>Snackbar</strong> from Material-UI. This system provides real-time
                feedback to users for actions like adding expenses, updating profiles, or
                handling errors. Notifications are triggered by dispatching actions like <strong>showNotification</strong>, ensuring the user is informed about
                the success or failure of operations.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>Routing and Navigation</h3>
              <p>
                <strong>React Router</strong> is used for client-side routing, ensuring
                smooth transitions between pages like <strong>LoginPage</strong>, <strong>Dashboard</strong>, <strong>ExpensesPage</strong>, and <strong>IncomePage</strong>. Routes are nested, with protected routes
                requiring authentication.
              </p>
              <p>
                A <strong>Router</strong> component wraps the app’s navigation, and
                routes are protected by the <strong>ProtectedRoute</strong> component,
                redirecting unauthenticated users to the login page.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>Error Handling and Data Validation</h3>
              <p>
                Error handling was built into <strong>Redux Thunks</strong>, where errors
                from the backend API are caught and dispatched as rejected actions. These
                errors are reflected in the UI with appropriate feedback via
                <strong>Material-UI’s Snackbar</strong>, informing users if an action
                (like saving data) failed.
              </p>
            </div>

            <div className={styles.devProcessItem}>
              <h3>Deployment</h3>
              <p>
                The frontend was deployed on <strong>Vercel</strong>, and the backend was
                deployed on <strong>Render</strong>. Both services ensure smooth and fast
                delivery of the app to end-users. The deployment pipelines allow for
                continuous updates as features are added.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ExpenseMate;
