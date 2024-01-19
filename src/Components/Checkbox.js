function Checkbox({ children, inputName, labelCol, labelRow, selectCol, selectRow, isChecked, onChangeHandler }) {
    return (
        <>
        <label htmlFor={inputName} style={{gridColumn: labelCol, gridRow: labelRow, textAlign: "center"}}>{children}</label>
        <input
            type="checkbox"
            id={inputName}
            checked={isChecked}
            style={{gridColumn: selectCol, gridRow: selectRow, minWidth: 30}}
            onChange={onChangeHandler}
        />
        </>
    );
}

export default Checkbox;