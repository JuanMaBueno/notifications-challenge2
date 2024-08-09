import React from 'react';
import { Grid, Typography} from "@mui/material";
import webber from "../assets/images/avatar-mark-webber.webp" ;
import gray from "../assets/images/avatar-angela-gray.webp";
import thompson from "../assets/images/avatar-jacob-thompson.webp";
import hasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import smith from "../assets/images/avatar-kimberly-smith.webp";
import peterson from "../assets/images/avatar-nathan-peterson.webp";
import kim from "../assets/images/avatar-anna-kim.webp";
import { Notification } from "../components/Notification";


const mockNotifications = [
   {
    name: "Mark Webber",
    action: "react",
    target: {
      type: "post",
      content: "My first tournament today!",
    },
    readed: false,
    date: "1m ago",
    avatar: webber,
    
  },
  
  {
    name: "Angela Gray",
    action: "follow",
    target: {
      type: "user",
      content: "",
    },
    readed: false,
    date: "5m ago",
    avatar: gray,
  },

  {
    name: "Jacob Thompson",
    action: "join",
    target: {
      type: "group",
      content: "Chess Club",
    },
    readed: false,
    date: "1 day ago",
    avatar: thompson,
  },
  
  {
    name: "Rizky Hasanuddin",
    action: "message",
    target: {
      type: "message",
      content:"Hello, thasks for setting up the Chess Club, I've been a member for a few weeks now and I'am already having lots of fun and improving my game.",
    },
    readed: false,
    date: "5 days ago",
    avatar: hasanuddin,
  },

  {
    name: "Kimberly Smith",
    action: "comment",
    target: {
      type: "picture",
      content: "",
    },
    readed: true,
    date: "1 week ago",
    avatar: smith,
  },

  {
    name: "Nathan Peterson",
    action: "react",
    target: {
      type: "post",
      content: "5 end-game strategies to increase your win rate",
    },
    readed: true,
    date: "2 week ago",
    avatar: peterson,
  },

  {
    name: "Anna Kim",
    action: "left",
    target: {
      type: "group",
      content: "Chess Club",
    },
    readed: true,
    date: "2 week ago",
    avatar: kim,
  },
];



const NotificationsPannel = () => {

  const unreadCount = mockNotifications.filter(notification => !notification.readed).length;

  return (
    <Grid container direction="column" className='notificationsPanel'>
        <Grid item className='notificationsHeader'>
          
          <Typography variant="h6">
          Notification <span className='badge'>{unreadCount}</span>
          </Typography>
        <span className="markAllRead">Mark as all read</span>
        </Grid>
        
        {mockNotifications.map((notification, index) => (
          <Grid item key={index}>
            <Notification notification={notification} />
          </Grid>  
        ))}
    
    </Grid>
  );
};


export default NotificationsPannel;