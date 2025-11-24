<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV de [Prénom NOM] - Développeur Web & Java</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gold: #FFD700;
            --gold-dark: #FFA500;
            --gold-light: #FFE55C;
            --dark-bg: #0a0e27;
            --dark-card: #141b3d;
            --dark-hover: #1a2350;
            --text-primary: #e4e4e7;
            --text-secondary: #a1a1aa;
            --accent-glow: rgba(255, 215, 0, 0.2);
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: var(--text-primary);
            background: var(--dark-bg);
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.05) 0%, transparent 50%);
            background-attachment: fixed;
        }

        /* Navigation */
        nav {
            background: rgba(10, 14, 39, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 215, 0, 0.1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2.5rem;
            padding: 0 1rem;
        }

        nav a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.3rem 0;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            transition: width 0.3s ease;
        }

        nav a:hover {
            color: var(--gold);
        }

        nav a:hover::after {
            width: 100%;
        }

        /* Sections */
        section {
            max-width: 1100px;
            margin: 3rem auto;
            padding: 2.5rem;
            background: var(--dark-card);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 215, 0, 0.1);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        section:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(255, 215, 0, 0.15);
        }

        section:hover::before {
            opacity: 1;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            letter-spacing: -1px;
        }

        h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
            color: var(--text-primary);
            border-bottom: 2px solid var(--gold);
            padding-bottom: 0.8rem;
            position: relative;
            font-weight: 600;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 80px;
            height: 2px;
            background: var(--gold-light);
            box-shadow: 0 0 10px var(--gold);
        }

        h3 {
            font-size: 1.4rem;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--gold-light);
            font-weight: 600;
        }

        /* Page d'accueil - Style Gaming/Tech */
        #accueil {
            text-align: center;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
            min-height: 70vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 215, 0, 0.2);
        }

        /* Gaming Grid Background */
        #accueil::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
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

        /* Particules gaming */
        #accueil::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(2px 2px at 20% 30%, var(--gold), transparent),
                radial-gradient(2px 2px at 60% 70%, var(--gold-light), transparent),
                radial-gradient(1px 1px at 50% 50%, var(--gold), transparent),
                radial-gradient(1px 1px at 80% 10%, var(--gold-light), transparent);
            background-size: 200% 200%;
            animation: stars 8s ease-in-out infinite;
            opacity: 0.3;
        }

        @keyframes stars {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(180deg); }
        }

        #accueil h1 {
            position: relative;
            z-index: 1;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
            animation: titleGlow 3s ease-in-out infinite;
        }

        @keyframes titleGlow {
            0%, 100% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
            50% { text-shadow: 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4); }
        }

        #accueil .subtitle {
            font-size: 1.4rem;
            margin-bottom: 2.5rem;
            font-weight: 300;
            color: var(--text-secondary);
            position: relative;
            z-index: 1;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        #accueil .subtitle span {
            color: var(--gold);
            font-weight: 500;
        }

        .presentation {
            max-width: 750px;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.9;
            background: rgba(20, 27, 61, 0.8);
            padding: 2.5rem;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 215, 0, 0.2);
            position: relative;
            z-index: 1;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        /* Éléments de contenu */
        .item {
            margin-bottom: 2rem;
            padding: 1.8rem;
            border-left: 3px solid var(--gold);
            background: rgba(26, 35, 80, 0.3);
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
        }

        .item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 3px;
            height: 0;
            background: var(--gold-light);
            transition: height 0.3s ease;
            box-shadow: 0 0 10px var(--gold);
        }

        .item:hover {
            background: rgba(26, 35, 80, 0.5);
            transform: translateX(8px);
            border-left-color: var(--gold-light);
        }

        .item:hover::before {
            height: 100%;
        }

        .item-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 1rem;
        }

        .logo {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.1));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.8rem;
            color: var(--gold);
            border: 1px solid rgba(255, 215, 0, 0.3);
            transition: all 0.3s ease;
        }

        .item:hover .logo {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
        }

        .date {
            color: var(--text-secondary);
            font-size: 0.9rem;
            font-style: italic;
        }

        .competences-list {
            list-style: none;
            padding-left: 1rem;
        }

        .competences-list li {
            margin: 0.5rem 0;
            position: relative;
            padding-left: 1.5rem;
        }

        .competences-list li::before {
            content: "▹";
            color: var(--gold);
            font-weight: bold;
            position: absolute;
            left: 0;
            font-size: 1.2rem;
        }

        .lien-preuve {
            display: inline-block;
            margin-top: 0.8rem;
            margin-right: 1rem;
            color: var(--gold);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            padding: 0.4rem 0;
            border-bottom: 1px solid transparent;
            transition: all 0.3s ease;
        }

        .lien-preuve:hover {
            border-bottom-color: var(--gold);
            transform: translateX(4px);
        }

        /* Mindmap placeholder */
        .mindmap-container {
            width: 100%;
            height: 500px;
            background: rgba(26, 35, 80, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: italic;
            color: var(--text-secondary);
            border: 2px dashed rgba(255, 215, 0, 0.2);
        }

        /* Tech badges */
        .tech-badge {
            display: inline-block;
            padding: 0.4rem 1rem;
            background: rgba(255, 215, 0, 0.1);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 6px;
            margin: 0.3rem;
            font-size: 0.9rem;
            color: var(--gold-light);
            transition: all 0.3s ease;
        }

        .tech-badge:hover {
            background: rgba(255, 215, 0, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
        }

        /* Contact */
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            font-size: 1.1rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            padding: 1rem;
            background: rgba(26, 35, 80, 0.3);
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            background: rgba(26, 35, 80, 0.5);
            transform: translateX(8px);
        }

        .contact-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--gold), var(--gold-dark));
            color: var(--dark-bg);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
            transform: rotate(10deg) scale(1.1);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }

        .contact-item a {
            color: var(--gold);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-item a:hover {
            color: var(--gold-light);
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 2.5rem;
            background: rgba(10, 14, 39, 0.95);
            color: var(--text-secondary);
            margin-top: 4rem;
            border-top: 1px solid rgba(255, 215, 0, 0.1);
        }

        footer p:first-child {
            color: var(--text-primary);
            font-weight: 500;
        }

        /* Scroll indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
            color: var(--gold);
            font-size: 2rem;
            z-index: 1;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
        }

        /* Responsive - Adaptation complète */
        @media (max-width: 1200px) {
            section {
                max-width: 90%;
                margin: 2rem auto;
            }
        }

        @media (max-width: 768px) {
            nav ul {
                gap: 1rem;
                font-size: 0.9rem;
            }
            
            section {
                padding: 1.8rem 1.2rem;
                margin: 1.5rem 0.8rem;
            }

            h1 {
                font-size: 2.2rem;
            }

            h2 {
                font-size: 1.6rem;
            }

            h3 {
                font-size: 1.2rem;
            }

            #accueil {
                min-height: 60vh;
                padding: 2rem 1rem;
            }

            #accueil .subtitle {
                font-size: 1.1rem;
            }

            .presentation {
                padding: 1.8rem;
                font-size: 1rem;
            }

            .item {
                padding: 1.2rem;
            }

            .item-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.8rem;
            }

            .logo {
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
            }

            .mindmap-container {
                height: 350px;
                font-size: 0.9rem;
            }

            .contact-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.8rem;
            }
        }

        @media (max-width: 480px) {
            nav ul {
                flex-direction: column;
                gap: 0.5rem;
                padding: 0.5rem;
            }

            nav li {
                width: 100%;
                text-align: center;
            }

            h1 {
                font-size: 1.8rem;
            }

            h2 {
                font-size: 1.4rem;
            }

            #accueil .subtitle {
                font-size: 1rem;
                letter-spacing: 1px;
            }

            .presentation {
                padding: 1.5rem;
                font-size: 0.95rem;
            }

            section {
                padding: 1.2rem 1rem;
                margin: 1rem 0.5rem;
            }

            .item {
                padding: 1rem;
                font-size: 0.95rem;
            }

            .logo {
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
            }

            .contact-icon {
                width: 45px;
                height: 45px;
                font-size: 1.3rem;
            }

            .competences-list {
                font-size: 0.95rem;
            }

            footer {
                padding: 2rem 1rem;
                font-size: 0.9rem;
            }

            .tech-badge {
                font-size: 0.85rem;
                padding: 0.3rem 0.8rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="#accueil">ACCUEIL</a></li>
            <li><a href="#formations">FORMATIONS</a></li>
            <li><a href="#competences">COMPÉTENCES</a></li>
            <li><a href="#experiences">EXPÉRIENCES</a></li>
            <li><a href="#realisations">RÉALISATIONS</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>

    <!-- PAGE ACCUEIL -->
    <section id="accueil">
        <h1>CV de [Prénom NOM]</h1>
        <p class="subtitle">Développeur <span>Web & Java</span></p>
        
        <div class="presentation">
            <p>
                <strong>[Texte de présentation de 5 à 10 lignes]</strong><br><br>
                Actuellement en [niveau d'études] à [nom de l'établissement], je suis passionné par le développement web et Java, avec un intérêt marqué pour l'univers du jeu vidéo et les technologies modernes.
                <br><br>
                Au cours de ma formation, j'ai réalisé [mentionnez un projet informatique marquant] qui m'a permis de développer mes compétences en [technologies utilisées]. Ce projet consistait à [brève description].
                <br><br>
                J'ai également [mentionnez une autre réalisation ou expérience pertinente] qui démontre ma capacité à [compétence technique ou savoir-être].
                <br><br>
                Curieux et motivé, je cherche à approfondir mes connaissances en développement full-stack et à contribuer à des projets innovants.
            </p>
        </div>
        
        <div class="scroll-indicator">↓</div>
    </section>

    <!-- PAGE FORMATIONS -->
    <section id="formations">
        <h2>// Formations</h2>
        
        <div class="item">
            <div class="item-header">
                <div class="logo">🎓</div>
                <div>
                    <h3>BUT Informatique - Parcours [nom du parcours]</h3>
                    <p class="date">Septembre 2023 - Juin 2026 (en cours)</p>
                    <p><strong>IUT de [Ville], Université de [Nom]</strong></p>
                </div>
            </div>
            <p>Formation axée sur le développement web, Java, les bases de données, la programmation orientée objet et la gestion de projets informatiques.</p>
            <div style="margin-top: 1rem;">
                <span class="tech-badge">Java</span>
                <span class="tech-badge">PHP</span>
                <span class="tech-badge">JavaScript</span>
                <span class="tech-badge">SQL</span>
                <span class="tech-badge">Git</span>
            </div>
        </div>

        <div class="item">
            <div class="item-header">
                <div class="logo">📚</div>
                <div>
                    <h3>Baccalauréat [Général/Technologique] - Spécialités [...]</h3>
                    <p class="date">Obtenu en [année]</p>
                    <p><strong>Lycée [Nom], [Ville]</strong></p>
                </div>
            </div>
            <p>Mention [Mention obtenue]. Spécialités : [liste des spécialités].</p>
        </div>
    </section>

    <!-- PAGE COMPÉTENCES -->
    <section id="competences">
        <h2>// Compétences</h2>
        
        <div class="mindmap-container">
            <p>📊 Insérez ici votre Mindmap créée avec FreeMind, XMind ou un outil similaire<br>
            (Compétences techniques + Savoir-être + Savoir-faire)</p>
        </div>

        <div style="margin-top: 2.5rem;">
            <h3>💻 Stack Technique</h3>
            <div style="margin: 1rem 0;">
                <span class="tech-badge">Java</span>
                <span class="tech-badge">Spring Boot</span>
                <span class="tech-badge">HTML/CSS</span>
                <span class="tech-badge">JavaScript</span>
                <span class="tech-badge">React</span>
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">PHP</span>
                <span class="tech-badge">Symfony</span>
                <span class="tech-badge">MySQL</span>
                <span class="tech-badge">PostgreSQL</span>
                <span class="tech-badge">MongoDB</span>
                <span class="tech-badge">Git/GitHub</span>
                <span class="tech-badge">Docker</span>
                <span class="tech-badge">VS Code</span>
                <span class="tech-badge">IntelliJ IDEA</span>
            </div>

            <h3>🎮 Soft Skills</h3>
            <ul class="competences-list">
                <li>Travail en équipe et collaboration agile</li>
                <li>Résolution de problèmes et pensée analytique</li>
                <li>Autonomie et prise d'initiative</li>
                <li>Veille technologique constante</li>
                <li>Passion pour l'innovation et les nouvelles technologies</li>
            </ul>
        </div>
    </section>

    <!-- PAGE EXPÉRIENCES -->
    <section id="experiences">
        <h2>// Expériences</h2>
        
        <div class="item">
            <div class="item-header">
                <div class="logo">💼</div>
                <div>
                    <h3>Stage Développeur Web/Java - [Nom de l'entreprise]</h3>
                    <p class="date">[Mois Année] - [Mois Année] (X semaines)</p>
                    <p><strong>[Ville]</strong></p>
                </div>
            </div>
            <p>
                Au sein de [nom de l'entreprise/service], j'ai contribué à [description succincte du contexte]. 
                Mes principales missions ont été de [décrire les tâches].
            </p>
            <p style="margin-top: 1rem;"><strong>Compétences acquises :</strong></p>
            <ul class="competences-list">
                <li>Développement back-end en Java/Spring Boot</li>
                <li>Création d'API RESTful</li>
                <li>Intégration front-end React</li>
                <li>Méthodologie Agile/Scrum</li>
                <li>Tests unitaires (JUnit, Jest)</li>
            </ul>
            <a href="#" class="lien-preuve">📄 Voir le rapport de stage</a>
        </div>

        <div class="item">
            <div class="item-header">
                <div class="logo">🎯</div>
                <div>
                    <h3>Bénévolat - [Nom de l'association]</h3>
                    <p class="date">[Mois Année] - [Mois Année]</p>
                </div>
            </div>
            <p>
                Participation à [description de l'activité bénévole]. Cette expérience m'a permis de développer 
                [compétences transversales pertinentes].
            </p>
        </div>
    </section>

    <!-- PAGE RÉALISATIONS -->
    <section id="realisations">
        <h2>// Réalisations</h2>
        
        <h3 style="color: var(--gold-light); margin-bottom: 1.5rem;">⚡ Projets Académiques (BUT)</h3>
        
        <div class="item">
            <div class="item-header">
                <div class="logo">🚀</div>
                <div>
                    <h3>Projet 1 : [Nom du projet] - SAÉ [numéro]</h3>
                    <p class="date">[Mois Année] - [Mois Année] ([durée])</p>
                    <p><strong>Projet en équipe de [X] personnes</strong></p>
                </div>
            </div>
            <p>
                Développement d'une [type d'application] permettant de [objectif du projet]. 
                Le projet consistait à [description en 3-5 lignes maximum].
            </p>
            <p style="margin-top: 1rem;"><strong>Mon rôle :</strong> [votre responsabilité dans l'équipe]</p>
            <div style="margin: 1rem 0;">
                <span class="tech-badge">Java</span>
                <span class="tech-badge">Spring Boot</span>
                <span class="tech-badge">MySQL</span>
                <span class="tech-badge">React</span>
            </div>
            <p><strong>Compétences développées :</strong></p>
            <ul class="competences-list">
                <li>Architecture MVC et design patterns</li>
                <li>Développement d'API RESTful</li>
                <li>Gestion de version avec Git</li>
                <li>Documentation technique</li>
            </ul>
            <a href="#" class="lien-preuve">💻 Code sur GitHub</a>
            <a href="#" class="lien-preuve">🎥 Démo vidéo</a>
        </div>

        <div class="item">
            <div class="item-header">
                <div class="logo">💡</div>
                <div>
                    <h3>Projet 2 : [Nom du projet] - SAÉ [numéro]</h3>
                    <p class="date">[Mois Année] - [Mois Année] ([durée])</p>
                    <p><strong>Projet individuel / en équipe</strong></p>
                </div>
            </div>
            <p>
                Création d'une [description du projet]. Ce projet m'a permis de [compétences acquises].
            </p>
            <div style="margin: 1rem 0;">
                <span class="tech-badge">PHP</span>
                <span class="tech-badge">Symfony</span>
                <span class="tech-badge">JavaScript</span>
            </div>
            <p><strong>Compétences développées :</strong></p>
            <ul class="competences-list">
                <li>[Compétence 1]
