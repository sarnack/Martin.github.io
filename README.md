<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Prénom NOM] - Développeur Web & Java</title>
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

        /* Hero Section - Full screen */
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

        .hero .intro {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-primary);
            margin-top: 2rem;
        }

        /* Sections étendues pleine largeur */
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

        /* Timeline verticale pour formations */
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

        .timeline-item h3 {
            font-size: 1.5rem;
            color: var(--gold-light);
            margin-bottom: 0.5rem;
        }

        .timeline-item .date {
            color: var(--text-secondary);
            font-size: 0.9rem;
            font-style: italic;
            margin-bottom: 1rem;
        }

        /* Grille de compétences */
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

        /* Grille de projets */
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
        }

        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 50px rgba(255, 215, 0, 0.3);
            border-color: var(--gold-light);
        }

        .project-card h3 {
            font-size: 1.4rem;
            color: var(--gold-light);
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

        .project-card p {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1rem;
        }

        .project-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .project-link {
            color: var(--gold);
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s;
            border-bottom: 1px solid transparent;
        }

        .project-link:hover {
            border-bottom-color: var(--gold);
            transform: translateX(3px);
        }

        /* Contact simple */
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
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
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

            nav li { width: 100%; }
            
            nav a {
                display: block;
                padding: 0.8rem 0;
                font-size: 1rem;
            }

            .hero h1 { font-size: 2.2rem; }
            .hero .subtitle { font-size: 1.1rem; }
            .hero .intro { font-size: 1rem; }
            
            h2 { font-size: 2rem; }
            
            section { padding: 4rem 1.5rem; min-height: auto; }
            
            .timeline { padding-left: 2rem; }
            
            .timeline-item::before { left: -2rem; }
            
            .skills-grid,
            .projects-grid,
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .hero h1 { font-size: 1.8rem; }
            .hero .subtitle { font-size: 1rem; }
            section { padding: 3rem 1rem; }
        }
    </style>
