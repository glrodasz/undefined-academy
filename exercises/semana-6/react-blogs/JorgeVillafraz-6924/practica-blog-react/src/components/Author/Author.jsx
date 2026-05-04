import Paragraph from '../Paragraph/Paragraph';
import './Author.scss';

const Author = ({
	name,
	avatarUrl = 'https://i.pravatar.cc/300',
	avatarAlt = 'avatar de un autor',
}) => {
	return (
		<div className='author'>
			<img src={avatarUrl} alt={avatarAlt} />
			<Paragraph isBold={true}>{name}</Paragraph>
		</div>
	);
};

export default Author;
