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
                    if(!option.available) {
                        return null;
                    }
                    return (
                        <option
                            key={option.text}
                            value={option.text}
                        >
                            {option.text}
                        </option>
                    );
                })}
            </select>
        </>
    )
}

export default SelectBar;