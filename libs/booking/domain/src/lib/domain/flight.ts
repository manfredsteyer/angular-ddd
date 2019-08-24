
export interface Flight {
  readonly id: number;   
  readonly from: string;
  readonly to: string;
  readonly date: string; 
  readonly delayed: boolean;
}
