import { Column, Table } from "components";
import { useUser } from "hooks";
import { useState } from "react";

interface TableProps {}

const columns: Column[] = [
  {
    id: 1,
    name: "name",
    label: "Name",
  },
  {
    id: 2,
    name: "age",
    label: "Age",
  },
  {
    id: 3,
    name: "role",
    label: "Role",
  },
];

const UserTable: React.FC<TableProps> = () => {
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<number>(1);
  const data = useUser(filter, sortBy, sortOrder);

  const onClickCol = (name: string) => {
    if (!setSortBy || !setSortOrder) return;
    if (sortBy === "") return setSortBy(name);
    if (name === sortBy) return setSortOrder((c: number) => c * -1);
    if (name !== sortBy) {
      setSortBy(name);
      setSortOrder(1);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input name="filter" value={filter} onChange={onChange} />
      <Table {...{ columns, onClickCol }} rows={data} />
    </div>
  );
};

export default UserTable;
