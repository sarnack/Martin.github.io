<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV de [Prénom NOM] - Développeur Web Junior</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        /* Navigation */
        nav {
            background-color: #2c3e50;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
            padding: 0 1rem;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #3498db;
        }

        /* Sections */
        section {
            max-width: 1000px;
            margin: 2rem auto;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #34495e;
            border-bottom: 3px solid #3498db;
            padding-bottom: 0.5rem;
        }

        h3 {
            font-size: 1.3rem;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }

        /* Page d'accueil */
        #accueil {
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        #accueil::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><text x="20" y="50" font-size="40" opacity="0.1" fill="white">{ }</text></svg>');
            opacity: 0.3;
        }

        #accueil h1 {
            color: white;
            position: relative;
            z-index: 1;
        }

        #accueil .subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .presentation {
            max-width: 700px;
            text-align: justify;
            font-size: 1.1rem;
            line-height: 1.8;
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }

        /* Éléments de contenu */
        .item {
            margin-bottom: 2rem;
            padding: 1.5rem;
            border-left: 4px solid #3498db;
            background: #f8f9fa;
            border-radius: 4px;
        }

        .item-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .logo {
            width: 60px;
            height: 60px;
            background: #ecf0f1;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #3498db;
        }

        .date {
            color: #7f8c8d;
            font-size: 0.9rem;
            font-style: italic;
        }

        .competences-list {
            list-style: none;
            padding-left: 1rem;
        }

        .competences-list li::before {
            content: "✓ ";
            color: #27ae60;
            font-weight: bold;
            margin-right: 0.5rem;
        }

        .lien-preuve {
            display: inline-block;
            margin-top: 0.5rem;
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
        }

        .lien-preuve:hover {
            text-decoration: underline;
        }

        /* Mindmap placeholder */
        .mindmap-container {
            width: 100%;
            height: 500px;
            background: #ecf0f1;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: italic;
            color: #7f8c8d;
        }

        /* Contact */
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1.1rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .contact-icon {
            width: 40px;
            height: 40px;
            background: #3498db;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 2rem;
            background: #2c3e50;
            color: white;
            margin-top: 3rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav ul {
                gap: 1rem;
            }
            
            section {
                padding: 1rem;
                margin: 1rem;
            }

            h1 {
                font-size: 2rem;
            }

            .item-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#experiences">Expériences</a></li>
            <li><a href="#realisations">Réalisations</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- PAGE ACCUEIL -->
    <section id="accueil">
        <h1>CV de [Prénom NOM]</h1>
        <p class="subtitle">Développeur Web Junior | Back-End | Front-End</p>
        
        <div class="presentation">
            <p>
                <strong>[Texte de présentation de 5 à 10 lignes]</strong><br><br>
                Actuellement en [niveau d'études] à [nom de l'établissement], je suis passionné(e) par le développement web et je recherche un stage/poste en [type de poste visé].
                <br><br>
                Au cours de ma formation, j'ai réalisé [mentionnez un projet informatique marquant] qui m'a permis de développer mes compétences en [technologies utilisées]. Ce projet consistait à [brève description].
                <br><br>
                J'ai également [mentionnez une autre réalisation ou expérience pertinente] qui démontre ma capacité à [compétence technique ou savoir-être].
                <br><br>
                Curieux(se) et motivé(e), je cherche à approfondir mes connaissances en [domaine d'intérêt] et à contribuer à des projets innovants.
            </p>
        </div>
    </section>

    <!-- PAGE FORMATIONS -->
    <section id="formations">
        <h2>Formations</h2>
        
        <div class="item">
            <div class="item-header">
                <div class="logo">IUT</div>
                <div>
                    <h3>BUT Informatique - Parcours [nom du parcours]</h3>
                    <p class="date">Septembre 2023 - Juin 2026 (en cours)</p>
                    <p><strong>IUT de [Ville], Université de [Nom]</strong></p>
                </div>
            </div>
            <p>Formation axée sur le développement web, les bases de données, la programmation orientée objet et la gestion de projets informatiques.</p>
        </div>

        <div class="item">
            <div class="item-header">
                <div class="logo">BAC</div>
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
        <h2>Compétences</h2>
        
        <div class="mindmap-container">
            <p>📊 Insérez ici votre Mindmap créée avec FreeMind, XMind ou un outil similaire<br>
            (Compétences techniques + Savoir-être + Savoir-faire)</p>
        </div>

        <div style="margin-top: 2rem;">
            <h3>💻 Compétences Techniques</h3>
            <ul class="competences-list">
                <li>Langages : HTML, CSS, JavaScript, PHP, Python, Java</li>
                <li>Frameworks : React, Vue.js, Symfony, Laravel</li>
                <li>Bases de données : MySQL, PostgreSQL, MongoDB</li>
                <li>Outils : Git, Docker, VS Code, Figma</li>
                <li>Méthodologies : Agile, Scrum</li>
            </ul>

            <h3>🤝 Savoir-être</h3>
            <ul class="competences-list">
                <li>Travail en équipe et communication</li>
                <li>Autonomie et prise d'initiative</li>
                <li>Curiosité et veille technologique</li>
                <li>Capacité d'adaptation</li>
                <li>Rigueur et organisation</li>
            </ul>
        </div>
    </section>

    <!-- PAGE EXPÉRIENCES -->
    <section id="experiences">
        <h2>Expériences Professionnelles et Bénévoles</h2>
        
        <div class="item">
            <div class="item-header">
                <div class="logo">💼</div>
                <div>
                    <h3>Stage Développeur Web - [Nom de l'entreprise]</h3>
                    <p class="date">[Mois Année] - [Mois Année] (X semaines)</p>
                    <p><strong>[Ville]</strong></p>
                </div>
            </div>
            <p>
                Au sein de [nom de l'entreprise/service], j'ai contribué à [description succincte du contexte]. 
                Mes principales missions ont été de [décrire les tâches].
            </p>
            <p><strong>Compétences acquises :</strong></p>
            <ul class="competences-list">
                <li>Développement front-end avec React</li>
                <li>Intégration d'API REST</li>
                <li>Travail en méthode Agile</li>
                <li>Tests unitaires et debugging</li>
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
        <h2>Réalisations</h2>
        
        <h3 style="color: #3498db; margin-bottom: 1.5rem;">Projets Informatiques (BUT)</h3>
        
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
            <p><strong>Technologies utilisées :</strong> [liste des technologies]</p>
            <p><strong>Mon rôle :</strong> [votre responsabilité dans l'équipe]</p>
            <p><strong>Compétences développées :</strong></p>
            <ul class="competences-list">
                <li>Conception de base de données relationnelle</li>
                <li>Développement back-end en PHP/Symfony</li>
                <li>Gestion de projet avec Git</li>
                <li>Documentation technique</li>
            </ul>
            <a href="#" class="lien-preuve">🔗 Voir le code sur GitHub</a> | 
            <a href="#" class="lien-preuve">📹 Démonstration vidéo</a>
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
            <p><strong>Technologies utilisées :</strong> [liste des technologies]</p>
            <p><strong>Compétences développées :</strong></p>
            <ul class="competences-list">
                <li>[Compétence 1]</li>
                <li>[Compétence 2]</li>
                <li>[Compétence 3]</li>
            </ul>
            <a href="#" class="lien-preuve">🔗 Accéder au projet en ligne</a>
        </div>

        <h3 style="color: #27ae60; margin-top: 2rem; margin-bottom: 1.5rem;">Projets Personnels</h3>
        
        <div class="item">
            <div class="item-header">
                <div class="logo">🎨</div>
                <div>
                    <h3>[Nom du projet personnel]</h3>
                    <p class="date">[Période de réalisation]</p>
                </div>
            </div>
            <p>
                Projet réalisé en autonomie pour [objectif/motivation]. 
                [Description succincte en 3-4 lignes].
            </p>
            <p><strong>Technologies utilisées :</strong> [liste]</p>
            <a href="#" class="lien-preuve">🔗 Voir le projet</a>
        </div>
    </section>

    <!-- PAGE CONTACT -->
    <section id="contact">
        <h2>Contact</h2>
        
        <div class="contact-info">
            <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                    <strong>Email :</strong><br>
                    <a href="mailto:prenom.nom@etu.univ-lille.fr">prenom.nom@etu.univ-lille.fr</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-icon">💼</div>
                <div>
                    <strong>LinkedIn :</strong><br>
                    <a href="https://www.linkedin.com/in/votre-profil" target="_blank">linkedin.com/in/votre-profil</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-icon">💻</div>
                <div>
                    <strong>GitHub :</strong><br>
                    <a href="https://github.com/votre-username" target="_blank">github.com/votre-username</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div>
                    <strong>Téléphone :</strong> (facultatif)<br>
                    [Votre numéro]
                </div>
            </div>
        </div>

        <div style="margin-top: 2rem; padding: 1rem; background: #ecf0f1; border-radius: 8px;">
            <p style="text-align: center;">
                💡 <em>N'hésitez pas à me contacter pour discuter de vos projets !</em>
            </p>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>© 2024 [Prénom NOM] - Tous droits réservés</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">
            Site créé dans le cadre du BUT Informatique - IUT de [Ville]
        </p>
    </footer>
</body>
</html>
