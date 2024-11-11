import { Search } from "lucide-react";
import { useQueryState } from "nuqs";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ButtonSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [genre, setGenre] = useState("anime");

  const { pathname } = useLocation();
  const [, setSearch] = useQueryState("search", { defaultValue: "" });

  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setOpen(false);

    if (pathname === `/${genre}`) {
      setSearch(value);
      return;
    }

    navigate(`/${genre}?search=${value}`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant="ghost"
          size="icon"
          className="hover:text-fun-blue dark:hover:text-denim-blue"
        >
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="inset-x-0 top-[10px] mx-auto w-[95%] translate-x-0 translate-y-0 rounded-md p-0 md:left-auto md:right-[75px]"
        hideClose
      >
        <DialogTitle hidden />
        <DialogDescription hidden />
        <form className="flex items-center justify-between" onSubmit={onSubmit}>
          <Input
            placeholder="Search ..."
            className="w-full rounded-r-none px-4 py-2 focus-visible:ring-1 focus-visible:ring-offset-0"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <Select defaultValue={genre} onValueChange={setGenre}>
            <SelectTrigger className="w-[150px] rounded-none focus-visible:ring-1 focus-visible:ring-offset-0">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anime">Anime</SelectItem>
              <SelectItem value="manga">Manga</SelectItem>
            </SelectContent>
          </Select>

          <Button
            asChild
            className="rounded-l-none focus-visible:ring-1 focus-visible:ring-offset-0"
            disabled={!value}
          >
            <button type="submit">
              <Search />
            </button>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
