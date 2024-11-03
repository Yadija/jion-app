export default function NotFoundPage() {
  document.title = "Not Found";

  return (
    <section className="grid h-screen">
      <h1 className="text-color-black m-auto text-4xl">
        Not Found <span className="text-color-blue font-bold">404</span>
      </h1>
    </section>
  );
}
