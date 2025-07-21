import { Column, PrimaryColumn } from "typeorm";
import { uuidValueTransformer } from "./utils/defaultuuid/uuid-value.transformer";

export const PrimaryGeneratedBinaryUuidColumn = (): ReturnType<typeof PrimaryColumn> =>
    PrimaryColumn({
        type: "binary",
        length: 16,
        generated: false,
        transformer: uuidValueTransformer,
        default: () => "UNHEX(REPLACE(UUID(), '-', ''))",
    });

export const BinaryUuidColumn = (name?: string): ReturnType<typeof Column> =>
    Column({
        type: "binary",
        name,
        length: 16,
        generated: false,
        transformer: uuidValueTransformer,
        unique: false,
    });

export const BinaryUUuidColumn = (name?: string): ReturnType<typeof Column> =>
    Column({
        type: "binary",
        name,
        length: 16,
        generated: false,
        transformer: uuidValueTransformer,
        unique: true,
    });

// Thanks to git@mkfyi | 정말 존나 고맙습니다.

export const SectionColumn = (): ReturnType<typeof Column> =>
    Column({
        type: "varchar",
        name: "section",
        length: 5,
        generated: false,
        unique: false,
        nullable: false
    })