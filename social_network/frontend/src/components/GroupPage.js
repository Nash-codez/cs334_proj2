import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import NavBar from "../pages/NavBar";

export default function GroupPage() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    
    
    return (
        <div className="background">
            <div className="home-row-wrapper">
                <div className="top">
                    <NavBar />
                </div>
                <div className="home-col-wrapper">
                    <div className="home-left">
                        <Paper elevation={20} sx={{ opacity: '100%' }}>
                        <List sx={{ width: '100%', maxWidth: '1fr', bgcolor: 'background.paper' }}>
                            <ListItemButton alignItems="flex-start" selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemAvatar>
                                    <Avatar alt="random avatar" src="../../static/images/avatar1.png" />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary="The Lads;) "
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="GrayText.primary"
                                            >
                                                Zuwarashe
                                            </Typography>
                                            {"~ I'll be in your neighborhood running..."}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                            <Divider variant="inset" component="li" />

                            <ListItemButton alignItems="flex-start" selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                                <ListItemAvatar>
                                    <Avatar alt="random avatar" src="../../static/images/avatar2.png" />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary="June Holiday Plans? "
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="GrayText.primary"
                                            >
                                                Zuwarashe
                                            </Typography>
                                            {"~ @Asa did yoou look at the hotels I..."}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                            <Divider variant="inset" component="li" />

                            <ListItemButton alignItems="flex-start" selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                                <ListItemAvatar>
                                    <Avatar alt="random avatar" src="../../static/images/avatar1.png" />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary="Batman and the Robins "
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="GrayText.primary"
                                            >
                                                Zuwarashe
                                            </Typography>
                                            {"~ <image>"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                            <Divider variant="inset" component="li" />

                            <ListItemButton alignItems="flex-start" selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                                <ListItemAvatar>
                                    <Avatar alt="random avatar" src="../../static/images/avatar2.png" />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary="The Lads;) "
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="GrayText.primary"
                                            >
                                                Zuwarashe
                                            </Typography>
                                            {"~ I'll be in your neighborhood running..."}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                            
                        </List>
                        </Paper>
                    </div>
                    <div className="home-right">
                    </div>
                </div>
            </div>
        </div>
    );
}