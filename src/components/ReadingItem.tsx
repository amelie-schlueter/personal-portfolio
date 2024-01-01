import { Book } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

const ReadingItem = ({ book }: { book: Book }) => {
  return (
    <Link className="flex items-center justify-between" href={book.link}>
      <div className="flex items-center  gap-4">
        <Image
          src={book.cover}
          width={500}
          height={500}
          alt="principles_book-cover"
          className="object-cover repeat-0 rounded-md w-14"
        />
        <div>
          <h4 className="font-medium text-sm underline">{book.title}</h4>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </div>
      </div>
      <div>
        {book.status === "reading" ? (
          <Badge variant={"green"}>{book.status}</Badge>
        ) : null}
      </div>
    </Link>
  );
};

export default ReadingItem;
