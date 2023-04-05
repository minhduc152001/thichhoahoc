import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Answer.scss";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

export default function AnswerShow({ question, showAnswer }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box className="mb-20">
      {showAnswer && (
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Xem lời giải"
        />
      )}
      {checked && (
        <div className="answer-show">
          <div className="correct-choice">Đáp án đúng: {question.correctAnswer}</div>
          <div className="explaination-answer">
            <span>Giải thích:</span>
            <p>{question.explaination}</p>
          </div>
        </div>
      )}
    </Box>
  );
}
