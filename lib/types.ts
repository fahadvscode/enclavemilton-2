export interface ProjectInfo {
  name: string;
  city: string;
  builder: string;
  startingFrom: string;
  occupancy: string;
  noMaintenanceFees: boolean;
}

export interface FloorPlanModel {
  model: string;
  slug: string;
  type?: string;
  storeys?: number;
  sqft?: number;
  sqftMin?: number;
  sqftMax?: number;
  price: string;
}

export interface Collection {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  footnote?: string;
  models: FloorPlanModel[];
}

export interface FloorPlansData {
  project: ProjectInfo;
  collections: Collection[];
}

export interface RegistrationPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  model: string;
  collection?: string;
  source?: string;
}
