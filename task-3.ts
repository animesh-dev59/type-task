type Role = "Admin" | "Manager" | "Employee";

interface Employee {
  id: number;
  name: string;
  role: Role;
}

function getPermissions(role: Role): string[] {
  switch (role) {
    case "Admin":
      return ["Manage Users", "Manage Products", "View Reports"];
    case "Manager":
      return ["Manage Products", "View Reports"];
    case "Employee":
      return ["View Products"];
    default:
      return [];
  }
}

const employee: Employee = {
  id: 1,
  name: "Rahim",
  role: "Manager"
};

const permissions = getPermissions(employee.role);
const permissionsStr = permissions.join(", ");

console.log(`Name: ${employee.name} | Role: ${employee.role} | Permissions: ${permissionsStr}`);