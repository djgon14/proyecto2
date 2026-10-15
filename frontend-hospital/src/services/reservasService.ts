const STORAGE_KEY = "hourlySchoolReservations";

export function getReservations<T = unknown>(): T[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as T[];
  } catch {
    return [];
  }
}

export function saveReservations<T>(reservations: T[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
}
