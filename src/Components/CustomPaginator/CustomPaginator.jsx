import { Pagination } from "react-bootstrap";

export default function CustomPaginator({currentPage, totalPages, handlePageChange}) {
    const renderPaginationItems = () => {
        const items = [];
        for (let i = 0; i < totalPages; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i + 1}
                </Pagination.Item>
            );
        }
        return items;
    };

    return (
        <Pagination className="mt-3 justify-content-center">
            {renderPaginationItems()}
        </Pagination>
    );
}