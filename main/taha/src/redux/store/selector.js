import { get } from "lodash/fp";

//General
export const selectorPublicData = get(["general", "publicData"]);
export const selectorUserData = get(["user", "userData"]);
