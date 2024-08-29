

import './App.css';
import logo from './logo.JPG'
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpeg'
function App() {
  return (
    <>
   <header>
    <div class="container">
        <img src={logo} alt="Logo de la Société" class="logo"/>
        <h1>EL HASSOUNI HIND</h1>
        <nav>
            <ul>
                <li><a href="#services" class="btn">Services</a></li>
                <li><a href="#projects" class="btn">Projets</a></li>
                <li><a href="#about" class="btn">À propos</a></li>
                <li><a href="#contact" class="btn">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>

<section id="home">
    <div class="container">
        <h2>Bienvenue sur notre site</h2>
        <p>Nous offrons des solutions d'ingénierie, des études techniques avancées, et des services de développement informatique.</p>
        <a href="#services" class="btn primary">Découvrez nos services</a>
    </div>
</section>

<section id="services">
  <h2>Nos Services</h2>
    <div class="container">
        
        <div class="service">
            <img src={s1} alt="Conception et modélisation 3D" />
            <h3>Conception et modélisation 3D</h3>
            <p>Utilisation de logiciels de CAO pour modéliser des pièces et des ensembles mécaniques en 3D en utilisant CATIA, Solidworks et Ansys.</p>
        </div>
        <div class="service">
            <img src={s2} alt="Analyse et simulation numérique" />
            <h3>Analyse et simulation numérique</h3>
            <p>Analyse par éléments finis (FEA) et simulation dynamique pour évaluer le comportement des pièces sous diverses contraintes.</p>
        </div>
        <div class="service">
            <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/angular-react-social-sharing-image-1200x628.png?sfvrsn=8d8960d5_2" alt="Développement Front-End"/>
            <h3>Développement Front-End avec React et Angular</h3>
            <p>Création d'interfaces utilisateur interactives et réactives avec React ou Angular, en mettant l'accent sur l'expérience utilisateur (UX).</p>
        </div>
    </div>
</section>

<section id="projects">
  <h2>Projets Récents</h2>
    <div class="container">
        
        <div class="project">
            <img src={p1} alt="Projet 1"/>
            <h3>Realtime Chat Web App</h3>
            <p>Une application de chat en temps réel utilisant React et Firebase pour une synchronisation des données en temps réel.</p>
            <a href="https://drive.google.com/file/d/1pwI_wSWDoTThEek9DFmHEK_Dom3P9KHr/view?usp=sharing" class="btn">Présentation</a>
        </div>
        <div class="project">
            <img src={p2} alt="Projet 2"/>
            <h3>Simulation numérique de la perfusion hépatique</h3>
        </div>
        <div class="project">
            <img src={p3} alt="Expensia Cash App"/>
            <h3>Expensia Cash App</h3>
            <p>Améliorez votre gestion financière avec notre application de gestion de trésorerie développée avec Expo CLI.</p>
            <a href="https://drive.google.com/file/d/1ueUsWDQOL1F49uSsTI4roCJlc0S18cgD/view?usp=sharing" class="btn">Présentation</a>
        </div>
    </div>
</section>

<section id="about">  
        <h2>Informations sur Madame Hind El Hassouni</h2>
    <div class="container">

        <ul>
            <li>Raison sociale: EL HASSOUNI HIND</li>
            <li>Numéro Siren: 928355395</li>
            <li>Numéro Siret: 92835539500015 (siège de l'entreprise)</li>
            <li>Numéro TVA intracommunautaire: FR63928355395</li>
            <li>Greffe: RCS Toulouse</li>
            <li>Code NAF / APE: 7112B (ingénierie, études techniques)</li>
            <li>Forme juridique: Entrepreneur individuel</li>
            <li>Date d'immatriculation: 01/05/2024</li>
            <li>Commune d'implantation: Toulouse (Haute-Garonne)</li>
        </ul>
    </div>
</section>

<section id="contact">
  <h2>Contactez-nous</h2>
    <div class="container">
        
        <form action="submit_form.php" method="POST">
            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre email" required/>
            <textarea name="message" placeholder="Votre message" required></textarea>
            <button type="submit" class="btn primary">Envoyer</button>
        </form>
    </div>
</section>

<footer>
    <div class="container">
        <p>&copy; 2024 Hind El Hassouni. Tous droits réservés.</p>
    </div>
</footer>

    </>
  );
}

export default App;
