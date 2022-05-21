type WorkoutFields = {
  activity: string;
  sets: string;
  reps: string;
  tutorial?: string;
};

type WorkoutTabFields = {
  title: string;
  topColor?: string;
  bottomColor?: string;
  image: any;
};

type WorkoutDataSet = {
  date: Date | null;
  week: string | null;
  activity: string | null;
  weight: string | null;
};
