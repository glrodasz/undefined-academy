import classNames from 'classnames';
import './Paragraph.scss';

const Paragraph = ({ as: Component = 'p', children, isBold = false }) => {
	// const Component = as || 'p' Esta linea hace lo mismo que se esta haciendo en el destructuring, agrega un alias y un valor por defecto;

	return (
		<Component
			className={classNames('paragraph', 'font-poppins-regular', {
				'font-bold': isBold,
			})}
		>
			{children}
		</Component>
	);
};

export default Paragraph;
