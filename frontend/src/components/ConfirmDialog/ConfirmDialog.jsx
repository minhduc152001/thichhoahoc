// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

// export default function ConfirmDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Bài làm đã có thể nộp"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Thời gian vẫn còn. Bạn có chắc là muốn nộp bài?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Huỷ</Button>
//           <Button onClick={handleClose} autoFocus>
//             Đồng ý
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
