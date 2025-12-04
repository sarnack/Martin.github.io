<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Martin Morenville | Développeur</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Fira+Code:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* --- 1. VARIABLES & RESET (Dark Theme Palette) --- */
        :root {
            --bg-color: #0f172a;       /* Fond principal (Bleu nuit très sombre) */
            --card-bg: #1e293b;        /* Fond des cartes */
            --text-main: #e2e8f0;      /* Texte clair */
            --text-muted: #94a3b8;     /* Texte gris pour les détails */
            --accent: #38bdf8;         /* Cyan lumineux pour les liens/accents */
            --accent-hover: #0ea5e9;   /* Cyan plus foncé au survol */
            --border: #334155;         /* Bordures subtiles */
        }

        * {
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.7;
        }

        /* --- 2. TYPOGRAPHIE --- */
        h1, h2, h3 {
            color: #fff;
            margin-top: 0;
        }

        h1 {
            font-weight: 800;
            font-size: 2.5rem;
            letter-spacing: -1px;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 1.8rem;
            margin-bottom: 30px;
            display: inline-block;
            border-bottom: 3px solid var(--accent);
            padding-bottom: 5px;
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        /* Police "Code" pour les petits détails techniques */
        .tech-font {
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
            color: var(--accent);
        }

        a {
            text-decoration: none;
            color: var(--accent);
            transition: color 0.3s;
        }

        a:hover {
            color: var(--accent-hover);
        }

        /* --- 3. NAVIGATION (Glassmorphism) --- */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.85); /* Semi-transparent */
            backdrop-filter: blur(10px);        /* Effet de flou */
            border-bottom: 1px solid var(--border);
            z-index: 1000;
            padding: 15px 0;
        }

        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        nav ul li a {
            color: var(--text-main);
            font-weight: 500;
            font-size: 0.95rem;
            position: relative;
        }

        /* Petit effet de soulignement animé au survol du menu */
        nav ul li a::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: var(--accent);
            transition: width 0.3s;
            position: absolute;
            bottom: -5px;
            left: 0;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        /* --- 4. STRUCTURE DES SECTIONS --- */
        section {
            padding: 100px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        /* --- 5. STYLE ACCUEIL (Hero Section) --- */
        #accueil {
            text-align: center;
            padding-top: 160px; /* Espace pour le header */
            min-height: 90vh; /* Prend presque tout l'écran */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .profile-container {
            position: relative;
            margin-bottom: 30px;
        }

        .profile-pic {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--accent);
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.3); /* Lueur bleue */
        }

        .subtitle {
            font-size: 1.2rem;
            color: var(--text-muted);
            margin-bottom: 30px;
        }

        .pitch {
            max-width: 700px;
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 40px;
        }

        .btn-cta {
            background-color: var(--accent);
            color: #0f172a; /* Texte foncé sur bouton clair */
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: 700;
            transition: transform 0.3s, box-shadow 0.3s;
            display: inline-block;
        }

        .btn-cta:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
            color: #0f172a;
            text-decoration: none;
        }

        /* --- 6. CARTES (Formations, Expériences) --- */
        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 25px;
            transition: transform 0.3s ease, border-color 0.3s;
        }

        .card:hover {
            transform: translateY(-5px); /* Monte légèrement */
            border-color: var(--accent);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .date-badge {
            background-color: rgba(56, 189, 248, 0.1);
            color: var(--accent);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            font-family: 'Fira Code', monospace;
        }

        .place {
            color: var(--text-muted);
            font-style: italic;
            font-size: 0.9rem;
            display: block;
            margin-bottom: 15px;
        }

        /* --- 7. GRID POUR COMPÉTENCES --- */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .skill-card {
            background: var(--card-bg);
            padding: 25px;
            border-radius: 12px;
            border-top: 4px solid var(--accent);
        }

        .skill-list li {
            margin-bottom: 10px;
            color: var(--text-muted);
        }

        .skill-list i {
            color: var(--accent);
            margin-right: 10px;
        }

        /* --- 8. CONTACT --- */
        .contact-links {
            display: flex;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            margin-top: 30px;
        }

        .contact-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            color: var(--text-main);
        }

        .contact-icon {
            font-size: 2rem;
            color: var(--accent);
            margin-bottom: 5px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            section { padding: 60px 20px; }
            .card-header { flex-direction: column; gap: 5px; }
            nav ul { gap: 15px; font-size: 0.85rem; }
        }
    </style>
