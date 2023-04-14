const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
    return (
        <div className="search-container d-flex justify-content-between">
            <input
                type="text"
                className="form-control"
                placeholder="Rechercher"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-secondary" onClick={handleSearch}>
                Rechercher
            </button>
        </div>
    );
};

export default Search;