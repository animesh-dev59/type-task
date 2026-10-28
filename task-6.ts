interface User {
  id: number;
  name: string;
  address?: {
    city?: string;
  };
}

function isUser(payload: unknown): payload is User {
  if (typeof payload === "object" && payload !== null) {
    const obj = payload as Record<string, unknown>;
    return typeof obj.id === "number" && typeof obj.name === "string";
  }
  return false;
}

function parseUserData(payload: unknown): string {
  if (isUser(payload)) {
    const cityName = payload.address?.city ?? "Unknown City";
    return `User: ${payload.name} | City: ${cityName}`;
  }
  return "Invalid user data";
}

const user1: unknown = { id: 1, name: "Rahim", address: { city: "Moulvibazar" } };
const user2: unknown = { id: 2, name: "Karim", address: {} };
const user3: unknown = { id: "invalid_id", name: 123 };

const result1 = parseUserData(user1);
const result2 = parseUserData(user2);
const result3 = parseUserData(user3);

console.log(`${result1}; ${result2}; ${result3}`);