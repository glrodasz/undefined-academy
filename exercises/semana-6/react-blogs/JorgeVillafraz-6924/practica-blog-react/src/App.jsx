import Card from './components/Card';
import Button from './components/Button';
import Link from './components/Link';
import TagsFilter from './components/TagsFilter';

import articles from './data/articles.json';
import filters from './data/filters.json';

// TODO:falta hacer el componente heading

function App() {
	let cardColorFlag = false;
	return (
		<>
			<header className='main-navbar'>
				<img src='src/images/logos/logo.svg' alt='logo' />
				<nav>
					<ul className='nav-list'>
						<li>
							<Link href='#' isActive={true}>
								About
							</Link>
						</li>
						<li>
							<Link href='#'>Articles</Link>
						</li>
						<li>
							<Button type='primary'>Join us</Button>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<section className='presentation'>
					<h1 className='font-recursive-italic heading-xxl font-bold'>
						Afterlife Devs
					</h1>
					<p className='font-poppins-regular heading-lm font-bold'>
						Bla, bla, bla, bla...
					</p>
				</section>
				<section className='post-list-container'>
					<TagsFilter filters={filters}></TagsFilter>
					<div className='post-list'>
						{articles.map((article, index) => {
							if (index % 3 === 0) {
								cardColorFlag = !cardColorFlag;
							}

							return <Card key={index} {...article} isGray={cardColorFlag} />;
						})}
					</div>
				</section>
				<section>Discord</section>
			</main>
			<footer>FOOTER</footer>
		</>
	);
}

export default App;
