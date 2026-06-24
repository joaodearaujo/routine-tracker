import z from "zod";
import { TaskSchema } from "../schemas/routine.schema";
import { BASE_URL } from "./url"

export const getAllTasks = async () => {
    const res = await fetch(`${BASE_URL}/v1/tasks`);

    if (!res.ok) throw new Error(`Fail to load tasks: ${res.status}`)
    const data = await res.json();

    const result = z.array(TaskSchema).safeParse(data);

    if (!result.success) throw new Error("Invalid API response shape");

    return result.data;
}