import React from 'react';

export const ProfileDetails = ({ userDetails }) => {
  return (
    <>
      <div className="projects-header">
        <h1>Profile Details</h1>
      </div>
      <p>Username: {userDetails.username}</p>
      <p>Email: {userDetails.email}</p>
      <div className="projects-section">
        <h4>Anything you want to change?</h4>
      </div>
    </>
  );
};
