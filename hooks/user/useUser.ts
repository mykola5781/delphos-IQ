import { useMemo, useState } from "react";
import userData from "static/user.json";

type User = {
  id: number;
  name: string;
  age: number;
  role: string;
};

const useUser = (filter?: string, sortBy?: string, sortOrder?: number) => {
  const userList: User[] = userData.content;
  const data: User[] = useMemo(() => {
    return userList
      .filter((user: User) => {
        return filter
          ? user.name.toLowerCase().includes(filter.toLowerCase())
          : true;
      })
      .sort((a, b) => {
        return sortBy && sortOrder
          ? (a as any)[sortBy] > (b as any)[sortBy]
            ? sortOrder
            : sortOrder * -1
          : 0;
      });
  }, [filter, sortBy, sortOrder]);

  return data;
};

export default useUser;
