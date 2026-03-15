import { TextBlockType } from "./textBlock";
import { TableBlockType } from "./tableBlock";
import { ImageBlockType } from "./imageBlock";

export type Block = 
| TextBlockType
| TableBlockType
| ImageBlockType