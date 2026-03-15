import { TableItemType } from "./table-item";

export type TableBlockType = {
  _key: string;
  _type: "tableBlock";
  table: TableItemType;
}