</head>
<body>
    <!-- Menu burger -->
    <button class="menu-toggle" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <!-- Navigation -->
    <nav id="mainNav">
        <ul>
            <li><a href="#accueil" onclick="closeMenu()">Accueil</a></li>
            <li><a href="#formations" onclick="closeMenu()">Formations</a></li>
            <li><a href="#competences" onclick="closeMenu()">Compétences</a></li>
            <li><a href="#projets" onclick="closeMenu()">Projets</a></li>
            <li><a href="#contact" onclick="closeMenu()">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="accueil" class="hero">
        <div class="hero-content">
            <a class="Portait" href="#">
                <img src="Portrait.jpg" alt="Portait" style="width: 65%; height: auto;">
            </a>
            <h1>[Prénom NOM]</h1>
            <p class="subtitle">Développeur <span>Web & Java</span></p>
            <p class="intro">
                Passionné par le développement et l'univers du jeu vidéo. Je crée des solutions robustes 
                et innovantes en combinant rigueur technique et créativité. Toujours en quête de nouveaux 
                défis et de technologies émergentes.
            </p>
        </div>
    </section>

    <!-- Formations -->
    <section id="formations">
        <div class="section-inner">
            <h2>Formations</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h3>BUT Informatique - Parcours [Nom]</h3>
                    <p class="date">Septembre 2023 - Juin 2026 (en cours)</p>
                    <p><strong>IUT de [Ville], Université de [Nom]</strong></p>
                    <p>Formation complète en développement web, Java, bases de données, et gestion de projets Agile.</p>
                    <div class="tech-tags">
                        <span class="tech-badge">Java</span>
                        <span class="tech-badge">PHP</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">SQL</span>
                        <span class="tech-badge">Git</span>
                    </div>
                </div>

                <div class="timeline-item">
                    <h3>Baccalauréat [Type] - Spécialités [...]</h3>
                    <p class="date">Obtenu en [année]</p>
                    <p><strong>Lycée [Nom], [Ville]</strong></p>
                    <p>Mention [Mention]. Spécialités : [liste des spécialités].</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Compétences -->
    <section id="competences">
        <div class="section-inner">
            <h2>Compétences</h2>
            <div class="skills-grid">
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
                    <h3>🛠️ Frameworks</h3>
                    <div class="tech-tags">
                        <span class="tech-badge">Spring Boot</span>
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">Vue.js</span>
                        <span class="tech-badge">Symfony</span>
                        <span class="tech-badge">JavaFX</span>
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
                    <h3>🔧 Outils</h3>
                    <div class="tech-tags">
                        <span class="tech-badge">Git/GitHub</span>
                        <span class="tech-badge">Docker</span>
                        <span class="tech-badge">VS Code</span>
                        <span class="tech-badge">IntelliJ IDEA</span>
                        <span class="tech-badge">Figma</span>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>🎮 Soft Skills</h3>
                    <p style="color: var(--text-secondary); line-height: 1.8;">
                        Travail en équipe Agile • Résolution de problèmes • 
                        Autonomie • Veille technologique • Communication
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projets -->
    <section id="projets">
        <div class="section-inner">
            <h2>Projets & Réalisations</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <span class="tag">SAÉ [N]</span>
                    <span class="tag">Équipe</span>
                    <h3>[Nom du Projet 1]</h3>
                    <p>Description du projet en quelques lignes. Mentionnez l'objectif, les technologies utilisées et votre rôle dans l'équipe.</p>
                    <div class="tech-tags">
                        <span class="tech-badge">Java</span>
                        <span class="tech-badge">Spring Boot</span>
                        <span class="tech-badge">MySQL</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">💻 Code</a>
                        <a href="#" class="project-link">🎥 Démo</a>
                    </div>
                </div>

                <div class="project-card">
                    <span class="tag">SAÉ [N]</span>
                    <span class="tag">Binôme</span>
                    <h3>[Nom du Projet 2]</h3>
                    <p>Description du projet. Expliquez le contexte, les défis rencontrés et les compétences développées.</p>
                    <div class="tech-tags">
                        <span class="tech-badge">PHP</span>
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">HTML/CSS</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">🔗 Voir en ligne</a>
                        <a href="#" class="project-link">📄 Rapport</a>
                    </div>
                </div>

                <div class="project-card">
                    <span class="tag">Personnel</span>
                    <span class="tag">Gaming</span>
                    <h3>[Projet Personnel Gaming]</h3>
                    <p>Projet lié à votre passion pour les jeux vidéo. Décrivez ce qui vous a motivé à le créer.</p>
                    <div class="tech-tags">
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">Canvas</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">🎮 Essayer</a>
                    </div>
                </div>

                <div class="project-card">
                    <span class="tag">SAÉ [N]</span>
                    <h3>[Autre Projet]</h3>
                    <p>Un autre projet significatif de votre parcours.</p>
                    <div class="tech-tags">
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">Node.js</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">💻 GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact">
        <div class="section-inner">
            <h2>Contact</h2>
            <div class="contact-grid">
                <div class="contact-card">
                    <div class="contact-icon">📧</div>
                    <h3>Email</h3>
                    <a href="mailto:prenom.nom@etu.univ-lille.fr">prenom.nom@etu.univ-lille.fr</a>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">💼</div>
                    <h3>LinkedIn</h3>
                    <a href="#">linkedin.com/in/votre-profil</a>
                </div>

                <div class="contact-card">
                    <div class="contact-icon">💻</div>
                    <h3>GitHub</h3>
                    <a href="#">github.com/votre-username</a>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>© 2024 [Prénom NOM] - Développeur Web & Java</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">BUT Informatique - IUT de [Ville]</p>
    </footer>

    <script>
        function toggleMenu() {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('active');
        }

        function closeMenu() {
            const nav = document.getElementById('mainNav');
            nav.classList.remove('active');
        }

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('mainNav');
            const toggle = document.querySelector('.menu-toggle');
            
            if (!nav.contains(event.target) && !toggle.contains(event.target)) {
                nav.classList.remove('active');
            }
        });
    </script>
</body>
</html>
