import { useSelector, useDispatch } from 'react-redux';
import { removeStudent } from '../../features/studentSlice';

function ListeEtudiants() {
    const students = useSelector(state => state.students.studentList);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeStudent({ id }));
    };

    return (
        <div>
            <h2>Liste des Étudiants</h2>
            {students.length === 0 ? (
                <p>Aucun étudiant trouvé.</p>
            ) : (
                <ul>
                    {students.map(student => (
                        <li key={student.id}>
                            <strong>{student.name}</strong>
                            {student.email && <span> - {student.email}</span>}
                            <button 
                                onClick={() => handleDelete(student.id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListeEtudiants;