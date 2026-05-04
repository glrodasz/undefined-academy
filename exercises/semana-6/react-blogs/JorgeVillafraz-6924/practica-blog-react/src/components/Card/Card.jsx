import './Card.scss';

import Author from '../Author';
import Tag from '../Tag';
import classNames from 'classnames';
import Paragraph from '../Paragraph/Paragraph';
import Time from '../Time/Time';

const Card = ({
	unsplashId,
	unsplashAlt,
	tags,
	title,
	date,
	extract,
	author,
	readTime,
	isGray = false,
}) => {
	return (
		<article className={classNames('card', { gray: isGray })}>
			<section>
				<header>
					<img
						src={`https://source.unsplash.com/${unsplashId}`}
						alt={unsplashAlt}
					/>
					<div className='card-tags'>
						{tags?.map((tag, index) => (
							<Tag key={index}>{tag}</Tag>
						))}
					</div>
					<h2 className='heading-sm font-poppins-regular font-bold'>{title}</h2>
					<Time>{date}</Time>
				</header>
				<Paragraph>{extract}</Paragraph>
			</section>
			<footer>
				<Author name={author} />
				<Paragraph as='span'>{readTime}</Paragraph>
			</footer>
		</article>
	);
};

export default Card;
