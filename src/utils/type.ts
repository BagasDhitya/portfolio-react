export interface AboutState {
  data: {
    name: string;
    about: string;
    tech_stack: Array<{}>;
  };
}

export interface ExperienceState {
  data: [
    {
      title: string;
      company: string;
      date: string;
      description: Array<string>;
    }
  ];
}
