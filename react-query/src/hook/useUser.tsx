import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, getUsers } from "../api/user";

const key = "users";

export const useGetUsers = () => {
  return useQuery([key], getUsers);
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(createUser, {
    onSuccess: (user: User) => {
      queryClient.setQueryData([key], (prevUsers: User[] | undefined) =>
        prevUsers ? [user, ...prevUsers] : [user]
      );

      // queryClient.invalidateQueries([key])      // q
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: (id) => {
      queryClient.setQueryData(
        [key],
        (prevUsers: User[] | undefined) =>
          prevUsers ? prevUsers.filter((user) => user.id !== id) : prevUsers
        // queryClient.invalidateQueries([key])
      );
    },
  });
};
