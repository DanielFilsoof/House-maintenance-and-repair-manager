import MUITable, { ITable } from '../components/MUITable';
import { Link } from 'react-router-dom';
import CreateBtn from '../components/CreateBtn';

const HousesOverview = () => {
    return (
        <>
            <h1>Managed houses</h1>
            <CreateBtn
                label={'Add house'}
                onClick={() => console.log('add house clicked')} />
            <MUITable titles={tableData.titles} rows={tableData.rows} />
        </>
    );
};

export default HousesOverview;

function createColumns(
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
                <Link to={`/house/${1}`}>Beder huset</Link>,
                21,
                new Date()
            )
        },
        {
            id: 2,
            columns: createColumns(
                <Link to={`/house/${2}`}>Sommerhuset</Link>,
                3,
                new Date(2024, 11, 28)
            )
        }
    ]
};
