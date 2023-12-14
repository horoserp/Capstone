function Checkbox({ children, inputName, isChecked, onChangeHandler }) {
    return (
        <>
        <label htmlFor={inputName}>{children}</label>
        <input
            type="checkbox"
            id={inputName}
            checked={isChecked}
            onChange={onChangeHandler}
        />
        </>
    );
}

export default Checkbox;