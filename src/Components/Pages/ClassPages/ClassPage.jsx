import { useEffect, useState } from 'react';
import GenericTable from '../../Table/GenericTable';
import classApi from "../../../Services/classApi";
import CustomPaginator from '../../CustomPaginator/CustomPaginator';
import {useNavigate} from "react-router-dom";
import Search from "../../Search/Search";
import studentApi from "../../../Services/studentApi";
import Title from "../../Title/Title";
import schoolApi from "../../../Services/schoolApi";

function ClassPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [classes, setClasses] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [schools, setSchools] = useState([]);
    const [selectedSchoolId, setSelectedSchoolId] = useState(null);
    const navigate = useNavigate();

    async function findAll(page = 0) {
        const response = await classApi.findAll(page);
        setTotalPages(response.totalPages);

        if (response.content.length > 0 && columns.length === 0) {
            setColumns(
                Object.keys(response.content[0]).map((key) => ({ name: key, key: key }))
            );
        }

        return response.content;
    }

    const handleFilterBySchool = async (event) => {
        const selectedSchoolId = event.target.value;
        setSelectedSchoolId(selectedSchoolId);
        try {
            const data = await classApi.findBySchool(selectedSchoolId);
            setClasses(data.content);
            setTotalPages(data.totalPages);
            setCurrentPage(0);
        } catch (error) {
            console.error(error.response);
        }
    };

    const handlePageChange = async (page) => {
        try {
            const data = await findAll(page);
            setClasses(data);
            setCurrentPage(page);
        } catch (error) {
            console.log(error.response);
        }
    };

    const handleSearch = async () => {
        if (searchTerm) {
            try {
                const data = await classApi.search(searchTerm);
                setClasses(data.content);
                setTotalPages(data.totalPages);
                setCurrentPage(0);
            } catch (error) {
                console.error(error.response);
            }
        } else {
            handlePageChange(currentPage);
        }
    };

    useEffect(() => {
        async function fetchSchools() {
            try {
                const data = await schoolApi.findAll();
                setSchools(data.content);
            } catch (error) {
                console.error(error.response);
            }
        }
        fetchSchools();
    }, []);

    useEffect(() => {
        handlePageChange(0);
    }, []);

    useEffect(() => {
        handleFilterBySchool(selectedSchoolId);
    }, [selectedSchoolId]);


    function handleEdit(id) {
        navigate(`/Classes/edit/${id}`);
    }

    async function handleDelete(id) {
        try {
            await classApi.delete(id);
            const newClasses = classes.filter(c => c.id !== id);
            setClasses(newClasses);
        } catch (error) {
            console.error(error.response);
        }
    }

    return (
        <div className="page-container">
            <Title text="Liste des classes" />
            <div className="form-group">
                <label htmlFor="school-select">Filtrer par école :</label>
                <select id="school-select" className="form-control" onChange={handleFilterBySchool}>
                    <option value="">Toutes les écoles</option>
                    {schools.map(school => (
                        <option key={school.id} value={school.id}>{school.name}</option>
                    ))}
                </select>
            </div>
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
            />
            <div className="btn-container d-flex justify-content-end">
                <button className="btn btn-primary" onClick={() => navigate('/Classes/create')}>Ajouter une classe</button>
            </div>
            <GenericTable
                data={classes}
                columns={columns}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <div className="paginator-container">
                <CustomPaginator currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default ClassPage;
