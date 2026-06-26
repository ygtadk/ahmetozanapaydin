export type Stat = {
	label: string;
	value: number;
};

export type Quest = {
	title: string;
	status: "active" | "completed";
	role: string;
	period: string;
	tools: string[];
	summary: string;
	achievements: string[];
};

export type EducationNode = {
	title: string;
	source: string;
	period: string;
	unlocked: string;
};

export type Project = {
	title: string;
	kind: string;
	theme: string;
	palette: string;
	summary: string;
	tags: string[];
};

export type Content = {
	profile: {
		name: string;
		title: string;
		email: string;
		linkedin: string;
		cv: string;
		backstory: string;
	};
	stats: Stat[];
	quests: Quest[];
	education: EducationNode[];
	projects: Project[];
};

export const en: Content = {
	profile: {
		name: "Ahmet Ozan APAYDIN",
		title: "Game Researcher & Narrative Designer",
		email: "ahmetozanap@gmail.com",
		linkedin: "https://www.linkedin.com/in/ahmetozanapaydin",
		cv: "/files/ahmet-ozan-apaydin-cv.pdf",
		backstory:
			"A Narrative Designer and Game Researcher combining 3 years of industry experience with an M.A. in Game Design. Ahmet specializes in bridging the gap between systemic gameplay and cinematic storytelling—actively developing frameworks to resolve ludonarrative dissonance. Whether crafting dystopian sci-fi bureaucracies or directing transmedia universes, he treats narrative as a playable mechanic rather than a static wrapper.",
	},
	stats: [
		{ label: "Worldbuilding & Lore", value: 95 },
		{ label: "Systemic Scriptwriting", value: 92 },
		{ label: "Ludonarrative Harmony", value: 96 },
		{ label: "Transmedia Directing", value: 90 },
		{ label: "Unreal Engine & Sequencer", value: 86 },
		{ label: "Academic Research", value: 91 },
	],
	quests: [
		{
			title: "The Ludonarrative Harmonization",
			status: "active",
			role: "Game Researcher & Teacher's Assistant",
			period: "Present (Bahçeşehir Univ.)",
			tools: ["Ludic Theory", "D&D Ravenloft", "Systemic Analysis"],
			summary:
				"Developing 'The Gamer's Journey'—an alternative, interactivity-first narrative framework to resolve ludonarrative dissonance while lecturing undergraduate students.",
			achievements: [
				"Cross-examined story beats with active mechanics across 10 TGA 'Best Narrative' winning titles.",
				"Created a custom 4-pillar Analysis Matrix to evaluate player psychology and narrative friction.",
				"Mentoring design students in worldbuilding, branching structures, and D&D Planescape architectures.",
			],
		},
		{
			title: "Bureaucratic Myths of Wendigo",
			status: "completed",
			role: "Narrative Designer",
			period: "2022 – 2024",
			tools: ["Unreal Engine", "Sequencer", "Articy Draft 3", "Twine"],
			summary:
				"Led the narrative restructuring of ORPHEUS: Tale of a Lover and directed brand transmedia campaigns.",
			achievements: [
				"Designed a darkly humorous, paper-pushing underworld inspired by Greek mythology and Borderlands.",
				"Directed and produced in-engine cinematic trailers and comedic skits using UE Sequencer.",
				"Directed voice actors across in-game dialogue recording sessions and promotional trailers.",
			],
		},
		{
			title: "Desktop Companion Lore & AI",
			status: "completed",
			role: "Freelance Writer",
			period: "2020 – 2021 (SenpAI)",
			tools: ["Interactive Copywriting", "LoL Lore", "UX Writing"],
			summary:
				"Authored user-facing application scripts and high-retention gaming editorial content.",
			achievements: [
				"Wrote all interactive, user-facing scripts for the SenpAI desktop AI assistant.",
				"Produced deep-dive League of Legends patch breakdowns, meta tips, and lore trivia articles.",
				"Optimized desktop app onboarding flows for narrative clarity and user engagement.",
			],
		},
		{
			title: "The Esports Media Expansion",
			status: "completed",
			role: "Web Content Writer & Journalist",
			period: "2020 (5Mid)",
			tools: ["Game Journalism", "Editorial Strategy", "SEO"],
			summary:
				"Spearheaded the editorial transformation of Türkiye's premier esports news portal.",
			achievements: [
				"Played a key role in transforming Türkiye's first esports news page into a wide-scale gaming media platform.",
				"Produced high-traffic features, tournament analyses, and industry news coverage.",
			],
		},
	],
	education: [
		{
			title: "Game Design M.A.",
			source: "Bahçeşehir University",
			period: "Ongoing",
			unlocked: "Thesis: Resolving Ludonarrative Dissonance via 'The Gamer's Journey'",
		},
		{
			title: "Radio, TV and Cinema B.A.",
			source: "İstanbul University",
			period: "Completed",
			unlocked: "Cinematic dramatic arc construction, screenwriting craft, and visual montage",
		},
		{
			title: "Academic Lectureship",
			source: "BAU / Beykoz / Doğuş Univ.",
			period: "2022 – Present",
			unlocked: "TA in 'Writing for Games' & Guest Speaker on Interactive Scriptwriting",
		},
	],
	projects: [
		{
			title: "ORPHEUS: Tale of a Lover",
			kind: "Commercial Game Narrative",
			theme: "Bureaucratic Greek Mythology",
			palette: "#d97706",
			summary:
				"Restructured the core story of a lover's descent into a darkly comedic, paper-pushing underworld.",
			tags: ["Articy Draft 3", "Branching Dialogue", "Dark Comedy"],
		},
		{
			title: "UPLOAD: The Hint & The Doubt",
			kind: "Transmedia Cyberpunk Universe",
			theme: "AI Uprising & Live-Action Short Film",
			palette: "#06b6d4",
			summary:
				"A branching sci-fi thriller game scenario paired with a self-directed live-action short film set in the same universe.",
			tags: ["Solo Dev", "Transmedia", "Multiple Endings", "Film Directing"],
		},
		{
			title: "UPLOAD: Turing Test",
			kind: "Sci-Fi Board Game Spinoff",
			theme: "Social Deduction & Hidden Traitor",
			palette: "#e11d48",
			summary:
				"A tabletop social deduction spinoff expanding the UPLOAD universe, built around 'Betrayal at House on the Hill' mechanics.",
			tags: ["Board Game", "Social Deduction", "Transmedia Lore", "Solo Dev"],
		},
		{
			title: "Problem Solved",
			kind: "Dystopian Dialogue Matrix",
			theme: "Sci-Fi Bureaucracy",
			palette: "#8b5cf6",
			summary:
				"Authored a 300-node dialogue web and directed 6 voice actors across two different languages.",
			tags: ["Voice Direction", "World Bible", "Localization Logic"],
		},
		{
			title: "ID Universe",
			kind: "ARG / Transmedia Persona",
			theme: "Multiverse Photographer",
			palette: "#ec4899",
			summary:
				"An Instagram-based fictional persona blending visual pop-culture mashups with in-character interactive lore.",
			tags: ["Transmedia", "ARG", "Visual Synthesis"],
		},
		{
			title: "WHAT THE PAK?!",
			kind: "Cinematic Marketing Campaign",
			theme: "High-Energy Game Showcases",
			palette: "#10b981",
			summary:
				"Directed and produced in-engine cinematic trailers and comedic skits using Unreal Engine Sequencer.",
			tags: ["Unreal Engine", "Sequencer", "Brand Identity"],
		},
		{
			title: "Ano Valley",
			kind: "Tabletop Prototype",
			theme: "System Mechanics & Graphic Identity",
			palette: "#4d7c0f",
			summary:
				"Designed core gameplay loops and refined the visual identity for an academic tabletop RPG prototype.",
			tags: ["Tabletop", "Game Mechanics", "Graphic Design", "M.A. Project"],
		},
	],
};

export const tr: Content = {
	profile: {
		name: "Ahmet Ozan Apaydın",
		title: "Oyun Araştırmacısı & Anlatım Tasarımcısı",
		email: "ahmetozanap@gmail.com",
		linkedin: "https://www.linkedin.com/in/ahmetozanapaydin",
		cv: "/files/ahmet-ozan-apaydin-cv.pdf",
		backstory:
			"3 yıllık oyun sektörü deneyimini Oyun Tasarımı yüksek lisansıyla birleştiren bir Anlatım Tasarımcısı ve Araştırmacı. Ahmet, sistemsel oynanış ile sinematik hikaye anlatımı arasındaki köprüyü kurmaya odaklanıyor; ludonarratif uyumsuzluğu çözmek için aktif teorik modeller geliştiriyor. İster distopik bürokrasiler tasarlasın ister transmedya evrenleri yönetsin, hikayeyi statik bir ambalaj değil, oynanabilir bir mekanik olarak ele alıyor.",
	},
	stats: [
		{ label: "Dünya İnşası & Lore", value: 95 },
		{ label: "Sistemsel Senaryo Yazımı", value: 92 },
		{ label: "Ludonarratif Uyum", value: 96 },
		{ label: "Transmedya Yönetmenliği", value: 90 },
		{ label: "Unreal Engine & Sequencer", value: 86 },
		{ label: "Akademik Araştırma", value: 91 },
	],
	quests: [
		{
			title: "Ludonarratif Uyumlaştırma Projesi",
			status: "active",
			role: "Oyun Araştırmacısı & Asistan (TA)",
			period: "Günümüz (Bahçeşehir Üniv.)",
			tools: ["Anlatı Teorisi", "D&D Ravenloft", "Sistemsel Analiz"],
			summary:
				"Ludonarratif uyumsuzluğu çözmek adına alternatif bir 'Oyuncunun Yolculuğu' modeli geliştirirken lisans öğrencilerine Oyun Analizi dersleri veriyor.",
			achievements: [
				"10 TGA ödüllü yapımı inceleyerek geleneksel sinema senaryosu ile oyun etkileşimi arasındaki sürtünmeyi analiz etti.",
				"Oyuncu psikolojisi ve mekanik uyuşmazlığını ölçmek için 4 sütunlu özel bir Analiz Matrisi geliştirdi.",
				"D&D Ravenloft ve Planescape sistemleri üzerinden geleceğin oyun tasarımcılarına dünya inşası mentörlüğü yapıyor.",
			],
		},
		{
			title: "Wendigo'nun Bürokratik Mitleri",
			status: "completed",
			role: "Anlatım Tasarımcısı",
			period: "2022 – 2024",
			tools: ["Unreal Engine", "Sequencer", "Articy Draft 3", "Twine"],
			summary:
				"ORPHEUS: Tale of a Lover oyununun hikaye yapılanmasını yönetti ve transmedya pazarlama kampanyaları tasarladı.",
			achievements: [
				"Yunan mitolojisi ve Borderlands'ten ilham alan absürt, evrak işleriyle dolu bir yeraltı dünyası kurguladı.",
				"Unreal Engine Sequencer kullanarak oyun motoru içi sinematik fragmanlar ve komedi skeçleri yönetti.",
				"Oyun içi diyalog kayıtları ve tanıtım fragmanları için seslendirme sanatçılarını direktör olarak yönlendirdi.",
			],
		},
		{
			title: "Masaüstü Asistanı Lore Sistemi",
			status: "completed",
			role: "Serbest Yazar (Freelance Writer)",
			period: "2020 – 2021 (SenpAI)",
			tools: ["İnteraktif Metin Yazarlığı", "LoL Lore", "UX Writing"],
			summary:
				"SenpAI masaüstü yapay zeka asistanı için arayüz senaryoları ve derinlemesine oyun makaleleri kaleme aldı.",
			achievements: [
				"SenpAI masaüstü yapay zeka uygulamasının tüm kullanıcı arayüzü diyaloglarını yazdı.",
				"Detaylı League of Legends yama analizleri, meta ipuçları ve evren hikayesi makaleleri üretti.",
				"Uygulamanın ilk kullanıcı deneyimi (onboarding) metinlerini anlatım akıcılığı odaklı optimize etti.",
			],
		},
		{
			title: "E-Spor Medyası Öncülüğü",
			status: "completed",
			role: "Web İçerik Yazarı & Gazeteci",
			period: "2020 (5Mid)",
			tools: ["Oyun Gazeteciliği", "Editoryal Strateji", "SEO"],
			summary:
				"Türkiye'nin öncü e-spor haber portalının editoryal büyümesine ve kurumsal dönüşümüne öncülük etti.",
			achievements: [
				"Türkiye'nin ilk e-spor haber sayfasının geniş çaplı bir oyun medyası platformuna dönüşmesinde kilit rol oynadı.",
				"Yüksek okuma oranına sahip turnuva analizleri, sektörel haberler ve özel dosyalar hazırladı.",
			],
		},
	],
	education: [
		{
			title: "Oyun Tasarımı Yüksek Lisans (M.A.)",
			source: "Bahçeşehir Üniversitesi",
			period: "Devam ediyor",
			unlocked: "Tez Odak Noktası: 'Oyuncunun Yolculuğu' modeliyle ludonarratif uyumsuzluğun çözülmesi",
		},
		{
			title: "Radyo, TV ve Sinema Lisans (B.A.)",
			source: "İstanbul Üniversitesi",
			period: "Mezun",
			unlocked: "Sinematik dramatik ark kurgusu, senaryo yazım tekniği ve kurgu-montaj ustalığı",
		},
		{
			title: "Akademik Eğitmenlik",
			source: "BAU / Beykoz / Doğuş Üniv.",
			period: "2022 – Günümüz",
			unlocked: "Oyun Yazarlığı ders asistanlığı & İnteraktif Anlatım Tasarımı konuk konuşmacı ünvanı",
		},
	],
	projects: [
		{
			title: "ORPHEUS: Tale of a Lover",
			kind: "Ticari Oyun Anlatısı",
			theme: "Bürokratik Yunan Mitolojisi",
			palette: "#d97706",
			summary:
				"Bir aşığın yeraltı dünyasına iniş hikayesini, kara mizah odaklı evrak kürek işleriyle dolu bir bürokrasiye dönüştürdü.",
			tags: ["Articy Draft 3", "Dallanan Diyalog", "Kara Mizah"],
		},
		{
			title: "UPLOAD: The Hint & The Doubt",
			kind: "Transmedya Cyberpunk Evreni",
			theme: "Yapay Zeka İsyanı & Kısa Film",
			palette: "#06b6d4",
			summary:
				"Çoklu sona sahip bir bilimkurgu gerilim senaryosu ve aynı evrende geçen ödüllü kısa film projesi.",
			tags: ["Solo Geliştirici", "Transmedya", "Çoklu Son", "Film Yönetmenliği"],
		},
		{
			title: "UPLOAD: Turing Test",
			kind: "Bilimkurgu Kutu Oyunu Prototipi",
			theme: "Sosyal Çıkarım & Gizli Hain",
			palette: "#e11d48",
			summary:
				"'Betrayal at House on the Hill' mekaniklerini temel alan ve UPLOAD transmedya evrenini masaüstüne taşıyan sosyal çıkarım oyunu.",
			tags: ["Kutu Oyunu", "Sosyal Çıkarım", "Transmedya Lore", "Solo Geliştirici"],
		},
		{
			title: "Problem Solved",
			kind: "Distopik Diyalog Matrisi",
			theme: "Bilimkurgu Bürokrasisi",
			palette: "#8b5cf6",
			summary:
				"300 diyalog düğümünden oluşan bir senaryo ağı yazdı ve 2 farklı dilde 6 seslendirme sanatçısını yönetti.",
			tags: ["Ses Yönetmenliği", "Evren Kitapçığı", "Yerelleştirme Mantığı"],
		},
		{
			title: "ID Universe",
			kind: "ARG / Transmedya Personası",
			theme: "Çoklu Evren Fotoğrafçısı",
			palette: "#ec4899",
			summary:
				"Popüler kültür referanslarını karakter hikayesiyle harmanlayan Instagram tabanlı kurgusal transmedya projesi.",
			tags: ["Transmedya", "ARG", "Görsel Sentez"],
		},
		{
			title: "WHAT THE PAK?!",
			kind: "Sinematik Pazarlama Kampanyası",
			theme: "Yüksek Enerjili Oyun Tanıtımı",
			palette: "#10b981",
			summary:
				"Unreal Engine Sequencer kullanarak oyun motoru içi sinematik fragmanlar ve komedi skeçleri tasarladı.",
			tags: ["Unreal Engine", "Sequencer", "Marka Kimliği"],
		},
		{
			title: "Ano Valley",
			kind: "Masaüstü Oyun Prototipi",
			theme: "Sistem Mekanikleri & Grafik Kimlik",
			palette: "#4d7c0f",
			summary:
				"Akademik bir masaüstü rol yapma oyunu prototipinin temel oynanış döngülerini ve görsel tasarımını kurguladı.",
			tags: ["Masaüstü Oyun", "Oyun Mekanikleri", "Grafik Tasarım", "Yüksek Lisans"],
		},
	],
};