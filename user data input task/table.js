import { useState } from "react";
import FormInput from "./formInput";
import Info from "./info";
import Table from 'react-bootstrap/Table';

function TableData() {

    const [list, setTable] = useState([])

    const [selected, setSelected] = useState(null);
    const adddata = (obj) => {
        setTable([...list, obj]);
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>{
                    list.map(item => (
                        <tr key={item.id} onClick={() => setSelected(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>

            <FormInput adddata={adddata} /><br></br>
            {selected && <Info data = {selected} ></Info>}

        </div>
    )

}

export default TableData;