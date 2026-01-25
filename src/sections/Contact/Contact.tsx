import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { FiMail, FiSend, FiCheck, FiAlertCircle, FiPhone, FiFacebook, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration using environment variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: 'Portfolio Contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'haubtm699@gmail.com',
      href: 'mailto:haubtm699@gmail.com',
    },
    {
      icon: <FiPhone size={24} />,
      label: 'Phone',
      value: '0385345330',
      href: 'tel:0385345330',
    },
    {
      icon: <FiFacebook size={24} />,
      label: 'Facebook',
      value: 'Lê Bá Hậu',
      href: 'https://www.facebook.com/le.ba.hau.98665/',
    },
    {
      icon: <FiLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'Lê Bá Hậu',
      href: 'https://www.linkedin.com/in/bá-hậu-lê-97b15a35a/',
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-description">{t('contact.description')}</p>

            <div className="contact-links">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="contact-link-item"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-input form-textarea"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
              />
            </div>

            <motion.button
              type="submit"
              className={`btn btn-primary form-submit ${status}`}
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
            >
              {status === 'idle' && (
                <>
                  <FiSend size={18} />
                  {t('contact.form.send')}
                </>
              )}
              {status === 'sending' && (
                <>
                  <div className="spinner"></div>
                  {t('contact.form.sending')}
                </>
              )}
              {status === 'success' && (
                <>
                  <FiCheck size={18} />
                  {t('contact.form.success')}
                </>
              )}
              {status === 'error' && (
                <>
                  <FiAlertCircle size={18} />
                  {t('contact.form.error')}
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
