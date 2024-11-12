export default function NotFound() {
  document.title = "Not Found";

  return (
    <section className="grid h-full">
      <h1 className="m-auto text-4xl text-baltic-sea dark:text-soft-peach">
        Not Found{" "}
        <span className="font-bold text-fun-blue dark:text-denim-blue">
          404
        </span>
      </h1>
    </section>
  );
}
