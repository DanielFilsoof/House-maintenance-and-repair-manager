import MUITable, {ITable, ITableRow} from "../components/MUITable";
import {Link} from "react-router-dom";

const HousesOverview = () => {

    return (
        <>
            <h1>Managed houses</h1>
            <MUITable titles={tableData.titles} rows={tableData.rows} />
        </>
    )
}

export default HousesOverview;

function createColumns (
    houseName: JSX.Element,
    openTasks: number,
    nextDeadline: Date
) {
    const date = `${nextDeadline.getMonth()}/${nextDeadline.getDay()}/${nextDeadline.getFullYear()}`;
    return [houseName, openTasks, date];
}

const tableData: ITable = {
        titles: ['Name', 'Number of open tasks', 'Next deadline'],
        rows: [
            {
                id: 1,
                columns: createColumns(
                    <Link to={`/house/${1}`}>Beder huset</Link>, 21, new Date()
                )
            },
            {
                id: 2,
                columns: createColumns(
                    <Link to={`/house/${2}`}>Sommerhuset</Link>, 3, new Date(2024, 11, 28)
                )
            }

        ]
};
