export interface Raffle {
    id?: number;
    name?: string;
    maximum_numbers?: number;
    start_date?: string | Date;
    end_date?: string | Date;
    ticket_value?: number;
    created_at?: string | Date;
    updated_at?: string | Date;
}
