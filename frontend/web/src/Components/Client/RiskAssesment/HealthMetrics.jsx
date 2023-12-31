import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const HealthMetrics = ({ onDataUpdate }) => {
  const [systolic_blood_pressure, setsystolic_blood_pressure] = useState("");
  const [diastolic_blood_pressure, setdiastolic_blood_pressure] = useState("");
  const [avg_glucose_level, setavg_glucose_level] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [sleepPattern, setSleepPattern] = useState("");
  const [alcoholConcession, setAlcoholConcession] = useState("");
  const [history_of_stroke, sethistory_of_stroke] = useState("");
  const [family_history_of_stroke, setfamily_history_of_stroke] = useState("");
  const [hypertension, setHypertension] = useState("");
  const [heart_disease, setheart_disease] = useState("");

  const [systolic_blood_pressureError, setsystolic_blood_pressureError] =
    useState("");
  const [diastolic_blood_pressureError, setdiastolic_blood_pressureError] =
    useState("");
  const [avg_glucose_levelError, setavg_glucose_levelError] = useState("");

  const handlesystolic_blood_pressureChange = (e) => {
    const newsystolic_blood_pressure = e.target.value;
    setsystolic_blood_pressure(newsystolic_blood_pressure);
    setsystolic_blood_pressureError(""); // Reset error
    onDataUpdate({
      systolic_blood_pressure: newsystolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handlediastolic_blood_pressureChange = (e) => {
    const newdiastolic_blood_pressure = e.target.value;
    setdiastolic_blood_pressure(newdiastolic_blood_pressure);
    setdiastolic_blood_pressureError(""); // Reset error
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure: newdiastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handleavg_glucose_levelChange = (e) => {
    const newavg_glucose_level = e.target.value;
    setavg_glucose_level(newavg_glucose_level);
    setavg_glucose_levelError(""); // Reset error
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level: newavg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handleStressLevelChange = (e) => {
    const newStressLevel = e.target.value;
    setStressLevel(newStressLevel);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel: newStressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handleSleepPatternChange = (e) => {
    const newSleepPattern = e.target.value;
    setSleepPattern(newSleepPattern);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern: newSleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handleAlcoholConcessionChange = (e) => {
    const newAlcoholConcession = e.target.value;
    setAlcoholConcession(newAlcoholConcession);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession: newAlcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handlehistory_of_strokeChange = (e) => {
    const newhistory_of_stroke = e.target.value;
    sethistory_of_stroke(newhistory_of_stroke);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke: newhistory_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handlefamily_history_of_strokeChange = (e) => {
    const newfamily_history_of_stroke = e.target.value;
    setfamily_history_of_stroke(newfamily_history_of_stroke);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke: newfamily_history_of_stroke,
      hypertension,
      heart_disease,
    });
  };

  const handleHypertensionChange = (e) => {
    const newHypertension = e.target.value;
    setHypertension(newHypertension);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension: newHypertension,
      heart_disease,
    });
  };

  const handleheart_diseaseChange = (e) => {
    const newheart_disease = e.target.value;
    setheart_disease(newheart_disease);
    onDataUpdate({
      systolic_blood_pressure,
      diastolic_blood_pressure,
      avg_glucose_level,
      stressLevel,
      sleepPattern,
      alcoholConcession,
      history_of_stroke,
      family_history_of_stroke,
      hypertension,
      heart_disease: newheart_disease,
    });
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormLabel>Systolic Blood Pressure</FormLabel>
          <FormControl fullWidth required size="small">
            <TextField
              label="90 - 120"
              value={systolic_blood_pressure}
              onChange={handlesystolic_blood_pressureChange}
              type="number"
              variant="outlined"
              size="small"
            />
            <Typography variant="caption" color="error">
              {systolic_blood_pressureError}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormLabel>Diastolic Blood Pressure</FormLabel>
          <FormControl fullWidth required size="small">
            <TextField
              label="90 - 120"
              value={diastolic_blood_pressure}
              onChange={handlediastolic_blood_pressureChange}
              type="number"
              variant="outlined"
              size="small"
            />
            <Typography variant="caption" color="error">
              {diastolic_blood_pressureError}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required size="small">
            <TextField
              label="Average Glucose Level"
              value={avg_glucose_level}
              onChange={handleavg_glucose_levelChange}
              type="number"
              variant="outlined"
              size="small"
            />
            <Typography variant="caption" color="error">
              {avg_glucose_levelError}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required size="small">
            <InputLabel id="stress-level-label">Stress Level</InputLabel>
            <Select
              labelId="stress-level-label"
              label="Stress Level"
              value={stressLevel}
              onChange={handleStressLevelChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="moderate">Moderate</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required size="small">
            <InputLabel id="sleep-pattern-label">Sleep Pattern</InputLabel>
            <Select
              labelId="sleep-pattern-label"
              label="Sleep Pattern"
              value={sleepPattern}
              onChange={handleSleepPatternChange}
            >
              <MenuItem value="good">8 hours</MenuItem>
              <MenuItem value="moderate">4 - 8 hours</MenuItem>
              <MenuItem value="bad">Less than 4 hours</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth required>
            <FormLabel>Alcohol Consumption</FormLabel>
            <RadioGroup
              name="alcohol-concession-group"
              value={alcoholConcession}
              onChange={handleAlcoholConcessionChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth required>
            <FormLabel>History of Stroke</FormLabel>
            <RadioGroup
              name="history-of-stroke-group"
              value={history_of_stroke}
              onChange={handlehistory_of_strokeChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth required>
            <FormLabel>Family History of Stroke</FormLabel>
            <RadioGroup
              name="family-history-group"
              value={family_history_of_stroke}
              onChange={handlefamily_history_of_strokeChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth required>
            <FormLabel>Hypertension</FormLabel>
            <RadioGroup
              name="hypertension-group"
              value={hypertension}
              onChange={handleHypertensionChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth required>
            <FormLabel>Heart Disease</FormLabel>
            <RadioGroup
              name="heart-disease-group"
              value={heart_disease}
              onChange={handleheart_diseaseChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HealthMetrics;
