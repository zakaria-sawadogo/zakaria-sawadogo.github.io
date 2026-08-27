"use client";

import { useEffect } from "react";

const dictionary: Record<string, string> = {
  "Home": "Accueil",
  "About": "À propos",
  "Research": "Recherche",
  "Publications": "Publications",
  "Projects": "Projets",
  "Teaching": "Enseignement",
  "Lab": "Laboratoire",
  "Contact": "Contact",
  "Lecturer & Researcher": "Enseignant-Chercheur",
  "Artificial Intelligence • Cybersecurity • Data Science": "Intelligence Artificielle • Cybersécurité • Science des Données",
  "Cybersecurity • Artificial Intelligence • Data Science • Digital Development": "Cybersécurité • Intelligence Artificielle • Science des Données • Développement Numérique",
  "Lecturer and researcher building secure, intelligent, and inclusive digital systems for institutions, communities, and Africa's digital transformation.": "Enseignant-chercheur développant des systèmes numériques sécurisés, intelligents et inclusifs pour les institutions, les communautés et la transformation numérique de l’Afrique.",
  "Research interests": "Intérêts de recherche",
  "Secure Digital Systems": "Systèmes numériques sécurisés",
  "Research on malware detection, cyber threat intelligence, privacy, and trustworthy AI.": "Recherche sur la détection des malwares, la cyber threat intelligence, la confidentialité et l’IA digne de confiance.",
  "Policy & Digital Development": "Politiques publiques et développement numérique",
  "Applied work connecting digital rights, AI governance, inclusion, and institutional transformation.": "Travaux appliqués reliant droits numériques, gouvernance de l’IA, inclusion et transformation institutionnelle.",
  "Current work": "Travaux en cours",
  "View project": "Voir le projet",
  "Selected Recent Publications": "Publications récentes sélectionnées",
  "All publications": "Toutes les publications",
  "Current projects": "Projets en cours",
  "Service & recognition": "Services et distinctions",
  "Experience": "Expérience",
  "Education": "Formation",
  "Funding": "Financements",
  "Open focus": "Encadrement et collaborations",
  "Students interested in AI, cybersecurity, Android malware, privacy, and data systems are welcome to send a concise research statement.": "Les étudiants intéressés par l’IA, la cybersécurité, les malwares Android, la confidentialité et les systèmes de données peuvent envoyer une brève note de recherche.",
  "Lecturer and researcher in cybersecurity, AI, and digital transformation.": "Enseignant-chercheur en cybersécurité, IA et transformation numérique.",
  "Join": "S'inscrire",
  "Newsletter": "Infolettre",
  "Navigation": "Navigation",
  "All rights reserved.": "Tous droits réservés.",
  "Research Areas": "Axes de recherche",
  "Students": "Étudiants",
  "Awards": "Distinctions",
  "Awards & Academic Achievements": "Distinctions et réalisations académiques",
  "View all awards & certificates": "Voir toutes les distinctions et certificats",
  "Certificates": "Certificats",
  "Best Paper Award": "Prix du meilleur article",
  "Academic Excellence Recognition": "Reconnaissance d'excellence académique",
  "Applied Research Impact Award": "Prix de l'impact en recherche appliquée",
  "Certificate of Outstanding Paper Award": "Certificat de prix de l'article remarquable",
  "PASET RSIF PhD Scholarship": "Bourse doctorale PASET RSIF",
  "National Scholarship": "Bourse nationale",
  "Excellence Scholarship": "Bourse d'excellence",
  "Secure, intelligent systems for real institutions": "Des systèmes intelligents et sécurisés pour des institutions réelles",
  "The research program connects artificial intelligence, security, privacy, and data science with practical digital transformation needs.": "Le programme de recherche relie l’intelligence artificielle, la sécurité, la confidentialité et la science des données aux besoins concrets de transformation numérique.",
  "Recent publications and projects": "Publications et projets récents",
  "Biography": "Biographie",
  "Profile": "Profil",
  "Academic Biography": "Biographie académique",
  "Current appointment": "Fonction actuelle",
  "Read more": "Lire la suite",
  "Show less": "Voir moins",
  "Laboratory": "Laboratoire",
  "Gallery": "Galerie",
  "Research seminar": "Séminaire de recherche",
  "Student project demo": "Démonstration de projet étudiant",
  "Laboratory workshop": "Atelier du laboratoire",
  "Editorial entries can be added later as JSON or Markdown content while keeping the static deployment model.": "Des articles éditoriaux pourront être ajoutés ultérieurement au format JSON ou Markdown, tout en conservant le modèle de déploiement statique.",
  "Cybersecurity, AI, privacy-preserving computing, and data-driven digital transformation.": "Cybersécurité, IA, calcul préservant la confidentialité et transformation numérique guidée par les données.",
  "Computer science, cybersecurity, artificial intelligence, and software engineering.": "Informatique, cybersécurité, intelligence artificielle et génie logiciel.",
  "Digital governance, Internet development, cybersecurity initiatives, and collaborations.": "Gouvernance numérique, développement de l’Internet, initiatives en cybersécurité et collaborations.",
  "Service": "Engagement",
  "Reviewer": "Évaluateur",
  "Organizing Committee Member": "Membre du comité d'organisation",
  "Academic Path": "Parcours académique",
  "Professional Experience": "Expérience professionnelle",
  "Affiliation": "Affiliation",
  "Core Expertise": "Expertises clés",
  "Academic program design and teaching coordination": "Conception de programmes académiques et coordination pédagogique",
  "Research supervision in cybersecurity and AI": "Encadrement de recherches en cybersécurité et IA",
  "Industry and public-sector digital transformation advisory": "Conseil en transformation numérique pour l’industrie et le secteur public",
  "Selected Policy & Advisory Contributions": "Contributions sélectionnées en politiques publiques et conseil",
  "Co-author, Digital Rights Manual for Beginners (DRIF 2025).": "Co-auteur, Digital Rights Manual for Beginners (DRIF 2025).",
  "Digital Rights Expert, African Internet Freedom Forum (2024).": "Expert en droits numériques, African Internet Freedom Forum (2024).",
  "Contributor to national initiatives on digital rights, cybersecurity awareness, and digital governance in Burkina Faso.": "Contributeur à des initiatives nationales sur les droits numériques, la sensibilisation à la cybersécurité et la gouvernance numérique au Burkina Faso.",
  "Contributed to AI research, policy, and digital development through Deep Learning Indaba and AI4D Africa.": "Contribution à la recherche en IA, aux politiques publiques et au développement numérique à travers Deep Learning Indaba et AI4D Africa.",
  "Facilitator of multi-stakeholder dialogues involving government, academia, civil society, and development partners.": "Facilitateur de dialogues multipartites impliquant gouvernement, milieu académique, société civile et partenaires au développement.",
  "PASET Regional Scholarship and Innovation Fund (RSIF) Scholar": "Boursier PASET Regional Scholarship and Innovation Fund (RSIF)",
  "Partnership for Skills in Applied Sciences, Engineering and Technology": "Partnership for Skills in Applied Sciences, Engineering and Technology",
  "Selected among outstanding African researchers for a highly competitive doctoral fellowship valued at approximately USD 100,000. Funded by the World Bank and supported by the African Union, the programme promotes advanced research, innovation, international collaboration, and scientific leadership across Africa.": "Sélectionné parmi des chercheurs africains d’excellence pour une bourse doctorale très compétitive d’une valeur d’environ 100 000 USD. Financé par la Banque mondiale et soutenu par l’Union africaine, le programme promeut la recherche avancée, l’innovation, la collaboration internationale et le leadership scientifique en Afrique.",
  "Research areas": "Axes de recherche",
  "Each research area connects technologies, projects, and publications so the academic record stays navigable.": "Chaque axe de recherche relie technologies, projets et publications afin de rendre le parcours scientifique facilement navigable.",
  "Cybersecurity & Privacy": "Cybersécurité et Vie Privée",
  "Artificial Intelligence & Data Science": "Intelligence Artificielle et Science des Données",
  "Threat detection, secure software engineering, Android malware analysis, and privacy-aware data systems that keep digital infrastructures resilient and trustworthy.": "Détection des menaces, ingénierie logicielle sécurisée, analyse des malwares Android et systèmes de données respectueux de la vie privée, pour des infrastructures numériques résilientes et dignes de confiance.",
  "Learning systems for prediction, decision support, and automation, paired with applied analytics, forecasting, and data platforms for education, health, and administration.": "Systèmes d'apprentissage pour la prédiction, l'aide à la décision et l'automatisation, associés à l'analytique appliquée, la prévision et des plateformes de données pour l'éducation, la santé et l'administration.",
  "Associated projects": "Projets associés",
  "Associated publications": "Publications associées",
  "Digital Transformation": "Transformation Numérique",
  "Search publications": "Rechercher des publications",
  "Applied research and institutional platforms": "Recherche appliquée et plateformes institutionnelles",
  "Courses, practical work, and downloadable material": "Cours, travaux pratiques et ressources téléchargeables",
  "Cybersecurity, AI & Data Science Laboratory": "Laboratoire Cybersécurité, IA et Science des Données",
  "Notes on cybersecurity, AI, and data systems": "Notes sur la cybersécurité, l'IA et les systèmes de données",
  "Grants and sponsored research": "Subventions et recherche financée",
  "Current and former supervisees": "Étudiants actuels et anciens encadrés",
  "Conference talks and invited lectures": "Conférences et communications invitées",
  "Distinctions and recognitions": "Distinctions et reconnaissances",
  "Research life, seminars, and workshops": "Vie scientifique, séminaires et ateliers",
  "Resources and academic documents": "Ressources et documents académiques",
  "Collaborations, supervision, and speaking invitations": "Collaborations, encadrement et invitations",
  "Academic curriculum vitae": "Curriculum vitae académique",
  "Teaching materials": "Enseignements",
  "Full lecture notes, slide decks, and lab assignments, published as a dedicated site.": "Supports de cours complets, diaporamas et travaux pratiques, publiés sur un site dédié.",
  "Visit the course site": "Voir le site des cours",
  "Slides": "Diapositives",
  "Coming soon": "Bientôt disponible",
  "This space is prepared for research notes, teaching updates, and technical reflections.": "Cet espace est prévu pour des notes de recherche, des mises à jour pédagogiques et des réflexions techniques.",
  "Download": "Télécharger",
  "Download PDF CV": "Télécharger le CV (PDF)",
  "Equipment & partners": "Équipements et partenaires",
  "Join the laboratory": "Rejoindre le laboratoire",
  "Responsibilities": "Responsabilités",
  "No publications match your search.": "Aucune publication ne correspond à votre recherche.",
  "Scan to save contact": "Scannez pour enregistrer le contact",
  "Send message": "Envoyer le message",
  "paper": "article",
  "papers": "articles",
  "All": "Tous",
  "Abstract": "Résumé",
  "Video": "Vidéo",
  "Cite": "Citer",
  "Copied": "Copié",
  "Conference": "Conférence",
  "Journal": "Revue",
  "Talks": "Communications",
  "Downloads": "Téléchargements",
  "Name": "Nom",
  "Email": "E-mail",
  "Toggle navigation": "Basculer la navigation",
  "Toggle theme": "Changer de thème",
  "Partners:": "Partenaires :",
  "Funding:": "Financement :",
  "Digital strategy, service modernization, platform architecture, and institutional capacity building.": "Stratégie numérique, modernisation des services, architecture de plateforme et renforcement des capacités institutionnelles.",
  "A research platform for collecting, analyzing, and classifying Android application behavior.": "Une plateforme de recherche pour collecter, analyser et classifier le comportement des applications Android.",
  "Dashboards and predictive models for supporting academic planning and student success.": "Tableaux de bord et modèles prédictifs pour soutenir la planification académique et la réussite étudiante.",
  "A modular digital service architecture for universities and engineering schools.": "Une architecture de services numériques modulaire pour les universités et écoles d'ingénieurs.",
  "Active": "Actif",
  "Internal research grant": "Subvention de recherche interne",
  "Institutional innovation program": "Programme d'innovation institutionnel",
  "Digital transformation initiative": "Initiative de transformation numérique",
  "Concept": "Concept",
  "An open maturity framework and self-assessment toolkit to help public institutions across Burkina Faso and the wider West African region diagnose their cybersecurity posture and close critical gaps. The long-term ambition is to become the reference capacity-building framework for cyber resilience in the region.": "Un référentiel de maturité ouvert et une boîte à outils d'auto-évaluation pour aider les institutions publiques du Burkina Faso et de toute la région ouest-africaine à diagnostiquer leur niveau de cybersécurité et à combler les failles critiques. L'ambition à long terme est de devenir le référentiel de référence pour le renforcement des capacités en cyber-résilience dans la région.",
  "A federated, privacy-preserving infrastructure that lets health, education, and public-service institutions collaborate on sensitive data-driven decisions without ever centralizing or exposing citizen data. Designed as foundational digital-sovereignty infrastructure for data-driven public services in Africa.": "Une infrastructure fédérée et respectueuse de la vie privée permettant aux institutions de santé, d'éducation et de service public de collaborer sur des décisions fondées sur des données sensibles, sans jamais centraliser ni exposer les données des citoyens. Conçue comme une infrastructure fondatrice de souveraineté numérique pour des services publics pilotés par la donnée en Afrique.",
  "An AI-driven fraud and anomaly detection network for mobile money, building on field research into real fraud incidents in West Africa. The goal is a shared, blockchain-backed trust layer usable across multiple mobile money operators to protect underserved, internet-limited communities.": "Un réseau de détection de fraude et d'anomalies piloté par l'IA pour le mobile money, s'appuyant sur des travaux de terrain sur de véritables incidents de fraude en Afrique de l'Ouest. L'objectif est une couche de confiance partagée, adossée à la blockchain, utilisable par plusieurs opérateurs de mobile money pour protéger les communautés mal desservies et à connectivité limitée.",
  "Seeking government and international partners": "Recherche de partenaires gouvernementaux et internationaux",
  "Seeking research and public-sector partners": "Recherche de partenaires de recherche et du secteur public",
  "Seeking industry and research partners": "Recherche de partenaires industriels et de recherche",
  "Advance applied research and train engineers capable of building secure, intelligent, and socially useful digital systems.": "Faire avancer la recherche appliquée et former des ingénieurs capables de construire des systèmes numériques sécurisés, intelligents et socialement utiles.",
  "Become a regional reference laboratory for cybersecurity, trustworthy AI, and data-driven innovation.": "Devenir un laboratoire de référence régional pour la cybersécurité, l'IA digne de confiance et l'innovation fondée sur les données.",
  "Students interested in cybersecurity, AI, privacy, or data science are encouraged to contact the lab with a short research statement.": "Les étudiants intéressés par la cybersécurité, l'IA, la confidentialité ou la science des données sont invités à contacter le laboratoire avec une brève note de recherche.",
  "Mobile Security": "Sécurité mobile",
  "Trustworthy AI": "IA digne de confiance",
  "Privacy Engineering": "Ingénierie de la confidentialité",
  "Educational Data Science": "Science des données éducative",
  "GPU workstation, Security analysis lab, Mobile testing devices, Data visualization room": "Poste de travail GPU, laboratoire d'analyse de sécurité, appareils de test mobile, salle de visualisation de données",
  "École Polytechnique de Ouagadougou, Public-sector digital services, Industry innovation partners": "École Polytechnique de Ouagadougou, services numériques du secteur public, partenaires industriels de l'innovation",
  "PhD in Computer Science": "Doctorat en informatique",
  "Research focus: Cybersecurity and AI": "Axe de recherche : Cybersécurité et IA",
  "Dissertation on intelligent methods for security analytics and privacy-aware systems.": "Thèse sur des méthodes intelligentes pour l'analyse de sécurité et les systèmes respectueux de la vie privée.",
  "MSc in Computer Science": "Master en informatique",
  "Data Science and Software Engineering": "Science des données et génie logiciel",
  "Advanced training in algorithms, distributed systems, and applied machine learning.": "Formation avancée en algorithmes, systèmes distribués et apprentissage automatique appliqué.",
  "IT Consultant - Digital Rights & Inclusion": "Consultant TI - Droits numériques et inclusion",
  "Research Assistant": "Assistant de recherche",
  "Junior Research Fellow": "Chercheur junior",
  "United Kingdom": "Royaume-Uni",
  "Africa": "Afrique",
  "2024 - Present": "2024 - Présent",
  "Lead research on cybersecurity, AI governance, and digital trust.\nDevelop policy-oriented research supporting digital transformation.": "Diriger des recherches en cybersécurité, gouvernance de l'IA et confiance numérique.\nDévelopper des recherches orientées politiques publiques au service de la transformation numérique.",
  "Advised institutions on digital rights and personal data protection.\nCo-authored the Digital Rights Manual for Beginners.": "Conseiller des institutions sur les droits numériques et la protection des données personnelles.\nCo-auteur du Digital Rights Manual for Beginners.",
  "Conducted cybersecurity research and AI-enabled threat detection projects.": "Mener des recherches en cybersécurité et des projets de détection des menaces assistée par IA.",
  "Conducted research on AI for Development and low-resource African languages.": "Mener des recherches sur l'IA pour le développement et les langues africaines à faibles ressources.",
  "Secure Digital Transformation for Higher Education": "Transformation numérique sécurisée pour l'enseignement supérieur",
  "Institutional Innovation Fund": "Fonds d'innovation institutionnel",
  "Confidential": "Confidentiel",
  "Supports applied work on secure academic information systems and analytics.": "Soutient des travaux appliqués sur des systèmes d'information académiques sécurisés et l'analytique.",
  "AI for Local Decision Support": "IA pour l'aide à la décision locale",
  "Research Seed Program": "Programme d'amorçage de la recherche",
  "Seed funding": "Financement d'amorçage",
  "Supports prototypes for responsible data-driven decision support.": "Soutient des prototypes d'aide à la décision responsable fondée sur les données.",
  "MSc": "Master",
  "Engineering": "Ingénierie",
  "Privacy-preserving educational analytics": "Analytique éducative respectueuse de la vie privée",
  "Android malware feature extraction": "Extraction de caractéristiques de malwares Android",
  "Cybersecurity dashboards for public institutions": "Tableaux de bord de cybersécurité pour les institutions publiques",
  "Current": "En cours",
  "Alumni": "Ancien(ne)",
  "Trustworthy AI for Digital Public Services": "IA digne de confiance pour les services publics numériques",
  "African AI Forum": "Forum africain de l'IA",
  "Cybersecurity Capacity Building in Engineering Education": "Renforcement des capacités en cybersécurité dans l'enseignement de l'ingénierie",
  "University Digital Transformation Week": "Semaine de la transformation numérique universitaire",
  "Cybersecurity and AI research seminar.": "Séminaire de recherche en cybersécurité et IA.",
  "Engineering students presenting applied prototypes.": "Étudiants en ingénierie présentant des prototypes appliqués.",
  "Hands-on workshop on data science and security.": "Atelier pratique sur la science des données et la sécurité.",
  "For the paper \"SpreadSentinel: A Forward-Chaining Approach to Early and Adaptive DDoS Mitigation\", presented at the 4th PA-AISS Conference, Kumasi, Ghana.": "Pour l'article « SpreadSentinel: A Forward-Chaining Approach to Early and Adaptive DDoS Mitigation », présenté à la 4e conférence PA-AISS, Kumasi, Ghana.",
  "For the paper \"Android Malware Classification: Updating Features Through Incremental Learning Approach (UFILA)\", hosted by the Global IT Research Institute with IEEE Communications Society.": "Pour l'article « Android Malware Classification: Updating Features Through Incremental Learning Approach (UFILA) », organisé par le Global IT Research Institute avec l'IEEE Communications Society.",
  "Selected among outstanding African researchers for a highly competitive doctoral fellowship valued at approximately USD 100,000. Funded by the World Bank and supported by the African Union.": "Sélectionné parmi des chercheurs africains d'excellence pour une bourse doctorale très compétitive d'une valeur d'environ 100 000 USD. Financée par la Banque mondiale et soutenue par l'Union africaine.",
  "Awarded during studies at the University of Ouagadougou, Burkina Faso.": "Attribuée pendant les études à l'Université de Ouagadougou, Burkina Faso.",
  "Government of Burkina Faso": "Gouvernement du Burkina Faso",
  "Dr. Zakaria Sawadogo is a Lecturer and Researcher at the École Polytechnique de Ouagadougou (EPO), Burkina Faso, specializing in Cybersecurity, Artificial Intelligence, Data Science, and Digital Transformation. His work sits at the crossroads of technology, public policy, and the major challenges of digital governance in Africa, and focuses on developing intelligent, secure digital systems that respond to real societal needs.": "Dr Zakaria Sawadogo est Enseignant-Chercheur à l’École Polytechnique de Ouagadougou (EPO), au Burkina Faso. Il est spécialisé en cybersécurité, intelligence artificielle, science des données et transformation numérique. Ses travaux se situent à la croisée de la technologie, des politiques publiques et des grands enjeux de gouvernance numérique en Afrique, et visent à développer des systèmes numériques intelligents et sécurisés répondant à de véritables besoins sociétaux.",
  "He holds a Ph.D. in Computer Science from Gaston Berger University, Senegal, where his doctoral research explored machine learning techniques for the continuous evaluation and detection of Android malware. His work has advanced behavior-based malware detection, explainable AI for cybersecurity, and privacy-preserving intelligent systems.": "Il est titulaire d’un doctorat en informatique de l’Université Gaston Berger du Sénégal, où ses travaux doctoraux ont porté sur les techniques d’apprentissage automatique pour l’évaluation continue et la détection des logiciels malveillants Android. Ses recherches ont fait progresser la détection comportementale des malwares, l’intelligence artificielle explicable appliquée à la cybersécurité et les systèmes intelligents respectueux de la vie privée.",
  "Dr. Sawadogo has authored several peer-reviewed publications in international journals and conferences. His current research interests include Cybersecurity, Android Malware Analysis, Cyber Threat Intelligence, Artificial Intelligence, Machine Learning, Deep Learning, Privacy-Preserving Computing, Federated Learning, Homomorphic Encryption, and AI for Sustainable Development.": "Dr Sawadogo est l’auteur de plusieurs publications scientifiques évaluées par les pairs dans des revues et conférences internationales. Ses intérêts de recherche actuels incluent la cybersécurité, l’analyse des malwares Android, la cyber threat intelligence, l’intelligence artificielle, l’apprentissage automatique, l’apprentissage profond, le calcul préservant la confidentialité, l’apprentissage fédéré, le chiffrement homomorphe et l’IA pour le développement durable.",
  "Beyond research, he teaches undergraduate and graduate courses in computer science, cybersecurity, artificial intelligence, and software engineering, and has supervised numerous student projects grounded in practical, research-oriented education.": "Au-delà de la recherche, il enseigne des cours de premier cycle et de cycle supérieur en informatique, cybersécurité, intelligence artificielle et génie logiciel, et a encadré de nombreux projets étudiants ancrés dans une formation pratique et orientée recherche.",
  "He has also contributed to national and international initiatives on digital governance, Internet development, and cybersecurity, including leadership roles within the Internet Society Burkina Faso Chapter (ISOC Burkina Faso) and participation in regional and international research collaborations.": "Il a également contribué à des initiatives nationales et internationales sur la gouvernance numérique, le développement de l’Internet et la cybersécurité, notamment à travers des responsabilités au sein du chapitre Internet Society Burkina Faso (ISOC Burkina Faso) et des collaborations de recherche régionales et internationales.",
  "His long-term vision is to establish a Center of Excellence in Cybersecurity and Artificial Intelligence that fosters cutting-edge research, innovation, capacity building, and international collaboration in support of Africa's digital transformation.": "Sa vision à long terme est de mettre en place un Centre d’Excellence en Cybersécurité et Intelligence Artificielle favorisant la recherche de pointe, l’innovation, le renforcement des capacités et la collaboration internationale au service de la transformation numérique de l’Afrique.",
  "In recognition of this work, Dr. Sawadogo was profiled in Le Faso's \"Les 100 Visages du Burkina Digital\" series ahead of Le Faso Digital 2026, which highlighted him as a researcher devoted to thinking through African artificial intelligence and its governing rules.": "En reconnaissance de ce parcours, Dr Sawadogo a été présenté dans la série « Les 100 Visages du Burkina Digital » du Faso, à l’approche de Le Faso Digital 2026, qui l’a distingué comme un chercheur engagé à penser l’intelligence artificielle africaine et ses règles.",
};

