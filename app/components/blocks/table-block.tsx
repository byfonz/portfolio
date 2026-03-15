
import { tableHelper } from "@/lib/table-helper";
import { DataTable } from "../tables/data-table";
import { TableBlockType } from "@/types/tableBlock";
interface Props {
    block: TableBlockType
}

export function TableBlock({ block }: Props) {
    const { columns, data } = tableHelper(block.table);

    if (!columns.length) {
        return null
    };

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
}