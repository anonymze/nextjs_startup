/**
 * @description pause the thread for a given time
 */
export const sleep = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

/**
 * @description correctly type Object.keys
 */
export const ObjectKeysTyped = Object.keys as <T extends object>(
  obj: T,
) => Array<keyof T>;


/**
 * @description a text replacer which return a string with %s replaced by your values in order
 */
export const sprintf = (str: string, ...args: string[]) => {
  return args.reduce((acc, curr) => acc.replace(/%s/, curr), str);
};
