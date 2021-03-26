import React from 'react'

const viewTable = (props) => {
    return(
                    <tr>
                        <td>{props.rn}</td>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                    </tr>
    );
};

export default viewTable;



