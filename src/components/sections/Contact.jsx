import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const YOUR_EMAIL = 'shahidabdulrehman706@gmail.com'; // Your email address to receive messages
const WEB3FORMS_ACCESS_KEY = '05a7ceac-8b59-45da-99b8-416bcb4957b9'; // Your Web3Forms access key

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useAnimateOnScroll({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare form data for Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      
      // Add additional fields for better email formatting
      formDataToSend.append('from_name', formData.name);
      formDataToSend.append('reply_to', formData.email);

      // Convert FormData to JSON
      const object = Object.fromEntries(formDataToSend);
      const json = JSON.stringify(object);

      // Send email using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (response.status === 200) {
        setSubmitSuccess(true);
        
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success status after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'shahidabdulrehman706@gmail.com',
      link: 'mailto:shahidabdulrehman706@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone/WhatsApp',
      content: '+92 324 794 7540',
      link: 'https://wa.me/923247947540'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Lahore, Pakistan',
      link: 'https://maps.google.com/?q=Lahore,Pakistan'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-blue-300/10 dark:bg-blue-900/10 rounded-full filter blur-3xl -z-10" />

      <div className="container">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-md mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="gradient-text">Contact</span> Me
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={sectionIsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Project Inquiry"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="How can I help you?"
                  disabled={isSubmitting}
                />
              </div>

              {submitError && (
                <p className="text-red-600 text-sm font-medium">{submitError}</p>
              )}

              {submitSuccess && (
                <p className="text-green-600 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 rounded-lg ${
                  submitSuccess
                    ? 'bg-green-600 text-white'
                    : submitError
                    ? 'bg-red-600 text-white'
                    : 'bg-primary text-white'
                } font-medium hover:shadow-lg transition-all gap-2 disabled:opacity-70`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : submitError ? (
                  <>
                    <span>Failed to Send</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={sectionIsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactDetails.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-foreground/70">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-3">
              <motion.a
                href="https://github.com/AbdulRehmamn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card text-foreground hover:bg-primary hover:text-white border border-border transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <FiGithub size={20} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abdul-rehman-shahid-11b2622a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card text-foreground hover:bg-primary hover:text-white border border-border transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;