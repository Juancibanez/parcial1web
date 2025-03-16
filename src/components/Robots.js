import Detalle from './Detalle';
import './Robots.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from 'react-intl';

function Robots() {
    
    const APIURL = 'http://localhost:3001';
    const [robots, setRobots] = useState([]);
    const [selected, setSelected] = useState(null);

    async function getRobots() {
        const response = await fetch(`${APIURL}/robots`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        return data
    }

    useEffect(() => {
        getRobots()
        .then(data => {
            setRobots(data);
        })
    }
    , []);
    
    return (
        <div className="robots-container">
            <Table bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th><FormattedMessage id="table.name" /></th>
                        <th><FormattedMessage id="table.model" /></th>
                        <th><FormattedMessage id="table.manufacturer" /></th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map((robot) => {
                        return (
                            <tr key={robot.id} onClick={() => setSelected(robot.id)}>
                                <td>{robot.id}</td>
                                <td>{robot.nombre}</td>
                                <td>{robot.modelo}</td>
                                <td>{robot.empresaFabricante}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {selected && <Detalle id={selected} />}
        </div>
    );
}

export default Robots;