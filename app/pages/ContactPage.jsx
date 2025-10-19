import React, { useState } from 'react';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

// Sosyal medya ve iletişim linklerini temsil eden basit bir bileşen
const ContactInfo = ({ icon, text, link, isEmail = false }) => (
    <a
        className="flex items-center gap-4 group text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        href={isEmail ? `mailto:${link}` : link}
        target={isEmail ? "_self" : "_blank"}
        rel="noopener noreferrer"
    >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
        <span className="text-base font-medium">{text}</span>
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
    // Form durumu (state)
    const initialForm = { name: '', email: '', subject: '', message: '' };
    const [formData, handleChange] = useFormState(initialForm);
    const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

    // Form gönderimini simüle etme (gerçekte bir API çağrısı yapılmalı)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basit bir doğrulama
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatusMessage({ type: 'error', message: 'Lütfen tüm alanları doldurun.' });
            return;
        }

        // Simülasyon: Sunucuya gönderme
        setStatusMessage({ type: 'loading', message: 'Mesajınız gönderiliyor...' });

        setTimeout(() => {
            console.log('Form gönderildi:', formData);
            // Başarılı mesajı göster
            setStatusMessage({ type: 'success', message: 'Mesajınız başarıyla gönderilmiştir. Teşekkür ederim!' });
            // Formu temizle
            // setFormData(initialForm); // Form temizleme isteğe bağlı
        }, 1500);
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">

                        <Header />

                        <div className="layout-container flex h-full grow flex-col">
                            {/* İçerik Yönlendirme ve Boşluk */}
                            <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20 mt-10">
                                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

                                    {/* Başlık */}
                                    <div className="flex flex-wrap justify-between gap-3 p-4">
                                        <p className="text-4xl font-black leading-tight tracking-[-0.033em] min-w-72 text-gray-900 dark:text-white">Benimle İletişime Geçin</p>
                                    </div>

                                    {/* Form ve İletişim Bilgileri Bölümü */}
                                    <div className="flex flex-col lg:flex-row gap-8 mt-10">

                                        {/* --- Sol Bölüm: İletişim Formu --- */}
                                        <div className="flex-1 p-4">
                                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Bir Mesaj Bırakın</h2>

                                            {/* Status Mesajı */}
                                            {statusMessage.message && (
                                                <div className={`p-3 mb-4 rounded-lg ${statusMessage.type === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                                                    {statusMessage.message}
                                                </div>
                                            )}

                                            <form onSubmit={handleSubmit} className="space-y-6">

                                                {/* İsim ve E-posta */}
                                                <div className="flex flex-col sm:flex-row gap-6">
                                                    <label className="flex flex-col flex-1">
                                                        <p className="text-base font-medium leading-normal pb-2 text-gray-700 dark:text-gray-300">Adınız</p>
                                                        <input
                                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                                                            placeholder="Adınızı girin"
                                                            required
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            disabled={statusMessage.type === 'loading'}
                                                        />
                                                    </label>
                                                    <label className="flex flex-col flex-1">
                                                        <p className="text-base font-medium leading-normal pb-2 text-gray-700 dark:text-gray-300">E-posta Adresiniz</p>
                                                        <input
                                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                                                            placeholder="E-posta adresinizi girin"
                                                            required
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            disabled={statusMessage.type === 'loading'}
                                                        />
                                                    </label>
                                                </div>

                                                {/* Konu */}
                                                <label className="flex flex-col flex-1">
                                                    <p className="text-base font-medium leading-normal pb-2 text-gray-700 dark:text-gray-300">Konu</p>
                                                    <input
                                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] h-14 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                                                        placeholder="Konuyu girin"
                                                        required
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        disabled={statusMessage.type === 'loading'}
                                                    />
                                                </label>

                                                {/* Mesaj */}
                                                <label className="flex flex-col flex-1">
                                                    <p className="text-base font-medium leading-normal pb-2 text-gray-700 dark:text-gray-300">Mesajınız</p>
                                                    <textarea
                                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] min-h-36 placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] p-[15px] text-base font-normal leading-normal"
                                                        placeholder="Mesajınızı buraya yazın"
                                                        required
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        disabled={statusMessage.type === 'loading'}
                                                    ></textarea>
                                                </label>

                                                {/* Gönder Butonu */}
                                                <button
                                                    className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 w-full sm:w-auto flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                                                    type="submit"
                                                    disabled={statusMessage.type === 'loading'}
                                                >
                                                    {statusMessage.type === 'loading' ? (
                                                        <>
                                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Gönderiliyor...
                                                        </>
                                                    ) : (
                                                        'Mesajı Gönder'
                                                    )}
                                                </button>
                                            </form>
                                        </div>

                                        {/* --- Sağ Bölüm: İletişim Bilgileri --- */}
                                        <div className="lg:w-1/3 p-4 mt-10 lg:mt-0">
                                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Veya Beni Burada Bulun</h2>
                                            <div className="space-y-4">
                                                {/* E-posta (CV'den alındı) */}
                                                <ContactInfo
                                                    icon="mail"
                                                    text="sahin.mur4t@gmail.com"
                                                    link="sahin.mur4t@gmail.com"
                                                    isEmail={true}
                                                />
                                                {/* LinkedIn (CV'de belirtilmiş) */}
                                                <ContactInfo
                                                    icon="public"
                                                    text="LinkedIn"
                                                    link="#" // Gerçek URL buraya gelmeli
                                                />
                                                {/* GitHub (CV'de belirtilmiş) */}
                                                <ContactInfo
                                                    icon="code"
                                                    text="GitHub"
                                                    link="#" // Gerçek URL buraya gelmeli
                                                />
                                                {/* Telefon (CV'den alındı, mailto yerine tel: kullanılabilir) */}
                                                <ContactInfo
                                                    icon="phone"
                                                    text="0554 235 36 49"
                                                    link="tel:+905542353649"
                                                    isEmail={false} // Bu bir email değil, telefon linki
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bileşeni */}
                        <Footer />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
