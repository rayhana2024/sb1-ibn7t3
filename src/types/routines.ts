export type TimeOfDay = 'morning' | 'evening' | 'weekend';
export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive';
export type Duration = 'express' | 'complete';
export type CareType = 'face' | 'hair' | 'body';

export interface RoutineStep {
  id: string;
  title: string;
  description: string;
  naturalTip: string;
  icon: string;
  duration: number; // in minutes
  optional?: boolean;
}

export interface BeautyRoutine {
  id: string;
  title: string;
  description: string;
  timeOfDay: TimeOfDay;
  skinType: SkinType;
  duration: Duration;
  careType: CareType;
  steps: RoutineStep[];
  likes: number;
  shared: boolean;
  createdBy: string;
  products?: Array<{
    id: string;
    name: string;
    type: string;
    natural: boolean;
  }>;
}

export interface RoutineProgress {
  routineId: string;
  date: string;
  completed: boolean;
  steps: string[]; // completed step ids
}

export interface RoutineFilters {
  timeOfDay?: TimeOfDay;
  skinType?: SkinType;
  duration?: Duration;
  careType?: CareType;
  search?: string;
}