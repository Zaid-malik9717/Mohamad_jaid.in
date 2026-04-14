import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mohamadjaid.in'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${baseUrl}/#about`, lastModified, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/#projects`, lastModified, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/#live-links`, lastModified, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/#experience`, lastModified, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/#certifications`, lastModified, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/#education`, lastModified, priority: 0.7, changeFrequency: 'yearly' },
    { url: `${baseUrl}/#contact`, lastModified, priority: 0.6, changeFrequency: 'yearly' },
  ]
}
