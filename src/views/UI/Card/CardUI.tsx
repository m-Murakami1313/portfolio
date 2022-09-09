import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./CardUI.module.scss";

export const CardUI = ({ title, subheader, image, deploy,content }: any) => {
  return (
    <Card className={styles.card}>
      <CardHeader title={title} subheader={subheader} />
      <div className={styles.media} >
        <CardMedia  className={styles.mediaItem} image={image} />
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {deploy}
        </Typography>
      </CardContent>
    </Card>
  );
};
