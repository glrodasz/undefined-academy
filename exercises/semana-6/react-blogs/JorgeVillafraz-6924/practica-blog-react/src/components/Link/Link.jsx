import classNames from 'classnames';
import './Link.scss';

const Link = ({ children, href, isActive = false }) => {
	return (
		<a
			href={href}
			className={classNames(
				'text-link',
				'text-link-md',
				'font-poppins-regular',
				{ 'is-active': isActive },
			)}
		>
			{children}
		</a>
	);
};

export default Link;
