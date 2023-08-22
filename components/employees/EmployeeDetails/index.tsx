"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { useSWRConfig } from "swr";

import { Box, Avatar, HStack, VStack } from "@chakra-ui/react";

import { useUser, UserRequestKeys, deleteUser } from "fetchers";

interface Props {
  id: string;
  deleteButton: React.ReactNode;
}

const EmployeeDetails: React.FC<Props> = ({ id, deleteButton }) => {
  const { data: user } = useUser(id);
  const { mutate } = useSWRConfig();

  const router = useRouter();

  const handleOnDeleteUser = () => {
    try {
      mutate([UserRequestKeys.ALL], deleteUser(id));

      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {user && (
        <>
          <Box borderWidth="1px" borderRadius="lg" padding={"4"} mb={4}>
            <HStack spacing={"8"}>
              <Avatar name={user.name} />

              <HStack align={"start"} spacing={8} justifyContent={"stretch"}>
                <VStack align={"start"}>
                  <Box>{user.name}</Box>

                  <Box>{user.email}</Box>

                  <Box>{user.phone}</Box>
                </VStack>

                <VStack align={"start"}>
                  <Box>{user.company.name}</Box>

                  <Box>{user.company.catchPhrase}</Box>
                </VStack>
              </HStack>
            </HStack>
          </Box>

          {React.cloneElement(deleteButton as React.ReactElement, {
            onClick: handleOnDeleteUser,
          })}
        </>
      )}
    </>
  );
};

export default EmployeeDetails;
