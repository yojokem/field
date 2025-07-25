import { Column, Entity, JoinTable } from "typeorm";
import { Fence } from "../../Fence";
import { Address, AddressHolder } from "../Address";

@Entity({name: "identity"})
export class Identity extends Fence implements AddressHolder {
    @Column()
    fullname: string;

    @Column()
    @JoinTable()
    resiRegAbs: Address[]; //주민 등록 초본

    id() {
        return "[ID] " + this.fid + "―" + this.fullname + "|" + this.uid;
    }
}