export interface Ticket {
    id?: number;
    participant_id?: number;
    raffle_id?: number;
    number?: number;
    value?: number;
    payment_date?: string | Date;
    created_at?: string | Date;
    updated_at?: string | Date;
}
