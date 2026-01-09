export const initialStagiaires = [
    { id: 1, nom: "Alami", prenom: "Ahmed", ville: "Casablanca", fil: "DEV", photo: "photo1.jpg" },
    { id: 2, nom: "Benani", prenom: "Sara", ville: "Rabat", fil: "ID", photo: "photo2.jpg" },
    { id: 3, nom: "Chraibi", prenom: "Youssef", ville: "Fes", fil: "DEV", photo: "photo3.jpg" }
];

function ListeStagiaire({ stagiaires, onDelete }) {
    return (
        <div>
            <h2>Liste des Stagiaires</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Ville</th>
                        <th>Filière</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stagiaires.map(s => (
                        <tr key={s.id} data-testid="stagiaire-item">
                            <td>{s.nom}</td>
                            <td>{s.prenom}</td>
                            <td>{s.ville}</td>
                            <td>{s.fil}</td>
                            <td>{s.photo}</td>
                            <td><button onClick={() => onDelete(s.id)}>Supprimer</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListeStagiaire;
