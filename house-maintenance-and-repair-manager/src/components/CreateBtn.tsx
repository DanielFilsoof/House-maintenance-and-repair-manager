import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classes from './createBtn.module.css';

const CreateBtn = (props: ICreateButton) => {
    const {label, onClick} = props;

    return (
        <button
            className={classes.createButton}
            onClick={onClick}>
            <FontAwesomeIcon className={classes.icon} icon={faPlus} />
            {label}
        </button>
    )
}

export default CreateBtn;

interface ICreateButton {
    label: string,
    onClick: () => void
}
