function SelectBar({ children, inputName, display, labelCol, labelRow, selectCol, selectRow, onChangeHandler, options, isDisabled }) {
    return (
        <>
            <label htmlFor={inputName} style={{gridColumn: labelCol, gridRow: labelRow}}>{children}</label>
            <select
                id={inputName}
                value={display}
                style={{gridColumn: selectCol, gridRow: selectRow}}
                onChange={onChangeHandler}
                disabled={isDisabled}
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