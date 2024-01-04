"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "../ui/toaster";
import { useRouter } from "next/navigation";
import { Task } from "@/lib/types";

interface Props {
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const FormSchema = z.object({
  task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
});

export function AddTaskForm({ setTask }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      task: "",
    },
  });

  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Congratulations! You created a task",
    });
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.task,
      completed: false,
    };

    setTask((prev: any) => {
      return [...prev, newTask];
    });
    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-6 w-full "
        >
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your task" {...field} />
                </FormControl>
                <FormDescription>Please enter an example task.</FormDescription>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <Button type="submit">Add Task</Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
