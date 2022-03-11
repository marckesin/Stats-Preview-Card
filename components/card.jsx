import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/system";
import styles from "../styles/Home.module.css";

const StyledCard = styled(Card)({
  borderRadius: 7,
  width: "76%",
  height: "28rem",
  display: "flex",
  backgroundColor: "transparent",
});

const StyledCardContent = styled(CardContent)({
  padding: "4rem 7rem 2rem 4rem",
  backgroundColor: "hsl(244, 38%, 16%)",
  color: "hsl(0, 0%, 100%)",
});

// Card stats component
export default function CardStats() {
  return (
    <StyledCard className={styles.card}>
      <StyledCardContent className={styles.cardContent}>
        <h1 className={styles.heading}>
          Get <span>insights</span> that help your business grow.
        </h1>
        <div className={styles.statsContainer}>
          <p className={styles.description}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className={styles.stats}>
            <p>
              10k+ <br />
              <sup>
                <span>COMPANIES</span>
              </sup>
            </p>
            <p>
              314 <br />
              <sup>
                <span>TEMPLATES</span>
              </sup>
            </p>
            <p>
              12M+ <br />
              <sup>
                <span>QUERIES</span>
              </sup>
            </p>
          </div>
        </div>
      </StyledCardContent>
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
