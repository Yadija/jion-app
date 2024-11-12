interface Genre {
  name: string;
}

interface GenreListProps {
  genres: Genre[];
}

export default function GenreList({ genres }: GenreListProps) {
  if (!genres || genres.length === 0) return null;

  return (
    <section className="flex flex-wrap gap-1 text-sm">
      {genres.map((genre, index) => (
        <p
          key={index}
          className="rounded-lg bg-fun-blue px-2 font-bold text-soft-peach mix-blend-darken dark:bg-denim-blue dark:text-baltic-sea dark:mix-blend-screen"
        >
          {genre.name}
        </p>
      ))}
    </section>
  );
}
