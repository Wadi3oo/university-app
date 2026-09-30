import "./App.css";
import avatarImg from "./assets/do3.jpg";

function App() {
  const student = {
    nomPrenom: "Mohamed Wadie Oueslati",
    email: "oueslatiwadiim123@gmail.com",
    telephone: "+216 95 123 211 ",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    photo: avatarImg
  };

  const handleContact = () => {
    window.location.href = `mailto:${student.email}`;
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={student.photo} alt={student.nomPrenom} className="profile-img" />
        <h2>Fiche étudiant</h2>
        <div className="info">
          <p><strong>Nom & Prénom :</strong> {student.nomPrenom}</p>
          <p><strong>Email :</strong> {student.email}</p>
          <p><strong>Téléphone :</strong> {student.telephone}</p>
          <p><strong>Filière :</strong> {student.filiere}</p>
          <p><strong>Année d'étude :</strong> {student.anneeEtude}</p>
          <p><strong>Groupe :</strong> {student.groupe}</p>
          <p><strong>Ville :</strong> {student.ville}</p>
        </div>
        <button onClick={handleContact} className="btn-contact">
          Contacter
        </button>
      </div>
    </div>
  );
}

export default App;