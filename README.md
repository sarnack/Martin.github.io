<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - [Prénom NOM]</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        /* --- VARIABLES & RESET --- */
        :root {
            --gold: #FFD700;
            --gold-dark: #FFA500;
            --gold-light: #FFE55C;
            --dark-bg: #0a0e27;      /* Fond principal contenu */
            --dark-sidebar: #050714; /* Fond barre latérale plus sombre */
            --dark-card: #141b3d;
            --text-primary: #e4e4e7;
            --text-secondary: #94a3b8;
            --sidebar-width: 300px;  /* Largeur de la colonne gauche */
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', sans-serif;
            color: var(--text-primary);
            background: var(--dark-bg);
            line-height: 1.6;
            display: flex; /* Structure FLEX pour le layout Split */
            min-height: 100vh;
        }

        /* --- 1. SIDEBAR (Partie Gauche Fixe) --- */
        header.sidebar {
            width: var(--sidebar-width);
            height: 100vh;
            background: var(--dark-sidebar);
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2.5rem 2rem;
            border-right: 1px solid rgba(255, 215, 0, 0.05);
            z-index: 1000;
            overflow-y: auto;
        }

        .profile-area { text-align: center; margin-bottom: 2rem; }
        
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 3px solid var(--gold);
            object-fit: cover;
            margin-bottom: 1rem;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
            background-color: var(--dark-card); /* Placeholder si pas d'image */
        }

        .profile-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 0.5rem;
        }

        .profile-role {
            color: var(--gold);
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        nav ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }

        nav a {
            display: block;
            text-decoration: none;
            color: var(--text-secondary);
            padding: 0.8rem 0;
            font-size: 0.95rem;
            transition: all 0.3s;
            text-align: center;
            border-radius: 6px;
        }

        nav a:hover, nav a.active {
            color: #fff;
            background: rgba(255, 215, 0, 0.05);
            padding-left: 10px; /* Petit effet de décalage */
        }
        nav a.active { color: var(--gold); font-weight: 600; }

        .social-links { display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; }
        .social-links a { color: var(--text-secondary); font-size: 1.2rem; transition: color 0.3s; }
        .social-links a:hover { color: var(--gold); }

        /* --- 2. MAIN CONTENT (Partie Droite Défilante) --- */
        main {
            margin-left: var(--sidebar-width); /* Laisse la place à la sidebar */
            width: calc(100% - var(--sidebar-width));
            background-image: radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 40%);
        }

        section {
            min-height: 100vh; /* CHAQUE SECTION FAIT 100% DE L'ECRAN (Effet étiré) */
            padding: 4rem 5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        h2 {
            font-size: 3rem;
            margin-bottom: 3rem;
            color: #fff;
            position: relative;
            display: inline-block;
        }
        
        h2 span { color: var(--gold); }

        /* Styles Spécifiques aux Composants */
        
        /* Expérience / Timeline */
        .timeline-item {
            border-left: 2px solid rgba(255, 215, 0, 0.2);
            padding-left: 2rem;
            margin-bottom: 2rem;
            position: relative;
        }
        .timeline-item::after {
            content: ''; position: absolute; left: -6px; top: 0;
            width: 10px; height: 10px; background: var(--gold); border-radius: 50%;
            box-shadow: 0 0 10px var(--gold);
        }
        .timeline-date { color: var(--gold); font-size: 0.9rem; margin-bottom: 0.5rem; display: block; }
        
        /* Grids */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }

        .card {
            background: var(--dark-card);
            padding: 2rem;
            border-radius: 8px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid transparent;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 215, 0, 0.3);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .tag {
            display: inline-block;
            background: rgba(255, 215, 0, 0.1);
            color: var(--gold);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-right: 5px;
            margin-bottom: 10px;
        }

        /* Formulaire simple */
        .form-group { margin-bottom: 1.5rem; }
        input, textarea {
            width: 100%; padding: 1rem;
            background: var(--dark-card);
            border: 1px solid rgba(255,255,255,0.1);
            color: #fff; border-radius: 4px;
        }
        input:focus, textarea:focus { outline: none; border-color: var(--gold); }
        .btn {
            background: transparent; color: var(--gold);
            border: 1px solid var(--gold); padding: 10px 25px;
            cursor: pointer; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px;
        }
        .btn:hover { background: var(--gold); color: var(--dark-bg); }

        /* --- MOBILE RESPONSIVE --- */
        .mobile-toggle { display: none; }

        @media (max-width: 992px) {
            body { flex-direction: column; }
            
            /* Sidebar devient un header mobile */
            header.sidebar {
                width: 100%; height: auto; position: relative;
                padding: 2rem 1rem; border-right: none; border-bottom: 1px solid rgba(255,215,0,0.1);
                align-items: center;
            }
            
            nav { display: none; width: 100%; margin-top: 2rem; }
            nav.mobile-visible { display: block; } /* Classe JS pour afficher */
            
            .mobile-toggle {
                display: block; position: absolute; top: 2rem; right: 2rem;
                background: none; border: none; color: var(--gold); font-size: 1.5rem; cursor: pointer;
            }

            main { margin-left: 0; width: 100%; }
            section { padding: 4rem 1.5rem; min-height: auto; } /* Moins étiré sur mobile pour scroller */
            h2 { font-size: 2.2rem; }
        }
    </style>
