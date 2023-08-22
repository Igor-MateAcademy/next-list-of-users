"use client";

import { useRouter } from "next/navigation";

import { Card, CardHeader, CardBody, Heading, Box } from "@chakra-ui/react";

import { useUsers } from "fetchers/users";

import styles from "./styles.module.scss";

const EmployeesList = () => {
  const router = useRouter();

  const { data: users = [], error, isLoading } = useUsers();

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <Card
          key={user.id}
          variant="outline"
          onClick={() => router.push(`/employees/${user.id}`)}
        >
          <CardHeader>
            <Heading size="md">{user.name}</Heading>
          </CardHeader>

          <CardBody>
            <Box>{user.email}</Box>

            <Box>{`${user.address.street}, ${user.address.city}`}</Box>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default EmployeesList;
