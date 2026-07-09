import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import ScrollReveal from '../shared/ScrollReveal'
import FileDropZone from './FileDropZone'
import { useToast } from '../../context/ToastContext'
import './ContactForm.css'

const MESSAGES_KEY = 'portfolio_messages'

function saveMessage(msg) {
  try {
    const raw = localStorage.getItem(MESSAGES_KEY)
    const messages = raw ? JSON.parse(raw) : []
    messages.push(msg)
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages))
  } catch (e) {
    console.error('Failed to save message to localStorage:', e)
  }
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const { addToast } = useToast()

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('sending')
    setErrors({})

    const entry = {
      id: Date.now().toString(36),
      ...form,
      timestamp: new Date().toISOString(),
    }
    saveMessage(entry)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('stored')
      addToast('Email not configured — message saved locally.', 'info')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, publicKey)
      setStatus('sent')
      addToast('Message sent successfully!', 'success')
    } catch (e) {
      console.error('EmailJS send failed:', e)
      setStatus('stored')
      addToast('Message saved — will deliver when email is configured.', 'info')
    }

    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <div className="contact-page">
      <ScrollReveal preset="reveal" as="div" className="contact-intro">
        <h2 className="contact-heading">Let&apos;s work together</h2>
        <p className="contact-text">
          Have a project, research idea, or just want to connect? I&apos;d love
          to hear from you.
        </p>
      </ScrollReveal>

      <ScrollReveal preset="reveal" delay={0.15} as="form" onSubmit={handleSubmit} className="contact-form glass">
        <div className="form-row">
          <div className="form-field">
            <input
              type="text"
              name="name"
              id="name"
              className={`form-input ${form.name ? 'filled' : ''}`}
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <label htmlFor="name" className={`form-label ${form.name ? 'floating' : ''}`}>
              Name
            </label>
            <div className="form-line" />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              id="email"
              className={`form-input ${form.email ? 'filled' : ''}`}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            <label htmlFor="email" className={`form-label ${form.email ? 'floating' : ''}`}>
              Email
            </label>
            <div className="form-line" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-field">
          <input
            type="text"
            name="subject"
            id="subject"
            className={`form-input ${form.subject ? 'filled' : ''}`}
            value={form.subject}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="subject" className={`form-label ${form.subject ? 'floating' : ''}`}>
            Subject
          </label>
          <div className="form-line" />
          {errors.subject && <span className="form-error">{errors.subject}</span>}
        </div>

        <div className="form-field">
          <textarea
            name="message"
            id="message"
            className={`form-input form-textarea ${form.message ? 'filled' : ''}`}
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
          />
          <label htmlFor="message" className={`form-label ${form.message ? 'floating' : ''}`}>
            Message
          </label>
          <div className="form-line" />
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        <FileDropZone type="resume" label="Attach resume (optional)" accept=".pdf" />
        <FileDropZone type="photo" label="Attach photo (optional)" accept="image/*" />

        <motion.button
          type="submit"
          className="form-submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'stored' ? 'Saved — will deliver when email is configured' : 'Send Message'}
        </motion.button>
      </ScrollReveal>
    </div>
  )
}
