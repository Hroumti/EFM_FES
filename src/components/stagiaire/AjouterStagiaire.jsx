import { useState } from 'react';

function AjouterStagiaire({ onAdd }) {
    const [form, setForm] = useState({ nom: '', prenom: '', ville: '', fil: '', photo: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.nom && form.prenom) {
            onAdd({ id: Date.now(), ...form });
            setForm({ nom: '', prenom: '', ville: '', fil: '', photo: '' });
        }
    };

    return (
        <div>
            <h2>Ajouter un Stagiaire</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom: </label>
                    <input value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} />
                </div>
                <div>
                    <label>Prénom: </label>
                    <input value={form.prenom} onChange={e => setForm({ ...form, prenom: e.target.value })} />
                </div>
                <div>
                    <label>Ville: </label>
                    <input value={form.ville} onChange={e => setForm({ ...form, ville: e.target.value })} />
                </div>
                <div>
                    <label>Filière: </label>
                    <input value={form.fil} onChange={e => setForm({ ...form, fil: e.target.value })} />
                </div>
                <div>
                    <label>Photo: </label>
                    <input value={form.photo} onChange={e => setForm({ ...form, photo: e.target.value })} />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AjouterStagiaire;
