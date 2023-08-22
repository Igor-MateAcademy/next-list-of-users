import { EmployeesList, Back } from "components";

const Employees: React.FC = () => {
  return (
    <>
      <Back href={"/"} />

      <EmployeesList />
    </>
  );
};

export default Employees;
