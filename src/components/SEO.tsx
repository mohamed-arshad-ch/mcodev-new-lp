import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://www.mcodevbytes.in/mcodev-logo-1.png",
  ogType = "website",
  canonical
}: SEOProps) => {
  const siteUrl = "https://www.mcodevbytes.in";

  return (
    <Helmet>
      <title>{`${title} | MCODEV Bytes`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || siteUrl} />
    </Helmet>
  );
};

export default SEO; 