// components
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSliderSkeleton() {
  return (
    <section className="mx-auto my-2 max-w-7xl px-5">
      <section className="flex justify-between">
        <Skeleton className="h-7 w-1/2" />
        <Skeleton className="h-7 w-1/6" />
      </section>

      <section className="flex gap-5 overflow-x-hidden">
        {Array.from({ length: 11 }).map((_, index) => (
          <section key={index}>
            <Skeleton className="my-2 h-[200px] min-w-[130px] sm:h-[220px] sm:min-w-[160px] md:h-[260px] md:min-w-[200px]" />
            <section className="h-12">
              <Skeleton className="w-4/5 py-2" />
              <Skeleton className="mt-2 w-2/5 py-2" />
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
