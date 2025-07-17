export interface MatchDto {
  id: number;
  datetime: string;
  court: string;
  team1: string;
  team2: string;
  goalTeam1: number;
  goalTeam2: number;
  startedAt: string | null;
  endedAt: string | null;
}

export interface ConfigDto {}

// 9,10,11,12,14
