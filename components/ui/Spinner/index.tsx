import { Spinner as ChakraSpinner, Center } from "@chakra-ui/react";

import styles from "./styles.module.scss";

const Spinner: React.FC = () => {
  return (
    <Center className={styles.loader}>
      <ChakraSpinner
        size={"xl"}
        thickness="2px"
        speed="0.5s"
        emptyColor="gray.200"
        color="blue.600"
      />
    </Center>
  );
};

export default Spinner;
