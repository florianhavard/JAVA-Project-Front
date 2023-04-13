import GenericTable from "../../Table/GenericTable";

function StudentPage() {
    const students =[{"id":1,"classe":{"id":1,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM1","grade":"6ème"},"firstname":"Emma","lastname":"Dupont"},{"id":2,"classe":{"id":1,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM1","grade":"6ème"},"firstname":"Hugo","lastname":"Martin"}, {"id":3,"classe":{"id":1,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM1","grade":"6ème"},"firstname":"Léa","lastname":"Dubois"}, {"id":4,"classe":{"id":1,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM1","grade":"6ème"},"firstname":"Lucas","lastname":"Garcia"}, {"id":5,"classe":{"id":1,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM1","grade":"6ème"},"firstname":"Louise","lastname":"Fournier"}, {"id":6,"classe":{"id":2,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM2","grade":"5ème"},"firstname":"Arthur","lastname":"Lefebvre"}, {"id":7,"classe":{"id":2,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM2","grade":"5ème"},"firstname":"Camille","lastname":"Moulin"}, {"id":8,"classe":{"id":2,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM2","grade":"5ème"},"firstname":"Enzo","lastname":"Roux"}, {"id":9,"classe":{"id":2,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM2","grade":"5ème"},"firstname":"Inès","lastname":"Perrin"}, {"id":10,"classe":{"id":2,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CM2","grade":"5ème"},"firstname":"Mathis","lastname":"Fontaine"}, {"id":11,"classe":{"id":3,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CP","grade":"7ème"},"firstname":"Charlotte","lastname":"Dumont"}, {"id":12,"classe":{"id":3,"School":{"id":1,"name":"Ecole primaire Les Tilleuls","city":"Paris","type":"primaire"},"name":"CP","grade":"7ème"},"firstname":"Ethan","lastname":"Girard"}]

    const columns = [
        {key: 'id', name: '#'},
        {key: 'classe.name', name: 'Classe'},
        {key: 'firstname', name: 'Prénom'},
        {key: 'lastname', name: 'Nom'}
    ]

    function handleEdit(id) {
        console.log(`Edit school ${id}`);
    }

    function handleDelete(id) {
        console.log(`Delete school ${id}`);
    }

    return <GenericTable data={students} columns={columns} onEdit={handleEdit} onDelate={handleDelete} />;
}
export default StudentPage