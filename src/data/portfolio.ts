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
		name: "Ahmet Ozan Apaydın",
		title: "Video Game Narrative Designer",
		email: "hello@ahmetozanapaydin.com",
		linkedin: "https://www.linkedin.com/in/ahmetozanapaydin",
		cv: "/files/ahmet-ozan-apaydin-cv-en.pdf",
		backstory:
			"A narrative designer focused on playable stories, systemic dialogue, and lore that gives players a reason to care before the next objective marker appears. Ahmet builds worlds with clear rules, writes characters with conflicting needs, and treats branching structure as game design rather than decoration.",
	},
	stats: [
		{ label: "Worldbuilding", value: 92 },
		{ label: "Dialogue Writing", value: 88 },
		{ label: "Branching Narrative", value: 90 },
		{ label: "Quest Design", value: 84 },
		{ label: "Lore Systems", value: 86 },
		{ label: "Player Agency", value: 89 },
	],
	quests: [
		{
			title: "Primary Campaign",
			status: "active",
			role: "Narrative Designer",
			period: "Current focus",
			tools: ["Twine", "Ink", "Miro", "Notion"],
			summary:
				"Designing choice-driven quest structures, faction lore, and dialogue flows for character-first game experiences.",
			achievements: [
				"Built modular quest arcs with reversible player decisions.",
				"Mapped companion dialogue states for long-term relationship tracking.",
				"Created lore bibles that connect setting rules to playable objectives.",
			],
		},
		{
			title: "Side Quest Anthology",
			status: "completed",
			role: "Writer and Quest Designer",
			period: "2024",
			tools: ["Yarn Spinner", "Figma", "Google Sheets"],
			summary:
				"Produced compact quest lines with distinct player motives, escalation beats, and resolution variants.",
			achievements: [
				"Reduced exposition by moving lore into interactable objects.",
				"Designed optional endings without duplicating the full content tree.",
				"Documented handoff notes for level, audio, and localization teams.",
			],
		},
		{
			title: "Dialogue Dungeon",
			status: "completed",
			role: "Interactive Fiction Designer",
			period: "2023",
			tools: ["Ink", "Unity", "Obsidian"],
			summary:
				"Prototyped conversation puzzles where tone, memory, and withheld information changed the available routes.",
			achievements: [
				"Wrote fail-forward dialogue paths for repeated interrogation loops.",
				"Created variable-driven barks that reacted to prior player intent.",
				"Balanced clue delivery against mystery preservation.",
			],
		},
	],
	education: [
		{
			title: "Game Narrative Design",
			source: "Specialized Workshop",
			period: "2025",
			unlocked: "Branch logic, player choice, and quest pacing",
		},
		{
			title: "Creative Writing",
			source: "Academic Track",
			period: "2022-2024",
			unlocked: "Character voice, dramatic structure, and revision craft",
		},
		{
			title: "Game Studies",
			source: "Independent Study",
			period: "Ongoing",
			unlocked: "Ludonarrative analysis and systemic storytelling",
		},
	],
	projects: [
		{
			title: "Ashes of the Salt Road",
			kind: "Branching quest pitch",
			theme: "Desert guild politics",
			palette: "#c68b45",
			summary:
				"A trade-route mystery where every clue also changes the local power map.",
			tags: ["Faction lore", "Quest flow", "Moral choice"],
		},
		{
			title: "The Glass Archive",
			kind: "Interactive fiction prototype",
			theme: "Memory and unreliable records",
			palette: "#55c7c1",
			summary:
				"A dialogue-led investigation built around conflicting witness memories.",
			tags: ["Ink", "Dialogue puzzle", "State memory"],
		},
		{
			title: "Gravebound Companions",
			kind: "Companion system bible",
			theme: "Undead party dynamics",
			palette: "#8d68e8",
			summary:
				"Relationship arcs, banter triggers, and loyalty fractures for a dark RPG party.",
			tags: ["Companions", "Barks", "Lore bible"],
		},
		{
			title: "Signal Under Blackwater",
			kind: "Environmental narrative set",
			theme: "Flooded sci-fantasy outpost",
			palette: "#2f7fe3",
			summary:
				"Readable scene storytelling for a ruined station with no exposition dump.",
			tags: ["Environmental story", "Level notes", "Audio hooks"],
		},
	],
};

