// ==========================================
// ملف الأعمال — هنا تُحذف الأعمال أو تُعدَّل أو تُضاف (يمكن أيضًا من لوحة المالك: افتح الموقع بإضافة #owner)
// hidden: true  = إخفاء العمل دون حذفه
// ==========================================
// ==========================================
// معرض الأعمال — أضف مشاريعك الحقيقية هنا
// ------------------------------------------
// 1) ارفع الصورة داخل مجلد في المستودع (مثال: images/office-1.jpg)
// 2) ضع مسارها في الحقل img  (مثال: img: 'images/office-1.jpg')
// 3) لإضافة مشروع جديد: انسخ سطرًا كاملًا { ... } وغيّر بياناته
// cat يجب أن يكون واحدًا من: Office / Studio / Art / Digital / Print
// concept: true تعني "تصور تصميمي" (ليس مشروع عميل) — احذف هذا الحقل عند وضع مشروع حقيقي.
// المشروع الذي img فيه فارغ '' يظهر كبطاقة "قريبًا" ولا يُفتح.
// ==========================================
const portfolioData = [
    { cat: 'Studio', img: 'images/work-boxing.webp', video: 'videos/work-boxing.mp4', first: true,
      titleAr: "فيلم «قبل الجرس»", titleEn: "Before the Bell — Boxing Film", titleFr: "Before the Bell — film de boxe",
      descAr: "فيلم ملاكمة بإخراج سينمائي مع ملصق رسمي للعمل", descEn: "A cinematic boxing film with its official poster", descFr: "Un film de boxe cinématographique avec son affiche officielle" },
    { cat: 'Studio', img: 'images/work-dont-sleep.webp', video: 'videos/work-dont-sleep.mp4', first: true,
      titleAr: "إعلان فيلم «لا تنم»", titleEn: "Don’t Sleep — Film Trailer", titleFr: "Don’t Sleep — bande-annonce",
      descAr: "إعلان تشويقي لفيلم مع ملصقه، بعد التعديل النهائي", descEn: "A suspense trailer with its poster, final cut", descFr: "Une bande-annonce à suspense avec son affiche, montage final" },
    { cat: 'Studio', img: 'images/work-binafsaj-video.webp', video: 'videos/work-binafsaj-video.mp4', first: true,
      titleAr: "فيديو احتفالية يوم التأسيس", titleEn: "Founding Day Celebration Video", titleFr: "Vidéo de la fête de la Fondation",
      descAr: "فيديو من احتفالية يوم التأسيس في بنفسج كافيه", descEn: "A video from the Founding Day celebration at Binafsaj Café", descFr: "Vidéo de la célébration de la Fondation au Café Binafsaj" },
    { cat: 'Marketing', img: 'images/work-binafsaj.webp', first: true,
      titleAr: "احتفالية يوم التأسيس في بنفسج", titleEn: "Founding Day at Binafsaj Café", titleFr: "La Fondation au Café Binafsaj",
      descAr: "تنظيم وتنسيق وتوثيق كامل لاحتفالية جمعت أهالي الحي والإعلاميين ورجال الأعمال", descEn: "Full organisation, coordination and documentation of a celebration for neighbours, media and business people", descFr: "Organisation, coordination et documentation complètes d’une célébration réunissant voisins, médias et entrepreneurs" },
    { cat: 'Marketing', img: 'images/work-aosm.webp', first: true,
      titleAr: "شبكة عصم الإعلامية — ملف النتائج", titleEn: "Aosm Media Network — Results", titleFr: "Réseau Aosm — résultats",
      descAr: "شبكة أطلقناها من الصفر: 3.86 ألف مشترك وأكثر من 1.1 ألف فيديو على يوتيوب", descEn: "A network launched from scratch: 3.86K subscribers and 1.1K+ videos on YouTube", descFr: "Un réseau lancé de zéro : 3,86 k abonnés et plus de 1,1 k vidéos sur YouTube" },
    { cat: 'Marketing', img: 'images/work-fuel.webp', first: true,
      titleAr: "فيلم وقود — دراسة حالة", titleEn: "Fuel Film — Case Study", titleFr: "Film Fuel — étude de cas",
      descAr: "من كتابة القصة والسيناريو إلى اختيار الممثلين والمتابعة، وعُرض على يوتيوب بأكثر من 3.8 ألف مشاهدة", descEn: "From story and screenplay to casting and follow-up, shown on YouTube with 3.8K+ views", descFr: "De l’histoire et du scénario au casting et au suivi, diffusé sur YouTube (3,8 k+ vues)" },
    { cat: 'Marketing', img: 'images/work-khuzama.webp', first: true,
      titleAr: "بوستات جلسة تصوير خزامة", titleEn: "Khuzama Photoshoot Posts", titleFr: "Posts du shooting Khuzama",
      descAr: "تصاميم بوستات من جلسة تصوير فريق شركة خزامة", descEn: "Social post designs from the Khuzama team photoshoot", descFr: "Visuels de posts issus du shooting de l’équipe Khuzama" },
    { cat: 'Studio', img: 'images/work-khuzama-photos.webp', first: true,
      titleAr: "جلسة تصوير فريق خزامة", titleEn: "Khuzama Team Photoshoot", titleFr: "Shooting de l’équipe Khuzama",
      descAr: "صور فريق الشركة بإطار تفاعلي على طراز السوشيال ميديا", descEn: "Team portraits with an interactive social-media-style frame", descFr: "Portraits d’équipe avec un cadre façon réseaux sociaux" },
    { cat: 'Studio', img: 'images/work-wedding.webp', first: true,
      titleAr: "توثيق حفل زواج", titleEn: "Wedding Documentation", titleFr: "Reportage de mariage",
      descAr: "توثيق زفّة السيارة واستقبال المهنئين وليلة العمر", descEn: "Documenting the car procession, guest reception and the big night", descFr: "Documentation du cortège, de l’accueil des invités et de la grande soirée" },
    { cat: 'Studio', img: 'images/work-model.webp', first: true,
      titleAr: "جلسة تصوير موديل", titleEn: "Model Photoshoot", titleFr: "Shooting mannequin",
      descAr: "جلسة تصوير أزياء بثلاث إطلالات وتخطيط جاهز للنشر", descEn: "A fashion shoot with three looks and publish-ready layouts", descFr: "Un shooting mode avec trois looks et des mises en page prêtes à publier" },
    { cat: 'Print', img: 'images/work-haya.webp', first: true,
      titleAr: "هوية شركة هيا", titleEn: "Haya Company Identity", titleFr: "Identité de l’entreprise Haya",
      descAr: "بطاقات أعمال وأوراق رسمية وهوية بصرية متكاملة للشركة", descEn: "Business cards, letterheads and a complete visual identity", descFr: "Cartes, papier à en-tête et identité visuelle complète" },
    { cat: 'Office', img: 'images/work-cv.webp', first: true,
      titleAr: "تقرير خدمة السير الذاتية", titleEn: "CV Service Report", titleFr: "Rapport du service CV",
      descAr: "20 سيرة في 6 قطاعات، ونحو 60 شخصاً ساهمنا في توظيفهم", descEn: "20 CVs across 6 sectors, and about 60 people we helped get hired", descFr: "20 CV dans 6 secteurs, et environ 60 personnes que nous avons aidées à recruter" },
    { cat: 'Studio', img: 'images/studio-social.webp', video: 'videos/studio-social.mp4',
      titleAr: "مقطع سوشيال ميديا", titleEn: "Social Media Clip", titleFr: "Clip réseaux sociaux",
      descAr: "مقطع قصير بإيقاع سريع من لقاء ميداني، ويُختم بتوقيع نورمال", descEn: "A short fast-paced clip from a field meeting, closed with the Normal signature", descFr: "Un court clip rythmé d’une réunion de terrain, clôturé par la signature Normal" },
    { cat: 'Office', img: 'images/office-cv.webp',
      titleAr: "سيرة ذاتية احترافية: تصميم مقابل ATS", titleEn: "Professional CV: Designed vs ATS", titleFr: "CV professionnel : design vs ATS",
      descAr: "التصميم الجذاب للعين والانطباع الأول، ونسخة ATS بتنسيق بسيط يقرؤه أنظمة الفرز الآلي للشركات بدقة", descEn: "The designed CV wins the human eye and first impression; the ATS version uses a plain layout that company screening systems read accurately", descFr: "Le CV design séduit l’œil et la première impression ; la version ATS, au format simple, est lue avec précision par les logiciels de tri" },
    { cat: 'Office', img: 'images/office-quote.webp',
      titleAr: "عرض سعر للشركات", titleEn: "Corporate Quotation", titleFr: "Devis d’entreprise",
      descAr: "عرض سعر رسمي حقيقي لخدمة صف السيارات بترويسة هيا وجدول الخدمات والشروط", descEn: "A real official price offer for a valet service: Haya letterhead, services table and terms", descFr: "Une vraie offre de prix officielle pour un service voiturier : en-tête Haya, tableau des services et conditions" },
    { cat: 'Office', img: 'images/office-ticket.webp',
      titleAr: "نموذج تذكرة وقسيمة", titleEn: "Ticket & Form Template", titleFr: "Modèle de ticket",
      descAr: "تذكرة وقسيمة حقيقية لخدمة صف السيارات بجزء قابل للفصل وترقيم وخريطة للسيارة وشروط الاستلام", descEn: "A real valet ticket and coupon: tear-off stub, numbering, car diagram and handover terms", descFr: "Un vrai ticket voiturier : talon détachable, numérotation, schéma du véhicule et conditions" },
    { cat: 'Office', img: 'images/office-letter.webp',
      titleAr: "خطاب عرض تعاون من نورمال", titleEn: "Normal Partnership Letter", titleFr: "Lettre de partenariat Normal",
      descAr: "خطاب رسمي بهوية نورمال: ترويسة وأرقام نورمال للتسويق وأقسامها الستة والتزاماتنا وتوقيع وتذييل بالتواصل", descEn: "An official Normal-branded letter: letterhead, Normal Marketing SA figures, the six divisions, our promise, signature and contact footer", descFr: "Une lettre officielle à l’identité Normal : en-tête, chiffres, six divisions, engagements, signature et pied de page" },
    { cat: 'Art', img: 'images/art-logos.webp',
      titleAr: "عرض مقترحات الشعار", titleEn: "Logo Concepts Presentation", titleFr: "Présentation de logos",
      descAr: "ثلاثة مقترحات لشعار شركة هيا لصف السيارات، مع شرح فكرة ومعنى كل مقترح", descEn: "Three logo directions for Haya Valet Parking, each with its idea and meaning", descFr: "Trois pistes de logo pour Haya Valet Parking, chacune avec son idée et son sens" },
    { cat: 'Art', img: 'images/art-identity.webp',
      titleAr: "لوحة الهوية البصرية", titleEn: "Brand Identity Board", titleFr: "Planche d’identité visuelle",
      descAr: "الشعار وألوان العلامة وتطبيقاتها على الكروت في لوحة هوية لشركة هيا", descEn: "The logo, brand colours and their use on the cards, in an identity board for Haya", descFr: "Le logo, les couleurs de la marque et leur application sur les cartes, pour Haya" },
    { cat: 'Art', img: 'images/work-haya-profile.webp',
      titleAr: "ملف تعريف شركة هيا", titleEn: "Haya Company Profile", titleFr: "Profil de l’entreprise Haya",
      descAr: "ملف تعريف من 13 صفحة بألوان الكحلي والذهبي: الرؤية والرسالة والخدمات وشركاء النجاح", descEn: "A 13-page company profile in navy and gold: vision, mission, services and success partners", descFr: "Un profil d’entreprise de 13 pages en bleu nuit et or : vision, mission, services et partenaires" },
    { cat: 'Print', img: 'images/print-cards.webp',
      titleAr: "كروت أعمال فاخرة", titleEn: "Luxury Business Cards", titleFr: "Cartes de visite de luxe",
      descAr: "كرت فحمي بخطوط ذهبية ووجه خلفي خردلي بالبيانات، لشركة هيا لصف السيارات", descEn: "A charcoal card with gold lines and an amber back with contact details, for Haya Valet Parking", descFr: "Une carte anthracite à lignes dorées et un verso ambré avec les coordonnées, pour Haya Valet Parking" },
    { cat: 'Print', img: 'images/print-id.webp',
      titleAr: "بطاقات موظفين", titleEn: "Staff ID Cards", titleFr: "Badges employés",
      descAr: "بطاقة موظف فاخرة بإطار ذهبي تضم الصورة والاسم والمنصب ورقم الموظف ورمز QR", descEn: "A premium staff card with gold edge, photo, name, role, employee number and QR code", descFr: "Une carte employé premium à bordure dorée avec photo, nom, poste, numéro et code QR" },
    { cat: 'Studio', img: 'images/studio-burger.webp', video: 'videos/studio-burger.mp4',
      titleAr: "فيديو تسويقي لمطعم برجر", titleEn: "Burger Restaurant Promo Video", titleFr: "Vidéo promo d’un restaurant de burgers",
      descAr: "لقطات تحضير البرجر والمقليات بتلوين دافئ يبرز شهية الطعام، بعرض عمودي", descEn: "Burger and fries preparation with a warm grade that brings out the food, in vertical format", descFr: "Préparation de burgers et frites avec un étalonnage chaud qui met en valeur les plats, format vertical" },
    { cat: 'Studio', img: 'images/studio-cafe.webp', video: 'videos/studio-cafe.mp4',
      titleAr: "فيديو تسويقي لمقهى", titleEn: "Café Promo Video", titleFr: "Vidéo promo d’un café",
      descAr: "لقطات تحضير القهوة وأجواء المقهى بتلوين سينمائي هادئ، بعرض عمودي", descEn: "Coffee preparation and café atmosphere with a soft cinematic grade, in vertical format", descFr: "Préparation du café et ambiance du lieu, étalonnage cinéma doux, format vertical" },
    { cat: 'Studio', img: 'images/studio-cinematic-promo.webp', video: 'videos/studio-cinematic-promo.mp4',
      titleAr: "فيديو إعلاني سينمائي", titleEn: "Cinematic Promo Video", titleFr: "Vidéo promo cinématographique",
      descAr: "تلوين سينمائي فاخر: دفء في الإضاءة وحواف داكنة وحبيبات فيلم، بعرض عمودي", descEn: "A luxury cinematic grade: warm light, dark vignette and film grain, in vertical format", descFr: "Un étalonnage cinéma luxueux : lumière chaude, vignettage et grain, au format vertical" },
    { cat: 'Studio', img: 'images/studio-cinematic.webp', video: 'videos/studio-cinematic.mp4',
      titleAr: "فيديو سينمائي", titleEn: "Cinematic Film", titleFr: "Film cinématographique",
      descAr: "مشاهد ليلية بتدرج ألوان دافئ ولقطات سينمائية وترجمة مدمجة", descEn: "Night scenes with warm colour grading, cinematic shots and built-in subtitles", descFr: "Scènes de nuit à l’étalonnage chaud, plans cinématographiques et sous-titres intégrés" },
    { cat: 'Studio', img: 'images/studio-promo.webp', video: 'videos/studio-promo.mp4',
      titleAr: "فيديو إعلاني لفعالية", titleEn: "Event Promo Video", titleFr: "Vidéo promotionnelle d’événement",
      descAr: "مونتاج إعلاني بإيقاع سريع يعرض أجواء الحدث، بعرض عمودي مناسب للجوال", descEn: "A fast-paced promo edit showing the event atmosphere, in vertical format for mobile", descFr: "Un montage promo rythmé de l’événement, au format vertical pour mobile" },
    { cat: 'Digital', img: 'images/digital-site-home.webp',
      titleAr: "موقع شركة لوجستية عصري", titleEn: "Modern Logistics Company Website", titleFr: "Site moderne d’entreprise logistique",
      descAr: "واجهة رئيسية بتصميم داكن عصري وتتبع شحنات، تعمل على الكمبيوتر والجوال", descEn: "A modern dark homepage with shipment tracking, responsive on desktop and mobile", descFr: "Une page d’accueil sombre et moderne avec suivi d’expédition, responsive" },
    { cat: 'Digital', img: 'images/digital-site-pages.webp',
      titleAr: "صفحات الخدمات وتتبع الشحنات", titleEn: "Services & Shipment Tracking Pages", titleFr: "Pages services et suivi d’expédition",
      descAr: "صفحة خدمات بشبكة بطاقات وصفحة تتبع بخريطة ومراحل الشحنة", descEn: "A services page with a card grid and a tracking page with map and shipment stages", descFr: "Une page services en grille et une page de suivi avec carte et étapes" }
];