</head>
<body>

    <header>
        <nav>
            <ul>
                <li><a href="#accueil">01. Accueil</a></li>
                <li><a href="#formations">02. Formations</a></li>
                <li><a href="#competences">03. Compétences</a></li>
                <li><a href="#realisations">04. Projets</a></li>
                <li><a href="#contact">05. Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="accueil">
        <div class="profile-container">
            <img src="https://via.placeholder.com/160" alt="Martin Morenville" class="profile-pic">
        </div>
        
        <p class="tech-font">Bonjour, je m'appelle</p>
        <h1>Martin MORENVILLÉ.</h1>
        <h2 class="subtitle">Étudiant Développeur d'Applications & Web</h2>
        
        <div class="pitch">
            <p>
                Actuellement en 2ème année de BUT Informatique à l'IUT de Lille. Passionné par la création numérique, je transforme des lignes de code en solutions concrètes. Je recherche un <strong>stage de développement</strong> pour avril 2025.
            </p>
        </div>

        <a href="#contact" class="btn-cta">Me contacter</a>
    </section>

    <section id="formations">
        <h2><span class="tech-font">02.</span> Formations</h2>

        <div class="card">
            <div class="card-header">
                <h3>BUT Informatique (2ème année)</h3>
                <span class="date-badge">2023 - Présent</span>
            </div>
            <span class="place">IUT A de Lille (Université de Lille)</span>
            <p>Spécialisation en développement applicatif, conception de bases de données et gestion de projet Agile. <br>
            <small style="color:var(--text-muted)">Projets clés : Développement Java, Sites Web dynamiques.</small></p>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>Baccalauréat Général</h3>
                <span class="date-badge">Juin 2023</span>
            </div>
            <span class="place">Lycée Raymond Queneau, Villeneuve d'Ascq</span>
            <p>Spécialités : Numérique et Sciences Informatiques (NSI) & Anglais Monde Contemporain.<br>
            Mention Bien.</p>
        </div>
    </section>

    <section id="competences">
        <h2><span class="tech-font">03.</span> Compétences</h2>
        
        <div class="skills-grid">
            <div class="skill-card">
                <h3><i class="fas fa-terminal"></i> Développement</h3>
                <ul class="skill-list" style="list-style: none; padding:0;">
                    <li><i class="fas fa-check"></i> Java (POO, Swing)</li>
                    <li><i class="fas fa-check"></i> HTML5 / CSS3 / JS</li>
                    <li><i class="fas fa-check"></i> SQL / Bases de données</li>
                    <li><i class="fas fa-check"></i> Python</li>
                </ul>
            </div>

            <div class="skill-card">
                <h3><i class="fas fa-tools"></i> Outils & Environnement</h3>
                <ul class="skill-list" style="list-style: none; padding:0;">
                    <li><i class="fab fa-git-alt"></i> Git & GitHub</li>
                    <li><i class="fab fa-linux"></i> Linux / Bash</li>
                    <li><i class="fas fa-tasks"></i> Méthode Agile / Scrum</li>
                    <li><i class="fas fa-code"></i> VS Code / IntelliJ</li>
                </ul>
            </div>

            <div class="skill-card">
                <h3><i class="fas fa-user-astronaut"></i> Savoir-Être</h3>
                <ul class="skill-list" style="list-style: none; padding:0;">
                    <li><i class="fas fa-users"></i> Travail d'équipe</li>
                    <li><i class="fas fa-lightbulb"></i> Résolution de problèmes</li>
                    <li><i class="fas fa-brain"></i> Curiosité technique</li>
                    <li><i class="fas fa-comment-dots"></i> Anglais B2</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="realisations">
        <h2><span class="tech-font">04.</span> Expériences & Projets</h2>

        <div class="card">
            <div class="card-header">
                <h3>🎮 Jeu Vidéo Java (Projet Agile)</h3>
                <span class="date-badge">Janvier 2025</span>
            </div>
            <p>Développement d'un jeu complet en équipe de 5 sur une semaine intensive.</p>
            <ul style="color: var(--text-muted); margin-bottom: 20px;">
                <li>Architecture MVC et Programmation Orientée Objet.</li>
                <li>Gestion des versions avec Git/GitLab.</li>
                <li>Réunions quotidiennes (Daily Scrum).</li>
            </ul>
            <a href="#" target="_blank"><i class="fab fa-github"></i> Voir le dépôt GitHub</a>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>🌐 Portfolio Numérique</h3>
                <span class="date-badge">Décembre 2024</span>
            </div>
            <p>Conception de ce site web personnel pour présenter mon parcours.</p>
            <ul style="color: var(--text-muted); margin-bottom: 20px;">
                <li>Design responsive et Dark Mode.</li>
                <li>Code HTML5/CSS3 propre et optimisé.</li>
            </ul>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>🌊 Projet "Plongée & Environnement"</h3>
                <span class="date-badge">2023</span>
            </div>
            <p>Organisation d'un séjour scientifique et sportif (Lycée).</p>
            <ul style="color: var(--text-muted); margin-bottom: 20px;">
                <li>Recherche de sponsors et budget.</li>
                <li>Validation du Niveau 1 de plongée.</li>
            </ul>
        </div>
    </section>

    <section id="contact" style="text-align: center; margin-bottom: 50px;">
        <h2><span class="tech-font">05.</span> Contact</h2>
        <p style="max-width: 600px; margin: 0 auto; margin-bottom: 40px; color: var(--text-muted);">
            Mon profil vous intéresse ? Je suis disponible pour échanger sur vos projets ou pour une opportunité de stage.
        </p>

        <div class="contact-links">
            <a href="mailto:martin.morenville@gmail.com" class="contact-item">
                <i class="fas fa-envelope contact-icon"></i>
                <span>Email Personnel</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" class="contact-item">
                <i class="fab fa-linkedin contact-icon"></i>
                <span>LinkedIn</span>
            </a>
            <a href="mailto:martin.morenville.etu@univ-lille.fr" class="contact-item">
                <i class="fas fa-university contact-icon"></i>
                <span>Email Étudiant</span>
            </a>
        </div>
    </section>

    <footer style="text-align: center; padding: 30px; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 0.8rem;">
        <p>Conçu et développé par Martin Morenville © 2024</p>
    </footer>

</body>
</html>
