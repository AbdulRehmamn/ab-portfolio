# Abdul Rehman's Portfolio

A modern, animated portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design that works on all devices
- Light and dark theme modes
- Smooth animations and transitions
- Interactive project showcase
- Working contact form with EmailJS

## EmailJS Contact Form Setup

To make the contact form work and receive emails in your inbox, follow these steps:

1. Go to [EmailJS website](https://www.emailjs.com/) and create a free account
2. Create a new Email Service:
   - Click on "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account (this will be the sender email)

3. Create a new Email Template:
   - Click on "Create New Template"
   - Design your email template with the following variables:
     - `{{from_name}}` - The name of the person who filled out the form
     - `{{from_email}}` - The email of the person who filled out the form
     - `{{subject}}` - The subject of the message
     - `{{message}}` - The message content
     - `{{to_email}}` - Your email (shahidabdulrehman706@gmail.com)

4. Get your EmailJS credentials:
   - Service ID: Found in the Email Services section
   - Template ID: Found in the Email Templates section
   - User ID (Public Key): Found in Account > API Keys

5. Update the Contact.tsx file with your credentials:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_USER_ID = 'your_public_key';
   ```

Once set up correctly, all messages submitted through the contact form will be sent directly to your email address.

## Development

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build
```


