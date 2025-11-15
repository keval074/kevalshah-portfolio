import { useState, FormEvent } from 'react';
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Typography,
} from '@mui/material';

interface ContactFormProps {
  formEndpoint?: string;
}

export default function ContactForm({ formEndpoint }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) {
      setAlert({ type: 'error', message: 'Please enter your name' });
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setAlert({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setAlert({ type: 'error', message: 'Please enter a message (at least 10 characters)' });
      return;
    }

    if (!formEndpoint) {
      setAlert({ type: 'error', message: 'Form endpoint not configured' });
      return;
    }

    setLoading(true);
    setAlert(null);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to send message. Please try again or contact me directly.' });
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss alerts after 5 seconds
  useState(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
    return undefined;
  });

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
        <TextField
          fullWidth
          label="Name"
          name="name"
          id="contact-name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          margin="normal"
          disabled={loading}
          aria-required="true"
          aria-describedby={alert?.type === 'error' ? 'form-error' : undefined}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          margin="normal"
          disabled={loading}
          aria-required="true"
          aria-describedby={alert?.type === 'error' ? 'form-error' : undefined}
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          id="contact-message"
          multiline
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          margin="normal"
          disabled={loading}
          aria-required="true"
          aria-describedby={alert?.type === 'error' ? 'form-error' : undefined}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={loading}
          sx={{ 
            mt: 2,
            minHeight: 48,
          }}
          aria-label={loading ? 'Sending message' : 'Send message'}
        >
          {loading ? <CircularProgress size={24} /> : 'Send Message'}
        </Button>

        {alert && (
          <Alert
            severity={alert.type}
            sx={{ mt: 2 }}
            onClose={() => setAlert(null)}
            role="alert"
            aria-live="polite"
            aria-atomic="true"
          >
            {alert.message}
          </Alert>
        )}
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 3,
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        You can also find my contact information and social links in the footer below.
      </Typography>
    </Box>
  );
}
