import { User } from "./user";

export class Task {
    id: number;
    description: string;
    completed: boolean;
    completionPercentage: number;
    user: User;
}
