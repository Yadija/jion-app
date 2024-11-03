export default function Loading() {
  return (
    <section className="background-color-white grid h-screen">
      <section className="m-auto flex">
        <h1 className="text-color-black m-auto hidden text-4xl md:inline-block">
          Loading
        </h1>
        <section className="m-auto translate-x-1 translate-y-3">
          <span className="loading-ball bg-fun-blue" />
          <span
            className="loading-ball bg-cyan-500"
            style={{ animationDelay: ".16s" }}
          />
          <span
            className="loading-ball bg-denim-blue"
            style={{ animationDelay: ".32s" }}
          />
        </section>
      </section>
    </section>
  );
}