// آراء العملاء — أضف هنا آراء عملائك الحقيقيين فقط (بإذنهم)
// الصيغة (انسخ هذا القالب وعبّئه بكلام العميل الحقيقي واسمه كما وافق):
// { nameAr: 'الاسم', nameEn: 'Name', nameFr: 'Nom', roleAr: 'المسمى أو النشاط', roleEn: '', roleFr: '', rating: 5,
//   textAr: 'نص رأيه', textEn: 'his review', textFr: 'son avis' },
// وما دامت القائمة فارغة يظهر نموذج «شاركنا رأيك» بدل الآراء.
// ==========================================
const testimonialsData = [
  {
    "nameAr": "إبراهيم مصطفى إسماعيل",
    "nameEn": "Ibrahim Mustafa Ismail",
    "nameFr": "Ibrahim Mustafa Ismail",
    "roleAr": "سيمو نيو سترين",
    "roleEn": "سيمو نيو سترين",
    "roleFr": "سيمو نيو سترين",
    "rating": 5,
    "textAr": "1) أعجبني جدًا سلاسة التصفح الواضح وسرعة الوصول للمعلومة، محتوى وتجربة للعين، إبداع وتنظيم. 2) تجربة جيدة جدًا، وبسيطة في التصميم وجودة الأداء. 3) عمل رائع ومجهودات يشكر عليها الموجودون على الموقع، وبالتوفيق في الموجود.",
    "textEn": "1) I really liked the smooth, clear browsing and the speed of reaching information: content and an experience that pleases the eye, creativity and organisation. 2) A very good experience, simple in design and good in performance. 3) Great work and efforts the people behind the site deserve thanks for. Best of luck.",
    "textFr": "1) J’ai beaucoup aimé la navigation fluide et claire et la rapidité d’accès à l’information : contenu et expérience agréables à l’œil, créativité et organisation. 2) Très bonne expérience, simple dans le design et de bonne performance. 3) Excellent travail et efforts dont il faut remercier les équipes du site. Bonne continuation."
  },
  {
    "nameAr": "أحمد",
    "nameEn": "Ahmed",
    "nameFr": "Ahmed",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "أهنيك على الشغل النظيف، يعطيك العافية",
    "textEn": "I congratulate you on the clean work, well done.",
    "textFr": "Félicitations pour ce travail soigné, bravo."
  },
  {
    "nameAr": "سارة",
    "nameEn": "Sarah",
    "nameFr": "Sarah",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "شكرًا يعطيك العافية، الصور حلوة",
    "textEn": "Thank you, well done. The photos look great.",
    "textFr": "Merci, bravo. Les photos sont superbes."
  },
  {
    "nameAr": "محمد",
    "nameEn": "Mohammed",
    "nameFr": "Mohammed",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "تسلم إيدك حبيبنا، ما قصّرت",
    "textEn": "Bless your hands, you did not fall short.",
    "textFr": "Merci beaucoup, vous n'avez pas ménagé vos efforts."
  },
  {
    "nameAr": "ليان",
    "nameEn": "Layan",
    "nameFr": "Layan",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "يعطيك العافية حبيبي، الله يسعدك ويوفقك",
    "textEn": "Well done, may God bring you joy and success.",
    "textFr": "Bravo, que Dieu vous accorde bonheur et réussite."
  },
  {
    "nameAr": "يوسف",
    "nameEn": "Youssef",
    "nameFr": "Youssef",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "تسلم يمينك",
    "textEn": "Bless your hand.",
    "textFr": "Merci infiniment."
  },
  {
    "nameAr": "جنى",
    "nameEn": "Jana",
    "nameFr": "Jana",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "الله يعطيك العافية يا حبيبي من الآخر",
    "textEn": "Truly, well done, my friend.",
    "textFr": "Vraiment, bravo mon ami."
  },
  {
    "nameAr": "عبدالرحمن",
    "nameEn": "Abdulrahman",
    "nameFr": "Abdulrahman",
    "roleAr": "",
    "roleEn": "",
    "roleFr": "",
    "rating": 5,
    "textAr": "تسلم يدك يا حبيبي",
    "textEn": "Bless your hand, my friend.",
    "textFr": "Merci mon ami."
  }
];

