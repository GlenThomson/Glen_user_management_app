import React, { useState } from 'react';
import './UserForm.css'; // Import the CSS file
const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Prepare the user data
        const userData = { name, email };

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const createdUser = await response.json();
                console.log('User created:', createdUser);
                // Reset form fields
                setName('');
                setEmail('');
                // You may also want to update your user list here
            } else {
                console.error('Failed to create the user', response.status, response.statusText);
            }
        } catch (error) {
            console.error('There was an error creating the user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Create User</button>
        </form>
      );
    };

export default UserForm;
