import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { parse, end, toSeconds, pattern } from "iso8601-duration";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
        // backgroundColor: "transparent",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        ></CardMedia>
        <CardContent
          sx={{ backgroundColor: "rgba(0, 0, 0, 1)", height: "106px" }}
        >
          {/* Video Id */}
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          {/* Channel Id */}
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                fontSize="inherit"
                sx={{ color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
