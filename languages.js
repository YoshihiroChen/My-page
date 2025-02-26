const translations = {
    en: {
        nav: {
            home: "Home",
            education: "Education",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        home: {
            title: "Who am I",
            intro: "// Initialize personal configuration",
            loading: "$ loading personal_data.json",
            equation: "system.init(innovation + expertise + passion);",
            status: "$ status: online"
        },
        education: {
            title: "Education",
            degree: "Degree",
            major: "Major",
            period: "Period",
            osaka: {
                name: "Osaka University",
                major: "Economics",
                degree: "Master's Degree",
                period: "2024.4 - 2026.3 (Expected)"
            },
            sysu: {
                name: "Sun Yat-sen University",
                major: "English Language & Literature",
                degree: "Bachelor's Degree",
                period: "2019.8 - 2023.6"
            }
        },
        projects: {
            title: "Projects",
            description: "Description",
            technologies: "Technologies"
        },
        skills: {
            title: "Skills",
            computer: {
                title: "Computer Skills",
                frontend: "Frontend Development",
                backend: "Backend Development",
                game: "Game Development"
            },
            math: {
                title: "Mathematical Skills",
                calculus: "Calculus",
                probability: "Probability & Statistics",
                linear: "Linear Algebra",
                abstract: "Abstract Algebra"
            },
            language: {
                title: "Language Skills",
                chinese: "Chinese",
                english: "English",
                japanese: "Japanese",
                german: "German"
            }
        },
        contact: {
            title: "Contact",
            email: "Email",
            phone: "Phone"
        },
        language: {
            label: "Language"
        }
    },
    zh: {
        nav: {
            home: "首页",
            education: "教育经历",
            projects: "项目经历",
            skills: "技能",
            contact: "联系方式"
        },
        home: {
            title: "个人简介",
            intro: "// 初始化个人配置",
            loading: "$ 加载个人数据.json",
            equation: "system.init(创新 + 专业 + 热情);",
            status: "$ 状态：在线"
        },
        education: {
            title: "教育经历",
            degree: "学位",
            major: "专业",
            period: "时间",
            osaka: {
                name: "大阪大学",
                major: "经济学",
                degree: "硕士学位",
                period: "2024.4 - 2026.3（预定）"
            },
            sysu: {
                name: "中山大学",
                major: "英语语言文学",
                degree: "学士学位",
                period: "2019.8 - 2023.6",
                content: `// 教育经历详情：中山大学

> 主修：英语语言文学
> 辅修：德语
> 时间：2019.8 - 2023.6
> 学位：文学学士

// 学术背景
* 主修英语并辅修德语
* 广泛涉猎人文社科领域课程：
  - 历史学
  - 语言学
  - 文学
  - 社会学
* 额外修读经济商业课程：
  - 微观经济学
  - 宏观经济学
  - 金融学
  - 会计学

// 技术兴趣
* 自学 Python 编程
  - 开发打卡系统
  - 创建自动化工具
* 游戏开发
  - 尝试使用 RPG Maker
  - 设计独立游戏概念
* 软件开发
  - 构建各类小型应用
  - 探索编程基础

// 主要成就
* 成功平衡多元学术兴趣
* 在人文与技术领域都建立了扎实基础
* 独立追求编程和开发技能
* 为经济学研究生学习奠定学术基础`
            }
        },
        projects: {
            title: "项目经历",
            description: "项目描述",
            technologies: "使用技术"
        },
        skills: {
            title: "技能",
            computer: {
                title: "计算机技能",
                frontend: "前端开发",
                backend: "后端开发",
                game: "游戏开发"
            },
            math: {
                title: "数学技能",
                calculus: "微分积分学",
                probability: "概率与统计",
                linear: "线性代数",
                abstract: "抽象代数"
            },
            language: {
                title: "语言技能",
                chinese: "中文",
                english: "英语",
                japanese: "日语",
                german: "德语"
            }
        },
        contact: {
            title: "联系方式",
            email: "邮箱",
            phone: "电话"
        },
        language: {
            label: "语言"
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            education: "学歴",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "連絡先"
        },
        home: {
            title: "自己紹介",
            intro: "// 個人設定を初期化",
            loading: "$ 個人データを読み込み中.json",
            equation: "system.init(革新性 + 専門性 + 情熱);",
            status: "$ ステータス：オンライン"
        },
        education: {
            title: "学歴",
            degree: "学位",
            major: "専攻",
            period: "期間",
            osaka: {
                name: "大阪大学",
                major: "経済学",
                degree: "修士号",
                period: "2024.4 - 2026.3（予定）"
            },
            sysu: {
                name: "中山大学",
                major: "英語言語文学",
                degree: "学士号",
                period: "2019.8 - 2023.6",
                content: `// 教育詳細：中山大学

> 専攻：英語言語文学
> 副専攻：ドイツ語
> 期間：2019.8 - 2023.6
> 学位：文学学士

// 学術背景
* 英語専攻とドイツ語副専攻
* 人文社会科学分野の幅広い学習：
  - 歴史学
  - 言語学
  - 文学
  - 社会学
* 経済・ビジネス関連の追加学習：
  - ミクロ経済学
  - マクロ経済学
  - 金融学
  - 会計学

// 技術的関心
* Python プログラミングの独学
  - 出席管理システムの開発
  - 自動化ツールの作成
* ゲーム開発
  - RPG Maker での実験
  - インディーゲームのコンセプト設計
* ソフトウェア開発
  - 各種小規模アプリケーションの構築
  - プログラミングの基礎探求

// 主な成果
* 多様な学術的興味のバランスを達成
* 人文科学と技術分野の両方で強固な基盤を構築
* プログラミングと開発スキルの自主的な追求
* 経済学大学院進学への学術的基盤の確立`
            }
        },
        projects: {
            title: "プロジェクト経験",
            description: "説明",
            technologies: "使用技術"
        },
        skills: {
            title: "スキル",
            computer: {
                title: "コンピュータースキル",
                frontend: "フロントエンド開発",
                backend: "バックエンド開発",
                game: "ゲーム開発"
            },
            math: {
                title: "数学スキル",
                calculus: "微分積分学",
                probability: "確率・統計",
                linear: "線形代数",
                abstract: "抽象代数"
            },
            language: {
                title: "語学力",
                chinese: "中国語",
                english: "英語",
                japanese: "日本語",
                german: "ドイツ語"
            }
        },
        contact: {
            title: "連絡先",
            email: "メール",
            phone: "電話番号"
        },
        language: {
            label: "言語"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            education: "Ausbildung",
            projects: "Projekte",
            skills: "Fähigkeiten",
            contact: "Kontakt"
        },
        home: {
            title: "Wer bin ich",
            intro: "// Persönliche Konfiguration initialisieren",
            loading: "$ Lade persönliche_daten.json",
            equation: "system.init(Innovation + Expertise + Leidenschaft);",
            status: "$ Status: Online"
        },
        education: {
            title: "Ausbildung",
            degree: "Abschluss",
            major: "Studienfach",
            period: "Zeitraum",
            osaka: {
                name: "Universität Osaka",
                major: "Wirtschaftswissenschaften",
                degree: "Masterabschluss",
                period: "2024.4 - 2026.3 (erwartet)"
            },
            sysu: {
                name: "Sun Yat-sen Universität",
                major: "Englische Sprache & Literatur",
                degree: "Bachelorabschluss",
                period: "2019.8 - 2023.6",
                content: `// Bildungsdetails: Sun Yat-sen Universität

> Hauptfach: Englische Sprache & Literatur
> Nebenfach: Deutsch
> Zeitraum: 2019.8 - 2023.6
> Abschluss: Bachelor of Arts

// Akademischer Hintergrund
* Hauptfach Englisch mit Nebenfach Deutsch
* Umfangreiche Kurse in Geistes- und Sozialwissenschaften:
  - Geschichte
  - Linguistik
  - Literatur
  - Soziologie
* Zusätzliche Studien in Wirtschaft:
  - Mikroökonomie
  - Makroökonomie
  - Finanzwesen
  - Rechnungswesen

// Technische Interessen
* Selbststudium Python-Programmierung
  - Entwicklung von Anwesenheitssystemen
  - Erstellung von Automatisierungstools
* Spieleentwicklung
  - Experimente mit RPG Maker
  - Design von Indie-Spielkonzepten
* Softwareentwicklung
  - Entwicklung verschiedener kleiner Anwendungen
  - Erforschung von Programmiergrundlagen

// Hauptleistungen
* Erfolgreiche Balance verschiedener akademischer Interessen
* Starke Grundlagen in Geisteswissenschaften und Technik
* Eigenständige Verfolgung von Programmier- und Entwicklungsfähigkeiten
* Solide akademische Basis für das Wirtschaftsstudium`
            }
        },
        projects: {
            title: "Projekte",
            description: "Beschreibung",
            technologies: "Technologien"
        },
        skills: {
            title: "Fähigkeiten",
            computer: {
                title: "Computerkenntnisse",
                frontend: "Frontend-Entwicklung",
                backend: "Backend-Entwicklung",
                game: "Spieleentwicklung"
            },
            math: {
                title: "Mathematische Fähigkeiten",
                calculus: "Differential- und Integralrechnung",
                probability: "Wahrscheinlichkeitsrechnung & Statistik",
                linear: "Lineare Algebra",
                abstract: "Abstrakte Algebra"
            },
            language: {
                title: "Sprachkenntnisse",
                chinese: "Chinesisch",
                english: "Englisch",
                japanese: "Japanisch",
                german: "Deutsch"
            }
        },
        contact: {
            title: "Kontakt",
            email: "E-Mail",
            phone: "Telefon"
        },
        language: {
            label: "Sprache"
        }
    }
}; 