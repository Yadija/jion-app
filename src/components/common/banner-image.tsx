interface BannerImageProps {
  image: string;
}

export default function BannerImage({ image }: BannerImageProps) {
  return (
    <>
      <section className="fixed top-0 block w-full">
        <section
          className="h-[calc(var(--banner-height)_+_var(--navbar-height))] w-full bg-cover bg-[center_top_30%] blur-[1px]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </section>
      <section className="fixed top-0 h-[calc(var(--banner-height)_+_var(--navbar-height))] w-full bg-gradient-to-br from-zinc-300 to-transparent bg-fixed dark:bg-gradient-to-br dark:from-slate-800 dark:to-transparent" />
      <section className="absolute bottom-0 top-[var(--banner-height)] w-full bg-soft-peach dark:bg-baltic-sea" />
    </>
  );
}
