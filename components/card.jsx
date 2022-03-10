import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import styles from "../styles/Home.module.css";

const StyledCard = styled(Card)({
  borderRadius: 7,
  maxWidth: "90%",
  display: "flex",
  backgroundColor: "transparent",
});

// Card stats component
export default function CardStats() {
  return (
    <StyledCard className={styles.card}>
      <CardContent className={styles.cardContent}>
        <h1 className={styles.heading}>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className={styles.description}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className={styles.stats}>
          <p>
            10k+ <br /> <span>companies</span>
          </p>
          <p>
            314 <br /> <span>templates</span>
          </p>
          <p>
            12m+ <br /> <span>queries</span>
          </p>
        </div>
      </CardContent>
      <div className={styles.imageContainer}>
        <CardMedia
          className={styles.cardMedia}
          component="img"
          alt="Office Image"
          image="/image-header-desktop.jpg"
        />
        <div className={styles.mask}></div>
      </div>
    </StyledCard>
  );
}
