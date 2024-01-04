import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AddTaskForm } from "./AddTaskForm";
import { SetStateAction } from "react";
import { Task } from "@/lib/types";

interface Props {
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function AddTaskButton({ setTask }: Props) {
  return <AddTaskForm setTask={setTask} />;
}
