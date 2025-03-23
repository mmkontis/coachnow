import { 
  categories, 
  featuredAthletes, 
  features, 
  testimonials, 
  plans, 
  sampleWorkouts,
  aiMetrics,
  analyticsData,
  communityData
} from '../data/mockData';

import {
  Category,
  Athlete,
  Feature,
  Testimonial,
  Plan,
  Workout,
  AiMetrics,
  AnalyticsData,
  CommunityData,
  LeaderboardUser,
  Challenge,
  UserPreferences,
  UserProfile,
  UserProgressData,
  ImprovementRates
} from '../types/data';

/**
 * Filter athletes by category
 * @param categoryId The category ID to filter by
 * @param limit Optional limit on the number of athletes to return
 * @returns Array of athletes in that category
 */
export const getAthletesByCategory = (categoryId: string, limit?: number): Athlete[] => {
  const filteredAthletes = featuredAthletes.filter(athlete => athlete.categoryId === categoryId) as Athlete[];
  return limit ? filteredAthletes.slice(0, limit) : filteredAthletes;
};

/**
 * Get category details by ID
 * @param categoryId The category ID to look up
 * @returns Category details or undefined if not found
 */
export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId) as Category | undefined;
};

/**
 * Get workouts for a specific category
 * @param categoryId The category ID to filter workouts by
 * @returns Array of workouts for that category
 */
export const getWorkoutsByCategory = (categoryId: string): Workout[] => {
  return sampleWorkouts.filter(workout => workout.categoryId === categoryId) as Workout[];
};

/**
 * Get the recommended plan (the one marked as recommended)
 * @returns The recommended plan object
 */
export const getRecommendedPlan = (): Plan | undefined => {
  return plans.find(plan => plan.recommended) as Plan | undefined;
};

/**
 * Get the featured plan (the one marked as featured, typically displayed prominently)
 * @returns The featured plan object
 */
export const getFeaturedPlan = (): Plan | undefined => {
  return plans.find(plan => plan.featured) as Plan | undefined;
};

/**
 * Get visible plans (excludes hidden plans)
 * @returns Array of visible plans
 */
export const getVisiblePlans = (): Plan[] => {
  return [
    {
      name: 'Free',
      description: 'Basic features',
      price: 0,
      featured: false,
      features: [
        'Basic tracking',
        'Community access',
        'Standard analytics',
        'Single program'
      ]
    },
    {
      name: 'Premium',
      description: 'All features',
      price: 5,
      period: 'week',
      featured: true,
      features: [
        'Advanced tracking',
        'Personalized plans',
        'Coach support',
        'Unlimited programs'
      ]
    }
  ];
};

/**
 * Generate a personalized workout recommendation based on user preferences
 * @param userPreferences Object containing user's training preferences
 * @returns A recommended workout object
 */
export const getPersonalizedWorkoutRecommendation = (userPreferences: UserPreferences): Workout => {
  // Filter workouts by category if preferred
  let eligibleWorkouts = [...sampleWorkouts] as Workout[];
  
  if (userPreferences.preferredCategory) {
    eligibleWorkouts = eligibleWorkouts.filter(
      workout => workout.categoryId === userPreferences.preferredCategory
    );
  }
  
  // Filter by time available
  eligibleWorkouts = eligibleWorkouts.filter(
    workout => workout.duration <= userPreferences.timeAvailable
  );
  
  // Map fitness levels to workout levels
  const levelMap: Record<string, string[]> = {
    'beginner': ['Beginner'],
    'intermediate': ['Beginner', 'Intermediate'],
    'advanced': ['Intermediate', 'Advanced'],
    'elite': ['Advanced', 'Elite']
  };
  
  // Filter by appropriate level
  eligibleWorkouts = eligibleWorkouts.filter(
    workout => levelMap[userPreferences.fitnessLevel].includes(workout.level)
  );
  
  // If no workouts match criteria, return a default
  if (eligibleWorkouts.length === 0) {
    return sampleWorkouts[0] as Workout;
  }
  
  // Sort by AI score (quality of workout)
  eligibleWorkouts.sort((a, b) => b.aiScore - a.aiScore);
  
  // Return the best match
  return eligibleWorkouts[0];
};

/**
 * Get performance improvement estimate based on user profile and chosen plan
 * @param userProfile User's fitness profile information
 * @param planId Selected plan ID
 * @returns Estimated improvement percentages by category
 */
