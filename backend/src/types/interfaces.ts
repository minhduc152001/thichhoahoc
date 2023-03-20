import {
  ECorrectAnswer,
  EGradeLevel,
  ESubscription,
} from "../constants/enumTypes";

export interface IContext {
  token: string;
  profile: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    subscription: ESubscription;
    subscriptionExpiresAt: Date | null;
  };
}

export interface IUser {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string;
  isEmailVerified: boolean;
  confirmationCode: string | null;
  subscription: ESubscription;
  subscriptionExpiresAt: Date | null;
  passwordResetToken: String | null;
  passwordResetExpiresAt: Date | null;
  createdAt: Date;
}

export interface IPayLoad {
  userId: string;
  email: string;
}

export interface IUserSignupArgs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IUserLoginArgs {
  email: string;
  password: string;
}

export interface ICourse {
  _id?: string;
  name?: string;
  gradeLevel?: EGradeLevel;
  img: string;
  description?: string;
  author: string;
  isFree: boolean;
  buyersCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IQACourse {
  _id?: string;
  userId: string;
  courseId: string;
  content: string;
  createdAt: Date;
}

export interface IReplyQACourse {
  _id: string;
  QACourseId: string;
  userId: string;
  reply: string;
  createdAt: Date;
}

export interface ILesson {
  _id?: string;
  courseId: string;
  name: string;
  description: string;
  text: string;
  videoUrl: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IParticipationCourse {
  _id?: string;
  userId: string;
  courseId: string;
  isCompleted: boolean;
  completedLessons: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IRiddle {
  _id?: string;
  name: string;
  imageUrl: string;
  hint?: string;
  correctAnswer: [string];
  createdAt: Date;
  updatedAt: Date;
}

export interface IRiddleAttempt {
  _id?: string;
  userId: string;
  riddleId: string;
  answer: string;
  isCorrect: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDocument {
  _id?: string;
  name: string;
  type: string;
  gradeLevel: EGradeLevel;
  url: string;
  downloadedCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMockTest {
  _id?: string;
  gradeLevel: EGradeLevel;
  name: string;
  totalTime: number;
  takenCount: number;
  userTakenTimes: number;
  createdAt: Date;
}

export interface ITestQuestion {
  _id?: string;
  mockTestId: string;
  question: string;
  score: number;
  hint?: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: ECorrectAnswer;
  explaination: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITestRecord {
  _id?: string;
  testQuestionId: string;
  userId: string;
  answer: ECorrectAnswer;
  isCorrect: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITestHistory {
  _id?: string;
  mockTestId: string;
  userId: string;
  attemptsCount: number;
  highestScore: number;
  doneTime: number;
  createdAt: Date;
}
