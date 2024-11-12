export default function Loading() {
  return (
    <section className="grid h-full bg-soft-peach dark:bg-baltic-sea">
      <section className="m-auto flex">
        <h1 className="m-auto hidden text-4xl text-baltic-sea dark:text-soft-peach md:inline-block">
          Loading
        </h1>
        <section className="m-auto translate-x-1 translate-y-3">
          <span className="mx-1 inline-block size-3 animate-bounce rounded-full bg-fun-blue" />
          <span
            className="mx-1 inline-block size-3 animate-bounce rounded-full bg-cyan-500"
            style={{ animationDelay: ".16s" }}
          />
          <span
            className="mx-1 inline-block size-3 animate-bounce rounded-full bg-denim-blue"
            style={{ animationDelay: ".32s" }}
          />
        </section>
      </section>
    </section>
  );
}
