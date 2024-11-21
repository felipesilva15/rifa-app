import { Participant } from "./participant";

export interface TicketResource {
    id?: number;
    number?: number;
    value?: number;
    payment_date?: string | Date;
    participant?: Participant;
    created_at?: string | Date;
    updated_at?: string | Date;
}
