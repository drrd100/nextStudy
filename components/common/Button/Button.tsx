// type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;

// interface Props {
//   onClick: React.MouseEventHandler<HTMLButtonElement>;
// }

// 읽어볼거 https://velog.io/@eenaree/props-onClick-type




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