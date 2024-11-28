// components
import { Skeleton } from "@/components/ui/skeleton";

export default function BannerSliderSkeleton() {
  return (
    <section className="relative top-[calc(var(--navbar-height)_*_-1)] h-[calc(var(--banner-height)_+_var(--navbar-height)_+_150px)] bg-fun-blue dark:bg-denim-blue">
      <section className="absolute top-[var(--navbar-height)] z-[5] w-full">
        <section className="mx-auto h-[40px] w-full max-w-7xl px-5 text-3xl font-bold">
          <Skeleton className="h-9 w-1/2" />
        </section>
      </section>

      <section className="absolute bottom-0 z-[1] w-full">
        <section className="mx-auto flex w-full max-w-7xl justify-end space-x-2 px-5">
          <Skeleton className="size-10" />
          <Skeleton className="size-10" />
        </section>
      </section>

      <section className="flex h-full bg-gradient-to-t from-soft-peach from-10% to-transparent to-[150%] dark:from-baltic-sea">
        <section className="mx-auto mt-[calc(var(--navbar-height)_+_50px)] flex w-full max-w-7xl gap-5 px-5">
          <section className="w-[120px] sm:w-[150px] md:w-[200px]">
            <Skeleton className="h-[85%] w-full" />
          </section>
          <section className="grow">
            <Skeleton className="mb-2 h-8 w-10/12" />
            <Skeleton className="h-5 w-1/4" />

            <section className="my-2">
              <Skeleton className="my-1 h-4 w-full" />
              <Skeleton className="my-1 h-4 w-2/3" />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
