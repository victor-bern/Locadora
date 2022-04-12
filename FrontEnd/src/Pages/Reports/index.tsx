import { TableSortLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Aluguel from "../../Models/Aluguel";
import { RentsWithLate } from "../../Services/RentService";

const Reports: React.FC = () => {
    const [rentsLate, setRentsLate] = useState<Aluguel[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const rents = await RentsWithLate()
            setRentsLate(rents);
        }
    }, [])
    return (
        <>
            <TableSortLabel>Alugueis com atraso</TableSortLabel>
            {rentsLate.length > 0 && <>
                {rentsLate.map(item => {
                    return (
                        <p>{item.Cliente.Nome}</p>
                    )
                })}
            </>}
        </>

    )
}

export default Reports;