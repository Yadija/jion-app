export default function FetchError() {
  return (
    <section className="grid h-full bg-soft-peach dark:bg-baltic-sea">
      <section className="m-auto flex flex-col p-14 text-center">
        <h1 className="m-auto text-2xl font-bold text-fun-blue dark:text-denim-blue md:text-4xl">
          Failed to Retrieve Data
        </h1>
        <p className="text-baltic-sea dark:text-soft-peach lg:text-lg">
          Data cannot be displayed due to an error on the server or because you
          are not connected to the internet and data is not available in the
          cache
        </p>
        <section>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-md bg-fun-blue px-4 py-2 text-soft-peach dark:bg-denim-blue dark:text-baltic-sea"
          >
            refresh
          </button>
        </section>
      </section>
    </section>
  );
}
