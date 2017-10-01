import React from 'react';
import Link from 'gatsby-link';

import Parser from 'html-react-parser';

import cx from 'classnames';
import IFrameEmbed from '../components/IFrameEmbed';

import Bounds from 'meetup-web-components/lib/layout/Bounds';
import Card from 'meetup-web-components/lib/layout/Card';
import Chunk from 'meetup-web-components/lib/layout/Chunk';
import Flex from 'meetup-web-components/lib/layout/Flex';
import FlexItem from 'meetup-web-components/lib/layout/FlexItem';
import Section from 'meetup-web-components/lib/layout/Section';
import Stripe from 'meetup-web-components/lib/layout/Stripe';

class DocsPage extends React.PureComponent {
	constructor(props) {
		super(props);

		this.getSubtopicLinks = this.getSubtopicLinks.bind(this);
	}

	/**
	 * @returns {Array} array of subtopic links
	 * @param {Object} category
	 *
	 * :TODO: Add real notes about this thing
	 */
	getSubtopicLinks(category) {
		const subtopicLinks = category.reduce((acc, curr) => {
			acc[curr.node.fields.subDir] = acc[curr.node.fields.subDir] || [];
			acc[curr.node.fields.subDir].push(curr);

			return acc;
		}, Object.create(null));

		return subtopicLinks;
	}

	render() {
		const {
			data,
			pathContext
		} = this.props;

		const docsContent = data.markdownRemark;
		const docsArr = data.allMarkdownRemark.edges;

		const docCategories = docsArr.reduce((acc, curr) => {
			acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
			acc[curr.node.fields.topLevelDir].push(curr);

			return acc;
		}, Object.create(null));

		// const fullTopics = () => {
		// 	let newObj, subtopicLinks;

		// 	docsArr.reduce((acc, curr) => {
		// 		acc[curr.node.fields.topLevelDir] = acc[curr.node.fields.topLevelDir] || [];
		// 		acc[curr.node.fields.topLevelDir].push(curr);

		// 		if(curr.node.fields.topLevelDir) {
		// 			subtopicLinks = this.getSubtopicLinks(acc[curr.node.fields.topLevelDir]);
		// 			// console.log('-------------acc[curr.node.fields.topLevelDir]-------------');
		// 			// console.log(acc[curr.node.fields.topLevelDir]);
		// 		}

		// 		newObj = acc;
		// 		return newObj; // :TODO: just return `acc`. Only using a new var for debug purposes
		// 	}, Object.create(null));

		// 	console.log('---------subtopicLinks---------');
		// 	console.log(subtopicLinks);

		// 	console.log('---------newObj---------');
		// 	console.log(newObj);
		// 	return newObj;
		// };

		// fullTopics();

		const parserOptions = {
			replace: (domNode) => {
				if (domNode.name === 'iframe') {
					return (
						<IFrameEmbed id={domNode.attribs.id && domNode.attribs.id} src={domNode.attribs.src} />
					);

				}
			}
		};

		const CategoryLinks = (props) => {
			const linkArray = props.category;

			return (
				<ul>
					{
						linkArray.map((link, i) => {
							return (
									<li
										className={cx(
											{['text--bold']: pathContext.slug == link.node.fields.slug}
										)}
									>
										<Chunk>
											<Link to={link.node.fields.slug}>{link.node.frontmatter.title}</Link>
										</Chunk>
									</li>
							);
						})
					}
				</ul>
			);
		};

		return (
			<Bounds className='__docs_bounds--superWide'>

				<Flex
					noGutters
					direction='column'
					switchDirection='medium'
				>

					<FlexItem growFactor={1}>
						<Stripe
							collection
							className='__docs_height--full'
						>
							<Section>
								{
									Object.keys(docCategories).map((category, index) => {
										// this.getSubtopicLinks(docCategories[category]);
										return(
											category == pathContext.topLevelDir &&
												<div>
													<Chunk>
														<h3 className="text--sectionTitle">{category}</h3>
													</Chunk>
													<Chunk>
														<CategoryLinks category={docCategories[category]} />
													</Chunk>
												</div>
										);
									})
								}
							</Section>
						</Stripe>
					</FlexItem>

					<FlexItem growFactor={3}>
						<Stripe
							collection
							className='__docs_height--full'
						>
							<Section
								hasSeparator
								className='border--none'
							>
								<Chunk>
									<Card className='__docs_contentContainer __docs_contentContainer--carded'>
										<Section>
											<Bounds className='runningText __docs_bounds--runningText'>
												<div className='contentContainer'> {/* dangerouslySetInnerHTML={{ __html: docsContent.html }} */}
													{ Parser(docsContent.html, parserOptions) }
												</div>
											</Bounds>
										</Section>
									</Card>
								</Chunk>
							</Section>
						</Stripe>
					</FlexItem>

				</Flex>

			</Bounds>
		);
	}
}

export const query = graphql`
	query docsContentQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
						topLevelDir
						subDir
					}
				}
			}
		}
	}
`;

export default DocsPage;