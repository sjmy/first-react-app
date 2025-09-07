import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    firstName: "Sleve",
    lastName: "McDichael",
    age: 174,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstName = (entry) => {
    setPerson({ ...person, firstName: entry });
  };

  const handleLastName = (entry) => {
    setPerson({ ...person, lastName: entry });
  };

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => handleFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => handleLastName(e.target.value)}
      />
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default Person;
