<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Numérique - Prénom NOM</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

    <style>
        /* --- RESET & VARIABLES --- */
        :root {
            /* Palette Nature & Sobriété */
            --bg-color: #FDFBF7;       /* Beige très clair (Fond principal) */
            --bg-light: #F2F0E9;       /* Beige un peu plus foncé (Sections alternées) */
            --text-color: #2C3E50;     /* Gris foncé/Noir (Lisibilité) */
            --accent-color: #4A7C59;   /* Vert Forêt (Titres, Boutons) */
            --link-color: #0056b3;     /* BLEU OBLIGATOIRE pour les preuves */
            --white: #ffffff;
            
            /* Typographie */
            --font-heading: 'Montserrat', sans-serif;
            --font-body: 'Open Sans', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth; /* Défilement fluide entre les onglets */
        }

        body {
            font-family: var(--font-body);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            font-size: 16px; /* Taille 11/12pt équivalent écran */
        }

        /* --- TYPOGRAPHIE --- */
        h1, h2, h3 {
            font-family: var(--font-heading);
            color: var(--text-color);
        }

        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        h2 { font-size: 1.5rem; color: var(--accent-color); }
        p { margin-bottom: 1rem; text-align: justify; } /* Texte justifié */

        /* --- NAVIGATION --- */
        .navbar {
            position: sticky;
            top: 0;
            background-color: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            z-index: 1000;
            padding: 1rem 0;
            border-bottom: 3px solid var(--accent-color); /* Touche nature */
        }

        .nav-container {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .logo {
            font-weight: 700;
            font-size: 1.2rem;
            color: var(--accent-color);
        }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        /* Menu responsive simple pour mobile (cache le menu si l'écran est trop petit) */
        @media (max-width: 768px) {
            .nav-links { display: none; } /* Pour simplifier ce code unique, le menu est masqué sur mobile. */
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 600;
            transition: color 0.3s;
            font-size: 0.95rem;
        }

        .nav-links a:hover {
            color: var(--accent-color);
        }

        /* --- STRUCTURE GÉNÉRALE --- */
        .section {
            padding: 60px 20px;
        }

        .container {
            max-width: 900px; /* Largeur contenue pour ne pas surcharger */
            margin: 0 auto;
        }

        .bg-light {
            background-color: var(--bg-light);
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            padding-bottom: 10px;
        }

        .section-title::after {
            content: '';
            width: 50px;
            height: 3px;
            background-color: var(--accent-color);
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        /* --- ACCUEIL --- */
        .profile-card {
            background: var(--white);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            text-align: center;
            border-top: 5px solid var(--accent-color);
        }

        .profile-img-container {
            margin-bottom: 20px;
        }

        .profile-img {
            width: 100%;
            max-width: 300px;
            border-radius: 10px;
            object-fit: cover;
        }

        .pitch {
            max-width: 700px;
            margin: 20px auto 0;
            font-size: 1.1rem;
        }

        .divider {
            border: 0;
            height: 1px;
            background: #ddd;
            margin: 20px auto;
            max-width: 100px;
        }

        /* --- TIMELINE (Formations) --- */
        .timeline-item {
            display: flex;
            margin-bottom: 30px;
            background: var(--white);
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid var(--accent-color); /* Ligne verticale verte */
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .timeline-item .date {
            min-width: 130px;
            font-weight: bold;
            color: var(--accent-color);
            padding-right: 15px;
        }

        .school-info {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0;
            font-style: italic;
            color: #555;
        }

        .logo-ecole {
            width: 40px;
            height: 40px;
            object-fit: contain;
        }

        /* --- COMPÉTENCES (Mindmap Style) --- */
        .mindmap-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 40px;
            margin-top: 30px;
        }

        .mindmap-center {
            background-color: var(--accent-color);
            color: white;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(74, 124, 89, 0.4);
            font-size: 1.1rem;
        }

        .mindmap-branch {
            background: var(--white);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #ddd;
            width: 250px;
            position: relative;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .node-title {
            display: block;
            text-align: center;
            font-weight: bold;
            color: var(--accent-color);
            margin-bottom: 10px;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
        }

        .node-list {
            list-style-type: none; /* Pas de puces classiques */
        }

        .node-list li {
            margin-bottom: 5px;
        }

        .node-list li::before {
            content: "🍃"; /* Petite icône nature pour les puces */
            margin-right: 8px;
        }

        /* --- EXPÉRIENCES & RÉALISATIONS --- */
        .card-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .card {
            background: var(--white);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .date-badge {
            background: var(--bg-light);
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.85rem;
            color: var(--text-color);
        }

        .grid-2-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        /* Responsive : passe à 1 colonne sur petit écran */
        @media (max-width: 768px) {
            .grid-2-col { grid-template-columns: 1fr; }
            .timeline-item { flex-direction: column; }
            .card-header { flex-direction: column; align-items: flex-start; }
            .date-badge { margin-top: 5px; }
        }

        .project-card {
            background: var(--white);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            border-bottom: 4px solid var(--accent-color);
        }

        .project-card:hover {
            transform: translateY(-5px);
        }

        .project-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .project-body {
            padding: 20px;
        }

        .project-meta {
            display: block;
            font-size: 0.85rem;
            color: #777;
            margin-bottom: 10px;
            font-style: italic;
        }

        /* Le lien bleu obligatoire selon la grille */
        .blue-link {
            color: var(--link-color);
            font-weight: bold;
            text-decoration: none;
            border-bottom: 1px dotted var(--link-color);
            display: inline-block;
            margin-top: 10px;
        }

        .blue-link:hover {
            text-decoration: underline;
        }

        /* --- CONTACT --- */
        .footer-section {
            background-color: var(--accent-color);
            color: white;
            text-align: center;
            padding-bottom: 40px;
        }

        .white-text { color: white !important; }

        .contact-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 30px;
        }

        .contact-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            text-decoration: none;
            transition: background 0.3s;
            border: 1px solid rgba(255,255,255,0.4);
        }

        .contact-btn:hover {
            background: rgba(255,255,255,0.4);
        }
        
        .copyright {
            font-size: 0.8rem;
            opacity: 0.8;
        }
    </style>
</head>
<body>

    <nav class="navbar">
        <div class="nav-container">
            <span class="logo">Mon Portfolio</span>
            <ul class="nav-links">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#formations">Formations</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#experiences">Expériences</a></li>
                <li><a href="#realisations">Réalisations</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="accueil" class="section header-section">
        <div class="container">
            <div class="profile-card">
                <div class="profile-img-container">
                    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Bureau Nature Tech" class="profile-img">
                </div>
                <div class="profile-content">
                    <h1>CV de Prénom NOM</h1>
                    <h2>Développeur Web Junior</h2>
                    <hr class="divider">
                    <p class="pitch">
                        Étudiant en BUT Informatique, je suis passionné par le développement web et l'architecture logicielle. 
                        Actuellement à la recherche d'un stage de 10 semaines, je souhaite mettre mes compétences techniques 
                        au service d'une entreprise innovante. Ma démarche s'inspire de la rigueur de la nature : 
                        structurée, adaptative et en croissance constante. Curieux et autonome, j'aime résoudre des problèmes complexes 
                        et concevoir des interfaces ergonomiques.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="formations" class="section bg-light">
        <div class="container">
            <h2 class="section-title">Formations</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="date">Sept. 2023 - Présent</div>
                    <div class="content">
                        <h3>BUT Informatique</h3>
                        <div class="school-info">
                            <img src="https://via.placeholder.com/50?text=IUT" alt="Logo IUT" class="logo-ecole">
                            <span>IUT de [Ville]</span>
                        </div>
                        <p>Parcours Réalisation d'applications : conception, développement, validation.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="date">2020 - 2023</div>
                    <div class="content">
                        <h3>Baccalauréat Général</h3>
                        <div class="school-info">
                            <img src="https://via.placeholder.com/50?text=Lycée" alt="Logo Lycée" class="logo-ecole">
                            <span>Lycée [Nom]</span>
                        </div>
                        <p>Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques).</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="competences" class="section">
        <div class="container">
            <h2 class="section-title">Compétences</h2>
            <p style="text-align:center;">Représentation de mes compétences techniques et humaines.</p>
            
            <div class="mindmap-container">
                <div class="mindmap-center">Développeur</div>
                
                <div class="mindmap-branch branch-left">
                    <span class="node-title">Tech (Savoir-faire)</span>
                    <ul class="node-list">
                        <li>HTML5 / CSS3 / JS</li>
                        <li>Java / Python</li>
                        <li>SQL / Base de données</li>
                        <li>Git / GitHub</li>
                    </ul>
                </div>

                <div class="mindmap-branch branch-right">
                    <span class="node-title">Humain (Savoir-être)</span>
                    <ul class="node-list">
                        <li>Travail d'équipe</li>
                        <li>Autonomie</li>
                        <li>Communication</li>
                        <li>Curiosité</li>
                    </ul>
                </div>
            </div>
            </div>
    </section>

    <section id="experiences" class="section bg-light">
        <div class="container">
            <h2 class="section-title">Expériences</h2>
            
            <div class="card-list">
                <div class="card">
                    <div class="card-header">
                        <h3>Stage Développement Web</h3>
                        <span class="date-badge">Juin 2024 - Août 2024</span>
                    </div>
                    <h4>Nom de l'entreprise</h4>
                    <p class="description">
                        Développement d'une interface client pour la gestion des stocks.
                    </p>
                    <ul style="margin-left:20px; list-style-type:circle;">
                        <li>Analyse des besoins utilisateurs.</li>
                        <li>Développement Front-End (React).</li>
                        <li>Rédaction de la documentation technique.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="realisations" class="section">
        <div class="container">
            <h2 class="section-title">Réalisations</h2>
            <p style="text-align:center;">Projets informatiques (BUT et personnels).</p>

            <div class="grid-2-col">
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Projet 1" class="project-img">
                    <div class="project-body">
                        <h3>Création d'un site E-commerce</h3>
                        <span class="project-meta">Projet BUT - 3 mois</span>
                        <p>Conception d'un site complet avec gestion de panier et base de données.</p>
                        <a href="#" class="blue-link" target="_blank">Voir le code (GitHub) &rarr;</a>
                    </div>
                </div>

                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Projet 2" class="project-img">
                    <div class="project-body">
                        <h3>Application de Gestion</h3>
                        <span class="project-meta">Projet Personnel</span>
                        <p>Application Java pour la gestion de tâches automatisées.</p>
                        <a href="#" class="blue-link" target="_blank">Voir la documentation &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section footer-section">
        <div class="container">
            <h2 class="section-title white-text">Contact</h2>
            <div class="contact-links">
                <a href="mailto:mon.email@etudiant.univ.fr" class="contact-btn">Email Universitaire</a>
                <a href="https://linkedin.com" target="_blank" class="contact-btn">LinkedIn</a>
                <a href="https://github.com" target="_blank" class="contact-btn">GitHub</a>
            </div>
            <p class="copyright">© 2024 - Prénom NOM - CV Numérique BUT Informatique</p>
        </div>
    </section>

</body>
</html>
