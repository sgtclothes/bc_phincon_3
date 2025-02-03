export interface CounterStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    clearCounter: () => void;
}
