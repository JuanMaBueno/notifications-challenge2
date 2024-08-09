import React from "react";
import { Avatar, Grid, Typography, Paper} from "@mui/material";

export const Notification = ({ notification }) => {
  const {name, action, target, readed, date, avatar} = notification;
  
  const getActionText = (action) => {
    switch (action) {
      case 'react':
        return 'reacted to your recent post';
      case 'follow':
        return 'followed you';
      case 'join':
        return 'has joined your group';
      case 'message':
        return 'sent you a private message';
      case 'comment':
        return 'commented on your picture';  
      case 'left':
        return 'left the group';  

      default:
        return 'performed an action';
  }
}

  return (
    <Paper className={`notificationWarpper ${!readed ? 'unread' : ''}`} elevation={readed ? 1 : 3} >
    <Grid container className="layout-helper">
      <Grid item>
        <Avatar alt={name} src={avatar} className="notificationAvatar" />
      </Grid>
      <Grid item xs>
        <div className="notificationContent">
          <Typography variant="body1">
            <span className="notificationText">{name}</span> <span className="notificationAction">{getActionText(action)}</span>
            {target.type !== 'message' && <span className="notificationPostContent">{target.content}</span>}
          </Typography>
          <Typography variant = "body2" className="notificationDate">
            {date}
          </Typography>
          {action === 'message' &&(
            <Typography variant="body2" className="notificationMessage">
              {target.content}
            </Typography>
          )}
        </div>
      </Grid>
    </Grid>
    </Paper>
  );
};
