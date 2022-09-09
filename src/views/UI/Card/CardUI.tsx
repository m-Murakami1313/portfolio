import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./CardUI.module.scss";

type Props = {
  title:string,
  subheader?:string,
  image:string,
  deploy?:string,
  content:string
}

export const CardUI = ({ title, subheader, image, deploy,content }: Props) => {
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
