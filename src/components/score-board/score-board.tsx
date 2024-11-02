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
    <section className="flex flex-wrap gap-2">
      <article className="text-center">
        <h4 className="background-color-blue text-color-white px-2 py-0.5 font-bold mix-blend-darken dark:mix-blend-screen">
          SCORE
        </h4>
        <p className="text-color-blue text-lg font-bold">
          {score ? score : "N/A"}
        </p>
        <p className="text-xs">
          {scored_by !== null ? `${scored_by} users` : "-"}
        </p>
      </article>
      <section className="px-2 text-sm sm:text-base">
        <article>
          <p>
            Ranked{" "}
            <b className="text-color-blue">
              {rank === null ? "N/A" : `#${rank}`}
            </b>
          </p>
        </article>
        <article>
          <p>
            Popularity{" "}
            <b className="text-color-blue">
              {popularity === null ? "N/A" : `#${popularity}`}
            </b>
          </p>
        </article>
        <article>
          <p>
            Members{" "}
            <b className="text-color-blue">
              {members === null ? "N/A" : `#${members}`}
            </b>
          </p>
        </article>
      </section>
    </section>
  );
}
