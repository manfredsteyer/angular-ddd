import { BoardingList, BoardingStatus } from './boarding-list';

export function updateBoardingStatus(
    boardingList: BoardingList, passengerId: number, status: BoardingStatus): Promise<BoardingList> {

        // TODO: Send to server

        const passenger = boardingList.passengers.find(p => p.passengerId === passengerId);
        const newPassenger = {...passenger, status};
        const passengers = boardingList.passengers.map(p => p.passengerId === passengerId ? newPassenger : p);
        const newBoardingList = {...boardingList, passengers};

        return Promise.resolve(newBoardingList);
}