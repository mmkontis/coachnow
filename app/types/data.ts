// Define types for the CoachNow platform data

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface SocialLinks {
  instagram: string;
  youtube: string;
  twitter?: string;
  tiktok?: string;
}

export interface StatWithMapping {
  value: string;
  label: string;
}

export interface Athlete {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  description: string;
  stats: StatWithMapping[];
  followers: number;
  programs: string[];
  socialLinks: SocialLinks;
  aiScore: number;
  achievements?: string[];
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialResults {
  strengthGain?: string;
  bodyFatReduction?: string;
  followerGrowth?: string;
  engagement?: string;
  muscleGain?: string;
  competitionPlacement?: string;
  raceTimes?: string;
  vo2max?: string;
  endurance?: string;
  strengthEndurance?: string;
  mobility?: string;
  corePower?: string;
  [key: string]: string | undefined;
}

export interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  quote: string;
  results: {
    [key: string]: string; // This allows for flexible result metrics
  };
}

export interface Plan {
  id?: string;
  name: string;
  description: string;
  price: number;
  period?: string;
  features: string[];
  aiFeatures?: string[];
  contentCreation?: boolean;
  coachAccess?: boolean;
  analyticsLevel?: 'Basic' | 'Advanced' | 'Elite' | 'Elite+';
  recommended?: boolean;
  featured: boolean;
  hidden?: boolean;
}

export interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  rest?: number;
  distance?: string;
  pace?: string;
  duration?: number;
  components?: string[];
  aiNotes: string;
}

export interface Workout {
  id: string;
  categoryId: string;
  name: string;
  type: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite';
  duration: number;
  exercises: Exercise[];
  aiScore: number;
  userRating: number;
}

export interface ImprovementRates {
  strength: number;
  endurance: number;
  fat_loss: number;
  muscle_gain: number;
  performance: number;
}

export interface AiMetrics {
  accuracyRate: number;
  adaptationSpeed: number;
  personalizedParameters: number;
  successRate: number;
  clientRetention: number;
  improvementRate: ImprovementRates;
  userSatisfaction: number;
}

export interface UserEngagement {
  daily: number;
  weekly: number;
  monthly: number;
}

export interface Program {
  id: string;
  name: string;
  satisfaction: number;
  results: number;
}

export interface FitnessGoals {
  [key: string]: number;
}

export interface AnalyticsData {
  userEngagement: UserEngagement;
  topPerformingPrograms: Program[];
  adherenceRate: number;
  recommendationAccuracy: number;
  fitnessGoals: FitnessGoals;
}

export interface Challenge {
  id: string;
  name: string;
  participants: number;
  startDate: string;
  endDate: string;
  prize: string;
}

export interface LeaderboardUser {
  id: string;
  username: string;
  points: number;
  streak: number;
}

export interface CommunityData {
  totalUsers: number;
  totalWorkoutsCompleted: number;
  totalWeightLifted: number;
  challenges: Challenge[];
  topLeaderboardUsers: LeaderboardUser[];
}

export interface FitnessLevel {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
  elite: string[];
}

export interface UserPreferences {
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  goal: 'strength' | 'hypertrophy' | 'endurance' | 'fat_loss' | 'performance';
  timeAvailable: number;
  preferredCategory?: string;
}

export interface UserProfile {
  currentFitnessLevel: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  consistencyScore: number;
  recoveryQuality: number;
  primaryGoal: 'strength' | 'hypertrophy' | 'endurance' | 'fat_loss' | 'performance';
}

export interface UserProgressDatasets {
  strength: number[];
  endurance: number[];
  bodyFat: number[];
  muscle: number[];
  workoutsCompleted: number[];
  totalVolume: number[];
}

export interface UserProgressData {
  userId: string;
  labels: string[];
  datasets: UserProgressDatasets;
} 