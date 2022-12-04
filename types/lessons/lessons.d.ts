export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: number;
  videoUrl: string;
  segments: Segment[];
}

export interface Segment {
  id: number;
  title: string;
  description: string;
  duration: number;
  videoUrl: string;
  task: Task;
  summary: string;
}

export interface Task {
  title: string;
  initialCode: string;
  expectedOutput: string;
  replitUrl: string;
}
