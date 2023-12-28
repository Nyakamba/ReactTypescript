import { useParams } from "react-router-dom";
import { useDeleteUser } from "../hook/useUser";
import { User } from "../api/interface";

export const EditUser = () => {
  const params = useParams();

  const { id } = params;

  if (!id) return null;

  return (
    <>
      <DeleteUser id={+id} />
    </>
  );
};

export const DeleteUser = ({ id }: Pick<User, "id">) => {
  const delete_user = useDeleteUser();

  const onDelete = async () => {
    await delete_user.mutateAsync(id);
  };

  return (
    <>
      {delete_user.isLoading && <span>deleting user...</span>}

      <button onClick={onDelete}>Delete User</button>

      {delete_user.isSuccess && (
        <span>User deleted successfully ✅, go back home</span>
      )}
      {delete_user.isError && <span>Ups! it was an error 🚨</span>}
    </>
  );
};
