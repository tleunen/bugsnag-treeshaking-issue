import { createNoop } from "./bugsnag";

const noop = createNoop();

noop.setContext("yolo");
