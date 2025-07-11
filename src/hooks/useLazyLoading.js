import { useState, useEffect, useRef } from 'react';

const useLazyLoading = (options = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(null);
  const elementRef = useRef(null);
  
  const {
    rootMargin = '50px',
    threshold = 0.1,
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          
          // If triggerOnce is true, disconnect after first trigger
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce]);

  const handleLoad = () => {
    setIsLoaded(true);
    setError(null);
  };

  const handleError = (err) => {
    setError(err);
    setIsLoaded(false);
  };

  return {
    elementRef,
    isLoaded,
    isInView,
    error,
    handleLoad,
    handleError
  };
};

export default useLazyLoading;
