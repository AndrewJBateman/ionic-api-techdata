export interface IJsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

export interface IJsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

export interface IJsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: IJsonFormControlOptions;
  required: boolean;
  validators: IJsonFormValidators;
}

export interface IJsonFormData {
  controls: IJsonFormControls[];
}
