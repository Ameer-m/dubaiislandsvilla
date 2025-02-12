export default function sitemap() {
    return [
      {
        url: "www.dubaiislandsvilla.com",
        lastModified: new Date().toISOString(), // Convert to string for better compatibility
        changeFrequency: "daily",
        priority: 1,
      },
    ];
  }