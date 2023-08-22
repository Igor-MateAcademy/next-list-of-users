import type { Metadata } from "next";

import { EmployeeDetails, Back, Button } from "components";

interface Props {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `Employee | ${params.id}`,
  };
};

const EmployeeInfo = ({ params: { id } }: Props) => {
  return (
    <>
      <Back href={"/employees"} />

      <EmployeeDetails
        id={id}
        deleteButton={
          <Button colorScheme="red" variant="outline">
            Delete
          </Button>
        }
      />
    </>
  );
};

export default EmployeeInfo;
