import styled from "styled-components";

function CheckboxBase({className, onClick}) {
    return (
        <div className={className} onClick = {onClick}>
        </div>
    );
}

const Checkbox = styled(CheckboxBase)`
    height: 12px;
    width: 12px;
    border: 1px solid gray;
    border-radius: 2px;
    cursor: pointer;
    margin: 8px;
`;

export default Checkbox;