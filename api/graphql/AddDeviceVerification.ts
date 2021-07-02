import { objectType } from "nexus";

export const AddDeviceVerification = objectType({
  name: "AddDeviceVerification",
  definition(t) {
    t.string("verificationMessage", { nullable: true });
  },
});
