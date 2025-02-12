export interface TicketsInBatch {
    raffle_id?: number;
    participant_id?: number;
    numbers?: number[];
    value?: number;
    payment_date?: string | Date;
}