import { useState } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/footer.jsx";
import avatarImg from "./assets/do3.jpg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Mohamed Wadie",
      nom: "Oueslati",
      email: "oueslati@gmail.com",
      telephone: "+216 95 123 211",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI D",
      ville: "Mahdia",
      image: avatarImg
    }
  ]);

  const [activeTab, setActiveTab] = useState("Tous");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    prenom: "", 
    nom: "", 
    email: "", 
    telephone: "", 
    filiere: "GLSI", 
    anneeEtude: "1ère année",
    groupe: "", 
    ville: "", 
    image: avatarImg
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  }

  function ajouterEtudiant(e) {
    e.preventDefault();
    setEtudiants([...etudiants, formData]);
    setShowForm(false);
    setFormData({
      prenom: "", nom: "", email: "", telephone: "", filiere: "GLSI", anneeEtude: "1ère année", groupe: "", ville: "", image: avatarImg
    });
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
            className="barbar"
            placeholder="Rechercher..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <button className="ajout" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Fermer" : "+ Ajouter"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={ajouterEtudiant} className="add-form">
            <input name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
            <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
            <input name="filiere" placeholder="Filière" value={formData.filiere} onChange={handleChange} required />
            
            {/* Boutons radio pour l'année d'étude */}
            <div className="radio-group" style={{ color: "#fff", display: "flex", gap: "15px", alignItems: "center", margin: "5px 0" }}>
              <label>Année :</label>
              <label>
                <input 
                  type="radio" 
                  name="anneeEtude" 
                  value="1ère année" 
                  checked={formData.anneeEtude === "1ère année"} 
                  onChange={handleChange} 
                /> 1ère année
              </label>
              <label>
                <input 
                  type="radio" 
                  name="anneeEtude" 
                  value="2ème année" 
                  checked={formData.anneeEtude === "2ème année"} 
                  onChange={handleChange} 
                /> 2ème année
              </label>
              <label>
                <input 
                  type="radio" 
                  name="anneeEtude" 
                  value="3ème année" 
                  checked={formData.anneeEtude === "3ème année"} 
                  onChange={handleChange} 
                /> 3ème année
              </label>
            </div>

            <input name="groupe" placeholder="Groupe" value={formData.groupe} onChange={handleChange} required />
            <input name="ville" placeholder="Ville" value={formData.ville} onChange={handleChange} />
            
            <div>
              <label>Photo de profil :</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            
            <button type="submit" className="validbtn">Valider</button>
          </form>
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