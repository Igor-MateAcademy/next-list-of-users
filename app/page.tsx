import Link from "next/link";

import { Button } from "components";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <main className={styles.main}>
      <Link href={"/employees"}>
        <Button colorScheme="whatsapp" size={"lg"}>
          View an employees
        </Button>
      </Link>
    </main>
  );
};

export default App;
