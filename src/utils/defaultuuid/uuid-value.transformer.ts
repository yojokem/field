import { ValueTransformer } from "typeorm";

class UuidValueTransformer implements ValueTransformer {
  public to(uuid: string | undefined | null): Buffer | null {
    return uuid ? Buffer.from(uuid.replace(/-/g, ""), "hex") : null;
  }

  public from(bin: Buffer | undefined | null): string | null {
    return bin
      ? `${bin.toString("hex", 0, 4)}-${bin.toString(
          "hex",
          4,
          6
        )}-${bin.toString("hex", 6, 8)}-${bin.toString(
          "hex",
          8,
          10
        )}-${bin.toString("hex", 10, 16)}`
      : null;
  }
}

export const uuidValueTransformer = new UuidValueTransformer();
