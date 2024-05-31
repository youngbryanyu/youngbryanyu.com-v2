import glob from 'fast-glob'

/**
 * Interface for an article.
 */
interface Article {
  title: string
  description: string
  author: string
  date: string
}

/**
 * Interface for an article with slug.
 */
export interface ArticleWithSlug extends Article {
  slug: string
}

/**
 * Imports an article from a file.
 */
async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

/**
 * Gets all articles in the articles directory.
 */
export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
