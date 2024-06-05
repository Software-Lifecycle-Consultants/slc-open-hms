import { useState } from 'react';

// EmailForm component definition
const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

   // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    // State variables for managing email input, sending status, and error messages
    e.preventDefault(); // Prevent default form submission
    setIsSending(true); // Set sending status to true
    setError(''); // Clear any previous errors

    try {
      // Send POST request to the send-pdf-email API endpoint
      const response = await fetch('/api/send-pdf-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // If the response is ok, parse the JSON response
        const result = await response.json();
        alert(result.message); // Alert the success message 
      } else {
         // If the response is not ok, parse the error message
        const { error } = await response.json();
        setError(error); // Set the error state
      }
    } catch (error) {
      console.error('Error sending email:', error); // Log the error
      setError('Failed to send email'); // Set a generic error message 
    } finally {
      setIsSending(false); // Reset the sending status
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit" disabled={isSending}>
        {isSending ? 'Sending...' : 'Send Email'}
      </button>
    </form>
  );
};

export default EmailForm;