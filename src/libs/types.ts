export function typedName<T extends string>(name: T): T {
  return name;
}

export function dotPrefixer<A extends string>(
  prefix: A
): <B extends string>(name: B) => `${A}.${B}` {
  return (name) => `${prefix}.${name}`;
}
