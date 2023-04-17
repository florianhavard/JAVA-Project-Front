import GenericTable from '../../Table/GenericTable';
import {useEffect, useState} from "react";
import schoolApi from "../../../Services/schoolApi";
import CustomPaginator from '../../CustomPaginator/CustomPaginator';
import {useNavigate} from "react-router-dom";
import Search from "../../Search/Search";
import Title from "../../Title/Title";

function SchoolPage() {
    const [schools, setSchools] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    async function findAll(page = 0) {
        const response = await schoolApi.findAll(page);
        setTotalPages(response.totalPages);

        if (response.content.length > 0 && columns.length === 0) {
            setColumns(
                Object.keys(response.content[0])
                    .filter((key) => key !== "classes")
                    .map((key) => ({ name: key, key: key }))
            );

        }

        return response.content;
    }

    const handlePageChange = async (page) => {
        try {
            const data = await findAll(page);
            setSchools(data);
            data.forEach(s => delete s.classes);
            setCurrentPage(page);
        } catch (error) {
            console.log(error.response);
        }
    };

    const handleSearch = async () => {
        try {
            if (searchTerm) {
                const data = await schoolApi.search(searchTerm);
                setSchools(data);
            } else {
                handlePageChange(0);
            }
        } catch (error) {
            console.error(error.response);
        }
    };

    useEffect(() => {
        handlePageChange(0);
    }, []);

    function handleEdit(id) {
        navigate(`/Schools/edit/${id}`);
    }

    async function handleDelete(id) {
        try {
            await schoolApi.delete(id);
            const newSchools = schools.filter(s => s.id !== id);
            setSchools(newSchools);
        } catch (error) {
            console.error(error.response);
        }
    }

    return (
        <div className="page-container">
            <Title text="Liste des écoles" />
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
            />
            <div className="btn-container d-flex justify-content-end">
                <button className="btn btn-primary" onClick={() => navigate('/Schools/create')}>Ajouter une école</button>
            </div>
        <GenericTable
            columns={columns}
            data={schools}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
        <div className="paginator-container">
                <CustomPaginator currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default SchoolPage;
