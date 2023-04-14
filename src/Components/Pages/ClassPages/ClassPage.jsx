import { useEffect, useState } from 'react';
import GenericTable from '../../Table/GenericTable';
import classApi from "../../../Services/classApi";
import CustomPaginator from '../../CustomPaginator/CustomPaginator';
import {useNavigate} from "react-router-dom";
import Search from "../../Search/Search";
import studentApi from "../../../Services/studentApi";

function ClassPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [classes, setClasses] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
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
                setClasses(data);
            } catch (error) {
                console.error(error.response);
            }
        } else {
            handlePageChange(currentPage);
        }
    };

    useEffect(() => {
        handlePageChange(0);
    }, []);

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
