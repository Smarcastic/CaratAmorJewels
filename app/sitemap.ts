import type { MetadataRoute } from 'next';
import { PIECES, COLLECTIONS } from '@/content/products';

const SITE_URL = 'https://caratamorjewels.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/collections', '/lab-grown', '/maison', '/consultation'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const collectionRoutes = COLLECTIONS.map((c) => ({
    url: `${SITE_URL}/collections/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const pieceRoutes = PIECES.map((p) => ({
    url: `${SITE_URL}/piece/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...collectionRoutes, ...pieceRoutes];
}
