const projects = [
        { 
            title: "E-ticaret Platformu Arayüzü", 
            description: "Kullanıcı dostu bir mobil alışveriş uygulaması için geliştirilen arayüz tasarımı. Figma ve React Native kullanıldı.", 
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQp0QR4Vf1pX2us4LsfD7PiLWEsjbbtDv2n8ZOgltwznJSRBkSBCeBL-ppt7WnkNMGw32SMBH7IB7OkQOP_b5xasBCGvWtKkNHPef3Ewz5zX4K9J4MvOJSmnOYCRCCqOBspa28wydz7rKyk8irlDim3P9Q6RQU8MxhPFtWnLsIG7m4x3y5hbZyMoEuVadGm_lRLocBiuOhKO7BZXsVkEDW9Mqt1BI7GR8aDZ-OOXkbD7wwO35HEVgK7Rpn_J4ebI_wAY6J7N5FLbg",
            detailsLink: "/projects/ecommerce"
        },
        { 
            title: "Görev Yönetim Uygulaması", 
            description: "Ekiplerin görevleri ve projeleri organize etmesine yardımcı olan web tabanlı bir uygulama.", 
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB77jFN9iDG1AwL2rbEhUn-Ohtu289iJGjww8giSBiyYOaL-bP0alUzgMbqtR2tgzhBNf5WuDTZEu_e6ioaYazaNIIEgBG7xWpa4iDSwI8NPhfrQ2YM4v0292mdpxC9IiWkuzH5CG9H7Zvqi5We9HwuOiXZ5GootM68eSDlVSBoEzA5tnE_JXC7lFwUsUXhQL9zOaLDqy8Jk9hZLBtO0LlWpRhhV5fjpCo6bVxKTLII_-6Pv6dsd9AxO2FrHdyqLFqls55xi2TnKU8",
            detailsLink: "/projects/task-manager"
        },
        { 
            title: "Kişisel Blog Tasarımı", 
            description: "Kişisel bir blog için temiz ve modern bir tasarım.", 
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Vt0AtwFkM_4H_bWWZ5lD2fhqCEseDoRqFIqJI-T4fYIfaBSDhJVT63w8smBK3XVTVuG8msF7fQ3RwU3Iibx6P-Gh9sXn4BPs0kBoaRi-7vVpiwk6RiZMSSm7lUGUdAc5ibS0plmFyjt0TwHyqTHSdDlbkd5GhWkvGh7VH3PRrNXvscp6K6RhGD374XwWZZ2Nks4TT1D9AqQufcwjhgej4RoET-QNXAyr-ack0cMpS-5qsXG5Bz3ajly55EERX6ZyaHG0_t2gs8c",
            detailsLink: "/projects/blog-design"
        },
        { 
            title: "Hava Durumu Uygulama Konsepti", 
            description: "Görsel olarak çekici bir hava durumu uygulama konsepti.", 
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQd6BHjkaMOkBddXvoTK2Ct6lyfyRGXQtjDUmYYMT9xaxVev-h_5JzEeem_x-c6TLXR9yGztP59987FpaTyoNPf_DiECVLu-lhnpvgUzoNzE3vPH4RpYymUmMlWvyrG_NRMOMoYa5OlyflDDaU4hmTV4RqgzJI_1UECfNAuH4OI7ie6uCBu8H5-qM4TrFIogQjVCD1vpLFYu2jQ64X17cfEYUwO4_DCJAlYYTCFOhMnKt_8WeES8Vqs_-v6-dR__4Etg38I15lxig",
            detailsLink: "/projects/weather-app"
        },
        { 
            title: "Tarif Bulucu Uygulaması", 
            description: "Tarifleri keşfetmek ve kaydetmek için bir mobil uygulama.", 
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyL16V-cRXZtUI1Te7vJVWYRbEP3Pk5QNLiR_HFQgtNnF5RXc1mrff2fafVjQK3dnDOo_R09qFWr5Lxc9DyBXic5tHNJiMD5Fp6JvTv2-DgpV7xBPum6Rt6u-7behjw0nnSjUjF0eeyjXSFdo-G8DiKKAKxXi0gxkX8wTlTMMRDeAN7UYOmU1eJGI9ZlzgRGE4YU7IMFHFIHKHc8goQ3NQUZ1Mttv54dyuKjQyl7_yQruoWJvqyyqKPrX2hUt1kHfZKo9Kh4nVyyA",
            detailsLink: "/projects/recipe-finder"
        },
        { 
            title: "Seyahat Planlayıcı Arayüzü", 
            description: "Bir sonraki seyahatinizi planlamak için bir UI kiti.", 
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnwGPak8qGHoRTCAdFYhTJTmHxKeQpfZCc1dGqnXaAnW6xpO4Z1SgarbfGmdETmWQKOTB3CEyJfdVSwpK1EBUa6j8K_Kw5-D02sjQrP9Q7tkJ7_HKVofX4u5HPK1SBAHdFp_3AFpD5vtTP6NKPne6nEb4AbZ-pQSN6ShEUeUKTBdTj3Lxo_lqGG5cEzC432UjTrKUu_P4yQq-_8IUTDYb7WBwaB84a8rzwYOrbBo86855WGpKeIxtN6DB_fnjmpYRkuRotYT4G1EE",
            detailsLink: "/projects/travel-planner"
        },
    ];

export default projects;