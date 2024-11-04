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
          className="background-color-blue text-color-white rounded-lg px-2 font-bold mix-blend-darken dark:mix-blend-screen"
        >
          {genre.name}
        </p>
      ))}
    </section>
  );
}
