import { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImagePreviewProps {
  title: string;
  image: string;
  largeImage: string;
}

export default function ImagePreview({
  title,
  image,
  largeImage,
}: ImagePreviewProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <section className="group relative hover:cursor-pointer">
          <img
            className="rounded-md bg-gradient-to-tl from-gray-300 to-white shadow-sm md:w-[225px]"
            src={image}
            alt={title}
          />

          <section className="absolute inset-0 flex items-center justify-center rounded bg-white/25 p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <BsArrowsAngleExpand size={50} color="white" />
          </section>
        </section>
      </DialogTrigger>
      <DialogContent
        className="border-none bg-transparent p-4 shadow-none md:p-10"
        onClick={() => setOpen(false)}
      >
        <DialogHeader className="">
          <DialogTitle hidden>{title}</DialogTitle>
          <img src={largeImage} alt={title} className="rounded-md" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
