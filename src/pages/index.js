import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/includes/Contact'
import Alert from "../components/includes/Alert"


const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const shots = data.allDribbbleShot.nodes

    return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <div className="my-32">
        <h1 className="landingHeader">Featured Works</h1>
        <ol className="space-y-12">
          {posts
            .filter(posts => posts.frontmatter.featured === true)
            .map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const src = post.frontmatter.thumbImage.childImageSharp.fixed.src
              const desc = post.frontmatter.thumbDesc || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <Link to={post.fields.slug} itemProp="url" >
                    <article
                      className="post-list-item border border-gray-300 rounded-lg overflow-hidden text-base transition-all transform duration-150 ease-in hover:-translate-y-1 shadow-sm hover:shadow-xl"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header className="flex flex-col md:flex-row ">

                        <img 
                          src={src}  
                          className="object-contain md:flex-shrink-0"
                          alt="write alt text"></img>

                        <div className="p-8 flex flex-col justify-between">

                          <div>
                            <h2 className="text-xl font-semibold">
                            {title}
                            </h2>
                          
                            <div className="text-lg">
                            {desc}
                            </div>
                          </div>

                          
                        </div>
                        
                      </header>
                    </article>
                  </Link>
                </li>
              )
            })}
        </ol>
          
          <Alert alertHeader="More projects are on the way 🚧" alertContent="These are just a few picks from my portfolio. Some are under NDA as I cannot display here and some are not ready to be published here. But please let me know if you're interested in seeing more. "/ >

        <div className="my-32">
        <h1 className="landingHeader">Personal Projects</h1>
        <ol 
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts
            .filter(posts => posts.frontmatter.featured === false)
            .map(post => {
              const src = post.frontmatter.thumbImage.childImageSharp.fixed.src
              const title = post.frontmatter.title || post.fields.slug
              const desc = post.frontmatter.thumbDesc || post.fields.slug

              return (
                <li key={post.fields.slug}
                    className="border border-gray-300 rounded-lg overflow-hidden">
                  
                  <article
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                      <Link to={post.frontmatter.url} itemProp="url">
                    <header className="relative">

                        <img 
                          src={src} 
                          className="inline w-full" 
                          alt={title}>
                        </img>

                        <div className="p-8 text-base">
                          <div>
                            <h2 className="font-semibold mb-2">
                          
                            {title}
                          
                            </h2>

                            <div className="-mt-1">
                            {desc}
                            </div>
                            
                          </div>
                          <div className="font-bold mt-4 underline ">See Project</div>

                        </div>


                    </header>
                      </Link>
                  </article>
                </li>
              )
            })}
        </ol>
      </div>





        <div className="pb-12">
        <h1 className="landingHeader">Recent Doodles</h1>

 
            <ul className="grid grids-cols-1 md:grid-cols-3 gap-4">
            { shots.map(shot => {
                const shotsCover = shot.cover
                const shotsUrl = shot.url
                return(
                  <li className="relative border border-gray-100  rounded-lg overflow-hidden ">
                    <Link to={shotsUrl} target="_blank">

                  <img className="block" src={shotsCover} alt="dribble post"></img>

                  <div className="absolute bottom-0 bg-dribbble bg-opacity-75  text-white rounded-tr py-1 px-2 text-base text-right">
                    <FontAwesomeIcon icon={['fab', 'dribbble']} />
                  </div>
                    </Link>
                  </li>
                )
            })}
            </ul>

        </div>
      </div>
      <Contact/>
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark (sort: {fields: frontmatter___landingSort, order: ASC}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featured
          url
          thumbDesc 
          thumbImage {
            childImageSharp {
              fixed(quality: 90, fit: CONTAIN) {
                src
              }
            }
          }
        }
      }
    }

    allDribbbleShot (limit: 3) {
      nodes {
        id
        title
        description
        published
        updated
        url
        tags
        cover
        width
        height
        localCover {
          childImageSharp {
            fixed(quality:90, width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    } 
  }
`

