<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Numérique - Martin Morenville</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <style>
        /* --- 1. CONFIGURATION GÉNÉRALE (Respect des consignes) --- */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa; /* Fond clair */
            color: #333; /* Gris foncé pour le texte */
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: #007bff; /* LIENS EN BLEU (Critère obligatoire) */
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }

        /* --- 2. BARRE DE NAVIGATION --- */
        header {
            background-color: #2c3e50;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        nav ul li {
            margin: 0;
        }

        nav ul li a {
            display: block;
            padding: 15px 20px;
            color: white; /* Texte blanc sur menu sombre */
            font-weight: 500;
            transition: background 0.3s;
        }

        nav ul li a:hover {
            background-color: #34495e;
            text-decoration: none;
        }

        /* --- 3. SECTIONS DU CV --- */
        section {
            padding: 60px 20px;
            max-width: 900px; /* Limite la largeur pour la lisibilité */
            margin: 0 auto;
            background-color: white;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        h1, h2, h3 {
            color: #2c3e50;
        }

        h2 {
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 30px;
            text-transform: uppercase;
            font-size: 1.5rem;
        }

        /* --- 4. STYLE SPÉCIFIQUE : ACCUEIL --- */
        #accueil {
            text-align: center;
        }

        .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #007bff;
            margin-bottom: 20px;
        }

        .intro-text {
            text-align: justify; /* Texte justifié (Critère obligatoire) */
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.1rem;
        }

        /* --- 5. STYLE SPÉCIFIQUE : FORMATIONS & EXPERIENCES --- */
        .timeline-item {
            margin-bottom: 30px;
            padding-left: 20px;
            border-left: 3px solid #e9ecef;
            position: relative;
        }

        .timeline-date {
            font-weight: bold;
            color: #007bff;
            font-size: 0.9rem;
        }

        .timeline-title {
            font-size: 1.2rem;
            margin: 5px 0;
            font-weight: 700;
        }

        .timeline-place {
            font-style: italic;
            color: #666;
            margin-bottom: 10px;
            display: block;
        }

        /* --- 6. STYLE SPÉCIFIQUE : COMPÉTENCES (Style Mindmap/Cartes) --- */
        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
        }

        .skill-category {
            flex: 1 1 300px; /* Responsive cards */
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 5px solid #007bff;
        }

        .skill-list li {
            margin-bottom: 8px;
        }

        /* --- 7. CONTACT --- */
        .contact-info {
            text-align: center;
            font-size: 1.1rem;
        }
        
        .contact-btn {
            display: inline-block;
            margin-top: 20px;
            background-color: #0077b5; /* Bleu LinkedIn */
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
        }
        
        .contact-btn:hover {
            background-color: #005582;
            color: white;
            text-decoration: none;
        }

        /* --- RESPONSIVE MOBILE --- */
        @media (max-width: 600px) {
            nav ul { flex-direction: column; }
            nav ul li a { text-align: center; border-bottom: 1px solid #3d566e; }
            .intro-text { text-align: left; }
        }
    </style>
</head>
<body>

    <header>
        <nav>
            <ul>
                <li><a href="#accueil"><i class="fas fa-home"></i> Accueil</a></li>
                <li><a href="#formations"><i class="fas fa-graduation-cap"></i> Formations</a></li>
                <li><a href="#competences"><i class="fas fa-brain"></i> Compétences</a></li>
                <li><a href="#realisations"><i class="fas fa-laptop-code"></i> Réalisations</a></li>
                <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="accueil">
        <img src="https://via.placeholder.com/150" alt="Photo de Martin Morenville" class="profile-pic">
        
        <h1>CV de Martin MORENVILLÉ</h1>
        <h3>Étudiant Développeur d'Applications & Web</h3>
        
        <div class="intro-text">
            <p>
                Actuellement étudiant en 2ème année de BUT Informatique à l'IUT de Lille, je suis à la recherche d'un <strong>stage dans le développement informatique</strong> (web ou logiciel) pour mettre en pratique ma passion pour le code. Curieux et rigoureux, j'ai acquis des bases solides en <strong>Java</strong> et en développement Web, que j'ai concrétisées lors d'un projet de création de jeu vidéo en méthode Agile.
            </p>
            <p>
                Au-delà de la technique, mes 9 années de tennis en compétition et mon investissement dans des projets associatifs m'ont appris la persévérance et le travail d'équipe. Je souhaite aujourd'hui apporter mon dynamisme et mes compétences techniques (Git, POO) au service de vos projets.
            </p>
        </div>
    </section>

    <section id="formations">
        <h2><i class="fas fa-user-graduate"></i> Formations</h2>

        <div class="timeline-item">
            <span class="timeline-date">Septembre 2023 – Aujourd'hui</span>
            <h3 class="timeline-title">BUT Informatique (2ème année)</h3>
            <span class="timeline-place">IUT A de Lille (Université de Lille)</span>
            <p>Acquisition de compétences en développement logiciel (Java), développement web, bases de données (SQL) et gestion de projet.</p>
        </div>

        <div class="timeline-item">
            <span class="timeline-date">2024</span>
            <h3 class="timeline-title">Certification Anglais (Niveau B2)</h3>
            <span class="timeline-place">Université de Lille</span>
            <p>Capacité à communiquer et travailler dans un environnement technique international.</p>
        </div>

        <div class="timeline-item">
            <span class="timeline-date">Juin 2023</span>
            <h3 class="timeline-title">Baccalauréat Général</h3>
            <span class="timeline-place">Lycée Raymond Queneau, Villeneuve d'Ascq</span>
            <p>Spécialités : Numérique et Sciences Informatiques (NSI) & Anglais Monde Contemporain.<br>
            Option : Mathématiques complémentaires.</p>
        </div>
    </section>

    <section id="competences">
        <h2><i class="fas fa-cogs"></i> Compétences</h2>
        
        <div class="skills-container">
            <div class="skill-category">
                <h3><i class="fas fa-code"></i> Savoir-Faire Technique</h3>
                <ul class="skill-list">
                    <li><strong>Développement :</strong> Java (POO), HTML5 / CSS3</li>
                    <li><strong>Outils :</strong> Git, GitHub/GitLab</li>
                    <li><strong>Systèmes :</strong> Linux, Windows</li>
                    <li><strong>Méthodologie :</strong> Agile / Scrum</li>
                </ul>
            </div>

            <div class="skill-category">
                <h3><i class="fas fa-users"></i> Savoir-Être</h3>
                <ul class="skill-list">
                    <li>Travail en équipe & collaboratif</li>
                    <li>Écoute active</li>
                    <li>Communication orale et écrite</li>
                    <li>Autonomie et curiosité</li>
                </ul>
            </div>

            <div class="skill-category">
                <h3><i class="fas fa-language"></i> Langues</h3>
                <ul class="skill-list">
                    <li><strong>Anglais :</strong> Niveau B2 (Intermédiaire)</li>
                    <li><strong>Allemand :</strong> Niveau A2 (Notions)</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="realisations">
        <h2><i class="fas fa-briefcase"></i> Expériences & Réalisations</h2>

        <div class="timeline-item">
            <span class="timeline-date">2025 (Semaine Agile)</span>
            <h3 class="timeline-title">Développement d'un Jeu Vidéo en Java</h3>
            <span class="timeline-place">Projet Universitaire - BUT 2</span>
            <p>Développement d'un jeu complet en équipe en suivant la méthodologie Agile.</p>
            <ul>
                <li>Conception de l'architecture logicielle (POO).</li>
                <li>Programmation des fonctionnalités en Java.</li>
                <li>Collaboration via Git.</li>
            </ul>
            <p><strong>Compétences :</strong> Java, Git, Agile.</p>
            <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i> Voir le code sur GitHub (Lien Preuve)</a>
        </div>

        <div class="timeline-item">
            <span class="timeline-date">Décembre 2024</span>
            <h3 class="timeline-title">Création de mon CV Numérique</h3>
            <span class="timeline-place">Projet Personnel / Universitaire</span>
            <p>Conception et intégration de ce site web pour présenter mon profil professionnel aux recruteurs.</p>
            <ul>
                <li>Structuration du contenu et rédaction.</li>
                <li>Intégration HTML5/CSS3 responsive.</li>
            </ul>
            <p><strong>Compétences :</strong> Webdesign, HTML/CSS.</p>
        </div>

        <div class="timeline-item">
            <span class="timeline-date">2023 (Classe de Première)</span>
            <h3 class="timeline-title">Projet Interdisciplinaire "Plongée & Environnement"</h3>
            <span class="timeline-place">Lycée Raymond Queneau</span>
            <p>Participation à un projet scientifique et sportif avec séjour à la presqu'île de Giens.</p>
            <ul>
                <li>Recherche de financements et communication.</li>
                <li>Obtention du niveau 1 de plongée.</li>
            </ul>
            <p><strong>Compétences :</strong> Gestion de projet, Persévérance.</p>
            <a href="#" target="_blank"><i class="fas fa-file-pdf"></i> Voir le dossier du projet (Lien Preuve)</a>
        </div>
    </section>

    <section id="contact">
        <h2><i class="fas fa-paper-plane"></i> Contact</h2>
        <div class="contact-info">
            <p>Vous êtes intéressé par mon profil pour un stage ou une collaboration ? N'hésitez pas à me contacter.</p>
            
            <p>
                <i class="fas fa-envelope"></i> <strong>Email perso :</strong> <a href="mailto:martin.morenville@gmail.com">martin.morenville@gmail.com</a><br>
                <i class="fas fa-university"></i> <strong>Email étudiant :</strong> <a href="mailto:martin.morenville.etu@univ-lille.fr">martin.morenville.etu@univ-lille.fr</a><br>
                <i class="fas fa-phone"></i> <strong>Téléphone :</strong> 07 67 30 42 85<br>
                <i class="fas fa-map-marker-alt"></i> <strong>Localisation :</strong> Villeneuve d'Ascq (59)
            </p>

            <a href="https://www.linkedin.com/" target="_blank" class="contact-btn">
                <i class="fab fa-linkedin"></i> Retrouvez-moi sur LinkedIn
            </a>
        </div>
    </section>

    <footer style="text-align: center; padding: 20px; color: #666; font-size: 0.9rem;">
        <p>&copy; 2024 Martin Morenville - Site réalisé dans le cadre du BUT Informatique</p>
    </footer>

</body>
</html>
