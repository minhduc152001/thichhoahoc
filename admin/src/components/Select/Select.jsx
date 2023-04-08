import React from "react";

function Select({ gradeLevel, setUpdatedInfo }) {
  return (
    <div className="formInput">
      <label>Grade level</label>
      <select
        onChange={(e) => {
          e.preventDefault();
          setUpdatedInfo((prev) => {
            {
              return { ...prev, gradeLevel: e.target.value };
            }
          });
        }}
      >
        <option
          {...(gradeLevel === "G10" && { selected: "selected" })}
          value="G10"
        >
          Grade 10
        </option>
        <option
          {...(gradeLevel === "G11" && { selected: "selected" })}
          value="G11"
        >
          Grade 11
        </option>
        <option
          {...(gradeLevel === "G12" && { selected: "selected" })}
          value="G12"
        >
          Grade 12
        </option>
        <option
          value="collegePrep"
          {...(gradeLevel === "collegePrep" && {
            selected: "selected",
          })}
        >
          College prep
        </option>
      </select>
    </div>
  );
}

export default Select;
