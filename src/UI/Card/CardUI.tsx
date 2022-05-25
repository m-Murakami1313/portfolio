import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./CardUI.module.scss";

export const CardUI = ({ title, subheader, image, content }: any) => {
  return (
    <Card className={styles.card}>
      <CardHeader title={title} subheader={subheader} />
      <CardMedia className={styles.media} title="refrigerator" image={image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