export const getEstimatedImprovement = (
  userProfile: UserProfile,
  planId: string
): ImprovementRates | null => {
  // Get the selected plan
  const plan = plans.find(p => p.id === planId) as Plan | undefined;
  
  if (!plan) return null;
  
  // Base multipliers for different analytics levels
  const analyticsMultiplier: Record<NonNullable<Plan['analyticsLevel']>, number> = {
    'Basic': 0.8,
    'Advanced': 1.0,
    'Elite': 1.2,
    'Elite+': 1.3
  };
  
  // Base multipliers for different fitness levels (diminishing returns at higher levels)
  const fitnessLevelMultiplier: Record<string, number> = {
    'beginner': 1.3,
    'intermediate': 1.0,
    'advanced': 0.7,
    'elite': 0.5
  };
  
  // Calculate consistency impact (0.5-1.5)
  const consistencyImpact = 0.5 + (userProfile.consistencyScore / 100);
  
  // Calculate recovery impact (0.5-1.3)
  const recoveryImpact = 0.5 + (userProfile.recoveryQuality / 125);
  
  // Use Basic as default if analyticsLevel is undefined
  const analyticsLevel = plan.analyticsLevel || 'Basic';
  
  // Calculate base improvement factor
  const baseFactor = analyticsMultiplier[analyticsLevel] * 
                     fitnessLevelMultiplier[userProfile.currentFitnessLevel] * 
                     consistencyImpact * 
                     recoveryImpact;
  
  // Apply the base factor to the AI improvement rates
  return {
    strength: Math.round(aiMetrics.improvementRate.strength * baseFactor * 10) / 10,
    endurance: Math.round(aiMetrics.improvementRate.endurance * baseFactor * 10) / 10,
    fat_loss: Math.round(aiMetrics.improvementRate.fat_loss * baseFactor * 10) / 10,
    muscle_gain: Math.round(aiMetrics.improvementRate.muscle_gain * baseFactor * 10) / 10,
    performance: Math.round(aiMetrics.improvementRate.performance * baseFactor * 10) / 10
  };
};

/**
 * Get top users from the community
 * @param limit Number of users to return
 * @returns Array of top users
 */
export const getTopUsers = (limit = 3): LeaderboardUser[] => {
  return communityData.topLeaderboardUsers.slice(0, limit) as LeaderboardUser[];
};

/**
 * Get active challenges
 * @returns Array of currently active challenges based on current date
 */
export const getActiveChallenges = (): Challenge[] => {
  const today = new Date();
  
  return communityData.challenges.filter(challenge => {
    const startDate = new Date(challenge.startDate);
    const endDate = new Date(challenge.endDate);
    
    return today >= startDate && today <= endDate;
  }) as Challenge[];
};

/**
 * Format large numbers with commas for readability
 * @param num Number to format
 * @returns Formatted string
 */
export const formatLargeNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Generate sample analytics data for a user's progress
 * @param userId User ID to generate data for
 * @param weeks Number of weeks of data to generate
 * @returns Object with progress data
 */
export const getUserProgressData = (userId: string, weeks = 12): UserProgressData => {
  // Seed some random but upward-trending data
  const generateWeeklyData = (baseValue: number, volatility: number, uptrend: number): number[] => {
    const data: number[] = [];
    let currentValue = baseValue;
    
    for (let i = 0; i < weeks; i++) {
      // Add some randomness but keep general uptrend
      const change = (Math.random() * volatility * 2 - volatility) + uptrend;
      currentValue += change;
      currentValue = Math.max(0, currentValue); // Keep values positive
      data.push(Math.round(currentValue * 10) / 10);
    }
    
    return data;
  };
  
  // Generate week labels (e.g., "Week 1", "Week 2", etc.)
  const labels = Array.from({ length: weeks }, (_, i) => `Week ${i + 1}`);
  
  return {
    userId,
    labels,
    datasets: {
      strength: generateWeeklyData(100, 5, 3),
      endurance: generateWeeklyData(100, 4, 2.5),
      bodyFat: generateWeeklyData(20, 0.8, -0.5), // Downtrend for body fat
      muscle: generateWeeklyData(100, 3, 1.5),
      workoutsCompleted: generateWeeklyData(3, 1, 0.2),
      totalVolume: generateWeeklyData(10000, 1000, 500)
    }
  };
};

/**
 * Get all training features
 * @returns Array of feature objects
 */
export const getAllFeatures = (): Feature[] => {
  return features as Feature[];
};

/**
 * Get all testimonials
 * @returns Array of testimonial objects
 */
export const getAllTestimonials = (): Testimonial[] => {
  return testimonials.map(testimonial => ({
    name: testimonial.name,
    title: testimonial.title,
    avatar: testimonial.avatar,
    quote: testimonial.quote,
    results: Object.fromEntries(
      Object.entries(testimonial.results)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, value as string])
    )
  }));
};

/**
 * Get AI performance metrics
 * @returns Object with AI performance metrics
 */
export const getAiMetrics = (): AiMetrics => {
  return aiMetrics as AiMetrics;
};

/**
 * Get analytics data
 * @returns Object with analytics data
 */
export const getAnalyticsData = (): AnalyticsData => {
  return analyticsData as AnalyticsData;
};

/**
 * Get community data
 * @returns Object with community data
 */
export const getCommunityData = (): CommunityData => {
  return communityData as CommunityData;
};

/**
 * Get all categories
 * @returns Array of all categories
 */
export const getAllCategories = (): Category[] => {
  return categories as Category[];
}; 