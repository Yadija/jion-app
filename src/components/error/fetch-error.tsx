export default function FetchError() {
  return (
    <section className="background-color-white grid h-screen">
      <section className="m-auto flex flex-col p-14 text-center">
        <h1 className="text-color-blue m-auto text-2xl font-bold md:text-4xl">
          Failed to Retrieve Data
        </h1>
        <p className="text-color-black lg:text-lg">
          Data cannot be displayed due to an error on the server or because you
          are not connected to the internet and data is not available in the
          cache
        </p>
        <section>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="text-color-white background-color-blue mt-4 rounded-md px-4 py-2"
          >
            refresh
          </button>
        </section>
      </section>
    </section>
  );
}
