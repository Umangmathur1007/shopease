import React, { useState, useRef } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main Street, Mumbai',
    phone: '+91 9876543210',
    avatar: '/img/user1.jpg', 
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <div className="avatar-section">
        <img src={formData.avatar} alt="Profile Avatar" className="avatar-img" />
        {editMode && (
          <>
            <button
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
              type="button"
            >
              Change Picture
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleAvatarChange}
            />
          </>
        )}
      </div>

      {!editMode ? (
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button className="edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSave}>
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <div className="form-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Profile;
