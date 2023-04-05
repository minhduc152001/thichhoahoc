import React, { useState, useEffect } from "react";

function Countdown({
  minutes,
  handleSubmit,
  showAnswer,
  time,
  setTime,
  isEnded,
}) {
  useEffect(() => {
    let seconds = minutes * 60;
    const timer = setInterval(() => {
      const hours = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
      const minutesDisplay = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const secondsDisplay = (seconds % 60).toString().padStart(2, "0");
      !isEnded && setTime({ hours, minutes: minutesDisplay, seconds: secondsDisplay });
      seconds--;
      if (seconds < 0) {
        clearInterval(timer);
        setTime({ hours: "00", minutes: "00", seconds: "00" });

        // end the exam
        window.alert("Hết giờ. Hệ thống sẽ tự nộp bài làm");
        handleSubmit();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  let color = "#50ac00";
  if (Number(time.hours) === 0 && Number(time.minutes) <= 3) {
    color = "red";
  } else if (Number(time.hours) === 0 && Number(time.minutes) <= 7) {
    color = "orange";
  } else if (Number(time.hours) === 0 && Number(time.minutes) <= 15) {
    color = "rgb(36 170 255)";
  }

  const styles = {
    color,
  };

  return (
    <h1 style={styles}>{`${time.hours}:${time.minutes}:${time.seconds}`}</h1>
  );
}

export default Countdown;
