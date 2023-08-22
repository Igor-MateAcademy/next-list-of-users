import Link, { LinkProps } from "next/link";

import { ArrowBackIcon } from "@chakra-ui/icons";

import { Button } from "components";

import styles from "./styles.module.scss";

const Back: React.FC<LinkProps> = ({ ...props }) => {
  return (
    <Link {...props} className={styles.back}>
      <Button>
        <ArrowBackIcon />
      </Button>
    </Link>
  );
};

export default Back;
