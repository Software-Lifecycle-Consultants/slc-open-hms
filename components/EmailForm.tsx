// components/EmailForm.tsx
import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try {
      const response = await fetch('/api/send-pdf-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send email');
    } finally {
      setIsSending(false);
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