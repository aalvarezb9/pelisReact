import styles from "./Search.module.css";
// import { useEffect, useState } from 'react';

import { FaSearch } from "react-icons/fa"
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    
    // const [searchText, setSearchText] = useState(""); 
    const history = useHistory();

    const query = useQuery();
    const search = query.get("search");

    // useEffect(() => {
        // setSearchText(search || ""); // Si es nulo, que sea comilla vacía
    // }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Que cancele lo que se haga por defecto (recargar la página)
        // searchText !== "" ? history.push(`/?search=${searchText}`): history.push("");
    }

    return (
            <form className={styles.searchContainer} onSubmit={handleSubmit}>
                <div className={styles.searchBox}>
                    <input 
                        className={styles.searchInput} 
                        value={search} 
                        type="text" 
                        placeholder="Title"
                        aria-label="Search Movies"
                        onChange={(e) => {
                            const value = e.target.value;
                            // setSearchText(value);
                            history.push(`/?search=${value}`)
                        }} 
                    />
                    <FaSearch size={20}  className={styles.searchButton} />                   
                </div>
            </form>
    )
}
