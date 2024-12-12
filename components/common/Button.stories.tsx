interface Props {
    content: string;
    attr?: {
        type: "button";
        style?: object;
        title?: string;
    }
    className? :string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button = ({ attr, content,className, onClick }: Props) => {
    return (
        <button className={className} {...attr} onClick={onClick}>{content}</button>
    )
}


export default Button;