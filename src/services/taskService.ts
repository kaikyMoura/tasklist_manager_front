import { db } from "@/data/db";
import { Task } from "@/model/Task";
import { TaskStatus } from "@/model/TaskStatus";

export const createTask = (task: Task) => {
    return db.tasks.add(task);
}

export const updateTask = (task: Task) => {
    return db.tasks.put(task)
}
export const deleteTask = (id: number) => {
    return db.tasks.delete(id)
}

export const findAll = (): Promise<Task[]> => {
    return db.tasks.toArray()
}

export const filterByTaskStatus = (status: TaskStatus): Promise<Task[]> => {
    return db.tasks.filter((task: Task) => task.status === status).toArray()

}