</head>
<body>

    <header class="sidebar">
        <div class="profile-area">
            <img src="https://via.placeholder.com/150" alt="Photo de profil" class="profile-img">
            <h1 class="profile-name">Martin<br>MORENVILLE</h1>
            <p class="profile-role">Développeur Web & Java</p>
        </div>

        <button class="mobile-toggle" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </button>

        <nav id="navbar">
            <ul>
                <li><a href="#accueil" class="nav-link active">Accueil</a></li>
                <li><a href="#formations" class="nav-link">Formations</a></li>
                <li><a href="#competences" class="nav-link">Compétences</a></li>
                <li><a href="#realisations" class="nav-link">Réalisations</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>

        <div class="social-links">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="mailto:email@exemple.com"><i class="fas fa-envelope"></i></a>
        </div>
        
        <div style="text-align:center; font-size:0.7rem; color:#555; margin-top:1rem;">
            &copy; 2024 Martin M.
        </div>
    </header>

    <main>
        
        <section id="accueil">
            <p style="color:var(--gold); font-family:'Fira Code', monospace; margin-bottom:1rem;">Bonjour, mon nom est</p>
            <h2 style="font-size: 4rem; line-height: 1.1; margin-bottom: 1rem;">
                Martin Morenville.<br>
                <span style="color: var(--text-secondary); font-size: 3rem;">Je conçois des solutions digitales.</span>
            </h2>
            <p style="max-width: 600px; font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">
                Étudiant en BUT Informatique passionné par le développement <strong>Java</strong> et l'écosystème <strong>Web</strong>. Je transforme des idées complexes en code propre et performant.
            </p>
            <a href="#contact" class="btn" style="display:inline-block; width: fit-content;">Me contacter</a>
        </section>

        <section id="formations">
            <h2>01. <span>Formations</span></h2>
            <div class="timeline-item">
                <span class="timeline-date">2023 - PRÉSENT</span>
                <h3>BUT Informatique</h3>
                <p style="color:var(--text-secondary)">IUT A de Lille - Université de Lille</p>
                <p>Spécialisation Réalisation d'applications : conception, développement, validation.</p>
            </div>
            <div class="timeline-item">
                <span class="timeline-date">2023</span>
                <h3>Baccalauréat Général</h3>
                <p style="color:var(--text-secondary)">Lycée Raymond Queneau</p>
                <p>Spécialités NSI (Numérique et Sciences Informatiques) et Anglais.</p>
            </div>
        </section>

        <section id="competences">
            <h2>02. <span>Compétences</span></h2>
            <div class="grid-container">
                <div class="card">
                    <h3 style="color:#fff; margin-bottom:1rem"><i class="fas fa-code" style="color:var(--gold)"></i> Front-end</h3>
                    <div style="display:flex; flex-wrap:wrap;">
                        <span class="tag">HTML5</span>
                        <span class="tag">CSS3</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">React (Notions)</span>
                    </div>
                </div>
                <div class="card">
                    <h3 style="color:#fff; margin-bottom:1rem"><i class="fas fa-server" style="color:var(--gold)"></i> Back-end</h3>
                    <div style="display:flex; flex-wrap:wrap;">
                        <span class="tag">Java</span>
                        <span class="tag">Spring Boot</span>
                        <span class="tag">PHP</span>
                        <span class="tag">SQL / PL-SQL</span>
                    </div>
                </div>
                <div class="card">
                    <h3 style="color:#fff; margin-bottom:1rem"><i class="fas fa-tools" style="color:var(--gold)"></i> Outils</h3>
                    <div style="display:flex; flex-wrap:wrap;">
                        <span class="tag">Git & GitHub</span>
                        <span class="tag">Docker</span>
                        <span class="tag">Linux</span>
                        <span class="tag">Agile / Scrum</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="realisations">
            <h2>03. <span>Réalisations</span></h2>
            <div class="grid-container">
                <div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                        <i class="fas fa-folder" style="font-size:2rem; color:var(--gold)"></i>
                        <a href="#" style="color:var(--text-primary)"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <h3 style="color:#fff; margin-bottom:0.5rem">Jeu Vidéo Java</h3>
                    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
                        Création d'un jeu complet en équipe de 5 avec méthodologie Agile sur une semaine. Architecture MVC.
                    </p>
                    <div><span class="tag">Java</span><span class="tag">Swing</span><span class="tag">Git</span></div>
                </div>

                <div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                        <i class="fas fa-folder" style="font-size:2rem; color:var(--gold)"></i>
                        <a href="#" style="color:var(--text-primary)"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <h3 style="color:#fff; margin-bottom:0.5rem">Site Portfolio</h3>
                    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
                        Design et intégration de ce site web personnel responsive en HTML/CSS pur.
                    </p>
                    <div><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">Design</span></div>
                </div>
                 <div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                        <i class="fas fa-folder" style="font-size:2rem; color:var(--gold)"></i>
                        <a href="#" style="color:var(--text-primary)"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <h3 style="color:#fff; margin-bottom:0.5rem">Gestion de BD</h3>
                    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
                        Conception et optimisation d'une base de données complexe pour une application de gestion.
                    </p>
                    <div><span class="tag">PostgreSQL</span><span class="tag">MCD</span></div>
                </div>
            </div>
        </section>

        <section id="contact" style="min-height: 80vh;"> <div style="text-align: center; max-width: 600px; margin: 0 auto;">
                <p style="color:var(--gold); font-family:'Fira Code';">04. La suite ?</p>
                <h2>Me Contacter</h2>
                <p style="color:var(--text-secondary); margin-bottom:2rem;">
                    Je suis actuellement à la recherche d'un stage ou de nouvelles opportunités. Que vous ayez une question ou juste envie de dire bonjour, ma boîte mail est ouverte !
                </p>
                <a href="mailto:ton.email@gmail.com" class="btn" style="font-size: 1.1rem; padding: 15px 30px;">Dire Bonjour</a>
            </div>
        </section>

    </main>

    <script>
        // Menu Mobile Toggle
        function toggleMobileMenu() {
            const nav = document.getElementById('navbar');
            nav.classList.toggle('mobile-visible');
        }

        // Active Link Highlighter (Scroll Spy)
        // Ce script détecte quelle section est visible et illumine le lien correspondant dans la sidebar
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>
