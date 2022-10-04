import React from "react";
import "./Search.scss"
import {FaSearch} from "react-icons/fa";

interface ISearch {
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<ISearch> = ({placeholder, onChange, value}) => {

    const onSearch = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
        }
    }

    return (
        <div className="search">
            <input name="keyword" value={value} onChange={onChange} onKeyDown={onSearch} />
            {
                value === "" &&
                <div className="search__placeholder">
                    <FaSearch />
                    <span>{placeholder}</span>
                </div>
            }
        </div>
    )
}

export default Search