import { readFile } from "fs/promises";

export const appName = "AmbleLabs Wiki";
export const docsRoute = "/";
export const docsImageRoute = "/og";
export const docsContentRoute = "/llms.mdx";
export const ogColor = "#ad5602";
export const ogBackgroundColor = "#452201";
export const ogTextColor = "#e67300";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "amblelabs",
  repo: "wiki",
  branch: "main",
};

type OgArg = {
  short: string;
  name: string;
  iconType: "png" | "webp";
};

type OgData = {
  short: string;
  name: string;
  data: Buffer;
};

const makeOg: (arg: OgArg) => Promise<OgData> = async ({
  name,
  short,
  iconType,
}) => {
  return {
    name,
    short,
    data: await readFile("./public/" + short + "." + iconType),
  };
};

export const ogData = {
  ait: await makeOg({
    short: "ait",
    name: "Adventures in Time",
    iconType: "webp",
  }),
  common: await makeOg({ short: "logo", name: "Common", iconType: "png" }),
};

export const ogFallback = ogData.common;
