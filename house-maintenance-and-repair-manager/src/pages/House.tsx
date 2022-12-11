import {useParams} from "react-router-dom";

const House = () => {
    const params = useParams();

    // TODO: fetch house details
    console.log(params.id)
    return (
        <div className='house-container'>

        </div>
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
