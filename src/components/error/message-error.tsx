interface MessageErrorProps {
  title: string;
  message: string;
}

export default function MessageError({ title, message }: MessageErrorProps) {
  return (
    <section className="background-color-white grid h-screen">
      <section className="m-auto flex flex-col p-14 text-center">
        <h1 className="text-color-blue m-auto text-2xl font-bold md:text-4xl">
          {title}
        </h1>
        <p className="text-color-black lg:text-lg">{message}</p>
      </section>
    </section>
  );
}
