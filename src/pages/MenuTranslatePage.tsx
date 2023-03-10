import React, { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
}

function MenuTranslatePage() {
  const [formValues, setFormValues] = useState<FormValues>({ name: '', email: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <h1>My Custom Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MenuTranslatePage;
