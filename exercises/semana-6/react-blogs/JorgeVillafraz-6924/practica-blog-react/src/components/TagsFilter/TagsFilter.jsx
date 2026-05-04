import './TagsFilter.scss';
import Button from '../Button';
import classNames from 'classnames';
import { useState } from 'react';

const Filter = ({ children, isActive = false, href = '#', onClick }) => {
	return (
		<li className={classNames({ 'is-active-filter': isActive })}>
			<a
				href={href}
				className='filter font-bold font-recursive-italic'
				onClick={e => {
					e.preventDefault();
					onClick(children);
				}}
			>
				{children}
			</a>
		</li>
	);
};

const TagsFilter = ({ filters = [] }) => {
	const [firstFilter] = filters;
	const [activeFilter, setActiveFilter] = useState(firstFilter.name);
	return (
		<nav className='tags-filter'>
			<input className='input' type='search' placeholder='Search' />
			<Button type='secundary'>TAGS</Button>
			<ul className='nav-list filter-list'>
				{filters.map(({ name, href }, index) => {
					return (
						<Filter
							key={index}
							href={href}
							isActive={activeFilter === name}
							onClick={setActiveFilter}
						>
							{name}
						</Filter>
					);
				})}
			</ul>
		</nav>
	);
};

export default TagsFilter;
