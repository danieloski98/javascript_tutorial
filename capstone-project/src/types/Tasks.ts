export interface ITask {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    completed: boolean;
    status: 'ON_GOING' | 'COMPLETED';
}