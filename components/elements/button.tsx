type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, onClick, size = "medium", ...props }: ButtonProps) {
    let buttonSizeClass;

    switch (size) {
        case "small":
            buttonSizeClass = "py-1 px-2 text-sm";
            break;
        case "large":
            buttonSizeClass = "py-3 px-6 text-lg";
            break;
        case "medium":
        default:
            buttonSizeClass = "py-2 px-4";
            break;
    }

    return (
        <button
            className={`disabled:text-gray-100 disabled:opacity-80 
            enabled:hover:bg-gray-800 font-bold rounded-lg drop-shadow-md w-full ${buttonSizeClass} 
            bg-gray-800 text-gray-200 `}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

Button.displayName = "Button";