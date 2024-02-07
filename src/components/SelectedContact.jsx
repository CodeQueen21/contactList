import React, { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  console.log("contacts!: ", contact);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log(result);
        setContact(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact();
  }, []);

  return (
    <div>
      {contact && (
        <div>
          <h1>Username: {contact.name}</h1>
          <h1>Phone: {contact.phone}</h1>
          <h1>Email: {contact.email}</h1>
        </div>
      )}
    </div>
  );
}
