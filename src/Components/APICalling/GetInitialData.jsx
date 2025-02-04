
export const fetchAPI = async (url, page = 1, setPrevUrl, setNextUrl, setPageNumber, setPokemon, setLoading) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      setPrevUrl(data.previous);
      setNextUrl(data.next);
      setPageNumber(page);
  
      const detailedFetchData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        
        return data;
      });
  
      const detailedResponses = await Promise.all(detailedFetchData);
      setPokemon(detailedResponses);
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
    }
  };
  