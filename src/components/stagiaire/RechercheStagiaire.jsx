import { useState } from 'react';

function RechercheStagiaire({ stagiaires }) {
    const [filters, setFilters] = useState({ nom: '', prenom: '', fil: '' });

    const filteredStagiaires = stagiaires.filter(s => {
        const matchNom = s.nom.toLowerCase().includes(filters.nom.toLowerCase());
        const matchPrenom = s.prenom.toLowerCase().includes(filters.prenom.toLowerCase());
        const matchFil = s.fil.toLowerCase().includes(filters.fil.toLowerCase());
        return matchNom && matchPrenom && matchFil;
    });

    return (
        <div>
            <h2>Recherche Stagiaire</h2>
            <div>
                <label>Nom: </label>
                <input value={filters.nom} onChange={e => setFilters({ ...filters, nom: e.target.value })} />
            </div>
            <div>
                <label>Prénom: </label>
                <input value={filters.prenom} onChange={e => setFilters({ ...filters, prenom: e.target.value })} />
            </div>
            <div>
                <label>Filière: </label>
                <input value={filters.fil} onChange={e => setFilters({ ...filters, fil: e.target.value })} />
            </div>
            <h3>Résultats ({filteredStagiaires.length})</h3>
            <ul>
                {filteredStagiaires.map(s => (
                    <li key={s.id}>{s.nom} {s.prenom} - {s.fil} - {s.ville}</li>
                ))}
            </ul>
        </div>
    );
}

export default RechercheStagiaire;
