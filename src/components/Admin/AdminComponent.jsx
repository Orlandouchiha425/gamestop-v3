import React from "react";

function AdminComponent({ user, setUser, admin, setAdmin }) {
  console.log("User:", user);
  console.log("Admin:", admin);
  console.log("Admin:", setAdmin);

  return (
    <>
      <div>Welcome Admin</div>;<h3>your role is: {admin.role}</h3>
      <h3></h3>
    </>
  );
}

export default AdminComponent;
