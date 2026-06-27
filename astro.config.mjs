// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/**
 * Wrap every <table> in <div class="table-wrap"> so wide tables scroll
 * horizontally inside their own box instead of breaking the page layout.
 */
function rehypeTableWrap() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        walk(child);
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-wrap'] },
            children: [child],
          };
        }
        return child;
      });
    };
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  // Static output by default — produces a fully static site in ./dist
  site: 'https://cyber-law-notes.onrender.com',
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [rehypeTableWrap],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
