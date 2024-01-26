import React, { useState, useEffect } from 'react';
import { fetchUsers } from './apiService';
import './UserList.css';
import { User } from './apiService';
import Pagination from './Pagination';

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true);
            try {
                const { users, totalPages } = await fetchUsers(currentPage, searchTerm);
                setUsers(users);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getUsers();
    }, [currentPage, searchTerm]); // Include searchTerm in the dependency array

    const handleDelete = async (userId: number) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`http://localhost:3000/users/${userId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setUsers(users.filter(user => user.id !== userId));
                } else {
                    console.error('Failed to delete the user');
                }
            } catch (error) {
                console.error('There was an error deleting the user:', error);
            }
        }
    };

    return (
        <div className="user-list-container">
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to the first page when search term changes
                }}
                className="search-input"
            />
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id} className="user-list-item">
                        <span className="user-details">
                            {user.name} - {user.email}
                        </span>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default UserList;
