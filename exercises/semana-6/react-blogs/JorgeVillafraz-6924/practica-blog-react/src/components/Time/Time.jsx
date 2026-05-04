import Paragraph from '../Paragraph';
import humanize from '../../utils/humanize';

const Time = ({ children }) => {
	return (
		<Paragraph>
			<time dateTime={children}>{humanize(children)}</time>
		</Paragraph>
	);
};

export default Time;
