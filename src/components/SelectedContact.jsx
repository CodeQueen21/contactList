import React from "react";

export default function SelectedContact({ selectedContact }) {
  return (
    <div>
      <h1>Username: {selectedContact.name}</h1>
      <h1>Phone: {selectedContact.phone}</h1>
      <h1>Email: {selectedContact.email}</h1>
    </div>
  );
}
