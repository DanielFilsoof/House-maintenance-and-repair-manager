import { Link, useParams } from 'react-router-dom';
import MUITable, { ITable, ITableRow } from '../components/MUITable';

const House = () => {
    const params = useParams();

    // TODO: fetch house details
    const task1: ITask = {
        id: 1,
        created: new Date(),
        dueDate: new Date(),
        title: 'rottespær',
        description: 'rottegitter ved mellemrum langs terrassen'
    };
    const house: IHouse = {
        id: Number(params.id),
        name: 'beder hus',
        tasks: [task1]
    };

    const titles: string[] = ['Title', 'Description', 'Due date'];
    const rows: ITableRow[] = house.tasks.map((task) => {
        return {
            id: 1,
            columns: createColumns(
                <Link to={`/task/${1}`}>{task.title}</Link>,
                task.description,
                task.dueDate
            )
        };
    });

    return (
        <div className="house-container">
            <h1>{`${house.name}: Tasks`}</h1>
            <MUITable titles={titles} rows={rows} />
        </div>
    );
};

interface IHouse {
    id: number;
    name: string;
    tasks: ITask[];
}

interface ITask {
    id: number;
    created: Date;
    dueDate: Date;
    title: string;
    description: string;
}

export default House;

function createColumns(
    taskTitle: JSX.Element,
    description: string,
    dueDate: Date
): any[] {
    // TODO truncate description at X characters and add '(...)'
    const dueDateFormatted = `${dueDate.getMonth()}/${dueDate.getDay()}/${dueDate.getFullYear()}`;
    return [taskTitle, description, dueDateFormatted];
}
