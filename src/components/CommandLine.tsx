"use client";
import { useEffect, useState } from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { File, Ghost, Linkedin, Search, XIcon } from "lucide-react";
import { pages } from "./layout/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allCrafts, allDocs } from "contentlayer/generated";
import { projects, socialLinks } from "@/lib/data";
import XLogo from "@/lib/icons/xLogo";
import { useTheme } from "next-themes";
import { set } from "date-fns";

export function CommandLine() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const docs = allDocs.filter((doc) => doc.published);
  const crafts = allCrafts.filter((craft) => craft.published);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        variant={"outline"}
        className="md:min-w-[200px] justify-between"
      >
        <div className="items-center gap-2 text-sm text-muted-foreground flex">
          <Search width={16} />
          <p className="hidden md:flex">Search</p>
        </div>
        <div className="text-sm text-muted-foreground hidden md:flex">
          <kbd>⌘</kbd> + <kbd>k</kbd>
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="What are you searching for?" />
        <CommandList>
          <CommandEmpty className="flex flex-col items-center justify-center py-6">
            <Ghost width={18} strokeWidth={1.5}></Ghost>Sorry.. no results
          </CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.link}
                value={page.title}
                onSelect={() => {
                  router.push(page.link);
                  setOpen(false);
                }}
              >
                {page.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Work">
            {projects.map((project) => (
              <CommandItem
                key={project.slug}
                value={project.title}
                onSelect={() => {
                  router.push(`/work/${project.slug}`);
                  setOpen(false);
                }}
              >
                {project.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Journal">
            {docs.map((doc) => (
              <CommandItem
                key={doc.slug}
                value={doc.title}
                onSelect={() => {
                  router.push(doc.slug);
                  setOpen(false);
                }}
              >
                {doc.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Social">
            {socialLinks.map((social) => (
              <CommandItem
                key={social.title}
                value={social.title}
                onSelect={() => {
                  router.push(social.link);
                  setOpen(false);
                }}
              >
                {social.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Utils">
            {/* <CommandItem
              value="Toggle Appearence"
              onSelect={() => {
                if (theme == "light") {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
                setOpen(false);
              }}
            >
              Toggle Appearence
            </CommandItem> */}
          </CommandGroup>
          <CommandGroup heading="Crafts">
            {crafts.map((craft) => (
              <CommandItem
                key={craft.slug}
                value={craft.title}
                onSelect={() => {
                  router.push(`${craft.slug}`);
                  setOpen(false);
                }}
              >
                {craft.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
