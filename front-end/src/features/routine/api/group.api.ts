import z from "zod";
import { GroupSchema } from "../schemas/routine.schema";
import { BASE_URL } from "./url"

export const getAllGroups = async () => {
    const res = await fetch(`${BASE_URL}/v1/groups`);

    if (!res.ok) throw new Error(`Fail to load groups: ${res.status}`)
    const data = await res.json();

    const result = z.array(GroupSchema).safeParse(data);

    if (!result.success) throw new Error("Invalid API response shape");

    return result.data;
}