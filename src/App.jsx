import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './features/store';
import ListeStagiaire, { initialStagiaires } from './components/stagiaire/ListeStagiaire';
import AjouterStagiaire from './components/stagiaire/AjouterStagiaire';
import RechercheStagiaire from './components/stagiaire/RechercheStagiaire';
import ListeEtudiants from './components/etudiant/ListeEtudiants';
import './retro2000s.css';

function AppContent() {
    const [stagiaires, setStagiaires] = useState(initialStagiaires);

    const handleAddStagiaire = (newStagiaire) => {
        setStagiaires([...stagiaires, newStagiaire]);
    };

    const handleDeleteStagiaire = (id) => {
        setStagiaires(stagiaires.filter(s => s.id !== id));
    };

    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Liste Stagiaires</Link> | 
                <Link to="/ajouter-stagiaire">Ajouter Stagiaire</Link> | 
                <Link to="/recherche">Recherche</Link> | 
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<ListeStagiaire stagiaires={stagiaires} onDelete={handleDeleteStagiaire} />} />
                <Route path="/ajouter-stagiaire" element={<AjouterStagiaire onAdd={handleAddStagiaire} />} />
                <Route path="/recherche" element={<RechercheStagiaire stagiaires={stagiaires} />} />
                <Route path="/etudiants" element={<ListeEtudiants />} />
            </Routes>
        </BrowserRouter>
    );
}

function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}

export default App;
