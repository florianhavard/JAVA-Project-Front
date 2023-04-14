import GenericTable from "../../Table/GenericTable";
import { useEffect, useState } from "react";
import studentApi from "../../../Services/studentApi";
import CustomPaginator from "../../CustomPaginator/CustomPaginator";

function StudentPage() {
    const [students, setStudents] = useState([]);
    const [columns, setColumns] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    async function findAll(page = 0) {
        const response = await studentApi.findAll(page);
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
            setStudents(data);
            setCurrentPage(page);
        } catch (error) {
            console.error(error.response);
        }
    };

    useEffect(() => {
        handlePageChange(0);
    }, []);

    function handleEdit(id) {
        console.log(`Edit school ${id}`);
    }

    async function handleDelete(id) {
        try {
            await studentApi.delete(id);
            const newStudents = students.filter(s => s.id !== id);
            setStudents(newStudents);
        } catch (error) {
            console.error(error.response);
        }
    }

    return (
        <div className="page-container">
            <GenericTable
                data={students}
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
export default StudentPage;
