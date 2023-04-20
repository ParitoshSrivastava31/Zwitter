interface InputProps {
    placeholder: string;
    value: string;
    type?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange    
}) => {
    return (
        <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`
        w-full
        p-4
        text-lg
        rounded-full
        border-2
        border-neutral-800
        text-white
        focus:outline-none
        focus:border-sky-500
        bg-black
        disabled:bg-neutral-800
        disabled:cursor-not-allowed
        disabled:opacity-70
        `}
        />
    );
};
export default Input;
