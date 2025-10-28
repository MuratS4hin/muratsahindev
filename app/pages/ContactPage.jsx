import React, { useState } from 'react';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import './ContactPage.css';

// Sosyal medya ve iletişim linklerini temsil eden basit bir bileşen
const ContactInfo = ({ icon, text, link, isEmail = false }) => (
    <a
        className="contact-info"
        href={isEmail ? `mailto:${link}` : link}
        target={isEmail ? "_self" : "_blank"}
        rel="noopener noreferrer"
    >
        <span className="material-symbols-outlined contact-icon">{icon}</span>
        <span className="contact-text">{text}</span>
    </a>
);

// Form girdilerini yönetmek için özel bir kanca (Hook)
const useFormState = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return [formData, handleChange];
};

const ContactPage = () => {
    const initialForm = { name: '', email: '', subject: '', message: '' };
    const [formData, handleChange] = useFormState(initialForm);
    const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatusMessage({ type: 'error', message: 'Lütfen tüm alanları doldurun.' });
            return;
        }
        setStatusMessage({ type: 'loading', message: 'Mesajınız gönderiliyor...' });
        setTimeout(() => {
            console.log('Form gönderildi:', formData);
            setStatusMessage({ type: 'success', message: 'Mesajınız başarıyla gönderilmiştir. Teşekkür ederim!' });
        }, 1500);
    };

    return (
        <div className="contact-page">
            <Header />

            <div className="contact-container">
                <h1 className="contact-title">Benimle İletişime Geçin</h1>

                <div className="contact-content">
                    {/* Form */}
                    <div className="contact-form-section">
                        <h2>Bir Mesaj Bırakın</h2>

                        {statusMessage.message && (
                            <div className={`status-message ${statusMessage.type}`}>
                                {statusMessage.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <label>
                                    <span>Adınız</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Adınızı girin"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={statusMessage.type === 'loading'}
                                        required
                                    />
                                </label>
                                <label>
                                    <span>E-posta Adresiniz</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-posta adresinizi girin"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={statusMessage.type === 'loading'}
                                        required
                                    />
                                </label>
                            </div>

                            <label>
                                <span>Konu</span>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Konuyu girin"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={statusMessage.type === 'loading'}
                                    required
                                />
                            </label>

                            <label>
                                <span>Mesajınız</span>
                                <textarea
                                    name="message"
                                    placeholder="Mesajınızı buraya yazın"
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={statusMessage.type === 'loading'}
                                    required
                                />
                            </label>

                            <button type="submit" disabled={statusMessage.type === 'loading'}>
                                {statusMessage.type === 'loading' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                            </button>
                        </form>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div className="contact-info-section">
                        <h2>Veya Beni Burada Bulun</h2>
                        <ContactInfo icon="mail" text="sahin.mur4t@gmail.com" link="sahin.mur4t@gmail.com" isEmail={true} />
                        <ContactInfo icon="public" text="LinkedIn" link="#" />
                        <ContactInfo icon="code" text="GitHub" link="#" />
                        <ContactInfo icon="phone" text="0554 235 36 49" link="tel:+905542353649" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
