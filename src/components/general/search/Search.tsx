import React, {useState} from "react";
import "./Search.scss"
import {FaSearch} from "react-icons/fa";

const Search: React.FC<{placeholder: string}> = ({placeholder}) => {

    const [searchString, setSearchString] = useState<string>("")

    const onChangeSearchString = (event: React.ChangeEvent<HTMLInputElement>) :void => {
        setSearchString(event.target.value)
    }

    const onSearch = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setSearchString("")
        }
    }

    return (
        <div className="search">
            <input value={searchString} onChange={onChangeSearchString} onKeyDown={onSearch} />
            {
                searchString === "" &&
                <div className="search__placeholder">
                    <FaSearch />
                    <span>{placeholder}</span>
                </div>
            }
        </div>
    )
}

export default Search