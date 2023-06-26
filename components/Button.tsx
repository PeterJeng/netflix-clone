import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    icon: Icon
}) => {
    return ( 
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
                py-3
                text-md
                font-semibold
                ${outline ? 'bg-neutral-100' : 'bg-netflix-red'}
                ${outline ? 'text-black' : 'text-white'}
            `}
        >
             {Icon && (
                <Icon 
                    size={24}
                    className="
                        absolute
                        left-4
                        top-3
                    "
                />                
            )}
            {label}
        </button>
     );
}
 
export default Button;