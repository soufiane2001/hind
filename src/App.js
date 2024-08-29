import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
     <header>
        <div class="container">
            <img src="./logo.JPG" alt="Logo de la Société" class="logo"/>
            <h1>EL HASSOUNI HIND</h1>
            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home">
        <div class="container">
            <h2>Bienvenue sur notre site</h2>
            <p>Nous offrons des solutions d'ingénierie, des études techniques avancées, et des services de développement informatique.</p>
            <a href="#services" class="btn">Découvrez nos services</a>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <h2>Nos Services</h2>
            <div class="service">
                <img src="s1.jpg" alt="Conception et modélisation 3D" />
                <h3>Conception et modélisation 3D</h3>
                <p>Utilisation de logiciels de CAO (Conception Assistée par Ordinateur) pour modéliser des pièces et des ensembles mécaniques en 3D en utilisant CATIA, Solidworks et Ansys.</p>
            </div>
 

            <div class="service">
                <img src="s2.jpg" alt="Conception et modélisation 3D" />
                <h3>Analyse et simulation numérique</h3>
                <p>Analyse par éléments finis (FEA) : Réalisation de simulations pour évaluer le comportement des pièces sous diverses contraintes (mécaniques, thermiques, vibratoires, etc.).
                    Simulation dynamique : Étude du mouvement et de l'interaction des différentes pièces d'un ensemble mécanique pour vérifier leur bon fonctionnement.</p>
            </div>


            <div class="service">
                <img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/angular-react-social-sharing-image-1200x628.png?sfvrsn=8d8960d5_2" alt="Conception et modélisation 3D"/>
                <h3>Développement Front-End avec React et Angular</h3>
                <p> Création d'interfaces utilisateur (UI) : Développement d'applications web interactives et réactives avec React ou Angular, en mettant l'accent sur l'expérience utilisateur (UX).</p>
            </div>


        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2>Projets Récents</h2>
            <div class="project">
                <img src="p1.jpg" alt="Projet 1"/>
                <h3>Realtime Chat Web App</h3>
                <p>real-time chat web app using React and Firebase involves combining the front-end library React with the Firebase platform for real-time data synchronization</p>
                <a href="https://drive.google.com/file/d/1pwI_wSWDoTThEek9DFmHEK_Dom3P9KHr/view?usp=sharing">presentaion</a>
            </div>
            <div class="project">
                <img src="p2.jpg" alt="Projet 2"/>
                <h3>La simulation numérique de la perfusion hépatique à l’échelle des tissus</h3>
               
            </div>

            <div class="project">
                <img src="p3.jpeg" alt="Projet 2"/>
                <h3>Expensia cash App</h3>
               <p>Elevate your financial management with our Expo CLI-driven cash management app. Seamlessly monitor expenses, track income, and maintain control of your finances. Simplify cash flow tracking for informed decision-making, all in one intuitive platform designed to empower your financial journey.</p>
               <a href="https://drive.google.com/file/d/1ueUsWDQOL1F49uSsTI4roCJlc0S18cgD/view?usp=sharing">presentaion</a>
            </div>


        </div>
    </section>

    <section id="about">
        <div class="container">
            <h2>Informations sur Madame Hind El Hassouni
            </h2>
            <ul>
                <li>Raison sociale :
                    EL HASSOUNI HIND
                    </li>
                <li>Numéro Siren :
                    928355395
                    </li>
                <li>Numéro Siret :
                    92835539500015 (siège de l'entreprise)
                    </li>
                <li>Numéro TVA intracommunautaire :
                    FR63928355395</li>

                    <li>Greffe :
                        RCS Toulouse
                        </li>
                        <li>Code NAF / APE :
                            7112B (ingénierie, études techniques)
                            </li>
                            <li>Forme juridique :
                                Entrepreneur individuel
                                </li>
                                <li>Date d'immatriculation :
                                    01/05/2024
                                    </li>
                                    <li>Commune d'implantation :
                                        Toulouse (Haute-Garonne)</li>
            </ul>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contactez-nous</h2>
            <form action="submit_form.php" method="POST">
                <input type="text" name="name" placeholder="Votre nom" required />
                <input type="email" name="email" placeholder="Votre email" required/>
                <textarea name="message" placeholder="Votre message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Votre Société. Tous droits réservés.</p>
        </div>
    </footer>
    </>
  );
}

export default App;
