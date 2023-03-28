export const userColumns = [
  { field: "id", headerName: "ID", width: 140 },
  {
    field: "user",
    headerName: "User",
    width: 240,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.avatar} alt="avatar" />
          {params.row.firstName + " " + params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "subscription",
    headerName: "Subscription",
    width: 100,
  },
  {
    field: "subscriptionExpiresAt",
    headerName: "Expiration",
    width: 170,
    renderCell: (params) => {
      return (
        <div>
          {params.row.subscriptionExpiresAt &&
            new Date(params.row.subscriptionExpiresAt).toLocaleString()}
        </div>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "Begin at",
    width: 170,
    renderCell: (params) => {
      return <div>{new Date(params.row.createdAt).toLocaleString()}</div>;
    },
  },
];

export const courseColumns = [
  { field: "id", headerName: "ID", width: 140 },
  {
    field: "name",
    headerName: "Course name",
    width: 320,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.avatar} alt="avatar" />
    //       {params.row.name}
    //     </div>
    //   );
    // },
  },
  { field: "gradeLevel", headerName: "Level", width: 120 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "author", headerName: "Author", width: 180 },
  {
    field: "isFree",
    headerName: "Type",
    width: 60,
    renderCell: (params) => {
      return (
        <div style={{ color: params.row.isFree && "#c8c800" }}>
          {params.row.isFree ? "free" : "paid"}
        </div>
      );
    },
  },
  {
    field: "students",
    headerName: "Number of Students",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.students?.length || 0}</div>;
    },
  },
];

export const lessonColumns = [
  { field: "id", headerName: "ID", width: 140 },
  { field: "courseId", headerName: "Course ID", width: 140 },
  { field: "name", headerName: "Lesson name", width: 200 },
  { field: "description", headerName: "Lesson description", width: 200 },
  { field: "text", headerName: "Lesson guide", width: 180 },
  {
    field: "createdAt",
    headerName: "Created at",
    width: 170,
    renderCell: (params) => {
      return <div>{new Date(params.row.createdAt).toLocaleString()}</div>;
    },
  },
];

export const riddleColumns = [
  { field: "id", headerName: "ID", width: 140 },
  {
    field: "name",
    headerName: "Riddle name",
    width: 320,
  },
  {
    field: "correctAnswer",
    headerName: "Answer",
    width: 400,
    renderCell: (params) => {
      return (
        <div>{params.row.correctAnswer.toString().replace(/,/g, ", ")}</div>
      );
    },
  },
];

export const documentColumns = [
  { field: "id", headerName: "ID", width: 140 },
  { field: "name", headerName: "Title", width: 280 },
  { field: "gradeLevel", headerName: "Level", width: 120 },
  { field: "url", headerName: "Link", width: 200 },
  { field: "downloadedCount", headerName: "Number of Downloads", width: 180 },
];

export const testColumns = [
  { field: "id", headerName: "ID", width: 140 },
  { field: "name", headerName: "Test title", width: 280 },
  { field: "gradeLevel", headerName: "Level", width: 120 },
  {
    field: "totalTime",
    headerName: "Test time",
    width: 180,
    renderCell: (params) => {
      return <div>{params.row.totalTime + " minutes"}</div>;
    },
  },
  { field: "takenCount", headerName: "Test Attempts", width: 180 },
];
