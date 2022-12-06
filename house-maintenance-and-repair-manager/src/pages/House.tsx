import {useParams} from "react-router-dom";

const House = () => {
    const houseId = useParams();

    // TODO: fetch house details

    return (
        <></>
    )
}

interface IHouse {
    id: number,
    name: string,
    tasks: ITask[]
}

interface ITask {
    id: number,
    created: Date,
    dueDate: Date,
    title: string,
    description: string
}

export default House;
