import { type MDXComponents } from 'mdx/types'

/**
 * Use MDX components.
 */
export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
  }
}