// ==========================================
// شاشة العرض (أعمالنا على الشاشة) — كل ملف هنا يظهر في الشاشة بالترتيب
// type: video | image | poster   ·   cat: Marketing | Studio | Office | Print | Art | Digital
// ==========================================
const showcaseData = [
  {
    "cat": "Studio",
    "type": "video",
    "src": "videos/work-boxing.mp4",
    "poster": "images/work-boxing.webp",
    "ar": "فيلم «قبل الجرس»",
    "en": "Before the Bell — Boxing Film",
    "fr": "Before the Bell — film de boxe"
  },
  {
    "cat": "Studio",
    "type": "video",
    "src": "videos/work-dont-sleep.mp4",
    "poster": "images/work-dont-sleep.webp",
    "ar": "إعلان فيلم «لا تنم»",
    "en": "Don’t Sleep — Film Trailer",
    "fr": "Don’t Sleep — bande-annonce"
  },
  {
    "cat": "Studio",
    "type": "video",
    "src": "videos/work-binafsaj-video.mp4",
    "poster": "images/work-binafsaj-video.webp",
    "ar": "فيديو احتفالية يوم التأسيس",
    "en": "Founding Day Celebration Video",
    "fr": "Vidéo de la fête de la Fondation"
  },
  {
    "cat": "Studio",
    "type": "image",
    "src": "images/show/poster-boxing.webp",
    "ar": "ملصق فيلم «قبل الجرس»",
    "en": "Before the Bell — Poster",
    "fr": "Before the Bell — affiche"
  },
  {
    "cat": "Studio",
    "type": "image",
    "src": "images/show/poster-dont-sleep.webp",
    "ar": "ملصق فيلم «لا تنم»",
    "en": "Don’t Sleep — Poster",
    "fr": "Don’t Sleep — affiche"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/binafsaj-1.webp",
    "ar": "احتفالية يوم التأسيس في بنفسج",
    "en": "Founding Day at Binafsaj Café",
    "fr": "La Fondation au Café Binafsaj"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/aosm-1.webp",
    "ar": "شبكة عصم الإعلامية — ملف النتائج (1/2)",
    "en": "Aosm Media Network — Results (1/2)",
    "fr": "Réseau Aosm — résultats (1/2)"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/aosm-2.webp",
    "ar": "شبكة عصم الإعلامية — ملف النتائج (2/2)",
    "en": "Aosm Media Network — Results (2/2)",
    "fr": "Réseau Aosm — résultats (2/2)"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/fuel-1.webp",
    "ar": "فيلم وقود — دراسة حالة",
    "en": "Fuel Film — Case Study",
    "fr": "Film Fuel — étude de cas"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/khuzama-1.webp",
    "ar": "بوستات جلسة تصوير خزامة (1/3)",
    "en": "Khuzama Photoshoot Posts (1/3)",
    "fr": "Posts du shooting Khuzama (1/3)"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/khuzama-2.webp",
    "ar": "بوستات جلسة تصوير خزامة (2/3)",
    "en": "Khuzama Photoshoot Posts (2/3)",
    "fr": "Posts du shooting Khuzama (2/3)"
  },
  {
    "cat": "Marketing",
    "type": "poster",
    "src": "images/show/khuzama-3.webp",
    "ar": "بوستات جلسة تصوير خزامة (3/3)",
    "en": "Khuzama Photoshoot Posts (3/3)",
    "fr": "Posts du shooting Khuzama (3/3)"
  },
  {
    "cat": "Studio",
    "type": "poster",
    "src": "images/show/wedding-1.webp",
    "ar": "توثيق حفل زواج",
    "en": "Wedding Documentation",
    "fr": "Reportage de mariage"
  },
  {
    "cat": "Studio",
    "type": "image",
    "src": "images/show/model-look.webp",
    "ar": "جلسة موديل — إطلالة Be Yourself",
    "en": "Model Shoot — “Be Yourself” Look",
    "fr": "Shooting mannequin — look « Be Yourself »"
  },
  {
    "cat": "Studio",
    "type": "image",
    "src": "images/show/model-triptych.webp",
    "ar": "جلسة موديل — ثلاث إطلالات",
    "en": "Model Shoot — Three Looks",
    "fr": "Shooting mannequin — trois looks"
  },
  {
    "cat": "Studio",
    "type": "image",
    "src": "images/show/model-contact.webp",
    "ar": "جلسة موديل — ورقة المعاينة",
    "en": "Model Shoot — Contact Sheet",
    "fr": "Shooting mannequin — planche contact"
  },
  {
    "cat": "Studio",
    "type": "image",
    "src": "images/show/model-banner.webp",
    "ar": "جلسة موديل — بانر الموقع",
    "en": "Model Shoot — Website Banner",
    "fr": "Shooting mannequin — bannière web"
  },
  {
    "cat": "Print",
    "type": "poster",
    "src": "images/show/haya.webp",
    "ar": "هوية شركة هيا",
    "en": "Haya Company Identity",
    "fr": "Identité de l’entreprise Haya"
  },
  {
    "cat": "Office",
    "type": "poster",
    "src": "images/show/cv-1.webp",
    "ar": "تقرير خدمة السير الذاتية (1/2)",
    "en": "CV Service Report (1/2)",
    "fr": "Rapport du service CV (1/2)"
  },
  {
    "cat": "Office",
    "type": "poster",
    "src": "images/show/cv-2.webp",
    "ar": "تقرير خدمة السير الذاتية (2/2)",
    "en": "CV Service Report (2/2)",
    "fr": "Rapport du service CV (2/2)"
  }
];
