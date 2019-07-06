import React from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

class NotFoundRoute extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">Uh oh, this page is not available.</h1>
                <div className="page__body">
                  <p>
                    Trying going back to find your way, sorry about this!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundRoute

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
  }
`
