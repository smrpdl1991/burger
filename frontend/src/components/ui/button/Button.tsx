import './button.scss';

interface buttonTypes{
  variant : 'solid' | 'outline',
  colorVariant: 'primary' | 'secondary'| 'ternary',
}
export const Button: React.FC<buttonTypes & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant,
  colorVariant,
  ...props
}) => {
  const buttonClassName = `btn ${variant} ${colorVariant}`;
  return (
    <button  className={buttonClassName} {...props}>Button</button>
  )
}
