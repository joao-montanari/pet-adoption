import './style.sass';

export interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button = ({
    label,
    onClick
}: ButtonProps) => {
    return (
        <button 
            className='master-container-button-component'
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;