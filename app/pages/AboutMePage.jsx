import React from 'react';
import Header from '../component/Header.jsx';
import './AboutMePage.css';

const AboutMePage = () => {

    const SidebarLink = ({ href, icon, text, isActive = false }) => {
        return (
            <a href={href} className={`sidebar-link ${isActive ? 'active' : ''}`}>
                <span className="material-symbols-outlined">{icon}</span>
                <p>{text}</p>
            </a>
        );
    };

    return (
        <div className="about-page">
            <Header />
            <div className="about-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-top">
                        <div
                            className="profile-picture"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg65H5USjg6t2qCPC3m15xxQ1oYS_P03edxQUDXtL51bQJ9l_FqQiTWlJcZAxCeVTHYYR9b2RLS7EJQWxlfQvwpO-YFcD88hPtVjoEUHRELgnLDM3LtX-Vce591sgP_m5pbhjo-LpiXA96flF6GwljXPVhZvmG1eOTp_-rfbSPUZG83ZFZIIDmi60y9IRoGkMRGwWtiMqFgvFKWIoyM0y9IGBtTRBQcRRpyEZF2QeHIts2xk-O-Vj-qwNhZugqpFt-lQo4N8mLXJY")' }}
                        />
                        <div className="profile-info">
                            <h1>Mehmet Yılmaz</h1>
                            <p>Yazılım Geliştirici</p>
                        </div>
                    </div>
                    <div className="sidebar-links">
                        <SidebarLink href="#egitim" icon="school" text="Eğitim" isActive />
                        <SidebarLink href="#deneyim" icon="work" text="Deneyim" />
                        <SidebarLink href="#beceriler" icon="code" text="Beceriler" />
                        <SidebarLink href="#ilgi-alanlari" icon="camera" text="İlgi Alanları" />
                    </div>
                    <button className="download-cv">CV'mi İndir</button>
                </aside>

                {/* Main Content */}
                <main className="about-main">
                    {/* Page title */}
                    <div className="page-title">
                        <p>Özgeçmiş</p>
                    </div>

                    {/* Education */}
                    <section className="section" id="egitim">
                        <h2>Eğitim</h2>
                        <div className="timeline">
                            <div className="timeline-icon"><span className="material-symbols-outlined">school</span></div>
                            <div className="timeline-content">
                                <p className="title">Orta Doğu Teknik Üniversitesi</p>
                                <p className="subtitle">Bilgisayar Mühendisliği</p>
                                <p className="date">2016 - 2020</p>
                            </div>

                            <div className="timeline-icon"><span className="material-symbols-outlined">school</span></div>
                            <div className="timeline-content">
                                <p className="title">Ankara Fen Lisesi</p>
                                <p className="subtitle">Sayısal</p>
                                <p className="date">2012 - 2016</p>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="section" id="deneyim">
                        <h2>İş Deneyimi</h2>
                        <div className="experience">
                            <div className="experience-item">
                                <span className="material-symbols-outlined">work</span>
                                <div>
                                    <p className="title">Teknoloji A.Ş.</p>
                                    <p className="subtitle">Kıdemli Yazılım Geliştirici</p>
                                    <p className="date">Ocak 2022 - Günümüz</p>
                                    <ul>
                                        <li>Yeni nesil web uygulamalarının geliştirilmesi ve bakımı.</li>
                                        <li>React ve Node.js kullanarak ölçeklenebilir API'ler oluşturma.</li>
                                        <li>Genç geliştiricilere mentorluk yapma ve kod incelemeleri.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <span className="material-symbols-outlined">work</span>
                                <div>
                                    <p className="title">Yazılım Çözümleri Ltd.</p>
                                    <p className="subtitle">Yazılım Geliştirici</p>
                                    <p className="date">Temmuz 2020 - Aralık 2021</p>
                                    <ul>
                                        <li>Kurumsal müşteriler için özel yazılım çözümleri geliştirme.</li>
                                        <li>Python ve Django ile arka uç sistemleri üzerinde çalışma.</li>
                                        <li>Mevcut sistemlerde performans iyileştirmeleri yapma.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="section" id="beceriler">
                        <h2>Beceriler</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h3>Teknik Beceriler</h3>
                                <div className="skill-bar">
                                    <span>Python</span>
                                    <div className="bar"><div style={{width: '90%'}} /></div>
                                </div>
                                <div className="skill-bar">
                                    <span>JavaScript</span>
                                    <div className="bar"><div style={{width: '85%'}} /></div>
                                </div>
                                <div className="skill-bar">
                                    <span>Figma</span>
                                    <div className="bar"><div style={{width: '75%'}} /></div>
                                </div>
                            </div>
                            <div className="skill-category">
                                <h3>Kişisel Beceriler</h3>
                                <div className="soft-skills">
                                    <span>Ekip Çalışması</span>
                                    <span>Problem Çözme</span>
                                    <span>İletişim</span>
                                    <span>Zaman Yönetimi</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Interests */}
                    <section className="section" id="ilgi-alanlari">
                        <h2>İlgi Alanları</h2>
                        <div className="interests-grid">
                            <div className="interest-item">
                                <span className="material-symbols-outlined">photo_camera</span>
                                <p>Fotoğrafçılık</p>
                            </div>
                            <div className="interest-item">
                                <span className="material-symbols-outlined">flight_takeoff</span>
                                <p>Seyahat</p>
                            </div>
                            <div className="interest-item">
                                <span className="material-symbols-outlined">menu_book</span>
                                <p>Kitap Okuma</p>
                            </div>
                            <div className="interest-item">
                                <span className="material-symbols-outlined">hiking</span>
                                <p>Doğa Yürüyüşü</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AboutMePage;
