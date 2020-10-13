import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"


const StoryPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext
  const hero = post.frontmatter.hero.publicURL


  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="story-post py-8"
        itemScope
        itemType="http://schema.org/Article"
      >
        <img className="rounded-lg block" src={hero} alt="" />

        <header className="mt-12">
          <h1 className="text-3xl -mb-2">{post.frontmatter.title}</h1>

          <h2 className="text-3xl ">{post.frontmatter.subtitle}</h2>
        </header>

        <div className="summaryCard mt-12">

          <div><div className="font-semibold text-lg">Summary</div>
          
          
          
          <ol className="list-disc list-inside my-4 text-base ">
          {post.frontmatter.quickGlance.map(value => {
          return <li className=""> {value} </li>
          })}
          </ol></div>



          {/* tag list */}
          <ol className="flex flex-col md:flex-row flex-wrap ">
            {post.frontmatter.roles.map(value => {
              return <li className="tags">{value}</li>
            })}
          </ol>
        </div>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="markdown mt-24"
        />
      
      </article>

      <nav className="p-12 bg-gray-100 border border-gray-300 md:rounded-lg text-gray-700">

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >


          <li className="smallButton">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <img src={previous.thumbSrc} alt=""/>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>

          <li className="smallButton">
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}


export default StoryPostTemplate

export const pageQuery = graphql`
  query StoryPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark( frontmatter: {featured: {eq: true}}, fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featured
        url
        subtitle
        roles
        quickGlance
        hero {
          publicURL
        }
        thumbImage {
          childImageSharp {
            fixed(fit: CONTAIN) {
              src
            }
          }
        }
      }
    }
  }
`
