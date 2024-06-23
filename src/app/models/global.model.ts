export interface Card {
  title: string;
  tasksCount: string;
  tasksDone: string;
  svgFileName: string;
  color: string;
}

export interface Task{
  timeStart : string;
  link : string;
  numberOfComments : string;
  progressPercentage : number;
  color : string;
}

export interface Message {
  srcImage: string;
  color: string;
  senderName: string;
  content: string;
}

export interface Person {
  srcImage?: string;
  name: string;
}