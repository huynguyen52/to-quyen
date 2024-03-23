import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const handleChanges = () => setMatches(getMatches(query));
    const matchMedia = window.matchMedia(query);
    handleChanges();
    matchMedia.addEventListener('change', handleChanges);
    return () => matchMedia.removeEventListener('change', handleChanges);
  }, [query]);

  return matches;
};

export default useMediaQuery;
