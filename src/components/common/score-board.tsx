interface ScoreBoardProps {
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
}

export default function ScoreBoard({
  score,
  scored_by,
  rank,
  popularity,
  members,
}: ScoreBoardProps) {
  return (
    <section className="flex flex-wrap gap-5">
      <article className="text-center">
        <h4 className="bg-fun-blue px-2 py-0.5 font-bold text-soft-peach mix-blend-darken dark:bg-denim-blue dark:text-baltic-sea dark:mix-blend-screen">
          SCORE
        </h4>
        <p className="text-lg font-bold text-fun-blue dark:text-denim-blue">
          {score ? score : "N/A"}
        </p>
        <p className="text-xs">
          {scored_by !== null ? `${scored_by?.toLocaleString()} users` : "-"}
        </p>
      </article>
      <section className="text-sm sm:text-base">
        <article>
          <p>
            Ranked{" "}
            <b className="text-fun-blue dark:text-denim-blue">
              {rank === null ? "N/A" : `#${rank}`}
            </b>
          </p>
        </article>
        <article>
          <p>
            Popularity{" "}
            <b className="text-fun-blue dark:text-denim-blue">
              {popularity === null ? "N/A" : `#${popularity}`}
            </b>
          </p>
        </article>
        <article>
          <p>
            Members{" "}
            <b className="text-fun-blue dark:text-denim-blue">
              {members === null ? "N/A" : `#${members}`}
            </b>
          </p>
        </article>
      </section>
    </section>
  );
}
