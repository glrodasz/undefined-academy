import './Tag.scss';

const Tag = ({ children, link = '#' }) => {
	return (
		<span className='tag'>
			<a href={link}>{children}</a>
		</span>
	);
};

export default Tag;