export const tr: Content = {
	profile: {
		name: "Ahmet Ozan Apaydın",
		title: "Video Oyunu Anlatım Tasarımcısı",
		email: "hello@ahmetozanapaydin.com",
		linkedin: "https://www.linkedin.com/in/ahmetozanapaydin",
		cv: "/files/ahmet-ozan-apaydin-cv-tr.pdf",
		backstory:
			"Oynanabilir hikayeler, sistemsel diyaloglar ve oyunculara bir sonraki hedef işaretinden önce önemsemeleri için sebep veren bir anlatım tasarımcısı. Ahmet, net kuralları olan dünyalar kurar, çatışan ihtiyaçları olan karakterler yazar ve dallanan yapıyı bir dekorasyon değil, oyun tasarımı olarak ele alır.",
	},
	stats: [
		{ label: "Dünya İnşası", value: 92 },
		{ label: "Diyalog Yazımı", value: 88 },
		{ label: "Dallanan Anlatı", value: 90 },
		{ label: "Görev Tasarımı", value: 84 },
		{ label: "Lore Sistemleri", value: 86 },
		{ label: "Oyuncu Ajansı", value: 89 },
	],
	quests: [
		{
			title: "Ana Kampanya",
			status: "active",
			role: "Anlatım Tasarımcısı",
			period: "Mevcut odak",
			tools: ["Twine", "Ink", "Miro", "Notion"],
			summary:
				"Karakter odaklı oyun deneyimleri için seçim temelli görev yapıları, fraksiyon lore'u ve diyalog akışları tasarlıyor.",
			achievements: [
				"Geri döndürülebilir oyuncu kararlarına sahip modüler görev arkları oluşturuldu.",
				"Uzun vadeli ilişki takibi için yoldaş diyalog durumları haritalandı.",
				"Ortam kurallarını oynanabilir hedeflere bağlayan lore kitapçıkları hazırlandı.",
			],
		},
		{
			title: "Yan Görev Antolojisi",
			status: "completed",
			role: "Yazar ve Görev Tasarımcısı",
			period: "2024",
			tools: ["Yarn Spinner", "Figma", "Google Sheets"],
			summary:
				"Belirgin oyuncu motivasyonları, yükselen aksiyon ve farklı çözüm varyantlarına sahip kısa görev hatları üretildi.",
			achievements: [
				"Lore'u etkileşime açık nesnelere taşıyarak anlatım yükü azaltıldı.",
				"İçerik ağacını tamamen kopyalamadan isteğe bağlı sonlar tasarlandı.",
				"Level, ses ve yerelleştirme ekipleri için teslim notları belgelendi.",
			],
		},
		{
			title: "Diyalog Zindanı",
			status: "completed",
			role: "İnteraktif Kurgu Tasarımcısı",
			period: "2023",
			tools: ["Ink", "Unity", "Obsidian"],
			summary:
				"Ton, hafıza ve gizlenen bilgilerin mevcut rotaları değiştirdiği konuşma bulmacaları prototiplendi.",
			achievements: [
				"Tekrarlanan sorgulama döngülerinde başarısızlıktan ilerlemeye izin veren diyalog yolları yazıldı.",
				"Önceki oyuncu niyetine tepki veren değişken tabanlı replikler oluşturuldu.",
				"İpucu dağıtımı ile gizem korunumu arasında denge sağlandı.",
			],
		},
	],
	education: [
		{
			title: "Oyun Anlatım Tasarımı",
			source: "Özel Atölye",
			period: "2025",
			unlocked: "Dallanma mantığı, oyuncu seçimi ve görev akışı",
		},
		{
			title: "Yaratıcı Yazarlık",
			source: "Akademik Program",
			period: "2022-2024",
			unlocked: "Karakter sesi, dramatik yapı ve düzeltme ustalığı",
		},
		{
			title: "Oyun Çalışmaları",
			source: "Bağımsız Araştırma",
			period: "Devam ediyor",
			unlocked: "Ludonarratif analiz ve sistemsel hikaye anlatımı",
		},
	],
	projects: [
		{
			title: "Ashes of the Salt Road",
			kind: "Dallanan görev dosyası",
			theme: "Çöl lonca siyaseti",
			palette: "#c68b45",
			summary: "Her ipucunun yerel güç haritasını değiştirdiği bir ticaret yolu gizemi.",
			tags: ["Fraksiyon lore", "Görev akışı", "Ahlaki seçim"],
		},
		{
			title: "The Glass Archive",
			kind: "İnteraktif kurgu prototipi",
			theme: "Hafıza ve güvenilmez kayıtlar",
			palette: "#55c7c1",
			summary:
				"Çelişen tanık hatıraları etrafında inşa edilmiş diyalog odaklı bir soruşturma.",
			tags: ["Ink", "Diyalog bulmacası", "Durum hafızası"],
		},
		{
			title: "Gravebound Companions",
			kind: "Yoldaş sistemi kitapçığı",
			theme: "Ölümsüz parti dinamikleri",
			palette: "#8d68e8",
			summary:
				"Karanlık bir RPG partisi için ilişki arkları, atışma tetikleyicileri ve sadakat kırılmaları.",
			tags: ["Yoldaşlar", "Replikler", "Lore kitapçığı"],
		},
		{
			title: "Signal Under Blackwater",
			kind: "Çevresel anlatım seti",
			theme: "Sular altında kalmış bilim-fantezi karakolu",
			palette: "#2f7fe3",
			summary:
				"Hiçbir bilgi dökümü olmadan, harabe bir istasyonun okunabilir sahne hikayesi.",
			tags: ["Çevresel hikaye", "Level notları", "Ses kancaları"],
		},
	],
};
