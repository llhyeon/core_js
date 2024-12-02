let unknownValue: unknown;

if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
} else if (typeof unknownValue === "string") {
  unknownValue.toUpperCase();
} else if (unknownValue instanceof Date) {
  unknownValue.getTime();
} else if (unknownValue instanceof HTMLElement) {
  unknownValue.nextElementSibling;
}