const reverseDictionary = Object.fromEntries(Object.entries(dictionary).map(([english, french]) => [french, english]));

function translateTextNode(node: Text, language: "en" | "fr") {
  const value = node.nodeValue;
  if (!value) return;
  const trimmed = value.trim();
  if (!trimmed) return;

  const replacement = language === "fr" ? dictionary[trimmed] : reverseDictionary[trimmed];
  if (!replacement) return;

  node.nodeValue = value.replace(trimmed, replacement);
}

const translatableAttributes = ["placeholder", "aria-label", "title"];

function translateAttribute(element: Element, attribute: string, language: "en" | "fr") {
  const value = element.getAttribute(attribute);
  if (!value) return;
  const trimmed = value.trim();
  if (!trimmed) return;

  const replacement = language === "fr" ? dictionary[trimmed] : reverseDictionary[trimmed];
  if (!replacement) return;

  element.setAttribute(attribute, value.replace(trimmed, replacement));
}

function applyLanguage(language: "en" | "fr") {
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "CODE", "PRE"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => translateTextNode(node, language));

  translatableAttributes.forEach((attribute) => {
    document.body.querySelectorAll(`[${attribute}]`).forEach((element) => {
      translateAttribute(element, attribute, language);
    });
  });
}

export function LanguageRuntime() {
  useEffect(() => {
    const initial = (window.localStorage.getItem("site-language") === "fr" ? "fr" : "en") as "en" | "fr";
    applyLanguage(initial);

    const onLanguageChange = (event: Event) => {
      const language = (event as CustomEvent<"en" | "fr">).detail;
      applyLanguage(language);
    };

    window.addEventListener("site-language-change", onLanguageChange);
    const observer = new MutationObserver(() => {
      const language = (window.localStorage.getItem("site-language") === "fr" ? "fr" : "en") as "en" | "fr";
      applyLanguage(language);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("site-language-change", onLanguageChange);
      observer.disconnect();
    };
  }, []);

  return null;
}
