import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
  <div className="content__inner">
        <div className="post-single">
          <div className="post-single__inner">

          <div className="post-single__date">
              <time>
                {moment(post.frontmatter.date).format('MMMM YYYY')}
              </time>
            <span className="post__meta-divider" />
          <span className="post-single__footer">
            TAGGED: <div style={{display: 'inline-block'}}>
            {tagsBlock}
            </div>
            </span>
            </div>
            
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            
            <br/>
            
            <div
              className="post-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />



            <p className="post-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
</div>


    )
  }
}

export default PostTemplateDetails
