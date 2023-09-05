import BaseEntity from "@/types/baseEntity";

export default interface BaseAuditableEntity extends BaseEntity {
    createdAt: Date;
    updatedAt: Date;
}