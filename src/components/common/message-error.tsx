interface MessageErrorProps {
  title: string;
  message: string;
}

export default function MessageError({ title, message }: MessageErrorProps) {
  return (
    <section className="grid h-full bg-soft-peach dark:bg-baltic-sea">
      <section className="m-auto flex flex-col p-14 text-center">
        <h1 className="m-auto text-2xl font-bold text-fun-blue dark:text-denim-blue md:text-4xl">
          {title}
        </h1>
        <p className="text-baltic-sea dark:text-soft-peach lg:text-lg">
          {message}
        </p>
      </section>
    </section>
  );
}
