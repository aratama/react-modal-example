// Data types are in /model directory
export type Task = {
  title: string;
};

export type TaskValidationError = "TitleMustNotBeEmpty";

export const validateTask = (task: Task): TaskValidationError[] => {
  const errors: TaskValidationError[] = [];
  if (task.title === "") {
    errors.push("TitleMustNotBeEmpty");
  }
  return errors;
};
