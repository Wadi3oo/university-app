import "./App.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/footer.jsx";
import avatarImg from "./assets/do3.jpg";
import avatarImg2 from "./assets/goobie.avif";
import avatarImg3 from "./assets/cat.jpg";

function App() {
  const etudiants = [
    {
      prenom: "Mohamed Wadie",
      nom: "Oueslati",
      email: "oueslatiwadiim123@gmail.com",
      telephone: "+216 95 123 211",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI D",
      ville: "Mahdia",
      image: avatarImg
    },
    {
      prenom: "Oswa",
      nom: "Elkamel",
      email: "elkamel@gmail.com",
      telephone: "+216 22 334 455",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI D",
      ville: "Mahdia",
      image: avatarImg3
    },
    {
      prenom: "Moez",
      nom: "Boul3ezz",
      email: "moez20@gmail.com",
      telephone: "+216 27 567 890",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "3ème année",
      groupe: "GLSI A",
      ville: "Mahdia",
      image: avatarImg2
    }
  ];

  return (
    <div className="app-layout">
      <Header />
      <Navbar />
      <main className="main-content">
        <h2 className="section-title">Liste des Étudiants</h2>
        <div className="card-container">
          {etudiants.map((etudiant) => (
            <StudentCard
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              anneeEtude={etudiant.anneeEtude}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
              image={etudiant.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;