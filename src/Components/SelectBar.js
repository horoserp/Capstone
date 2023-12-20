function SelectBar({ children, inputName, display, onChangeHandler, options }) {
    return (
        <>
            <label htmlFor={inputName}>{children}</label>
            <select
                id={inputName}
                value={display}
                onChange={onChangeHandler}
            >
                {options.map((option) => {
                    return (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    );
                })}
            </select>
        </>
    )
}

export default SelectBar;