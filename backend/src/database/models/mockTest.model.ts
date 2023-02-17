import pkg from "mongoose";
import { IMockTest } from "../../types/interfaces";
import MockTestSchema from "../schemas/mockTest.schema";
const { model } = pkg;

const MockTest = model<IMockTest>("MockTest", MockTestSchema);

export default MockTest;
