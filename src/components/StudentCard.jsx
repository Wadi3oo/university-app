import "./StudentCard.css";

function StudentCard(props) {
  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img src={props.image} alt={`Photo de ${props.prenom}`} className="profile-img" />
      <h2>{props.prenom} {props.nom}</h2>
      
      <div className="info">
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Téléphone:</strong> {props.telephone}</p>
        <p><strong>Filière:</strong> {props.filiere}</p>
        <p><strong>Année d'étude:</strong> {props.anneeEtude}</p>
        <p><strong>Groupe:</strong> {props.groupe}</p>
        <p><strong>Ville:</strong> {ville}</p>
      </div>

      <a href={`mailto:${props.email}`} className="btn-contact"> Contacter </a>
    </div>
  );
}

export default StudentCard;