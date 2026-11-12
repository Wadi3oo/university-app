import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [prenom, setPrenom] = useState(props.prenom);
  const [nom, setNom] = useState(props.nom);
  const [email, setEmail] = useState(props.email);
  const [telephone, setTelephone] = useState(props.telephone);
  const [filiere, setFiliere] = useState(props.filiere);
  const [anneeEtude, setAnneeEtude] = useState(props.anneeEtude);
  const [groupe, setGroupe] = useState(props.groupe);
  const [ville, setVille] = useState(props.ville);

  const handleSave = () => {
    const updatedStudent = {
      ...props,
      prenom,
      nom,
      email,
        telephone,
      filiere,
      anneeEtude,
      groupe,
      ville
    };
    props.surModifier(props.email, updatedStudent);
    setIsEditing(false);
  };

  return (
    <div className="card">
      <img src={props.image} alt="avatar" className="profile-img" />
      <span className="card-subtitle">Fiche Étudiant</span>

      {isEditing ? (
        <div className="edit-form">
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prénom" />
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Téléphone" />
          <input type="text" value={filiere} onChange={(e) => setFiliere(e.target.value)} placeholder="Filière" />
          <input type="text" value={anneeEtude} onChange={(e) => setAnneeEtude(e.target.value)} placeholder="Année" />
          <input type="text" value={groupe} onChange={(e) => setGroupe(e.target.value)} placeholder="Groupe" />
          <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville" />
          <button className="btn-save" onClick={handleSave}>ENREGISTRER</button>
        </div>
      ) : (
        <>
          <h2 className="student-name">{prenom || "—"} {nom || "—"}</h2>

          {show && (
            <div className="info">
              <p><strong>Email :</strong> {email || "—"}</p>
              <p><strong>Téléphone :</strong> {telephone || "—"}</p>
              <p><strong>Filière :</strong> {filiere || "—"}</p>
              <p><strong>Année :</strong> {anneeEtude || "—"}</p>
              <p><strong>Groupe :</strong> {groupe || "—"}</p>
              <p><strong>ville :</strong> {ville || "—"}</p>
            </div>
          )}

          <button className="btn-toggle" onClick={() => setShow(!show)}>
            {show ? "Masquer les coordonnées" : "Afficher les coordonnées"}
          </button>
        </>
      )}

      <div className="card-actions">
        <button className="btn-contact">Contacter</button>
        {isEditing ? (
          <button className="btn-edit" onClick={() => setIsEditing(false)}>Annuler</button>
        ) : (
          <button className="btn-edit" onClick={() => setIsEditing(true)}>Modifier</button>
        )}
        <button className="btn-delete" onClick={() => props.surSupprimer(props.email)}>Supprimer</button>
      </div>
    </div>
  );
}

export default StudentCard;