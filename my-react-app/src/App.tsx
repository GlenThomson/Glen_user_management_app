import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import './App.css';

const App = () => {
    return (
        <div>
            <h1 className="page-title">User Management App</h1>
            <UserForm />
            <UserList />
        </div>
    );
};

export default App;
