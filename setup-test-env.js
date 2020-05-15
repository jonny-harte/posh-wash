// eslint-disable-next-line import/no-extraneous-dependencies
import { createSerializer } from "jest-emotion"
import * as emotion from "@emotion/core"
// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom/extend-expect"

expect.addSnapshotSerializer(createSerializer(emotion))
