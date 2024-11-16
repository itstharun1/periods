import React, { useState } from 'react';

const RoutineForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, subscribe });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="subscribe">Subscribe to Daily Routine Notifications:</label>
        <input
          type="checkbox"
          id="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RoutineForm;
