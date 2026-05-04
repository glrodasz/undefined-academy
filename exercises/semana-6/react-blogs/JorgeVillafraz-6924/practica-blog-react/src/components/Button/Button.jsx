import classNames from 'classnames';
import './Button.scss';

const Button = ({ children, type, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={classNames('button', { [`button-${type}`]: type })}
		>
			{children}
		</button>
	);
};

export default Button;
