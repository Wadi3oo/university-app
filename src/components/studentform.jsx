import { useState } from "react";
import "./StudentForm.css";
import avatarImg from "../assets/do3.jpg";

function StudentForm({ onAjouterEtudiant, onClose }) {
  const [formData, setFormData] = useState({
    prenom: "", 
    nom: "", 
    email: "", 
    telephone: "", 
    filiere: "Génie Logiciel et Systèmes d'Information", 
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

  function handleSubmit(e) {
    e.preventDefault();
    onAjouterEtudiant(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>Ajouter un étudiant</h3>
      
      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input id="prenom" name="prenom" type="text" placeholder="prénom" value={formData.prenom} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input id="nom" name="nom" type="text" placeholder="nom" value={formData.nom} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input id="email" name="email" type="email" placeholder="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input id="telephone" name="telephone" type="tel" placeholder="téléphone" value={formData.telephone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select id="filiere" name="filiere" value={formData.filiere} onChange={handleChange} required>
          <option value="Génie Logiciel et Systèmes d'Information">Génie Logiciel et Systèmes d'Information</option>
          <option value="Licence Business Computing">Licence Business Computing</option>
        </select>
      </div>

      <div className="form-group">
        <label>Année d'étude :</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="anneeEtude" value="1ère année" checked={formData.anneeEtude === "1ère année"} onChange={handleChange} /> 1ère année
          </label>
          <label>
            <input type="radio" name="anneeEtude" value="2ème année" checked={formData.anneeEtude === "2ème année"} onChange={handleChange} /> 2ème année
          </label>
          <label>
            <input type="radio" name="anneeEtude" value="3ème année" checked={formData.anneeEtude === "3ème année"} onChange={handleChange} /> 3ème année
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input id="groupe" name="groupe" type="text" placeholder="Groupe A , B , C , D" value={formData.groupe} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input id="ville" name="ville" type="text" placeholder="ville" value={formData.ville} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="image">Photo de profil :</label>
        <input id="image" type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <div className="form-actions">
        <button type="submit" className="validbtn">Ajouter</button>
        {onClose && <button type="button" className="closebtn" onClick={onClose}>Annuler</button>}
      </div>
    </form>
  );
}

export default StudentForm;