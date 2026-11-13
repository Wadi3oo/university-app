import { useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/studentform.jsx"; // Import du nouveau composant
import Footer from "./components/footer.jsx";
import avatarImg from "./assets/do3.jpg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Mohamed Wadie",
      nom: "Oueslati",
      email: "oueslati@gmail.com",
      telephone: "+216 95 123 211",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI D",
      ville: "Mahdia",
      image: avatarImg
    }
  ]);

  const [activeTab, setActiveTab] = useState("Tous");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  function ajouterEtudiant(nouvelEtudiant) {
    setEtudiants([...etudiants, nouvelEtudiant]);
    setShowForm(false);
  }

  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter(e => e.email !== email));
  }

  const modifierEtudiant = (email, updated) => {
    setEtudiants(etudiants.map(e => e.email === email ? updated : e));
  };

  const etudiantsFiltres = etudiants.filter(e => {
    const matchTab = activeTab === "Tous" || e.anneeEtude === activeTab;
    const matchSearch = `${e.prenom} ${e.nom}`.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="app-layout">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <div className="toolbar">
          <input 
            type="text"
            className="search-input"
            placeholder="Rechercher..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Fermer" : "+ Ajouter"}
          </button>
        </div>

        {/* Utilisation propre du composant StudentForm */}
        {showForm && (
          <StudentForm 
            onAjouterEtudiant={ajouterEtudiant} 
            onClose={() => setShowForm(false)} 
          />
        )}

        <div className="card-container">
          {etudiantsFiltres.map(etudiant => (
            <StudentCard
              key={etudiant.email}
              {...etudiant}
              surSupprimer={supprimerEtudiant}
              surModifier={modifierEtudiant}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;