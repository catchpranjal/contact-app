export interface datasetModel {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
}

export interface LineModel {
  labels: string[];
  datasets: datasetModel[];
}
