function FilterBar() { 
    return (
        <div className="filter-bar">
            {/* <input type="text" placeholder="Pesquisar por marca, modelo ou ano" /> */}
            <select>
                <option value="">Todos os anos</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    )
}

export default FilterBar;