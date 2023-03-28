import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import { Avatar, Button, TextField } from "@mui/material";
import timeDifference from "../../utils/timeDifference";
import "./Chat.scss";

function Chat({ q }) {
  return (
    <>
      <div className="info-question">
        <Avatar
          className="avatar"
          alt={`${q.firstName} ${q.lastName}`}
          src={q.avatar}
        />
        <div className="username">{`${q.firstName} ${q.lastName}`}</div>
        <span className="time">{`${timeDifference(q.createdAt)}`}</span>
      </div>
      <p className="question-content">{q.question}</p>

      {/* <div className="toggle-reply">
            <p className="reply-button" onClick={handleReply(q.id)}>
            Trả lời
            </p>
            <div className="reply-input" id={`input-${q.id}`}>
            <Avatar
                className="avatar"
                alt="Cindy Baker"
                src="/default_avatar.png"
            />
            <TextField
                id="filled-basic"
                label="Viết bình luận..."
                variant="filled"
                fullWidth={true}
            />
            <Button
                variant="contained"
                endIcon={<ReplyIcon />}
                size="small"
            >
                Gửi
            </Button>
            </div>
        </div> */}
    </>
  );
}

export default Chat;