
export type BoardingStatus = 'NOT_CHECKEDIN' | 'CHECKEDIN' | 'BOARDED' | 'UNBOARDED';

export interface BoardingList {
    readonly id: number;
    readonly flightId: number;
    readonly passengers: BoardingPassenger[];
}

export interface BoardingPassenger {
    readonly passengerId: number;
    readonly name: string;
    readonly firstName: string;
    readonly status: BoardingStatus;
}