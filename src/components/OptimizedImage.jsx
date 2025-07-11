import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useLazyLoading from '../hooks/useLazyLoading';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholder,
  width,
  height,
  priority = false,
  quality = 75,
  onLoad = () => {},
  onError = () => {},
  rootMargin = '50px',
  sizes = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(priority ? src : '');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const { elementRef, isInView, handleLoad, handleError } = useLazyLoading({
    rootMargin,
    triggerOnce: true
  });

  // Create WebP version if supported
  const createWebPUrl = (originalSrc) => {
    if (typeof originalSrc !== 'string') return originalSrc;
    
    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    if (supportsWebP() && originalSrc.match(/\.(jpg|jpeg|png)$/i)) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    
    return originalSrc;
  };

  // Load image when in view
  useEffect(() => {
    if (isInView && !imgSrc && !priority) {
      setImgSrc(src);
    }
  }, [isInView, src, imgSrc, priority]);

  const handleImageLoad = (e) => {
    setIsLoading(false);
    handleLoad();
    onLoad(e);
  };

  const handleImageError = (e) => {
    setHasError(true);
    setIsLoading(false);
    handleError(e);
    onError(e);
  };

  // Generate placeholder SVG
  const generatePlaceholder = (w = 400, h = 300) => {
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#f0f0f0"/>
        <circle cx="${w/2}" cy="${h/2}" r="20" fill="#d0d0d0"/>
        <text x="${w/2}" y="${h/2 + 5}" font-family="Arial" font-size="14" fill="#aaa" text-anchor="middle">Loading...</text>
      </svg>
    `)}`;
  };

  const placeholderSrc = placeholder || generatePlaceholder(width, height);

  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Placeholder/Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="animate-pulse space-y-4 w-full">
            <div className="bg-gray-300 h-full w-full rounded"></div>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Main Image */}
      {(imgSrc || priority) && (
        <motion.img
          src={imgSrc || src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoading ? 0 : 1,
            scale: isLoading ? 1.05 : 1
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
