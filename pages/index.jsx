import Link from "next/link";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        suscipit repellendus harum error qui esse? Perspiciatis quibusdam eaque
        iure blanditiis nisi quam recusandae rem assumenda ab? Sunt amet ratione
        laudantium?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur
        facere vero veniam earum molestias obcaecati tempora excepturi, quos
        molestiae blanditiis, quidem illum sequi debitis.
      </p>
      <Link href="/members">
        <a className={styles.btn}> All Members </a>
      </Link>
    </div>
  );
}

export default Home;
