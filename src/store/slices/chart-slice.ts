import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LineModel } from "../../models/LineModel";

let lineData: LineModel = {
    labels: [],
    datasets: []
};

const initialState = {
  lineData: lineData,
};

const chartSlice = createSlice({
  name: "chart-slice",
  initialState: initialState,
  reducers: {
    setLineData(state, action:PayloadAction<any>) {
      const data = action.payload;
      let counter = 0;
      let labelArr: string[] = [];
      let casesArr: number[] = [];
      let recoveredArr: number[] = [];
      let deathsArr: number[] = [];
      console.log("Inside Redux",data);
      for (let key in data) {
        if (counter > 9) {
          break;
        }
        counter++;
        labelArr.push(data.cases.key);
        casesArr.push(data.cases[key]);
        recoveredArr.push(data.recovered[key]);
        deathsArr.push(data.deaths[key]);
      }
      const ourDataset = {
        labels: labelArr,
        datasets: [
          {
            label: "Cases",
            data: casesArr,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Recovered",
            data: recoveredArr,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 102, 132, 0.5)",
          },
          {
            label: "Deaths",
            data: deathsArr,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 55, 132, 0.5)",
          },
        ],
      };

      state.lineData = ourDataset;
    },
  },
});

export default chartSlice;
export const chartSliceActions = chartSlice.actions;
