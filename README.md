<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV de [Prénom NOM] - Développeur Web & Java</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
            --gold: #FFD700;
            --gold-dark: #FFA500;
            --gold-light: #FFE55C;
            --dark-bg: #0a0e27;
            --dark-card: #141b3d;
            --text-primary: #e4e4e7;
            --text-secondary: #a1a1aa;
        }

        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background: var(--dark-bg);
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.05) 0%, transparent 50%);
            background-attachment: fixed;
        }

        /* Menu burger compact */
        .menu-toggle {
            display: none;
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 2000;
            background: var(--gold);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            cursor: pointer;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }

        .menu-toggle span {
            width: 22px;
            height: 2px;
            background: var(--dark-bg);
            transition: all 0.3s;
        }

        nav {
            background: rgba(10, 14, 39, 0.95);
            backdrop-filter: blur(10px);
            padding: 0.6rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 215, 0, 0.1);
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            padding: 0 1rem;
        }

        nav a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.2rem 0;
            text-transform: uppercase;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gold);
            transition: width 0.3s ease;
        }

        nav a:hover { color: var(--gold); }
        nav a:hover::after { width: 100%; }

        /* Hero Section - Page d'accueil complète */
        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            padding: 2rem;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
        }

        .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: 
                linear-gradient(rgba(255, 215, 0, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 800px;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            animation: titleGlow 3s ease-in-out infinite;
        }

        @keyframes titleGlow {
            0%, 100% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5)); }
            50% { filter: drop-shadow(0 0 40px rgba(255, 215, 0, 0.8)); }
        }

        .hero .subtitle {
            font-size: 1.5rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .hero .subtitle span {
            color: var(--gold);
            font-weight: 500;
        }

        /* Texte de présentation à la 1ère personne */
        .hero .presentation-text {
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--text-primary);
            margin-top: 2rem;
            text-align: justify;
            max-width: 700px;
            background: rgba(20, 27, 61, 0.6);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 215, 0, 0.2);
        }

        /* Sections respectant les critères : contenu visible sans scroll */
        section {
            min-height: 100vh;
            padding: 6rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .section-inner {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
        }

        h2 {
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--gold);
            font-weight: 700;
            text-align: center;
            position: relative;
        }

        h2::after {
            content: '';
            display: block;
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 1rem auto 0;
        }

        /* Timeline avec logos */
        .timeline {
            position: relative;
            padding-left: 3rem;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, var(--gold), var(--gold-light));
        }

        .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            padding: 2rem;
            background: rgba(20, 27, 61, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(255, 215, 0, 0.2);
            transition: all 0.3s ease;
            display: flex;
            gap: 1.5rem;
            align-items: flex-start;
        }

        /* Logo école/entreprise */
        .timeline-logo {
            width: 80px;
            height: 80px;
            min-width: 80px;
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.1));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--gold);
            border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -3rem;
            top: 2rem;
            width: 12px;
            height: 12px;
            background: var(--gold);
            border-radius: 50%;
            border: 3px solid var(--dark-bg);
            box-shadow: 0 0 15px var(--gold);
        }

        .timeline-item:hover {
            transform: translateX(10px);
            background: rgba(20, 27, 61, 0.7);
            box-shadow: 0 5px 30px rgba(255, 215, 0, 0.2);
        }

        .timeline-content h3 {
            font-size: 1.5rem;
            color: var(--gold-light);
            margin-bottom: 0.5rem;
        }

        .timeline-content .date {
            color: var(--text-secondary);
            font-size: 0.9rem;
            font-style: italic;
            margin-bottom: 1rem;
        }

        .timeline-content p {
            margin-bottom: 0.8rem;
            line-height: 1.7;
        }

        /* Grille de compétences avec mindmap placeholder */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .skill-category {
            padding: 2rem;
            background: rgba(20, 27, 61, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(255, 215, 0, 0.2);
            transition: all 0.3s ease;
        }

        .skill-category:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(255, 215, 0, 0.2);
            border-color: var(--gold);
        }

        .skill-category h3 {
            font-size: 1.3rem;
            color: var(--gold);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Mindmap placeholder */
        .mindmap-placeholder {
            grid-column: 1 / -1;
            padding: 3rem;
            background: rgba(20, 27, 61, 0.5);
            border-radius: 12px;
            border: 2px dashed rgba(255, 215, 0, 0.3);
            text-align: center;
            color: var(--text-secondary);
            font-style: italic;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tech-badge {
            padding: 0.4rem 1rem;
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 20px;
            font-size: 0.85rem;
            color: var(--gold-light);
            transition: all 0.3s ease;
        }

        .tech-badge:hover {
            background: rgba(255, 215, 0, 0.2);
            transform: translateY(-2px);
        }

        /* Section Expériences avec 2 onglets séparés */
        .experience-tabs {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .tab-btn {
            padding: 0.8rem 2rem;
            background: transparent;
            border: 2px solid var(--gold);
            color: var(--gold);
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .tab-btn.active,
        .tab-btn:hover {
            background: var(--gold);
            color: var(--dark-bg);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        /* Grille de projets avec visuels et liens bleus */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .project-card {
            padding: 2rem;
            background: rgba(20, 27, 61, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(255, 215, 0, 0.2);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
        }

        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 50px rgba(255, 215, 0, 0.3);
            border-color: var(--gold-light);
        }

        .project-header {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
            align-items: flex-start;
        }

        .project-icon {
            width: 60px;
            height: 60px;
            min-width: 60px;
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.1));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .project-card h3 {
            font-size: 1.4rem;
            color: var(--gold-light);
            margin-bottom: 0.5rem;
        }

        .project-card .date {
            color: var(--text-secondary);
            font-size: 0.85rem;
            font-style: italic;
            margin-bottom: 0.5rem;
        }

        .project-card .tag {
            display: inline-block;
            padding: 0.2rem 0.8rem;
            background: rgba(255, 215, 0, 0.15);
            border-radius: 15px;
            font-size: 0.75rem;
            color: var(--gold);
            margin-right: 0.5rem;
            margin-bottom: 1rem;
        }

        /* Paragraphes courts (5 lignes max) */
        .project-card p {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1rem;
        }

        /* Liste à puces pour compétences */
        .competences-list {
            list-style: none;
            padding: 0;
            margin: 1rem 0;
        }

        .competences-list li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
        }

        .competences-list li::before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--gold);
            font-size: 1.2rem;
        }

        /* Liens en bleu vers documents-preuves */
        .project-links {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: auto;
            padding-top: 1rem;
        }

        .project-link {
            color: #3b82f6;
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s;
            border-bottom: 1px solid transparent;
            font-weight: 500;
        }

        .project-link:hover {
            border-bottom-color: #3b82f6;
            transform: translateX(3px);
        }

        /* Contact avec réseaux sociaux */
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .contact-card {
            padding: 2rem;
            background: rgba(20, 27, 61, 0.5);
            border-radius: 12px;
            border: 1px solid rgba(255, 215, 0, 0.2);
            text-align: center;
            transition: all 0.3s ease;
        }

        .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(255, 215, 0, 0.2);
        }

        .contact-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .contact-card h3 {
            color: var(--gold);
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .contact-card a {
            color: #3b82f6;
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .contact-card a:hover {
            color: var(--gold-light);
        }

        footer {
            text-align: center;
            padding: 2rem;
            background: rgba(10, 14, 39, 0.95);
            color: var(--text-secondary);
            border-top: 1px solid rgba(255, 215, 0, 0.1);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .menu-toggle { display: flex; }
            
            nav {
                position: fixed;
                top: 0;
                right: -100%;
                width: 70%;
                height: 100vh;
                background: rgba(10, 14, 39, 0.98);
                transition: right 0.3s ease;
                padding: 5rem 0 2rem;
            }

            nav.active { right: 0; }

            nav ul {
                flex-direction: column;
                gap: 0.5rem;
                padding: 0 2rem;
            }

            nav a {
                display: block;
                padding: 0.8rem 0;
                font-size: 1rem;
            }

            .hero h1 { font-size: 2.2rem; }
            .hero .subtitle { font-size: 1.1rem; }
            .hero .presentation-text { font-size: 1rem; padding: 1.5rem; }
            
            h2 { font-size: 2rem; }
            
            section { padding: 4rem 1.5rem; min-height: auto; }
            
            .timeline { padding-left: 2rem; }
            .timeline-item { flex-direction: column; }
            .timeline-item::before { left: -2rem; }
            .timeline-logo { width: 60px; height: 60px; }
            
            .project-header { flex-direction: column; }
            
            .skills-grid,
            .projects-grid,
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .experience-tabs { flex-direction: column; }
        }

        @media (max-width: 480px) {
            .hero h1 { font-size: 1.8rem; }
            .hero .subtitle { font-size: 1rem; }
            section { padding: 3rem 1rem; }
        }
    </style>
</head>
<body>
    <button class="menu-toggle" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav id="mainNav">
        <ul>
            <li><a href="#accueil" onclick="closeMenu()">Accueil</a></li>
            <li><a href="#formations" onclick="closeMenu()">Formations</a></li>
            <li><a href="#competences" onclick="closeMenu()">Compétences</a></li>
            <li><a href="#experiences" onclick="closeMenu()">Expériences</a></li>
            <li><a href="#realisations" onclick="closeMenu()">Réalisations</a></li>
            <li><a href="#contact" onclick="closeMenu()">Contact</a></li>
        </ul>
    </nav>

    <!-- PAGE ACCUEIL avec texte 1ère personne -->
    <section id="accueil" class="hero">
        <div class="hero-content">
            <h1>CV de [Prénom NOM]</h1>
            <p class="subtitle">Développeur <span>Web & Java</span></p>
            
            <div class="presentation-text">
                <p>
                    Je suis actuellement étudiant en [niveau d'études] à [IUT/Université], passionné par le développement web et Java. Mon parcours m'a permis de développer des compétences solides en programmation, notamment à travers [mentionner un projet marquant].
                    <br><br>
                    Ce qui me motive, c'est de créer des solutions techniques innovantes et de relever des défis complexes. J'apprécie particulièrement [domaine spécifique] et je consacre mon temps libre à explorer l'univers du jeu vidéo, ce qui nourrit ma créativité et ma compréhension des technologies interactives.
                    <br><br>
                    Je recherche actuellement [type de stage/poste] pour approfondir mes connaissances en développement full-stack et contribuer à des projets ambitieux.
                </p>
            </div>
        </div>
    </section>

    <!-- PAGE FORMATIONS avec logos -->
    <section id="formations">
        <div class="section-inner">
            <h2>Formations</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-logo">🎓</div>
                    <div class="timeline-content">
                        <h3>BUT Informatique - Parcours [Nom]</h3>
                        <p class="date">Septembre 2023 - Juin 2026 (en cours)</p>
                        <p><strong>IUT de [Ville], Université de [Nom]</strong></p>
                        <p>Formation complète en développement web, Java, bases de données et gestion de projets Agile. Apprentissage des méthodologies professionnelles et réalisation de projets en équipe.</p>
                        <div class="tech-tags">
                            <span class="tech-badge">Java</span>
                            <span class="tech-badge">PHP</span>
                            <span class="tech-badge">JavaScript</span>
                            <span class="tech-badge">SQL</span>
                            <span class="tech-badge">Git</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-logo">📚</div>
                    <div class="timeline-content">
                        <h3>Baccalauréat [Général/Technologique]</h3>
                        <p class="date">Obtenu en [année]</p>
                        <p><strong>Lycée [Nom], [Ville]</strong></p>
                        <p>Mention [Mention obtenue]. Spécialités : [Mathématiques, NSI, etc.]</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PAGE COMPÉTENCES avec mindmap -->
    <section id="competences">
        <div class="section-inner">
            <h2>Compétences</h2>
            
            <div class="skills-grid">
                <div class="mindmap-placeholder">
                    <p>📊 <strong>Insérez ici votre Mindmap</strong><br>
                    Créée avec FreeMind, XMind ou autre outil<br>
                    Incluant : Savoir-faire • Savoir-être • Compétences informatiques</p>
                </div>

                <div class="skill-category">
                    <h3>💻 Langages</h3>
                    <div class="tech-tags">
                        <span class="tech-badge">Java</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">PHP</span>
                        <span class="tech-badge">Python</span>
                        <span class="tech-badge">SQL</span>
                        <span class="tech-badge">HTML/CSS</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>🛠️ Frameworks & Outils</h3>
                    <div class="tech-tags">
                        <span class="tech-badge">Spring Boot</span>
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">Symfony</span>
                        <span class="tech-badge">Git/GitHub</span>
                        <span class="tech-badge">Docker</span>
                        <span class="tech-badge">IntelliJ IDEA</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>🗄️ Bases de données</h3>
                    <div class="tech-tags">
                        <span class="tech-badge">MySQL</span>
                        <span class="tech-badge">PostgreSQL</span>
                        <span class="tech-badge">MongoDB</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>🎮 Savoir-être</h3>
                    <ul class="competences-list">
                        <li>Travail en équipe et méthodologie Agile</li>
                        <li>Résolution de problèmes complexes</li>
                        <li>Autonomie et prise d'initiative</li>
                        <li>Veille technologique constante</li>
                        <li>Communication efficace</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- PAGE EXPÉRIENCES -->
    <section id="experiences">
        <div class="section-inner">
            <h2>Expériences Professionnelles</h2>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">💼</div>
                        <div>
                            <h3>Stage Développeur Web/Java</h3>
                            <p class="date">[Mois Année] - [Mois Année] • [X semaines]</p>
                            <p><strong>[Nom de l'entreprise], [Ville]</strong></p>
                        </div>
                    </div>
                    <p>Contribution au développement de [description en 4-5 lignes maximum]. Participation aux réunions d'équipe et aux sprints Agile.</p>
                    
                    <p><strong>Compétences acquises :</strong></p>
                    <ul class="competences-list">
                        <li>Développement back-end en Java/Spring Boot</li>
                        <li>Création et intégration d'API REST</li>
                        <li>Travail collaboratif avec Git</li>
                        <li>Tests unitaires et débogage</li>
                    </ul>
                    
                    <div class="project-links">
                        <a href="#" class="project-link">📄 Rapport de stage (PDF)</a>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">🎯</div>
                        <div>
                            <h3>Bénévolat - [Association]</h3>
                            <p class="date">[Mois Année] - [Mois Année]</p>
                        </div>
                    </div>
                    <p>Participation à [description de l'activité]. Cette expérience m'a permis de développer mes compétences en communication et en gestion de projet.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- PAGE RÉALISATIONS (2 projets BUT obligatoires) -->
    <section id="realisations">
        <div class="section-inner">
            <h2>Réalisations</h2>
            
            <h3 style="color: var(--gold); text-align: center; margin-bottom: 2rem;">Projets académiques (BUT)</h3>
            
            <div class="projects-grid">
                <!-- Projet 1 BUT (obligatoire) -->
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-icon">🚀</div>
                        <div>
                            <span class="tag">SAÉ [numéro]</span>
                            <span class="tag">Équipe [X] pers</span>
                            <h3>[Nom du Projet 1]</h3>
                            <p class="date">[Mois Année] - [Mois Année] • [durée]</p>
                        </div>
                    </div>
                    
                    <p>Développement d'une application [description]. Ce projet consistait à [objectif en 4-5 lignes maximum].</p>
