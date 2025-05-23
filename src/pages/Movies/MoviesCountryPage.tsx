import { useEffect, useState, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMoviesByCountry } from "../../queries/moviesQueries";

import { MovieCard } from "../../components/MovieCard/MovieCard";
import { SmallLoadingComponent } from "../../components/Loading/SmallLoadingComponent";

export const MoviesCountryPage = () => {
  const { country } = useParams<{ country: string }>();
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const countryLanguageMap = [
    { code: "es", language: "es" },
    { code: "fr", language: "fr" },
    { code: "us", language: "en" },
    { code: "cn", language: "zh" },
    { code: "kr", language: "ko" },
    { code: "jp", language: "ja" },
    { code: "it", language: "it" },
  ];

  const language = countryLanguageMap.find((c) => c.code === country)?.language;

  const fetchMovies = async ({ pageParam }: { pageParam: number }) => {
    return await fetchMoviesByCountry(country!, pageParam, language!);
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["movies", country, "-", language],
    queryFn: fetchMovies,
    initialPageParam: 1,
    enabled: !!country,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages && lastPage.results.length > 0) {
        return lastPage.page + 1;
      }
      return null;
    },
  });

  const movies = data?.pages.flatMap((movies) => movies.results) || [];

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        setLoading(true);
        fetchNextPage().finally(() => setLoading(false));
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    setInitialLoad(true);
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (initialLoad && hasNextPage) {
      fetchNextPage().then(() => fetchNextPage());
      setInitialLoad(false);
    }
  }, [initialLoad, hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (loadMoreRef.current) {
      observerRef.current = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
      });
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current && loadMoreRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observerRef.current.unobserve(loadMoreRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-wrap py-4 md:gap-x-2 gap-y-8 px-14">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id + "-" + country + "-" + language + "-" + index}
          movie={movie}
        />
      ))}
      <div
        ref={loadMoreRef}
        className={`w-full h-10 flex justify-center items-center ${
          hasNextPage && !initialLoad ? "" : "hidden"
        }`}
      >
        {loading ? <SmallLoadingComponent /> : null}
      </div>
    </div>
  );
};
