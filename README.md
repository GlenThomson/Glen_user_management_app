## Project Information (Time taken aprox 5 hours)

- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MySQL
- **Authentication:** None
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Styling:** CSS
- **Pagination:** Implemented on the backend and frontend
- **Search Functionality:** Implemented on the backend with query parameters


To run this project locally, you'll need to have Node.js and MySQL installed on your machine.

1. Clone the repository:
git clone https://github.com/GlenThomson/user_management_app.git


2. Install dependencies for both the frontend and backend:
cd user-management-app/my-react-app
npm install

cd ../user-management-api
npm install

javascript
Copy code

3. Set up the `.env` file in the `user-management-api` directory with the following variables:
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=user_management_app


5. Start the backend server:
npm start

sql
Copy code

5. In a new terminal, start the React application:
cd my-react-app
npm start


6. The application should now be running and accessible at `localhost:3000`.
