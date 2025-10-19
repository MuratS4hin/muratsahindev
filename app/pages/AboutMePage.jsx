import React from 'react';
import Header from '../component/Header.jsx';
const AboutMePage = () => {

    const SidebarLink = ({ href, icon, text, isActive = false }) => {
        const baseClasses = "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium leading-normal";
        const activeClasses = "bg-primary/10 dark:bg-primary/20 text-primary";
        const inactiveClasses = "hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200";

        return (
            <a
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                href={href}
            >
                <span className={`material-symbols-outlined text-xl ${isActive ? 'text-primary' : 'text-zinc-600 dark:text-zinc-300'}`}>
                    {icon}
                </span>
                <p className={`${isActive ? 'text-primary' : 'text-zinc-800 dark:text-zinc-200'}`}>{text}</p>
            </a>
        );
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">

                        <Header />
                        <div className="flex flex-col md:flex-row gap-8 w-full mt-10">

                            {/* Side Navigation Bar */}
                            <aside className="w-full md:w-64 flex-shrink-0">
                                <div className="sticky top-8 bg-background-light dark:bg-background-dark rounded-xl p-4 border border-zinc-200 dark:border-zinc-800">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
                                                data-alt="Mehmet Yılmaz's profile picture"
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg65H5USjg6t2qCPC3m15xxQ1oYS_P03edxQUDXtL51bQJ9l_FqQiTWlJcZAxCeVTHYYR9b2RLS7EJQWxlfQvwpO-YFcD88hPtVjoEUHRELgnLDM3LtX-Vce591sgP_m5pbhjo-LpiXA96flF6GwljXPVhZvmG1eOTp_-rfbSPUZG83ZFZIIDmi60y9IRoGkMRGwWtiMqFgvFKWIoyM0y9IGBtTRBQcRRpyEZF2QeHIts2xk-O-Vj-qwNhZugqpFt-lQo4N8mLXJY")' }}
                                            />
                                            <div className="flex flex-col">
                                                <h1 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight">Mehmet Yılmaz</h1>
                                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal">Yazılım Geliştirici</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 pt-4">
                                            <SidebarLink href="#egitim" icon="school" text="Eğitim" isActive={true} />
                                            <SidebarLink href="#deneyim" icon="work" text="Deneyim" />
                                            <SidebarLink href="#beceriler" icon="code" text="Beceriler" />
                                            <SidebarLink href="#ilgi-alanlari" icon="camera" text="İlgi Alanları" />
                                        </div>
                                    </div>
                                    <button className="mt-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                        <span className="truncate">CV'mi İndir</span>
                                    </button>
                                </div>
                            </aside>

                            {/* Main Content Area */}
                            <main className="flex-1 flex flex-col gap-8">
                                <div className="flex flex-wrap justify-between items-center gap-3 p-4 bg-white dark:bg-[#1A242E] rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <p className="text-zinc-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Özgeçmiş</p>
                                </div>

                                {/* Education Section */}
                                <section className="flex flex-col gap-4 p-4 md:p-6 bg-white dark:bg-[#1A242E] rounded-xl border border-zinc-200 dark:border-zinc-800" id="egitim">
                                    <h2 className="text-zinc-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Eğitim</h2>
                                    <div className="grid grid-cols-[auto_1fr] gap-x-4">
                                        {/* University */}
                                        <div className="flex flex-col items-center gap-1 pt-3">
                                            <span className="material-symbols-outlined text-primary text-2xl">school</span>
                                            <div className="w-[2px] bg-zinc-200 dark:bg-zinc-700 h-full"></div>
                                        </div>
                                        <div className="flex flex-1 flex-col pb-6">
                                            <p className="text-zinc-900 dark:text-white text-base font-semibold leading-normal">Orta Doğu Teknik Üniversitesi</p>
                                            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal">Bilgisayar Mühendisliği</p>
                                            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-normal leading-normal mt-1">2016 - 2020</p>
                                        </div>
                                        {/* High School */}
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-[2px] bg-zinc-200 dark:bg-zinc-700 h-full"></div>
                                            <span className="material-symbols-outlined text-primary text-2xl">school</span>
                                        </div>
                                        <div className="flex flex-1 flex-col pt-2">
                                            <p className="text-zinc-900 dark:text-white text-base font-semibold leading-normal">Ankara Fen Lisesi</p>
                                            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal">Sayısal</p>
                                            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-normal leading-normal mt-1">2012 - 2016</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Experience Section */}
                                <section className="flex flex-col gap-4 p-4 md:p-6 bg-white dark:bg-[#1A242E] rounded-xl border border-zinc-200 dark:border-zinc-800" id="deneyim">
                                    <h2 className="text-zinc-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">İş Deneyimi</h2>
                                    <div className="space-y-6">
                                        {/* */}
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 text-primary pt-1">
                                                <span className="material-symbols-outlined text-2xl">work</span>
                                            </div>
                                            <div>
                                                <p className="text-zinc-900 dark:text-white text-base font-semibold leading-normal">Teknoloji A.Ş.</p>
                                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-normal">Kıdemli Yazılım Geliştirici</p>
                                                <p className="text-zinc-400 dark:text-zinc-500 text-xs font-normal mt-1">Ocak 2022 - Günümüz</p>
                                                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 text-sm mt-2 space-y-1">
                                                    <li>Yeni nesil web uygulamalarının geliştirilmesi ve bakımı.</li>
                                                    <li>React ve Node.js kullanarak ölçeklenebilir API'ler oluşturma.</li>
                                                    <li>Genç geliştiricilere mentorluk yapma ve kod incelemeleri.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 text-primary pt-1">
                                                <span className="material-symbols-outlined text-2xl">work</span>
                                            </div>
                                            <div>
                                                <p className="text-zinc-900 dark:text-white text-base font-semibold leading-normal">Yazılım Çözümleri Ltd.</p>
                                                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-normal">Yazılım Geliştirici</p>
                                                <p className="text-zinc-400 dark:text-zinc-500 text-xs font-normal mt-1">Temmuz 2020 - Aralık 2021</p>
                                                <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 text-sm mt-2 space-y-1">
                                                    <li>Kurumsal müşteriler için özel yazılım çözümleri geliştirme.</li>
                                                    <li>Python ve Django ile arka uç sistemleri üzerinde çalışma.</li>
                                                    <li>Mevcut sistemlerde performans iyileştirmeleri yapma.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Skills Section */}
                                <section className="flex flex-col gap-4 p-4 md:p-6 bg-white dark:bg-[#1A242E] rounded-xl border border-zinc-200 dark:border-zinc-800" id="beceriler">
                                    <h2 className="text-zinc-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Beceriler</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Technical Skills */}
                                        <div>
                                            <h3 className="text-zinc-800 dark:text-zinc-100 text-base font-semibold mb-3">Teknik Beceriler</h3>
                                            <div className="space-y-4">
                                                {/* Python Skill Bar */}
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Python</span>
                                                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">90%</span>
                                                    </div>
                                                    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                                                        <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                                                    </div>
                                                </div>
                                                {/* JavaScript Skill Bar */}
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">JavaScript</span>
                                                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">85%</span>
                                                    </div>
                                                    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                                                        <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                                                    </div>
                                                </div>
                                                {/* Figma Skill Bar */}
                                                <div>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Figma</span>
                                                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">75%</span>
                                                    </div>
                                                    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                                                        <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Soft Skills */}
                                        <div>
                                            <h3 className="text-zinc-800 dark:text-zinc-100 text-base font-semibold mb-3">Kişisel Beceriler</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Ekip Çalışması</span>
                                                <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Problem Çözme</span>
                                                <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">İletişim</span>
                                                <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Zaman Yönetimi</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Interests Section */}
                                <section className="flex flex-col gap-4 p-4 md:p-6 bg-white dark:bg-[#1A242E] rounded-xl border border-zinc-200 dark:border-zinc-800" id="ilgi-alanlari">
                                    <h2 className="text-zinc-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">İlgi Alanları</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {/* Photography */}
                                        <div className="flex flex-col items-center gap-2 p-4 bg-background-light dark:bg-background-dark rounded-lg">
                                            <span className="material-symbols-outlined text-primary text-3xl">photo_camera</span>
                                            <p className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Fotoğrafçılık</p>
                                        </div>
                                        {/* Travel */}
                                        <div className="flex flex-col items-center gap-2 p-4 bg-background-light dark:bg-background-dark rounded-lg">
                                            <span className="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
                                            <p className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Seyahat</p>
                                        </div>
                                        {/* Reading */}
                                        <div className="flex flex-col items-center gap-2 p-4 bg-background-light dark:bg-background-dark rounded-lg">
                                            <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
                                            <p className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Kitap Okuma</p>
                                        </div>
                                        {/* Hiking */}
                                        <div className="flex flex-col items-center gap-2 p-4 bg-background-light dark:bg-background-dark rounded-lg">
                                            <span className="material-symbols-outlined text-primary text-3xl">hiking</span>
                                            <p className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">Doğa Yürüyüşü</p>
                                        </div>
                                    </div>
                                </section>
                            </main>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;